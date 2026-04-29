'use client'

import { useRef, useState, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface MagneticButtonProps {
  children: ReactNode
  className?: string
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'ghost'
}

export default function MagneticButton({ children, className = '', onClick, href, variant = 'primary' }: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setPosition({ x: x * 0.3, y: y * 0.3 })
  }

  const handleMouseLeave = () => setPosition({ x: 0, y: 0 })

  const isPrimary = variant === 'primary'

  const content = (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 350, damping: 15, mass: 0.5 }}
      className={`inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium tracking-wide ${className}`}
      style={{
        backgroundColor: isPrimary ? 'var(--accent)' : 'transparent',
        color: isPrimary ? '#fff' : 'var(--text-primary)',
        border: isPrimary ? 'none' : '1px solid var(--bg-border)',
        boxShadow: isPrimary ? '0 0 20px var(--accent-glow)' : 'none',
      }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.95 }}
      data-cursor="link"
    >
      {children}
    </motion.div>
  )

  if (href) {
    return <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" onClick={onClick}>{content}</a>
  }

  return <button onClick={onClick}>{content}</button>
}
