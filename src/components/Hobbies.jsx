import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Section from './Section.jsx'
import HobbyGallery from './HobbyGallery.jsx'
import { hobbies } from '../data/hobbies.js'

function Thumb({ src, label }) {
  const [failed, setFailed] = useState(false)

  if (failed || !src) {
    return (
      <div
        role="img"
        aria-label={`${label} placeholder thumbnail`}
        className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-accent/15 via-white/[0.04] to-transparent"
      >
        <span className="text-[11px] md:text-xs tracking-[0.3em] uppercase text-accent/80 text-center px-6">
          {label}
        </span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={`${label} thumbnail`}
      loading="lazy"
      onError={() => setFailed(true)}
      className="absolute inset-0 h-full w-full object-cover"
    />
  )
}

function GalleryTile({ hobby, index, onOpen }) {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{
        scale: 1.03,
        boxShadow: '0 0 32px 4px rgba(255,140,0,0.45), 0 8px 40px rgba(0,0,0,0.45)',
      }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onOpen(hobby)}
      aria-label={`Open ${hobby.label} gallery`}
      className="glass group text-left overflow-hidden focus:outline-none focus:ring-2 focus:ring-accent/60 transition-shadow"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Thumb src={hobby.thumb} label={hobby.label} />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"
        />
        <span className="absolute top-3 right-3 text-[10px] uppercase tracking-[0.25em] rounded-full border border-accent/50 bg-black/60 px-2.5 py-1 text-accent">
          Gallery
        </span>
      </div>
      <div className="border-t border-white/10 p-5">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-lg font-semibold">{hobby.label}</h3>
          <span className="text-[11px] uppercase tracking-widest text-accent/70">
            0{index + 1}
          </span>
        </div>
        <p className="mt-2 text-sm text-white/65 leading-relaxed">
          {hobby.description}
        </p>
      </div>
    </motion.button>
  )
}

function MusicTile({ hobby, index }) {
  const hasSpotify = Boolean(hobby.spotify)
  const hasMp3 = Boolean(hobby.mp3)

  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="glass overflow-hidden flex flex-col"
    >
      <div className="relative aspect-[4/3] flex items-center justify-center bg-gradient-to-br from-accent/15 via-black to-black overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 -right-12 h-48 w-48 rounded-full bg-accent/30 blur-3xl"
        />
        <div className="relative z-10 text-center px-6">
          <div className="text-[10px] uppercase tracking-[0.35em] text-accent/80 mb-2">
            Now Producing
          </div>
          <div className="font-display text-2xl text-white">Hip-Hop / Lo-Fi</div>
        </div>
      </div>

      <figcaption className="border-t border-white/10 p-5 flex flex-col gap-4">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="font-display text-lg font-semibold">{hobby.label}</h3>
          <span className="text-[11px] uppercase tracking-widest text-accent/70">
            0{index + 1}
          </span>
        </div>
        <p className="text-sm text-white/65 leading-relaxed">
          {hobby.description}
        </p>

        <div className="grid grid-cols-2 gap-2">
          {hasSpotify ? (
            <a
              href={hobby.spotify}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-accent/40 bg-accent/10 px-3 py-2 text-center text-xs uppercase tracking-[0.2em] text-accent hover:bg-accent hover:text-black transition-colors"
            >
              Spotify
            </a>
          ) : (
            <span
              aria-label="Spotify embed pending"
              className="rounded-lg border border-dashed border-accent/40 bg-black/40 px-3 py-2 text-center text-[11px] uppercase tracking-[0.2em] text-accent/70 cursor-default select-none"
            >
              Spotify: TBA
            </span>
          )}

          {hasMp3 ? (
            <a
              href={hobby.mp3}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-accent/40 bg-accent/10 px-3 py-2 text-center text-xs uppercase tracking-[0.2em] text-accent hover:bg-accent hover:text-black transition-colors"
            >
              MP3
            </a>
          ) : (
            <span
              aria-label="MP3 link pending"
              className="rounded-lg border border-dashed border-accent/40 bg-black/40 px-3 py-2 text-center text-[11px] uppercase tracking-[0.2em] text-accent/70 cursor-default select-none"
            >
              MP3: TBA
            </span>
          )}
        </div>
      </figcaption>
    </motion.figure>
  )
}

export default function Hobbies() {
  const [active, setActive] = useState(null)

  return (
    <Section id="hobbies" eyebrow="Off the keyboard" title="Hobbies & Media">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {hobbies.map((h, i) =>
          h.kind === 'music' ? (
            <MusicTile key={h.id} hobby={h} index={i} />
          ) : (
            <GalleryTile key={h.id} hobby={h} index={i} onOpen={setActive} />
          ),
        )}
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
