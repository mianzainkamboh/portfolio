'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/app/hooks/useInView'

const skillsData = [
  {
    title: 'ENGINES',
    icon: 'code',
    color: 'text-electric-cyan',
    glowColor: '#00F2FF',
    skills: [
      { name: 'Python', level: 98 },
      { name: 'TypeScript', level: 92 },
      { name: 'C++', level: 85 },
    ],
  },
  {
    title: 'COGNITION',
    icon: 'psychology',
    color: 'text-cyber-purple',
    glowColor: '#BC13FE',
    skills: [
      { name: 'LLM Orchestration', level: 96 },
      { name: 'Neural Nets', level: 90 },
      { name: 'LangChain / RAG', level: 94 },
    ],
  },
  {
    title: 'AUTONOMY',
    icon: 'settings_suggest',
    color: 'text-electric-cyan',
    glowColor: '#00F2FF',
    skills: [
      { name: 'n8n / Workflows', level: 98 },
      { name: 'CI/CD Pipelines', level: 90 },
      { name: 'Browser Auto', level: 95 },
    ],
  },
  {
    title: 'STRUCTURE',
    icon: 'database',
    color: 'text-cyber-purple',
    glowColor: '#BC13FE',
    skills: [
      { name: 'PostgreSQL / Redis', level: 92 },
      { name: 'FastAPI / Node.js', level: 95 },
      { name: 'Docker / K8s', level: 88 },
    ],
  },
]

export default function Skills() {
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
      id="skills"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="max-w-container-max mx-auto px-4 sm:px-6 lg:px-margin-desktop py-16 sm:py-24 lg:py-32"
    >
      {/* Section Header */}
      <motion.div variants={itemVariants} className="flex items-center gap-3 sm:gap-6 lg:gap-8 mb-8 sm:mb-12 lg:mb-16">
        <span className="text-electric-cyan font-label-mono text-xs sm:text-sm tracking-widest">[02]</span>
        <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tighter">
          TECH_SPECIFICATIONS
        </h2>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-white/10 to-transparent"></div>
      </motion.div>

      {/* Terminal Card */}
      <motion.div
        variants={itemVariants}
        whileHover={{ y: -4 }}
        className="glass-card rounded-2xl overflow-hidden border border-white/10"
      >
        {/* Terminal Header */}
        <div className="terminal-header px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-5 flex items-center justify-between gap-3">
          <div className="flex gap-2 sm:gap-3">
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-error-red/40 border border-error-red/20"
            />
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.2, repeat: Infinity }}
              className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-amber-500/40 border border-amber-500/20"
            />
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2.4, repeat: Infinity }}
              className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 rounded-full bg-electric-cyan/40 border border-electric-cyan/20"
            />
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <span className="text-label-mono text-[10px] text-on-surface-variant flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">terminal</span>
              zain@nexus:~/kernel/spec
            </span>
          </div>
          <div className="text-label-mono text-[9px] sm:text-[10px] text-electric-cyan">SYSTEM_READY</div>
        </div>

        {/* Skills Grid */}
        <div className="p-6 sm:p-10 lg:p-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 sm:gap-12 lg:gap-16">
          {skillsData.map((category, idx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: idx * 0.1 + 0.3, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="space-y-8"
            >
              <div className={`flex items-center gap-4 ${category.color}`}>
                <span className="material-symbols-outlined text-3xl">{category.icon}</span>
                <h4 className="font-headline-md text-base tracking-[0.2em]">{category.title}</h4>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIdx) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ delay: idx * 0.1 + skillIdx * 0.05 + 0.4 }}
                    className="space-y-3"
                  >
                    <div className="flex justify-between font-label-mono text-xs">
                      <span>{skill.name}</span>
                      <motion.span
                        animate={{ opacity: [0.6, 1, 0.6] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{ color: category.glowColor }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <motion.div
                      className="h-1 bg-white/5 rounded-full overflow-hidden"
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ delay: idx * 0.1 + skillIdx * 0.05 + 0.5, duration: 1.2, ease: 'easeOut' }}
                        className="h-full rounded-full"
                        style={{
                          background: category.glowColor,
                          boxShadow: `0 0 10px ${category.glowColor}`,
                        }}
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  )
}
