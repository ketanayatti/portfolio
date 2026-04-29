'use client'

import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '@/components/providers/ThemeProvider'
import { PERSONAL, SOCIAL } from '@/lib/constants'
import {
  Sun,
  Moon,
  ArrowUp,
  Braces,
  Box,
  Cloud,
  Database,
  Server,
  Globe,
  Code2,
  Briefcase,
  Mail,
} from 'lucide-react'

const TECH_STACK = [
  { name: 'Next.js', icon: Globe, color: '#ffffff' },
  { name: 'Python', icon: Braces, color: '#3776ab' },
  { name: 'Docker', icon: Box, color: '#2496ed' },
  { name: 'Kubernetes', icon: Cloud, color: '#326ce5' },
  { name: 'PostgreSQL', icon: Database, color: '#4169e1' },
  { name: 'Linux', icon: Server, color: '#fcc624' },
]

const SOCIALS = [
  { name: 'GitHub', icon: Code2, href: SOCIAL.github },
  { name: 'LinkedIn', icon: Briefcase, href: SOCIAL.linkedin },
  { name: 'Email', icon: Mail, href: `mailto:${SOCIAL.email}` },
]

export default function RightSlider() {
  const { theme, toggleTheme } = useTheme()
  const [hovered, setHovered] = useState(false)
  const [hoveredTech, setHoveredTech] = useState<string | null>(null)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(docHeight > 0 ? scrollTop / docHeight : 0)
      setShowBackToTop(scrollTop > window.innerHeight)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // SVG circle progress values
  const radius = 14
  const circumference = 2 * Math.PI * radius
  const dashOffset = circumference * (1 - scrollProgress)

  // Percentage for display
  const progressPercent = useMemo(() => Math.round(scrollProgress * 100), [scrollProgress])

  return (
    <motion.aside
      className="fixed right-0 top-0 h-screen z-[100] flex flex-col items-center justify-between py-6"
      style={{
        width: hovered ? 200 : 48,
        backgroundColor: hovered ? 'var(--bg-surface)' : 'transparent',
        borderLeft: hovered ? '1px solid var(--bg-border)' : '1px solid transparent',
        backdropFilter: hovered ? 'blur(16px)' : 'none',
        WebkitBackdropFilter: hovered ? 'blur(16px)' : 'none',
        transition:
          'width 0.5s cubic-bezier(0.4,0,0.2,1), background-color 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => {
        setHovered(false)
        setHoveredTech(null)
      }}
    >
      {/* ── Top Section: Progress Ring + Theme Toggle ── */}
      <div className="flex flex-col items-center gap-5">
        {/* Scroll Progress Ring */}
        <div className="relative flex items-center justify-center" style={{ width: 36, height: 36 }}>
          <svg width="36" height="36" viewBox="0 0 36 36" className="absolute">
            {/* Background ring */}
            <circle
              cx="18"
              cy="18"
              r={radius}
              fill="none"
              stroke="var(--bg-border)"
              strokeWidth="2"
            />
            {/* Progress ring */}
            <circle
              cx="18"
              cy="18"
              r={radius}
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={dashOffset}
              style={{
                transition: 'stroke-dashoffset 0.15s linear',
                transform: 'rotate(-90deg)',
                transformOrigin: 'center',
                filter: scrollProgress > 0 ? 'drop-shadow(0 0 4px var(--accent-glow))' : 'none',
              }}
            />
          </svg>
          {/* Percentage text inside ring */}
          <span
            className="relative text-[8px] font-semibold tabular-nums"
            style={{
              color: scrollProgress > 0 ? 'var(--accent)' : 'var(--text-muted)',
              fontFamily: 'var(--font-geist-mono)',
              transition: 'color 0.3s ease',
            }}
          >
            {progressPercent}
          </span>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="relative p-2.5 rounded-xl transition-all duration-300"
          style={{
            color: 'var(--text-secondary)',
            backgroundColor: 'transparent',
            border: '1px solid transparent',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--accent-soft)'
            e.currentTarget.style.borderColor = 'var(--bg-border)'
            e.currentTarget.style.color = 'var(--accent)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent'
            e.currentTarget.style.borderColor = 'transparent'
            e.currentTarget.style.color = 'var(--text-secondary)'
          }}
          data-cursor="link"
          aria-label="Toggle theme"
        >
          <AnimatePresence mode="wait">
            {theme === 'dark' ? (
              <motion.div
                key="sun"
                initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <Sun size={16} />
              </motion.div>
            ) : (
              <motion.div
                key="moon"
                initial={{ rotate: 90, scale: 0.5, opacity: 0 }}
                animate={{ rotate: 0, scale: 1, opacity: 1 }}
                exit={{ rotate: -90, scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <Moon size={16} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* ── Thin divider ── */}
      <div
        className="w-5 h-px mx-auto"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--bg-border), transparent)',
        }}
      />

      {/* ── Middle Section: Tech Stack ── */}
      <div className="flex flex-col items-center gap-3 relative">
        {/* Vertical accent line */}
        <div
          className="absolute h-full w-px"
          style={{
            left: hovered ? -8 : '50%',
            transform: hovered ? 'none' : 'translateX(-50%)',
            background:
              'linear-gradient(to bottom, transparent 0%, var(--accent-soft) 20%, var(--accent) 50%, var(--accent-soft) 80%, transparent 100%)',
            opacity: hovered ? 0.6 : 0,
            transition: 'all 0.5s cubic-bezier(0.4,0,0.2,1)',
          }}
        />

        {TECH_STACK.map((tech, index) => {
          const Icon = tech.icon
          const isHovered = hoveredTech === tech.name

          return (
            <motion.div
              key={tech.name}
              className="relative flex items-center"
              onMouseEnter={() => setHoveredTech(tech.name)}
              onMouseLeave={() => setHoveredTech(null)}
              initial={false}
              animate={{
                x: hovered ? 0 : 0,
              }}
              transition={{ delay: hovered ? index * 0.03 : 0, duration: 0.3 }}
            >
              <motion.div
                className="p-2 rounded-lg relative"
                style={{
                  color: isHovered ? tech.color : 'var(--text-muted)',
                  backgroundColor: isHovered ? 'var(--accent-soft)' : 'transparent',
                  transition: 'all 0.25s ease',
                }}
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon size={15} strokeWidth={1.8} />
                {/* Glow dot on hover */}
                {isHovered && (
                  <motion.div
                    className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: tech.color }}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    layoutId="tech-dot"
                  />
                )}
              </motion.div>

              {/* Expanded label */}
              <AnimatePresence>
                {hovered && (
                  <motion.span
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 8 }}
                    transition={{ duration: 0.25, delay: index * 0.04 }}
                    className="absolute left-full ml-3 whitespace-nowrap"
                    style={{
                      fontSize: '10px',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      fontFamily: 'var(--font-geist-mono)',
                      color: isHovered ? 'var(--text-primary)' : 'var(--text-muted)',
                      transition: 'color 0.2s ease',
                    }}
                  >
                    {tech.name}
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>

      {/* ── Thin divider ── */}
      <div
        className="w-5 h-px mx-auto"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--bg-border), transparent)',
        }}
      />

      {/* ── Bottom Section: Socials + Status + Back to Top ── */}
      <div className="flex flex-col items-center gap-4">
        {/* Social Links (visible when expanded) */}
        <AnimatePresence>
          {hovered && (
            <motion.div
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
            >
              {SOCIALS.map((social, i) => {
                const SIcon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg"
                    style={{ color: 'var(--text-muted)', transition: 'color 0.2s ease' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--accent)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--text-muted)'
                    }}
                    initial={{ opacity: 0, x: 5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    data-cursor="link"
                  >
                    <SIcon size={14} strokeWidth={1.8} />
                  </motion.a>
                )
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Availability Status */}
        <div className="relative flex items-center gap-2">
          <div className="relative">
            <div
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: PERSONAL.available ? 'var(--green)' : 'var(--text-muted)',
              }}
            />
            {PERSONAL.available && (
              <div
                className="absolute inset-0 w-2 h-2 rounded-full pulse-dot"
                style={{ backgroundColor: 'var(--green)', opacity: 0.4 }}
              />
            )}
          </div>
          <AnimatePresence>
            {hovered && (
              <motion.span
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 8 }}
                className="absolute left-full ml-3 whitespace-nowrap"
                style={{
                  fontSize: '9px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontFamily: 'var(--font-geist-mono)',
                  color: PERSONAL.available ? 'var(--green)' : 'var(--text-muted)',
                }}
              >
                {PERSONAL.available ? 'Available' : 'Busy'}
              </motion.span>
            )}
          </AnimatePresence>
        </div>

        {/* Back to Top */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, y: 8, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.8 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              onClick={scrollToTop}
              className="p-2 rounded-xl transition-all duration-300"
              style={{
                color: 'var(--text-muted)',
                backgroundColor: 'transparent',
                border: '1px solid transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'var(--accent-soft)'
                e.currentTarget.style.borderColor = 'var(--bg-border)'
                e.currentTarget.style.color = 'var(--accent)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.borderColor = 'transparent'
                e.currentTarget.style.color = 'var(--text-muted)'
              }}
              data-cursor="link"
              aria-label="Back to top"
            >
              <ArrowUp size={15} strokeWidth={2} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.aside>
  )
}
