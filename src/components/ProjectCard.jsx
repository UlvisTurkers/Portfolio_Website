import { motion } from 'framer-motion'

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: index * 0.06, ease: 'easeOut' }}
      className="glass glass-hover group p-6 md:p-7 flex flex-col h-full relative overflow-hidden"
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

      {project.href && (
        <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex items-center gap-2 text-sm text-accent hover:text-accent-soft transition-colors"
        >
          View on GitHub
          <span aria-hidden="true">→</span>
        </a>
      )}
    </motion.article>
  )
}
