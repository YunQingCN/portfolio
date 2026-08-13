import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Award, Target, Lightbulb, Building, Globe, TrendingUp } from 'lucide-react'

const milestones = [
  { year: '2019', title: '公司成立', desc: '五心集团公司注册成立' },
  { year: '2020', title: '与国药集团合作', desc: '2021年4月与国药集团签订推动公司全面发展合作协议' },
  { year: '2021', title: '与复旦软件园签订战略发展协议', desc: '全方面支持公司快速发展' },
  { year: '2021', title: '与张江生物银行合作', desc: '与上海张江生物银行签订细胞储存与促进技术发展合作协议' },
  { year: '2021', title: '初期研发成果得以转化', desc: '获得干细胞技术相关的6项新发明专利' },
  { year: '2021', title: '"五心杯"第六届WORLD FAIRY世界女神大赛', desc: '2020年10月第六届女神大赛圆满落幕' },
  { year: '2022', title: '干细胞技术得以突破', desc: '获得16项新发明专利、11项软件和系统著作权证' },
  { year: '2022', title: '青浦区区政府签约', desc: '青浦区政府与五心集团签定重点产业项目' },
  { year: '2022', title: '国内科创板上市启动', desc: '上海股交中心科创板挂牌上市启动仪式' },
]

export default function AboutPage() {
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
            集团简介
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            style={{ color: 'var(--text-gray)', fontSize: '1.1rem', maxWidth: 600, margin: '0 auto' }}>
            GROUP INTRODUCTION
          </motion.p>
        </div>
      </section>

      {/* 简介内容 */}
      <section style={{ padding: '5rem 0', background: '#112F91' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <p style={{ color: 'var(--text-gray)', lineHeight: 2, fontSize: '0.95rem', marginBottom: '1.5rem' }}>
                五心集团是一家专注于细胞生物领域技术研发、应用及健康管理综合服务的高科技公司。是国内最早从事细胞生物研究投资并获得多项成果的科研型企业之一。多年来投资细胞再生医学基础研究，与国内外著名高校、科研机构深度合作，在生物科技领域取得了五十多项先进科研成果和核心竞争优势。
              </p>
              <p style={{ color: 'var(--text-gray)', lineHeight: 2, fontSize: '0.95rem', marginBottom: '2rem' }}>
                2022年五心集团作为上海市青浦区人民政府重点产业项目入驻长三角一体化示范区——朱家角工业园区，以申报细胞生物药品为发展方向，业务涵盖细胞再生医学、细胞储存、健康管理板块，为社会提供全生命周期的健康管理服务。
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {[
                  { icon: Building, label: '细胞再生医学' },
                  { icon: Globe, label: '细胞储存' },
                  { icon: TrendingUp, label: '健康管理' },
                ].map((item) => (
                  <div key={item.label} style={{
                    display: 'flex', alignItems: 'center', gap: '0.5rem',
                    padding: '0.5rem 1rem', borderRadius: 20,
                    background: 'rgba(35, 203, 200, 0.08)',
                    border: '1px solid rgba(35, 203, 200, 0.15)',
                  }}>
                    <item.icon size={16} color="var(--primary-teal)" />
                    <span style={{ color: '#fff', fontSize: '0.85rem' }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                padding: '2.5rem',
                background: 'linear-gradient(135deg, rgba(35, 203, 200, 0.1), rgba(55, 165, 219, 0.05))',
                borderRadius: 20, border: '1px solid rgba(35, 203, 200, 0.15)',
              }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                {[
                  { value: '50+', label: '专利证书' },
                  { value: '100%', label: '客户满意度' },
                  { value: '120+', label: '服务案例' },
                  { value: '15+', label: '驻全球办事处' },
                ].map((stat) => (
                  <div key={stat.label} style={{ textAlign: 'center', padding: '1.5rem' }}>
                    <div style={{
                      fontSize: '2.2rem', fontWeight: 900,
                      background: 'var(--gradient-primary)',
                      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                    }}>{stat.value}</div>
                    <div style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginTop: '0.3rem' }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 发展历程 */}
      <section style={{ padding: '5rem 0', background: 'linear-gradient(180deg, #112F91 0%, #0a1f6b 100%)' }}>
        <div className="container">
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', textAlign: 'center', marginBottom: '3rem' }}>
            发展历程
          </h2>
          <div style={{ position: 'relative', paddingLeft: '2rem' }}>
            <div style={{
              position: 'absolute', left: '0.5rem', top: 0, bottom: 0, width: 2,
              background: 'linear-gradient(180deg, var(--primary-teal), transparent)',
            }} />
            {milestones.map((m, i) => (
              <motion.div key={`${m.year}-${m.title}`}
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.08 * i }}
                style={{ position: 'relative', marginBottom: '2rem', paddingLeft: '1.5rem' }}>
                <div style={{
                  position: 'absolute', left: '-1.65rem', top: '0.3rem',
                  width: 12, height: 12, borderRadius: '50%',
                  background: 'var(--primary-teal)',
                  boxShadow: '0 0 10px rgba(35, 203, 200, 0.4)',
                }} />
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.8rem', marginBottom: '0.3rem' }}>
                  <span style={{ color: 'var(--primary-teal)', fontWeight: 700, fontSize: '1.1rem' }}>{m.year}</span>
                  <span style={{ color: '#fff', fontWeight: 600 }}>{m.title}</span>
                </div>
                <div style={{ color: 'var(--text-gray)', fontSize: '0.85rem', lineHeight: 1.6 }}>{m.desc}</div>
              </motion.div>
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
