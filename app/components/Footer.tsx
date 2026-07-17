'use client'

import { motion } from 'framer-motion'
import { useEffect } from 'react'

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  }

  useEffect(() => {
    // Initialize Three.js scene for footer animation
    if (typeof window !== 'undefined') {
      const THREE = (window as any).THREE
      
      if (!THREE) {
        console.warn('Three.js not loaded yet')
        return
      }
      
      const canvas = document.getElementById('footer-canvas') as HTMLCanvasElement
      
      if (canvas) {
        const width = window.innerWidth
        const height = 400

        const scene = new THREE.Scene()
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000)
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true })

        renderer.setSize(width, height)
        renderer.setClearColor(0x000000, 0)
        renderer.pixelRatio = Math.min(window.devicePixelRatio, 2)
        camera.position.z = 5

        // Create geometric shapes - BIGGER
        const octahedron = new THREE.Mesh(
          new THREE.OctahedronGeometry(3, 2),
          new THREE.MeshPhongMaterial({
            color: 0x00f2ff,
            wireframe: true,
            opacity: 0.15,
            transparent: true,
          })
        )
        octahedron.position.y = -1.5  // Lower position
        scene.add(octahedron)

        // Create rotating cube - BIGGER
        const cube = new THREE.Mesh(
          new THREE.BoxGeometry(3, 3, 3),
          new THREE.MeshPhongMaterial({
            color: 0xbc13fe,
            wireframe: true,
            opacity: 0.15,
            transparent: true,
          })
        )
        cube.position.x = -3.5
        cube.position.y = -1.5  // Lower position
        scene.add(cube)

        // Add lights
        const light1 = new THREE.PointLight(0x00f2ff, 0.6)
        light1.position.set(5, 5, 5)
        scene.add(light1)

        const light2 = new THREE.PointLight(0xbc13fe, 0.4)
        light2.position.set(-5, -5, 5)
        scene.add(light2)

        // Animation loop - FASTER ROTATION
        let animationId: number
        const animate = () => {
          animationId = requestAnimationFrame(animate)

          octahedron.rotation.x += 0.008  // Increased from 0.0003
          octahedron.rotation.y += 0.012  // Increased from 0.0005

          cube.rotation.x += 0.010  // Increased from 0.0004
          cube.rotation.y += 0.015  // Increased from 0.0006

          renderer.render(scene, camera)
        }

        animate()

        // Handle resize
        const handleResize = () => {
          const newWidth = window.innerWidth
          camera.aspect = newWidth / height
          camera.updateProjectionMatrix()
          renderer.setSize(newWidth, height)
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

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      variants={containerVariants}
      id="contact"
      className="relative border-t border-white/5 bg-gradient-to-b from-transparent to-deep-obsidian/50 py-16 sm:py-20 lg:py-24 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 w-full" style={{ height: '400px' }} id="footer-canvas-container">
        <canvas id="footer-canvas" className="w-full h-full block" />
      </div>

      <div className="relative z-10 max-w-container-max mx-auto px-4 sm:px-6 lg:px-margin-desktop">
        <motion.div variants={itemVariants} className="flex items-center gap-3 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
          <span className="text-electric-cyan font-label-mono text-xs sm:text-sm tracking-widest">[05]</span>
          <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tighter">
            GET_IN_TOUCH
          </h2>
          <div className="h-[1px] flex-grow bg-gradient-to-r from-white/10 to-transparent"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 mb-12 sm:mb-16 lg:mb-24">
          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="font-headline-md text-xl sm:text-2xl text-white mb-4">Let&apos;s Collaborate</h3>
              <p className="text-body-lg text-sm sm:text-base text-on-surface-variant leading-relaxed mb-4">
                Ready to architect the future? I&apos;m available for elite AI automation projects, strategic consulting, and innovative system design.
              </p>
              <p className="text-body-lg text-sm sm:text-base text-on-surface-variant leading-relaxed mb-4">
                Whether you need intelligent workflow automation, AI-powered solutions, or cutting-edge system implementation, I bring expertise and innovation to every challenge.
              </p>
              <p className="text-body-lg text-sm sm:text-base text-on-surface-variant leading-relaxed">
                Let&apos;s transform your vision into reality with scalable, autonomous intelligence solutions.
              </p>
            </div>

            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-center gap-4"
              >
                <span className="material-symbols-outlined text-electric-cyan">mail</span>
                <a
                  href="mailto:zain.kamboh003@gmail.com"
                  className="text-on-surface-variant hover:text-electric-cyan transition-colors break-all text-sm sm:text-base"
                >
                  zain.kamboh003@gmail.com
                </a>
              </motion.div>
              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-center gap-4"
              >
                <span className="material-symbols-outlined text-electric-cyan">location_on</span>
                <span className="text-on-surface-variant">Lahore, Punjab, Pakistan</span>
              </motion.div>
              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-center gap-4"
              >
                <span className="material-symbols-outlined text-electric-cyan">work</span>
                <a
                  href="https://www.linkedin.com/in/zain-ul-abideen-32a1512a5/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-on-surface-variant hover:text-electric-cyan transition-colors"
                >
                  LinkedIn Profile
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form - Compact Size */}
          <motion.div
            variants={itemVariants}
            className="glass-card rounded-2xl p-6 flex flex-col justify-start h-fit"
          >
            <h4 className="font-headline-md text-white mb-6 text-lg">Send Message</h4>
            
            {/* Contact Form */}
            <form className="space-y-4">
              <div className="space-y-2">
                <label className="font-label-mono text-[9px] text-electric-cyan uppercase tracking-widest">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-deep-obsidian/50 border border-white/10 focus:border-electric-cyan focus:ring-0 rounded-lg text-white font-body-md p-2 text-sm transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="font-label-mono text-[9px] text-electric-cyan uppercase tracking-widest">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-deep-obsidian/50 border border-white/10 focus:border-electric-cyan focus:ring-0 rounded-lg text-white font-body-md p-2 text-sm transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="font-label-mono text-[9px] text-electric-cyan uppercase tracking-widest">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Project inquiry"
                  className="w-full bg-deep-obsidian/50 border border-white/10 focus:border-electric-cyan focus:ring-0 rounded-lg text-white font-body-md p-2 text-sm transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="font-label-mono text-[9px] text-electric-cyan uppercase tracking-widest">
                  Message
                </label>
                <textarea
                  placeholder="Your message..."
                  rows={2}
                  className="w-full bg-deep-obsidian/50 border border-white/10 focus:border-electric-cyan focus:ring-0 rounded-lg text-white font-body-md p-2 text-sm transition-all resize-none"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 0 20px rgba(0, 242, 255, 0.3)' }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-2 bg-gradient-to-r from-electric-cyan to-cyber-purple text-deep-obsidian font-bold rounded-lg hover:shadow-[0_0_40px_rgba(0,242,255,0.3)] transition-all flex items-center justify-center gap-2 text-xs"
              >
                SEND
                <span className="material-symbols-outlined text-sm">send</span>
              </motion.button>
            </form>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5"
        >
          <p className="text-label-mono text-xs text-on-surface-variant">
            © 2026 Zain Ul Abideen. All rights reserved.
          </p>
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="flex items-center gap-2 text-label-mono text-xs text-electric-cyan"
          >
            <div className="w-2 h-2 rounded-full bg-electric-cyan"></div>
            SYSTEM_ONLINE
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  )
}
