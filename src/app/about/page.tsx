import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div>
            <h1 className="text-sm uppercase tracking-widest mb-16 text-foreground/90">About</h1>

            <div className="prose prose-gray max-w-none font-serif">
              <p className="text-base text-foreground/80 mb-8 leading-relaxed">
                Hi! I&apos;m Pia Mishra, a product manager based in New York. I&apos;m passionate about the intersection of design and business.
              </p>

              <p className="text-base text-foreground/80 mb-8 leading-relaxed">
                I spent a number of years studying companies of all stages at Goldman Sachs & CapitalG. The last few years I&apos;ve been at Notion learning more about what it means to build beautiful products that form the foundations of great businesses.
              </p>

              <p className="text-base text-foreground/80 mb-8 leading-relaxed">
                When I&apos;m not working, you can find me reading, with friends or wandering through galleries, boutiques or other thoughtfully curated spaces. 
              </p>

              <p className="text-base text-foreground/80 mb-8 leading-relaxed">
                This website serves as a space for me to share my thoughts, work, and connect with like-minded individuals. Feel free to explore my journal where I write about products I love.
              </p>

              <p className="text-base text-foreground/80 mb-10 leading-relaxed">
                I&apos;m always open to new opportunities, collaborations, or just a friendly chat. Don&apos;t hesitate to reach
                out!
              </p>

              <Link
                href="https://x.com/piamishra"
                className="inline-flex items-center text-foreground/90 border-b border-foreground/30 pb-1 hover:border-foreground transition-colors text-sm uppercase tracking-widest"
              >
                Get in touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div>
            <div className="sticky top-24">
              <Image
                src="/pia.jpg"
                alt="Pia Mishra"
                width={600}
                height={800}
                className="w-full min-h-[400px] min-w-[300px] object-cover"
                priority
              />

              <div className="mt-16 space-y-12">
                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-6 text-foreground/90">Experience</h3>
                  <ul className="space-y-6">
                    {experiences.map((exp) => (
                      <li key={exp.id} className="border-l border-foreground/10 pl-5">
                        <span className="block text-xs uppercase tracking-widest text-foreground/60 mb-1">
                          {exp.period}
                        </span>
                        <span className="block text-foreground font-serif mb-1">{exp.role}</span>
                        <span className="block text-foreground/70 text-sm font-serif">{exp.company}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm uppercase tracking-widest mb-6 text-foreground/90">Education</h3>
                  <ul className="space-y-6">
                    {education.map((edu) => (
                      <li key={edu.id} className="border-l border-foreground/10 pl-5">
                        <span className="block text-xs uppercase tracking-widest text-foreground/60 mb-1">
                          {edu.period}
                        </span>
                        <span className="block text-foreground font-serif mb-1">{edu.degree}</span>
                        <span className="block text-foreground/70 text-sm font-serif">{edu.institution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

// Placeholder data
const experiences = [
  {
    id: 1,
    period: "2022 - Present",
    role: "Product Manager",
    company: "Notion",
  },
  {
    id: 2,
    period: "2017 - 2020",
    role: "Investor",
    company: "CapitalG (Google Capital)",
  },
  {
    id: 3,
    period: "2015 - 2017",
    role: "Investment Banker",
    company: "Goldman Sachs",
  },
]

const education = [
  {
    id: 1,
    period: "2020 - 2022",
    degree: "Masters of Business Administration",
    institution: "Stanford",
  },
  {
    id: 2,
    period: "2011 - 2015",
    degree: "Bachelor of Science",
    institution: "UC Berkeley",
  },
]
