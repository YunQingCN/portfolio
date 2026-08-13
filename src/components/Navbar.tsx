import { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Globe, Search, ChevronDown } from 'lucide-react'

interface NavLink {
  label: string
  path: string
  children?: { label: string; path: string }[]
}

const navLinks: NavLink[] = [
  { label: '首页', path: '/' },
  {
    label: '集团介绍', path: '/technology',
    children: [
      { label: '集团简介', path: '/about' },
      { label: '人才队伍', path: '/team' },
      { label: '科学研究', path: '/research' },
    ],
  },
  {
    label: '服务项目', path: '/products',
    children: [
      { label: '细胞储存', path: '/cell-storage' },
      { label: '细胞技术服务', path: '/cell-service' },
    ],
  },
  {
    label: '新闻热点', path: '/news',
    children: [
      { label: '公司新闻', path: '/news' },
      { label: '行业资讯', path: '/news' },
    ],
  },
  { label: '联系我们', path: '/#contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setHoveredMenu(null)
  }, [location])

  const handleNavClick = (path: string) => {
    if (path.startsWith('/#')) {
      const id = path.slice(2)
      if (location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          const el = document.getElementById(id)
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed', top: 0, left: 0, right: 0,
        zIndex: 1000,
        padding: scrolled ? '0.8rem 2rem' : '1.2rem 2rem',
        background: scrolled ? 'rgba(17, 47, 145, 0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(35, 203, 200, 0.15)' : 'none',
        transition: 'all 0.3s ease',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}
    >
      <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.7rem' }}>
        <div style={{
          width: 44, height: 44, borderRadius: '50%',
          background: 'rgba(255,255,255,0.95)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
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
          <div
            key={link.path}
            style={{ position: 'relative' }}
            onMouseEnter={() => link.children && setHoveredMenu(link.label)}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            <Link
              to={link.path}
              onClick={(e) => {
                if (link.children) {
                  e.preventDefault()
                } else {
                  handleNavClick(link.path)
                }
              }}
              style={{
                padding: '0.5rem 1rem',
                fontSize: '0.9rem',
                color: 'var(--text-light)',
                borderRadius: 8,
                transition: 'all 0.3s',
                display: 'flex', alignItems: 'center', gap: '0.3rem',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--primary-teal)'
                e.currentTarget.style.background = 'rgba(35, 203, 200, 0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-light)'
                e.currentTarget.style.background = 'transparent'
              }}
            >
              {link.label}
              {link.children && <ChevronDown size={14} />}
            </Link>

            {/* Dropdown */}
            <AnimatePresence>
              {link.children && hoveredMenu === link.label && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    minWidth: 160,
                    background: 'rgba(17, 47, 145, 0.98)',
                    backdropFilter: 'blur(20px)',
                    borderRadius: 12,
                    border: '1px solid rgba(35, 203, 200, 0.15)',
                    padding: '0.5rem',
                    marginTop: '0.5rem',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.3)',
                  }}
                >
                  {link.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      onClick={() => setHoveredMenu(null)}
                      style={{
                        display: 'block',
                        padding: '0.6rem 1rem',
                        color: 'var(--text-gray)',
                        fontSize: '0.85rem',
                        borderRadius: 8,
                        textDecoration: 'none',
                        transition: 'all 0.3s',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--primary-teal)'
                        e.currentTarget.style.background = 'rgba(35, 203, 200, 0.08)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--text-gray)'
                        e.currentTarget.style.background = 'transparent'
                      }}
                    >
                      {child.label}
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
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
          border: 'none',
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
              position: 'fixed', top: 70, left: 0, right: 0,
              background: 'rgba(17, 47, 145, 0.98)',
              backdropFilter: 'blur(20px)',
              padding: '1rem',
              borderBottom: '1px solid rgba(35, 203, 200, 0.2)',
            }}
          >
            {navLinks.map((link) => (
              <div key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => { handleNavClick(link.path); setIsOpen(false) }}
                  style={{
                    display: 'block',
                    padding: '0.8rem 1rem',
                    color: 'var(--text-light)',
                    fontSize: '1rem',
                    borderRadius: 8,
                    marginBottom: 4,
                    textDecoration: 'none',
                  }}
                >
                  {link.label}
                </Link>
                {link.children && link.children.map((child) => (
                  <Link
                    key={child.path}
                    to={child.path}
                    onClick={() => setIsOpen(false)}
                    style={{
                      display: 'block',
                      padding: '0.6rem 1rem 0.6rem 2rem',
                      color: 'var(--text-gray)',
                      fontSize: '0.9rem',
                      borderRadius: 8,
                      textDecoration: 'none',
                    }}
                  >
                    {child.label}
                  </Link>
                ))}
              </div>
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
