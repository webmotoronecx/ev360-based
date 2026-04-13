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
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { formId, name, email, message } = body;

    // Basic validation
    if (!name || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const webhook = getGHLWebhook(formId);

    // Dev mode — no webhook configured yet
    if (!webhook) {
      console.warn(
        `[form-submit] No GHL webhook configured for formId "${formId}" — logging submission only`
      );
      console.log({ formId, body });
      return NextResponse.json({ ok: true, dev: true });
    }

    // Forward the submission to GHL
    const ghlResponse = await fetch(webhook.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formId,
        formLabel: webhook.label,
        submittedAt: new Date().toISOString(),
        ...body,
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
