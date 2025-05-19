import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import { blogPosts } from "@/data/blog-posts"

import { Metadata } from "next"

type BlogPostPageProps = {
  params: {
    slug: string
  }
}

function getPostBySlug(slug: string) {
    return blogPosts.find((post) => post.slug === slug)
  }
  

  export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = params
    const post = await getPostBySlug(slug)
  
    if (!post) {
      notFound()
    }

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <Link
          href="/blog"
          className="inline-flex items-center text-foreground/70 hover:text-foreground transition-colors mb-12 text-xs uppercase tracking-widest"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to journal
        </Link>

        <article>
          <header className="mb-16">
            <span className="text-xs uppercase tracking-widest text-foreground/60 mb-4 block">{post.date}</span>
            <h1 className="text-2xl md:text-3xl font-serif font-normal tracking-tight text-foreground mb-8">
              {post.title}
            </h1>

            <div className="flex items-center justify-between">
              <div className="flex space-x-4">
                {post.categories.map((category) => (
                  <span key={category} className="text-xs uppercase tracking-widest text-foreground/60">
                    {category}
                  </span>
                ))}
              </div>
              <span className="text-xs uppercase tracking-widest text-foreground/60">{post.readTime} min read</span>
            </div>
          </header>

          {post.image && (
  <div className="mb-16">
    <Image
      src={post.image}
      alt={post.title}
      width={1200}
      height={675}
      className="w-full object-cover h-[400px] md:h-[500px] grayscale"
    />
  </div>
)}

          <div className="prose prose-gray font-serif max-w-none">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>
        </article>
      </main>
    </div>
  )
}

export async function generateStaticParams(): Promise<
  { slug: string }[]
> {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}
  

