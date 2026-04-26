import { useEffect, useState } from 'react'

const links = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#hobbies', label: 'Hobbies' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <nav
          aria-label="Primary"
          className="glass flex items-center justify-between gap-4 px-4 sm:px-6 py-3"
        >
          <a
            href="#top"
            className="font-display text-lg font-semibold tracking-tight"
          >
            UET <span className="text-accent">Portfolio</span>
          </a>

          <ul className="hidden md:flex items-center gap-7 text-sm text-white/70">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="hover:text-accent transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/in/ulvis-edijs-turkers"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-accent text-black px-4 py-1.5 text-sm font-medium hover:bg-accent-soft transition-colors"
            >
              LinkedIn
            </a>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="md:hidden rounded-full border border-white/15 p-2 text-white/80 hover:text-accent hover:border-accent/40 transition-colors"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {open ? (
                  <>
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </>
                ) : (
                  <>
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </nav>

        {open && (
          <div className="md:hidden mt-2 glass p-4">
            <ul className="flex flex-col gap-3 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-1 text-white/80 hover:text-accent transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  )
}
