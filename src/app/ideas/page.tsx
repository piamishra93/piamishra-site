import Link from "next/link"
import { fetchSubstackPosts, SubstackPost } from '../../lib/fetchSubstackPosts';

export default async function IdeasPage() {
  const posts: SubstackPost[] = await fetchSubstackPosts('https://productsalon.substack.com/feed');

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <h1 className="text-sm uppercase tracking-widest mb-16 text-foreground/90">Ideas</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post: SubstackPost) => (
            <Link 
              key={post.link} 
              href={post.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group"
            >
              <article className="h-48 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-300 cursor-pointer">
                <div className="flex flex-col h-full justify-between">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-foreground/60 mb-3 block">
                      {new Date(post.pubDate).toLocaleDateString('en-US', { 
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric'
                      }).toUpperCase()}
                    </span>
                    
                    <h2 className="text-lg font-serif text-foreground group-hover:text-foreground/80 transition-colors">
                      {post.title}
                    </h2>
                  </div>
                  
                  <div className="flex justify-end">
                    <span className="text-xs text-foreground/50 group-hover:text-foreground/70 transition-colors">
                      →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
