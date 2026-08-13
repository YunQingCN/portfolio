import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Dna, FlaskConical } from 'lucide-react'

const therapies = [
  {
    name: 'Immunotherapy',
    cn: '免疫疗法',
    desc: '是通过调控细胞因子，修复受损的组织细胞，然后通过细胞间的相互作用，产生细胞因子，抑制受损细胞增殖的免疫反应。从而发挥免疫重建的功能，从根本上消除疾病的发病基础。',
  },
  {
    name: 'Differentiation therapy',
    cn: '分化疗法',
    desc: '是通过干细胞自身的分化功能来生长出新的组织细胞，弥补组织细胞的衰老、死亡、损伤，使得病变的组织与细胞恢复健康。',
  },
  {
    name: 'Side secretion therapy',
    cn: '旁分泌疗法',
    desc: '干细胞注入人体内，通过分泌出各种蛋白质、酶和因子来促进现有的组织分化成组织细胞，修复受损组织与生长新的组织。',
  },
  {
    name: 'Promotion therapy',
    cn: '促进疗法',
    desc: '干细胞注入人体内，通过细胞与细胞之间的直接作用，促进其他细胞的分化与修复，使得损伤组织得到恢复。',
  },
]

const sources = [
  { name: 'Umbilical cord', cn: '脐带', desc: '脐带内含丰富的原始间充质干细胞，具有三胚层干细胞分化潜能。可移植治疗神经系统、免疫系统、消化系统、运动系统等100多种疾病。' },
  { name: 'Fat', cn: '脂肪', desc: '脂肪组织中含有最丰富的原始间充质干细胞，浓度甚至高达骨髓的2000倍。每个人都可以轻易地从身体上获取到足量的脂肪组织，并从中提取培养出足够的原始间充质干细胞，用以治疗各种疾病、保健养生与美体塑形，且功效显著。' },
  { name: 'Amnion', cn: '羊膜', desc: '靠近脐带一侧的胎盘羊膜，含有丰富的原始间充质干细胞，是防止母子基因排斥反应的保护神，具有三胚层的干细胞分化潜能，与胎盘原始间充质干细胞类似。羊膜干细胞是人体已知的最年轻又最长寿的干细胞之一，羊膜干细胞在直系亲属间几乎没有异体移植排异反应，可在必要时用于父亲、祖父母、外祖父母的健康保障。' },
  { name: 'Cord blood', cn: '脐带血', desc: '脐带血内含有一定数量的造血干细胞。造血干细胞系单能干细胞，可用于如白血病、地中海贫血、再生障碍性贫血等血液病的移植治疗。储存新生儿脐带血，基因与新生儿一致，主要用于保障新生儿自体的未来健康。' },
  { name: 'Placenta', cn: '胎盘', desc: '胎盘内含丰富的原始间充质干细胞，具有三胚层的干细胞分化潜能，与脐带原始间充质干细胞类似。胎盘基因与新生儿母体一致，主要用于保障新生儿母体自体的未来健康。' },
]

export default function CellServicePage() {
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
            细胞技术服务
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            style={{ color: 'var(--text-gray)', fontSize: '1rem', maxWidth: 700, margin: '0 auto', lineHeight: 1.8 }}>
            了解细胞强大的再生修复能力
          </motion.p>
        </div>
      </section>

      {/* 简介 */}
      <section style={{ padding: '5rem 0', background: '#112F91' }}>
        <div className="container">
          <p style={{ color: 'var(--text-gray)', fontSize: '0.95rem', lineHeight: 2, maxWidth: 800, marginBottom: '3rem' }}>
            细胞修复是再生力强的细胞，表皮细胞（如呼吸道、消化管和泌尿生殖器的粘膜被覆上皮）、淋巴细胞、造血细胞等，这些种类的细胞每时每刻都在进行衰老与新生，具有应对损伤的强大再生修复能力。
          </p>

          {/* 治疗方法 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '2rem' }}>
            <Dna size={24} color="var(--primary-teal)" />
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff' }}>主要治疗方法</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginBottom: '4rem' }}>
            {therapies.map((t, i) => (
              <motion.div key={t.cn}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i }}
                style={{
                  padding: '2rem', background: 'var(--bg-card)', borderRadius: 16,
                  border: '1px solid rgba(35, 203, 200, 0.08)',
                }}>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem',
                }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 12,
                    background: 'rgba(35, 203, 200, 0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <FlaskConical size={20} color="var(--primary-teal)" />
                  </div>
                  <div>
                    <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1rem' }}>{t.cn}</h3>
                    <div style={{ color: 'var(--primary-teal)', fontSize: '0.75rem' }}>{t.name}</div>
                  </div>
                </div>
                <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', lineHeight: 1.8 }}>{t.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* 干细胞源头 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '2rem' }}>
            <Dna size={24} color="#23CBC8" />
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff' }}>神奇的干细胞源头</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {sources.map((s, i) => (
              <motion.div key={s.cn}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 * i }}
                style={{
                  padding: '1.5rem', background: 'var(--bg-card)', borderRadius: 14,
                  border: '1px solid rgba(35, 203, 200, 0.08)',
                }}>
                <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '1rem', marginBottom: '0.2rem' }}>{s.cn}</h4>
                <div style={{ color: 'var(--primary-teal)', fontSize: '0.75rem', marginBottom: '0.8rem' }}>{s.name}</div>
                <p style={{ color: 'var(--text-gray)', fontSize: '0.8rem', lineHeight: 1.7 }}>{s.desc}</p>
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
