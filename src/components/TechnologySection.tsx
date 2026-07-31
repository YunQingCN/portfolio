import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Shield, Database, Cpu, FlaskConical } from 'lucide-react'

const technologies = [
  {
    icon: Shield,
    title: '集团简介',
    description: '五心集团致力于干细胞生物科技领域，120+合作企业&伙伴',
    color: '#2196F3',
  },
  {
    icon: Database,
    title: '人才队伍',
    description: '拥有国内干细胞领域核心科学家团队',
    color: '#64B5F6',
  },
  {
    icon: Cpu,
    title: '科学研究',
    description: '与各大医疗机构和高科技生物公司进行深度合作',
    color: '#1976D2',
  },
  {
    icon: FlaskConical,
    title: '五心公益',
    description: '敬老爱老，传递温暖，积极履行社会责任',
    color: '#42A5F5',
  },
]

export default function TechnologySection() {
  const { ref, inView } = useInView()

  return (
    <section id="technology" ref={ref} style={{
      padding: '6rem 0',
      background: 'linear-gradient(180deg, #0d1b2a 0%, #0e1f35 40%, #0d1b2a 100%)',
    }}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          集团介绍
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          GROUP INTRODUCTION
        </motion.p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '1.5rem',
        }}>
          {technologies.map((tech, i) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              style={{
                padding: '2rem 1.5rem',
                background: 'var(--bg-card)',
                borderRadius: 16,
                border: '1px solid rgba(33, 150, 243, 0.08)',
                textAlign: 'center',
                cursor: 'pointer',
                transition: 'border-color 0.3s, box-shadow 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${tech.color}40`
                e.currentTarget.style.boxShadow = `0 8px 30px ${tech.color}15`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(33, 150, 243, 0.08)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <div style={{
                width: 64,
                height: 64,
                borderRadius: 16,
                background: `${tech.color}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1.2rem',
              }}>
                <tech.icon size={28} color={tech.color} />
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.6rem', color: '#fff' }}>
                {tech.title}
              </h3>
              <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', lineHeight: 1.6 }}>
                {tech.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #technology .container > div[style*="grid"] {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 500px) {
          #technology .container > div[style*="grid"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}