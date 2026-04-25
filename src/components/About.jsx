import { motion } from 'framer-motion'
import Section from './Section.jsx'

const facts = [
  { k: '4', v: 'Countries lived in' },
  { k: 'Captain', v: 'University Basketball' },
  { k: '2nd Yr', v: 'BSc AI · KCL' },
]

export default function About() {
  return (
    <Section id="about" eyebrow="About" title="A little about me">
      <div className="grid gap-6 md:grid-cols-3">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="glass p-7 md:p-9 md:col-span-2"
        >
          <p className="text-white/85 leading-relaxed text-base md:text-lg">
            I'm a second-year{' '}
            <span className="text-accent">BSc Artificial Intelligence</span>{' '}
            student at King's College London, captain of the university
            basketball team, and a long-time tinkerer with anything that learns
            from data.
          </p>
          <p className="mt-5 text-white/70 leading-relaxed">
            Growing up across{' '}
            <span className="text-white">Latvia, Luxembourg, Turkey,</span> and{' '}
            <span className="text-white">London</span> — and balancing study
            with personal responsibilities — has shaped me into someone who is{' '}
            <span className="text-accent">organised, resilient, and adaptive</span>.
            I bring that same temperament to engineering: ship calmly, iterate
            quickly, and keep the bigger picture in view.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 gap-4"
        >
          {facts.map((f) => (
            <div key={f.v} className="glass p-5 flex flex-col">
              <span className="font-display text-3xl text-accent">{f.k}</span>
              <span className="text-sm text-white/70 mt-1">{f.v}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  )
}
