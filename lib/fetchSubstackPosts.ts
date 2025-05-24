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
  return items.map((item: any) => ({
    title: item.title[0],
    link: item.link[0],
    pubDate: item.pubDate[0],
    description: item.description[0],
  }));
}
