import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

// Define the Post type
type Post = {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  image: string;
};

export default function Home() {
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
            {featuredPosts.map((post: Post) => (
              <article key={post.id} className="group">
                <Link href={`/blog/${post.slug}`}>
                  <div className="mb-6 overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={600}
                      height={400}
                      className="object-cover w-full h-[320px] group-hover:scale-105 transition-transform duration-700 ease-out grayscale hover:grayscale-0"
                    />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-foreground/60 mb-3 block">{post.date}</span>
                  <h3 className="text-lg font-serif mb-3 text-foreground">{post.title}</h3>
                  <p className="text-foreground/70 mb-3 font-serif text-sm leading-relaxed">{post.excerpt}</p>
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-16">
            <Link
              href="/blog"
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

// Sample data
const featuredPosts: Post[] = [
  {
    id: 1,
    title: "Piece No. 4: Philips Hue Light Bulbs",
    slug: "piece-no-four-philips",
    excerpt: "Reflecting on light in our spaces.",
    date: "May 7, 2025",
    image: "/placeholder.svg",
  },
  {
    id: 2,
    title: "Piece No. 3: Granola",
    slug: "piece-no-three-granola",
    excerpt: "Admiring an AI first application for age old workflow",
    date: "April 15, 2025",
    image: "/placeholder.svg",
  },
];