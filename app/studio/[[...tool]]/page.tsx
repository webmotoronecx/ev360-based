/**
 * Embedded Sanity Studio at /studio
 *
 * Visit /studio to edit content. Authentication is handled by Sanity.
 */
import { Studio } from "./Studio";

export const dynamic = "force-static";

export { metadata, viewport } from "next-sanity/studio";

export default function StudioPage() {
  return <Studio />;
}
