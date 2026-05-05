'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface MasonryGridProps {
  children: ReactNode[]
  featured?: (index: number) => boolean
}

export default function MasonryGrid({ children, featured }: MasonryGridProps) {
  return (
    <div
      className="grid gap-6 w-full"
      style={{
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gridAutoFlow: 'dense', // Allows featured items to pack efficiently
      }}
    >
      {children.map((child, index) => (
        <motion.div
          key={index}
          layout
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, delay: index * 0.05 }}
          className={featured?.(index) ? 'md:col-span-2' : ''}
          style={{
            // Featured items span 2 columns on medium screens and up
            // On mobile, everything flows naturally as 1 column
          }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  )
}
