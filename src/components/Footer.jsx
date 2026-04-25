export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
        <span>© {new Date().getFullYear()} Ulvis Edijs Turkers</span>
        <span>Built with React, Tailwind CSS, and Framer Motion.</span>
      </div>
    </footer>
  )
}
