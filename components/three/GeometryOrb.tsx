'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function MorphingOrb() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    const time = state.clock.elapsedTime
    meshRef.current.rotation.y = time * 0.15
    meshRef.current.rotation.x = Math.sin(time * 0.1) * 0.2
    const scale = 1 + Math.sin(time * 0.5) * 0.05
    meshRef.current.scale.set(scale, scale, scale)

    // Morph vertices
    const geo = meshRef.current.geometry as THREE.IcosahedronGeometry
    const pos = geo.attributes.position
    const orig = geo.getAttribute('originalPosition')

    if (!orig) {
      geo.setAttribute('originalPosition', pos.clone())
      return
    }

    for (let i = 0; i < pos.count; i++) {
      const ox = orig.getX(i)
      const oy = orig.getY(i)
      const oz = orig.getZ(i)
      const noise = Math.sin(ox * 2 + time) * Math.cos(oy * 2 + time * 0.7) * Math.sin(oz * 2 + time * 0.3) * 0.15
      pos.setXYZ(i, ox + ox * noise, oy + oy * noise, oz + oz * noise)
    }
    pos.needsUpdate = true
  })

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[2, 4]} />
      <meshStandardMaterial color="#7c6ff7" wireframe transparent opacity={0.15} />
    </mesh>
  )
}

export default function GeometryOrb() {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none opacity-50" style={{ zIndex: 0 }}>
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }} dpr={[1, 1.5]} gl={{ alpha: true }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={0.5} />
        <MorphingOrb />
      </Canvas>
    </div>
  )
}
