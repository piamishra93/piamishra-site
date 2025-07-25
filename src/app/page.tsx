import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        {/* Hero Section */}
        <section className="pt-16 md:pt-24 mb-32 md:mb-40">
          <h1 className="text-3xl md:text-4xl font-serif font-normal tracking-tight text-foreground mb-8">
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
      </main>
    </div>
  )
}