import { motion } from 'framer-motion'
import { ArrowRight, Play, Mail, CheckCircle, Star, Users } from 'lucide-react'


const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="section hero-home" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '8rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '4rem', alignItems: 'center' }}>
            
            {/* Left Content */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '0.5rem 1.25rem', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '99px', marginBottom: '2.5rem' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)', boxShadow: '0 0 10px var(--primary)' }}></div>
                <span style={{ fontSize: '0.75rem', fontWeight: '600', color: 'var(--primary)', letterSpacing: '1px', textTransform: 'uppercase' }}>Available for Projects</span>
              </div>

              <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 6.5rem)', lineHeight: '1', marginBottom: '2.5rem', fontWeight: '900', letterSpacing: '-0.04em' }}>
                <span style={{ color: '#fff' }}>Umair</span><br />
                <span style={{ color: 'var(--primary)' }}>Shoukat</span><br />
                <span style={{ color: 'var(--accent)' }}>Shah</span>
              </h1>

              <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '550px', marginBottom: '3.5rem', lineHeight: '1.7' }}>
                AI Systems Engineer & Automation Specialist. Building intelligent voice agents, CRM automation systems, and AI-powered workflows for businesses across the UK, Europe, and beyond.
              </p>
              
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                <a href="#projects" className="btn btn-primary">
                  <Play size={18} fill="#000" /> View My Work
                </a>
                <a href="#contact" className="btn btn-outline" style={{ padding: '1.2rem 2.5rem' }}>
                  <Mail size={18} /> Get In Touch
                </a>
              </div>
            </motion.div>

            {/* Right Image/Stats */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              style={{ position: 'relative' }}
            >
              <div style={{ position: 'relative', zIndex: 2 }}>
                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                  style={{ 
                  borderRadius: '32px', 
                  overflow: 'hidden', 
                  border: '2px solid rgba(255,255,255,0.1)',
                  boxShadow: '0 40px 100px rgba(0,0,0,0.5)',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.05), rgba(0,0,0,0.2))',
                  position: 'relative'
                }}>
                  <img src="/umair-shoukat-v2.png" alt="Umair Shoukat Shah" style={{ width: '100%', height: 'auto', display: 'block' }} />
                  <div style={{ position: 'absolute', inset: 0, border: '4px solid transparent', borderRadius: '32px', background: 'linear-gradient(135deg, var(--primary), transparent, var(--secondary)) border-box', WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)', WebkitMaskComposite: 'xor', maskComposite: 'exclude', opacity: 0.5 }}></div>
                </motion.div>

                {/* Stat Cards */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="glass-card" 
                  style={{ position: 'absolute', top: '15%', right: '-15%', padding: '1.5rem', minWidth: '180px', borderLeft: '4px solid var(--primary)' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ color: 'var(--primary)' }}><Star size={24} fill="var(--primary)" /></div>
                    <div>
                      <h4 style={{ fontSize: '1.5rem', color: '#fff' }}>3+</h4>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Years Experience</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="glass-card" 
                  style={{ position: 'absolute', bottom: '15%', left: '-15%', padding: '1.5rem', minWidth: '180px', borderLeft: '4px solid var(--primary)' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{ color: 'var(--primary)' }}><Users size={24} fill="var(--primary)" /></div>
                    <div>
                      <h4 style={{ fontSize: '1.5rem', color: '#fff' }}>15+</h4>
                      <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Client Projects</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Decorative Glows */}
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '120%', height: '120%', background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)', zIndex: 1 }}></div>
            </motion.div>

          </div>
        </div>

        {/* Background Grid Pattern */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '40px 40px', zIndex: -1 }}></div>
      </section>

      {/* Services Summary Section */}
      <section className="section" style={{ background: 'rgba(255,255,255,0.01)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Specialized AI Solutions</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Enterprise-grade automation tailored for your business needs.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
            {[
              { title: 'Voice AI Agents', desc: 'Custom trained voice agents for handling calls, booking appointments, and customer support.' },
              { title: 'CRM Automation', desc: 'Seamlessly integrate GoHighLevel and other CRMs into your business workflow.' },
              { title: 'Workflow Systems', desc: 'End-to-end automation of manual processes using Make, Zapier, and custom code.' },
            ].map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -10 }}
                whileTap={{ scale: 0.95 }}
                className="glass-card"
                style={{ textAlign: 'center' }}
              >
                <div style={{ color: 'var(--primary)', marginBottom: '1.5rem' }}><CheckCircle size={32} /></div>
                <h3 style={{ marginBottom: '1rem' }}>{s.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  )
}

export default Home
