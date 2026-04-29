import { motion } from 'framer-motion'
import { CheckCircle, Zap, Target, Layers, Globe } from 'lucide-react'

const About = () => {
  const experiences = [
    'Built voice AI agents for appointment booking',
    'Developed CRM systems using GoHighLevel',
    'Created automation workflows using Make and Zapier',
    'Worked with international clients'
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
      {/* Bio Section */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '5rem', alignItems: 'center', marginBottom: '8rem' }}>
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span style={{ color: 'var(--primary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '0.9rem' }}>About Me</span>
          <h1 style={{ fontSize: '3.5rem', marginTop: '1rem', marginBottom: '2rem' }}>
            Building the Infrastructure of <span className="gradient-text">Intelligence.</span>
          </h1>
          <p style={{ color: 'var(--text-main)', fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            I am an AI Systems Engineer specializing in automation and AI-powered business systems. I build solutions that handle calls, manage leads, automate workflows, and improve efficiency.
          </p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {experiences.map((exp, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + (i * 0.1) }}
                style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--text-muted)' }}
              >
                <CheckCircle size={20} color="var(--primary)" />
                <span>{exp}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{ position: 'relative' }}
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="glass-card" 
            style={{ padding: '3rem', textAlign: 'center', borderStyle: 'dashed' }}
          >
             <Globe size={80} color="var(--secondary)" style={{ marginBottom: '2rem', opacity: 0.5 }} />
             <h3 style={{ marginBottom: '1rem' }}>Global Reach</h3>
             <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Deploying systems for clients across North America, Europe, and Asia.</p>
          </motion.div>
          <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', width: '100px', height: '100px', background: 'var(--primary)', filter: 'blur(70px)', opacity: 0.2 }}></div>
        </motion.div>
      </div>

      {/* Split Sections: What I Do & My Approach */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '3rem' }}>
        {/* Section 1: What I Do */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02, y: -5 }}
          className="glass-card"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ width: '50px', height: '50px', background: 'var(--primary-glow)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
              <Zap size={24} />
            </div>
            <h2 style={{ fontSize: '1.75rem' }}>What I Do</h2>
          </div>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: '1.7' }}>
            Design and deploy AI systems that automate business operations including calls, scheduling, and lead management. I bridge the gap between complex AI models and practical business tools.
          </p>
        </motion.div>

        {/* Section 2: My Approach */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.02, y: -5 }}
          className="glass-card"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
            <div style={{ width: '50px', height: '50px', background: 'var(--secondary-glow)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--secondary)' }}>
              <Target size={24} />
            </div>
            <h2 style={{ fontSize: '1.75rem' }}>My Approach</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            {[
              { icon: <Zap size={16} />, text: 'Automation-first mindset' },
              { icon: <Target size={16} />, text: 'Focus on real results' },
              { icon: <Layers size={16} />, text: 'Scalable and reliable' },
              { icon: <CheckCircle size={16} />, text: 'Clean and structured' }
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                <span style={{ color: 'var(--secondary)' }}>{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default About
