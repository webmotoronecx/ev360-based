/**
 * GHL (GoHighLevel) Forms Configuration
 * ======================================
 * Edit this file to set which GHL form embeds on each page.
 *
 * To get a form's ID and embed details:
 *  1. Log in to your GHL sub-account
 *  2. Go to Sites → Forms → (select your form) → Integrate Form
 *  3. Copy the values from the iframe embed code shown there
 *  4. Paste them into the matching entry below
 *
 * The easiest way is to look at GHL's iframe snippet, which looks like:
 *
 *   <iframe src="https://api.leadconnectorhq.com/widget/form/FORM_ID"
 *     data-form-name="My Form Name"
 *     data-height="600"
 *     ...
 *   ></iframe>
 *
 * Pull FORM_ID, the form name, and the height from that snippet.
 */

export interface GHLFormConfig {
  /** GHL form ID — the long alphanumeric string in the iframe src URL */
  formId: string;
  /** Human-readable name for this form (used as iframe title for accessibility) */
  formName: string;
  /** Initial iframe height in pixels. GHL auto-resizes after load, but this is the starting value. */
  height: number;
  /** Optional — override the iframe src if your GHL instance uses a different domain */
  embedDomain?: string;
}

export const ghlForms: Record<string, GHLFormConfig> = {
  "form-contact": {
    formId: "REPLACE_WITH_GHL_FORM_ID",
    formName: "EV360 Contact Form",
    height: 650,
  },

  "form-fleet": {
    formId: "REPLACE_WITH_GHL_FORM_ID",
    formName: "EV360 Fleet Managers Enquiry",
    height: 700,
  },

  "form-dealership": {
    formId: "REPLACE_WITH_GHL_FORM_ID",
    formName: "EV360 Dealerships Enquiry",
    height: 700,
  },

  "form-insurance": {
    formId: "REPLACE_WITH_GHL_FORM_ID",
    formName: "EV360 Insurers Enquiry",
    height: 700,
  },

  "form-property": {
    formId: "REPLACE_WITH_GHL_FORM_ID",
    formName: "EV360 Strata & Property Enquiry",
    height: 700,
  },
};

/**
 * Default GHL embed domain — change once here if your GHL instance uses a
 * custom domain (white-label GHL setups sometimes do).
 */
export const DEFAULT_GHL_EMBED_DOMAIN = "https://api.leadconnectorhq.com";

/**
 * Helper — looks up a form config by key. Returns null if not configured yet.
 */
export function getGHLForm(formKey: string): GHLFormConfig | null {
  return ghlForms[formKey] || null;
}
