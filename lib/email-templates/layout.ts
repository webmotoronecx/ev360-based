/**
 * Shared Email Layout
 * ====================
 * Wraps every outgoing email in a consistent branded shell with logo,
 * header, and footer. Edit this file to change the look of ALL emails
 * (admin and customer) at once.
 *
 * Per-form content goes in the individual template files
 * (e.g. lib/email-templates/form-contact.ts).
 */

// Public URL where the logo is hosted. Must be absolute (email clients
// cannot load relative paths). Update this if you change the logo file.
export const LOGO_URL = "https://ev360-based.vercel.app/brand/logo.svg";

// Brand colors used inside the email
export const BRAND = {
  primary: "#334AFF",
  text: "#18181b",
  textMuted: "#52525c",
  textLight: "#9f9fa9",
  background: "#fafafa",
  card: "#ffffff",
  border: "#e4e4e7",
};

interface LayoutOptions {
  preheader?: string; // hidden preview text shown by email clients
  body: string;       // the main HTML content
}

/**
 * Wraps email body content in the branded shell.
 * Uses table-based layout for maximum email client compatibility.
 */
export function emailLayout({ preheader = "", body }: LayoutOptions): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>EV360</title>
</head>
<body style="margin: 0; padding: 0; background: ${BRAND.background}; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
  ${preheader ? `<div style="display: none; max-height: 0; overflow: hidden;">${preheader}</div>` : ""}

  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background: ${BRAND.background}; padding: 32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="600" style="max-width: 600px; width: 100%;">

          <!-- Header with logo -->
          <tr>
            <td style="padding: 24px 0; text-align: center;">
              <img src="${LOGO_URL}" alt="EV360" height="40" style="display: inline-block; height: 40px; width: auto;" />
            </td>
          </tr>

          <!-- Main content card -->
          <tr>
            <td style="background: ${BRAND.card}; border: 1px solid ${BRAND.border}; border-radius: 16px; overflow: hidden;">
              ${body}
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 24px 16px; text-align: center; color: ${BRAND.textLight}; font-size: 12px; line-height: 1.6;">
              <p style="margin: 0 0 8px;">EV360 — Australia's benchmark for EV battery health transparency.</p>
              <p style="margin: 0 0 8px;">
                <a href="https://ev360.com.au" style="color: ${BRAND.primary}; text-decoration: none;">ev360.com.au</a>
                &nbsp;·&nbsp;
                <a href="mailto:hello@ev360.com.au" style="color: ${BRAND.primary}; text-decoration: none;">hello@ev360.com.au</a>
              </p>
              <p style="margin: 8px 0 0; color: ${BRAND.textLight};">© ${new Date().getFullYear()} EV360. All rights reserved.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/**
 * HTML escape — use on any user-submitted field before injecting into templates.
 */
export function escapeHtml(str: unknown): string {
  return String(str ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/**
 * Renders a key/value table for admin emails (full submission details).
 */
export function detailsTable(rows: Array<[string, string | undefined | null]>): string {
  const validRows = rows.filter(([, value]) => value && String(value).trim().length > 0);
  if (validRows.length === 0) return "";

  return `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin: 0;">
      ${validRows
        .map(
          ([label, value]) => `
        <tr>
          <td style="padding: 10px 0; color: ${BRAND.textMuted}; width: 140px; vertical-align: top; font-size: 14px;">${escapeHtml(label)}</td>
          <td style="padding: 10px 0; color: ${BRAND.text}; font-size: 14px; font-weight: 500;">${escapeHtml(value)}</td>
        </tr>
      `
        )
        .join("")}
    </table>
  `;
}
