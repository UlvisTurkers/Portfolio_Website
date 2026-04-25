import { motion } from 'framer-motion'
import Section from './Section.jsx'

const tracks = [
  { name: 'Late-Night Loops', meta: 'Hip-hop · Beat tape' },
  { name: 'Riga to London', meta: 'International mix · 47 tracks' },
  { name: 'Court Warmup', meta: 'Pre-game playlist · 22 tracks' },
]

export default function Music() {
  return (
    <Section
      id="music"
      eyebrow="Sound & Curation"
      title="Music Production & Playlists"
    >
      <div className="grid gap-6 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="glass p-7 md:p-9 lg:col-span-2"
        >
          <h3 className="font-display text-2xl font-semibold">In the studio</h3>
          <p className="mt-4 text-white/70 leading-relaxed">
            Curated hip-hop beats and international playlists. I produce on the
            side: drums-first arrangements, sampled textures, and a soft spot
            for off-grid swing.
          </p>

          <ul className="mt-6 space-y-3 text-sm">
            {tracks.map((t) => (
              <li
                key={t.name}
                className="flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3"
              >
                <div>
                  <div className="font-medium">{t.name}</div>
                  <div className="text-xs text-white/50">{t.meta}</div>
                </div>
                <button
                  type="button"
                  aria-label={`Play ${t.name}`}
                  className="text-accent text-sm hover:text-accent-soft transition-colors"
                >
                  <span aria-hidden="true">▸</span> Play
                </button>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass p-6 md:p-8 lg:col-span-3"
        >
          <div className="flex items-baseline justify-between mb-5">
            <h3 className="font-display text-xl font-semibold">Spotify embed</h3>
            <span className="text-[11px] uppercase tracking-widest text-white/40">
              placeholder
            </span>
          </div>
          <div
            role="img"
            aria-label="Spotify embed placeholder"
            className="aspect-video w-full rounded-xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-white/[0.02] to-accent/10 flex items-center justify-center text-center px-6"
          >
            <div>
              <div className="text-xs tracking-[0.25em] uppercase text-accent/80 mb-2">
                [INSERT SPOTIFY EMBED HERE]
              </div>
              <div className="text-white/60 text-sm">
                Drop in &lt;iframe src="https://open.spotify.com/embed/playlist/…" /&gt;
                once finalised.
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
