'use client'

import { motion } from 'framer-motion'

interface SkillBadgeProps {
  name: string
  delay?: number
}

export default function SkillBadge({ name, delay = 0 }: SkillBadgeProps) {
  return (
    <motion.span
      className="inline-flex items-center px-3 py-1.5 rounded-full text-xs tracking-wider transition-colors duration-300 hover:bg-accent hover:text-white"
      style={{
        backgroundColor: 'var(--accent-soft)',
        color: 'var(--accent)',
        border: '1px solid var(--bg-border)',
        fontFamily: 'var(--font-geist-mono)',
      }}
      animate={{ y: [0, -(3 + Math.random() * 5), 0] }}
      transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        delay: delay,
        ease: 'easeInOut',
      }}
      whileHover={{ scale: 1.1 }}
    >
      {name}
    </motion.span>
  )
}
