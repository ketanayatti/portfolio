'use client'

import { motion } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { PERSONAL, SKILLS } from '@/lib/constants'
import SkillBadge from '@/components/ui/SkillBadge'
import MagneticButton from '@/components/ui/MagneticButton'
import { MapPin, Clock } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="card-section">
      <div className="card-bg-container"><div className="card-bg-surface" /></div>
      <div className="relative z-10 flex flex-col items-center py-20 px-6 md:px-16 w-full">
        <div className="section-number">02</div>

        <motion.div
          className="max-w-6xl mx-auto w-full flex flex-col gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Header - Left & Right Layout */}
          <motion.div variants={fadeUp} className="flex flex-col lg:flex-row lg:items-start lg:gap-16 gap-8">
            {/* Left Side - Name and Tagline */}
            <div className="flex flex-col gap-4 lg:w-2/5">
              <span className="mono text-xs font-semibold tracking-[0.15em] opacity-60 uppercase">About Me</span>
              <h2 className="text-5xl lg:text-6xl font-bold leading-[1.1] tracking-[-0.02em]">
                {PERSONAL.name}
              </h2>
              <p className="text-xl font-bold leading-[1.4]" style={{ color: 'var(--accent)' }}>
                {PERSONAL.tagline}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {PERSONAL.available && (
                  <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full backdrop-blur-sm" style={{ backgroundColor: 'var(--accent-soft)', border: '1px solid var(--bg-border)' }}>
                    <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ backgroundColor: 'var(--accent)' }} />
                    <span className="text-xs font-medium" style={{ color: 'var(--accent)' }}>Available for Opportunities</span>
                  </div>
                )}
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full backdrop-blur-sm text-xs font-medium" style={{ backgroundColor: 'var(--accent-soft)', border: '1px solid var(--bg-border)', color: 'var(--accent)' }}>
                  <MapPin size={13} strokeWidth={2} />
                  <span>{PERSONAL.location}</span>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full backdrop-blur-sm text-xs font-medium" style={{ backgroundColor: 'var(--accent-soft)', border: '1px solid var(--bg-border)', color: 'var(--accent)' }}>
                  <Clock size={13} strokeWidth={2} />
                  <span>{PERSONAL.timezone}</span>
                </div>
              </div>
            </div>

            {/* Right Side - Bio Content */}
            <div className="flex flex-col gap-6 lg:w-3/5">
              <p className="text-lg leading-[1.8]" style={{ color: 'var(--text-secondary)' }}>
                {PERSONAL.bio}
              </p>
            </div>
          </motion.div>


          {/* Skills Section - Organized by Category */}
          <motion.div variants={fadeUp} className="pt-4">
            <span className="mono text-xs font-semibold tracking-[0.15em] opacity-60 uppercase block mb-6">Tools & Technologies</span>
            <div className="flex flex-wrap gap-2.5">
              {SKILLS.map((skill, i) => (
                <SkillBadge key={skill} name={skill} delay={i * 0.05} />
              ))}
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-4">
            <MagneticButton href="#projects" variant="ghost">
              View My Work
            </MagneticButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
