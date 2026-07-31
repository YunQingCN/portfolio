import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const products = [
  { name: '公司新闻', desc: '青浦区朱家角镇人大代表一行走访五心集团', icon: '📰' },
  { name: '细胞技术服务', desc: '了解细胞强大的再生修复能力', icon: '🧫' },
  { name: '细胞储存', desc: '细胞储存，青春永驻', icon: '🧊' },
  { name: '干细胞团标证书', desc: '获得干细胞临床应用团标标准化证书', icon: '🏆' },
  { name: '行业资讯', desc: '2022年两会，干细胞成医学发展重要方向', icon: '📋' },
  { name: '五心公益', desc: '敬老爱老，传递温暖', icon: '❤️' },
]

export default function ProductsSection() {
  const { ref, inView } = useInView()
  const [page, setPage] = useState(0)
  const perPage = 3
  const maxPage = Math.ceil(products.length / perPage) - 1

  return (
    <section id="products" ref={ref} style={{
      padding: '6rem 0',
      background: 'linear-gradient(180deg, #0d1b2a 0%, #0a1628 50%, #0c1a30 100%)',
    }}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          新闻热点
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          NEWS & HOT TOPICS
        </motion.p>

        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <motion.div
            animate={{ x: `-${page * 100}%` }}
            transition={{ type: 'spring', stiffness: 200, damping: 25 }}
            style={{ display: 'flex' }}
          >
            {products.map((product, i) => (
              <div
                key={product.name}
                style={{
                  minWidth: `${100 / perPage}%`,
                  padding: '0 0.75rem',
                  boxSizing: 'border-box',
                }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.1 * i }}
                  whileHover={{ y: -5 }}
                  style={{
                    padding: '2rem',
                    background: 'var(--bg-card)',
                    borderRadius: 16,
                    border: '1px solid rgba(33, 150, 243, 0.08)',
                    textAlign: 'center',
                    cursor: 'pointer',
                    height: '100%',
                  }}
                >
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{product.icon}</div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.5rem', color: '#fff' }}>
                    {product.name}
                  </h3>
                  <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem' }}>{product.desc}</p>
                </motion.div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Controls */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginTop: '2rem' }}>
          <button
            onClick={() => setPage(Math.max(0, page - 1))}
            disabled={page === 0}
            style={{
              width: 40, height: 40, borderRadius: '50%',
              background: page === 0 ? 'rgba(255,255,255,0.05)' : 'rgba(33, 150, 243, 0.15)',
              border: '1px solid rgba(33, 150, 243, 0.2)',
              color: page === 0 ? 'rgba(255,255,255,0.2)' : 'var(--primary-teal)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: page === 0 ? 'default' : 'pointer',
              transition: 'all 0.3s',
            }}
          >
            <ChevronLeft size={18} />
          </button>
          <div style={{ display: 'flex', gap: '0.4rem' }}>
            {Array.from({ length: maxPage + 1 }, (_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                style={{
                  width: page === i ? 24 : 8, height: 8,
                  borderRadius: 4,
                  background: page === i ? 'var(--primary-teal)' : 'rgba(255,255,255,0.2)',
                  border: 'none',
                  transition: 'all 0.3s',
                }}
              />
            ))}
          </div>
          <button
            onClick={() => setPage(Math.min(maxPage, page + 1))}
            disabled={page === maxPage}
            style={{
              width: 40, height: 40, borderRadius: '50%',
              background: page === maxPage ? 'rgba(255,255,255,0.05)' : 'rgba(33, 150, 243, 0.15)',
              border: '1px solid rgba(33, 150, 243, 0.2)',
              color: page === maxPage ? 'rgba(255,255,255,0.2)' : 'var(--primary-teal)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: page === maxPage ? 'default' : 'pointer',
              transition: 'all 0.3s',
            }}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #products .container > div[style*="overflow"] > div > div {
            min-width: 50% !important;
          }
        }
        @media (max-width: 500px) {
          #products .container > div[style*="overflow"] > div > div {
            min-width: 100% !important;
          }
        }
      `}</style>
    </section>
  )
}