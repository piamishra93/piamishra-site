import { parseStringPromise } from "xml2js";

export type SubstackPost = {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  // Add more fields as needed
};

export async function fetchSubstackPosts(feedUrl: string): Promise<SubstackPost[]> {
  const res = await fetch(feedUrl);
  const xml = await res.text();
  const json = await parseStringPromise(xml);

  const items = json.rss.channel[0].item;
  return items.map((item: Record<string, unknown>) => ({
    title: (item as any).title[0],
    link: (item as any).link[0],
    pubDate: (item as any).pubDate[0],
    description: (item as any).description[0],
  }));
}
