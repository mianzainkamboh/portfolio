'use client'

import { motion } from 'framer-motion'
import { useInView } from '@/app/hooks/useInView'

const projects = [
  {
    title: 'Automatic Blog Posting System',
    badge: 'AI_AUTOMATION',
    description:
      'Developed an intelligent automation workflow that transforms a single blog title into a complete, SEO-optimized blog post. Automatically generates content, selects images, assigns tags and categories, and implements schema markup.',
    tags: ['n8n', 'AI_AUTOMATION', 'SEO', 'SCHEMA_MARKUP'],
    image: '/images/automatib_blog.jpg',
    accentColor: 'electric-cyan',
  },
  {
    title: 'Client Onboarding Automation',
    badge: 'WORKFLOW_AUTO',
    description:
      'Built an intelligent client onboarding workflow using n8n that automates the entire onboarding process. From initial contact through document collection, verification, and system setup - all orchestrated seamlessly with email notifications and data integration.',
    tags: ['n8n', 'WORKFLOW', 'AUTOMATION', 'CRM_INTEGRATION'],
    image: '/images/client_onboarding.png',
    accentColor: 'cyber-purple',
  },
  {
    title: 'Schema Generation for Blog SEO',
    badge: 'SEO_OPTIMIZATION',
    description:
      'Developed an automation system that generates SEO-friendly schema markup for blog posts. Automatically creates JSON-LD structured data including Article, NewsArticle, and FAQ schemas. Improves search engine visibility and enables rich snippets for better SERP performance.',
    tags: ['SCHEMA_MARKUP', 'SEO', 'JSON-LD', 'AUTOMATION'],
    image: '/images/schema.png',
    accentColor: 'electric-cyan',
  },
  {
    title: 'AI Chatbot for 10+ Websites',
    badge: 'AI_CHATBOT',
    description:
      'Developed and deployed intelligent AI chatbots powered by LLMs and RAG (Retrieval-Augmented Generation) across 10+ websites. Each bot is customized for specific business needs with context-aware responses, multi-language support, and seamless integration with existing platforms.',
    tags: ['AI_CHATBOT', 'RAG', 'LLM', 'MULTI_SITE', 'INTEGRATION'],
    image: '/images/chatbot.jpg',
    accentColor: 'cyber-purple',
  },
  {
    title: 'Job Prediction App',
    badge: 'ML_COGNITION',
    description:
      'Built a Flutter mobile application integrated with TensorFlow ML models to predict job suitability and career recommendations. Implemented Firestore for real-time data and personalized job recommendations.',
    tags: ['FLUTTER', 'TENSORFLOW', 'FIRESTORE', 'ML'],
    image: '/images/job_fake_real.jpg',
    accentColor: 'electric-cyan',
  },
  {
    title: 'Nearfix - Skilled Worker Finder',
    badge: 'MOBILE_APP',
    description:
      'Developed a mobile application to help users find nearby skilled workers (electricians, plumbers, mechanics). Integrated intelligent filtering and recommendation concepts for improved service discovery.',
    tags: ['FLUTTER', 'MOBILE', 'ML_ASSISTED', 'UI/UX'],
    image: '/images/nearfix.png',
    accentColor: 'cyber-purple',
  },
  {
    title: 'Expense Prediction System',
    badge: 'ML_PREDICTION',
    description:
      'Developed a Machine Learning system to predict future expenses using past spending data. Trained models on historical records to identify patterns and designed a clean UI for visualization.',
    tags: ['PYTHON', 'ML', 'PREDICTION', 'DATA_ANALYSIS'],
    image: '/images/expense.png',
    accentColor: 'electric-cyan',
  },
  {
    title: 'Price Prediction Model',
    badge: 'DATA_SCIENCE',
    description:
      'Built a Machine Learning model to predict prices based on multiple input features. Performed data preprocessing, feature selection, and model training with regression techniques.',
    tags: ['PYTHON', 'REGRESSION', 'ML', 'DATA_SCIENCE'],
    image: '/images/price prediction.png',
    accentColor: 'cyber-purple',
  },
  {
    title: 'Face Recognition System',
    badge: 'COMPUTER_VISION',
    description:
      'Developed a Face Recognition system using Machine Learning and computer vision. Trained models to identify and verify faces for authentication purposes using OpenCV.',
    tags: ['PYTHON', 'COMPUTER_VISION', 'ML', 'OPENCV'],
    image: '/images/fac_recognization.png',
    accentColor: 'electric-cyan',
  },
]

export default function Projects() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
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
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <motion.section
      ref={ref}
      id="projects"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
      className="max-w-container-max mx-auto px-margin-desktop py-48"
    >
      {/* Section Header */}
      <motion.div variants={itemVariants} className="flex items-center gap-8 mb-16">
        <span className="text-electric-cyan font-label-mono text-sm tracking-widest">[04]</span>
        <h2 className="font-headline-lg text-headline-lg text-white uppercase tracking-tighter">
          PROJECT_ARCHIVE
        </h2>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-white/10 to-transparent"></div>
      </motion.div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            whileHover={{ y: -8 }}
            className="glass-card rounded-2xl overflow-hidden flex flex-col group h-full"
          >
            {/* Image Container */}
            <div className="relative h-64 overflow-hidden">
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className={`absolute inset-0 ${
                  project.accentColor === 'cyber-purple'
                    ? 'bg-cyber-purple/20'
                    : 'bg-electric-cyan/20'
                } z-10`}
              />
              <motion.div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('${project.image}')` }}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 1 }}
              />
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute top-6 left-6 z-20"
              >
                <span className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 rounded font-label-mono text-[10px] text-white">
                  {project.badge}
                </span>
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-10 flex flex-col flex-grow">
              <h4 className="font-headline-md text-2xl text-white mb-4">{project.title}</h4>
              <p className="text-body-md text-on-surface-variant mb-8 flex-grow">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-3 mb-10">
                {project.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-white/5 border border-white/10 rounded text-[10px] font-label-mono"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* View Source Link */}
              <motion.a
                whileHover={{ x: 12 }}
                href="#"
                className={`group/btn ${
                  project.accentColor === 'cyber-purple'
                    ? 'text-cyber-purple'
                    : 'text-electric-cyan'
                } font-label-mono text-xs flex items-center gap-3 w-fit`}
              >
                <span
                  className={`h-[1px] w-8 transition-all group-hover/btn:w-12 ${
                    project.accentColor === 'cyber-purple'
                      ? 'bg-cyber-purple'
                      : 'bg-electric-cyan'
                  }`}
                />
                VIEW_SOURCE
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}
