import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'

const stats = [
  { number: '120+', label: '合作企业&伙伴' },
  { number: '120+', label: '合作企业&伙伴' },
  { number: '120+', label: '合作企业&伙伴' },
  { number: '120+', label: '合作企业&伙伴' },
]

export default function AboutSection() {
  const { ref, inView } = useInView()

  return (
    <section id="about" ref={ref} style={{
      padding: '6rem 0',
      background: 'linear-gradient(180deg, #0a1f6b 0%, #0d2570 100%)',
    }}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          集团介绍
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          GROUP INTRODUCTION
        </motion.p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div style={{
              width: '100%',
              height: 350,
              borderRadius: 16,
              background: 'linear-gradient(135deg, rgba(35, 203, 200, 0.15), rgba(39, 204, 200, 0.1))',
              border: '1px solid rgba(35, 203, 200, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                width: 200,
                height: 200,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(35, 203, 200, 0.2) 0%, transparent 70%)',
                animation: 'pulse 3s ease-in-out infinite',
              }} />
              <div style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
                <div style={{ fontSize: '4rem', marginBottom: '0.5rem' }}>🌸</div>
                <div style={{ color: 'var(--primary-teal)', fontSize: '1.1rem', fontWeight: 600 }}>五心集团</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#fff' }}>
              上海五心集团
            </h3>
            <p style={{ color: 'var(--text-light)', lineHeight: 1.8, marginBottom: '1.5rem' }}>
              五心集团致力于干细胞生物科技领域，拥有国内干细胞领域核心科学家团队，与各大医疗机构和高科技生物公司进行深度合作。
            </p>
            <p style={{ color: 'var(--text-gray)', lineHeight: 1.8, marginBottom: '2rem' }}>
              集团总部位于上海市青浦区，专注于细胞技术服务与细胞储存两大核心业务，以科技创新驱动健康产业发展。
            </p>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
              {['干细胞生物科技', '细胞技术服务', '细胞储存'].map((tag) => (
                <span key={tag} style={{
                  padding: '0.4rem 1rem',
                  background: 'rgba(35, 203, 200, 0.1)',
                  border: '1px solid rgba(35, 203, 200, 0.2)',
                  borderRadius: 20,
                  fontSize: '0.85rem',
                  color: 'var(--primary-teal)',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem',
          marginTop: '4rem',
        }}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              style={{
                textAlign: 'center',
                padding: '2rem 1rem',
                background: 'var(--bg-card)',
                borderRadius: 16,
                border: '1px solid rgba(35, 203, 200, 0.08)',
              }}
            >
              <div style={{
                fontSize: '2.5rem',
                fontWeight: 900,
                background: 'var(--gradient-primary)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                {stat.number}
              </div>
              <div style={{ color: 'var(--text-gray)', fontSize: '0.9rem', marginTop: '0.3rem' }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.2); opacity: 0.8; }
        }
        @media (max-width: 768px) {
          #about .container > div[style*="grid"] {
            grid-template-columns: 1fr !important;
          }
          #about .container > div:last-of-type {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}