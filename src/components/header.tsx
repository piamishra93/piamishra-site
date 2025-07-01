import Link from "next/link"

export default function Header() {
  return (
    <header className="px-6 py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <nav className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-lg font-serif font-medium text-foreground"
          >
            Pia Mishra
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-sm uppercase tracking-widest text-foreground/70 hover:text-foreground transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-sm uppercase tracking-widest text-foreground/70 hover:text-foreground transition-colors"
            >
              About
            </Link>
            <Link 
              href="/blog" 
              className="text-sm uppercase tracking-widest text-foreground/70 hover:text-foreground transition-colors"
            >
              Journal
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
} 