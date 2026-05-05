'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, X } from 'lucide-react'

interface ProjectDetailProps {
  id: number
  title: string
  outcome: string
  tags: string[]
  category: string
  github: string
  isOpen: boolean
  onClose: () => void
}

export default function ProjectDetail({
  id,
  title,
  outcome,
  tags,
  category,
  github,
  isOpen,
  onClose,
}: ProjectDetailProps) {
  const [countdown, setCountdown] = useState(2) // 2 seconds before redirect
  const [isRedirecting, setIsRedirecting] = useState(false)

  // Auto-redirect after countdown
  useEffect(() => {
    if (!isOpen || isRedirecting) return

    const timer = setTimeout(() => {
      setIsRedirecting(true)
      // Open GitHub and close modal
      window.open(`${github}#readme`, '_blank', 'noopener,noreferrer')
      setTimeout(onClose, 500)
    }, 2000) // 2 seconds

    const countdownTimer = setInterval(() => {
      setCountdown((prev) => (prev > 0 ? prev - 1 : 0))
    }, 1000)

    return () => {
      clearTimeout(timer)
      clearInterval(countdownTimer)
    }
  }, [isOpen, github, onClose, isRedirecting])

  // Reset countdown when modal opens
  useEffect(() => {
    if (isOpen) {
      setCountdown(2)
      setIsRedirecting(false)
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-40 backdrop-blur-sm"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            transition={{ duration: 0.2 }}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <motion.div
              className="relative w-full max-w-2xl rounded-xl border overflow-hidden shadow-2xl"
              style={{
                borderColor: 'var(--bg-border)',
                backgroundColor: 'var(--bg-surface)',
              }}
            >
              {/* Header */}
              <div
                className="px-6 md:px-8 py-6 md:py-8 border-b"
                style={{
                  borderColor: 'var(--bg-border)',
                  backgroundColor: 'var(--bg-raised)',
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    {/* Category badge */}
                    <span
                      className="inline-block px-3 py-1 rounded-full text-[0.7rem] tracking-wider uppercase mb-3"
                      style={{
                        backgroundColor: 'var(--accent-soft)',
                        color: 'var(--accent)',
                      }}
                    >
                      {category}
                    </span>
                    {/* Title */}
                    <h2 className="heading-lg mt-2" style={{ color: 'var(--text-primary)' }}>
                      {title}
                    </h2>
                  </div>

                  {/* Close button */}
                  <button
                    onClick={onClose}
                    className="flex-shrink-0 p-2 rounded-lg transition-colors duration-200 flex items-center justify-center"
                    style={{
                      backgroundColor: 'var(--bg-border)',
                      color: 'var(--text-muted)',
                    }}
                    data-cursor="link"
                  >
                    <X size={20} />
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="px-6 md:px-8 py-6 md:py-8 space-y-6">
                {/* Outcome/Impact */}
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wider mb-2" style={{ color: 'var(--text-muted)' }}>
                    Professional Impact
                  </h3>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {outcome}
                  </p>
                </div>

                {/* Tags */}
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-wider mb-3" style={{ color: 'var(--text-muted)' }}>
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full text-[0.75rem] tracking-wider uppercase"
                        style={{
                          backgroundColor: 'var(--accent-soft)',
                          color: 'var(--accent)',
                          border: '1px solid var(--accent-soft)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project ID */}
                <div
                  className="p-4 rounded-lg"
                  style={{
                    backgroundColor: 'var(--bg-raised)',
                    borderLeft: '3px solid var(--accent)',
                  }}
                >
                  <p className="text-xs uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
                    Project ID
                  </p>
                  <p className="text-2xl font-bold mt-1" style={{ color: 'var(--accent)' }}>
                    #{String(id).padStart(2, '0')}
                  </p>
                </div>
              </div>

              {/* Footer - CTA + Countdown */}
              <div
                className="px-6 md:px-8 py-4 md:py-6 border-t flex items-center justify-between flex-wrap gap-3"
                style={{
                  borderColor: 'var(--bg-border)',
                  backgroundColor: 'var(--bg-raised)',
                }}
              >
                <motion.button
                  onClick={() => {
                    setIsRedirecting(true)
                    window.open(`${github}#readme`, '_blank', 'noopener,noreferrer')
                    setTimeout(onClose, 500)
                  }}
                  className="flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium uppercase tracking-wide transition-all duration-200"
                  style={{
                    backgroundColor: isRedirecting ? 'var(--accent)' : 'var(--bg-border)',
                    color: isRedirecting ? '#ffffff' : 'var(--accent)',
                  }}
                  whileHover={!isRedirecting ? { scale: 1.05 } : {}}
                  whileTap={!isRedirecting ? { scale: 0.98 } : {}}
                  disabled={isRedirecting}
                  data-cursor={isRedirecting ? 'default' : 'link'}
                >
                  <ExternalLink size={16} />
                  View on GitHub
                </motion.button>

                {/* Countdown timer */}
                <motion.div
                  className="text-xs uppercase tracking-widest font-medium"
                  style={{ color: 'var(--accent)' }}
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  Redirecting in {countdown}s
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
