'use client'

import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

interface ProjectTileProps {
  title: string
  outcome: string
  tags: string[]
  github: string
  featured?: boolean
  index: number
}

export default function ProjectTile({ title, outcome, tags, github, featured, index }: ProjectTileProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group h-full"
      data-cursor="project"
    >
      <motion.a
        href={`${github}#readme`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-col h-full p-6 rounded-lg border transition-all duration-300"
        style={{
          borderColor: 'var(--bg-border)',
          backgroundColor: 'transparent',
        }}
        whileHover={{
          borderColor: 'var(--accent)',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
          y: -4,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        {/* Header with index badge */}
        <div className="flex items-start justify-between mb-3">
          <span
            className="text-xs font-medium tracking-wider uppercase"
            style={{ color: 'var(--text-muted)' }}
          >
            {featured ? '★ Featured' : 'Project'}
          </span>
        </div>

        {/* Title */}
        <h3
          className="text-lg font-semibold mb-3 line-clamp-2"
          style={{ color: 'var(--text-primary)' }}
        >
          {title}
        </h3>

        {/* Outcome Badge - Professional Summary */}
        <div
          className="mb-4 p-3 rounded text-sm leading-relaxed flex-grow"
          style={{
            backgroundColor: 'var(--accent-soft)',
            color: 'var(--accent)',
            fontFamily: 'var(--font-geist-mono)',
            fontSize: '0.85rem',
          }}
        >
          <span className="block font-medium mb-1" style={{ color: 'var(--accent)' }}>
            Impact:
          </span>
          {outcome}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 rounded text-[0.7rem] tracking-wider uppercase"
              style={{
                backgroundColor: 'var(--accent-soft)',
                color: 'var(--accent)',
                border: '1px solid var(--accent-soft)',
              }}
            >
              {tag}
            </span>
          ))}
          {tags.length > 3 && (
            <span
              className="px-2 py-1 rounded text-[0.7rem] tracking-wider uppercase"
              style={{
                color: 'var(--text-muted)',
              }}
            >
              +{tags.length - 3}
            </span>
          )}
        </div>

        {/* CTA Button */}
        <div className="flex items-center gap-2 text-sm font-medium transition-colors duration-300 group-hover:opacity-100 opacity-90">
          <span style={{ color: 'var(--accent)' }}>View on GitHub</span>
          <ExternalLink size={16} style={{ color: 'var(--accent)' }} />
        </div>
      </motion.a>
    </motion.div>
  )
}
