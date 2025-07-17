import Link from "next/link"

export default function Footer() {
  return (
    <footer className="px-6 py-16 mt-auto border-t border-foreground/10">
      <div className="max-w-4xl mx-auto">
        {/* Connect */}
        <div>
          <h3 className="text-sm uppercase tracking-widest mb-4 text-foreground/60">Connect</h3>
          <ul className="space-y-2">
            <li>
              <Link 
                href="https://x.com/piamishra" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-foreground/70 hover:text-foreground transition-colors font-serif no-underline"
              >
                Twitter
              </Link>
            </li>
            <li>
              <Link 
                href="https://www.linkedin.com/in/pia-mishra/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-foreground/70 hover:text-foreground transition-colors font-serif no-underline"
              >
                LinkedIn
              </Link>
            </li>
            <li>
              <Link 
                href="https://github.com/piamishra93" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-foreground/70 hover:text-foreground transition-colors font-serif no-underline"
              >
                GitHub
              </Link>
            </li>
            <li>
              <Link 
                href="mailto:piamishra93@gmail.com"
                className="text-sm text-foreground/70 hover:text-foreground transition-colors font-serif no-underline"
              >
                Email
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
} 