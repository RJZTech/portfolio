import { motion } from 'framer-motion'
import { ExternalLink, Layers, CheckCircle, AlertCircle, Cpu, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const Projects = () => {
  const projects = [
    {
      title: 'AI Email Classifier',
      problem: 'Managing large volumes of emails manually.',
      solution: 'Built AI system to classify and route emails automatically.',
      tools: ['OpenAI', 'Make'],
      result: 'Reduced manual work and improved response speed.',
      images: ['/email_classifier_workflow.png']
    },
    {
      title: 'GoHighLevel CRM System',
      problem: 'No structured lead tracking or automation.',
      solution: 'Built pipelines, workflows, and CRM system.',
      tools: ['GoHighLevel'],
      result: 'Automated follow-ups and improved lead management.',
      images: ['/GoHighLevel.png', '/GoHighLevel_2.png', '/GoHighLevel_3.png']
    },
    {
      title: 'Make Automation Workflows',
      problem: 'Manual processes between tools.',
      solution: 'Built multi-step automation workflows with APIs and webhooks.',
      tools: ['Make (Integromat)'],
      result: 'Automated repetitive business processes.',
      images: ['/make_ai.png', '/make_ai_2.png', '/make_ai_3.png', '/make_ai_4.png']
    },
    {
      title: 'Hospital Voice AI Agent',
      problem: 'Manual appointment booking delays.',
      solution: 'Built voice AI agent for booking appointments.',
      tools: ['Retell AI'],
      result: 'Automated patient booking and reduced staff workload.',
      images: ['/retell_ai.png', '/retell_ai_2.png', '/retell_ai_3.png']
    },
    {
      title: 'Vapi AI Voice System',
      problem: 'Need for scalable call automation.',
      solution: 'Built AI voice system for handling calls.',
      tools: ['Vapi AI'],
      result: 'Automated communication system.',
      images: ['/vapi_ai.png', '/vapi_ai_2.png', '/vapi_ai_3.png']
    },
    {
      title: 'WordPress Websites',
      problem: 'Businesses needed online presence.',
      solution: 'Built responsive WordPress websites.',
      tools: ['WordPress'],
      result: 'Improved visibility and user experience.',
      images: ['/wordpress.png']
    },
    {
      title: 'Xero Automation',
      problem: 'Manual invoicing and accounting.',
      solution: 'Automated Xero workflows.',
      tools: ['Xero', 'Make'],
      result: 'Reduced manual accounting work.',
      images: ['/xero_ai.png', '/xero_ai_2.png', '/xero_ai_3.png']
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container"
      style={{ paddingTop: '10rem', paddingBottom: '8rem' }}
    >
      <div style={{ marginBottom: '5rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Projects & <span className="gradient-text">Case Studies</span></h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
          Real-world deployments of AI systems and automation workflows that deliver measurable results.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </motion.div>
  )
}

const ProjectCard = ({ project, index }) => {
  const [currentImg, setCurrentImg] = useState(0)

  const nextImg = (e) => {
    e.stopPropagation()
    setCurrentImg((prev) => (prev + 1) % project.images.length)
  }

  const prevImg = (e) => {
    e.stopPropagation()
    setCurrentImg((prev) => (prev - 1 + project.images.length) % project.images.length)
  }

  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      whileTap={{ scale: 0.98 }}
      className="glass-card"
      style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
    >
      {/* Image Carousel / Header */}
      <div style={{ width: '100%', aspectRatio: '16/9', position: 'relative', background: '#000', overflow: 'hidden' }}>
        <motion.img 
          key={currentImg}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          src={project.images[currentImg]} 
          alt={project.title} 
          style={{ 
            width: '100%', 
            height: '100%', 
            objectFit: 'cover',
            imageRendering: 'auto',
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)'
          }}
        />
        
        {project.images.length > 1 && (
          <>
            {/* Arrows */}
            <button 
              onClick={prevImg}
              aria-label="Previous image"
              style={{ position: 'absolute', left: '0.4rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10, backdropFilter: 'blur(4px)' }}
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={nextImg}
              aria-label="Next image"
              style={{ position: 'absolute', right: '0.4rem', top: '50%', transform: 'translateY(-50%)', background: 'rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.2)', color: '#fff', borderRadius: '50%', width: '28px', height: '28px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10, backdropFilter: 'blur(4px)' }}
            >
              <ChevronRight size={18} />
            </button>

            {/* Indicators */}
            <div style={{ position: 'absolute', bottom: '0.75rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '0.4rem', background: 'rgba(0,0,0,0.5)', padding: '0.4rem 0.8rem', borderRadius: '99px', backdropFilter: 'blur(8px)' }}>
              {project.images.map((_, idx) => (
                <button 
                  key={idx}
                  onClick={(e) => { e.stopPropagation(); setCurrentImg(idx); }}
                  style={{ 
                    width: currentImg === idx ? '16px' : '6px', 
                    height: '6px', 
                    borderRadius: '3px', 
                    background: currentImg === idx ? 'var(--primary)' : 'rgba(255,255,255,0.3)',
                    border: 'none',
                    padding: 0,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                />
              ))}
            </div>
          </>
        )}
        
        <div style={{ position: 'absolute', top: '0.75rem', left: '0.75rem', zIndex: 5 }}>
          <div style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)', padding: '0.35rem 0.8rem', borderRadius: '99px', fontSize: '0.65rem', fontWeight: 'bold', color: 'var(--primary)', border: '1px solid var(--primary-glow)' }}>
            STUDY 0{index + 1}
          </div>
        </div>
      </div>

      <div style={{ padding: '1.5rem' }}>
        <h3 style={{ fontSize: '1.35rem', marginBottom: '1.25rem', color: 'var(--text-main)', fontWeight: '700' }}>{project.title}</h3>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'rgba(6, 182, 212, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <AlertCircle size={16} style={{ color: 'var(--secondary)' }} />
            </div>
            <div>
              <p style={{ fontSize: '0.65rem', fontWeight: '800', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Problem</p>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>{project.problem}</p>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'rgba(34, 197, 94, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Cpu size={16} style={{ color: 'var(--primary)' }} />
            </div>
            <div>
              <p style={{ fontSize: '0.65rem', fontWeight: '800', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Solution</p>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.4' }}>{project.solution}</p>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: 'rgba(34, 197, 94, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <CheckCircle size={16} style={{ color: 'var(--primary)' }} />
            </div>
            <div>
              <p style={{ fontSize: '0.65rem', fontWeight: '800', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>Result</p>
              <p style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: '600', lineHeight: '1.4' }}>{project.result}</p>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {project.tools?.slice(0, 3).map(tool => (
              <span key={tool} style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.7)', background: 'rgba(255,255,255,0.05)', padding: '0.2rem 0.6rem', borderRadius: '4px', border: '1px solid rgba(255,255,255,0.1)' }}>{tool}</span>
            ))}
            {project.tools?.length > 3 && <span style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>+{project.tools.length - 3}</span>}
          </div>
          <button className="btn btn-outline" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', whiteSpace: 'nowrap' }}>
            View <ExternalLink size={12} />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default Projects
