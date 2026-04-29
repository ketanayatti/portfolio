'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { PROJECTS, PROJECT_CATEGORIES } from '@/lib/constants'
import ProjectCard from '@/components/ui/ProjectCard'

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const filtered = filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === filter)

  return (
    <section id="projects" className="card-section">
      <div className="card-bg-container"><div className="card-bg-surface" /></div>
      <div className="relative z-10 min-h-screen py-32 px-6 md:px-16 w-full">
        <div className="section-number">04</div>

        <motion.div
          className="max-w-6xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={fadeUp} className="text-center mb-12">
            <span className="mono block mb-4">03 / projects</span>
            <h2 className="heading-xl mb-8">Selected Work</h2>

            {/* Filter bar */}
            <div className="flex items-center justify-center gap-2 flex-wrap">
              {PROJECT_CATEGORIES.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setFilter(cat.key)}
                  className="px-4 py-2 rounded-full text-xs tracking-wider uppercase transition-all duration-300"
                  style={{
                    fontFamily: 'var(--font-geist-mono)',
                    backgroundColor: filter === cat.key ? 'var(--accent)' : 'transparent',
                    color: filter === cat.key ? '#fff' : 'var(--text-muted)',
                    border: `1px solid ${filter === cat.key ? 'var(--accent)' : 'var(--bg-border)'}`,
                  }}
                  data-cursor="link"
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Project grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <ProjectCard {...project} index={i} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
