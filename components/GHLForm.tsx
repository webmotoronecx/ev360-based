"use client";

import Script from "next/script";
import { getGHLForm, DEFAULT_GHL_EMBED_DOMAIN } from "@/config/ghl-forms";

interface GHLFormProps {
  /** Key from config/ghl-forms.ts (e.g. "form-contact", "form-fleet") */
  formKey: string;
  /** Optional heading above the form */
  title?: string;
  /** Optional subtitle below the heading */
  subtitle?: string;
  /** Optional extra CSS classes on the wrapper */
  className?: string;
}

/**
 * Embeds a GoHighLevel form by key. Form IDs are configured in
 * config/ghl-forms.ts so you only edit one place to swap forms.
 *
 * GHL auto-injects a resize script that listens for postMessage events
 * from the iframe and adjusts its height dynamically.
 */
export function GHLForm({ formKey, title, subtitle, className = "" }: GHLFormProps) {
  const config = getGHLForm(formKey);

  if (!config) {
    return (
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-amber-800">
        <p className="font-medium mb-1">Form not configured</p>
        <p className="text-sm">
          No GHL form found for key <code className="bg-amber-100 px-1 rounded">{formKey}</code>.
          Add it to <code className="bg-amber-100 px-1 rounded">config/ghl-forms.ts</code>.
        </p>
      </div>
    );
  }

  if (config.formId === "REPLACE_WITH_GHL_FORM_ID") {
    return (
      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 text-amber-800">
        <p className="font-medium mb-1">GHL Form ID not set</p>
        <p className="text-sm">
          Edit <code className="bg-amber-100 px-1 rounded">config/ghl-forms.ts</code> and set
          the <code className="bg-amber-100 px-1 rounded">formId</code> for
          <code className="bg-amber-100 px-1 rounded">&quot;{formKey}&quot;</code>.
        </p>
      </div>
    );
  }

  const embedDomain = config.embedDomain || DEFAULT_GHL_EMBED_DOMAIN;
  const src = `${embedDomain}/widget/form/${config.formId}`;
  const iframeId = `inline-${config.formId}`;

  return (
    <div
      className={`bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-zinc-100 ${className}`}
      id="enquire"
      data-form-key={formKey}
    >
      {(title || subtitle) && (
        <div className="mb-8">
          {title && <h3 className="text-3xl font-light mb-3">{title}</h3>}
          {subtitle && <p className="text-zinc-500">{subtitle}</p>}
        </div>
      )}

      <iframe
        src={src}
        id={iframeId}
        title={config.formName}
        style={{
          width: "100%",
          height: `${config.height}px`,
          border: "none",
          borderRadius: "12px",
        }}
        data-layout={JSON.stringify({ id: "INLINE" })}
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name={config.formName}
        data-height={config.height}
        data-layout-iframe-id={iframeId}
        data-form-id={config.formId}
      />

      <Script
        src="https://link.msgsndr.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
