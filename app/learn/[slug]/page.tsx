"use client";

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowLeft, ArrowRight, Calendar, Clock, User, Twitter, Linkedin, Facebook, Link as LinkIcon } from 'lucide-react';
import { articles, FEATURED_ARTICLE_SLUGS } from '@/lib/data/articles';
import { Footer } from '@/components/Footer';
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';
import { ScrollProgress } from '@/components/ScrollProgress';

const slugify = (text: string) =>
  text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '');

export default function Page() {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  const [activeSection, setActiveSection] = useState<string>('');

  const processContent = (content: string) =>
    content.replace(/<h3>(.*?)<\/h3>/g, (_match, title) => {
      const id = slugify(title);
      return `<h3 id="${id}" class="scroll-mt-32">${title}</h3>`;
    });

  const getHeadings = (content: string) => {
    const regex = /<h3>(.*?)<\/h3>/g;
    const headings: { id: string; text: string }[] = [];
    let match;
    while ((match = regex.exec(content)) !== null) {
      headings.push({ id: slugify(match[1]), text: match[1] });
    }
    return headings;
  };

  useEffect(() => {
    const handleScroll = () => {
      const els = document.querySelectorAll('h3[id]');
      let current = '';
      els.forEach((el) => {
        if (el.getBoundingClientRect().top < 150) current = el.id;
      });
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!article) {
    return (
      <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8 text-center">
        <h1 className="text-4xl font-light mb-4">Article Not Found</h1>
        <p className="text-zinc-600 mb-8">The article you are looking for does not exist.</p>
        <Link href="/learn">
          <button className="px-8 py-4 rounded-full bg-zinc-900 text-white hover:scale-105 transition-transform">
            Back to Education Hub
          </button>
        </Link>
      </div>
    );
  }

  // Featured articles use Figma hero artwork; others use whatever's in the data file.
  const isFeatured = (FEATURED_ARTICLE_SLUGS as readonly string[]).includes(article.slug);
  const heroImage = isFeatured
    ? `/assets/articles/${article.slug}/hero.webp`
    : article.image;
  const processedContent = processContent(article.content || '');
  const headings = getHeadings(article.content || '');

  // Read Next: previous + next from the featured list, wrapping around.
  // (Article 1's "previous" is Article 6; Article 6's "next" is Article 1.)
  const featuredIndex = FEATURED_ARTICLE_SLUGS.indexOf(
    article.slug as (typeof FEATURED_ARTICLE_SLUGS)[number]
  );
  const total = FEATURED_ARTICLE_SLUGS.length;
  const relatedArticles =
    featuredIndex >= 0
      ? [
          articles.find(
            (a) => a.slug === FEATURED_ARTICLE_SLUGS[(featuredIndex - 1 + total) % total]
          ),
          articles.find(
            (a) => a.slug === FEATURED_ARTICLE_SLUGS[(featuredIndex + 1) % total]
          ),
        ].filter((a): a is NonNullable<typeof a> => Boolean(a))
      : articles
          .filter((a) => a.category === article.category && a.slug !== article.slug)
          .slice(0, 2);

  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />

      <style>{`
        .article-content table {
          width: 100%;
          border-collapse: separate;
          border-spacing: 0;
          margin: 2rem 0;
          border-radius: 0.75rem;
          overflow: hidden;
          border: 1px solid #e4e4e7;
        }
        .article-content th {
          background-color: #f4f4f5;
          text-align: left;
          padding: 1rem;
          font-weight: 600;
          color: #18181b;
        }
        .article-content td {
          padding: 1rem;
          border-bottom: 1px solid #e4e4e7;
          color: #3f3f46;
        }
        .article-content tr:last-child td { border-bottom: none; }
        .article-content img {
          border-radius: 1rem;
          margin: 2rem 0;
          box-shadow: 0 10px 30px -10px rgba(0,0,0,0.1);
        }
        .article-content h3 {
          font-size: 1.5rem;
          font-weight: 300;
          margin-top: 3rem;
          margin-bottom: 1.5rem;
          color: #151515;
          letter-spacing: -0.01em;
        }
        .article-content p { margin-bottom: 1.5rem; line-height: 1.7; color: #3f3f46; }
        .article-content ul { padding-left: 1.5rem; margin-bottom: 1.5rem; }
        .article-content ul li { list-style: disc; margin-bottom: 0.5rem; color: #3f3f46; }
        .article-content strong { color: #151515; font-weight: 600; }
        .article-content .lead {
          font-size: 1.25rem;
          line-height: 1.6;
          color: #18181b;
          font-weight: 300;
          border-left: 4px solid #334AFF;
          padding-left: 1.5rem;
          padding-top: 0.25rem;
          padding-bottom: 0.25rem;
          margin-bottom: 2.5rem;
        }
      `}</style>

      {/* Hero */}
      <div className="relative h-[80vh] w-full overflow-hidden" data-nav-theme="dark">
        <motion.div className="absolute inset-0" style={{ y: heroY, scale: 1.1 }}>
          <ImageWithFallback
            src={heroImage}
            alt={article.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/90" />
        </motion.div>

        <motion.div className="absolute inset-0 flex items-end pb-20" style={{ opacity: heroOpacity }}>
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16 w-full">
            <Link
              href="/learn"
              className="inline-flex items-center text-white/70 hover:text-white mb-8 transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center mr-3 group-hover:bg-white/20 transition-colors backdrop-blur-sm">
                <ArrowLeft className="w-4 h-4" />
              </div>
              <span className="font-medium tracking-wide text-sm uppercase">Back to Hub</span>
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-5xl"
            >
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-4 py-1.5 rounded-full bg-[var(--brand-primary)] text-white text-xs font-bold tracking-[0.6px] uppercase">
                  {article.category}
                </span>
                {article.date && (
                  <span className="flex items-center text-zinc-300 text-sm font-mono bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">
                    <Calendar className="w-4 h-4 mr-2" />
                    {article.date}
                  </span>
                )}
                <span className="flex items-center text-zinc-300 text-sm font-mono bg-black/30 px-3 py-1.5 rounded-full backdrop-blur-md border border-white/10">
                  <Clock className="w-4 h-4 mr-2" />5 min read
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight leading-[1.05] mb-8">
                {article.title}
              </h1>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/20 bg-zinc-800 flex items-center justify-center">
                  <User className="w-6 h-6 text-zinc-400" />
                </div>
                <div>
                  <p className="text-white font-medium">{article.author || 'EV360 Team'}</p>
                  <p className="text-white/60 text-sm">Battery Health Specialist</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Body */}
      <div className="max-w-[1440px] mx-auto px-8 lg:px-16 py-16 lg:py-24">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left sidebar — TOC + Share */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-32 space-y-12">
              {headings.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-[0.6px] mb-6">
                    Contents
                  </h4>
                  <nav className="space-y-1 relative border-l border-zinc-200 pl-4">
                    <motion.div
                      className="absolute left-[-1px] top-0 w-[2px] bg-[var(--brand-primary)]"
                      animate={{
                        height: 24,
                        y: Math.max(0, headings.findIndex((h) => h.id === activeSection)) * 28,
                      }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                    {headings.map((h) => (
                      <a
                        key={h.id}
                        href={`#${h.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById(h.id)?.scrollIntoView({ behavior: 'smooth' });
                          setActiveSection(h.id);
                        }}
                        className={`block text-sm py-1 transition-colors duration-200 ${
                          activeSection === h.id
                            ? 'text-[var(--brand-primary)] font-medium'
                            : 'text-zinc-500 hover:text-zinc-800'
                        }`}
                      >
                        {h.text}
                      </a>
                    ))}
                  </nav>
                </div>
              )}

              <div>
                <h4 className="text-xs font-bold text-zinc-400 uppercase tracking-[0.6px] mb-4">
                  Share
                </h4>
                <div className="flex gap-2">
                  {[Twitter, Linkedin, Facebook, LinkIcon].map((Icon, i) => (
                    <button
                      key={i}
                      className="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center text-zinc-500 hover:border-[var(--brand-primary)] hover:text-[var(--brand-primary)] hover:bg-[var(--brand-primary)]/5 transition-all"
                      aria-label={`Share on ${Icon.name}`}
                    >
                      <Icon className="w-4 h-4" />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="lg:col-span-6">
            <p className="lead text-xl text-zinc-800 leading-relaxed mb-10 font-light border-l-4 border-[var(--brand-primary)] pl-6 py-1">
              {article.description}
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="article-content"
              dangerouslySetInnerHTML={{ __html: processedContent }}
            />
          </div>

          {/* Right sidebar — CTA card */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-32">
              <div className="bg-zinc-900 text-white p-8 rounded-3xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--brand-primary)] rounded-full blur-[60px] opacity-30 pointer-events-none" />
                <h3 className="text-2xl font-light mb-3 relative">Is your battery healthy?</h3>
                <p className="text-zinc-400 text-sm mb-2 relative">Don&apos;t guess. Know for sure.</p>
                <p className="text-zinc-400 text-sm mb-8 relative leading-relaxed">
                  Get a certified EV360 battery health check and understand how your battery is
                  performing in the real world.
                </p>
                <Link href="/booking" className="block relative">
                  <button className="w-full py-4 rounded-full bg-[var(--brand-primary)] text-white font-bold hover:bg-[#4B60FF] transition-colors flex items-center justify-center gap-2 cursor-pointer">
                    Check My Battery
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Read Next */}
      {relatedArticles.length > 0 && (
        <section className="bg-zinc-50 py-24 border-t border-zinc-200">
          <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
            <h2 className="text-3xl font-light mb-12 flex items-center gap-3">
              <span className="w-8 h-px bg-zinc-400" />
              Read Next
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {relatedArticles.map((related) => {
                const relatedFeatured = (FEATURED_ARTICLE_SLUGS as readonly string[]).includes(related.slug);
                const relatedHero = relatedFeatured
                  ? `/assets/articles/${related.slug}/hero.webp`
                  : related.image;
                return (
                  <Link
                    key={related.slug}
                    href={`/learn/${related.slug}`}
                    className="group block bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-zinc-100"
                  >
                    <div className="grid md:grid-cols-2 h-full">
                      <div className="h-64 md:h-auto overflow-hidden relative bg-zinc-100">
                        <ImageWithFallback
                          src={relatedHero}
                          alt={related.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                      </div>
                      <div className="p-8 flex flex-col">
                        <span className="text-[var(--brand-primary)] text-xs font-bold uppercase tracking-[0.6px] mb-3">
                          {related.category}
                        </span>
                        <h3 className="text-xl font-medium mb-3 group-hover:text-[var(--brand-primary)] transition-colors">
                          {related.title}
                        </h3>
                        <p className="text-zinc-500 text-sm line-clamp-2 mb-6">
                          {related.description}
                        </p>
                        <div className="flex items-center text-zinc-400 text-xs font-medium uppercase tracking-[0.6px] mt-auto">
                          Read Article
                          <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}
