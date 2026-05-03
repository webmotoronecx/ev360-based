"use client";

import { BusinessEnquiryForm } from '../../components/BusinessEnquiryForm';
import { LandingPageLayout } from '../../components/LandingPageLayout';
import {  ShieldAlert, ClipboardCheck, Lock, FileText } from 'lucide-react';

export default function Page() {
  const content = (
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <div className="space-y-6">
        <h2 className="text-4xl font-light mb-6">Accurate Risk & Value Assessment</h2>
        <p className="text-lg text-zinc-600 leading-relaxed">
          The traditional "Red Book" valuation model doesn't work for EVs because it ignores the battery.
        </p>
        <p className="text-lg text-zinc-600 leading-relaxed">
          A 5-year old EV with 95% SOH is a completely different asset class than one with 75% SOH, yet most insurers treat them the same.
        </p>
        <p className="text-lg text-zinc-600 leading-relaxed">
          We help insurers and finance companies understand the true value and risk profile of the assets they are underwriting.
        </p>
        <ul className="space-y-3 pt-4">
          {[
            "Pre-policy battery health validation",
            "Post-accident battery integrity checks",
            "Fraud prevention (battery swapping detection)",
            "Detailed technical reporting for adjusters"
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <ClipboardCheck className="w-5 h-5 text-[var(--brand-primary)] flex-shrink-0" />
              <span className="text-zinc-800">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative h-[400px] bg-zinc-200 rounded-[2rem] overflow-hidden shadow-lg border border-white/20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/14_Insurers/accurate-risk-value-assessment.png"
          alt="Accurate risk and value assessment"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );

  return (
    <LandingPageLayout
      title="Smarter EV Underwriting & Claims"
      subtitle="Stop guessing. Integrate independent battery health data into your policy pricing and claims workflows for electric vehicles."
      heroImage="/assets/14_Insurers/smarter-ev-underwriting-claims.webp"
      audience="Insurers"
      benefits={[
        {
          title: "Accurate Valuation",
          description: "Price premiums correctly based on the true asset value (battery SOH) rather than just odometer reading.",
          icon: FileText
        },
        {
          title: "Safety Compliance",
          description: "Ensure insured vehicles meet safety standards for thermal stability and battery integrity.",
          icon: ShieldAlert
        },
        {
          title: "Claims Integrity",
          description: "Verify if a battery was damaged in an incident or if it had pre-existing degradation issues.",
          icon: Lock
        }
      ]}
      ctaText="Partner With Us"
      ctaLink="/contact"
      content={content}
      form={<BusinessEnquiryForm type="Insurance" title="EV360 for Insurers & Underwriters" />}
    />
  );
}
