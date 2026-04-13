import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { getRecipient } from "@/config/form-recipients";
import { getTemplates, type FormSubmission } from "@/lib/email-templates";

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as FormSubmission;
    const { formId, name, email, message } = body;

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

    // Look up recipient(s) and templates from the centralized config
    const recipient = getRecipient(formId);
    const { adminTemplate, customerTemplate } = getTemplates(formId);

    // Render both emails
    const adminSubject = adminTemplate.subject(body);
    const adminHtml = adminTemplate.html(body);
    const customerSubject = customerTemplate.subject(body);
    const customerHtml = customerTemplate.html(body);

    // Dev mode — log only when no API key configured
    if (!apiKey) {
      console.warn(
        "[business-enquiry] RESEND_API_KEY not set — logging submission only"
      );
      console.log({
        formId,
        recipient,
        admin: { to: recipient.to, subject: adminSubject },
        customer: { to: email, subject: customerSubject },
        body,
      });
      return NextResponse.json({ ok: true, dev: true });
    }

    const resend = new Resend(apiKey);

    // Send admin notification
    const adminResult = await resend.emails.send({
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
      subject: adminSubject,
      html: adminHtml,
    });

    if (adminResult.error) {
      console.error("[business-enquiry] Admin email error:", adminResult.error);
      return NextResponse.json(
        { error: "Failed to send admin notification" },
        { status: 500 }
      );
    }

    // Send customer confirmation (don't fail the request if this errors —
    // the admin already got the message, which is the critical path)
    const customerResult = await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: customerSubject,
      html: customerHtml,
    });

    if (customerResult.error) {
      console.error(
        "[business-enquiry] Customer confirmation error:",
        customerResult.error
      );
      // Still return success — admin got the enquiry
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
