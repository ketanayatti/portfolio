'use client'

import { ReactNode, useEffect, useRef } from 'react'
import Lenis from 'lenis'

export default function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null)
  const rafIdRef = useRef<number | null>(null)

  useEffect(() => {
    // Detect platform for optimized settings
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
    const isReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    
    const lenis = new Lenis({
      // Premium, responsive duration
      duration: isReducedMotion ? 0.6 : (isMobile ? 0.75 : 0.85),
      // Fast, snappy easing curve
      easing: (t) => {
        // Out-Quart for premium feel: 1 - (1-t)^4
        return 1 - Math.pow(1 - t, 4)
      },
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: isMobile ? 2.8 : 2.2,
      syncTouchLerp: 0.08,
      syncTouch: false,
    })

    lenisRef.current = lenis

    const raf = (time: number) => {
      lenis.raf(time)
      rafIdRef.current = requestAnimationFrame(raf)
    }

    rafIdRef.current = requestAnimationFrame(raf)

    // Responsive optimization on resize
    const handleResize = () => {
      const newIsMobile = window.innerWidth < 768
      lenis.options.touchMultiplier = newIsMobile ? 2.8 : 2.2
      lenis.options.duration = isReducedMotion ? 0.6 : (newIsMobile ? 0.75 : 0.85)
    }

    // Respect user's motion preferences
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handleMotionChange = () => {
      const newReducedMotion = motionQuery.matches
      lenis.options.duration = newReducedMotion ? 0.6 : (isMobile ? 0.75 : 0.85)
    }

    window.addEventListener('resize', handleResize)
    motionQuery.addEventListener('change', handleMotionChange)

    return () => {
      window.removeEventListener('resize', handleResize)
      motionQuery.removeEventListener('change', handleMotionChange)
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current)
      }
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
