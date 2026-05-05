'use client'

import { useState, Suspense } from 'react'
import dynamic from 'next/dynamic'
import { motion, AnimatePresence } from 'framer-motion'
import { fadeUp, staggerContainer } from '@/lib/animations'
import { PHILOSOPHY } from '@/lib/constants'
import { ChevronDown } from 'lucide-react'

const GeometryOrb = dynamic(() => import('@/components/three/GeometryOrb'), { ssr: false })

export default function Philosophy() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0)

  return (
    <section id="philosophy" className="card-section">
      <div className="card-bg-container"><div className="card-bg-surface" /></div>
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center py-20 px-6 md:px-16 overflow-hidden w-full">
        <div className="section-number">06</div>

        {/* 3D Orb positioned visually on the right half */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full md:w-1/2 h-[400px] md:h-[800px] pointer-events-none opacity-40 md:opacity-80">
          <Suspense fallback={null}>
            <GeometryOrb />
          </Suspense>
        </div>

        <motion.div
          className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Left Side: Accordion */}
          <div className="flex flex-col gap-5">
            <motion.div variants={fadeUp} className="mb-2 text-center md:text-left">
              <span className="mono block mb-4">06 / philosophy</span>
              <h2 className="heading-xl">How I think about building</h2>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col gap-1">
              {PHILOSOPHY.map((item, index) => {
                const isActive = activeIndex === index;

                return (
                  <motion.div
                    key={item.number}
                    layout
                    onClick={() => setActiveIndex(isActive ? null : index)}
                    className="relative cursor-pointer overflow-hidden transition-all duration-500 rounded-2xl group"
                    style={{
                      background: isActive
                        ? 'linear-gradient(180deg, var(--bg-raised) 0%, transparent 100%)'
                        : 'transparent',
                      border: '1px solid',
                      borderColor: isActive ? 'var(--bg-border)' : 'transparent',
                      backdropFilter: 'blur(12px)',
                    }}
                  >
                    {/* Hover border overlay */}
                    <div className={`absolute inset-0 border border-[var(--bg-border)] rounded-2xl pointer-events-none transition-opacity duration-300 ${isActive ? 'opacity-0' : 'opacity-0 group-hover:opacity-100'}`} />

                    <motion.div layout className="p-6 md:p-8 flex items-center justify-between gap-6 relative z-10">
                      <div className="flex items-center gap-5">
                        <span className={`mono text-[10px] md:text-xs font-semibold transition-colors duration-300 ${isActive ? 'text-[var(--accent)]' : 'text-[var(--text-muted)]'}`}>
                          {item.number}
                        </span>

                        <h3 className={`text-sm md:text-base font-medium transition-colors duration-300 ${isActive ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]'}`}>
                          {item.statement}
                        </h3>
                      </div>

                      <div className={`shrink-0 transition-transform duration-500 flex items-center justify-center text-[var(--text-muted)] ${isActive ? 'rotate-180 text-[var(--text-primary)]' : ''}`}>
                        <ChevronDown size={18} />
                      </div>
                    </motion.div>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                        >
                          <div className="px-6 md:px-8 pb-8 pt-0 pl-[4rem] md:pl-[4.75rem] relative z-10">
                            <div className="pl-5 border-l-2 border-[var(--accent-soft)]">
                              <p className="text-xs md:text-sm text-[var(--text-secondary)] leading-relaxed">
                                {item.detail}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })}
            </motion.div>
          </div>

          {/* Right Side: Empty div to preserve grid spacing for the orb */}
          <div className="hidden md:block"></div>

        </motion.div>
      </div>
    </section>
  )
}
