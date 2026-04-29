
import { motion } from 'framer-motion'
import { Cpu, Menu, X } from 'lucide-react'
import { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Home', path: '#home' },
    { name: 'About', path: '#about' },
    { name: 'Services', path: '#services' },
    { name: 'Projects', path: '#projects' },
    { name: 'AI Videos', path: '#videos' },
    { name: 'Contact', path: '#contact' },
  ]

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="#home" className="nav-logo">
          <div style={{ width: '40px', height: '40px', borderRadius: '50%', overflow: 'hidden', border: '2px solid var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
            <img src="/umair-shoukat-v2.png" alt="Umair" style={{ width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'center center', background: '#fff' }} />
          </div>
        </a>

        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="nav-item"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary nav-cta" onClick={() => setIsOpen(false)}>Start Project</a>
        </div>

        <button className="mobile-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
