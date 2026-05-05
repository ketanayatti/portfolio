'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { PROJECTS, PROJECT_CATEGORIES } from '@/lib/constants'
import BrickWall from '@/components/ui/BrickWall'
import ProjectBrick from '@/components/ui/ProjectBrick'

export default function Projects() {
  const [activeWall, setActiveWall] = useState('all')

  // Deduplicate projects for 'all' view while keeping category-specific filtering
  const filtered = activeWall === 'all' 
    ? Array.from(new Map(PROJECTS.map(p => [p.title, p])).values())
    : PROJECTS.filter((p) => p.category === activeWall)

  return (
    <section id="projects" className="card-section">
      <div className="card-bg-container"><div className="card-bg-surface" /></div>
      <div className="relative z-10 min-h-screen py-40 px-6 md:px-16 w-full">
        <div className="section-number">05</div>

        <motion.div
          className="max-w-7xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Header */}
          <motion.div variants={fadeUp} className="text-center mb-16">
            <span className="mono block mb-4">03 / projects</span>
            <h2 className="heading-xl mb-2">Wall of Projects</h2>
            <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
              Click a brick to visit GitHub
            </p>
          </motion.div>

          {/* Wall Selection Pills */}
          <motion.div
            variants={fadeUp}
            className="flex items-center justify-center gap-3 flex-wrap mb-16"
          >
            {PROJECT_CATEGORIES.map((cat) => (
              <motion.button
                key={cat.key}
                onClick={() => setActiveWall(cat.key)}
                className="px-6 py-2.5 rounded-full text-sm font-medium tracking-wide uppercase transition-all duration-300 cursor-pointer"
                style={{
                  fontFamily: 'var(--font-geist-mono)',
                  backgroundColor: activeWall === cat.key ? 'var(--accent)' : 'transparent',
                  color: activeWall === cat.key ? '#ffffff' : 'var(--text-muted)',
                  border: `1.5px solid ${activeWall === cat.key ? 'var(--accent)' : 'var(--bg-border)'}`,
                }}
                whileHover={{
                  scale: 1.05,
                  borderColor: 'var(--accent)',
                }}
                whileTap={{ scale: 0.98 }}
                data-cursor="link"
              >
                {cat.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Brick Wall */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeWall}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <BrickWall>
                {filtered.map((project, index) => (
                  <ProjectBrick
                    key={project.id}
                    id={project.id}
                    title={project.title}
                    github={project.github}
                    index={index}
                  />
                ))}
              </BrickWall>
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filtered.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p style={{ color: 'var(--text-muted)' }}>No bricks in this wall yet. Check back soon!</p>
            </motion.div>
          )}

          {/* Wall Counter */}
          <motion.div
            variants={fadeUp}
            className="mt-16 text-center text-xs tracking-wider uppercase"
            style={{ color: 'var(--text-muted)' }}
          >
            {filtered.length} brick{filtered.length !== 1 ? 's' : ''} • {PROJECTS.length} total
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
