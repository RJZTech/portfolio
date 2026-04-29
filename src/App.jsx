import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Videos from './pages/Videos'

function App() {
  return (
    <>
      {/* Dynamic Animated Background */}
      <div style={{ position: 'fixed', inset: 0, zIndex: -10, overflow: 'hidden', background: 'var(--bg-dark)' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '50vw', height: '50vw', background: 'radial-gradient(circle, var(--primary-glow) 0%, transparent 60%)', filter: 'blur(100px)', opacity: 0.6, animation: 'float 20s ease-in-out infinite alternate' }} />
        <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '60vw', height: '60vw', background: 'radial-gradient(circle, var(--secondary-glow) 0%, transparent 60%)', filter: 'blur(120px)', opacity: 0.4, animation: 'float 25s ease-in-out infinite alternate-reverse' }} />
        <div style={{ position: 'absolute', top: '40%', left: '20%', width: '30vw', height: '30vw', background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 60%)', filter: 'blur(80px)', animation: 'pulse-glow 15s ease-in-out infinite' }} />
      </div>
      
      <Navbar />
      <AnimatePresence mode="wait">
        <main>
          <section id="home"><Home /></section>
          <section id="about"><About /></section>
          <section id="services"><Services /></section>
          <section id="projects"><Projects /></section>
          <section id="videos"><Videos /></section>
          <section id="contact"><Contact /></section>
        </main>
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default App
