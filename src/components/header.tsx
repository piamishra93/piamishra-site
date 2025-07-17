import Link from "next/link"

export default function Header() {
  return (
    <header className="px-6 py-8 md:py-12">
      <div className="max-w-4xl mx-auto">
        <nav className="flex items-center justify-between">
          <Link 
            href="/" 
            className="text-sm uppercase tracking-widest text-foreground hover:text-foreground/80 transition-colors no-underline"
          >
            Pia Mishra
          </Link>
          
          <div className="flex items-center space-x-12">
            <Link 
              href="/" 
              className="text-sm uppercase tracking-widest text-foreground/60 hover:text-foreground transition-colors no-underline"
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-sm uppercase tracking-widest text-foreground/60 hover:text-foreground transition-colors no-underline"
            >
              About
            </Link>
            <Link 
              href="/journal" 
              className="text-sm uppercase tracking-widest text-foreground/60 hover:text-foreground transition-colors no-underline"
            >
              Journal
            </Link>
            <Link 
              href="/views" 
              className="text-sm uppercase tracking-widest text-foreground/60 hover:text-foreground transition-colors no-underline"
            >
              Views
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
} 