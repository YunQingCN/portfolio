import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import { Newspaper, TrendingUp } from 'lucide-react'

const companyNews = [
  {
    title: '青浦区朱家角镇人大代表一行走访五心集团',
    date: '2025-07-04',
    desc: '今日，青浦区朱家角镇人大代表一行走访辖区重点企业上海五心集团。关注民生，了解企业经营，优化营商环境，推动经济发展。',
  },
  {
    title: '喜讯/五心集团获得干细胞临床应用团标标准化证书',
    date: '2025-06-27',
    desc: '五心集团与华南理工大学、大连干细胞与精准医学创新研究院等单位共同参与起草并制定团体标准并成功获得《标准化证书》！',
  },
  {
    title: '江苏南通市海安开发区经发局领导一行莅临五心集团考察指导工作',
    date: '2025-06-25',
    desc: '2025年6月25日上午，江苏南通市海安开发区经发局副局长杨晓晨等领导一行莅临五心集团考察指导。',
  },
  {
    title: '五心集团创始人参加第二届海南博鳌干细胞大会',
    date: '2025-03-24',
    desc: '上海五心集团创始人谢月玉受邀参加第二届海南博鳌乐城干细胞大会。会议公布了多项重要政策与成果，尤其是中国干细胞治疗官方定价标准的首次披露。',
  },
]

const industryNews = [
  {
    title: '2022年两会，干细胞成医学发展重要方向',
    date: '2022-03-15',
    desc: '干细胞技术成为医学发展的重要方向，国家政策支持力度不断加大，推动行业标准化建设。',
  },
  {
    title: '免疫细胞治疗进入临床应用新阶段',
    date: '2025-01-10',
    desc: '随着生物医药技术的快速发展，免疫细胞治疗在多种疾病领域展现出巨大潜力，进入临床应用新阶段。',
  },
  {
    title: '细胞储存技术迎来新突破',
    date: '2024-11-20',
    desc: '新型细胞冻存技术大幅提升细胞存活率，为细胞储存行业带来革命性变化。',
  },
  {
    title: '干细胞治疗膝骨关节炎临床应用标准发布',
    date: '2025-06-27',
    desc: '《间充质干细胞治疗膝骨关节和软骨缺损临床应用》团体标准正式发布，规范行业发展。',
  },
]

export default function NewsSection() {
  const { ref, inView } = useInView()
  const navigate = useNavigate()

  return (
    <section id="news" ref={ref} style={{
      padding: '6rem 0',
      background: 'linear-gradient(180deg, #1a3d8f 0%, #112F91 50%, #1a3d8f 100%)',
    }}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          新闻热点
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          NEWS & HOT TOPICS
        </motion.p>

        {/* Company News */}
        <div style={{ marginBottom: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
            <Newspaper size={22} color="var(--primary-teal)" />
            <h3 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 700 }}>公司新闻</h3>
            <div style={{ flex: 1, height: 1, background: 'rgba(35, 203, 200, 0.15)' }} />
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.5rem',
          }}>
            {companyNews.map((news, i) => (
              <motion.div
                key={news.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * i }}
                whileHover={{ y: -3 }}
                style={{
                  padding: '1.5rem',
                  background: 'var(--bg-card)',
                  borderRadius: 14,
                  border: '1px solid rgba(35, 203, 200, 0.08)',
                  cursor: 'pointer',
                  transition: 'border-color 0.3s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(35, 203, 200, 0.2)' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(35, 203, 200, 0.08)' }}
                onClick={() => navigate('/news')}
              >
                <h4 style={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.6rem', lineHeight: 1.5 }}>
                  {news.title}
                </h4>
                <p style={{ color: 'var(--text-gray)', fontSize: '0.8rem', lineHeight: 1.6, marginBottom: '0.8rem' }}>
                  {news.desc}
                </p>
                <div style={{ color: 'var(--primary-teal)', fontSize: '0.75rem' }}>
                  {news.date}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Industry News */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
            <TrendingUp size={22} color="var(--accent-cyan)" />
            <h3 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 700 }}>行业资讯</h3>
            <div style={{ flex: 1, height: 1, background: 'rgba(35, 203, 200, 0.15)' }} />
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.5rem',
          }}>
            {industryNews.map((news, i) => (
              <motion.div
                key={news.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * i + 0.2 }}
                whileHover={{ y: -3 }}
                style={{
                  padding: '1.5rem',
                  background: 'var(--bg-card)',
                  borderRadius: 14,
                  border: '1px solid rgba(35, 203, 200, 0.08)',
                  cursor: 'pointer',
                  transition: 'border-color 0.3s',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'rgba(55, 165, 219, 0.2)' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(35, 203, 200, 0.08)' }}
                onClick={() => navigate('/news')}
              >
                <h4 style={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem', marginBottom: '0.6rem', lineHeight: 1.5 }}>
                  {news.title}
                </h4>
                <p style={{ color: 'var(--text-gray)', fontSize: '0.8rem', lineHeight: 1.6, marginBottom: '0.8rem' }}>
                  {news.desc}
                </p>
                <div style={{ color: 'var(--accent-cyan)', fontSize: '0.75rem' }}>
                  {news.date}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #news .container > div[style*="grid"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
