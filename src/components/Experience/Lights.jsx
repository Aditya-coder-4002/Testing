import React from 'react'

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight 
        position={[10, 10, 5]} 
        intensity={2} 
        castShadow 
        shadow-mapSize={[1024, 1024]}
      />
      <pointLight position={[-10, -10, -10]} color="#646cff" intensity={3} />
      <spotLight 
        position={[0, 5, 0]} 
        angle={0.3} 
        penumbra={1} 
        intensity={2} 
        castShadow 
      />
    </>
  )
}

export default Lights
