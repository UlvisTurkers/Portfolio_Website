import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Section from './Section.jsx'

const cards = [
  {
    id: 'background',
    eyebrow: 'Card 01',
    title: 'International Background & Resilience',
    teaser: 'Four countries, three childhood languages, and a brother who shaped how I learn.',
    body: "Throughout my life, I have lived in four different countries. Although I was born in Ankara, Turkey, I moved to Luxembourg shortly after. There, I simultaneously learned Turkish, French, and Latvian. While I was once fluent in French, moving to Latvia resulted in a lack of usage and I gradually lost the language. Between the ages of 8 and 16, my life involved several moves between Turkey and Latvia before I finally settled in the UK to complete my A-Levels and join King's College London. This frequent relocation was largely due to my younger brother's special needs: he is deaf, non-verbal, and on the autistic spectrum. Navigating these changes as a child taught me how to learn and adjust quickly to any environment. I am incredibly grateful for these experiences; they shaped the adaptive man I am today.",
  },
  {
    id: 'discipline',
    eyebrow: 'Card 02',
    title: 'Discipline & The Court',
    teaser: 'From bullied kid to college team captain. Basketball is the through-line.',
    body: "During my childhood, I faced bullying for being overweight. While it was difficult, I decided to take control of my health. My father had introduced me to basketball when I was an infant, but I began taking it seriously at age 14. During the pandemic, I spent every day at my local park, playing for hours on end. This discipline helped me lose weight and fostered a genuine love for the game. I have played consistently ever since and eventually became the captain of my college team. Today, I stay active through park sessions and have recently returned to football. My passion for basketball remains a lifelong commitment: it taught me the value of grit and leadership.",
  },
  {
    id: 'curiosity',
    eyebrow: 'Card 03',
    title: 'Curiosity & AI Engineering',
    teaser: 'Physics-first thinking, A-Level flow states, and a placement-year hunger.',
    body: "I have always been driven by a curiosity for physics. As a child, I would spend hours questioning how the world worked: how a faucet alternates between hot and cold water, or how the sun burns in the vacuum of space. Rather than looking up answers immediately, I would think through the logic until I reached a conclusion, only then verifying it. This nature led me to study Physics, Maths, and Computer Science at A-Level. While I was initially hesitant about Computer Science, I soon found myself entering a complete 'flow state' while working on projects. I realized that Artificial Intelligence is the perfect intersection of my three core interests. Currently a second-year student at KCL, I am seeking a placement year to apply my competitive nature and adaptive upbringing to real-world challenges. I am committed to putting 101% into the workplace.",
  },
]

const glow = {
  initial: {
    boxShadow: '0 0 0px 0px rgba(255,140,0,0.0), 0 0 18px 2px rgba(255,140,0,0.35)',
  },
  pulse: {
    boxShadow: [
      '0 0 18px 2px rgba(255,140,0,0.30), 0 8px 40px rgba(0,0,0,0.45)',
      '0 0 32px 6px rgba(255,140,0,0.55), 0 8px 40px rgba(0,0,0,0.45)',
      '0 0 18px 2px rgba(255,140,0,0.30), 0 8px 40px rgba(0,0,0,0.45)',
    ],
    transition: {
      duration: 3.6,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

function GlassCard({ card, expanded, onToggle }) {
  return (
    <motion.div
      layout
      onClick={onToggle}
      role="button"
      tabIndex={0}
      aria-expanded={expanded}
      aria-label={`${expanded ? 'Collapse' : 'Expand'} ${card.title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onToggle()
        }
      }}
      variants={glow}
      initial="initial"
      animate="pulse"
      transition={{ layout: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }}
      className="relative cursor-pointer rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md p-6 md:p-7 overflow-hidden focus:outline-none focus:ring-2 focus:ring-accent/60"
    >
      <motion.div layout="position" className="flex items-baseline justify-between gap-3">
        <span className="text-[11px] uppercase tracking-[0.3em] text-accent/80">
          {card.eyebrow}
        </span>
        <span
          aria-hidden="true"
          className={`text-accent text-xl transition-transform duration-300 ${
            expanded ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </motion.div>

      <motion.h3
        layout="position"
        className="mt-3 font-display text-lg md:text-xl font-semibold leading-tight text-white"
      >
        {card.title}
      </motion.h3>

      <motion.p
        layout="position"
        className="mt-3 text-sm text-white/65 leading-relaxed"
      >
        {card.teaser}
      </motion.p>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            key="body"
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: 20 }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/10 pt-5 text-white/80 leading-relaxed text-sm md:text-[15px]">
              {card.body}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!expanded && (
        <div className="mt-5 text-[11px] uppercase tracking-[0.3em] text-white/40">
          Tap to read
        </div>
      )}
    </motion.div>
  )
}

export default function About() {
  const [openId, setOpenId] = useState(null)

  return (
    <Section id="about" eyebrow="About" title="A little about me">
      <motion.div layout className="grid gap-6 md:grid-cols-3 items-start">
        {cards.map((c) => (
          <GlassCard
            key={c.id}
            card={c}
            expanded={openId === c.id}
            onToggle={() => setOpenId((curr) => (curr === c.id ? null : c.id))}
          />
        ))}
      </motion.div>
    </Section>
  )
}
