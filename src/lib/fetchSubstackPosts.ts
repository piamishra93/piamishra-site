import { parseStringPromise } from "xml2js";

export type SubstackPost = {
  title: string;
  link: string;
  pubDate: string;
  description: string;
  categories?: string[];
  // Add more fields as needed
};

interface ParsedXmlItem {
  title: string[];
  link: string[];
  pubDate: string[];
  description: string[];
  category?: string[];
}

interface ParsedXmlData {
  rss: {
    channel: Array<{
      item: ParsedXmlItem[];
    }>;
  };
}

// Cache the posts for 1 hour
let cachedPosts: SubstackPost[] | null = null;
let lastFetchTime: number = 0;
const CACHE_DURATION = 3600000; // 1 hour in milliseconds

export async function fetchSubstackPosts(feedUrl: string): Promise<SubstackPost[]> {
  const now = Date.now();
  
  // Return cached posts if they're still valid
  if (cachedPosts && (now - lastFetchTime) < CACHE_DURATION) {
    return cachedPosts;
  }

  try {
    const res = await fetch(feedUrl, { next: { revalidate: 3600 } }); // Revalidate every hour
    
    if (!res.ok) {
      throw new Error(`Failed to fetch Substack feed: ${res.status} ${res.statusText}`);
    }
    
    const xml = await res.text();
    const json = await parseStringPromise(xml) as ParsedXmlData;

    if (!json.rss?.channel?.[0]?.item) {
      throw new Error('Invalid RSS feed format');
    }

    const items = json.rss.channel[0].item;
    cachedPosts = items.map((item: ParsedXmlItem) => ({
      title: item.title[0],
      link: item.link[0],
      pubDate: item.pubDate[0],
      description: item.description[0],
      categories: item.category,
    }));
    
    lastFetchTime = now;
    return cachedPosts;
  } catch (error) {
    console.error('Error fetching Substack posts:', error);
    // Return cached posts if available, even if expired
    if (cachedPosts) {
      return cachedPosts;
    }
    // Return empty array if no cache available
    return [];
  }
}
