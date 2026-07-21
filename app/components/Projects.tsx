'use client'

import { useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger)

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
  const sectionRef = useRef<HTMLElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  const [activeIndex, setActiveIndex] = useState(0)
  const CARD_CYCLE = 2.4

  useGSAP(
    () => {
      const header = sectionRef.current?.querySelector('.section-header')
      const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[]

      if (header) {
        gsap.from(header, {
          opacity: 0,
          y: 30,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          },
        })
      }

      // Every card starts off-screen to the right, hidden.
      gsap.set(cards, { xPercent: 120, opacity: 0 })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${cards.length * 900}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
        onUpdate: () => {
          const idx = Math.min(cards.length - 1, Math.floor(tl.time() / CARD_CYCLE))
          setActiveIndex((prev) => (prev === idx ? prev : idx))
        },
      })

      cards.forEach((card) => {
        tl.to(card, { xPercent: 0, opacity: 1, duration: 1, ease: 'power2.out' })
        tl.to(card, { xPercent: -120, opacity: 0, duration: 1, ease: 'power2.in' }, '+=0.4')
      })
    },
    { scope: sectionRef }
  )

  const handleCardEnter = (idx: number) => {
    const card = cardRefs.current[idx]
    if (!card) return

    gsap.to(card.querySelector('.project-image'), {
      scale: 1.1,
      duration: 1,
      ease: 'power2.out',
    })
    gsap.to(card.querySelector('.image-overlay'), {
      opacity: 1,
      duration: 0.3,
    })
    gsap.to(card.querySelector('.view-source-arrow'), {
      x: 12,
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  const handleCardLeave = (idx: number) => {
    const card = cardRefs.current[idx]
    if (!card) return

    gsap.to(card.querySelector('.project-image'), {
      scale: 1,
      duration: 1,
      ease: 'power2.out',
    })
    gsap.to(card.querySelector('.image-overlay'), {
      opacity: 0,
      duration: 0.3,
    })
    gsap.to(card.querySelector('.view-source-arrow'), {
      x: 0,
      duration: 0.3,
      ease: 'power2.out',
    })
  }

  const handleTagEnter = (e: React.MouseEvent<HTMLSpanElement>) => {
    gsap.to(e.currentTarget, { scale: 1.05, duration: 0.2 })
  }

  const handleTagLeave = (e: React.MouseEvent<HTMLSpanElement>) => {
    gsap.to(e.currentTarget, { scale: 1, duration: 0.2 })
  }

  return (
    <section ref={sectionRef} id="projects" className="relative h-screen w-full overflow-hidden">
      {/* Section Header */}
      <div className="section-header absolute top-28 sm:top-32 lg:top-36 left-0 right-0 z-30 max-w-container-max mx-auto px-4 sm:px-6 lg:px-margin-desktop flex items-center gap-3 sm:gap-6 lg:gap-8">
        <span className="text-electric-cyan font-label-mono text-xs sm:text-sm tracking-widest">[04]</span>
        <h2 className="font-headline-lg text-2xl sm:text-3xl lg:text-4xl text-white uppercase tracking-tighter">
          PROJECT_ARCHIVE
        </h2>
        <div className="h-[1px] flex-grow bg-gradient-to-r from-white/10 to-transparent"></div>
      </div>

      {/* Scroll-driven Project Stage */}
      <div ref={stageRef} className="relative w-full h-full">
        {projects.map((project, idx) => (
          <div
            key={idx}
            ref={(el) => {
              cardRefs.current[idx] = el
            }}
            onMouseEnter={() => handleCardEnter(idx)}
            onMouseLeave={() => handleCardLeave(idx)}
            className="absolute left-4 right-4 sm:left-8 sm:right-8 lg:left-12 lg:right-12 bottom-4 sm:bottom-8 lg:bottom-12 top-40 sm:top-44 lg:top-48 group"
          >
            <div className="glass-card rounded-3xl overflow-hidden relative w-full h-full">
              {/* Full-bleed Image */}
              <div
                className="project-image absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${project.image}')` }}
              />

              {/* Legibility gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/10" />

              {/* Accent tint on hover */}
              <div
                className={`image-overlay absolute inset-0 opacity-0 mix-blend-overlay ${
                  project.accentColor === 'cyber-purple' ? 'bg-cyber-purple/40' : 'bg-electric-cyan/40'
                }`}
              />

              {/* Badge */}
              <div className="absolute top-6 left-6 sm:top-10 sm:left-10 z-20">
                <span className="px-3 py-1 bg-black/40 backdrop-blur-md border border-white/10 rounded-full font-label-mono text-[10px] sm:text-xs text-white">
                  {project.badge}
                </span>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 z-20 p-6 sm:p-10 lg:p-16">
                <h4 className="font-headline-lg text-2xl sm:text-4xl lg:text-5xl text-white mb-3 sm:mb-5 tracking-tight max-w-3xl">
                  {project.title}
                </h4>
                <p className="text-body-md text-sm sm:text-base lg:text-lg text-on-surface-variant mb-5 sm:mb-8 max-w-xl lg:max-w-2xl">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 sm:gap-3 mb-5 sm:mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      onMouseEnter={handleTagEnter}
                      onMouseLeave={handleTagLeave}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] sm:text-xs font-label-mono backdrop-blur-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Source Link */}
                <a
                  href="#"
                  className={`group/btn ${
                    project.accentColor === 'cyber-purple' ? 'text-cyber-purple' : 'text-electric-cyan'
                  } font-label-mono text-xs sm:text-sm flex items-center gap-3 w-fit`}
                >
                  <span
                    className={`h-[1px] w-8 transition-all group-hover/btn:w-12 ${
                      project.accentColor === 'cyber-purple' ? 'bg-cyber-purple' : 'bg-electric-cyan'
                    }`}
                  />
                  <span className="view-source-arrow inline-block">VIEW_SOURCE</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Progress Grid */}
      <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 z-40 glass-card rounded-xl p-3 sm:p-4">
        <div className="font-label-mono text-[9px] sm:text-[10px] tracking-widest text-on-surface-variant mb-2 sm:mb-3">
          {String(activeIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
        </div>
        <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
          {projects.map((_, i) => (
            <span
              key={i}
              className={`block w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-sm transition-all duration-300 ${
                i === activeIndex
                  ? 'bg-electric-cyan shadow-[0_0_8px_#00F2FF] scale-110'
                  : 'bg-white/15'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
