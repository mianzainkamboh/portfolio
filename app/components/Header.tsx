'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const navItems = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'SPECIFICATIONS', href: '#skills' },
  { label: 'ARCHIVE', href: '#projects' },
  { label: 'COMMS', href: '#contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  }

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`fixed top-0 w-full z-[100] border-b transition-all duration-300 h-20 ${
        isScrolled
          ? 'border-white/10 bg-surface-glass/80 backdrop-blur-xl'
          : 'border-white/5 bg-surface-glass/60 backdrop-blur-md'
      }`}
    >
      <div className="flex justify-between items-center max-w-container-max mx-auto px-4 sm:px-6 lg:px-margin-desktop h-full">
        <motion.div variants={itemVariants} className="font-headline-lg text-lg sm:text-xl font-bold tracking-tighter text-electric-cyan glow-cyan">
          ZAIN.
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-12 font-label-mono text-xs sm:text-sm text-label-mono">
          {navItems.map((item) => (
            <motion.a
              key={item.href}
              variants={itemVariants}
              href={item.href}
              className="nav-link group relative text-on-surface-variant hover:text-white transition-colors duration-300"
            >
              {item.label === 'HOME' && <span className="text-electric-cyan">{item.label}</span>}
              {item.label !== 'HOME' && item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-electric-cyan transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </nav>

        <motion.div variants={itemVariants} className="flex items-center gap-3 sm:gap-6">
          <div className="hidden xl:flex items-center gap-3 bg-white/5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-white/10">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2 h-2 rounded-full bg-electric-cyan shadow-[0_0_10px_#00F2FF]"
            />
            <span className="text-label-mono text-[8px] sm:text-[10px] tracking-widest text-on-surface">SYSTEM_CORE_ACTIVE</span>
          </div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/Zain-Ul-Abideen.pdf"
            download
            className="px-4 sm:px-6 py-2 border border-electric-cyan/30 text-electric-cyan font-label-mono text-xs sm:text-xs rounded hover:bg-electric-cyan/10 transition-all"
          >
            RESUME
          </motion.a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-8 h-8 flex flex-col justify-center items-center gap-1.5"
          >
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-electric-cyan block"
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-electric-cyan block"
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-electric-cyan block"
            />
          </button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.nav
          variants={mobileMenuVariants}
          initial="hidden"
          animate="visible"
          className="lg:hidden absolute top-20 left-0 right-0 bg-surface-glass/95 backdrop-blur-xl border-b border-white/10"
        >
          <div className="flex flex-col divide-y divide-white/5">
            {navItems.map((item) => (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 sm:px-6 py-4 text-sm text-on-surface-variant hover:text-electric-cyan transition-colors"
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.nav>
      )}
    </motion.header>
  )
}
