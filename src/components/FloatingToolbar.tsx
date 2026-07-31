import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageCircle, ArrowUp, QrCode, X } from 'lucide-react'

export default function FloatingToolbar() {
  const [showTop, setShowTop] = useState(false)
  const [showChat, setShowChat] = useState(false)

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setShowTop(window.scrollY > 300)
    })
  }

  return (
    <>
      {/* Right side floating toolbar */}
      <div style={{
        position: 'fixed',
        right: '1.2rem',
        bottom: '2rem',
        zIndex: 999,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.6rem',
      }}>
        {/* Phone */}
        <motion.a
          href="tel:021-60835322"
          whileHover={{ scale: 1.1 }}
          style={{
            width: 48, height: 48, borderRadius: '50%',
            background: 'var(--primary-teal)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(33, 150, 243, 0.3)',
            color: '#fff',
          }}
        >
          <Phone size={20} />
        </motion.a>

        {/* Chat */}
        <motion.button
          onClick={() => setShowChat(!showChat)}
          whileHover={{ scale: 1.1 }}
          style={{
            width: 48, height: 48, borderRadius: '50%',
            background: 'var(--accent-cyan)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(244, 162, 97, 0.3)',
            color: '#fff',
            border: 'none',
          }}
        >
          <MessageCircle size={20} />
        </motion.button>

        {/* QR Code / Business Card */}
        <motion.a
          href="/business-card"
          whileHover={{ scale: 1.1 }}
          style={{
            width: 48, height: 48, borderRadius: '50%',
            background: 'var(--accent-green)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(231, 111, 81, 0.3)',
            color: '#fff',
          }}
        >
          <QrCode size={20} />
        </motion.a>

        {/* Back to top */}
        <AnimatePresence>
          {showTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              whileHover={{ scale: 1.1 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{
                width: 48, height: 48, borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#fff',
                backdropFilter: 'blur(10px)',
              }}
            >
              <ArrowUp size={20} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* Chat popup */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            style={{
              position: 'fixed',
              right: '1.2rem',
              bottom: '8rem',
              zIndex: 999,
              width: 320,
              background: 'rgba(13, 27, 42, 0.98)',
              backdropFilter: 'blur(20px)',
              borderRadius: 16,
              border: '1px solid rgba(33, 150, 243, 0.15)',
              boxShadow: '0 10px 40px rgba(0, 0, 0, 0.5)',
              overflow: 'hidden',
            }}
          >
            <div style={{
              padding: '1rem',
              background: 'linear-gradient(135deg, #2196F3, #42A5F5)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <span style={{ color: '#fff', fontWeight: 600 }}>在线咨询</span>
              <button onClick={() => setShowChat(false)} style={{ background: 'none', color: '#fff', border: 'none' }}>
                <X size={18} />
              </button>
            </div>
            <div style={{ padding: '1rem', maxHeight: 250, overflowY: 'auto' }}>
              <div style={{
                background: 'var(--bg-card)',
                borderRadius: 12,
                padding: '0.8rem',
                marginBottom: '0.5rem',
              }}>
                <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                  五心集团致力于干细胞生物科技领域，拥有国内干细胞领域核心科学家团队。
                </p>
                <p style={{ color: 'var(--text-gray)', fontSize: '0.75rem' }}>
                  请随时通过以下方式与我们联系：021-60835322
                </p>
              </div>
              {['什么是干细胞技术？', '细胞储存有哪些服务？', '如何联系五心集团？'].map((q) => (
                <div key={q} style={{
                  padding: '0.6rem 0.8rem',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  color: 'var(--text-gray)',
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                }}>
                  {q}
                </div>
              ))}
            </div>
            <div style={{ padding: '0.8rem', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              <input
                placeholder="请输入内容"
                style={{
                  width: '100%',
                  padding: '0.6rem 0.8rem',
                  background: 'var(--bg-card)',
                  border: '1px solid rgba(33, 150, 243, 0.15)',
                  borderRadius: 8,
                  color: '#fff',
                  fontSize: '0.85rem',
                }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}