import { useEffect } from 'react'
import { motion } from 'framer-motion'

const backdrop = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

const panel = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: 30,
    scale: 0.98,
    transition: { duration: 0.3, ease: 'easeIn' },
  },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } },
}

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

export default function ProjectDetail({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [onClose])

  const detail = project.detail ?? {}

  return (
    <motion.div
      variants={backdrop}
      initial="hidden"
      animate="show"
      exit="exit"
      className="fixed inset-0 z-[60] flex items-start justify-center bg-black/80 backdrop-blur-sm overflow-y-auto px-4 py-10 sm:py-16"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} deep dive`}
      onClick={onClose}
    >
      <motion.article
        variants={panel}
        onClick={(e) => e.stopPropagation()}
        className="glass relative w-full max-w-4xl overflow-hidden p-6 sm:p-10 md:p-12"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -right-24 h-72 w-72 rounded-full bg-accent/25 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
        />

        <button
          type="button"
          onClick={onClose}
          aria-label="Close deep dive"
          className="absolute top-4 right-4 rounded-full border border-white/15 p-2 text-white/70 hover:text-accent hover:border-accent/50 transition-colors"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="relative"
        >
          {project.badge && (
            <motion.span
              variants={item}
              className="inline-flex items-center text-[11px] tracking-widest uppercase rounded-full border border-accent/40 text-accent px-3 py-1"
            >
              {project.badge}
            </motion.span>
          )}

          <motion.h2
            variants={item}
            className="mt-4 font-display text-3xl md:text-5xl font-semibold tracking-tight"
          >
            {project.title}
          </motion.h2>

          {detail.tagline && (
            <motion.p
              variants={item}
              className="mt-2 text-accent/80 text-sm uppercase tracking-[0.25em]"
            >
              {detail.tagline}
            </motion.p>
          )}

          {detail.overview && (
            <motion.p
              variants={item}
              className="mt-6 text-white/80 leading-relaxed text-base md:text-lg max-w-3xl"
            >
              {detail.overview}
            </motion.p>
          )}

          {detail.metrics?.length > 0 && (
            <motion.section
              variants={item}
              aria-label="Performance metrics"
              className="mt-10"
            >
              <h3 className="text-xs uppercase tracking-[0.3em] text-accent/80 mb-4">
                Performance Metrics
              </h3>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {detail.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="rounded-xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <div className="font-display text-2xl text-accent">
                      {m.value}
                    </div>
                    <div className="text-xs text-white/60 mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {detail.architecture?.length > 0 && (
            <motion.section
              variants={item}
              aria-label="Technical architecture"
              className="mt-10"
            >
              <h3 className="text-xs uppercase tracking-[0.3em] text-accent/80 mb-4">
                Technical Architecture
              </h3>
              <div className="grid gap-4 md:grid-cols-2">
                {detail.architecture.map((a) => (
                  <div
                    key={a.title}
                    className="rounded-xl border border-white/10 bg-white/[0.03] p-5"
                  >
                    <div className="font-display text-base text-white">
                      {a.title}
                    </div>
                    <p className="mt-2 text-sm text-white/65 leading-relaxed">
                      {a.body}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>
          )}

          {detail.features?.length > 0 && (
            <motion.section
              variants={item}
              aria-label="Key features"
              className="mt-10"
            >
              <h3 className="text-xs uppercase tracking-[0.3em] text-accent/80 mb-4">
                Core Capabilities
              </h3>
              <ul className="grid gap-2 sm:grid-cols-2">
                {detail.features.map((f) => (
                  <li
                    key={f}
                    className="flex gap-3 text-sm text-white/75 leading-relaxed"
                  >
                    <span aria-hidden="true" className="text-accent mt-1">
                      ▸
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </motion.section>
          )}

          {detail.tech?.length > 0 && (
            <motion.section
              variants={item}
              aria-label="Tech stack"
              className="mt-10"
            >
              <h3 className="text-xs uppercase tracking-[0.3em] text-accent/80 mb-4">
                Tech Stack
              </h3>
              <ul className="flex flex-wrap gap-2">
                {detail.tech.map((t) => (
                  <li
                    key={t}
                    className="text-xs rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-white/70"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </motion.section>
          )}

          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-2 rounded-full bg-accent text-black px-6 py-3 text-sm font-semibold hover:bg-accent-soft transition-colors"
            >
              <span aria-hidden="true">←</span>
              Back to Portfolio
            </button>

            {detail.links?.map((l) => (
              <a
                key={l.href}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm hover:border-accent/60 hover:text-accent transition-colors"
              >
                {l.label}
                <span aria-hidden="true">→</span>
              </a>
            ))}

            {project.href && !detail.links?.some((l) => l.href === project.href) && (
              <a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm hover:border-accent/60 hover:text-accent transition-colors"
              >
                View on GitHub
                <span aria-hidden="true">→</span>
              </a>
            )}
          </motion.div>
        </motion.div>
      </motion.article>
    </motion.div>
  )
}
