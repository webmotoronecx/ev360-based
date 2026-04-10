import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Form IDs identify which landing page the enquiry came from
const FORM_LABELS: Record<string, string> = {
  "form-fleet": "Fleet Managers",
  "form-dealership": "Dealerships",
  "form-insurance": "Insurers",
  "form-property": "Strata & Property",
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      formId,
      type,
      name,
      email,
      phone,
      company,
      role,
      scale,
      message,
    } = body;

    // Basic validation
    if (!name || !email || !company || !phone) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.BUSINESS_EMAIL_TO || "info@ev360.com.au";
    const fromEmail =
      process.env.BUSINESS_EMAIL_FROM || "EV360 Website <noreply@ev360.com.au>";

    const audience = FORM_LABELS[formId] || type || "Unknown";
    const subject = `[${formId || "form-unknown"}] New ${audience} enquiry — ${company}`;

    const htmlBody = `
      <div style="font-family: Inter, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #fafafa;">
        <div style="background: #334aff; color: white; padding: 20px 24px; border-radius: 12px 12px 0 0;">
          <h2 style="margin: 0; font-weight: 500;">New Business Enquiry</h2>
          <p style="margin: 4px 0 0; font-family: monospace; font-size: 12px; opacity: 0.8;">${formId || "form-unknown"} · ${audience}</p>
        </div>
        <div style="background: white; padding: 24px; border-radius: 0 0 12px 12px; border: 1px solid #e4e4e7; border-top: none;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #71717b; width: 140px;">Name</td><td style="padding: 8px 0; color: #18181b; font-weight: 500;">${escapeHtml(name)}</td></tr>
            <tr><td style="padding: 8px 0; color: #71717b;">Email</td><td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}" style="color: #334aff;">${escapeHtml(email)}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #71717b;">Phone</td><td style="padding: 8px 0;"><a href="tel:${escapeHtml(phone)}" style="color: #334aff;">${escapeHtml(phone)}</a></td></tr>
            <tr><td style="padding: 8px 0; color: #71717b;">Company</td><td style="padding: 8px 0; color: #18181b;">${escapeHtml(company)}</td></tr>
            ${role ? `<tr><td style="padding: 8px 0; color: #71717b;">Job Title</td><td style="padding: 8px 0; color: #18181b;">${escapeHtml(role)}</td></tr>` : ""}
            ${scale ? `<tr><td style="padding: 8px 0; color: #71717b;">Scale</td><td style="padding: 8px 0; color: #18181b;">${escapeHtml(scale)}</td></tr>` : ""}
          </table>
          ${
            message
              ? `<div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #e4e4e7;">
                  <p style="color: #71717b; margin: 0 0 8px; font-size: 14px;">Message</p>
                  <p style="color: #18181b; margin: 0; white-space: pre-wrap; line-height: 1.6;">${escapeHtml(message)}</p>
                </div>`
              : ""
          }
          <p style="margin: 24px 0 0; padding-top: 16px; border-top: 1px solid #e4e4e7; font-size: 11px; color: #9f9fa9;">
            Submitted at ${new Date().toISOString()}
          </p>
        </div>
      </div>
    `;

    // If no API key configured, log and return success for dev
    if (!apiKey) {
      console.warn(
        "[business-enquiry] RESEND_API_KEY not set — logging submission only"
      );
      console.log({ formId, type, name, email, phone, company, role, scale, message });
      return NextResponse.json({ ok: true, dev: true });
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject,
      html: htmlBody,
    });

    if (error) {
      console.error("[business-enquiry] Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[business-enquiry] Error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

function escapeHtml(str: string): string {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
