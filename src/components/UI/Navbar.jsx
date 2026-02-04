import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'

const Navbar = () => {
  const navRef = useRef()

  useEffect(() => {
    gsap.fromTo(navRef.current, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power4.out', delay: 0.5 }
    )
  }, [])

  return (
    <nav ref={navRef} className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center bg-gradient-to-b from-dark/80 to-transparent backdrop-blur-sm">
      <div className="text-2xl font-bold tracking-tighter">
        <span className="text-primary">NOVA</span>STUDIO
      </div>
      <div className="flex gap-8 text-sm font-medium uppercase tracking-widest text-white/70">
        <a href="#" className="hover:text-primary transition-colors">Experience</a>
        <a href="#" className="hover:text-primary transition-colors">Work</a>
        <a href="#" className="hover:text-primary transition-colors">Contact</a>
      </div>
      <button className="px-6 py-2 bg-primary text-white rounded-full font-semibold hover:bg-white hover:text-primary transition-all duration-300">
        Get Started
      </button>
    </nav>
  )
}

export default Navbar
