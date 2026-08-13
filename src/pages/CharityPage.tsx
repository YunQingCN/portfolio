import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft, Heart, Users, HandHeart, Sparkles, Stethoscope, Calendar } from 'lucide-react'

const values = [
  { icon: Heart, title: '爱心', desc: '以爱心对待每一位客户，用心倾听需求，用爱提供服务，让每一位客户感受到家一般的温暖。' },
  { icon: Users, title: '关心', desc: '关心员工成长与发展，建立完善的人才培养体系，为每位员工提供广阔的发展空间和成长平台。' },
  { icon: HandHeart, title: '热心', desc: '热心公益，回馈社会，积极参与各类社会公益活动，用实际行动传递温暖与关爱。' },
  { icon: Sparkles, title: '信心', desc: '以信心推动科技创新，坚信科技的力量能够改变世界，在干细胞领域不断探索前行。' },
  { icon: Stethoscope, title: '耐心', desc: '耐心服务，精益求精，对待每一个项目、每一位客户都保持高度的专注和耐心。' },
]

const charityNews = [
  {
    title: '上海五心公益基金会——"扬急救之帆，为生命护航"急救知识技能培训',
    desc: '关爱生命——上海五心公益基金会举办急救技能培训。活动邀请了专业急救导师，为参与者系统讲解了心肺复苏（CPR）、自动体外除颤器（AED）使用、创伤急救等核心急救技能。通过理论讲解与实操演练相结合的方式，让参与者真正掌握了实用的急救知识。',
    date: '2025',
  },
  {
    title: '聋人康复之路：挑战、希望、科普与爱心',
    desc: '上海五心公益基金会和同济大学附属养志康复医院心手相连开展聋人语言康复项目。项目通过专业的听觉言语康复训练，帮助听障人士改善语言能力，重新融入社会。基金会为项目提供了资金支持和专业指导，让更多听障人士受益。',
    date: '2025',
  },
  {
    title: '声动未来工程：为聋人言语康复点亮希望之光',
    desc: '上海五心公益基金会正在努力为聋人点亮一束希望之光，通过言语康复活动，向社会传递关怀和支持。"声动未来工程"是一项系统性的公益项目，旨在为听障人群提供从评估到训练的全流程康复服务。',
    date: '2025',
  },
  {
    title: '上海五心公益基金会祝大家中秋国庆双节快乐！',
    desc: '中秋国庆，举国欢庆的时刻，上海五心公益基金会怀着深深的感激之情，为大家带来特别的祝福。感谢所有合作伙伴和爱心人士一直以来的支持与信任，让我们携手同行，在公益路上继续前行。',
    date: '2024',
  },
]

export default function CharityPage() {
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
            五心公益
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ color: 'var(--text-gray)', fontSize: '1.1rem', maxWidth: 600, margin: '0 auto' }}
          >
            敬老爱老，传递温暖，积极履行社会责任
          </motion.p>
        </div>
      </section>

      {/* 五心承诺 */}
      <section style={{ padding: '5rem 0', background: '#112F91' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{
              padding: '3rem 2rem',
              background: 'linear-gradient(135deg, rgba(35, 203, 200, 0.12), rgba(55, 165, 219, 0.06))',
              borderRadius: 20,
              border: '1px solid rgba(35, 203, 200, 0.2)',
              textAlign: 'center',
              marginBottom: '3rem',
            }}
          >
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🌸</div>
            <h2 style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', fontWeight: 900,
              background: 'var(--gradient-primary)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginBottom: '1rem',
            }}>
              五心承诺 —— 为您的健康保驾护航
            </h2>
            <p style={{ color: 'var(--text-gray)', fontSize: '1rem', maxWidth: 600, margin: '0 auto', lineHeight: 1.8 }}>
              上海五心公益基金会积极履行社会责任，关爱社会弱势群体，推动健康公益事业发展。我们相信，每一份爱心都能汇聚成改变世界的力量。
            </p>
          </motion.div>

          {/* 五心价值观 */}
          <h2 style={{ textAlign: 'center', color: '#fff', fontSize: '1.8rem', fontWeight: 800, marginBottom: '2.5rem' }}>
            五心价值观
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.2rem', marginBottom: '4rem' }}>
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                style={{
                  textAlign: 'center',
                  padding: '2rem 1rem',
                  background: 'var(--bg-card)',
                  borderRadius: 16,
                  border: '1px solid rgba(35, 203, 200, 0.08)',
                }}
              >
                <div style={{
                  width: 56, height: 56, borderRadius: '50%',
                  background: 'rgba(35, 203, 200, 0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 1rem',
                }}>
                  <item.icon size={24} color="var(--primary-teal)" />
                </div>
                <h4 style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                  {item.title}
                </h4>
                <p style={{ color: 'var(--text-gray)', fontSize: '0.8rem', lineHeight: 1.7 }}>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 公益动态 */}
      <section style={{ padding: '5rem 0', background: 'linear-gradient(180deg, #112F91 0%, #0a1f6b 100%)' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', color: '#fff', fontSize: '1.8rem', fontWeight: 800, marginBottom: '2.5rem' }}>
            公益动态
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {charityNews.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                style={{
                  padding: '2rem',
                  background: 'var(--bg-card)',
                  borderRadius: 16,
                  border: '1px solid rgba(35, 203, 200, 0.08)',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '1.05rem', lineHeight: 1.5, flex: 1, marginRight: '1rem' }}>
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
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          section > .container > div[style*="repeat(5"] {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 600px) {
          section > .container > div[style*="repeat(5"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </div>
  )
}
