import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Section from './Section.jsx'
import HobbyGallery from './HobbyGallery.jsx'
import { hobbies } from '../data/hobbies.js'

function HobbyTile({ hobby, index, onOpen }) {
  const thumb = hobby.media[0]
  const isVideoThumb = thumb?.type === 'video'

  return (
    <motion.button
      type="button"
      layout
      layoutId={`hobby-card-${hobby.id}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      whileHover={{
        scale: 1.03,
        boxShadow:
          '0 0 38px 6px rgba(255,140,0,0.55), 0 12px 50px rgba(0,0,0,0.55)',
      }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onOpen(hobby)}
      aria-label={`Open ${hobby.label} gallery`}
      className="glass relative overflow-hidden text-left aspect-[4/5] focus:outline-none focus:ring-2 focus:ring-accent/60"
    >
      {thumb && !isVideoThumb && (
        <img
          src={thumb.src}
          alt={`${hobby.label} thumbnail`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      {thumb && isVideoThumb && (
        <video
          src={thumb.src}
          muted
          loop
          playsInline
          autoPlay
          aria-label={`${hobby.label} thumbnail clip`}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-12 h-44 w-44 rounded-full bg-accent/25 blur-3xl"
      />

      <div className="relative h-full w-full flex flex-col justify-between p-5">
        <div className="flex items-center justify-between">
          <span className="text-[10px] uppercase tracking-[0.3em] rounded-full border border-accent/40 bg-black/60 px-2.5 py-1 text-accent">
            Gallery
          </span>
          <span className="text-[11px] uppercase tracking-widest text-accent/70">
            0{index + 1}
          </span>
        </div>

        <div>
          <h3 className="font-display text-2xl font-semibold tracking-tight text-white">
            {hobby.label}
          </h3>
          <p className="mt-2 text-sm text-white/75 leading-relaxed">
            {hobby.description}
          </p>
          <div className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-accent">
            View gallery
            <span aria-hidden="true">→</span>
          </div>
        </div>
      </div>
    </motion.button>
  )
}

export default function Hobbies() {
  const [active, setActive] = useState(null)

  return (
    <Section id="hobbies" eyebrow="Off the keyboard" title="Hobbies & Media">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {hobbies.map((h, i) => (
          <HobbyTile key={h.id} hobby={h} index={i} onOpen={setActive} />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {active && (
          <HobbyGallery
            key={active.id}
            hobby={active}
            onClose={() => setActive(null)}
          />
        )}
      </AnimatePresence>
    </Section>
  )
}
