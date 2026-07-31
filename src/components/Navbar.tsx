import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Globe, Search } from 'lucide-react'

const navLinks = [
  { label: '首页', path: '/' },
  { label: '集团介绍', path: '/#technology' },
  { label: '新闻热点', path: '/#products' },
  { label: '五心公益', path: '/#global' },
  { label: '联系我们', path: '/#contact' },
  { label: '员工名片', path: '/business-card' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [location])

  const handleNavClick = (path: string) => {
    if (path.startsWith('/#')) {
      const id = path.slice(2)
      const el = document.getElementById(id)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '0.8rem 2rem' : '1.2rem 2rem',
        background: scrolled ? 'rgba(13, 27, 42, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(33, 150, 243, 0.15)' : 'none',
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
        <div style={{
          width: 44,
          height: 44,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.95)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
          transition: 'transform 0.3s, box-shadow 0.3s',
          overflow: 'hidden',
        }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.08)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.25)' }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.15)' }}
        >
          <img src="/logo.png" alt="五心集团" style={{ width: 38, height: 38, objectFit: 'contain' }} />
        </div>
        <div>
          <div style={{ fontWeight: 700, fontSize: '1.1rem', color: '#fff' }}>五心集团</div>
          <div style={{ fontSize: '0.65rem', color: 'var(--primary-teal)', letterSpacing: 2 }}>WUXINDAO GROUP</div>
        </div>
      </Link>

      {/* Desktop Nav */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }} className="desktop-nav">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => handleNavClick(link.path)}
            style={{
              padding: '0.5rem 1rem',
              fontSize: '0.9rem',
              color: 'var(--text-light)',
              borderRadius: 8,
              transition: 'all 0.3s',
              position: 'relative',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--accent-cyan)'
              e.currentTarget.style.background = 'rgba(33, 150, 243, 0.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-light)'
              e.currentTarget.style.background = 'transparent'
            }}
          >
            {link.label}
          </Link>
        ))}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginLeft: '0.5rem' }}>
          <button style={{ background: 'none', color: 'var(--text-light)', padding: 8 }}>
            <Globe size={18} />
          </button>
          <button style={{ background: 'none', color: 'var(--text-light)', padding: 8 }}>
            <Search size={18} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          display: 'none',
          background: 'none',
          color: '#fff',
          padding: 8,
        }}
        className="mobile-menu-btn"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: 70,
              left: 0,
              right: 0,
              background: 'rgba(13, 27, 42, 0.98)',
              backdropFilter: 'blur(20px)',
              padding: '1rem',
              borderBottom: '1px solid rgba(33, 150, 243, 0.2)',
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => handleNavClick(link.path)}
                style={{
                  display: 'block',
                  padding: '0.8rem 1rem',
                  color: 'var(--text-light)',
                  fontSize: '1rem',
                  borderRadius: 8,
                  marginBottom: 4,
                }}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </motion.nav>
  )
}