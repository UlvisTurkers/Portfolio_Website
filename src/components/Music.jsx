import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Section from './Section.jsx'
import BeatPlayer from './BeatPlayer.jsx'
import { beats, FEATURED_COUNT } from '../data/beats.js'

// Curated Spotify library. The first entry loads by default; clicking a
// row swaps the iframe. Rename `name` per playlist when you have titles.
const PLAYLISTS = [
  { id: '3RWdAZ8Y3T5NLwcHcqBJaT?si=7f782482cd0b4975', name: 'A Cold Breeze' },
  { id: '0xoau0jzXLQOcNvIr1Hul5?si=b42aa515310247cb', name: 'Gold' },
  { id: '7IPzL8jWmtQoJ00gTqphRp?si=b2580f28b39d4846', name: 'Angels Voice' },
  { id: '0Mf9RnQWv0g4jS3NX7abMc?si=79b3752a08aa4378', name: 'Turkish Delight' },
  { id: '0DdG7PVQwbTUVwMljFhoX3?si=4c8a324949fc4873', name: 'Geçmişe Bir Bakış' },
  { id: '51FygeJr8Av5Yj8U4TzX2J?si=956afa72d4f94b84', name: 'W.U.I.T.S.' },
]

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
  const [selectedPlaylistId, setSelectedPlaylistId] = useState(PLAYLISTS[0].id)

  const featured = beats.slice(0, FEATURED_COUNT)
  const rest = beats.slice(FEATURED_COUNT)

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

            {/* Active iframe. Keyed remount lets AnimatePresence cross-fade
                when the user picks a different playlist. */}
            <div className="mt-6 h-[380px] rounded-2xl overflow-hidden border border-white/10 bg-black/60 backdrop-blur-md relative">
              <AnimatePresence mode="wait">
                <motion.iframe
                  key={selectedPlaylistId}
                  title="Selected Spotify playlist"
                  src={`https://open.spotify.com/embed/playlist/${selectedPlaylistId}`}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="absolute inset-0 h-full w-full"
                />
              </AnimatePresence>
            </div>

            <div className="mt-5">
              <div className="flex items-baseline justify-between mb-2">
                <span className="text-[11px] uppercase tracking-[0.3em] text-accent/80">
                  Playlist Library
                </span>
                <span className="text-[11px] text-white/40">
                  {PLAYLISTS.length} curated
                </span>
              </div>

              <ul className="scroll-orange max-h-56 overflow-y-auto pr-2 flex flex-col gap-2">
                {PLAYLISTS.map((p, i) => {
                  const active = p.id === selectedPlaylistId
                  return (
                    <li key={p.id}>
                      <button
                        type="button"
                        onClick={() => setSelectedPlaylistId(p.id)}
                        aria-pressed={active}
                        aria-label={`Load ${p.name}`}
                        className={`w-full text-left rounded-lg border px-4 py-3 transition-all duration-200 ${
                          active
                            ? 'border-accent bg-accent/10 text-white shadow-[0_0_18px_rgba(255,140,0,0.55)]'
                            : 'border-white/10 bg-white/[0.04] text-white/60 hover:border-accent/30 hover:text-white/85'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3 min-w-0">
                            <span
                              className={`text-[11px] tabular-nums tracking-widest ${
                                active ? 'text-accent' : 'text-white/40'
                              }`}
                            >
                              {String(i + 1).padStart(2, '0')}
                            </span>
                            <span className="font-display text-sm truncate">
                              {p.name}
                            </span>
                          </div>
                          {active && (
                            <span
                              aria-hidden="true"
                              className="text-[10px] uppercase tracking-[0.25em] text-accent"
                            >
                              Now playing
                            </span>
                          )}
                        </div>
                      </button>
                    </li>
                  )
                })}
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </Section>
  )
}
