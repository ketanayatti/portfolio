'use client'

import { motion } from 'framer-motion'
import { charReveal } from '@/lib/animations'

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  once?: boolean
}

export default function AnimatedText({ text, className = '', delay = 0, once = true }: AnimatedTextProps) {
  const words = text.split(' ')
  let charIndex = 0

  return (
    <motion.span
      className={`inline ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-100px' }}
    >
      {words.map((word, wordIdx) => (
        <span key={wordIdx} className="inline-block mr-[0.25em]">
          {word.split('').map((char) => {
            const idx = charIndex++
            return (
              <motion.span
                key={idx}
                custom={idx + delay * 30}
                variants={charReveal}
                className="inline-block"
              >
                {char}
              </motion.span>
            )
          })}
        </span>
      ))}
    </motion.span>
  )
}
