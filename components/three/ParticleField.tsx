'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function Particles() {
  const pointsRef = useRef<THREE.Points>(null)

  const { viewport } = useThree()

  const count = 2000

  const [positions, originalPositions] = useMemo(() => {
    const pos = new Float32Array(count * 3)
    const orig = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const x = (Math.random() - 0.5) * 10
      const y = (Math.random() - 0.5) * 10
      const z = (Math.random() - 0.5) * 10
      pos[i * 3] = x
      pos[i * 3 + 1] = y
      pos[i * 3 + 2] = z
      orig[i * 3] = x
      orig[i * 3 + 1] = y
      orig[i * 3 + 2] = z
    }
    return [pos, orig]
  }, [])

  const colors = useMemo(() => {
    const cols = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const isAccent = Math.random() > 0.6
      if (isAccent) {
        cols[i * 3] = 0.486
        cols[i * 3 + 1] = 0.435
        cols[i * 3 + 2] = 0.969
      } else {
        cols[i * 3] = 0.29
        cols[i * 3 + 1] = 0.29
        cols[i * 3 + 2] = 0.37
      }
    }
    return cols
  }, [])

  useFrame((state) => {
    if (!pointsRef.current) return
    const time = state.clock.elapsedTime

    // Slow rotation
    pointsRef.current.rotation.y = time * 0.03
    pointsRef.current.rotation.x = Math.sin(time * 0.02) * 0.1

    // Mouse interaction
    const mx = (state.pointer.x * viewport.width) / 2
    const my = (state.pointer.y * viewport.height) / 2

    const posArray = pointsRef.current.geometry.attributes.position.array as Float32Array
    for (let i = 0; i < count; i++) {
      const ix = i * 3
      const dx = posArray[ix] - mx
      const dy = posArray[ix + 1] - my
      const dist = Math.sqrt(dx * dx + dy * dy)
      const influence = Math.max(0, 1 - dist / 2)

      posArray[ix] += (originalPositions[ix] + dx * influence * 0.002 - posArray[ix]) * 0.02
      posArray[ix + 1] += (originalPositions[ix + 1] + dy * influence * 0.002 - posArray[ix + 1]) * 0.02
      posArray[ix + 2] = originalPositions[ix + 2] + Math.sin(time * 0.5 + i * 0.01) * 0.05
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.015} vertexColors transparent opacity={0.7} sizeAttenuation depthWrite={false} />
    </points>
  )
}

export default function ParticleField() {
  return (
    <div className="absolute inset-0" style={{ zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 2]} gl={{ antialias: false, alpha: true }}>
        <Particles />
      </Canvas>
    </div>
  )
}
