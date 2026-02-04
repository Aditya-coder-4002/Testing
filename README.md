# 🧠 NovaStudio: 3D Neural Network Experience

A high-performance cinematic landing page built with **React**, **Three.js**, and **GSAP**. This project features a real-time 3D neural network background that reacts to scrolling, paired with sleek typing animations and a glassmorphism UI.

![Experience Preview](https://img.shields.io/badge/Experience-3D_Web-646cff?style=for-the-badge)
![Tech Stack](https://img.shields.io/badge/React_18-Three.js-GSAP-black?style=for-the-badge&logo=react)

## 🚀 Key Features

- **Dynamic 3D Neural Network**: High-performance point-and-line geometry cluster rendered at 60FPS using `react-three-fiber` and optimized buffer attributes.
- **Scroll-Triggered Evolution**: The 3D scene zooms and rotates dynamically as the user scrolls, creating an immersive journey through the "network."
- **Cinematic Typing Effect**: A "real-time" terminal typing animation for the hero title, complete with a blinking cursor and GSAP sequencing.
- **Glassmorphism UI**: Modern, translucent UI components built with Tailwind CSS and backdrop filters.
- **Optimized Performance**: 
    - No memory leaks: Uses pre-allocated buffers for 3D updates.
    - Lightweight: Fast bundles powered by Vite.
    - Smooth cleanup: Proper GSAP context management.

## 🛠️ Tech Stack

- **Framework**: [React 18](https://reactjs.org/)
- **3D Engine**: [Three.js](https://threejs.org/) / [React Three Fiber](https://github.com/pmndrs/react-three-fiber)
- **3D Helpers**: [@react-three/drei](https://github.com/pmndrs/drei)
- **Animation**: [GSAP](https://greensock.com/gsap/) (ScrollTrigger & @gsap/react)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Build Tool**: [Vite](https://vitejs.dev/)

## 📦 Getting Started

### Prerequisites
- **Node.js**: `v18.x` or higher
- **npm**: `v9.x` or higher

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/neural-network-landing.git
   cd neural-network-landing