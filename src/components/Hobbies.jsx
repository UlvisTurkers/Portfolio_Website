import { motion } from 'framer-motion'
import Section from './Section.jsx'
import { hobbies } from '../data/hobbies.js'

export default function Hobbies() {
  return (
    <Section id="hobbies" eyebrow="Off the keyboard" title="Hobbies & Media">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {hobbies.map((h, i) => (
          <motion.figure
            key={h.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="glass glass-hover overflow-hidden group"
          >
            <div
              role="img"
              aria-label={`${h.label} media placeholder`}
              className="relative aspect-[4/3] flex items-center justify-center bg-gradient-to-br from-white/[0.04] to-transparent"
            >
              <span className="text-[11px] md:text-xs tracking-[0.25em] uppercase text-white/40 group-hover:text-accent/80 transition-colors text-center px-6">
                {h.placeholder}
              </span>
            </div>
            <figcaption className="border-t border-white/10 p-5">
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-display text-lg font-semibold">{h.label}</h3>
                <span className="text-[11px] uppercase tracking-widest text-accent/70">
                  0{i + 1}
                </span>
              </div>
              <p className="mt-1 text-sm text-white/60">{h.tone}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  )
}
