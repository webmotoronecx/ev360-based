import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { getRecipient } from "@/config/form-recipients";

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
      subject: messageSubject,
      message,
    } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail =
      process.env.BUSINESS_EMAIL_FROM || "EV360 Website <noreply@ev360.com.au>";

    // Look up recipient(s) from the centralized config
    const recipient = getRecipient(formId);

    const subject = `[${formId || "form-unknown"}] New ${recipient.label} enquiry${company ? ` — ${company}` : ""}`;

    const htmlBody = `
      <div style="font-family: Inter, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #fafafa;">
        <div style="background: #334aff; color: white; padding: 20px 24px; border-radius: 12px 12px 0 0;">
          <h2 style="margin: 0; font-weight: 500;">New Enquiry · ${recipient.label}</h2>
          <p style="margin: 4px 0 0; font-family: monospace; font-size: 12px; opacity: 0.8;">${formId || "form-unknown"}</p>
        </div>
        <div style="background: white; padding: 24px; border-radius: 0 0 12px 12px; border: 1px solid #e4e4e7; border-top: none;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #71717b; width: 140px;">Name</td><td style="padding: 8px 0; color: #18181b; font-weight: 500;">${escapeHtml(name)}</td></tr>
            <tr><td style="padding: 8px 0; color: #71717b;">Email</td><td style="padding: 8px 0;"><a href="mailto:${escapeHtml(email)}" style="color: #334aff;">${escapeHtml(email)}</a></td></tr>
            ${phone ? `<tr><td style="padding: 8px 0; color: #71717b;">Phone</td><td style="padding: 8px 0;"><a href="tel:${escapeHtml(phone)}" style="color: #334aff;">${escapeHtml(phone)}</a></td></tr>` : ""}
            ${company ? `<tr><td style="padding: 8px 0; color: #71717b;">Company</td><td style="padding: 8px 0; color: #18181b;">${escapeHtml(company)}</td></tr>` : ""}
            ${role ? `<tr><td style="padding: 8px 0; color: #71717b;">Job Title</td><td style="padding: 8px 0; color: #18181b;">${escapeHtml(role)}</td></tr>` : ""}
            ${scale ? `<tr><td style="padding: 8px 0; color: #71717b;">Scale</td><td style="padding: 8px 0; color: #18181b;">${escapeHtml(scale)}</td></tr>` : ""}
            ${messageSubject ? `<tr><td style="padding: 8px 0; color: #71717b;">Subject</td><td style="padding: 8px 0; color: #18181b;">${escapeHtml(messageSubject)}</td></tr>` : ""}
          </table>
          <div style="margin-top: 16px; padding-top: 16px; border-top: 1px solid #e4e4e7;">
            <p style="color: #71717b; margin: 0 0 8px; font-size: 14px;">Message</p>
            <p style="color: #18181b; margin: 0; white-space: pre-wrap; line-height: 1.6;">${escapeHtml(message)}</p>
          </div>
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
      console.log({
        formId,
        type,
        recipient,
        name,
        email,
        phone,
        company,
        role,
        scale,
        message,
      });
      return NextResponse.json({ ok: true, dev: true });
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: Array.isArray(recipient.to) ? recipient.to : [recipient.to],
      cc: recipient.cc
        ? Array.isArray(recipient.cc)
          ? recipient.cc
          : [recipient.cc]
        : undefined,
      bcc: recipient.bcc
        ? Array.isArray(recipient.bcc)
          ? recipient.bcc
          : [recipient.bcc]
        : undefined,
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
