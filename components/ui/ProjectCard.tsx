'use client'

import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Code2 } from 'lucide-react'

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  category: string
  github?: string
  live?: string
  featured?: boolean
  image?: string
  index: number
}

export default function ProjectCard({ title, description, tags, github, live, featured, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ rotateX: y * -10, rotateY: x * 10 })
  }

  const handleMouseLeave = () => setTilt({ rotateX: 0, rotateY: 0 })

  return (
    <motion.div
      ref={cardRef}
      className={`group relative ${featured ? 'col-span-full md:col-span-2' : ''}`}
      style={{ perspective: 800 }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      data-cursor="project"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX: tilt.rotateX, rotateY: tilt.rotateY }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        className="glass-card overflow-hidden h-full"
        whileHover={{ y: -8, borderColor: 'var(--accent)' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Thumbnail area */}
        <div
          className="relative overflow-hidden border-b border-[color:var(--bg-border)]"
          style={{
            height: featured ? 280 : 180,
            background: `linear-gradient(135deg, var(--accent-soft), var(--bg-raised))`,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center" style={{ color: 'var(--accent)', opacity: 0.3 }}>
            <span className="text-6xl font-light">{String(index + 1).padStart(2, '0')}</span>
          </div>
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{ background: 'linear-gradient(135deg, var(--accent-glow), transparent)' }}
          />
        </div>

        {/* Content */}
        <div className="p-6 space-y-3">
          <span className="mono" style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>
            Project
          </span>
          <h3 className="text-lg font-medium" style={{ color: 'var(--text-primary)' }}>{title}</h3>
          <p className="body-sm">{description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded text-[10px] tracking-wider uppercase"
                style={{
                  backgroundColor: 'var(--accent-soft)',
                  color: 'var(--accent)',
                  fontFamily: 'var(--font-geist-mono)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4 pt-3">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs transition-colors" style={{ color: 'var(--text-muted)' }} data-cursor="link">
                <Code2 size={14} /> Code
              </a>
            )}
            {live && (
              <a href={live} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs transition-colors" style={{ color: 'var(--text-muted)' }} data-cursor="link">
                <ExternalLink size={14} /> Live
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
