import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay: 0.1 * i },
  }),
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-28 pb-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="glass relative overflow-hidden p-8 md:p-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-accent/30 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl"
          />

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="text-xs sm:text-sm uppercase tracking-[0.35em] text-accent/80"
          >
            Portfolio · 2026
          </motion.p>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-4 font-display text-5xl sm:text-6xl md:text-7xl font-semibold leading-[1.05] tracking-tight"
          >
            Ulvis Edijs <span className="text-accent">Turkers</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-6 max-w-2xl text-lg md:text-xl text-white/75 leading-relaxed"
          >
            BSc Artificial Intelligence Student @ King's College London. Building
            applied AI — from RAG pipelines and reinforcement learning to medical
            machine learning.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-accent text-black px-6 py-3 text-sm font-semibold hover:bg-accent-soft transition-colors"
            >
              See projects
              <span aria-hidden="true">→</span>
            </a>
            <a
              href="https://www.linkedin.com/in/ulvis-edijs-turkers"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium hover:border-accent/60 hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:ediz.flash@gmail.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-medium hover:border-accent/60 hover:text-accent transition-colors"
            >
              Email
            </a>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ delay: 1.2, duration: 1.8, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 text-[11px] tracking-[0.3em] uppercase hover:text-accent transition-colors"
      >
        scroll
      </motion.a>
    </section>
  )
}
