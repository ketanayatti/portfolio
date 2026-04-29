'use client'

import { useEffect, useRef, useState } from 'react'
import { lerp } from '@/lib/utils'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const trailRefs = useRef<HTMLDivElement[]>([])
  const mouse = useRef({ x: 0, y: 0 })
  const ringPos = useRef({ x: 0, y: 0 })
  const trailPositions = useRef<{ x: number; y: number }[]>(
    Array.from({ length: 8 }, () => ({ x: 0, y: 0 }))
  )
  const [hoverState, setHoverState] = useState<'default' | 'link' | 'project'>('default')
  const [isVisible, setIsVisible] = useState(false)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  useEffect(() => {
    // Check for touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true)
      return
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseEnter = () => setIsVisible(true)
    const handleMouseLeave = () => setIsVisible(false)

    // Track hover targets
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.closest('a, button, [data-cursor="link"]')) {
        setHoverState('link')
      } else if (target.closest('[data-cursor="project"]')) {
        setHoverState('project')
      } else {
        setHoverState('default')
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleElementHover)
    document.addEventListener('mouseenter', handleMouseEnter)
    document.addEventListener('mouseleave', handleMouseLeave)

    // Animation loop
    let rafId: number

    const animate = () => {
      const { x, y } = mouse.current

      // Dot follows exactly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x - 4}px, ${y - 4}px)`
      }

      // Ring follows with lag
      ringPos.current.x = lerp(ringPos.current.x, x, 0.12)
      ringPos.current.y = lerp(ringPos.current.y, y, 0.12)

      if (ringRef.current) {
        const size = hoverState === 'link' ? 48 : hoverState === 'project' ? 56 : 32
        ringRef.current.style.width = `${size}px`
        ringRef.current.style.height = `${size}px`
        ringRef.current.style.transform = `translate(${ringPos.current.x - size / 2}px, ${ringPos.current.y - size / 2}px)`
      }

      // Trail dots
      for (let i = 0; i < trailPositions.current.length; i++) {
        const prev = i === 0 ? mouse.current : trailPositions.current[i - 1]
        trailPositions.current[i].x = lerp(trailPositions.current[i].x, prev.x, 0.2 - i * 0.015)
        trailPositions.current[i].y = lerp(trailPositions.current[i].y, prev.y, 0.2 - i * 0.015)

        const el = trailRefs.current[i]
        if (el) {
          el.style.transform = `translate(${trailPositions.current[i].x - 2}px, ${trailPositions.current[i].y - 2}px)`
          el.style.opacity = `${1 - (i / trailPositions.current.length) * 0.8}`
        }
      }

      rafId = requestAnimationFrame(animate)
    }

    rafId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleElementHover)
      document.removeEventListener('mouseenter', handleMouseEnter)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isVisible, hoverState, isTouchDevice])

  if (isTouchDevice) return null

  return (
    <>
      {/* Trail dots */}
      {trailPositions.current.map((_, i) => (
        <div
          key={`trail-${i}`}
          ref={(el) => {
            if (el) trailRefs.current[i] = el
          }}
          className="fixed top-0 left-0 w-1 h-1 rounded-full pointer-events-none z-[10001]"
          style={{
            backgroundColor: 'var(--accent)',
            opacity: 0,
            transition: 'none',
            willChange: 'transform',
            display: isVisible ? 'block' : 'none',
          }}
        />
      ))}

      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[10002]"
        style={{
          backgroundColor: 'var(--accent)',
          opacity: isVisible ? 1 : 0,
          willChange: 'transform',
          transition: 'opacity 0.3s ease',
        }}
      />

      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[10001] flex items-center justify-center"
        style={{
          border: hoverState === 'default' ? '1.5px solid var(--accent)' : 'none',
          backgroundColor: hoverState !== 'default' ? 'var(--accent-soft)' : 'transparent',
          opacity: isVisible ? 1 : 0,
          willChange: 'transform, width, height',
          transition: 'width 0.3s ease, height 0.3s ease, background-color 0.3s ease, border 0.3s ease, opacity 0.3s ease',
        }}
      >
        {hoverState === 'project' && (
          <span className="text-[10px] font-medium" style={{ color: 'var(--accent)' }}>
            View
          </span>
        )}
      </div>
    </>
  )
}
