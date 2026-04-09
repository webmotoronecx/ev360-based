"use client";

import { motion } from 'motion/react';
import Link from 'next/link';
import { Users, Truck, ChevronRight } from 'lucide-react';

export function BusinessSolutions() {
  const solutions = [
    {
      icon: <Users className="w-7 h-7 text-[#334AFF]" />,
      title: "Dealerships",
      description: "Certified Pre-Owned programs that build trust and turn inventory faster.",
      link: "/dealerships"
    },
    {
      icon: <Truck className="w-7 h-7 text-[#334AFF]" />,
      title: "Fleet Managers",
      description: "Maximize residual values and minimize downtime with lifecycle battery tracking.",
      link: "/fleet"
    }
  ];

  return (
    <section className="py-32 bg-black relative overflow-hidden" data-nav-theme="dark">
      {/* Subtle ambient lighting */}
      <div className="absolute top-[120px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#334AFF]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16">

        {/* Header */}
        <motion.div
          className="max-w-xl mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm font-mono text-[#334AFF] uppercase tracking-[0.7px] mb-2">
            Enterprise
          </p>

          <h2 className="text-5xl font-light text-white tracking-[-1.2px] mb-6">
            Business Solutions
          </h2>

          <p className="text-lg text-[#9f9fa9] leading-relaxed">
            Scale your EV operations with Australia&apos;s leading battery intelligence platform. Tailored solutions for high-volume needs.
          </p>
        </motion.div>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((solution, index) => (
            <Link
              key={index}
              href={solution.link}
              className="block"
            >
              <motion.div
                className="group relative overflow-hidden rounded-[2rem] border border-white/5 bg-zinc-900/50 p-10 hover:border-[#334AFF]/20 transition-all duration-500 cursor-pointer h-full"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {/* Top row: icon + arrow */}
                <div className="flex items-start justify-between mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                    {solution.icon}
                  </div>
                  <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-[#334AFF]/30 transition-colors duration-300">
                    <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-light text-white mb-2">
                  {solution.title}
                </h3>

                {/* Description */}
                <p className="text-[#9f9fa9] leading-relaxed">
                  {solution.description}
                </p>

                {/* Bottom gradient line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#334AFF]/30 to-transparent" />
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
