import { motion } from 'framer-motion'
import { Bot, Phone, Zap, Globe, Video, Cpu, Settings, Code } from 'lucide-react'

const Services = () => {
  const services = [
    {
      title: 'AI Automation Systems',
      icon: <Bot size={32} />,
      desc: 'End-to-end automation systems designed to streamline complex business operations and eliminate manual bottlenecks.',
      tools: ['Python', 'OpenAI', 'LangChain', 'Custom APIs']
    },
    {
      title: 'Voice AI Setup',
      icon: <Phone size={32} />,
      desc: 'Advanced AI receptionists and appointment booking systems that handle calls with human-like natural language.',
      tools: ['Retell AI', 'Vapi AI', 'ElevenLabs', 'Bland AI']
    },
    {
      title: 'Workflow Automation',
      icon: <Zap size={32} />,
      desc: 'Seamless integration of your favorite tools to create autonomous lead management and data synchronization.',
      tools: ['Make (Integromat)', 'Zapier', 'Webhooks', 'REST APIs']
    },
    {
      title: 'Website Development',
      icon: <Globe size={32} />,
      desc: 'High-performance, mobile-responsive WordPress websites optimized for conversions and search engines.',
      tools: ['WordPress', 'Elementor', 'PHP', 'Performance Optimization']
    },
    {
      title: 'AI Spokesperson Videos',
      icon: <Video size={32} />,
      desc: 'Scale your content creation with AI-generated marketing videos featuring realistic human spokespeople.',
      tools: ['HeyGen', 'Synthesia', 'D-ID', 'CapCut']
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
      <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Strategic <span className="gradient-text">Solutions</span></h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Providing enterprise-grade AI and automation services that drive exponential efficiency and growth.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.02, y: -10, borderColor: 'var(--primary)', boxShadow: '0 10px 30px var(--primary-glow)' }}
            className="glass-card"
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              transition: 'all 0.3s ease',
              height: '100%'
            }}
          >
            <div style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}>
              {service.icon}
            </div>
            
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>{service.title}</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', fontSize: '1rem', lineHeight: '1.6', flex: 1 }}>{service.desc}</p>
            
            <div style={{ marginTop: 'auto' }}>
              <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--secondary)', letterSpacing: '1px', marginBottom: '0.8rem', fontWeight: 'bold' }}>Tools Used:</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {service.tools.map(tool => (
                  <span key={tool} style={{ 
                    fontSize: '0.8rem', 
                    padding: '0.3rem 0.8rem', 
                    background: 'rgba(255,255,255,0.05)', 
                    borderRadius: '4px', 
                    border: '1px solid var(--border)',
                    color: 'var(--text-muted)'
                  }}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Services
