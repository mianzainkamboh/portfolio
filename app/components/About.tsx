'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/app/hooks/useInView'

export default function About() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
    margin: '0px 0px -20% 0px',
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <motion.section
      ref={ref}
      id="about"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-margin-desktop py-16 sm:py-24 lg:py-32"
    >
      {/* Section Header */}
      <motion.div variants={itemVariants} className="flex items-center gap-3 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
        <span className="text-electric-cyan font-label-mono text-xs sm:text-sm tracking-widest">[01]</span>
        <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tighter">
          IDENTITY_MATRIX
        </h2>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-white/10 to-transparent"></div>
      </motion.div>

      {/* Bento Grid */}
      <div className="bento-grid">
        {/* Profile Card */}
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -8 }}
          className="col-span-12 lg:col-span-5 aspect-[4/5] sm:aspect-[16/10] lg:aspect-[4/5] glass-card rounded-2xl overflow-hidden p-0 group relative"
        >
          <img
            alt="Zain Ul Abideen AI Automation Engineer"
            className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-110 group-hover:scale-100"
            src="/images/zain.jpeg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-deep-obsidian via-transparent to-transparent opacity-80"></div>
          <motion.div
            className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-10 lg:left-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className="font-label-mono text-electric-cyan text-[10px] sm:text-xs mb-1 sm:mb-2">OPERATIVE_ID</p>
            <h3 className="font-headline-lg text-white text-xl sm:text-2xl lg:text-3xl">Zain Ul Abideen</h3>
          </motion.div>
          <motion.div
            className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-10 lg:right-10"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="px-2 py-1 sm:px-4 sm:py-2 bg-electric-cyan/10 backdrop-blur-md text-electric-cyan border border-electric-cyan/30 rounded font-label-mono text-[8px] sm:text-[10px]">
              VERIFIED_SYSTEM_ENGINEER
            </span>
          </motion.div>
        </motion.div>

        {/* Bio Section */}
        <motion.div variants={itemVariants} className="col-span-12 lg:col-span-7 flex flex-col gap-4 sm:gap-6 mt-6 lg:mt-0">
          <motion.div
            whileHover={{ y: -4 }}
            className="glass-card rounded-2xl p-6 sm:p-8 lg:p-12 flex-grow flex flex-col justify-center"
          >
            <h3 className="font-headline-md text-xl sm:text-2xl lg:text-3xl text-white mb-4 sm:mb-6 lg:mb-8">
              Fusing Machine Intelligence with Modular Infrastructure
            </h3>
            <p className="text-body-lg text-sm sm:text-base text-on-surface-variant leading-relaxed mb-6 sm:mb-8 lg:mb-10">
              My methodology centers on the <strong>Bento Grid philosophy</strong>—modular, efficient,
              and interconnected modules of code that form a powerful whole. As an AI Automation
              Engineer, I build systems that don&apos;t just follow rules, but learn and evolve within
              complex industrial frameworks.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 pt-6 sm:pt-8 border-t border-white/5">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="space-y-2"
              >
                <p className="font-label-mono text-[10px] text-electric-cyan opacity-60 uppercase tracking-widest">
                  Core_Node
                </p>
                <p className="font-headline-md text-lg text-white">AI Architect</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="space-y-2"
              >
                <p className="font-label-mono text-[10px] text-electric-cyan opacity-60 uppercase tracking-widest">
                  Protocol
                </p>
                <p className="font-headline-md text-lg text-white">Elite Automation</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="space-y-2"
              >
                <p className="font-label-mono text-[10px] text-electric-cyan opacity-60 uppercase tracking-widest">
                  Base_Loc
                </p>
                <p className="font-headline-md text-lg text-white">Global / Remote</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="glass-card rounded-2xl p-6 sm:p-8 border-l-4 border-l-electric-cyan"
            >
              <div className="text-3xl sm:text-4xl font-headline-lg text-white mb-2">40%</div>
              <p className="text-label-mono text-[10px] text-on-surface-variant uppercase">
                Latency Reduction achieved in RAG systems
              </p>
            </motion.div>
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className="glass-card rounded-2xl p-6 sm:p-8 border-l-4 border-l-cyber-purple"
            >
              <div className="text-3xl sm:text-4xl font-headline-lg text-white mb-2">50k+</div>
              <p className="text-label-mono text-[10px] text-on-surface-variant uppercase">
                Active users on primary deployments
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
