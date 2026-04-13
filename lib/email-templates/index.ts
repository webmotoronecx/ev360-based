/**
 * Email Templates Registry
 * =========================
 * Central registry mapping each formId to its admin + customer email templates.
 *
 * To add a new form's templates:
 *  1. Create a new file in this folder, e.g. `form-newsletter.ts`
 *  2. Export `adminTemplate` and `customerTemplate` from it
 *  3. Import and register it below
 */

import * as formContact from "./form-contact";
import * as formFleet from "./form-fleet";
import * as formDealership from "./form-dealership";
import * as formInsurance from "./form-insurance";
import * as formProperty from "./form-property";

/**
 * Generic shape of any form submission. Templates can read whatever fields
 * they need from this object.
 */
export interface FormSubmission {
  formId?: string;
  type?: string;
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  role?: string;
  scale?: string;
  subject?: string;
  message?: string;
  [key: string]: unknown;
}

/**
 * A single email template — produces a subject line and HTML body
 * from the submitted form data.
 */
export interface EmailTemplate {
  subject: (data: FormSubmission) => string;
  html: (data: FormSubmission) => string;
}

/**
 * Pair of templates for a single form: one for the admin notification,
 * one for the customer confirmation.
 */
export interface FormTemplates {
  adminTemplate: EmailTemplate;
  customerTemplate: EmailTemplate;
}

export const formTemplates: Record<string, FormTemplates> = {
  "form-contact": formContact,
  "form-fleet": formFleet,
  "form-dealership": formDealership,
  "form-insurance": formInsurance,
  "form-property": formProperty,
};

/**
 * Looks up templates for a given formId, falling back to the contact form
 * templates if the formId is unknown.
 */
export function getTemplates(formId: string | undefined): FormTemplates {
  if (formId && formTemplates[formId]) {
    return formTemplates[formId];
  }
  return formContact;
}
