"use client";

import { LandingPageLayout } from '../../components/LandingPageLayout';
import { DollarSign, ShieldCheck, TrendingUp, Users } from 'lucide-react';

export default function Page() {
  const content = (
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <div className="order-2 md:order-1 relative h-[400px] bg-zinc-200 rounded-[2rem] overflow-hidden shadow-lg border border-white/20">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/10_ForSellers/prove-your-cars-value.png"
          alt="Prove your car's value"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="order-1 md:order-2 space-y-6">
        <h2 className="text-4xl font-light mb-6">Prove Your Car's Value</h2>
        <p className="text-lg text-zinc-600 leading-relaxed">
          Buyers are terrified of degraded batteries. If you can't prove your battery is healthy, they will assume the worst and offer less.
        </p>
        <p className="text-lg text-zinc-600 leading-relaxed">
          An EV360 Certified Health Report is the "Building & Pest" report for your car. It removes doubt, builds trust instantly, and justifies your asking price.
        </p>
        <div className="bg-[var(--brand-primary)]/5 p-6 rounded-xl border border-[var(--brand-primary)]/10">
          <p className="text-zinc-900 font-medium">
            "I sold my Model 3 for $2,500 above market average simply because I had the battery report to prove it had 96% health."
          </p>
          <p className="text-[var(--brand-primary)] text-sm mt-2">- Sarah K., Sydney</p>
        </div>
      </div>
    </div>
  );

  return (
    <LandingPageLayout
      title="Sell Your EV Faster & For More"
      subtitle="The #1 question every buyer asks is 'How is the battery?'. Answer it with authority using an independent EV360 Health Certificate."
      heroImage="/assets/10_ForSellers/sell-your-ev-faster-for-more.png"
      audience="Sellers"
      benefits={[
        {
          title: "Command Higher Prices",
          description: "Justify a premium price by proving your battery has been well-maintained and has high remaining capacity.",
          icon: DollarSign
        },
        {
          title: "Sell Faster",
          description: "Listings with verified battery health reports get more inquiries and close faster than those without.",
          icon: TrendingUp
        },
        {
          title: "Total Transparency",
          description: "Build immediate trust with potential buyers by being upfront about the most critical component of the car.",
          icon: ShieldCheck
        }
      ]}
      ctaText="Get Certified"
      ctaLink="/booking"
      content={content}
      proofImage="/assets/selling/proof-you-need.png"
    />
  );
}
