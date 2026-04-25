import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Section from './Section.jsx'
import ProjectCard from './ProjectCard.jsx'
import ProjectDetail from './ProjectDetail.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
    <Section id="projects" eyebrow="Featured Work" title="Projects">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, i) => (
          <ProjectCard
            key={p.title}
            project={p}
            index={i}
            onOpen={setActive}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {active && (
          <ProjectDetail
            key={active.title}
            project={active}
            onClose={() => setActive(null)}
          />
        )}
      </AnimatePresence>
    </Section>
  )
}
