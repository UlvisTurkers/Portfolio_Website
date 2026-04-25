import { motion } from 'framer-motion'

export default function ThankYou() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7 }}
          className="glass relative overflow-hidden p-10 md:p-14 text-center"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-48 w-72 bg-accent/20 blur-3xl rounded-full"
          />

          <p className="text-[11px] uppercase tracking-[0.4em] text-accent/80 mb-6">
            Thank you
          </p>

          <h2 className="font-display text-2xl md:text-3xl leading-relaxed text-white/90">
            Thank you for reviewing my portfolio. I look forward to the
            possibility of contributing to your team.
          </h2>

          <div className="mt-10 text-white/70">
            <div className="text-sm">Sincerely,</div>
            <div className="font-display text-xl text-white mt-1">
              Ulvis Edijs Turkers
            </div>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:ediz.flash@gmail.com"
              className="rounded-full bg-accent text-black px-5 py-2 text-sm font-semibold hover:bg-accent-soft transition-colors"
            >
              Email me
            </a>
            <a
              href="https://www.linkedin.com/in/ulvis-edijs-turkers"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/20 px-5 py-2 text-sm hover:border-accent/60 hover:text-accent transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
