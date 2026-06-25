'use client'

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const [isScrambling, setIsScrambling] = useState(false)
  const mousePos = useRef({ x: 0, y: 0 })
  const cursorPos = useRef({ x: 0, y: 0 })
  const dotPos = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
    }

    // Smooth animation loop
    let animationFrameId: number
    const animate = () => {
      // Inner dot follows mouse faster (0.15 = very fast, snappy)
      dotPos.current.x += (mousePos.current.x - dotPos.current.x) * 0.15
      dotPos.current.y += (mousePos.current.y - dotPos.current.y) * 0.15

      // Outer circle follows the dot with delay (0.1 = lighter, more elastic feel)
      cursorPos.current.x += (dotPos.current.x - cursorPos.current.x) * 0.1
      cursorPos.current.y += (dotPos.current.y - cursorPos.current.y) * 0.1

      if (cursorRef.current) {
        cursorRef.current.style.left = (cursorPos.current.x - 16) + 'px'
        cursorRef.current.style.top = (cursorPos.current.y - 16) + 'px'
      }

      if (dotRef.current) {
        dotRef.current.style.left = (dotPos.current.x - 4) + 'px'
        dotRef.current.style.top = (dotPos.current.y - 4) + 'px'
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    animationFrameId = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  // Listen for scramble animation state
  useEffect(() => {
    const handleScrambleStart = () => setIsScrambling(true)
    const handleScrambleEnd = () => setIsScrambling(false)

    window.addEventListener('scramble-start', handleScrambleStart)
    window.addEventListener('scramble-end', handleScrambleEnd)

    return () => {
      window.removeEventListener('scramble-start', handleScrambleStart)
      window.removeEventListener('scramble-end', handleScrambleEnd)
    }
  }, [])

  return (
    <>
      {/* Outer Circle - Cyan (follows with delay) */}
      <div
        ref={cursorRef}
        className={`pointer-events-none fixed w-8 h-8 border-2 border-electric-cyan rounded-full opacity-100 transition-opacity duration-300 z-[9999] ${
          !isScrambling ? 'animate-pulse-breathing' : ''
        }`}
        style={{
          boxShadow: '0 0 10px rgba(0, 242, 255, 0.6)',
          mixBlendMode: 'screen',
        }}
      />

      {/* Inner Dot - Purple (follows fast) */}
      <div
        ref={dotRef}
        className={`pointer-events-none fixed w-2 h-2 bg-cyber-purple rounded-full opacity-100 transition-opacity duration-300 z-[9999] ${
          !isScrambling ? 'animate-pulse-breathing' : ''
        }`}
        style={{
          boxShadow: '0 0 6px rgba(188, 19, 254, 0.8)',
          mixBlendMode: 'screen',
        }}
      />

      {/* Hide default cursor and add breathing animation */}
      <style>{`
        * {
          cursor: none;
        }

        @keyframes breathing {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.3);
            opacity: 0.6;
          }
        }

        .animate-pulse-breathing {
          animation: breathing 2s ease-in-out infinite;
        }
      `}</style>
    </>
  )
}
