import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Newspaper, TrendingUp, Calendar, ChevronRight } from 'lucide-react'

const companyNews = [
  {
    title: '青浦区朱家角镇人大代表一行走访五心集团',
    date: '2025-07-04',
    desc: '点击蓝字，关注我们今日，青浦区朱家角镇人大代表一行走访辖区重点企业上海五心集团。关注民生，了解企业经营，优化营商环境，推动经济发展。',
  },
  {
    title: '喜讯/五心集团获得干细胞临床应用团标标准化证书',
    date: '2025-06-27',
    desc: '近日，五心集团迎来又一重要里程碑：作为核心成员单位之一，五心集团与华南理工大学、大连干细胞与精准医学创新研究院、中山大学药学院、广东省南山医药创新研究院、吉林中科等单位共同参与起草并制定《间充质干细胞治疗膝骨关节和软骨缺损临床应用》、《呼吸疾病治疗中细胞微囊泡雾化吸入疗法应用技术要求》团体标准并成功获得《标准化证书》！',
  },
  {
    title: '江苏南通市海安开发区经发局领导一行莅临五心集团考察指导工作',
    date: '2025-06-25',
    desc: '2025年6月25日上午，江苏南通市海安开发区经发局副局长杨晓晨、招商局副局长李士信、招商专员张振兴等领导一行',
  },
  {
    title: '快讯：五心集团创始人参加第二届海南博鳌干细胞大会——开启细胞治疗新时代，引领医疗革命浪潮',
    date: '2025-03-24',
    desc: '2025年3月22日至3月23日，上海五心集团创始人谢月玉受邀参加第二届海南博鳌乐城干细胞大会。会议公布了多项重要政策与成果，尤其是中国干细胞治疗官方定价标准的首次披露，意义重大。',
  },
  {
    title: '一带一路（国际）研究院、福建海峡生物科学研究院与上海五心集团隆重举行合作签约仪式',
    date: '2025-03-08',
    desc: '2025年3月8日，一带一路（国际）研究院、福建海峡生物科学研究院与五心集团在上海隆重举行签约仪式。此次签约标志着三方在医疗科技领域的深度合作正式启动。',
  },
  {
    title: '喜讯 /三明市五心医院召开新春座谈会',
    date: '2025-02-20',
    desc: '2025年2月19日，新春伊始，三明市五心医院召开了新春座谈会，旨在促进医院各岗位人员的沟通与协作，增强团队凝聚力，明确医院发展方向。',
  },
  {
    title: '干细胞治疗口腔癌：突破与希望',
    date: '2025-02-16',
    desc: 'YAP就像细胞中的“开关”，控制细胞的生长和修复。当它正常工作时，可以帮助组织再生；但当它失控时，就会导致细胞过度增殖，甚至引发癌症。科学家们正在研究如何“关闭”这个失控的开关。',
  },
  {
    title: '沪明合作出成果/五心集团复旦国际细胞库落户三明',
    date: '2025-01-19',
    desc: '沪明合作出成果，五心集团复旦国际细胞库落地三明沙县。2025年1月18日上午，五心集团在三明沙县区举行隆重的【复旦国际细胞实验库】开业剪彩仪式。',
  },
]

const industryNews = [
  {
    title: '重要资讯 | 聚焦2024全国两会：加强细胞与基因治疗产业布局和政策支持，发展新质生产力！',
    date: '2024-08-08',
    desc: '干细胞是一类具有多向分化、自我更新以及分泌多种细胞因子参与损伤组织与器官修复的潜能的细胞，随着科研水平的不断提升，干细胞在我国被广泛应用于疾病的治疗研究中，取得了令人兴奋的成果。',
  },
  {
    title: '最新科学研究，同时可以杀死 预防脑癌的革命性疫苗',
    date: '2023-02-03',
    desc: '科学家们正在利用一种新方法将癌细胞转化为有效的抗癌药物。该团队在致命的脑癌胶质母细胞瘤的高级小鼠模型中测试了他们的双效抗癌疫苗，结果很有希望。',
  },
  {
    title: '新疗法：间充质干细胞可治疗新冠肺炎后遗症',
    date: '2023-02-01',
    desc: '干细胞疗法（UAECell19）能将住院时间从22天缩短到6天。进一步的分析显示，接受干细胞治疗的患者比接受标准治疗的患者在7天内恢复的可能性高3.1倍，接受干细胞治疗的患者中，有67%的患者将他们的恢复归功于新疗法。',
  },
  {
    title: 'CCTV10 央视：李先亮教授采访中谈到现在的生物医药已经进入免疫细胞时代',
    date: '2022-05-17',
    desc: '疫情暴发以来，有一个词被提起的频度是越来越高，那就是免疫力。我们似乎都有一个共识，免疫力好就更能够抵抗病毒的',
  },
  {
    title: '2022年两会，干细胞成医学发展重要方向',
    date: '2022-05-17',
    desc: '干细胞介绍-医学治疗方案中干细胞方法是最前沿、最热门的方向之一，取得了世人瞩目的成果。',
  },
]

export default function NewsPage() {
  const [tab, setTab] = useState<'company' | 'industry'>('company')
  const news = tab === 'company' ? companyNews : industryNews

  return (
    <div style={{ paddingTop: '5rem' }}>
      {/* Hero Banner */}
      <section style={{
        padding: '4rem 0',
        background: 'linear-gradient(180deg, #2D56A5 0%, #112F91 100%)',
        textAlign: 'center',
      }}>
        <div className="container">
          <Link to="/" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            color: 'var(--primary-teal)', fontSize: '0.9rem', marginBottom: '2rem',
            textDecoration: 'none',
          }}>
            <ArrowLeft size={16} /> 返回首页
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, color: '#fff', marginBottom: '1rem' }}
          >
            新闻热点
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ color: 'var(--text-gray)', fontSize: '1.1rem', maxWidth: 600, margin: '0 auto' }}
          >
            了解五心集团最新动态与行业资讯
          </motion.p>
        </div>
      </section>

      {/* Tab Switch */}
      <section style={{ padding: '3rem 0 5rem', background: '#112F91' }}>
        <div className="container">
          <div style={{
            display: 'flex', gap: '0.5rem', marginBottom: '2.5rem',
            background: 'rgba(35, 203, 200, 0.06)', borderRadius: 12, padding: '0.3rem',
            width: 'fit-content',
          }}>
            <button
              onClick={() => setTab('company')}
              style={{
                padding: '0.6rem 1.5rem', borderRadius: 10, border: 'none',
                background: tab === 'company' ? 'rgba(35, 203, 200, 0.15)' : 'transparent',
                color: tab === 'company' ? 'var(--primary-teal)' : 'var(--text-gray)',
                fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer',
                transition: 'all 0.3s',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Newspaper size={16} /> 公司新闻
              </span>
            </button>
            <button
              onClick={() => setTab('industry')}
              style={{
                padding: '0.6rem 1.5rem', borderRadius: 10, border: 'none',
                background: tab === 'industry' ? 'rgba(35, 203, 200, 0.15)' : 'transparent',
                color: tab === 'industry' ? 'var(--primary-teal)' : 'var(--text-gray)',
                fontWeight: 600, fontSize: '0.9rem', cursor: 'pointer',
                transition: 'all 0.3s',
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <TrendingUp size={16} /> 行业资讯
              </span>
            </button>
          </div>

          {/* News List */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {news.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 * i }}
                style={{
                  padding: '2rem',
                  background: 'var(--bg-card)',
                  borderRadius: 16,
                  border: '1px solid rgba(35, 203, 200, 0.08)',
                  cursor: 'pointer',
                  transition: 'border-color 0.3s, box-shadow 0.3s',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(35, 203, 200, 0.2)'
                  e.currentTarget.style.boxShadow = '0 4px 20px rgba(35, 203, 200, 0.08)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(35, 203, 200, 0.08)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', lineHeight: 1.5, flex: 1, marginRight: '1rem' }}>
                    {item.title}
                  </h3>
                  <div style={{
                    display: 'flex', alignItems: 'center', gap: '0.4rem',
                    color: 'var(--primary-teal)', fontSize: '0.8rem', flexShrink: 0,
                  }}>
                    <Calendar size={14} />
                    {item.date}
                  </div>
                </div>
                <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem', lineHeight: 1.8 }}>
                  {item.desc}
                </p>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: '0.3rem',
                  color: 'var(--primary-teal)', fontSize: '0.85rem', marginTop: '1rem',
                  fontWeight: 500,
                }}>
                  阅读更多 <ChevronRight size={14} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
