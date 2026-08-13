import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from '../hooks/useInView'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

export default function ContactSection() {
  const { ref, inView } = useInView()
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
    setForm({ name: '', phone: '', email: '', message: '' })
  }

  return (
    <section id="contact" ref={ref} style={{
      padding: '6rem 0',
      background: 'linear-gradient(180deg, #0a1f6b 0%, #112F91 50%, #0a1f6b 100%)',
    }}>
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          联系我们
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          CONTACT US
        </motion.p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.5rem', color: '#fff' }}>
              联系方式
            </h3>
            {[
              { icon: Phone, label: '服务热线', value: '021-60835322' },
              { icon: Mail, label: '电子邮箱', value: 'wxdc2022@outlook.com' },
              { icon: MapPin, label: '公司地址', value: '上海市青浦区朱家角康业路388弄18号华科慧谷产业园七楼' },
              { icon: Clock, label: '工作时间', value: '周一至周五 9:00 - 18:00' },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  marginBottom: '1.5rem',
                  padding: '1rem',
                  background: 'var(--bg-card)',
                  borderRadius: 12,
                  border: '1px solid rgba(35, 203, 200, 0.08)',
                }}
              >
                <div style={{
                  width: 44, height: 44, borderRadius: 12,
                  background: 'rgba(35, 203, 200, 0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <item.icon size={20} color="var(--primary-teal)" />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-gray)', marginBottom: '0.2rem' }}>{item.label}</div>
                  <div style={{ color: '#fff', fontWeight: 500 }}>{item.value}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginBottom: '1.5rem', color: '#fff' }}>
              在线留言
            </h3>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <input
                type="text"
                placeholder="您的姓名"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                required
                style={{
                  padding: '0.9rem 1.2rem',
                  background: 'var(--bg-card)',
                  border: '1px solid rgba(35, 203, 200, 0.15)',
                  borderRadius: 10,
                  color: '#fff',
                  fontSize: '0.95rem',
                }}
              />
              <input
                type="tel"
                placeholder="手机号码"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                required
                style={{
                  padding: '0.9rem 1.2rem',
                  background: 'var(--bg-card)',
                  border: '1px solid rgba(35, 203, 200, 0.15)',
                  borderRadius: 10,
                  color: '#fff',
                  fontSize: '0.95rem',
                }}
              />
              <input
                type="email"
                placeholder="电子邮箱"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                style={{
                  padding: '0.9rem 1.2rem',
                  background: 'var(--bg-card)',
                  border: '1px solid rgba(35, 203, 200, 0.15)',
                  borderRadius: 10,
                  color: '#fff',
                  fontSize: '0.95rem',
                }}
              />
              <textarea
                placeholder="留言内容"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={4}
                style={{
                  padding: '0.9rem 1.2rem',
                  background: 'var(--bg-card)',
                  border: '1px solid rgba(35, 203, 200, 0.15)',
                  borderRadius: 10,
                  color: '#fff',
                  fontSize: '0.95rem',
                  resize: 'vertical',
                }}
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: '0.9rem',
                  background: 'var(--gradient-primary)',
                  color: '#fff',
                  borderRadius: 10,
                  fontWeight: 600,
                  fontSize: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                }}
              >
                <Send size={18} />
                {submitted ? '提交成功！' : '发送留言'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact .container > div[style*="grid"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}