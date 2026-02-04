import React, { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  const container = useRef()
  const text1 = "NEURAL"
  const text2 = "NETWORK"

  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} className="char opacity-0 inline-block pointer-events-none">
        {char === " " ? "\u00A0" : char}
      </span>
    ))
  }

  useGSAP(() => {
    const tl = gsap.timeline()
    
    // 1. Reveal Word 1
    tl.to('.word-1 .char', {
      opacity: 1,
      stagger: 0.1,
      duration: 0.01,
      ease: "none"
    })
    
    // 2. Reveal Word 2
    tl.to('.word-2 .char', {
      opacity: 1,
      stagger: 0.1,
      duration: 0.01,
      ease: "none"
    }, "+=0.2")

    // 3. Fade out cursor after a short delay once typing finishes
    tl.to('.cursor', {
      opacity: 0,
      duration: 0.3,
      delay: 1
    })

    // 4. Entrance for the rest of the UI
    tl.from('.hero-subtext', {
      y: 20,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    }, "-=0.5")

    // Scroll opacity logic
    gsap.to('.hero-content', {
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
      y: -150,
      opacity: 0,
    })
  }, { scope: container })

  return (
    <div ref={container}>
      <section className="hero-section section-container pt-20">
        <div className="hero-content text-center max-w-5xl px-4">
          <h1 className="hero-title text-7xl md:text-[10rem] font-black mb-8 leading-none tracking-tighter">
            <div className="word-1 inline-block mr-4">
              {splitText(text1)}
            </div>
            <br className="md:hidden" />
            <div className="word-2 inline-block text-[#646cff]">
              {splitText(text2)}
              <span className="cursor"></span>
            </div>
          </h1>
          
          <p className="hero-subtext text-xl md:text-2xl text-white/60 mb-10 max-w-2xl mx-auto font-light tracking-wide">
            Experience the future of digital connectivity with our interactive 3D neural brain interface.
          </p>
          
          <button className="hero-subtext glass-card px-12 py-5 font-bold hover:bg-white/10 transition-all duration-500 uppercase tracking-[0.2em] text-sm">
            Initialize Sync
          </button>
        </div>
      </section>

      {/* Spacer section */}
      <section className="section-container">
        <div className="glass-card max-w-2xl opacity-80 mt-20">
          <h2 className="text-3xl font-bold mb-4 tracking-tight">Deep Learning</h2>
          <p className="text-white/60 leading-relaxed italic">
            "Our system mimics organic synaptic pathways to deliver lightning-fast data processing across decentralized nodes."
          </p>
        </div>
      </section>
    </div>
  )
}

export default Hero