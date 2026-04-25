import { motion } from 'framer-motion'

export default function Section({ id, eyebrow, title, children, className = '' }) {
  return (
    <section id={id} className={`relative w-full py-20 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {(eyebrow || title) && (
          <motion.header
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="mb-10 md:mb-14"
          >
            {eyebrow && (
              <div className="text-xs sm:text-sm uppercase tracking-[0.3em] text-accent/80 mb-3">
                {eyebrow}
              </div>
            )}
            {title && (
              <h2 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-white">
                {title}
              </h2>
            )}
          </motion.header>
        )}
        {children}
      </div>
    </section>
  )
}
