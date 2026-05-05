'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { fadeUp, slideLeft, slideRight, staggerContainer } from '@/lib/animations'
import { JOURNEY } from '@/lib/constants'

export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  })

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="journey" className="card-section">
      <div className="card-bg-container"><div className="card-bg-surface" /></div>
      <div className="relative z-10 min-h-screen py-32 px-6 md:px-16 w-full">
        <div className="section-number">04</div>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div variants={fadeUp} className="text-center mb-20">
            <span className="mono block mb-4">04 / journey</span>
            <h2 className="heading-xl">My Journey</h2>
          </motion.div>

          {/* Timeline */}
          <div className="relative" ref={containerRef}>
            {/* Central line background */}
            <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px" style={{ backgroundColor: 'var(--bg-border)' }} />

            {/* Animated fill line */}
            <motion.div
              className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px timeline-line"
              style={{ scaleY, transformOrigin: 'top' }}
            />

            {JOURNEY.map((item, index) => {
              const isLeft = index % 2 === 0

              return (
                <motion.div
                  key={index}
                  className={`relative flex items-center mb-16 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  variants={isLeft ? slideLeft : slideRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-45% 0px -45% 0px' }}
                >
                  {/* Timeline node */}
                  <motion.div
                    className="absolute left-4 md:left-1/2 -translate-x-1/2 z-10"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: '-45% 0px -45% 0px' }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  >
                    <div
                      className="w-4 h-4 rounded-full"
                      style={{
                        backgroundColor: 'var(--accent)',
                        border: '3px solid var(--bg-base)',
                        boxShadow: '0 0 12px var(--accent-glow)',
                      }}
                    />
                  </motion.div>

                  {/* Card */}
                  <div className={`flex-1 ml-12 md:flex-none md:ml-0 md:w-[45%] ${isLeft ? 'md:pr-12' : 'md:pl-12'} ${isLeft ? '' : 'md:ml-auto'}`}>
                    <div className="glass-card p-5 md:p-6 flex flex-col gap-3 md:gap-4 relative overflow-hidden group transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-[var(--accent-glow)]">
                      {/* Premium animated gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-[var(--accent-soft)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                      
                      {/* Decorative accent line */}
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--accent)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <div className="relative z-10 flex flex-col gap-1.5">
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="text-lg md:text-xl font-bold tracking-tight text-[var(--text-primary)] transition-colors duration-300 group-hover:text-[var(--accent)]">
                            {item.title}
                          </h3>
                          <span className="mono text-[10px] font-bold tracking-widest px-2 py-1 rounded border border-[var(--bg-border)] bg-[var(--bg-base)] group-hover:border-[var(--accent)] transition-colors duration-300 whitespace-nowrap mt-0.5" style={{ color: 'var(--accent)' }}>
                            {item.year}
                          </span>
                        </div>
                        
                        <p className="text-xs md:text-sm font-medium text-[var(--text-secondary)]">
                          {item.org}
                        </p>
                      </div>

                      <div className="w-full h-px bg-[var(--bg-border)] group-hover:bg-[var(--accent-soft)] transition-colors duration-500" />

                      <p className="text-xs md:text-sm leading-relaxed text-[var(--text-muted)] relative z-10 group-hover:text-[var(--text-secondary)] transition-colors duration-300">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 pt-1 relative z-10">
                        {item.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded text-[9px] md:text-[10px] tracking-wider uppercase font-semibold transition-all duration-300 group-hover:border-[var(--accent-soft)] group-hover:bg-[var(--accent-soft)] group-hover:text-[var(--accent)]"
                            style={{
                              backgroundColor: 'var(--bg-raised)',
                              color: 'var(--text-secondary)',
                              border: '1px solid var(--bg-border)',
                              fontFamily: 'var(--font-geist-mono)',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
