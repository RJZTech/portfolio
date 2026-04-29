import { Cpu, Linkedin, Twitter, Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="footer" style={{ background: '#01040f', borderTop: '1px solid var(--border)', padding: '4rem 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
          <div>
            <a href="#home" className="nav-logo" style={{ marginBottom: '1.5rem', display: 'flex' }}>
              <Cpu className="logo-icon" />
            </a>
            <p style={{ color: 'var(--text-muted)', maxWidth: '300px' }}>
              Specializing in enterprise-grade AI systems and intelligent automation solutions.
            </p>
          </div>
          
          <div>
            <h4 style={{ marginBottom: '1.5rem' }}>Navigation</h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              <li><a href="#about" style={{ color: 'var(--text-muted)' }}>About</a></li>
              <li><a href="#services" style={{ color: 'var(--text-muted)' }}>Services</a></li>
              <li><a href="#projects" style={{ color: 'var(--text-muted)' }}>Projects</a></li>
              <li><a href="#contact" style={{ color: 'var(--text-muted)' }}>Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ marginBottom: '1.5rem' }}>Connect</h4>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <a href="mailto:umairshoukatshah1578@gmail.com" className="social-link" title="Email"><Mail /></a>
              <a href="https://wa.me/923474861978" className="social-link" title="WhatsApp">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
              <a href="https://www.fiverr.com/umairshoukat34" className="social-link" title="Fiverr" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: '900', fontSize: '1.2rem', letterSpacing: '-1px' }}>fi<span style={{ color: '#1dbf73' }}>.</span></span>
              </a>
              <a href="#" className="social-link"><Linkedin /></a>
              <a href="#" className="social-link"><Twitter /></a>
            </div>
          </div>
        </div>
        
        <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} Umair Shoukat Shah. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
