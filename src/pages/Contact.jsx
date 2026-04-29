import { motion } from 'framer-motion'
import { Send, Mail, Phone, ExternalLink, MessageSquare } from 'lucide-react'

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container"
      style={{ paddingTop: '10rem', paddingBottom: '8rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
    >
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        style={{ maxWidth: '800px', width: '100%' }}
      >
        <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4rem)', marginBottom: '1.5rem' }}>
          Let's Build Your <span className="gradient-text">AI System</span>
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', marginBottom: '4rem' }}>
          Ready to automate your operations and scale your business? Reach out via the form below or through my direct channels.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '5rem' }}>
          {[
            { icon: <Mail />, title: 'Email', value: 'umairshoukatshah1578@gmail.com', link: 'mailto:umairshoukatshah1578@gmail.com' },
            { icon: <Phone />, title: 'WhatsApp', value: '+92 347 4861978', link: 'https://wa.me/923474861978' },
            { icon: <ExternalLink />, title: 'Fiverr', value: 'umairshoukat34', link: 'https://www.fiverr.com/umairshoukat34' }
          ].map(item => (
            <motion.a
              key={item.title}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.05, y: -5, borderColor: 'var(--primary)', boxShadow: '0 10px 30px var(--primary-glow)' }}
              whileTap={{ scale: 0.95 }}
              className="glass-card"
              style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', textDecoration: 'none', color: 'inherit' }}
            >
              <div style={{ color: 'var(--primary)' }}>{item.icon}</div>
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '1px' }}>{item.title}</div>
                <div style={{ fontWeight: '600', fontSize: '0.9rem', wordBreak: 'break-all' }}>{item.value}</div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="glass-card"
          style={{ padding: '3rem', textAlign: 'left', maxWidth: '600px', margin: '0 auto' }}
        >
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }} onSubmit={(e) => e.preventDefault()}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Full Name</label>
              <input type="text" placeholder="John Doe" style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border)', padding: '1rem', borderRadius: '8px', color: '#fff', outline: 'none' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Email Address</label>
              <input type="email" placeholder="john@example.com" style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border)', padding: '1rem', borderRadius: '8px', color: '#fff', outline: 'none' }} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Message</label>
              <textarea rows="5" placeholder="Tell me about your project requirements..." style={{ background: 'rgba(0,0,0,0.2)', border: '1px solid var(--border)', padding: '1rem', borderRadius: '8px', color: '#fff', outline: 'none', resize: 'vertical' }}></textarea>
            </div>
            <button className="btn btn-primary" style={{ padding: '1.2rem', justifyContent: 'center', fontSize: '1.1rem', width: '100%', marginTop: '1rem' }}>
              Send Message <Send size={20} />
            </button>
          </form>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Contact
