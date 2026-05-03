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

      {/* Hero — dark with blue radial glow (Figma 41:5184) */}
      <section
        className="relative h-screen flex items-center justify-center overflow-hidden bg-black"
        data-nav-theme="dark"
      >
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full pointer-events-none"
          style={{
            background:
              'radial-gradient(circle, rgba(51,74,255,0.45) 0%, rgba(51,74,255,0.15) 30%, transparent 65%)',
            filter: 'blur(60px)',
          }}
        />

        <div className="relative z-10 max-w-[1440px] mx-auto px-8 lg:px-16 text-center">
          <motion.div
            className="space-y-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-6xl font-light text-white tracking-tight leading-[1.1]">
              EV Articles & Guides
            </h1>
            <p className="text-base md:text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
              Practical insights for Australian EV owners — battery health, buying advice,
              charging best practices, and ownership economics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Article Lead-In */}
      <section className="py-24 bg-white" data-nav-theme="light">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <motion.div
            className="text-center mb-20 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-6">
              Latest from the EV360 blog
            </h2>
            <p className="text-xl text-zinc-600">
              Independent guides written by our certified battery specialists. No fluff —
              just what every EV owner in Australia should know.
            </p>
          </motion.div>

          {/* Cards grid — Figma 21:302 layout */}
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
                  href={`/articles/${article.slug}`}
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

      <Footer />
    </div>
  );
}
