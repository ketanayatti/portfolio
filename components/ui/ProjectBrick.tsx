'use client'

import { motion } from 'framer-motion'

interface ProjectBrickProps {
  id: number
  title: string
  github: string
  index: number
}

export default function ProjectBrick({ id, title, github, index }: ProjectBrickProps) {
  const handleClick = () => {
    window.open(`${github}#readme`, '_blank', 'noopener,noreferrer')
  }

  return (
    <motion.button
      onClick={handleClick}
      className="w-full h-full min-h-[90px] rounded-md border transition-all duration-300 flex flex-col items-center justify-center relative overflow-hidden group"
      style={{
        borderColor: 'var(--bg-border)',
        backgroundColor: 'transparent',
      }}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      whileHover={{
        borderColor: 'var(--accent)',
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Subtle background on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-300"
        style={{ backgroundColor: 'var(--accent)' }}
      />

      {/* Content */}
      <div className="relative z-10 text-center space-y-1 px-2">
        {/* Project ID */}
        <div
          className="text-lg font-bold"
          style={{ color: 'var(--accent)' }}
        >
          #{String(id).padStart(2, '0')}
        </div>

        {/* Project Title */}
        <p
          className="text-[0.65rem] tracking-wider uppercase line-clamp-1 leading-tight"
          style={{ color: 'var(--text-muted)' }}
        >
          {title}
        </p>

        {/* Hover hint */}
        <p
          className="text-[0.55rem] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          style={{ color: 'var(--accent)' }}
        >
          Open
        </p>
      </div>

      {/* Bottom accent line on hover */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-0.5"
        style={{ backgroundColor: 'var(--accent)' }}
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      />
    </motion.button>
  )
}

