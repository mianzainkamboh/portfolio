'use client'

import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    // Scramble text animation on hover
    const scrambleText = (element: HTMLElement | null) => {
      if (!element) return

      // Emit event to disable cursor breathing
      window.dispatchEvent(new CustomEvent('scramble-start'))

      const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
      const originalText = 'ARCHITECTING THE FUTURE OF AI'
      let iteration = 0
      
      const interval = setInterval(() => {
        element.textContent = originalText
          .split('')
          .map((_, index) => {
            if (index < iteration) {
              return originalText[index]
            }
            return letters[Math.floor(Math.random() * 36)]
          })
          .join('')

        if (iteration >= originalText.length) {
          clearInterval(interval)
          // Emit event to re-enable cursor breathing
          window.dispatchEvent(new CustomEvent('scramble-end'))
        }
        iteration += 1 / 3
      }, 30)
    }

    // Add hover event listener
    if (titleRef.current) {
      const originalText = 'ARCHITECTING THE FUTURE OF AI'

      titleRef.current.addEventListener('mouseenter', () => {
        scrambleText(titleRef.current)
      })

      titleRef.current.addEventListener('mouseleave', () => {
        if (titleRef.current) {
          titleRef.current.textContent = originalText
          // Emit event to re-enable cursor breathing
          window.dispatchEvent(new CustomEvent('scramble-end'))
        }
      })
    }

    return () => {
      if (titleRef.current) {
        titleRef.current.removeEventListener('mouseenter', () => {
          scrambleText(titleRef.current)
        })
        titleRef.current.removeEventListener('mouseleave', () => {
          // cleanup
        })
      }
    }
  }, [])

  useEffect(() => {
    // Initialize Three.js scene with enhanced animations
    if (typeof window !== 'undefined') {
      const THREE = (window as any).THREE
      
      if (!THREE) {
        console.warn('Three.js not loaded yet')
        return
      }
      
      const canvas = document.getElementById('hero-canvas') as HTMLCanvasElement
      
      if (canvas) {
        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(
          75,
          window.innerWidth / window.innerHeight,
          0.1,
          1000
        )
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })

        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setClearColor(0x000000, 0)
        camera.position.z = 5

        // Create main animated sphere
        const geometry = new THREE.IcosahedronGeometry(2, 5)
        const material = new THREE.MeshPhongMaterial({
          color: 0x00f2ff,
          emissive: 0xbc13fe,
          wireframe: true,
          opacity: 0.15,
          transparent: true,
        })
        const sphere = new THREE.Mesh(geometry, material)
        scene.add(sphere)

        // Create rotating torus
        const torusGeometry = new THREE.TorusGeometry(3, 0.5, 16, 100)
        const torusMaterial = new THREE.MeshPhongMaterial({
          color: 0xbc13fe,
          emissive: 0x00f2ff,
          wireframe: true,
          opacity: 0.1,
          transparent: true,
        })
        const torus = new THREE.Mesh(torusGeometry, torusMaterial)
        torus.rotation.x = 0.5
        torus.rotation.y = 0.5
        scene.add(torus)

        // Create particle system
        const particlesGeometry = new THREE.BufferGeometry()
        const particlesCnt = 1000
        const posArray = new Float32Array(particlesCnt * 3)
        for (let i = 0; i < particlesCnt * 3; i++) {
          posArray[i] = (Math.random() - 0.5) * 10
        }
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))

        const particlesMaterial = new THREE.PointsMaterial({
          size: 0.03,
          color: 0x00f2ff,
          transparent: true,
          opacity: 0.5,
          blending: THREE.AdditiveBlending,
        })
        const particles = new THREE.Points(particlesGeometry, particlesMaterial)
        scene.add(particles)

        // Add lights
        const light1 = new THREE.PointLight(0x00f2ff, 1.5)
        light1.position.set(10, 10, 10)
        scene.add(light1)

        const light2 = new THREE.PointLight(0xbc13fe, 1)
        light2.position.set(-10, -10, 10)
        scene.add(light2)

        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3)
        scene.add(ambientLight)

        // Animation loop
        let animationId: number
        const animate = () => {
          animationId = requestAnimationFrame(animate)

          // Sphere rotation
          sphere.rotation.x += 0.0003
          sphere.rotation.y += 0.0008

          // Torus rotation and animation
          torus.rotation.x += 0.001
          torus.rotation.y += 0.0015
          torus.rotation.z += 0.0005
          torus.scale.x = 1 + Math.sin(Date.now() * 0.001) * 0.1
          torus.scale.y = 1 + Math.cos(Date.now() * 0.001) * 0.1

          // Particles rotation
          particles.rotation.x += 0.0001
          particles.rotation.y += 0.0003

          // Pulse effect on particles
          particlesMaterial.opacity = 0.5 + Math.sin(Date.now() * 0.002) * 0.2

          renderer.render(scene, camera)
        }

        animate()

        // Handle resize
        const handleResize = () => {
          const width = window.innerWidth
          const height = window.innerHeight
          camera.aspect = width / height
          camera.updateProjectionMatrix()
          renderer.setSize(width, height)
        }

        window.addEventListener('resize', handleResize)

        return () => {
          window.removeEventListener('resize', handleResize)
          cancelAnimationFrame(animationId)
          renderer.dispose()
        }
      }
    }
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Canvas */}
      <div className="absolute inset-0 w-full h-full opacity-60" id="hero-canvas-container">
        <canvas id="hero-canvas" />
      </div>

      {/* Content */}
      <motion.div
        ref={containerRef}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center max-w-5xl px-4 sm:px-6 lg:px-margin-desktop"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-block py-1 px-3 sm:px-4 mb-6 sm:mb-8 bg-white/5 border border-white/10 rounded-full backdrop-blur-md"
        >
          <p className="font-label-mono text-electric-cyan text-[8px] sm:text-[10px] tracking-[0.4em] sm:tracking-[0.6em] uppercase">
            Autonomous Systems Engineering
          </p>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          ref={titleRef}
          variants={itemVariants}
          className="font-display-lg text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-electric-cyan via-white to-cyber-purple mb-6 sm:mb-8 leading-tight cursor-pointer transition-transform"
        >
          ARCHITECTING THE FUTURE OF AI
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={itemVariants}
          className="font-body-lg text-sm sm:text-base md:text-lg text-on-surface-variant max-w-3xl mx-auto mb-8 sm:mb-12 opacity-90 px-2"
        >
          Elite AI Automation Engineer specialized in creating intelligent ecosystems that scale.
          Bridging the gap between human intent and machine execution through high-fidelity code.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-4 sm:gap-8 flex-wrap px-2"
        >
          <motion.button
            onClick={() => {
              const projectsSection = document.getElementById('projects')
              projectsSection?.scrollIntoView({ behavior: 'smooth' })
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="px-6 sm:px-10 py-3 sm:py-5 bg-electric-cyan text-deep-obsidian font-bold rounded-lg transition-colors flex items-center gap-2 sm:gap-3 text-sm sm:text-base"
          >
            ACCESS ARCHIVE
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </motion.button>
          <motion.button
            onClick={() => {
              const contactSection = document.getElementById('contact')
              contactSection?.scrollIntoView({ behavior: 'smooth' })
            }}
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="px-6 sm:px-10 py-3 sm:py-5 border border-white/10 text-white font-bold rounded-lg transition-colors flex items-center gap-2 sm:gap-3 text-sm sm:text-base"
          >
            INITIALIZE CONTACT
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      {/* Removed */}
    </section>
  )
}
