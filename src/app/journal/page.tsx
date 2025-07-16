import Link from "next/link"
import { fetchSubstackPosts, SubstackPost } from '../../lib/fetchSubstackPosts';

export default async function JournalPage() {
  const posts: SubstackPost[] = await fetchSubstackPosts('https://productsalon.substack.com/feed');

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <h1 className="text-sm uppercase tracking-widest mb-16 text-foreground/90">Journal</h1>

        <div className="grid gap-20">
          {posts.map((post: SubstackPost) => (
            <article key={post.link}>
              <span className="text-xs uppercase tracking-widest text-foreground/60 mb-3 block">
                {new Date(post.pubDate).toLocaleDateString('en-US', { 
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                }).toUpperCase()}
              </span>
              <Link href={post.link} target="_blank" rel="noopener noreferrer">
                <h2 className="text-xl font-serif mb-4 text-foreground hover:text-foreground/80 transition-colors">
                  {post.title}
                </h2>
              </Link>
              <p className="text-foreground/70 mb-5 font-serif text-base leading-relaxed">
                {post.description.replace(/<[^>]*>/g, '')}
              </p>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}
