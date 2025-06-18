import { parseStringPromise } from "xml2js";

export type SubstackPost = {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  // Add more fields as needed
};

export async function fetchSubstackPosts(feedUrl: string): Promise<SubstackPost[]> {
  try {
    const res = await fetch(feedUrl);
    const xml = await res.text();
    
    const json = await parseStringPromise(xml, {
      trim: true,
      explicitArray: false,
      ignoreAttrs: true,
      tagNameProcessors: [(name) => name.toLowerCase()],
    });

    const items = Array.isArray(json.rss.channel.item) 
      ? json.rss.channel.item 
      : [json.rss.channel.item];
      
    return items.map((item: Record<string, string | Record<string, string>>) => ({
      title: typeof item.title === 'string' ? item.title : item.title['_'] || item.title,
      link: typeof item.link === 'string' ? item.link : item.link['_'] || item.link,
      pubDate: typeof item.pubdate === 'string' ? item.pubdate : item.pubdate['_'] || item.pubdate,
      description: typeof item.description === 'string' ? item.description : item.description['_'] || item.description,
    }));
  } catch (error) {
    console.error('Error fetching Substack posts:', error);
    return [];
  }
}
