/**
 * Form Recipients Configuration
 * ================================
 * Edit this file to control where each form's submissions are emailed.
 *
 * - `to`     — primary recipient(s). Required.
 * - `cc`     — optional CC recipients.
 * - `bcc`    — optional BCC recipients.
 * - `label`  — friendly name shown in the email subject.
 *
 * All fields accept either a single email string or an array of emails.
 *
 * To add a new form, add a new entry below using the form's unique `formId`
 * (defined in the form component) as the key.
 */

export interface FormRecipient {
  label: string;
  to: string | string[];
  cc?: string | string[];
  bcc?: string | string[];
}

export const formRecipients: Record<string, FormRecipient> = {
  // Contact page — general enquiries
  "form-contact": {
    label: "General Contact",
    to: ["jgetalada@motoronecx.com", "joffgetalada@gmail.com"],
  },

  // Business landing pages
  "form-fleet": {
    label: "Fleet Managers",
    to: "jgetalada@motoronecx.com",
  },

  "form-dealership": {
    label: "Dealerships",
    to: "jgetalada@motoronecx.com",
  },

  "form-insurance": {
    label: "Insurers",
    to: "jgetalada@motoronecx.com",
  },

  "form-property": {
    label: "Strata & Property",
    to: "jgetalada@motoronecx.com",
  },
};

/**
 * Fallback recipient when a form ID is not found in the map above.
 * Set this to a catch-all inbox so no submission is ever lost.
 */
export const fallbackRecipient: FormRecipient = {
  label: "Unknown Form",
  to: "jgetalada@motoronecx.com",
};

/**
 * Helper — looks up a recipient by formId, falling back to the default.
 */
export function getRecipient(formId: string | undefined): FormRecipient {
  if (formId && formRecipients[formId]) {
    return formRecipients[formId];
  }
  return fallbackRecipient;
}
