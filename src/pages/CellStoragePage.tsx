import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Snowflake, CheckCircle } from 'lucide-react'

const storageTypes = [
  {
    title: '免疫细胞储存',
    desc: '免疫细胞是指参与免疫应答或与免疫应答相关的细胞。包括淋巴细胞、树突状细胞、单核/巨噬细胞、粒细胞、肥大细胞等。目前存储的免疫细胞绝大多数是指经外周血抽取后，进行分离，提取外周血中的白细胞、淋巴细胞等，存放于-196℃的液氮中保存，未来可进行细胞复苏，并应用于各种疾病治疗。',
  },
  {
    title: '脂肪干细胞',
    desc: '脂肪干细胞（adipose-derived stem cells，ADSCs）是近年来从脂肪组织中分离得到的一种具有多向分化潜能的干细胞，是间充质干细胞的一种。脂肪干细胞保存不受年龄影响，建议女性在青春期进行保存，因为越年轻细胞活性越好，年轻时保存，年老时用来治疗疾病或进行亚健康调理。',
  },
  {
    title: '胎盘间充质干细胞',
    desc: '胎盘干细胞是由新生儿娩出、胎盘剥离子宫、排除后采集的。采集时不接触产妇及新生儿，无痛苦、无伤害。由于胎盘的过滤作用，其干细胞较为纯净，不易污染，干细胞提取成功率高的优势，干细胞具有增值能力强，应用范围广等特点。相较于其他干细胞，胎盘间充质干细胞具有来源方便，细胞数量充足，易于分离、培养、扩增和纯化，传代扩增30多代后仍具有干细胞特性。胎盘中干细胞的数量巨大，种类丰富，功能强大。胎盘是目前证实干细胞的最佳来源。',
  },
  {
    title: '牙髓干细胞',
    desc: '牙髓组织位于牙齿内部的牙髓腔内，是牙体组织中唯一的软组织。针对于儿童乳牙及成年智齿推出牙髓干细胞存储项目。牙髓干细胞具有多向分化的潜能，它除了能形成矿化结节能力的细胞外，经过不同细胞因子的诱导，还能够分化为脂肪、骨、软骨、肌肉、血管内皮、肝、神经等细胞系类型。通俗一点来说，它可以再生骨骼、再生心脏、再生牙齿，也能再生眼组织以治愈失明，就连血管和脑细胞都可以再生，它甚至还被预测未来可以用于治疗成人白血病。另外，牙髓干细胞还有个让女士们喜爱的功能——促进皮肤再生，延缓衰老。牙髓干细胞的活性更强，应用治疗范围更广。而且，乳牙干细胞无需配型，宝宝的乳牙干细胞除了自己可以使用外，还可以给近亲安心使用。',
  },
]

const flowSteps = [
  { step: '01', title: '咨询预约', desc: '专业顾问一对一咨询，评估储存方案' },
  { step: '02', title: '协议缴费', desc: '签订储存协议，明确双方权益' },
  { step: '03', title: '预约体检', desc: '全面体检，确保符合储存标准' },
  { step: '04', title: '细胞采集', desc: '专业医疗团队进行细胞采集' },
  { step: '05', title: '细胞存储', desc: '深低温冻存，全程质量监控' },
]

export default function CellStoragePage() {
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
            细胞储存
          </motion.h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}
            style={{ color: 'var(--text-gray)', fontSize: '1rem', maxWidth: 700, margin: '0 auto', lineHeight: 1.8 }}>
            干细胞保存不受年龄影响，建议女性在青春期进行保存。越年轻细胞活性越好，年轻时保存，年老时用来治疗疾病或进行亚健康调理。
          </motion.p>
        </div>
      </section>

      {/* 储存类型 */}
      <section style={{ padding: '5rem 0', background: '#112F91' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '2.5rem' }}>
            <Snowflake size={24} color="#23CBC8" />
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff' }}>储存类型</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginBottom: '4rem' }}>
            {storageTypes.map((item, i) => (
              <motion.div key={item.title}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i }}
                style={{
                  padding: '2rem', background: 'var(--bg-card)', borderRadius: 16,
                  border: '1px solid rgba(35, 203, 200, 0.08)',
                }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 12,
                  background: 'rgba(35, 203, 200, 0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '1rem',
                }}>
                  <Snowflake size={22} color="#23CBC8" />
                </div>
                <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.8rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', lineHeight: 1.8 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* 服务流程 */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '2.5rem' }}>
            <Snowflake size={24} color="var(--primary-teal)" />
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff' }}>服务流程</h2>
          </div>
          <div style={{
            display: 'flex', alignItems: 'flex-start', gap: '0',
            padding: '2rem', background: 'var(--bg-card)', borderRadius: 16,
            border: '1px solid rgba(35, 203, 200, 0.08)',
            overflowX: 'auto', marginBottom: '4rem',
          }}>
            {flowSteps.map((item, i) => (
              <motion.div key={item.step}
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * i }}
                style={{
                  flex: 1, textAlign: 'center', padding: '0 1rem',
                  position: 'relative',
                  borderRight: i < flowSteps.length - 1 ? '1px solid rgba(35, 203, 200, 0.08)' : 'none',
                }}>
                <div style={{
                  width: 48, height: 48, borderRadius: '50%',
                  background: 'rgba(35, 203, 200, 0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 0.8rem',
                  color: 'var(--primary-teal)', fontWeight: 700, fontSize: '1rem',
                }}>{item.step}</div>
                <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.3rem' }}>{item.title}</div>
                <div style={{ color: 'var(--text-gray)', fontSize: '0.75rem' }}>{item.desc}</div>
              </motion.div>
            ))}
          </div>

          {/* 储存优势 */}
          <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.3rem', marginBottom: '1.5rem' }}>储存优势</h3>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
            {[
              '年轻时细胞活性更好，储存价值更高',
              '不受年龄限制，建议尽早规划',
              '可用于未来疾病治疗和亚健康调理',
              '专业深低温冻存技术，确保细胞活性',
              '全程可追溯的质量管理体系',
              '定期细胞活性检测，安全保障',
            ].map((benefit) => (
              <div key={benefit} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <CheckCircle size={18} color="var(--primary-teal)" style={{ flexShrink: 0 }} />
                <span style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>{benefit}</span>
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
