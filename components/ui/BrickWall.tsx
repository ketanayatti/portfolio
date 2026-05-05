'use client'

import { ReactNode } from 'react'

interface BrickWallProps {
  children: ReactNode[]
}

export default function BrickWall({ children }: BrickWallProps) {
  // Create a pattern for varied brick sizes for a natural wall feel
  const getBrickSpan = (index: number) => {
    const pattern = index % 8
    // Pattern: vary between 1x1, 2x1 (wide), and 1x2 (tall)
    if (pattern === 0 || pattern === 3) return 'md:col-span-2' // wider bricks
    if (pattern === 2 || pattern === 6) return 'md:row-span-2' // taller bricks
    return '' // normal size
  }

  return (
    <div
      className="w-full p-8 rounded-lg border"
      style={{
        borderColor: 'var(--bg-border)',
        backgroundColor: 'transparent',
        boxShadow: 'inset 0 0 0 12px var(--bg-base)',
      }}
    >
      {/* Brick Grid */}
      <div
        className="w-full grid gap-3"
        style={{
          gridTemplateColumns: 'repeat(auto-fill, minmax(100px, 1fr))',
          gridAutoRows: 'minmax(90px, auto)',
          gridAutoFlow: 'dense', // Allow varied sizes to pack efficiently
        }}
      >
        {children.map((child, index) => (
          <div key={index} className={getBrickSpan(index)}>
            {child}
          </div>
        ))}
      </div>
    </div>
  )
}
