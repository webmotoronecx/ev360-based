"use client";

import { Footer } from '@/components/Footer';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { MapPin, Clock, Truck, Shield, CheckCircle, Wrench, Battery, Zap, Home, Building2, Users } from 'lucide-react';
import Link from 'next/link';

export default function Page() {
  const mobileServices = [
    {
      icon: Battery,
      title: "Battery Health Assessment",
      description: "Complete on-site battery diagnostics",
      features: [
        "State of Health (SOH) testing",
        "Cell balance analysis",
        "Thermal system check",
        "Degradation assessment",
        "Digital report delivery"
      ]
    },
    {
      icon: Zap,
      title: "Comprehensive EV Inspection",
      description: "Full vehicle diagnostic at your location",
      features: [
        "All control module scans",
        "Physical component inspection",
        "Safety system verification",
        "OEM-level diagnostics",
        "Expert consultation"
      ]
    },
    {
      icon: Wrench,
      title: "Pre-Purchase Inspection",
      description: "Complete buyer protection service",
      features: [
        "Everything in comprehensive",
        "Vehicle history analysis",
        "Market value assessment",
        "Negotiation support",
        "Detailed documentation"
      ]
    }
  ];

  const serviceLocations = [
    {
      icon: Home,
      title: "Your Home",
      description: "We come to your driveway or garage at a time that works for you"
    },
    {
      icon: Building2,
      title: "Your Office",
      description: "Convenient workplace inspections during your workday"
    },
    {
      icon: MapPin,
      title: "Private Sale Location",
      description: "Meet the seller anywhere within our service area"
    },
    {
      icon: Users,
      title: "Dealership Lot",
      description: "On-site inspections before you commit to purchase"
    }
  ];

  const howItWorks = [
    {
      number: "01",
      title: "Book Your Appointment",
      description: "Choose your service, location, and preferred time slot online or by phone"
    },
    {
      number: "02",
      title: "We Travel to You",
      description: "Our certified technician arrives with professional-grade diagnostic equipment"
    },
    {
      number: "03",
      title: "Complete Inspection",
      description: "45-120 minutes of thorough testing while you watch or go about your day"
    },
    {
      number: "04",
      title: "Receive Your Report",
      description: "Detailed digital report delivered within 24 hours with expert recommendations"
    }
  ];

  const equipment = [
    "Professional OEM-level scan tools",
    "High-voltage battery analyzers",
    "Thermal imaging cameras",
    "Insulation resistance testers",
    "Multimeters and diagnostic computers",
    "Complete PPE and safety equipment"
  ];

  const benefits = [
    {
      title: "Save Time",
      description: "No need to drive to a shop or wait in line. We work around your schedule."
    },
    {
      title: "See Everything",
      description: "Watch the inspection process and ask questions in real-time."
    },
    {
      title: "Convenience",
      description: "Perfect for pre-purchase inspections at the seller's location."
    },
    {
      title: "Same Quality",
      description: "Identical equipment and expertise as our facility-based services."
    },
    {
      title: "Safe & Certified",
      description: "Fully insured technicians with EV-specific safety training."
    },
    {
      title: "Flexible Scheduling",
      description: "Evening and weekend appointments available throughout our service area."
    }
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
            src="/assets/mobile-services-hero.png"
            alt="Mobile EV services"
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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md mb-4">
              <Truck className="w-3 h-3 text-white" />
              <span className="text-white text-xs font-mono uppercase tracking-wider">We Come To You</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.1]">
              Mobile EV Services
            </h1>
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Professional EV diagnostics and inspections at your home, office, or any location within our service area.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/booking">
                <motion.button
                  className="px-8 py-4 rounded-full bg-[#334AFF] text-white font-medium hover:bg-[#4B60FF] transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Mobile Service
                </motion.button>
              </Link>
              <Link href="/services">
                <motion.button
                  className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md text-white font-medium border border-white/20 hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All Services
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mobile Services Available */}
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
              All services, anywhere
            </h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              Our complete range of EV diagnostics available at your preferred location
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {mobileServices.map((service, index) => {
              const Icon = service.icon;
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
                  <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#ebedff]">
                    <Icon className="w-7 h-7 text-[#3346ff]" />
                  </div>

                  <div>
                    <h3 className="text-2xl mb-3">{service.title}</h3>
                    <p className="text-zinc-600 mb-6 leading-relaxed">{service.description}</p>
                  </div>

                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-zinc-700">
                        <CheckCircle className="w-4 h-4 text-[#334AFF] mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Where We Serve */}
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
              We come to you
            </h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              Professional service at your most convenient location
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceLocations.map((location, index) => {
              const Icon = location.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white rounded-[2rem] p-8 space-y-4 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-[#ebedff] flex items-center justify-center mx-auto">
                    <Icon className="w-8 h-8 text-[#3346ff]" />
                  </div>
                  <h3 className="text-2xl">{location.title}</h3>
                  <p className="text-zinc-600 leading-relaxed">{location.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 bg-white" data-nav-theme="light">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
              How mobile service works
            </h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto">
              Simple, convenient, and professional from start to finish
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="space-y-4">
                  <div className="text-6xl font-light text-[#334AFF]/20">{step.number}</div>
                  <h3 className="text-2xl">{step.title}</h3>
                  <p className="text-zinc-600 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Benefits */}
      <section className="py-32 bg-zinc-50" data-nav-theme="light">
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
                  Professional equipment
                </h2>
                <p className="text-xl text-zinc-600 leading-relaxed mb-8">
                  We bring the same professional-grade tools and equipment used in specialized EV service centers.
                </p>
              </div>

              <div className="space-y-4">
                {equipment.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-white transition-colors"
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
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
                  Why choose mobile
                </h2>
                <p className="text-xl text-zinc-600 leading-relaxed mb-8">
                  Convenience without compromising on quality or thoroughness.
                </p>
              </div>

              <div className="grid gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-[2rem] p-6 space-y-2"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <h3 className="text-xl font-medium">{benefit.title}</h3>
                    <p className="text-zinc-600">{benefit.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Area Info */}
      <section className="py-32 bg-white" data-nav-theme="light">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-20 h-20 rounded-2xl bg-[#ebedff] flex items-center justify-center mx-auto mb-8">
                <MapPin className="w-10 h-10 text-[#3346ff]" />
              </div>
              <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
                Service area
              </h2>
              <p className="text-xl text-zinc-600 leading-relaxed mb-8">
                We currently serve the greater metropolitan area with a 50-mile service radius. Outside our standard area? Contact us for special arrangements.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="bg-zinc-50 rounded-[2rem] p-6">
                  <Clock className="w-8 h-8 text-[#334AFF] mb-3 mx-auto" />
                  <h3 className="text-lg font-medium mb-2">Flexible Hours</h3>
                  <p className="text-sm text-zinc-600">7 days a week, including evenings</p>
                </div>
                <div className="bg-zinc-50 rounded-[2rem] p-6">
                  <Shield className="w-8 h-8 text-[#334AFF] mb-3 mx-auto" />
                  <h3 className="text-lg font-medium mb-2">Fully Insured</h3>
                  <p className="text-sm text-zinc-600">Complete liability coverage</p>
                </div>
                <div className="bg-zinc-50 rounded-[2rem] p-6">
                  <CheckCircle className="w-8 h-8 text-[#334AFF] mb-3 mx-auto" />
                  <h3 className="text-lg font-medium mb-2">Same Quality</h3>
                  <p className="text-sm text-zinc-600">Identical to facility services</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to book mobile service?
            </h2>
            <p className="text-xl text-white/80">
              Mobile inspections starting at <span className="text-[#334AFF] font-medium">$199</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link href="/booking">
                <motion.button
                  className="px-8 py-4 rounded-full bg-[#334AFF] text-white font-medium hover:bg-[#4B60FF] transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Appointment
                </motion.button>
              </Link>
              <Link href="/contact">
                <motion.button
                  className="px-8 py-4 rounded-full bg-white/10 backdrop-blur-md text-white font-medium border border-white/20 hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ask Questions
                </motion.button>
              </Link>
            </div>
            <p className="text-sm text-white/60 pt-4">
              50-mile service radius &bull; Evening & weekend available &bull; Same-day booking often available
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
