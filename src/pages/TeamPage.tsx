import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Users, BookOpen } from 'lucide-react'

const experts = [
  {
    name: '朱乃硕',
    title: '五心集团研究院执行院长',
    avatar: '朱',
    credentials: [
      '复旦大学教授、博士生导师',
      '国家863生物医药高技术项目终审评委',
      '上海市免疫学会常务理事',
      '复旦医学细胞康复联合研究中心常务主任',
      '主持国家"863"项目、"十三五"重大科技专项、国家自然科学基金项目等10项',
    ],
  },
  {
    name: '李先亮',
    title: '首席科学家',
    avatar: '李',
    credentials: [
      '免疫细胞领域核心专家',
      'CCTV10 央视采访嘉宾',
      '推动生物医药进入免疫细胞时代',
      '在免疫细胞治疗领域拥有丰富临床经验',
    ],
  },
]

export default function TeamPage() {
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
            人才队伍
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            style={{ color: 'var(--text-gray)', fontSize: '1.1rem', maxWidth: 600, margin: '0 auto' }}>
            TALENT TEAM
          </motion.p>
        </div>
      </section>

      {/* 团队介绍 */}
      <section style={{ padding: '5rem 0', background: '#112F91' }}>
        <div className="container">
          <p style={{ color: 'var(--text-gray)', fontSize: '1rem', lineHeight: 1.9, marginBottom: '3rem', maxWidth: 800 }}>
            拥有国内干细胞领域核心科学家团队，由多位在生物医药领域具有深厚学术背景和产业经验的专家领衔，推动干细胞技术从实验室走向临床应用。
          </p>

          {experts.map((expert, i) => (
            <motion.div key={expert.name}
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 * i }}
              style={{
                display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '2.5rem',
                padding: '2.5rem', marginBottom: i < experts.length - 1 ? '2rem' : 0,
                background: 'var(--bg-card)',
                borderRadius: 20,
                border: '1px solid rgba(35, 203, 200, 0.08)',
                alignItems: 'start',
              }}>
              {/* Avatar */}
              <div style={{
                width: 100, height: 100, borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(35, 203, 200, 0.2), rgba(55, 165, 219, 0.1))',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '2.5rem', fontWeight: 900, color: 'var(--primary-teal)',
                border: '2px solid rgba(35, 203, 200, 0.2)',
                flexShrink: 0,
              }}>
                {expert.avatar}
              </div>
              {/* Info */}
              <div>
                <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.3rem', marginBottom: '0.3rem' }}>
                  {expert.name}
                </h3>
                <div style={{ color: 'var(--primary-teal)', fontSize: '0.9rem', fontWeight: 500, marginBottom: '1.2rem' }}>
                  {expert.title}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                  <BookOpen size={16} color="var(--primary-teal)" />
                  <span style={{ color: 'var(--text-gray)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: 1 }}>
                    专家履历 RESUME
                  </span>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {expert.credentials.map((c) => (
                    <li key={c} style={{
                      color: 'var(--text-gray)', fontSize: '0.85rem', lineHeight: 1.8,
                      paddingLeft: '1rem', position: 'relative',
                    }}>
                      <span style={{ position: 'absolute', left: 0, color: 'var(--primary-teal)' }}>●</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 团队优势 */}
      <section style={{ padding: '5rem 0', background: 'linear-gradient(180deg, #112F91 0%, #0a1f6b 100%)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '2rem' }}>
            <Users size={24} color="var(--primary-teal)" />
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff' }}>团队优势</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {[
              { title: '学术背景深厚', desc: '核心团队成员均来自国内顶尖高校和科研机构，具有深厚的学术积累' },
              { title: '产学研结合', desc: '团队兼具科研能力和产业经验，推动技术从实验室走向临床应用' },
              { title: '持续创新', desc: '团队持续投入前沿研究，已取得50多项科研成果和核心竞争优势' },
            ].map((item, i) => (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i }}
                style={{
                  padding: '2rem', background: 'var(--bg-card)', borderRadius: 16,
                  border: '1px solid rgba(35, 203, 200, 0.08)',
                }}>
                <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.8rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', lineHeight: 1.7 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section > .container > div[style*="grid"] { grid-template-columns: 1fr !important; }
          section > .container > div[style*="grid-template-columns: auto"] { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
