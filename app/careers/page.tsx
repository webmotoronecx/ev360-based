"use client";

import { Footer } from '@/components/Footer';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { Heart, TrendingUp, Users, Zap, MapPin, Clock, DollarSign, Briefcase, GraduationCap, Shield } from 'lucide-react';
import Link from 'next/link';

export default function Page() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "Industry-leading compensation packages that reward your expertise and dedication."
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Clear progression paths with ongoing training in the latest EV technologies."
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Work-life balance matters. Flexible scheduling to suit your lifestyle."
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health coverage and wellness programs for you and your family."
    },
    {
      icon: GraduationCap,
      title: "Continuous Learning",
      description: "Access to certifications, courses, and conferences to advance your skills."
    },
    {
      icon: Users,
      title: "Great Team",
      description: "Work alongside passionate professionals who love what they do."
    }
  ];

  const openRoles = [
    {
      title: "Senior EV Technician",
      location: "Sydney, NSW",
      type: "Full-time",
      description: "Join our mobile diagnostic team to deliver exceptional EV health checks across Sydney. Requires EV certification and 3+ years diagnostic experience."
    },
    {
      title: "Mobile Service Technician",
      location: "Melbourne, VIC",
      type: "Full-time",
      description: "Conduct on-site EV battery diagnostics and health checks. Training provided for the right candidate with automotive background."
    },
    {
      title: "Customer Success Manager",
      location: "Brisbane, QLD",
      type: "Full-time",
      description: "Be the first point of contact for our customers, managing bookings, inquiries, and ensuring exceptional service delivery."
    },
    {
      title: "Operations Coordinator",
      location: "Remote",
      type: "Full-time",
      description: "Support our growing team by coordinating schedules, managing logistics, and optimizing our mobile service operations."
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Transparency",
      description: "We're honest with our customers and with each other. No hidden agendas, just clear communication."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "We embrace new technology and continuously improve our processes and service delivery."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We succeed together. Every team member's contribution matters and is valued."
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Everything we do is designed to deliver exceptional value and service to our customers."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden" data-nav-theme="dark">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <ImageWithFallback
            src="/assets/careers-hero.png"
            alt="Join the EV360 team"
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
            <h1 className="text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.1]">
              Join Our Team
            </h1>
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Help us build the future of transparent EV battery diagnostics across Australia
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href="#open-roles"
                className="inline-flex items-center gap-3 px-10 py-5 bg-[var(--brand-primary)] text-white rounded-full text-lg transition-all hover:bg-[#4B60FF]"
              >
                View Open Roles
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Join Us */}
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
              Why join EV360?
            </h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              Be part of a growing team that&apos;s making EV ownership more transparent and accessible
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center space-y-6"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <motion.div
                    className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-[#ebedff]"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-10 h-10 text-[#334AFF]" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl mb-3">{benefit.title}</h3>
                    <p className="text-zinc-600 leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-32 bg-zinc-50" data-nav-theme="light">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <motion.div
            className="text-center mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
              Our values
            </h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-[2rem] p-10 flex gap-6"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                >
                  <motion.div
                    className="flex-shrink-0 w-16 h-16 rounded-2xl bg-[#ebedff] flex items-center justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <Icon className="w-8 h-8 text-[#334AFF]" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl mb-3">{value.title}</h3>
                    <p className="text-zinc-600 leading-relaxed">{value.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Life at EV360 */}
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
              Life at EV360
            </h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              A glimpse into our workplace culture and team environment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                image: "https://images.unsplash.com/photo-1623679072629-3aaa0192a391?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc3MzYxMDY2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                alt: "Modern workspace"
              },
              {
                image: "https://images.unsplash.com/photo-1758519288355-fe5b6fcc9f39?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwbWVldGluZyUyMGJyYWluc3Rvcm18ZW58MXx8fHwxNzczNjMxNTIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                alt: "Team collaboration"
              },
              {
                image: "https://images.unsplash.com/photo-1682531046921-4a37f93b85de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbmdpbmVlciUyMHRlY2huaWNpYW4lMjB3b3JraW5nJTIwYXV0b21vdGl2ZXxlbnwxfHx8fDE3NzM2MzE1MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                alt: "Technical work"
              },
              {
                image: "https://images.unsplash.com/photo-1758873271761-6cfe9b4f000c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwdGVhbSUyMHdvcmtpbmclMjBvZmZpY2UlMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc3MzYzMTUxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
                alt: "Team working together"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="relative h-[400px] rounded-[2rem] overflow-hidden shadow-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <ImageWithFallback
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section id="open-roles" className="py-32 bg-zinc-50" data-nav-theme="light">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <motion.div
            className="text-center mb-24"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
              Open positions
            </h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              Find your next opportunity with EV360
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {openRoles.map((role, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-[2rem] p-10 border border-zinc-200 hover:border-[var(--brand-primary)] transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl mb-3">{role.title}</h3>
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-2 text-zinc-600">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{role.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-600">
                        <Briefcase className="w-4 h-4" />
                        <span className="text-sm">{role.type}</span>
                      </div>
                    </div>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-[var(--brand-primary)] text-white rounded-full transition-all hover:bg-[#4B60FF] whitespace-nowrap self-start md:self-auto"
                  >
                    Apply Now
                  </Link>
                </div>
                <p className="text-zinc-600 leading-relaxed">{role.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Don't See Your Role */}
          <motion.div
            className="mt-20 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white rounded-[2rem] p-12 border border-zinc-200">
              <h3 className="text-3xl md:text-4xl font-light mb-4 tracking-tight">
                Don&apos;t see the right role?
              </h3>
              <p className="text-xl text-zinc-600 mb-8 leading-relaxed">
                We&apos;re always looking for talented people to join our team. Send us your details and we&apos;ll keep you in mind for future opportunities.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 px-10 py-5 bg-[var(--brand-primary)] text-white rounded-full text-lg transition-all hover:bg-[#4B60FF]"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
