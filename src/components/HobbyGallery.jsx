import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const backdrop = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.25 } },
  exit: { opacity: 0, transition: { duration: 0.2 } },
}

const panel = {
  hidden: { opacity: 0, y: 60, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: 40,
    scale: 0.98,
    transition: { duration: 0.3, ease: 'easeIn' },
  },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.05, delayChildren: 0.18 } },
}

const tile = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

function MediaTile({ item }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        role="img"
        aria-label={item.alt}
        className="aspect-[4/3] w-full rounded-xl border border-white/10 bg-gradient-to-br from-accent/10 via-white/[0.02] to-transparent flex items-center justify-center text-center px-6"
      >
        <span className="text-[11px] uppercase tracking-[0.25em] text-accent/70">
          {item.alt}
        </span>
      </div>
    )
  }

  if (item.type === 'video') {
    return (
      <video
        src={item.src}
        controls
        playsInline
        preload="metadata"
        aria-label={item.alt}
        onError={() => setFailed(true)}
        className="aspect-[4/3] w-full rounded-xl border border-white/10 bg-black object-cover"
      />
    )
  }

  return (
    <img
      src={item.src}
      alt={item.alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className="aspect-[4/3] w-full rounded-xl border border-white/10 object-cover"
    />
  )
}

export default function HobbyGallery({ hobby, onClose }) {
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

  const items = hobby.media ?? []

  return (
    <motion.div
      variants={backdrop}
      initial="hidden"
      animate="show"
      exit="exit"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${hobby.label} gallery`}
      className="fixed inset-0 z-[60] flex items-start justify-center bg-black/80 backdrop-blur-xl overflow-y-auto px-4 py-10 sm:py-16"
    >
      <motion.section
        variants={panel}
        onClick={(e) => e.stopPropagation()}
        className="glass relative w-full max-w-5xl overflow-hidden p-6 sm:p-9 md:p-12"
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
          aria-label={`Close ${hobby.label} gallery`}
          className="absolute top-4 right-4 z-10 rounded-full border border-accent/40 bg-black/60 p-2 text-accent hover:text-black hover:bg-accent transition-colors"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="relative">
          <span className="text-[11px] uppercase tracking-[0.3em] text-accent/80">
            Gallery
          </span>
          <h3 className="mt-2 font-display text-2xl md:text-4xl font-semibold tracking-tight text-white">
            {hobby.label}
          </h3>
          {hobby.description && (
            <p className="mt-3 text-white/70 leading-relaxed text-sm md:text-base max-w-2xl">
              {hobby.description}
            </p>
          )}
        </div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item, i) => (
            <motion.div key={`${item.src}-${i}`} variants={tile}>
              <MediaTile item={item} />
            </motion.div>
          ))}

          {items.length === 0 && (
            <motion.div
              variants={tile}
              className="sm:col-span-2 lg:col-span-3 rounded-xl border border-dashed border-accent/30 bg-black/40 p-8 text-center"
            >
              <p className="text-sm text-white/60">
                No media yet. Drop files into{' '}
                <code className="text-accent">
                  /public/assets/{hobby.id}/
                </code>{' '}
                and they will appear here.
              </p>
            </motion.div>
          )}
        </motion.div>
      </motion.section>
    </motion.div>
  )
}
