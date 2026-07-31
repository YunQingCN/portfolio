import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Heart, Users, HandHeart, Sparkles } from 'lucide-react'

const values = [
  { icon: Heart, title: '爱心', desc: '以爱心对待每一位客户' },
  { icon: Users, title: '关心', desc: '关心员工成长与发展' },
  { icon: HandHeart, title: '热心', desc: '热心公益，回馈社会' },
  { icon: Sparkles, title: '信心', desc: '以信心推动科技创新' },
  { icon: Heart, title: '耐心', desc: '耐心服务，精益求精' },
]

export default function GlobalSection() {
  const { ref, inView } = useInView()

  return (
    <section id="global" ref={ref} style={{
      padding: '6rem 0',
      background: 'linear-gradient(180deg, #0c1a30 0%, #1a2a4a 50%, #0f1d35 100%)',
    }}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          五心公益
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          WUXINDAO CHARITY
        </motion.p>

        {/* Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            width: '100%',
            padding: '3rem 2rem',
            borderRadius: 20,
            background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.15), rgba(100, 181, 246, 0.1))',
            border: '1px solid rgba(33, 150, 243, 0.2)',
            textAlign: 'center',
            marginBottom: '3rem',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{
            position: 'absolute',
            top: -40,
            right: -40,
            width: 200,
            height: 200,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(33, 150, 243, 0.1) 0%, transparent 70%)',
          }} />
          <div style={{
            position: 'absolute',
            bottom: -30,
            left: -30,
            width: 150,
            height: 150,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(100, 181, 246, 0.08) 0%, transparent 70%)',
          }} />
          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>🌸</div>
            <h3 style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
              fontWeight: 900,
              background: 'var(--gradient-primary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '0.8rem',
            }}>
              五心承诺 —— 为您的健康保驾护航
            </h3>
            <p style={{ color: 'var(--text-gray)', fontSize: '1rem', maxWidth: 500, margin: '0 auto 1.5rem' }}>
              敬老爱老，传递温暖。五心集团积极履行社会责任，关爱老年群体，推动健康公益事业发展。
            </p>
            <a href="#contact" style={{
              display: 'inline-block',
              padding: '0.7rem 2rem',
              background: 'var(--gradient-primary)',
              color: '#fff',
              borderRadius: 30,
              fontWeight: 600,
              fontSize: '0.95rem',
            }}>
              联系我们
            </a>
          </div>
        </motion.div>

        {/* Five Hearts Values */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '1rem',
        }}>
          {values.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i }}
              whileHover={{ y: -5 }}
              style={{
                textAlign: 'center',
                padding: '1.5rem 1rem',
                background: 'var(--bg-card)',
                borderRadius: 16,
                border: '1px solid rgba(33, 150, 243, 0.08)',
                cursor: 'default',
              }}
            >
              <div style={{
                width: 50,
                height: 50,
                borderRadius: '50%',
                background: 'rgba(33, 150, 243, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 0.8rem',
              }}>
                <item.icon size={22} color="var(--primary-teal)" />
              </div>
              <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', marginBottom: '0.3rem' }}>
                {item.title}
              </h4>
              <p style={{ color: 'var(--text-gray)', fontSize: '0.75rem' }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* News highlights */}
        <div style={{ marginTop: '3rem' }}>
          <h3 style={{ textAlign: 'center', color: '#fff', fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.5rem' }}>
            最新动态
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
          }}>
            {[
              { title: '青浦区朱家角镇人大代表一行走访五心集团', date: '2025-07-04', views: 248 },
              { title: '五心集团获得干细胞临床应用团标标准化证书', date: '2025-06-27', views: 227 },
              { title: '江苏南通市海安开发区领导一行莅临五心集团考察指导', date: '2025-06-25', views: 298 },
            ].map((news, i) => (
              <motion.div
                key={news.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ y: -3 }}
                style={{
                  padding: '1.5rem',
                  background: 'var(--bg-card)',
                  borderRadius: 12,
                  border: '1px solid rgba(33, 150, 243, 0.08)',
                  cursor: 'pointer',
                }}
              >
                <h4 style={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.8rem', lineHeight: 1.5 }}>
                  {news.title}
                </h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-gray)', fontSize: '0.75rem' }}>
                  <span>{news.date}</span>
                  <span>浏览 {news.views}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #global .container > div[style*="grid"] {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          #global .container > div[style*="grid"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}