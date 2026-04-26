import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const backdrop = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.25 } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.04, delayChildren: 0.35 } },
}

const tileVariant = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
}

const fade = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.3, duration: 0.4, ease: 'easeOut' },
  },
  exit: { opacity: 0, transition: { duration: 0.15 } },
}

function MediaItem({ item }) {
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
        muted
        loop
        playsInline
        autoPlay
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

  const [hero, ...rest] = hobby.media
  const isVideoHero = hero?.type === 'video'

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
      className="fixed inset-0 z-[60] flex items-start justify-center bg-black/85 backdrop-blur-xl overflow-y-auto px-4 py-8 sm:py-14"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-6xl"
      >
        <motion.button
          type="button"
          onClick={onClose}
          variants={fade}
          initial="hidden"
          animate="show"
          exit="exit"
          aria-label={`Close ${hobby.label} gallery`}
          className="fixed top-5 right-5 sm:top-8 sm:right-8 z-[70] inline-flex items-center gap-2 rounded-full border border-accent/50 bg-black/70 px-4 py-2 text-sm font-semibold text-accent hover:bg-accent hover:text-black transition-colors"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
          Close
        </motion.button>

        <motion.section
          layout
          layoutId={`hobby-card-${hobby.id}`}
          className="glass relative w-full overflow-hidden aspect-[16/9]"
        >
          {hero && !isVideoHero && (
            <img
              src={hero.src}
              alt={`${hobby.label} hero`}
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}
          {hero && isVideoHero && (
            <video
              src={hero.src}
              muted
              loop
              playsInline
              autoPlay
              aria-label={`${hobby.label} hero clip`}
              className="absolute inset-0 h-full w-full object-cover"
            />
          )}

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 -right-24 h-72 w-72 rounded-full bg-accent/25 blur-3xl"
          />

          <div className="relative h-full w-full flex flex-col justify-end p-6 sm:p-10">
            <span className="text-[11px] uppercase tracking-[0.3em] text-accent/80">
              Gallery
            </span>
            <h3 className="mt-2 font-display text-3xl md:text-5xl font-semibold tracking-tight text-white">
              {hobby.label}
            </h3>
            <p className="mt-3 max-w-2xl text-white/80 leading-relaxed text-sm md:text-base">
              {hobby.description}
            </p>
          </div>
        </motion.section>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {rest.map((item, i) => (
            <motion.div key={`${item.src}-${i}`} variants={tileVariant}>
              <MediaItem item={item} />
            </motion.div>
          ))}

          {rest.length === 0 && (
            <motion.div
              variants={tileVariant}
              className="sm:col-span-2 lg:col-span-3 rounded-xl border border-dashed border-accent/30 bg-black/40 p-8 text-center"
            >
              <p className="text-sm text-white/60">
                Only one item in this gallery so far.
              </p>
            </motion.div>
          )}
        </motion.div>

        <motion.div
          variants={fade}
          initial="hidden"
          animate="show"
          exit="exit"
          className="mt-8 flex justify-center"
        >
          <button
            type="button"
            onClick={onClose}
            className="inline-flex items-center gap-2 rounded-full bg-accent text-black px-6 py-3 text-sm font-semibold hover:bg-accent-soft transition-colors"
          >
            <span aria-hidden="true">←</span>
            Back to portfolio
          </button>
        </motion.div>
      </div>
    </motion.div>
  )
}
