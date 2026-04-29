'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { staggerContainer, fadeUp } from '@/lib/animations'
import { PERSONAL, ROLES } from '@/lib/constants'
import AnimatedText from '@/components/ui/AnimatedText'
import MagneticButton from '@/components/ui/MagneticButton'
import { ArrowDown, MessageCircle } from 'lucide-react'

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  // Typewriter effect
  useEffect(() => {
    const currentRole = ROLES[roleIndex]
    let timeout: NodeJS.Timeout

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        timeout = setTimeout(() => setDisplayText(currentRole.slice(0, displayText.length + 1)), 80)
      } else {
        timeout = setTimeout(() => setIsDeleting(true), 2000)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => setDisplayText(displayText.slice(0, -1)), 40)
      } else {
        setIsDeleting(false)
        setRoleIndex((prev) => (prev + 1) % ROLES.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, roleIndex])

  const scrollToWork = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToConnect = () => {
    document.getElementById('connect')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="card-section">
      <div className="card-bg-container"><div className="card-bg-surface" /></div>
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center overflow-hidden w-full">
        <div className="section-number">01</div>



        <motion.div
          className="relative z-10 text-center max-w-4xl mx-auto px-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >

          {/* Mono tag with typewriter */}
          <motion.div variants={fadeUp} className="mb-6">
            <span className="mono">
              {displayText}<span className="cursor-blink">|</span>
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1 variants={fadeUp} className="display mb-6">
            <AnimatedText text="I build systems that breathe." delay={0.2} />
          </motion.h1>

          {/* Subtext */}
          <motion.p variants={fadeUp} className="body-lg max-w-2xl mx-auto mb-10">
            {PERSONAL.tagline} — crafting infrastructure and products that scale from one to millions.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-4 flex-wrap">
            <MagneticButton onClick={scrollToWork} variant="primary">
              See my work <ArrowDown size={16} />
            </MagneticButton>
            <MagneticButton onClick={scrollToConnect} variant="ghost">
              Let&apos;s talk <MessageCircle size={16} />
            </MagneticButton>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        >
          <span className="mono text-[10px]" style={{ color: 'var(--text-muted)' }}>scroll</span>
          <div className="w-px h-8 overflow-hidden" style={{ backgroundColor: 'var(--bg-border)' }}>
            <div className="w-full h-full scroll-indicator-line" style={{ backgroundColor: 'var(--accent)' }} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
