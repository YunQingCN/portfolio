import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const products = [
  { name: '细胞技术服务', desc: '了解细胞强大的再生修复能力，通过免疫疗法、分化疗法、旁分泌疗法、促进疗法等多种方式，发挥干细胞再生修复能力', icon: '🧫', path: '/cell-service' },
  { name: '细胞储存', desc: '干细胞保存不受年龄影响，建议女性在青春期进行保存。越年轻细胞活性越好，年轻时保存，年老时用来治疗疾病或进行亚健康调理', icon: '🧊', path: '/cell-storage' },
]

export default function ProductsSection() {
  const { ref, inView } = useInView()

  return (
    <section id="products" ref={ref} style={{
      padding: '6rem 0',
      background: 'linear-gradient(180deg, #0a1f6b 0%, #0d2570 50%, #0a1f6b 100%)',
    }}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          服务项目
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          SERVICE PROJECTS
        </motion.p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2rem',
        }}>
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.6 }}
            >
              <Link to={product.path} style={{ textDecoration: 'none' }}>
                <motion.div
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  style={{
                    padding: '3rem 2.5rem',
                    background: 'var(--bg-card)',
                    borderRadius: 20,
                    border: '1px solid rgba(35, 203, 200, 0.08)',
                    textAlign: 'center',
                    cursor: 'pointer',
                    transition: 'border-color 0.3s, box-shadow 0.3s',
                    height: '100%',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(35, 203, 200, 0.25)'
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(35, 203, 200, 0.1)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(35, 203, 200, 0.08)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <div style={{ fontSize: '4rem', marginBottom: '1.5rem' }}>{product.icon}</div>
                  <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>
                    {product.name}
                  </h3>
                  <p style={{ color: 'var(--text-gray)', fontSize: '0.95rem', lineHeight: 1.8, marginBottom: '1.5rem' }}>
                    {product.desc}
                  </p>
                  <div style={{
                    display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                    color: 'var(--primary-teal)', fontWeight: 600, fontSize: '0.95rem',
                  }}>
                    了解更多 <ArrowRight size={16} />
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #products .container > div[style*="grid"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
