import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { fetchSubstackPosts, SubstackPost } from "../lib/fetchSubstackPosts"

export default async function Home() {
  const substackPosts = await fetchSubstackPosts('https://productsalon.substack.com/feed');
  const featuredPosts = substackPosts.slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        {/* Hero Section */}
        <section className="mb-32 md:mb-40">
          <h1 className="text-4xl md:text-5xl font-serif font-normal tracking-tight text-foreground mb-8">
            Hi, I&apos;m Pia
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-xl mb-12 font-serif leading-relaxed">
            I like to think, imagine, express. Welcome.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center text-sm uppercase tracking-widest text-foreground/90 hover:text-foreground transition-colors no-underline"
          >
            More about me
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </section>

        {/* Featured Posts */}
        <section className="mb-32 md:mb-40">
          <h2 className="text-sm uppercase tracking-widest mb-16 text-foreground/60">Recent Thoughts</h2>
          <div className="grid gap-16 md:grid-cols-2">
            {featuredPosts.map((post: SubstackPost, index: number) => (
              <article key={post.link} className="group">
                <Link 
                  href={post.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block group-hover:opacity-80 transition-opacity no-underline"
                >
                  <span className="text-xs uppercase tracking-widest text-foreground/60 mb-4 block">
                    {new Date(post.pubDate).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    }).toUpperCase()}
                  </span>
                  <h3 className="text-xl md:text-2xl font-serif mb-4 text-foreground group-hover:text-foreground/80 transition-colors">
                    Piece No. {4 - index}: {post.title}
                  </h3>
                  <p className="text-base text-foreground/70 font-serif leading-relaxed">
                    {post.description.replace(/<[^>]*>/g, '')}
                  </p>
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-20">
            <Link
              href="/journal"
              className="inline-flex items-center text-sm uppercase tracking-widest text-foreground/90 hover:text-foreground transition-colors no-underline"
            >
              View all posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}