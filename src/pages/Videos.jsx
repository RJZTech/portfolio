import { motion } from 'framer-motion'
import { ExternalLink, Video } from 'lucide-react'

const Videos = () => {
  const videoPortfolios = [
    {
      title: 'AI Spokesperson Showcase',
      folder: 'AI_SPOKESPERSON_VIDEOS_PORTFOLIO',
      link: 'https://drive.google.com/drive/folders/1_xV6JncpN1cHmya--0dKOl1rJ1NR0XYh',
      thumbnail: '/spokesperson-clean.png',
      tag: 'AI SPOKESPERSON',
      line1: 'PROFESSIONAL',
      line2: 'AI AVATARS',
      desc: 'Engaging AI avatars for corporate training, educational content, and social media marketing.'
    },
    {
      title: 'AI Marketing Automation',
      folder: 'AI-VIDEOS',
      link: 'https://drive.google.com/drive/folders/185S3eNt8255kimZaxO4oVebvuPePYoOi',
      thumbnail: '/spokesperson-clean.png',
      tag: 'MARKETING AUTOMATION',
      line1: 'AUTOMATED',
      line2: 'MARKETING',
      desc: 'High-conversion marketing videos generated through automated AI workflows.'
    },
    {
      title: 'Voice AI Systems',
      folder: 'AI-VIDEOS',
      link: 'https://drive.google.com/drive/folders/185S3eNt8255kimZaxO4oVebvuPePYoOi',
      thumbnail: '/spokesperson-clean.png',
      tag: 'VOICE AI AGENTS',
      line1: 'VOICE AI',
      line2: 'INTEGRATION',
      desc: 'Visual demonstrations of Retell AI and Vapi systems handling complex customer calls.'
    },
    {
      title: 'Real Estate AI Demos',
      folder: 'AI_SPOKESPERSON_VIDEOS_PORTFOLIO',
      link: 'https://drive.google.com/drive/folders/1_xV6JncpN1cHmya--0dKOl1rJ1NR0XYh',
      thumbnail: '/spokesperson-clean.png',
      tag: 'PROPERTY DEMOS',
      line1: 'REAL ESTATE',
      line2: 'AI TOURS',
      desc: 'Automated property walkthroughs and real estate marketing videos featuring AI presenters.'
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
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>AI <span className="gradient-text">Spokesperson</span> & Media</h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
          Dynamic, high-impact marketing videos and system demonstrations powered by AI.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
        {videoPortfolios.map((video, i) => (
          <motion.div
            key={i}
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            className="glass-card"
            style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%', position: 'relative' }}
          >
            {/* Image Section */}
            <div style={{ width: '100%', aspectRatio: '1/1', position: 'relative', overflow: 'hidden', background: '#000' }}>
              <img 
                src={video.thumbnail} 
                alt={video.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
              
              {/* Text Overlay - Directly "Inside" the pic area */}
              <div style={{ position: 'absolute', top: '42%', right: '2rem', width: '60%', textAlign: 'left', zIndex: 5 }}>
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <h4 style={{ 
                    fontSize: '1.8rem', 
                    fontWeight: '900', 
                    color: '#fff', 
                    margin: 0, 
                    lineHeight: '1', 
                    fontStyle: 'italic',
                    textTransform: 'uppercase',
                    letterSpacing: '-1px',
                    textShadow: '0 4px 10px rgba(0,0,0,0.8)'
                  }}>
                    {video.line1}
                  </h4>
                  <h4 style={{ 
                    fontSize: '2.4rem', 
                    fontWeight: '900', 
                    color: 'var(--primary)', 
                    margin: '0.2rem 0 0.5rem 0', 
                    lineHeight: '1', 
                    fontStyle: 'italic',
                    textTransform: 'uppercase',
                    letterSpacing: '-1px',
                    textShadow: '0 4px 10px rgba(0,0,0,0.8)'
                  }}>
                    {video.line2}
                  </h4>
                  
                  {/* Subtle Badge */}
                  <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(4px)', padding: '0.3rem 0.8rem', borderRadius: '4px', borderLeft: '3px solid var(--primary)' }}>
                    <span style={{ fontSize: '0.65rem', fontWeight: 'bold', color: '#fff', letterSpacing: '1px' }}>{video.tag}</span>
                  </div>
                </motion.div>
              </div>


            </div>
            
            {/* Content Section */}
            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column', background: 'rgba(255,255,255,0.01)' }}>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', fontWeight: '700' }}>{video.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '2rem', lineHeight: '1.6' }}>{video.desc}</p>
              
              <div style={{ marginTop: 'auto' }}>
                <a 
                  href={video.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn btn-outline" 
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.9rem', padding: '0.9rem', background: 'rgba(255,255,255,0.02)' }}
                >
                  Watch All Videos <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Videos
