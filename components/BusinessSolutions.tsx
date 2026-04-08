"use client";

import { motion } from 'motion/react';
import Link from 'next/link';
import { ShieldCheck, Users, Truck, Building2, ChevronRight } from 'lucide-react';

export function BusinessSolutions() {
  const solutions = [
    {
      icon: <Users className="w-5 h-5 text-white" />,
      title: "Dealerships",
      description: "Certified Pre-Owned programs that build trust and turn inventory faster.",
      link: "/dealerships"
    },
    {
      icon: <Truck className="w-5 h-5 text-white" />,
      title: "Fleet Managers",
      description: "Maximize residual values and minimize downtime with lifecycle battery tracking.",
      link: "/fleet"
    },
    {
      icon: <ShieldCheck className="w-5 h-5 text-white" />,
      title: "Insurers",
      description: "Data-driven risk assessment and claims verification for electric vehicles.",
      link: "/insurance"
    },
    {
      icon: <Building2 className="w-5 h-5 text-white" />,
      title: "Strata & Property",
      description: "Mitigate fire risk and ensure safety compliance for basement charging.",
      link: "/property"
    }
  ];

  return (
    <section className="py-32 bg-[#080808] relative overflow-hidden" data-nav-theme="dark">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-[#334AFF]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16">

        {/* Header */}
        <motion.div
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#334AFF]/30 bg-[#334AFF]/10 mb-6">
            <span className="text-xs font-mono text-[#334AFF] uppercase tracking-widest">
              Enterprise
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-6 leading-tight">
            Business Solutions
          </h2>

          <p className="text-base md:text-lg text-zinc-400 leading-relaxed">
            Scale your EV operations with Australia&apos;s leading battery intelligence platform. Tailored solutions for high-volume needs.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl">
          {solutions.map((solution, index) => (
            <Link
              key={index}
              href={solution.link}
              className="block"
            >
              <motion.div
                className="group relative overflow-hidden rounded-[2rem] border border-white/5 bg-gradient-to-br from-zinc-900/50 to-zinc-950/50 backdrop-blur-sm p-8 hover:border-[#334AFF]/20 transition-all duration-500 cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {/* Subtle glow effect */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#334AFF]/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10 flex items-start justify-between gap-4">
                  <div className="flex-1">
                    {/* Icon */}
                    <div className="mb-6 w-12 h-12 rounded-2xl bg-[#334AFF] flex items-center justify-center">
                      {solution.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-medium text-white mb-3">
                      {solution.title}
                    </h3>

                    {/* Description */}
                    <p className="text-zinc-400 leading-relaxed text-sm">
                      {solution.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#334AFF] transition-colors duration-300 flex-shrink-0">
                    <ChevronRight className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
