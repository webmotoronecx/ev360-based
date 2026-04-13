/**
 * Email Templates — form-insurance
 * ==================================
 * Insurers landing page enquiries.
 */

import { emailLayout, escapeHtml, detailsTable, BRAND } from "./layout";
import type { EmailTemplate } from "./index";

export const adminTemplate: EmailTemplate = {
  subject: (data) =>
    `[form-insurance] New Insurance enquiry${data.company ? ` — ${data.company}` : ""}`,

  html: (data) =>
    emailLayout({
      preheader: `New insurance enquiry from ${data.company || data.name || "a visitor"}`,
      body: `
        <div style="background: ${BRAND.primary}; color: white; padding: 24px 32px;">
          <h2 style="margin: 0; font-weight: 500; font-size: 22px;">New Insurance Enquiry</h2>
          <p style="margin: 4px 0 0; font-family: monospace; font-size: 12px; opacity: 0.85;">form-insurance</p>
        </div>
        <div style="padding: 32px;">
          <p style="margin: 0 0 16px; color: ${BRAND.text}; font-size: 16px;">
            An insurer has submitted an enquiry on the website.
          </p>
          ${detailsTable([
            ["Name", data.name],
            ["Email", data.email],
            ["Phone", data.phone],
            ["Company", data.company],
            ["Job Title", data.role],
            ["Policies / Claims p.a.", data.scale],
          ])}
          ${
            data.message
              ? `<div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid ${BRAND.border};">
                  <p style="margin: 0 0 8px; color: ${BRAND.textMuted}; font-size: 14px;">Message</p>
                  <p style="margin: 0; color: ${BRAND.text}; white-space: pre-wrap; line-height: 1.6;">${escapeHtml(data.message)}</p>
                </div>`
              : ""
          }
          <p style="margin: 24px 0 0; padding-top: 16px; border-top: 1px solid ${BRAND.border}; font-size: 11px; color: ${BRAND.textLight};">
            Submitted at ${new Date().toISOString()} · Reply directly to this email to respond.
          </p>
        </div>
      `,
    }),
};

export const customerTemplate: EmailTemplate = {
  subject: () => "Thank you for your enquiry — EV360",

  html: (data) =>
    emailLayout({
      preheader: "We've received your enquiry and will be in touch soon.",
      body: `
        <div style="padding: 40px 32px;">
          <h2 style="margin: 0 0 16px; color: ${BRAND.text}; font-weight: 300; font-size: 28px;">
            Thank you for contacting EV360
          </h2>
          <p style="margin: 0 0 16px; color: ${BRAND.textMuted}; font-size: 16px; line-height: 1.6;">
            Hi ${escapeHtml(data.name?.split(" ")[0] || "there")},
          </p>
          <p style="margin: 0 0 16px; color: ${BRAND.textMuted}; font-size: 16px; line-height: 1.6;">
            Thank you for your interest in EV360's underwriting and claims solutions.
            Our team will review your enquiry and be in touch within 24 hours to
            discuss how independent battery health data can support your workflows.
          </p>
          <p style="margin: 24px 0 0; color: ${BRAND.textMuted}; font-size: 16px; line-height: 1.6;">
            Warm regards,<br />
            <strong style="color: ${BRAND.text};">EV360 Team</strong>
          </p>
        </div>
      `,
    }),
};
