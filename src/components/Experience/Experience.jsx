import React, { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { ScrollControls, useScroll } from '@react-three/drei'
import * as THREE from 'three'
import { NeuralNetwork } from './Models'

const SceneContent = () => {
  const scroll = useScroll()
  const groupRef = useRef()

  useFrame(() => {
    // Zoom the brain based on page scroll
    if (groupRef.current) {
      groupRef.current.position.z = THREE.MathUtils.lerp(groupRef.current.position.z, scroll.offset * 15, 0.05)
      groupRef.current.rotation.y = scroll.offset * 1.5
    }
  })

  return (
    <group ref={groupRef}>
      <NeuralNetwork />
    </group>
  )
}

const Experience = () => {
  return (
    <div className="fixed inset-0" style={{ zIndex: -1, background: '#050505' }}>
      <Canvas camera={{ position: [0, 0, 20], fov: 45 }}>
        <Suspense fallback={null}>
          <ScrollControls pages={3} damping={0.1}>
            <SceneContent />
          </ScrollControls>
        </Suspense>
      </Canvas>
    </div>
  )
}

export default Experience