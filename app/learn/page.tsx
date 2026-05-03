"use client";

import { Footer } from '@/components/Footer';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { ScrollProgress } from '@/components/ScrollProgress';
import { articles, FEATURED_ARTICLE_SLUGS } from '@/lib/data/articles';

export default function Page() {
  const featured = FEATURED_ARTICLE_SLUGS
    .map((slug) => articles.find((a) => a.slug === slug))
    .filter((a): a is NonNullable<typeof a> => Boolean(a))
    .map((a) => ({
      ...a,
      image: `/assets/articles/${a.slug}/hero.webp`,
    }));

  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden" data-nav-theme="dark">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <ImageWithFallback
            src="/assets/education-hub-hero.webp"
            alt="EV Education Hub"
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
              EV Education Hub
            </h1>
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Expert insights and practical guides for electric vehicle owners
            </p>
          </motion.div>
        </div>
      </section>

      {/* Latest Articles */}
      <section className="py-32 bg-white" data-nav-theme="light">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <motion.div
            className="mb-20 max-w-3xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
              Latest Articles
            </h2>
            <p className="text-xl text-zinc-600">
              Everything you need to know about EV battery health, maintenance, and ownership.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((article, index) => (
              <motion.article
                key={article.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
              >
                <Link
                  href={`/learn/${article.slug}`}
                  className="group block bg-white rounded-2xl overflow-hidden border border-zinc-100 hover:border-zinc-200 hover:shadow-xl transition-all duration-300 h-full"
                >
                  <div className="relative aspect-[4/3] bg-zinc-100 overflow-hidden">
                    <ImageWithFallback
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="p-8 space-y-4">
                    <h3 className="text-2xl font-light text-zinc-900 leading-tight">
                      {article.title}
                    </h3>
                    <p className="text-zinc-600 text-sm leading-relaxed">
                      {article.description}
                    </p>
                    <div className="pt-4 border-t border-zinc-100 flex items-center gap-2 text-[var(--brand-primary)] text-xs font-bold tracking-[0.6px] uppercase">
                      Read Article
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-32 bg-zinc-50" data-nav-theme="light">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <motion.div
            className="max-w-3xl mx-auto text-center space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight">
                Stay informed
              </h2>
              <p className="text-xl text-zinc-600">
                Get the latest EV battery health insights delivered to your inbox
              </p>
            </div>

            <form onSubmit={(e) => { e.preventDefault(); alert("Thanks for subscribing!"); }} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                required
                placeholder="Your email address"
                className="flex-1 px-6 py-4 rounded-full border-2 border-zinc-200 focus:border-[var(--brand-primary)] focus:outline-none transition-colors"
              />
              <motion.button
                type="submit"
                className="px-8 py-4 rounded-full bg-[var(--brand-primary)] text-white smooth-transition whitespace-nowrap font-medium hover:bg-[#4B60FF]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </form>

            <p className="text-sm text-zinc-500">
              Join 5,000+ EV owners. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
