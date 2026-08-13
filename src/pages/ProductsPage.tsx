import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Dna, Snowflake, ChevronRight } from 'lucide-react'

const services = [
  {
    icon: Dna,
    title: '细胞技术服务',
    subtitle: 'CELL TECHNOLOGY SERVICE',
    desc: '了解细胞强大的再生修复能力，通过免疫疗法、分化疗法、旁分泌疗法、促进疗法等多种方式，发挥干细胞再生修复能力',
    path: '/cell-service',
    color: '#23CBC8',
  },
  {
    icon: Snowflake,
    title: '细胞储存',
    subtitle: 'CELL STORAGE',
    desc: '干细胞保存不受年龄影响，建议女性在青春期进行保存。越年轻细胞活性越好，年轻时保存，年老时用来治疗疾病或进行亚健康调理',
    path: '/cell-storage',
    color: '#37A5DB',
  },
]

export default function ProductsPage() {
  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* Hero */}
      <section style={{
        padding: '4rem 0',
        background: 'linear-gradient(180deg, #2D56A5 0%, #112F91 100%)',
        textAlign: 'center',
      }}>
        <div className="container">
          <Link to="/" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            color: 'var(--primary-teal)', fontSize: '0.9rem', marginBottom: '2rem', textDecoration: 'none',
          }}>
            <ArrowLeft size={16} /> 返回首页
          </Link>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: '#fff', marginBottom: '1rem' }}>
            服务项目
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            style={{ color: 'var(--text-gray)', fontSize: '1.1rem', maxWidth: 600, margin: '0 auto' }}>
            OUR SERVICES
          </motion.p>
        </div>
      </section>

      {/* 导航卡片 */}
      <section style={{ padding: '5rem 0', background: '#112F91' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {services.map((service, i) => (
              <motion.div key={service.title}
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 * i }}>
                <Link to={service.path} style={{ textDecoration: 'none' }}>
                  <div
                    style={{
                      display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: '2rem',
                      padding: '2.5rem', alignItems: 'center',
                      background: 'var(--bg-card)', borderRadius: 20,
                      border: '1px solid rgba(35, 203, 200, 0.08)',
                      cursor: 'pointer',
                      transition: 'border-color 0.3s, box-shadow 0.3s',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = `${service.color}40`
                      e.currentTarget.style.boxShadow = `0 8px 30px ${service.color}15`
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(35, 203, 200, 0.08)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <div style={{
                      width: 72, height: 72, borderRadius: 18,
                      background: `${service.color}15`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <service.icon size={32} color={service.color} />
                    </div>
                    <div>
                      <div style={{ color: 'var(--primary-teal)', fontSize: '0.75rem', letterSpacing: 2, marginBottom: '0.3rem' }}>
                        {service.subtitle}
                      </div>
                      <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                        {service.title}
                      </h3>
                      <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                        {service.desc}
                      </p>
                    </div>
                    <div style={{
                      display: 'flex', alignItems: 'center', gap: '0.3rem',
                      color: 'var(--primary-teal)', fontWeight: 500, fontSize: '0.9rem',
                    }}>
                      查看更多 <ChevronRight size={16} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
