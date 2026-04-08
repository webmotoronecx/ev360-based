"use client";

import { Footer } from '@/components/Footer';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Battery, Cpu, Zap, Shield, CheckCircle, Activity, Gauge, FileText, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Page() {
  const diagnosticAreas = [
    {
      icon: Battery,
      title: "High-Voltage Battery System",
      description: "Complete analysis of your EV's most critical component",
      checks: [
        "State of Health (SOH) measurement",
        "Cell voltage balance analysis",
        "Thermal management system check",
        "Battery degradation assessment",
        "Charge cycle history review",
        "Capacity retention testing"
      ]
    },
    {
      icon: Cpu,
      title: "Control Module Diagnostics",
      description: "Deep scan of all electronic control units",
      checks: [
        "Battery Management System (BMS)",
        "Vehicle Control Unit (VCU)",
        "On-Board Charger (OBC)",
        "DC-DC converter analysis",
        "Power Distribution Unit (PDU)",
        "Fault code extraction & analysis"
      ]
    },
    {
      icon: Zap,
      title: "Charging System Analysis",
      description: "Comprehensive charging infrastructure evaluation",
      checks: [
        "AC charging port inspection",
        "DC fast charging capability test",
        "Charge rate verification",
        "Onboard charger performance",
        "Charging curve analysis",
        "Port and cable condition check"
      ]
    },
    {
      icon: Activity,
      title: "Power Electronics",
      description: "Critical power conversion components",
      checks: [
        "Inverter operation analysis",
        "Motor controller diagnostics",
        "Regenerative braking efficiency",
        "Power delivery consistency",
        "Voltage conversion systems",
        "High-voltage interlock testing"
      ]
    },
    {
      icon: Gauge,
      title: "Performance Metrics",
      description: "Real-world performance benchmarking",
      checks: [
        "Acceleration performance test",
        "Energy consumption analysis",
        "Range estimation accuracy",
        "Efficiency ratings (miles/kWh)",
        "Climate control impact",
        "Historical performance trends"
      ]
    },
    {
      icon: Shield,
      title: "Safety & Compliance",
      description: "Comprehensive safety system verification",
      checks: [
        "High-voltage safety systems",
        "Insulation resistance testing",
        "Emergency disconnect verification",
        "Cooling system integrity",
        "Thermal runaway prevention",
        "Manufacturer recall status"
      ]
    }
  ];

  const whyFullDiagnostics = [
    {
      title: "Pre-Purchase Peace of Mind",
      description: "Know exactly what you're buying before committing to a used EV purchase"
    },
    {
      title: "Warranty Claims",
      description: "Detailed documentation to support battery warranty or manufacturer claims"
    },
    {
      title: "Performance Issues",
      description: "Identify root causes of reduced range, slow charging, or warning lights"
    },
    {
      title: "Annual Health Check",
      description: "Track your EV's condition over time and catch issues before they become expensive"
    },
    {
      title: "Lease Return Preparation",
      description: "Ensure your vehicle meets return standards and avoid surprise charges"
    },
    {
      title: "Fleet Management",
      description: "Monitor battery health across multiple vehicles for optimal lifecycle management"
    }
  ];

  const reportIncludes = [
    "Executive summary with overall health score",
    "Detailed battery health analysis with SOH percentage",
    "Cell voltage balance graphs and charts",
    "All diagnostic trouble codes (DTCs) with explanations",
    "Charging system performance data",
    "Safety system verification results",
    "Historical data and trend analysis",
    "Expert recommendations and priority actions",
    "Estimated remaining battery life",
    "Market value impact assessment",
    "Maintenance schedule recommendations",
    "Follow-up consultation included"
  ];

  return (
    <div className="min-h-screen bg-white relative">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden" data-nav-theme="dark">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1617788138017-80ad40651399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            alt="Full EV diagnostics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </motion.div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16 text-center">
          <motion.div
            className="space-y-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#334AFF] border border-white/20 backdrop-blur-md mb-4">
              <Activity className="w-3 h-3 text-white" />
              <span className="text-white text-xs font-mono uppercase tracking-wider">Professional Grade</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.1]">
              Full EV Diagnostics
            </h1>
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              The most comprehensive electric vehicle health assessment available. Every system, every component, complete transparency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/booking">
                <motion.button
                  className="px-8 py-4 rounded-full bg-[#334AFF] text-white font-medium hover:bg-[#4B60FF] transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Full Diagnostic
                </motion.button>
              </Link>
              <Link href="/services">
                <motion.button
                  className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md text-white font-medium border border-white/20 hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Compare Services
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-32 bg-white" data-nav-theme="light">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <motion.div
            className="text-center mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
              Complete system analysis
            </h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              We examine every critical component of your electric vehicle with professional-grade equipment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {diagnosticAreas.map((area, index) => {
              const Icon = area.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-zinc-50 rounded-[2rem] p-8 space-y-6 hover:shadow-xl transition-all duration-500"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                >
                  <div className="flex items-start justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-[#334AFF] flex items-center justify-center">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl mb-3">{area.title}</h3>
                    <p className="text-zinc-600 mb-6 leading-relaxed">{area.description}</p>
                  </div>

                  <ul className="space-y-3">
                    {area.checks.map((check, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-zinc-700">
                        <CheckCircle className="w-4 h-4 text-[#334AFF] mt-0.5 flex-shrink-0" />
                        <span>{check}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* When You Need Full Diagnostics */}
      <section className="py-32 bg-zinc-50" data-nav-theme="light">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
              When you need full diagnostics
            </h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              Our most comprehensive service is ideal for these situations
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyFullDiagnostics.map((reason, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-[2rem] p-8 space-y-4"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              >
                <div className="w-12 h-12 rounded-full bg-[#334AFF] flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl">{reason.title}</h3>
                <p className="text-zinc-600 leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Receive */}
      <section className="py-32 bg-white" data-nav-theme="light">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
                  Your comprehensive report
                </h2>
                <p className="text-xl text-zinc-600 leading-relaxed mb-8">
                  Receive a detailed, professional-grade diagnostic report within 24 hours of your inspection.
                </p>
              </div>

              <div className="space-y-4">
                {reportIncludes.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-zinc-50 transition-colors"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div className="w-6 h-6 rounded-full bg-[#334AFF]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-[#334AFF]" />
                    </div>
                    <p className="text-zinc-700">{item}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative h-[700px] rounded-[2rem] bg-gradient-to-br from-zinc-100 to-zinc-50 flex items-center justify-center p-8 shadow-2xl">
                <div className="bg-white rounded-[2rem] shadow-xl p-8 w-full max-w-md">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between pb-6 border-b border-zinc-200">
                      <div>
                        <h3 className="text-2xl font-medium">EV Health Report</h3>
                        <p className="text-sm text-zinc-500 mt-1">Full Diagnostic Analysis</p>
                      </div>
                      <div className="w-16 h-16 rounded-2xl bg-[#334AFF] flex items-center justify-center">
                        <FileText className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="p-4 rounded-xl bg-green-50 border border-green-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-green-900">Overall Health</span>
                          <span className="text-2xl font-bold text-green-600">92%</span>
                        </div>
                        <div className="w-full h-2 bg-green-200 rounded-full overflow-hidden">
                          <div className="h-full w-[92%] bg-green-600 rounded-full" />
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-blue-50 border border-blue-200">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-blue-900">Battery SOH</span>
                          <span className="text-2xl font-bold text-blue-600">89%</span>
                        </div>
                        <div className="w-full h-2 bg-blue-200 rounded-full overflow-hidden">
                          <div className="h-full w-[89%] bg-blue-600 rounded-full" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="p-3 rounded-xl bg-zinc-50">
                          <p className="text-xs text-zinc-500 mb-1">Charging</p>
                          <p className="text-lg font-medium text-zinc-900">Excellent</p>
                        </div>
                        <div className="p-3 rounded-xl bg-zinc-50">
                          <p className="text-xs text-zinc-500 mb-1">Safety</p>
                          <p className="text-lg font-medium text-zinc-900">Passed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing & CTA */}
      <section className="py-32 bg-[#151515]" data-nav-theme="dark">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <motion.div
            className="max-w-4xl mx-auto text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-light text-white tracking-tight">
              Ready for complete clarity?
            </h2>
            <p className="text-xl text-white/80">
              Full EV Diagnostics starting at <span className="text-[#334AFF] font-medium">$299</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/booking">
                <motion.button
                  className="px-8 py-4 rounded-full bg-[#334AFF] text-white font-medium hover:bg-[#4B60FF] transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Your Diagnostic
                </motion.button>
              </Link>
              <Link href="/how-it-works">
                <motion.button
                  className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md text-white font-medium border border-white/20 hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  How It Works
                </motion.button>
              </Link>
            </div>
            <p className="text-sm text-white/60 pt-4">
              Mobile service available - 24-hour report delivery - Expert consultation included
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
