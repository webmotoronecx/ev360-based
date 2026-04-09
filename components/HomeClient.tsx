"use client";

import { CheckCircle, ShieldCheck, Users, Award, ArrowUpRight, Zap, Battery, CarFront } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import Link from "next/link";
import { ScrollProgress } from '@/components/ScrollProgress';
import { AnimatedCounter } from '@/components/AnimatedCounter';
import { TiltCard } from '@/components/TiltCard';
import { ParticleBackground } from '@/components/GridBackground';
import { ReportPreview } from '@/components/ReportPreview';
import { Footer } from '@/components/Footer';
import { EditorialCard } from '@/components/EditorialCard';
import { ReviewCard } from '@/components/ReviewCard';
import { TrustedTechnology } from '@/components/TrustedTechnology';
import { BusinessSolutions } from '@/components/BusinessSolutions';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { Hero } from '@/components/Hero';

const technicianImage = '/assets/1b2b252267a47a3c99ef04d3de02f27d219c9150.png';
const mobileVanImage = '/assets/211ec73fe84f24f3614d7848ac8db046247d62f7.png';
const batteryValueImage = '/assets/22eb057b3bbdadb4a8847fef1f98c5cd56dd25b2.png';
const reportImage = '/assets/f82e310949ec251e9d18c8d2dff33e9d24a0cc54.png';

export function HomeClient() {
  const [activeProblem, setActiveProblem] = useState(0);

  const educationCards = [
    {
      image: "https://images.unsplash.com/photo-1692052664566-477579a08e8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHZlaGljbGUlMjBkcml2ZXdheSUyMGhvbWV8ZW58MXx8fHwxNzY0MDY4NjY4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      title: "What State of Health (SOH) Means",
      description: "Understanding battery SOH is crucial for knowing your EV&apos;s true condition and remaining value."
    },
    {
      image: batteryValueImage,
      title: "How Battery Health Affects EV Value",
      description: "Learn why battery health is the single most important factor in determining an electric vehicle&apos;s resale value."
    },
    {
      image: "https://images.unsplash.com/photo-1738101001619-f0fd42ceafb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJpYyUyMHZlaGljbGUlMjBvZmZpY2UlMjBwYXJraW5nfGVufDF8fHx8MTc2NDA2ODY2OXww&ixlib=rb-4.1.0&q=80&w=1080",
      title: "EV Battery Myths (Debunked)",
      description: "Separating fact from fiction when it comes to electric vehicle battery degradation and longevity."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />

      {/* Hero */}
      <Hero />

      {/* Content Wrapper - scrolls over hero */}
      <div className="relative z-10 bg-white">

      {/* Core Solutions - Precision Grid */}
      <section className="py-24 bg-[#080808] relative overflow-hidden" data-nav-theme="dark">
        {/* Cinematic Lighting */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[400px] bg-[var(--brand-primary)]/10 rounded-full blur-[120px] pointer-events-none opacity-50" />

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12">

          <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-2">
                Select your path.
              </h2>
              <p className="text-zinc-500 text-lg">
                Specialized diagnostic workflows for every stage of ownership.
              </p>
            </motion.div>

            <motion.div
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="hidden md:flex gap-2"
            >
              <span className="px-3 py-1 rounded-full border border-white/10 text-xs font-mono text-zinc-400 uppercase tracking-widest bg-white/5">
                Verified
              </span>
              <span className="px-3 py-1 rounded-full border border-white/10 text-xs font-mono text-zinc-400 uppercase tracking-widest bg-white/5">
                Independent
              </span>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">

            {/* Buying (Major Feature) */}
            <motion.div
              className="md:col-span-7 relative group rounded-[2rem] overflow-hidden border border-white/10 bg-zinc-900/50 hover:border-[var(--brand-primary)]/50 transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Link href="/buying" className="block h-full w-full">
                <div className="absolute inset-0">
                  <ImageWithFallback
                    src="/assets/hero_buyerspage.png"
                    alt="Pre-Purchase Verification"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
                </div>

                <div className="relative h-full p-8 md:p-12 flex flex-col justify-between z-20">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-full bg-[#334AFF] backdrop-blur-md flex items-center justify-center border border-white/10">
                      <CarFront className="w-6 h-6 text-white" />
                    </div>
                    <div className="px-4 py-2.5 rounded-full bg-[rgba(51,74,255,0.2)] border border-[rgba(51,74,255,0.3)]">
                      <span className="text-[#334AFF] text-xs font-bold uppercase tracking-[0.6px]">For Buyers</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-3xl md:text-5xl font-light text-white mb-4">
                      Pre-Purchase<br/>Verification
                    </h3>
                    <p className="text-zinc-300 text-lg max-w-md mb-8 border-l border-white/20 pl-4">
                      Don&apos;t inherit someone else&apos;s battery problem. Get a 360° health check before you sign.
                    </p>
                    <div className="flex items-center gap-3 text-white group-hover:text-[var(--brand-primary)] transition-colors">
                      <span className="text-sm font-medium uppercase tracking-widest">Start Assessment</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Selling & Diagnostics Column */}
            <div className="md:col-span-5 flex flex-col gap-6 h-full">

              {/* Selling (Medium) */}
              <motion.div
                className="flex-1 relative group rounded-[2rem] overflow-hidden border border-white/10 bg-zinc-900/50 hover:border-[var(--brand-primary)]/50 transition-all duration-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Link href="/selling" className="block h-full w-full">
                  <div className="absolute inset-0">
                    <ImageWithFallback
                      src={reportImage}
                      alt="Selling an EV"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-50 group-hover:opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
                  </div>

                  <div className="relative h-full p-8 flex flex-col justify-between z-20">
                    <div className="flex justify-between items-start">
                      <div className="w-10 h-10 rounded-full bg-[#334AFF] backdrop-blur-md flex items-center justify-center border border-white/10">
                        <Award className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-white/60 text-xs font-mono uppercase tracking-[1.2px]">
                        For Sellers
                      </span>
                    </div>

                    <div>
                      <h3 className="text-2xl md:text-3xl font-light text-white mb-2">
                        Certified Health Report
                      </h3>
                      <p className="text-zinc-400 text-sm mb-4">
                        Prove your battery&apos;s value. Command a higher price.
                      </p>
                      <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center group-hover:bg-[var(--brand-primary)] group-hover:text-white transition-colors">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Diagnostics Grid (2 Small) */}
              <div className="h-[200px] grid grid-cols-2 gap-6">

                {/* Range */}
                <motion.div
                  className="relative group rounded-[2rem] overflow-hidden border border-white/10 bg-zinc-900 hover:bg-zinc-800 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <Link href="/services" className="block h-full w-full p-6 flex flex-col justify-between">
                    <Battery className="w-8 h-8 text-[#334AFF]" />
                    <div>
                      <h4 className="text-white font-medium mb-1">Range Analysis</h4>
                      <p className="text-zinc-500 text-xs">True capacity check</p>
                    </div>
                  </Link>
                </motion.div>

                {/* Warranty */}
                <motion.div
                  className="relative group rounded-[2rem] overflow-hidden border border-white/10 bg-zinc-900 hover:bg-zinc-800 transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <Link href="/services" className="block h-full w-full p-6 flex flex-col justify-between">
                    <ShieldCheck className="w-8 h-8 text-[#334AFF]" />
                    <div>
                      <h4 className="text-white font-medium mb-1">Warranty Audit</h4>
                      <p className="text-zinc-500 text-xs">Before it expires</p>
                    </div>
                  </Link>
                </motion.div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* The Solution - The Report */}
      <section className="py-24 bg-zinc-50 overflow-hidden" data-nav-theme="light">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: The Report Visual */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="/assets/Cert_Mockup.png"
                alt="EV360 Certificate and Battery Health Report"
                className="w-full max-w-[684px] mx-auto"
              />
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight leading-tight text-zinc-900">
                The <span className="text-[var(--brand-primary)] font-medium">EV360 Certificate</span>.
                <br />
                Your battery&apos;s true value, verified.
              </h2>
              <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                Don&apos;t rely on dashboard estimates. Our comprehensive, independent report proves your vehicle&apos;s health with data extracted directly from the Battery Management System (BMS).
              </p>

              <div className="space-y-6 mb-10">
                {[
                  {
                    title: "For Sellers",
                    desc: "Prove your battery health to command a higher resale price.",
                    icon: <Award className="w-5 h-5 text-[var(--brand-primary)]" />
                  },
                  {
                    title: "For Buyers",
                    desc: "Avoid the $15,000 risk of buying an EV with a degraded battery.",
                    icon: <ShieldCheck className="w-5 h-5 text-[#334AFF]" />
                  },
                  {
                    title: "For Owners",
                    desc: "Track degradation over time and catch warranty issues early.",
                    icon: <CheckCircle className="w-5 h-5 text-[#334AFF]" />
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1 p-2 rounded-2xl bg-white border border-zinc-200 shadow-sm shrink-0 h-fit text-[#334AFF]">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-zinc-900 mb-1">{item.title}</h3>
                      <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/booking">
                <button className="px-8 py-3 rounded-full bg-[#334AFF] text-white hover:scale-105 hover:bg-[#4B60FF] transition-all flex items-center font-medium">
                  Get Your Report
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted Technology Section */}
      <TrustedTechnology />

      {/* Customer Reviews Section */}
      <section className="relative py-32 bg-black overflow-hidden" data-nav-theme="dark">
        <ParticleBackground />
        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-light text-white mb-4 tracking-tight">
              Trusted by EV owners across Australia
            </h2>
            <p className="text-lg text-zinc-400">
              Real reviews from real customers
            </p>
          </motion.div>

          {/* Trust Stats */}
          <motion.div
            className="grid grid-cols-3 gap-8 mb-20 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-light text-white mb-2 font-mono">
                <AnimatedCounter end={5.0} duration={2} decimals={1} />
              </div>
              <p className="text-zinc-400 font-mono text-sm uppercase tracking-wider">Star Rating</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-light text-white mb-2 font-mono">
                <AnimatedCounter end={53} duration={2} />
              </div>
              <p className="text-zinc-400 text-sm font-mono uppercase tracking-wider">Google Reviews</p>
            </div>
            <div className="text-center">
              <div className="text-5xl md:text-6xl font-light text-white mb-2 font-mono">
                <AnimatedCounter end={100} duration={2} suffix="%" />
              </div>
              <p className="text-zinc-400 font-mono text-sm uppercase tracking-wider">5-Star Reviews</p>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                location: "Sydney, NSW",
                vehicle: "Tesla Model 3",
                review: "The pre-purchase inspection gave me complete confidence in buying my used EV. The detailed battery report was invaluable during negotiations.",
                rating: 5,
                image: "https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NDA1NjU5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                verified: true
              },
              {
                name: "Michael Roberts",
                location: "Melbourne, VIC",
                vehicle: "Hyundai Ioniq 5",
                review: "Mobile service was incredibly convenient. The technician was professional and explained everything clearly. Highly recommend!",
                rating: 5,
                image: "https://images.unsplash.com/photo-1672685667592-0392f458f46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjQwMTQyNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                verified: true
              },
              {
                name: "Emma Thompson",
                location: "Brisbane, QLD",
                vehicle: "Nissan Leaf",
                review: "After noticing reduced range, the comprehensive check identified the issue and gave me peace of mind about my battery&apos;s health.",
                rating: 5,
                image: "https://images.unsplash.com/photo-1754298949882-216a1c92dbb5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc3dvbWFuJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY0MDI4MDk3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                verified: true
              }
            ].map((testimonial, index) => (
              <ReviewCard
                key={index}
                {...testimonial}
                delay={index * 0.2}
              />
            ))}
          </div>

          {/* Bottom Trust Bar */}
          <motion.div
            className="mt-16 pt-16 border-t border-white/10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-6 h-6 text-[var(--brand-primary)]" />
                <span className="text-white/80 font-mono text-sm uppercase tracking-wider">Google verified reviews</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-6 h-6 text-[#334AFF]" />
                <span className="text-white/80 font-mono text-sm uppercase tracking-wider">Industry certified technicians</span>
              </div>
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-[var(--brand-primary)]" />
                <span className="text-white/80 font-mono text-sm uppercase tracking-wider">5.0 star rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Solutions Section */}
      <BusinessSolutions />

      {/* Trust & Transparency Section */}
      <section className="py-32 bg-zinc-950" data-nav-theme="dark">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <motion.div
            className="text-center mb-20 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-light mb-8 tracking-tight text-white">
              Trust built on transparency.
            </h2>
            <p className="text-lg text-zinc-400 leading-relaxed">
              Every 360° battery check covers all critical health indicators, from cell voltage balance to thermal performance, giving you a complete picture of your EV&apos;s condition.
            </p>
          </motion.div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Row 1: Large Feature Card + Right Column */}
            {/* Large Feature Card - Technician at Work (spans 2 cols, 2 rows) */}
            <motion.div
              className="lg:col-span-2 lg:row-span-2 relative overflow-hidden rounded-[2rem] group h-[600px] border border-white/5"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-full overflow-hidden rounded-[2rem]">
                <ImageWithFallback
                  src={technicianImage}
                  alt="EV technician performing diagnostic"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-10">
                  <div className="inline-flex items-center gap-1.5 mb-3 px-3 py-1.5 rounded-full bg-[#334AFF]">
                    <Award className="w-4 h-4 text-white" />
                    <span className="text-xs text-white uppercase tracking-[0.6px] font-mono">Certified Expertise</span>
                  </div>
                  <h3 className="text-4xl font-light text-white mb-3">
                    Trained EV specialists
                  </h3>
                  <p className="text-zinc-300 leading-relaxed max-w-md">
                    Our certified technicians bring deep expertise in EV battery systems and diagnostics.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stat Card - 500+ EVs Inspected */}
            <motion.div
              className="relative overflow-hidden rounded-[2rem] h-[288px] border border-white/5"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="h-full rounded-[2rem] p-8 flex flex-col justify-center relative overflow-hidden bg-zinc-900/50">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[var(--brand-primary)]/10 rounded-full blur-[64px]" />
                <div className="relative z-10">
                  <div className="text-[60px] text-white font-mono tracking-[-3px] leading-none mb-2">
                    <AnimatedCounter end={500} duration={2.5} suffix="+" />
                  </div>
                  <p className="text-zinc-500 text-sm font-mono uppercase tracking-[0.7px]">EVs inspected across Australia</p>
                </div>
              </div>
            </motion.div>

            {/* Professional Tools Card */}
            <motion.div
              className="relative overflow-hidden rounded-[2rem] h-[288px] border border-white/5"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="h-full rounded-[2rem] p-8 flex flex-col justify-center relative overflow-hidden bg-zinc-900/50">
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-[var(--brand-primary)]/20 rounded-full blur-[40px]" />
                <div className="relative z-10">
                  <ShieldCheck className="w-12 h-12 text-white mb-6" />
                  <h3 className="text-2xl text-white mb-2 font-light">Professional tools</h3>
                  <p className="text-zinc-500 font-mono text-xs uppercase tracking-[0.6px]">Industry-leading diagnostic equipment</p>
                </div>
              </div>
            </motion.div>

            {/* Row 2: Three equal cards */}
            {/* Clear, honest reporting */}
            <motion.div
              className="relative overflow-hidden rounded-[2rem] group h-[320px] border border-white/5"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="relative h-full overflow-hidden rounded-[2rem]">
                <ImageWithFallback
                  src="/assets/clear-honest-reporting.jpg"
                  alt="EV charging port"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-10">
                  <div className="inline-flex items-center gap-1.5 mb-3 px-3 py-1.5 rounded-full bg-[#334AFF]">
                    <CheckCircle className="w-4 h-4 text-white" />
                    <span className="text-xs text-white uppercase tracking-[0.6px] font-mono">100% Transparent</span>
                  </div>
                  <h3 className="text-2xl font-light text-white mb-2">
                    Clear, honest reporting
                  </h3>
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    No hidden details or conflicts of interest. Just data you can trust.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* We come to you */}
            <motion.div
              className="relative overflow-hidden rounded-[2rem] group h-[320px] border border-white/5"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="relative h-full overflow-hidden rounded-[2rem]">
                <ImageWithFallback
                  src="/assets/we-come-to-you.png"
                  alt="EV360 mobile service van"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-10">
                  <div className="inline-flex items-center gap-1.5 mb-3 px-3 py-1.5 rounded-full bg-[#334AFF]">
                    <Zap className="w-4 h-4 text-white" />
                    <span className="text-xs text-white uppercase tracking-[0.6px] font-mono">Convenience</span>
                  </div>
                  <h3 className="text-2xl font-light text-white">
                    We come to you
                  </h3>
                </div>
              </div>
            </motion.div>

            {/* 100% Customer Satisfaction */}
            <motion.div
              className="relative overflow-hidden rounded-[2rem] h-[320px] border border-white/5"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="h-full rounded-[2rem] p-8 flex flex-col justify-center relative overflow-hidden bg-zinc-900/50">
                <div className="absolute -top-8 -left-8 w-48 h-48 bg-[var(--brand-primary)]/10 rounded-full blur-[64px]" />
                <div className="relative z-10">
                  <div className="text-[60px] text-white font-mono tracking-[-3px] leading-none mb-2">
                    <AnimatedCounter end={100} duration={2} suffix="%" />
                  </div>
                  <p className="text-zinc-500 text-sm font-mono uppercase tracking-[0.7px]">Customer satisfaction rate</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* EV Education Hub */}
      <section className="py-32 bg-white" data-nav-theme="light">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <motion.div
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h2 className="text-3xl md:text-5xl font-light mb-6 tracking-tight text-zinc-900">
                EV Education Hub
              </h2>
              <p className="text-lg text-zinc-600 max-w-2xl">
                Learn everything you need to know about EV battery health and ownership.
              </p>
            </div>
            <Link href="/learn">
              <button className="px-6 py-3 rounded-full border border-zinc-300 text-zinc-900 hover:bg-zinc-100 transition-colors font-medium whitespace-nowrap">
                View All Articles
              </button>
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {educationCards.map((card, index) => (
              <EditorialCard
                key={index}
                image={card.image}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32 bg-gradient-to-b from-zinc-950 to-black overflow-hidden" data-nav-theme="dark">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--brand-primary)]/20 rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-light text-white mb-8 tracking-tight">
              Ready to check your EV&apos;s battery health?
            </h2>
            <p className="text-xl text-zinc-400 mb-12 max-w-2xl mx-auto">
              Book a comprehensive 360° battery health check today. Starting from $199.
            </p>
            <Link href="/booking">
              <motion.button
                className="px-10 py-4 rounded-full bg-[#334AFF] text-white hover:bg-[#4B60FF] transition-all font-medium text-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book Your Check
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      </div>

      <Footer />
    </div>
  );
}
