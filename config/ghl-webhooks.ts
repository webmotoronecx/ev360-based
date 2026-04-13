/**
 * GHL Inbound Webhook URLs
 * =========================
 * Edit this file to set the webhook URL for each form. When a visitor
 * submits a form on the website, we POST the data to the matching
 * webhook URL, which triggers a GHL workflow that creates a contact
 * and sends confirmation/notification emails.
 *
 * How to get a webhook URL:
 *  1. In GHL → Automation → Workflows → Create (or open an existing) workflow
 *  2. Set the trigger to "Inbound Webhook"
 *  3. Click "Copy URL" and paste it below
 *  4. The workflow should then: Create Contact → Add Tag → Send Emails
 *
 * Each form has its own unique webhook URL so each can trigger a
 * different workflow with its own customer and admin email templates.
 */

export interface GHLWebhookConfig {
  /** The Inbound Webhook URL from the GHL workflow trigger */
  url: string;
  /** Human-readable label, used for logging */
  label: string;
}

export const ghlWebhooks: Record<string, GHLWebhookConfig> = {
  "form-contact": {
    label: "Website — Contact Form",
    url: "REPLACE_WITH_GHL_WEBHOOK_URL",
  },

  "form-fleet": {
    label: "Website — Fleet Managers",
    url: "REPLACE_WITH_GHL_WEBHOOK_URL",
  },

  "form-dealership": {
    label: "Website — Dealerships",
    url: "REPLACE_WITH_GHL_WEBHOOK_URL",
  },

  "form-insurance": {
    label: "Website — Insurers",
    url: "REPLACE_WITH_GHL_WEBHOOK_URL",
  },

  "form-property": {
    label: "Website — Strata & Property",
    url: "REPLACE_WITH_GHL_WEBHOOK_URL",
  },
};

/**
 * Helper — looks up a webhook config by formId. Returns null when the
 * formId is unknown or the URL is still the placeholder.
 */
export function getGHLWebhook(
  formId: string | undefined
): GHLWebhookConfig | null {
  if (!formId) return null;
  const entry = ghlWebhooks[formId];
  if (!entry) return null;
  if (entry.url === "REPLACE_WITH_GHL_WEBHOOK_URL") return null;
  return entry;
}
