"use client";

import { motion } from 'motion/react';

const autelLogo = '/assets/ef719d3c9d9449aff813a567befa1431ce8b7c5d.png';
const caraLogo = '/assets/4b9bf8f584b0839423911570418f1bfd35f24f01.png';

export function TrustedTechnology() {
  return (
    <section className="py-32 bg-[#080808] relative overflow-hidden" data-nav-theme="dark">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#334AFF]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16">

        {/* Header */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#334AFF] animate-pulse" />
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
              Trusted technology behind EV360
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-6 leading-tight">
            Powered by proven EV diagnostic and battery testing technology
          </h2>

          <p className="text-base md:text-lg text-zinc-400 leading-relaxed">
            EV360 combines advanced diagnostic capability with independently validated battery assessment methods to give customers more confidence when buying, selling or assessing an EV. Powered by Autel diagnostic technology and supported by CARA validated battery testing standards, our process is built to deliver a clearer picture of vehicle condition, battery health and overall EV confidence.
          </p>
        </motion.div>

        {/* Brand Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-stretch">

          {/* Autel Card */}
          <a
            href="https://autel.com/au/"
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full"
          >
            <motion.div
              className="group relative overflow-hidden rounded-[2rem] border border-white/5 bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-sm p-10 hover:border-[#334AFF]/20 transition-all duration-500 cursor-pointer h-full flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Subtle glow effect */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#334AFF]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10 flex flex-col flex-grow">
                {/* Logo */}
                <div className="mb-8 h-12 flex items-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={autelLogo}
                    alt="Autel"
                    className="h-8 object-contain opacity-90"
                  />
                </div>

                {/* Description */}
                <p className="text-zinc-300 leading-relaxed text-sm flex-grow">
                  Industry leading diagnostic and service technology used to identify vehicle systems, scan faults and support deeper EV analysis.
                </p>

                {/* Technical badge */}
                <div className="mt-8 inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/5 bg-white/5">
                  <svg className="w-3 h-3 text-[#334AFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                    Diagnostic Partner
                  </span>
                </div>
              </div>
            </motion.div>
          </a>

          {/* CARA Card */}
          <a
            href="https://cara-europe.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="block h-full"
          >
            <motion.div
              className="group relative overflow-hidden rounded-[2rem] border border-white/5 bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-sm p-10 hover:border-[#334AFF]/20 transition-all duration-500 cursor-pointer h-full flex flex-col"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Subtle glow effect */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#334AFF]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              <div className="relative z-10 flex flex-col flex-grow">
                {/* Logo */}
                <div className="mb-8 h-12 flex items-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={caraLogo}
                    alt="CARA"
                    className="h-10 object-contain opacity-90"
                  />
                </div>

                {/* Description */}
                <p className="text-zinc-300 leading-relaxed text-sm flex-grow">
                  Validated battery testing methodology that helps support more credible EV battery health assessments.
                </p>

                {/* Technical badge */}
                <div className="mt-8 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border border-white/5 bg-white/5">
                  <svg className="w-2.5 h-2.5 text-[#334AFF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0121 12c0 .746-.074 1.476-.217 2.184m-.22 2.184A11.955 11.955 0 0112 21c-.746 0-1.476-.074-2.184-.217m-2.184-.22A11.955 11.955 0 013 12c0-.746.074-1.476.217-2.184m.22-2.184A11.955 11.955 0 0112 3c.746 0 1.476.074 2.184.217" />
                  </svg>
                  <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                    Testing Standard
                  </span>
                </div>
              </div>
            </motion.div>
          </a>

        </div>

        {/* Bottom technical accent */}
        <motion.div
          className="mt-16 flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="flex items-center gap-3 px-5 py-2 rounded-full border border-white/5 bg-white/5">
            <div className="flex -space-x-1">
              <div className="w-2 h-2 rounded-full bg-[#334AFF] ring-2 ring-[#080808]" />
              <div className="w-2 h-2 rounded-full bg-[#334AFF]/60 ring-2 ring-[#080808]" />
              <div className="w-2 h-2 rounded-full bg-[#334AFF]/30 ring-2 ring-[#080808]" />
            </div>
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
              Validated methodologies
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
