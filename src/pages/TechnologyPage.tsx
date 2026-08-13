import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Shield, Users, Microscope, ChevronRight } from 'lucide-react'

const sections = [
  {
    icon: Shield,
    title: '集团简介',
    subtitle: 'GROUP INTRODUCTION',
    desc: '五心集团是一家专注于细胞生物领域技术研发、应用及健康管理综合服务的高科技公司',
    path: '/about',
    color: '#23CBC8',
  },
  {
    icon: Users,
    title: '人才队伍',
    subtitle: 'TALENT TEAM',
    desc: '拥有国内干细胞领域核心科学家团队，由多位在生物医药领域具有深厚学术背景的专家领衔',
    path: '/team',
    color: '#37A5DB',
  },
  {
    icon: Microscope,
    title: '科学研究',
    subtitle: 'SCIENTIFIC RESEARCH',
    desc: '与各大医疗机构和高科技生物公司进行深度合作，取得50多项先进科研成果',
    path: '/research',
    color: '#27CCC8',
  },
]

export default function TechnologyPage() {
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
            集团介绍
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            style={{ color: 'var(--text-gray)', fontSize: '1.1rem', maxWidth: 600, margin: '0 auto' }}>
            GROUP INTRODUCTION
          </motion.p>
        </div>
      </section>

      {/* 导航卡片 */}
      <section style={{ padding: '5rem 0', background: '#112F91' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {sections.map((section, i) => (
              <motion.div key={section.title}
                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 * i }}>
                <Link to={section.path} style={{ textDecoration: 'none' }}>
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
                      e.currentTarget.style.borderColor = `${section.color}40`
                      e.currentTarget.style.boxShadow = `0 8px 30px ${section.color}15`
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(35, 203, 200, 0.08)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <div style={{
                      width: 72, height: 72, borderRadius: 18,
                      background: `${section.color}15`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <section.icon size={32} color={section.color} />
                    </div>
                    <div>
                      <div style={{ color: 'var(--primary-teal)', fontSize: '0.75rem', letterSpacing: 2, marginBottom: '0.3rem' }}>
                        {section.subtitle}
                      </div>
                      <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                        {section.title}
                      </h3>
                      <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                        {section.desc}
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

      {/* 统计数据 */}
      <section style={{ padding: '4rem 0', background: 'linear-gradient(180deg, #112F91 0%, #0a1f6b 100%)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {[
              { value: '50+', label: '专利证书' },
              { value: '100%', label: '客户满意度' },
              { value: '120+', label: '服务案例' },
              { value: '15+', label: '驻全球办事处' },
            ].map((stat) => (
              <div key={stat.label} style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <div style={{
                  fontSize: '2.5rem', fontWeight: 900,
                  background: 'var(--gradient-primary)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text', marginBottom: '0.3rem',
                }}>{stat.value}</div>
                <div style={{ color: 'var(--text-gray)', fontSize: '0.9rem' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section > .container > div[style*="grid"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
