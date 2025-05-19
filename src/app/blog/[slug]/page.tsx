import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug)

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

// Data for the blog posts
const blogPosts = [
  {
    id: 1,
    title: "Piece No. 4: Philips Hue Light Bulbs",
    slug: "piece-no-four-philips",
    excerpt:
      "Reflecting on light in our spaces.",
    date: "May 7, 2025",
    readTime: 5,
    image: "/philips-hue.jpg",
    categories: ["Productivity", "Technology", "UX", "Design", "AI"],
    content: `
  <h2 class="mt-12 mb-4 font-semibold text-xl">I. Context</h2>
  <p>
    The Philips Hue smart bulb was a happy accident of the mobile-first world that the release of the iPhone created.
    Philips’ phone-first lighting system was initially intended to shortcut lengthy hardware cycles and quickly
    prototype a remote control for an older generation of lamps.
  </p>
  <p>
    The development team realized, though, how powerful mobile phones could be in creating a convenient, flexible
    lighting system — giving rise to the smart bulbs we know and use today.
  </p>
  <p>
    In many ways, the creation of the Hue smart bulb is the 21st century evolution of Philips’ mission from the 1890s:
    creating cost-effective, reliable bulbs that pushed boundaries through the creative use of emerging technology.
  </p>

  <h2 class="mt-12 mb-4 font-semibold text-xl">II. Choices</h2>

  <h3 class="mt-12 mb-2 font-semibold text-lg">A | Consistent and classic bulb design</h3>
  <ul>
    <li>Philips kept the shape of their smart devices consistent with what users recognize in standard LED & incandescent bulbs.
    Earlier energy-saving bulbs, like the CFL, offered futuristic designs that never really landed — in spite of providing
    a cost-efficient and sustainable option.</li>
  </ul>
  <ul>
    <li>Bulbs are often exposed in living spaces — this means visual appeal needs to match or exceed utility. Philips recognized
    this in opting for a traditional silhouette for their first smart bulbs, but have also expanded the lighting line over time
    to include a diverse portfolio of shapes for different environments.</li>
  </ul>
  <ul>
    <li>Taking advantage of & innovating with evolving lighting technology has also given Philips space to play with visual feel
    and experience without altering design.</li>
  </ul>

  <h3 class="mt-12 mb-2 font-semibold text-lg">B | Dynamic tones to influence ambiance</h3>
  <ul>
    <li>LED bulbs historically emitted blue-toned light, making the spaces they were installed in feel sterile. Despite being more
    expensive, and worse for the environment, this often led users to incandescents when a cozier feel was needed.</li>
  </ul>
  <ul>
    <li>However, Hue bulbs allow for changes between warm and cool tones, in addition to supporting dimming of the light itself.
    Certain Hue devices also support colors beyond a standard white or yellow palette.</li>
  </ul>
  <ul>
    <li>These days, the Philips colored bulbs can even be configured to dynamically adjust to music in a room — a playful take on
    shaping experience with light.</li>
  </ul>

  <h3 class="mt-12 mb-2 font-semibold text-lg">C | Simple but powerful mobile application</h3>
  <ul>
    <li>The landing page of the Hue app is straightforward — it defaults to the controls for your bulbs and enables a simple
    on/off toggle for each device. However, there are entry points to more complex scene settings should users want to
    explore additional ambiances.</li>
  </ul>
  <ul>
    <li>While managing the experience once the bulbs are installed is clear, the setup process can be confusing — particularly
    if the bulbs are meant to plug into a broader home system. This may be a disadvantage of streamlined UI — it’s hard to
    know how or where to configure deeper functionality.</li>
  </ul>

  <h2 class="mt-12 mb-4 font-semibold text-xl">III. Conclusions</h2>
  <ul>
    <li>Great, innovative design needn’t be conflated with overly complex, detailed or imaginative items — Philips Hue smart
    bulbs offer a lesson in balancing an innovative approach with a classic aesthetic.</li>
  </ul>
  <ul>
    The bulbs are also one of the few products in the market that elegantly blend together physical and digital worlds.
    The mobile app mimics the bulbs — functional, simple, and well integrated into the ecosystem they are a part of.
  </p>
`

  },
  {
    id: 2,
    title: "Piece No. 3: Granola",
    slug: "piece-no-three-granola",
    excerpt:
      "Admiring an AI first application for age old workflow",
    date: "April 15, 2025",
    readTime: 7,
    image: "/placeholder.svg",
    categories: ["Productivity", "Technology", "UX", "Design", "AI"],
  },
  {
    id: 3,
    title: "Piece No. 2: SFO International Terminal",
    slug: "piece-no-two-sfo",
    excerpt:
      "An acknowledgement of the places we travel through",
    date: "April 6, 2025",
    readTime: 6,
    image: "/placeholder.svg",
    categories: ["Productivity", "Technology", "UX", "Design", "AI"],
  },
  {
    id: 4,
    title: "Piece No. 1: Arc Browser",
    slug: "piece-no-one-arc",
    excerpt:
      "Exploring a philosophical approach to internet utilities",
    date: "March 22, 2025",
    readTime: 8,
    image: "/placeholder.svg",
    categories: ["Productivity", "Technology", "UX", "Design", "AI"],
  },
]

