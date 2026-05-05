'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SECTIONS } from '@/lib/constants'

export default function LeftSlider() {
  const [activeSection, setActiveSection] = useState('hero')
  const [hovered, setHovered] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight

      let currentSection = SECTIONS[0].id

      for (const { id } of SECTIONS) {
        const el = document.getElementById(id)
        if (el) {
          if (scrollY >= el.offsetTop - windowHeight * 0.3) {
            currentSection = id
          }
        }
      }
      setActiveSection(currentSection)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      className="fixed left-0 top-0 h-screen z-[100] hidden md:flex flex-col items-center justify-center"
      style={{
        width: hovered ? 180 : 48,
        backgroundColor: hovered ? 'var(--bg-surface)' : 'transparent',
        borderRight: hovered ? '1px solid var(--bg-border)' : '1px solid transparent',
        transition: 'width 0.4s cubic-bezier(0.4,0,0.2,1), background-color 0.4s ease, border-color 0.4s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false)
        setHoveredItem(null)
      }}
    >
      <div className="flex flex-col items-center gap-6 relative">
        {/* Vertical connecting line */}
        <div
          className="absolute left-1/2 -translate-x-1/2 w-px h-full"
          style={{
            background: hovered
              ? 'linear-gradient(to bottom, transparent, var(--accent-soft), var(--accent), var(--accent-soft), transparent)'
              : 'linear-gradient(to bottom, transparent, var(--bg-border), var(--bg-border), transparent)',
            left: hovered ? '20px' : '50%',
            transition: 'left 0.4s cubic-bezier(0.4,0,0.2,1)',
          }}
        />

        {SECTIONS.map((section) => {
          const isActive = activeSection === section.id

          return (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              onMouseEnter={() => setHoveredItem(section.id)}
              onMouseLeave={() => setHoveredItem(null)}
              className="relative flex items-center gap-3 group z-10"
              style={{ width: hovered ? '100%' : 'auto', paddingLeft: hovered ? 14 : 0 }}
              data-cursor="link"
            >
              {/* Dot */}
              <div
                className="relative flex-shrink-0"
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: '50%',
                  border: `2px solid ${isActive ? 'var(--accent)' : 'var(--text-muted)'}`,
                  backgroundColor: isActive ? 'var(--accent)' : 'transparent',
                  transition: 'all 0.3s ease',
                  boxShadow: isActive ? '0 0 12px var(--accent-glow)' : 'none',
                }}
              >
                {isActive && (
                  <div
                    className="absolute inset-[-4px] rounded-full pulse-dot"
                    style={{ border: '1px solid var(--accent-glow)' }}
                  />
                )}
              </div>

              {/* Label */}
              <AnimatePresence>
                {hovered && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="whitespace-nowrap text-xs tracking-wider uppercase"
                    style={{
                      color: isActive ? 'var(--accent)' : hoveredItem === section.id ? 'var(--text-primary)' : 'var(--text-muted)',
                      fontFamily: 'var(--font-geist-mono)',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {section.label}
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          )
        })}
      </div>
    </motion.nav>
  )
}
