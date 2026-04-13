"use client";

import { GHLForm } from '../../components/GHLForm';
import { LandingPageLayout } from '../../components/LandingPageLayout';
import {  ShieldCheck, Award, Zap, Building } from 'lucide-react';

export default function Page() {
  const content = (
    <div className="grid md:grid-cols-2 gap-16 items-center">
       <div className="space-y-6">
        <h2 className="text-4xl font-light mb-6">Build Trust, Sell More Inventory</h2>
        <p className="text-lg text-zinc-600 leading-relaxed">
          The number one objection from used EV buyers is "range anxiety" and fear of battery replacement costs.
        </p>
        <p className="text-lg text-zinc-600 leading-relaxed">
          By certifying every EV on your lot with an EV360 report, you proactively address these fears. You turn a potential negative into your strongest sales tool.
        </p>
        <h3 className="text-xl font-medium mt-4">Why Partner With Us?</h3>
        <ul className="space-y-3">
          {[
            "Bulk pricing for inventory certification",
            "Co-branded certificates with your dealership logo",
            "Fast 24-hour turnaround on-site",
            "Sales training for your staff on interpreting reports"
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-3">
              <Award className="w-5 h-5 text-[var(--brand-primary)] flex-shrink-0" />
              <span className="text-zinc-800">{item}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="relative h-[400px] bg-zinc-200 rounded-[2rem] overflow-hidden shadow-lg border border-white/20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/13_Dealerships/build-trust-sell-more-inventory.png"
          alt="Build trust, sell more inventory"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );

  return (
    <LandingPageLayout
      title="Turn Inventory Faster with Certified EVs"
      subtitle="Eliminate buyer hesitation. Certify your used EV stock with independent battery health reports and command premium market prices."
      heroImage="/assets/13_Dealerships/turn-inventory-faster-with-certified-evs.jpeg"
      audience="Dealerships"
      benefits={[
        {
          title: "Premium Margins",
          description: "Certified Pre-Owned (CPO) programs consistently deliver higher margins. Add a battery certificate to every sale.",
          icon: Zap
        },
        {
          title: "Reduce Liability",
          description: "Avoid post-sale disputes about range or battery condition by documenting health at the time of sale.",
          icon: ShieldCheck
        },
        {
          title: "Brand Trust",
          description: "Position your dealership as the transparent, expert choice for used electric vehicles in your area.",
          icon: Building
        }
      ]}
      ctaText="Contact Sales Team"
      ctaLink="/contact"
      secondaryCtaText="View Sample Report"
      secondaryCtaLink="/sample-report"
      content={content}
      form={<GHLForm formKey="form-dealership" title="Partner with EV360 Dealership Solutions" subtitle="Fill out the form below and our dedicated business team will contact you shortly." />}
    />
  );
}
