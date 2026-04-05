import { createClient, type SanityClient } from "next-sanity";
import { apiVersion, dataset, isSanityConfigured, projectId, useCdn } from "../env";

let _client: SanityClient | null = null;

/** Returns a Sanity client, or null if projectId isn't configured. */
export function getSanityClient(): SanityClient | null {
  if (!isSanityConfigured) return null;
  if (_client) return _client;
  _client = createClient({ projectId, dataset, apiVersion, useCdn });
  return _client;
}
