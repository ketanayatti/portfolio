'use client'

import { motion } from 'framer-motion'

interface SkillBadgeProps {
  name: string
  delay?: number
}

export default function SkillBadge({ name, delay = 0 }: SkillBadgeProps) {
  return (
    <motion.span
      className="inline-flex items-center px-3 py-1.5 rounded-full text-xs tracking-wider transition-all duration-200 cursor-default"
      style={{
        backgroundColor: 'var(--accent-soft)',
        color: 'var(--accent)',
        border: '1px solid var(--bg-border)',
        fontFamily: 'var(--font-geist-mono)',
      }}
      animate={{ y: [0, -(2 + Math.random() * 4), 0] }}
      transition={{
        duration: 2.5 + Math.random() * 1.5,
        repeat: Infinity,
        delay: delay,
        ease: 'easeInOut',
      }}
      whileHover={{ 
        scale: 1.12,
        backgroundColor: 'var(--accent)',
        color: '#fff',
        boxShadow: '0 8px 16px var(--accent-glow)',
        y: 0,
      }}
      whileTap={{ scale: 0.95 }}
    >
      {name}
    </motion.span>
  )
}
