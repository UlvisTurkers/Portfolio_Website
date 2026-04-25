import { motion } from 'framer-motion'
import { repoStatusLabels } from '../data/projects.js'

export default function ProjectCard({ project, index, onOpen }) {
  const repoLabel = project.href
    ? 'GitHub Repository'
    : repoStatusLabels[project.repoStatus] ?? 'Code Available Upon Request'

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: 'easeOut' }}
      whileHover={{ y: -4 }}
      onClick={() => onOpen?.(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          onOpen?.(project)
        }
      }}
      aria-label={`Open deep dive for ${project.title}`}
      className="glass glass-hover group p-6 md:p-7 flex flex-col h-full relative overflow-hidden cursor-pointer focus:outline-none focus:ring-2 focus:ring-accent/60"
    >
      {project.accent && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 -right-20 h-44 w-44 rounded-full bg-accent/20 blur-3xl"
        />
      )}

      {project.badge && (
        <span className="self-start mb-3 inline-flex items-center text-[11px] tracking-widest uppercase rounded-full border border-accent/40 text-accent px-3 py-1">
          {project.badge}
        </span>
      )}

      <h3 className="font-display text-xl md:text-2xl font-semibold tracking-tight">
        {project.title}
      </h3>

      <p className="mt-3 text-white/70 leading-relaxed text-sm md:text-base">
        {project.description}
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tag) => (
          <li
            key={tag}
            className="text-xs rounded-full bg-white/5 border border-white/10 px-2.5 py-1 text-white/70"
          >
            {tag}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-6 flex items-center justify-between gap-4">
        <span className="text-sm text-accent group-hover:text-accent-soft transition-colors inline-flex items-center gap-2">
          Deep dive
          <span aria-hidden="true">→</span>
        </span>

        {project.href ? (
          <a
            href={project.href}
            target="_blank"
            rel="noreferrer"
            onClick={(e) => e.stopPropagation()}
            aria-label={`${project.title} on GitHub`}
            className="inline-flex items-center gap-1.5 text-xs text-white/60 hover:text-accent transition-colors"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.71 1.26 3.37.97.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.3-.51-1.48.11-3.08 0 0 .96-.31 3.16 1.18a10.94 10.94 0 0 1 5.76 0c2.2-1.49 3.16-1.18 3.16-1.18.62 1.6.23 2.78.11 3.08.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.27 5.69.41.36.78 1.06.78 2.13v3.16c0 .31.21.68.8.56C20.22 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
            </svg>
            {repoLabel}
          </a>
        ) : (
          <span
            aria-label={repoLabel}
            className="inline-flex items-center gap-1.5 text-xs text-white/40 cursor-default select-none"
          >
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-white/30" />
            {repoLabel}
          </span>
        )}
      </div>
    </motion.article>
  )
}
