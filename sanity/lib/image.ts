import createImageUrlBuilder from "@sanity/image-url";
import { dataset, isSanityConfigured, projectId } from "../env";

// Lazy: only create builder when Sanity is configured, otherwise any urlForImage call returns null.
let builder: ReturnType<typeof createImageUrlBuilder> | null = null;
function getBuilder() {
  if (!isSanityConfigured) return null;
  if (!builder) builder = createImageUrlBuilder({ projectId, dataset });
  return builder;
}

export function urlForImage(source: unknown) {
  const b = getBuilder();
  if (!b || !source) return null;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return b.image(source as any).auto("format").fit("max");
}
