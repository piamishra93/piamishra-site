import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { fetchSubstackPosts, SubstackPost } from "@/lib/fetchSubstackPosts"

export default async function Home() {
  const substackPosts = await fetchSubstackPosts('https://productsalon.substack.com/feed');
  const featuredPosts = substackPosts.slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        {/* Hero Section */}
        <section className="mb-28 md:mb-40">
          <h1 className="text-3xl md:text-4xl font-serif font-normal tracking-tight text-foreground mb-10 max-w-2xl">
            Hi, I&apos;m Pia
          </h1>
          <p className="text-base md:text-lg text-foreground/80 max-w-xl mb-10 font-serif leading-relaxed">
            I like to think, imagine, express. Welcome.
          </p>
          <Link
            href="/about"
            className="inline-flex items-center text-foreground/90 border-b border-foreground/30 pb-1 hover:border-foreground transition-colors text-sm uppercase tracking-widest"
          >
            More about me
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </section>

        {/* Featured Posts */}
        <section className="mb-28 md:mb-40">
          <h2 className="text-sm uppercase tracking-widest mb-12 text-foreground/90">Recent Thoughts</h2>
          <div className="grid gap-16 md:grid-cols-2">
            {featuredPosts.map((post: SubstackPost, index: number) => (
              <article key={post.link} className="group">
                <Link href={post.link} target="_blank" rel="noopener noreferrer">
                  <span className="text-xs uppercase tracking-widest text-foreground/60 mb-3 block">
                    {new Date(post.pubDate).toLocaleDateString('en-US', {
                      month: 'long',
                      day: 'numeric',
                      year: 'numeric'
                    }).toUpperCase()}
                  </span>
                  <h3 className="text-lg font-serif mb-3 text-foreground">
                    Piece No. {4 - index}: {post.title}
                  </h3>
                  <p className="text-foreground/70 mb-3 font-serif text-sm leading-relaxed">
                    {post.description.replace(/<[^>]*>/g, '')}
                  </p>
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-16">
            <Link
              href="/journal"
              className="inline-flex items-center text-foreground/90 border-b border-foreground/30 pb-1 hover:border-foreground transition-colors text-sm uppercase tracking-widest"
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