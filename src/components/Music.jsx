import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Section from './Section.jsx'
import BeatPlayer from './BeatPlayer.jsx'
import { beats, FEATURED_COUNT } from '../data/beats.js'

// Drop a Spotify playlist or album ID here to enable the embed.
const SPOTIFY_PLAYLIST_ID = 'YOUR_PLAYLIST_ID'

const containerPulse = {
  borderColor: [
    'rgba(255,140,0,0.25)',
    'rgba(255,140,0,0.7)',
    'rgba(255,140,0,0.25)',
  ],
  boxShadow: [
    '0 0 0px rgba(255,140,0,0.15), 0 8px 40px rgba(0,0,0,0.45)',
    '0 0 32px rgba(255,140,0,0.45), 0 8px 40px rgba(0,0,0,0.45)',
    '0 0 0px rgba(255,140,0,0.15), 0 8px 40px rgba(0,0,0,0.45)',
  ],
}

export default function Music() {
  const [activeId, setActiveId] = useState(null)
  const [expanded, setExpanded] = useState(false)

  const featured = beats.slice(0, FEATURED_COUNT)
  const rest = beats.slice(FEATURED_COUNT)
  const hasSpotify =
    SPOTIFY_PLAYLIST_ID && SPOTIFY_PLAYLIST_ID !== 'YOUR_PLAYLIST_ID'

  return (
    <Section id="music" eyebrow="Sound & Curation" title="Music Production">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          animate={containerPulse}
          transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
          className="rounded-3xl border bg-white/10 backdrop-blur-lg p-6 md:p-10 grid gap-8 lg:grid-cols-2"
        >
          {/* Left: original productions */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-accent">
              Original Productions
            </h3>
            <p className="mt-3 text-white/75 leading-relaxed text-sm md:text-base">
              Original hip-hop beats developed with a focus on rhythmic
              complexity and sound design; reflecting a disciplined approach
              to creative engineering.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              {featured.map((b) => (
                <BeatPlayer
                  key={b.id}
                  beat={b}
                  isActive={activeId === b.id}
                  onPlayRequest={setActiveId}
                  onPause={() => setActiveId(null)}
                />
              ))}

              <AnimatePresence initial={false}>
                {expanded &&
                  rest.map((b, i) => (
                    <motion.div
                      key={b.id}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{
                        opacity: 1,
                        y: 0,
                        transition: { delay: i * 0.04 },
                      }}
                      exit={{ opacity: 0, y: -4 }}
                    >
                      <BeatPlayer
                        beat={b}
                        isActive={activeId === b.id}
                        onPlayRequest={setActiveId}
                        onPause={() => setActiveId(null)}
                      />
                    </motion.div>
                  ))}
              </AnimatePresence>
            </div>

            {rest.length > 0 && (
              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-accent/50 px-5 py-2 text-sm uppercase tracking-[0.2em] text-accent hover:bg-accent hover:text-black transition-colors"
              >
                {expanded ? 'Show less' : `Show ${rest.length} more`}
                <span aria-hidden="true">{expanded ? '↑' : '↓'}</span>
              </button>
            )}
          </motion.div>

          {/* Right: musical curation */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-white">
              Musical Curation
            </h3>
            <p className="mt-3 text-white/75 leading-relaxed text-sm md:text-base">
              A collection of albums and artists that influence my creative
              process: ranging from international hip-hop to jazz and soul.
            </p>

            <div className="mt-6 aspect-square rounded-2xl overflow-hidden border border-white/10 bg-black/60 backdrop-blur-md">
              {hasSpotify ? (
                <iframe
                  title="Curated Spotify playlist"
                  src={`https://open.spotify.com/embed/playlist/${SPOTIFY_PLAYLIST_ID}`}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  className="block h-full w-full"
                />
              ) : (
                <div className="h-full w-full flex flex-col items-center justify-center text-center px-8 bg-gradient-to-br from-accent/15 via-black to-black">
                  <div className="text-[11px] uppercase tracking-[0.35em] text-accent/80 mb-3">
                    Spotify embed pending
                  </div>
                  <div className="font-display text-xl text-white">
                    Replace SPOTIFY_PLAYLIST_ID
                  </div>
                  <div className="mt-3 text-xs text-white/55 leading-relaxed">
                    Set the constant at the top of{' '}
                    <code className="text-accent">Music.jsx</code> to your
                    Spotify playlist ID and the embed will appear here.
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  )
}
