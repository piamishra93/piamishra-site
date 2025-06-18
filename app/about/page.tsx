export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-4xl mx-auto px-6 py-16 md:py-24">
        <section className="mb-28 md:mb-40">
          <h1 className="text-3xl md:text-4xl font-serif font-normal tracking-tight text-foreground mb-10 max-w-2xl">
            About Me
          </h1>
          <div className="max-w-2xl space-y-6">
            <p className="text-base md:text-lg text-foreground/80 font-serif leading-relaxed">
              Welcome to my corner of the internet. I'm Pia, and I like to think, imagine, and express.
            </p>
            <p className="text-base md:text-lg text-foreground/80 font-serif leading-relaxed">
              This space is where I share my thoughts, ideas, and reflections on the world around us. 
              Through writing and exploration, I aim to capture moments of insight and curiosity.
            </p>
            <p className="text-base md:text-lg text-foreground/80 font-serif leading-relaxed">
              Thank you for being here and taking the time to explore these ideas with me.
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
