import React, { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export const NeuralNetwork = () => {
  const groupRef = useRef()
  const pointsRef = useRef()
  const linesRef = useRef()

  const particleCount = 200 // Further reduced for stability
  const maxDistance = 3.0

  // Pre-calculate positions once
  const [particles, linePositions] = useMemo(() => {
    const coords = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      coords.set([
        (Math.random() - 0.5) * 12,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 10
      ], i * 3)
    }
    // Pre-allocate a large enough buffer for lines (max possible connections)
    const lineBuffer = new Float32Array(particleCount * particleCount * 3)
    return [coords, lineBuffer]
  }, [])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    groupRef.current.rotation.y = time * 0.05
    
    const positions = pointsRef.current.geometry.attributes.position.array
    let lineIdx = 0
    
    // Efficient connectivity check
    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = positions[i * 3] - positions[j * 3]
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1]
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2]
        const distSq = dx * dx + dy * dy + dz * dz // Use square dist (faster)

        if (distSq < maxDistance * maxDistance) {
          linePositions[lineIdx++] = positions[i * 3]
          linePositions[lineIdx++] = positions[i * 3 + 1]
          linePositions[lineIdx++] = positions[i * 3 + 2]
          linePositions[lineIdx++] = positions[j * 3]
          linePositions[lineIdx++] = positions[j * 3 + 1]
          linePositions[lineIdx++] = positions[j * 3 + 2]
        }
      }
    }
    
    // Update the existing geometry without creating new objects
    linesRef.current.geometry.setAttribute('position', new THREE.BufferAttribute(linePositions.slice(0, lineIdx), 3))
    linesRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <group ref={groupRef}>
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={particleCount} array={particles} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial color="#646cff" size={0.1} transparent opacity={0.8} blending={THREE.AdditiveBlending} />
      </points>

      <lineSegments ref={linesRef}>
        <bufferGeometry />
        <lineBasicMaterial color="#312e81" transparent opacity={0.2} blending={THREE.AdditiveBlending} />
      </lineSegments>
    </group>
  )
}