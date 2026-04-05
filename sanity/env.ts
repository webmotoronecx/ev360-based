/**
 * Sanity environment configuration.
 *
 * Set these in .env.local:
 *   NEXT_PUBLIC_SANITY_PROJECT_ID=xxxxxxxx
 *   NEXT_PUBLIC_SANITY_DATASET=production
 *
 * The site gracefully falls back to config/site.config.ts if Sanity is not configured,
 * so local dev works without setup.
 */

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2024-10-01";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "production"
);

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "";

export const useCdn = true;

/** True if Sanity is configured — components check this to decide whether to fetch or fall back */
export const isSanityConfigured = Boolean(projectId);

function assertValue<T>(v: T | undefined, fallback: T): T {
  return v ?? fallback;
}
