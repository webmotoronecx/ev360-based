/**
 * Content layer — fetches from Sanity when configured, falls back to siteConfig.
 *
 * This is the ONLY place components should import content from.
 * Components stay identical; content source switches transparently.
 */

import { getSanityClient } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { siteSettingsQuery, heroQuery } from "@/sanity/lib/queries";
import { isSanityConfigured } from "@/sanity/env";
import { siteConfig, type SiteConfig } from "@/config/site.config";

type SanityImage = { asset?: { _ref?: string }; _type?: string };

type RawSiteSettings = {
  name?: string;
  tagline?: string;
  description?: string;
  logo?: SanityImage;
  logoAlt?: string;
  nav?: Array<{ label: string; href: string }>;
  primaryCta?: { label?: string; href?: string };
};

type RawHero = {
  headline?: string;
  sub?: string;
  backgroundImage?: SanityImage;
  theme?: "dark" | "light";
  primaryCta?: { label?: string; href?: string };
  secondaryCta?: { label?: string; href?: string };
  brandMarqueeEyebrow?: string;
  brandMarqueeBrands?: Array<{
    name: string;
    logo?: SanityImage;
    url?: string;
    invert?: boolean;
  }>;
};

/** Merge Sanity data over static fallback, preferring Sanity when fields are present. */
export async function getSiteContent(): Promise<SiteConfig> {
  const client = getSanityClient();
  if (!isSanityConfigured || !client) return siteConfig;

  try {
    const [settings, hero] = await Promise.all([
      client.fetch<RawSiteSettings | null>(siteSettingsQuery),
      client.fetch<RawHero | null>(heroQuery),
    ]);

    // Resolve logo: Sanity upload wins, else fall back to static
    const sanityLogoUrl = settings?.logo
      ? urlForImage(settings.logo)?.url()
      : null;

    const heroBgUrl = hero?.backgroundImage
      ? urlForImage(hero.backgroundImage)?.width(2400).url()
      : null;

    const brands =
      hero?.brandMarqueeBrands?.map((b) => ({
        name: b.name,
        url: b.logo
          ? urlForImage(b.logo)?.width(200).url() || b.url || ""
          : b.url || "",
        invert: b.invert,
      })) ?? siteConfig.brandMarquee.brands;

    return {
      name: settings?.name ?? siteConfig.name,
      tagline: settings?.tagline ?? siteConfig.tagline,
      description: settings?.description ?? siteConfig.description,
      logo: {
        src: sanityLogoUrl ?? siteConfig.logo.src,
        alt: settings?.logoAlt ?? siteConfig.logo.alt,
        heightClass: siteConfig.logo.heightClass,
      },
      nav: settings?.nav?.length ? settings.nav : siteConfig.nav,
      primaryCta: {
        label: settings?.primaryCta?.label ?? siteConfig.primaryCta.label,
        href: settings?.primaryCta?.href ?? siteConfig.primaryCta.href,
      },
      secondaryCta: {
        label: hero?.secondaryCta?.label ?? siteConfig.secondaryCta.label,
        href: hero?.secondaryCta?.href ?? siteConfig.secondaryCta.href,
      },
      hero: {
        headline: hero?.headline ?? siteConfig.hero.headline,
        sub: hero?.sub ?? siteConfig.hero.sub,
        backgroundImage: heroBgUrl ?? siteConfig.hero.backgroundImage,
        theme: hero?.theme ?? siteConfig.hero.theme,
      },
      brandMarquee: {
        eyebrow:
          hero?.brandMarqueeEyebrow ?? siteConfig.brandMarquee.eyebrow,
        brands,
      },
    };
  } catch (err) {
    // If Sanity is misconfigured or fetch fails, never break the site — use fallback
    console.warn("[content] Sanity fetch failed, using siteConfig fallback:", err);
    return siteConfig;
  }
}
