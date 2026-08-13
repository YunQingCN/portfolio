import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Microscope, Award, Handshake } from 'lucide-react'

const patents = [
  '干细胞储存架智能规划软件',
  '干细胞冻存降温装置嵌入式控制系统',
  '基因检测仪检测数据实时传输管控系统',
  '胎盘组织干细胞过滤装置性能自动完善软件',
  '一种干细胞冻存过程中使用的降温装置',
  '一种胎盘组织干细胞过滤装置',
  '一种非接触式电磁超声检测仪',
  '一种聚焦超声治疗设备的六轴位移组件',
]

const partners = [
  '华南理工大学',
  '大连干细胞与精准医学创新研究院',
  '中山大学药学院',
  '广东省南山医药创新研究院',
  '吉林中科',
  '同济大学附属养志康复医院',
  '国药集团',
  '复旦软件园',
  '上海张江生物银行',
]

const stats = [
  { value: '50+', label: '专利证书' },
  { value: '100%', label: '客户满意度' },
  { value: '120+', label: '服务案例' },
  { value: '15+', label: '驻全球办事处' },
]

export default function ResearchPage() {
  const [tab, setTab] = useState<'patent' | 'partner'>('patent')

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
            科学研究
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            style={{ color: 'var(--text-gray)', fontSize: '1.1rem', maxWidth: 600, margin: '0 auto' }}>
            SCIENTIFIC RESEARCH
          </motion.p>
        </div>
      </section>

      {/* 数据统计 */}
      <section style={{ padding: '3rem 0', background: '#112F91' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
            {stats.map((stat, i) => (
              <motion.div key={stat.label}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i }}
                style={{
                  textAlign: 'center', padding: '2rem 1rem',
                  background: 'var(--bg-card)', borderRadius: 16,
                  border: '1px solid rgba(35, 203, 200, 0.08)',
                }}>
                <div style={{
                  fontSize: '2.5rem', fontWeight: 900,
                  background: 'var(--gradient-primary)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text', marginBottom: '0.3rem',
                }}>{stat.value}</div>
                <div style={{ color: 'var(--text-gray)', fontSize: '0.9rem' }}>{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 我们的优势 */}
      <section style={{ padding: '5rem 0', background: 'linear-gradient(180deg, #112F91 0%, #1a3d8f 50%, #112F91 100%)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <div style={{ color: 'var(--primary-teal)', fontSize: '0.85rem', letterSpacing: 3, marginBottom: '0.5rem' }}>
              OUR ADVANTAGE
            </div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff' }}>我们的优势</h2>
          </div>

          {/* Tab Switch */}
          <div style={{
            display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '2.5rem',
            background: 'rgba(35, 203, 200, 0.06)', borderRadius: 12, padding: '0.3rem',
            width: 'fit-content', margin: '0 auto 2.5rem',
          }}>
            <button onClick={() => setTab('patent')}
              style={{
                padding: '0.6rem 1.5rem', borderRadius: 10, border: 'none',
                background: tab === 'patent' ? 'rgba(35, 203, 200, 0.15)' : 'transparent',
                color: tab === 'patent' ? 'var(--primary-teal)' : 'var(--text-gray)',
                fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', transition: 'all 0.3s',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
              }}>
              <Award size={16} /> 专利
            </button>
            <button onClick={() => setTab('partner')}
              style={{
                padding: '0.6rem 1.5rem', borderRadius: 10, border: 'none',
                background: tab === 'partner' ? 'rgba(35, 203, 200, 0.15)' : 'transparent',
                color: tab === 'partner' ? 'var(--primary-teal)' : 'var(--text-gray)',
                fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer', transition: 'all 0.3s',
                display: 'flex', alignItems: 'center', gap: '0.5rem',
              }}>
              <Handshake size={16} /> 合作伙伴
            </button>
          </div>

          {/* Patent List */}
          {tab === 'patent' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              style={{
                display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem',
              }}>
              {patents.map((patent, i) => (
                <motion.div key={patent}
                  initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 * i }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: '1rem',
                    padding: '1.2rem 1.5rem',
                    background: 'var(--bg-card)', borderRadius: 12,
                    border: '1px solid rgba(35, 203, 200, 0.08)',
                  }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: '50%',
                    background: 'rgba(35, 203, 200, 0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <Award size={16} color="var(--primary-teal)" />
                  </div>
                  <span style={{ color: 'var(--text-light)', fontSize: '0.85rem' }}>{patent}</span>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Partners List */}
          {tab === 'partner' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
              {partners.map((partner, i) => (
                <motion.div key={partner}
                  initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.05 * i }}
                  style={{
                    padding: '1rem 2rem',
                    background: 'var(--bg-card)', borderRadius: 12,
                    border: '1px solid rgba(35, 203, 200, 0.08)',
                    color: 'var(--text-light)', fontSize: '0.9rem',
                  }}>
                  {partner}
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* 科研实力 */}
      <section style={{ padding: '5rem 0', background: '#112F91' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '2rem' }}>
            <Microscope size={24} color="var(--primary-teal)" />
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff' }}>科研实力</h2>
          </div>
          <p style={{ color: 'var(--text-gray)', fontSize: '0.95rem', lineHeight: 1.9, marginBottom: '2rem', maxWidth: 800 }}>
            与各大医疗机构和高科技生物公司进行深度合作，推动干细胞技术从基础研究到临床转化的全链条发展。参与制定多项行业团体标准，引领行业规范化发展。
          </p>
          <div style={{
            padding: '2rem',
            background: 'linear-gradient(135deg, rgba(35, 203, 200, 0.08), rgba(55, 165, 219, 0.04))',
            borderRadius: 16, border: '1px solid rgba(35, 203, 200, 0.12)',
          }}>
            <h4 style={{ color: '#fff', fontWeight: 600, marginBottom: '1rem' }}>核心科研成果</h4>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
              {[
                { value: '16项', label: '新发明专利' },
                { value: '11项', label: '软件和系统著作权' },
                { value: '50+项', label: '科研成果' },
              ].map((item) => (
                <div key={item.label} style={{
                  textAlign: 'center', padding: '1.5rem',
                  background: 'rgba(35, 203, 200, 0.06)', borderRadius: 10,
                }}>
                  <div style={{
                    fontSize: '1.8rem', fontWeight: 900, color: 'var(--primary-teal)', marginBottom: '0.3rem',
                  }}>{item.value}</div>
                  <div style={{ color: 'var(--text-gray)', fontSize: '0.85rem' }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          section > .container > div[style*="repeat(4"] { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 768px) {
          section > .container > div[style*="repeat(2"] { grid-template-columns: 1fr !important; }
          section > .container > div[style*="repeat(3"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
