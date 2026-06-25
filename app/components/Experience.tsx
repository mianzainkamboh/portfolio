'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/app/hooks/useInView'

const experiences = [
  {
    period: '2023 - PRESENT',
    title: 'AI Automation Engineer',
    tier: 'ELITE_TIER',
    description:
      'Architected end-to-end automation pipelines utilizing LLMs and RAG systems. Reduced operational latency by 40% through custom-built internal tools and autonomous agents. Lead developer for intelligent CRM integrations and predictive data models. Implementing autonomous self-healing code structures.',
    borderColor: 'border-l-electric-cyan',
    icon: 'bolt',
    accentColor: 'shadow-[0_0_20px_#00F2FF]',
  },
  {
    period: '2021 - 2023',
    title: 'Mobile App Developer',
    tier: 'CORE_DEPLOYMENT',
    description:
      'Developed high-performance cross-platform mobile applications with Flutter and React Native. Focused on seamless UI/UX and complex state management. Delivered products reaching over 50k+ active users with 99.9% crash-free sessions across global markets.',
    borderColor: 'border-l-cyber-purple',
    icon: 'smartphone',
    accentColor: 'shadow-[0_0_20px_#BC13FE]',
  },
]

export default function Experience() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <motion.section
      ref={ref}
      id="experience"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="max-w-container-max mx-auto px-margin-desktop py-48"
    >
      {/* Section Header */}
      <motion.div variants={itemVariants} className="flex items-center gap-8 mb-16">
        <span className="text-electric-cyan font-label-mono text-sm tracking-widest">[03]</span>
        <h2 className="font-headline-lg text-headline-lg text-white uppercase tracking-tighter">
          CHRONOLOGY_LOG
        </h2>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-white/10 to-transparent"></div>
      </motion.div>

      {/* Timeline */}
      <div className="relative pl-32 space-y-24">
        {/* Timeline Line */}
        <div className="absolute left-[39px] top-0 bottom-0 w-[2px] timeline-line opacity-30"></div>

        {experiences.map((exp, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="relative group"
          >
            {/* Timeline Dot */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
              className={`absolute -left-[108px] top-4 w-12 h-12 rounded-full bg-deep-obsidian border-2 ${
                idx === 0 ? 'border-electric-cyan' : 'border-cyber-purple'
              } ${idx === 0 ? 'shadow-[0_0_20px_#00F2FF]' : 'shadow-[0_0_20px_#BC13FE]'} z-10 flex items-center justify-center transition-transform duration-500 group-hover:scale-125`}
            >
              <span
                className={`material-symbols-outlined text-xl ${
                  idx === 0 ? 'text-electric-cyan' : 'text-cyber-purple'
                }`}
              >
                {exp.icon}
              </span>
            </motion.div>

            {/* Experience Card */}
            <motion.div
              whileHover={{ y: -4 }}
              className={`glass-card rounded-2xl p-12 max-w-5xl ${exp.borderColor} border-l-8`}
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <motion.span
                    animate={{ opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className={`text-label-mono text-xs ${
                      idx === 0 ? 'text-electric-cyan' : 'text-cyber-purple'
                    } tracking-widest mb-2 block`}
                  >
                    {exp.period}
                  </motion.span>
                  <h3 className="font-headline-lg text-3xl text-white">{exp.title}</h3>
                </div>
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="px-5 py-2 bg-white/5 border border-white/10 rounded font-label-mono text-[10px] text-on-surface-variant"
                >
                  {exp.tier}
                </motion.span>
              </div>
              <p className="text-body-lg text-on-surface-variant max-w-4xl leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
