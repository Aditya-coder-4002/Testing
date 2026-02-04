import React, { Suspense } from 'react'
import Experience from './components/Experience/Experience'
import Navbar from './components/UI/Navbar'
import Hero from './components/UI/Hero'

function App() {
  return (
    <main className="relative">
      {/* 3D Scene Layer (Fixed in background) */}
      <Suspense fallback={null}>
        <Experience />
      </Suspense>

      {/* UI Layer (Transparent container on top) */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
      </div>
    </main>
  )
}

export default App