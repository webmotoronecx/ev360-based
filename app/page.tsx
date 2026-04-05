import { HomeClient } from "@/components/HomeClient";
import { getSiteContent } from "@/lib/content";

export default async function Page() {
  const content = await getSiteContent();
  return <HomeClient content={content} />;
}
