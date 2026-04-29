'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Preloader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    // F1 style fast counting: 0 to 100% very quickly
    let currentProgress = 0
    const interval = setInterval(() => {
      // Random fast jumps mimicking telemetry data
      currentProgress += Math.floor(Math.random() * 5) + 2
      if (currentProgress >= 100) {
        currentProgress = 100
        setProgress(100)
        clearInterval(interval)
        
        // Small delay at 100% before revealing site
        setTimeout(() => {
          setLoading(false)
        }, 400)
      } else {
        setProgress(currentProgress)
      }
    }, 20)

    // Fallback safety to ensure loader always disappears
    const safetyTimeout = setTimeout(() => {
      setLoading(false)
    }, 3000)

    return () => {
      clearInterval(interval)
      clearTimeout(safetyTimeout)
    }
  }, [])

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="preloader"
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
            style={{ backgroundColor: 'var(--bg-base)' }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
            transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Speed lines / Racing aesthetic background */}
            <div 
              className="absolute inset-0 opacity-[0.03] pointer-events-none" 
              style={{ 
                background: 'repeating-linear-gradient(45deg, transparent, transparent 10px, var(--accent) 10px, var(--accent) 20px)',
                backgroundSize: '200% 200%',
                animation: 'slide-bg 2s linear infinite'
              }} 
            />
            
            <div className="relative z-10 flex flex-col w-full max-w-sm md:max-w-lg px-6 md:px-8 gap-6 md:gap-8">
              
              {/* Progress Bar Container */}
              <div className="w-full h-[2px] relative overflow-hidden" style={{ backgroundColor: 'var(--bg-border)' }}>
                <motion.div 
                  className="absolute top-0 left-0 h-full"
                  style={{ 
                    backgroundColor: 'var(--accent)',
                    width: `${progress}%`,
                    boxShadow: '0 0 10px var(--accent-glow)' 
                  }}
                  transition={{ ease: "linear" }}
                />
              </div>

              {/* Data & Telemetry Display */}
              <div className="flex items-end justify-between w-full gap-4">
                <div className="flex flex-col gap-1 min-w-0">
                  <span className="mono text-[9px] md:text-[10px] tracking-[0.2em]" style={{ color: 'var(--text-muted)' }}>
                    INITIALIZING
                  </span>
                  <div className="flex items-center gap-2 flex-wrap">
                    <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: progress === 100 ? 'var(--green)' : 'var(--accent)' }} />
                    <span className="mono text-[8px] md:text-[10px] tracking-[0.2em] leading-none" style={{ color: progress === 100 ? 'var(--green)' : 'var(--accent)' }}>
                      {progress < 100 ? 'CALIBRATING...' : 'READY'}
                    </span>
                  </div>
                </div>
                
                {/* Responsive Progress Counter */}
                <div className="flex items-baseline font-bold italic flex-shrink-0" style={{ fontFamily: 'var(--font-geist-mono)', color: 'var(--text-primary)' }}>
                  <span 
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl tabular-nums tracking-tighter leading-none" 
                    style={{ textShadow: '0 0 20px var(--accent-glow)' }}
                  >
                    {progress.toString().padStart(3, '0')}
                  </span>
                  <span className="text-base sm:text-lg md:text-xl lg:text-2xl ml-0.5 md:ml-1 leading-none" style={{ color: 'var(--accent)' }}>%</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        key="main-content"
        id="main-content-wrapper"
        initial={{ filter: 'blur(20px)', scale: 1.1, opacity: 0 }}
        animate={
          !loading 
            ? { filter: 'blur(0px)', scale: 1, opacity: 1 } 
            : { filter: 'blur(20px)', scale: 1.1, opacity: 0 }
        }
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        onAnimationComplete={() => {
          if (!loading) {
            const el = document.getElementById('main-content-wrapper')
            if (el) {
              el.style.transform = 'none'
              el.style.filter = 'none'
            }
          }
        }}
      >
        {children}
      </motion.div>

      {/* Embedded CSS for the background animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slide-bg {
          0% { background-position: 0 0; }
          100% { background-position: 100px 100px; }
        }
      `}} />
    </>
  )
}
