'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { useTheme } from '@/components/providers/ThemeProvider'
import { Server, Layers } from 'lucide-react'

/* ─── Card Data ─────────────────────────────────────────── */

const PROFILE_CARDS_BASE = [
  {
    id: 'devops',
    index: '01',
    role: 'DevOps Engineer',
    subtitle: 'Infrastructure, Automation & System Reliability',
    icon: Server,
    tags: ['CI/CD', 'Docker', 'AWS', 'Linux', 'NGINX', 'Automation', 'Reliability'],
    description: 'Focused on building and maintaining production-grade systems with automation and reliability at the core. Designs CI/CD pipelines, manages infrastructure, and ensures systems remain stable under failure conditions.',
    highlights: [
      { label: 'CI/CD Automation', value: 'Jenkins, GitHub Actions' },
      { label: 'AWS Infrastructure', value: 'EC2, VPC, S3, CloudWatch' },
      { label: 'Zero-Downtime Deployment', value: 'Blue-Green, Rollback' },
    ],
  },
  {
    id: 'fullstack',
    index: '02',
    role: 'Full Stack Engineering',
    subtitle: 'End-to-End Application Development',
    icon: Layers,
    tags: ['React', 'Node.js', 'TypeScript', 'FastAPI', 'MongoDB'],
    description: 'Experienced in building complete systems from frontend to backend, ensuring seamless integration between application and infrastructure layers.',
    highlights: [
      { label: 'Frontend Systems', value: 'React, TypeScript, Next.js' },
      { label: 'Backend APIs', value: 'Node.js, Express, FastAPI' },
      { label: 'Full Lifecycle Development', value: 'End-to-End Integration' },
    ],
  },
]

const getAccentColors = (theme: 'dark' | 'light') => {
  if (theme === 'dark') {
    // Dark theme: Purple
    return {
      accent: '#7c6ff7',
      accentSoft: 'rgba(124, 111, 247, 0.12)',
      accentGlow: 'rgba(124, 111, 247, 0.30)',
    }
  } else {
    // Light theme: Dark Green
    return {
      accent: '#2F4F2F',
      accentSoft: 'rgba(47, 79, 47, 0.12)',
      accentGlow: 'rgba(47, 79, 47, 0.30)',
    }
  }
}

/* ─── Slider ────────────────────────────────────────────── */

export default function Profile() {
  const { theme } = useTheme()
  const [active, setActive] = useState(0) // DevOps card by default
  const accentColors = getAccentColors(theme)
  const PROFILE_CARDS = PROFILE_CARDS_BASE.map(card => ({
    ...card,
    ...accentColors,
  }))
  const [direction, setDirection] = useState<1 | -1>(1)
  const total = PROFILE_CARDS.length

  const go = (delta: 1 | -1) => {
    setDirection(delta)
    setActive((prev) => (prev + delta + total) % total)
  }

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 120 : -120,
      opacity: 0,
      scale: 0.92,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: { type: 'spring', stiffness: 300, damping: 30 },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -120 : 120,
      opacity: 0,
      scale: 0.92,
      transition: { duration: 0.2 },
    }),
  }

  return (
    <section id="profile" className="card-section">
      <div className="card-bg-container">
        <div className="card-bg-surface" />
      </div>

      <div className="relative z-10 flex flex-col items-center py-20 px-6 md:px-16 w-full">
        {/* Section background number */}
        <div className="section-number">03</div>

        <motion.div
          className="max-w-6xl mx-auto w-full flex flex-col gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* ── Header ── */}
          <motion.div variants={fadeUp} className="flex flex-col gap-3">
            <span className="mono text-xs font-semibold tracking-[0.15em] opacity-60 uppercase">
              Professional Profile
            </span>
            <h2 className="text-5xl lg:text-6xl font-bold leading-[1.1] tracking-[-0.02em]">
              Hybrid Engineer
            </h2>
            <p className="text-lg opacity-70 max-w-xl">
              DevOps-focused with comprehensive full-stack development experience
            </p>
          </motion.div>

          {/* ── Card Slider ── */}
          <motion.div variants={fadeUp} className="flex flex-col items-center gap-8">

            {/* Desktop: all side-by-side with active highlight */}
            <div className="hidden md:grid grid-cols-2 gap-6 w-full">
              {PROFILE_CARDS.map((card, i) => (
                <ProfileCard
                  key={card.id}
                  card={card}
                  isActive={i === active}
                  onClick={() => { setDirection(i > active ? 1 : -1); setActive(i) }}
                />
              ))}
            </div>

            {/* Mobile: single animated card */}
            <div className="md:hidden relative w-full overflow-hidden" style={{ minHeight: 380 }}>
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={active}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="absolute inset-0"
                >
                  <ProfileCard
                    card={PROFILE_CARDS[active]}
                    isActive={true}
                    onClick={() => {}}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ── Flow Line Navigator ── */}
            <div className="flex items-center gap-3 mt-2">
              {PROFILE_CARDS.map((card, i) => (
                <button
                  key={card.id}
                  onClick={() => { setDirection(i > active ? 1 : -1); setActive(i) }}
                  aria-label={`Switch to ${card.role}`}
                  className="group flex flex-col items-center gap-1.5 transition-all duration-400"
                >
                  {/* Line segment */}
                  <span
                    className="block rounded-full transition-all duration-500"
                    style={{
                      width: i === active ? 48 : 20,
                      height: 2,
                      backgroundColor: i === active ? card.accent : 'var(--bg-border)',
                      opacity: i === active ? 1 : 0.5,
                    }}
                  />
                  {/* Label */}
                  <span
                    className="text-[9px] font-semibold tracking-widest uppercase transition-all duration-300"
                    style={{
                      color: i === active ? card.accent : 'var(--text-muted)',
                      opacity: i === active ? 1 : 0.45,
                    }}
                  >
                    {card.index}
                  </span>
                </button>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ─── Single Card ───────────────────────────────────────── */

interface ProfileCardProps {
  card: (typeof PROFILE_CARDS)[number]
  isActive: boolean
  onClick: () => void
}

function ProfileCard({ card, isActive, onClick }: ProfileCardProps) {
  const Icon = card.icon

  return (
    <motion.div
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      className="relative flex flex-col gap-4 p-5 rounded-xl cursor-pointer select-none h-full transition-all duration-500"
      animate={{
        scale: isActive ? 1 : 0.96,
        opacity: isActive ? 1 : 0.55,
      }}
      whileHover={{ opacity: 1, scale: 1 }}
      style={{
        background: isActive
          ? `linear-gradient(145deg, ${card.accentSoft}, var(--bg-raised))`
          : 'linear-gradient(145deg, var(--bg-raised), var(--bg-base))',
        border: `1px solid ${isActive ? card.accent + '55' : 'var(--bg-border)'}`,
        boxShadow: isActive
          ? `0 16px 48px -12px ${card.accentGlow}, inset 0 1px 0 rgba(255,255,255,0.06)`
          : '0 4px 24px -4px rgba(0,0,0,0.2)',
      }}
    >
      {/* Active indicator dot */}
      {isActive && (
        <span
          className="absolute top-4 right-4 w-2 h-2 rounded-full pulse-dot"
          style={{ backgroundColor: card.accent }}
        />
      )}

      {/* Icon + Index */}
      <div className="flex items-start justify-between">
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: card.accentSoft, border: `1px solid ${card.accent}33` }}
        >
          <Icon size={20} style={{ color: card.accent }} />
        </div>
        <span
          className="text-xs font-mono font-semibold tracking-widest opacity-40"
          style={{ color: card.accent }}
        >
          {card.index}
        </span>
      </div>

      {/* Card title + subtitle */}
      <div className="flex flex-col gap-0.5">
        <h3 className="text-lg font-bold leading-tight tracking-[-0.01em]">
          {card.role}
        </h3>
        {(card as any).subtitle && (
          <p className="text-xs opacity-60" style={{ color: 'var(--text-secondary)' }}>
            {(card as any).subtitle}
          </p>
        )}
      </div>

      {/* Description */}
      {(card as any).description && (
        <p className="text-xs leading-relaxed opacity-70" style={{ color: 'var(--text-secondary)' }}>
          {(card as any).description}
        </p>
      )}

      {/* Divider */}
      <div className="w-full h-px" style={{ backgroundColor: `${card.accent}22` }} />

      {/* Highlight rows — compact */}
      <div className="flex flex-col gap-2">
        {card.highlights.map((row) => (
          <div key={row.label} className="flex items-center justify-between gap-3">
            <span className="text-xs font-medium opacity-50" style={{ color: 'var(--text-secondary)' }}>
              {row.label}
            </span>
            <span
              className="text-xs font-semibold px-1.5 py-0.5 rounded text-nowrap"
              style={{
                backgroundColor: card.accentSoft,
                color: card.accent,
                border: `1px solid ${card.accent}22`,
              }}
            >
              {row.value}
            </span>
          </div>
        ))}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1 mt-auto pt-1">
        {card.tags.map((tag) => (
          <span
            key={tag}
            className="text-[9px] font-medium px-1.5 py-0.5 rounded"
            style={{
              backgroundColor: 'var(--bg-base)',
              color: 'var(--text-muted)',
              border: '1px solid var(--bg-border)',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  )
}
