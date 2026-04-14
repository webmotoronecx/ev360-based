import { NextRequest, NextResponse } from "next/server";
import { getGHLWebhook } from "@/config/ghl-webhooks";

/**
 * Receives form submissions from the website and forwards them to the
 * matching GHL inbound webhook URL (configured in config/ghl-webhooks.ts).
 *
 * GHL handles everything downstream:
 *  - Creating/updating the contact
 *  - Tagging and adding to the right pipeline
 *  - Sending confirmation email to the customer
 *  - Sending notification email/SMS to the EV360 team
 *
 * Spam protection layers (before forwarding to GHL):
 *  1. Honeypot field — bots fill a hidden "website" input; rejected silently
 *  2. Time-to-fill — forms submitted in < 2 seconds are almost certainly bots
 *  3. Server-side validation — reject malformed emails, too-short messages, etc.
 */

// Minimum time (ms) a real human takes to fill the form
const MIN_FORM_FILL_MS = 2000;

// Basic email format check
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { formId, name, email, message, website, elapsed } = body;

    // ----- Spam filter 1: honeypot -----
    // Humans can't see/fill this field. If it has a value, it's a bot.
    // Return success silently so the bot thinks it worked and stops retrying.
    if (website && String(website).trim().length > 0) {
      console.warn(`[spam] Honeypot triggered (formId: ${formId})`);
      return NextResponse.json({ ok: true });
    }

    // ----- Spam filter 2: time-to-fill -----
    // Bots fill forms in milliseconds; humans take at least a few seconds.
    if (typeof elapsed === "number" && elapsed < MIN_FORM_FILL_MS) {
      console.warn(
        `[spam] Form submitted too fast (${elapsed}ms) (formId: ${formId})`
      );
      return NextResponse.json({ ok: true });
    }

    // ----- Validation -----
    if (!name || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    if (typeof name !== "string" || name.trim().length < 2 || name.length > 100) {
      return NextResponse.json({ error: "Invalid name" }, { status: 400 });
    }

    if (typeof email !== "string" || !EMAIL_REGEX.test(email) || email.length > 200) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    if (message && (typeof message !== "string" || message.length > 5000)) {
      return NextResponse.json({ error: "Message too long" }, { status: 400 });
    }

    // Strip honeypot and elapsed from forwarded payload
    const { website: _hp, elapsed: _el, ...cleanBody } = body;

    const webhook = getGHLWebhook(formId);

    // Dev mode — no webhook configured yet
    if (!webhook) {
      console.warn(
        `[form-submit] No GHL webhook configured for formId "${formId}" — logging submission only`
      );
      console.log({ formId, body: cleanBody });
      return NextResponse.json({ ok: true, dev: true });
    }

    // Forward the cleaned submission to GHL
    const ghlResponse = await fetch(webhook.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formId,
        formLabel: webhook.label,
        submittedAt: new Date().toISOString(),
        ...cleanBody,
      }),
    });

    if (!ghlResponse.ok) {
      const errorText = await ghlResponse.text().catch(() => "");
      console.error(
        `[form-submit] GHL webhook failed (${ghlResponse.status}):`,
        errorText
      );
      return NextResponse.json(
        { error: "Failed to forward submission" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[form-submit] Error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
