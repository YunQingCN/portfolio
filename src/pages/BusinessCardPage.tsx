import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { QRCodeSVG } from 'qrcode.react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Download, User, Phone, Mail, Building, Briefcase, Camera, X, Sparkles } from 'lucide-react'

export default function BusinessCardPage() {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    department: '',
    phone: '',
    email: '',
    bio: '',
    company: '上海五心集团',
    address: '上海市青浦区朱家角康业路388弄18号华科慧谷产业园七楼',
    website: 'https://www.wuxindao.com',
  })
  const [showForm, setShowForm] = useState(false)
  const [generated, setGenerated] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const vCardData = `BEGIN:VCARD
VERSION:3.0
FN:${formData.name}
ORG:${formData.company}
TITLE:${formData.title}
TEL:${formData.phone}
EMAIL:${formData.email}
ADR:${formData.address}
URL:${formData.website}
END:VCARD`

  const handleDownload = () => {
    const svg = cardRef.current?.querySelector('svg')
    if (svg) {
      const svgData = new XMLSerializer().serializeToString(svg)
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      const img = new Image()
      img.onload = () => {
        canvas.width = img.width * 2
        canvas.height = img.height * 2
        ctx?.scale(2, 2)
        if (ctx) {
          ctx.fillStyle = '#ffffff'
          ctx.fillRect(0, 0, canvas.width, canvas.height)
          ctx.drawImage(img, 0, 0)
        }
        const link = document.createElement('a')
        link.download = `${formData.name || '员工'}_名片二维码.png`
        link.href = canvas.toDataURL('image/png')
        link.click()
      }
      img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)))
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '0.8rem 1rem',
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(33, 150, 243, 0.2)',
    borderRadius: 10,
    color: '#fff',
    fontSize: '0.9rem',
    transition: 'border-color 0.3s',
  }

  return (
    <div style={{ minHeight: '100vh', paddingTop: 100, paddingBottom: '4rem' }}>
      <div className="container">
        {/* Back button */}
        <Link to="/" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'var(--primary-teal)',
          fontSize: '0.9rem',
          marginBottom: '2rem',
        }}>
          <ArrowLeft size={16} />
          返回首页
        </Link>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="section-title"
          style={{ marginBottom: '0.5rem' }}
        >
          员工名片
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="section-subtitle"
        >
          EMPLOYEE BUSINESS CARD
        </motion.p>

        {/* Employee Card Display */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            maxWidth: 700,
            margin: '0 auto',
          }}
        >
          <div ref={cardRef} style={{
            background: 'linear-gradient(135deg, #0d2137, #1a3a5c)',
            borderRadius: 20,
            padding: '2.5rem',
            border: '1px solid rgba(33, 150, 243, 0.2)',
            position: 'relative',
            overflow: 'hidden',
            marginBottom: '2rem',
          }}>
            {/* Decorative elements */}
            <div style={{
              position: 'absolute',
              top: -40,
              right: -40,
              width: 160,
              height: 160,
              borderRadius: '50%',
              background: 'rgba(33, 150, 243, 0.08)',
            }} />
            <div style={{
              position: 'absolute',
              bottom: -30,
              left: -30,
              width: 100,
              height: 100,
              borderRadius: '50%',
              background: 'rgba(100, 181, 246, 0.06)',
            }} />

            <div style={{ position: 'relative', zIndex: 1 }}>
              {/* Header with logo */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '2rem' }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.95)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                  overflow: 'hidden',
                }}>
                  <img src="/logo.png" alt="五心集团" style={{ width: 34, height: 34, objectFit: 'contain' }} />
                </div>
                <span style={{ color: 'var(--primary-teal)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: 2 }}>WUXINDAO GROUP</span>
              </div>

              {/* Employee Info */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem' }}>
                <div style={{ flex: 1, minWidth: 250 }}>
                  {/* Photo placeholder */}
                  <div style={{
                    width: 80,
                    height: 80,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, rgba(33, 150, 243, 0.3), rgba(100, 181, 246, 0.2))',
                    border: '2px solid rgba(33, 150, 243, 0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1.2rem',
                    fontSize: '2rem',
                  }}>
                    {formData.name ? formData.name.charAt(0) : '👤'}
                  </div>

                  <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#fff', marginBottom: '0.3rem' }}>
                    {formData.name || '员工姓名'}
                  </div>
                  <div style={{ color: 'var(--primary-teal)', fontSize: '1rem', marginBottom: '0.1rem', fontWeight: 500 }}>
                    {formData.title || '职位'} {formData.department && `· ${formData.department}`}
                  </div>
                  <div style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '1rem' }}>
                    {formData.company}
                  </div>

                  {/* Bio */}
                  {formData.bio && (
                    <div style={{
                      padding: '1rem',
                      background: 'rgba(255,255,255,0.04)',
                      borderRadius: 12,
                      border: '1px solid rgba(33, 150, 243, 0.1)',
                      marginBottom: '1rem',
                    }}>
                      <p style={{ color: 'var(--text-light)', fontSize: '0.85rem', lineHeight: 1.7, margin: 0 }}>
                        {formData.bio}
                      </p>
                    </div>
                  )}

                  {/* Contact info */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {formData.phone && (
                      <div style={{ color: 'var(--text-light)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <Phone size={14} color="var(--primary-teal)" /> {formData.phone}
                      </div>
                    )}
                    {formData.email && (
                      <div style={{ color: 'var(--text-light)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <Mail size={14} color="var(--primary-teal)" /> {formData.email}
                      </div>
                    )}
                    <div style={{ color: 'var(--text-light)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Building size={14} color="var(--primary-teal)" /> {formData.address}
                    </div>
                    <div style={{ color: 'var(--text-light)', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <Sparkles size={14} color="var(--primary-teal)" /> {formData.website}
                    </div>
                  </div>
                </div>

                {/* QR Code */}
                <div style={{
                  background: '#fff',
                  padding: 12,
                  borderRadius: 12,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                }}>
                  <QRCodeSVG
                    value={vCardData}
                    size={120}
                    level="H"
                    bgColor="#ffffff"
                    fgColor="#000000"
                    imageSettings={{
                      src: '/logo.png',
                      height: 24,
                      width: 24,
                      excavate: true,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Large QR Code display */}
          <AnimatePresence>
            {generated && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                style={{
                  textAlign: 'center',
                  padding: '2rem',
                  background: 'var(--bg-card)',
                  borderRadius: 20,
                  border: '1px solid rgba(33, 150, 243, 0.1)',
                  marginBottom: '2rem',
                }}
              >
                <div style={{
                  display: 'inline-block',
                  background: '#fff',
                  padding: 20,
                  borderRadius: 16,
                  marginBottom: '1rem',
                  boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                }}>
                  <QRCodeSVG
                    value={vCardData}
                    size={200}
                    level="H"
                    bgColor="#ffffff"
                    fgColor="#000000"
                    imageSettings={{
                      src: '/logo.png',
                      height: 40,
                      width: 40,
                      excavate: true,
                    }}
                  />
                </div>
                <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>
                  扫描二维码保存联系人信息到手机
                </p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleDownload}
                  style={{
                    padding: '0.8rem 2rem',
                    background: 'var(--gradient-primary)',
                    color: '#fff',
                    borderRadius: 30,
                    fontWeight: 600,
                    fontSize: '0.95rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <Download size={18} />
                  下载名片二维码
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Generate Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{ textAlign: 'center', marginTop: '1rem' }}
        >
          <motion.button
            whileHover={{ scale: 1.03, boxShadow: '0 8px 30px rgba(33, 150, 243, 0.3)' }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setShowForm(true)}
            style={{
              padding: '1rem 3rem',
              background: 'var(--gradient-primary)',
              color: '#fff',
              borderRadius: 30,
              fontWeight: 700,
              fontSize: '1.1rem',
              border: 'none',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              boxShadow: '0 4px 20px rgba(33, 150, 243, 0.2)',
            }}
          >
            <Sparkles size={20} />
            简介生成
          </motion.button>
        </motion.div>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5rem',
            marginTop: '4rem',
            maxWidth: 700,
            margin: '4rem auto 0',
          }}
        >
          {[
            { icon: '⚡', title: '快速生成', desc: '填写信息即刻生成专属名片' },
            { icon: '', title: '一键保存', desc: '扫码即可将联系人保存到手机' },
            { icon: '🎨', title: '专业设计', desc: '统一的企业品牌形象模板' },
          ].map((item) => (
            <div key={item.title} style={{
              padding: '1.5rem',
              background: 'var(--bg-card)',
              borderRadius: 16,
              border: '1px solid rgba(33, 150, 243, 0.08)',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{item.icon}</div>
              <h4 style={{ color: '#fff', fontWeight: 600, marginBottom: '0.3rem' }}>{item.title}</h4>
              <p style={{ color: 'var(--text-gray)', fontSize: '0.8rem' }}>{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Form Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowForm(false)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 2000,
              background: 'rgba(0,0,0,0.6)',
              backdropFilter: 'blur(8px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem',
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: 'linear-gradient(135deg, #0d1b2a, #1a2a4a)',
                borderRadius: 24,
                padding: '2rem',
                width: '100%',
                maxWidth: 500,
                maxHeight: '90vh',
                overflow: 'auto',
                border: '1px solid rgba(33, 150, 243, 0.15)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
              }}
            >
              {/* Modal header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h3 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: 700 }}>
                  填写员工信息
                </h3>
                <button
                  onClick={() => setShowForm(false)}
                  style={{
                    background: 'rgba(255,255,255,0.1)',
                    border: 'none',
                    borderRadius: '50%',
                    width: 36,
                    height: 36,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    cursor: 'pointer',
                  }}
                >
                  <X size={18} />
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-gray)', fontSize: '0.8rem', marginBottom: '0.3rem' }}>
                    <User size={14} /> 姓名 *
                  </label>
                  <input
                    style={inputStyle}
                    placeholder="请输入员工姓名"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--primary-teal)' }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(33, 150, 243, 0.2)' }}
                  />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-gray)', fontSize: '0.8rem', marginBottom: '0.3rem' }}>
                      <Briefcase size={14} /> 职位
                    </label>
                    <input
                      style={inputStyle}
                      placeholder="如：技术总监"
                      value={formData.title}
                      onChange={(e) => handleChange('title', e.target.value)}
                      onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--primary-teal)' }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(33, 150, 243, 0.2)' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-gray)', fontSize: '0.8rem', marginBottom: '0.3rem' }}>
                      <Building size={14} /> 部门
                    </label>
                    <input
                      style={inputStyle}
                      placeholder="如：研发部"
                      value={formData.department}
                      onChange={(e) => handleChange('department', e.target.value)}
                      onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--primary-teal)' }}
                      onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(33, 150, 243, 0.2)' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-gray)', fontSize: '0.8rem', marginBottom: '0.3rem' }}>
                    <Phone size={14} /> 手机号码 *
                  </label>
                  <input
                    style={inputStyle}
                    placeholder="请输入手机号码"
                    value={formData.phone}
                    onChange={(e) => handleChange('phone', e.target.value)}
                    onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--primary-teal)' }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(33, 150, 243, 0.2)' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-gray)', fontSize: '0.8rem', marginBottom: '0.3rem' }}>
                    <Mail size={14} /> 电子邮箱
                  </label>
                  <input
                    style={inputStyle}
                    placeholder="请输入电子邮箱"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--primary-teal)' }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(33, 150, 243, 0.2)' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-gray)', fontSize: '0.8rem', marginBottom: '0.3rem' }}>
                    <Sparkles size={14} /> 个人简介
                  </label>
                  <textarea
                    style={{ ...inputStyle, minHeight: 80, resize: 'vertical' }}
                    placeholder="请输入员工个人简介..."
                    value={formData.bio}
                    onChange={(e) => handleChange('bio', e.target.value)}
                    onFocus={(e) => { e.currentTarget.style.borderColor = 'var(--primary-teal)' }}
                    onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(33, 150, 243, 0.2)' }}
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setShowForm(false)
                    setGenerated(true)
                  }}
                  disabled={!formData.name || !formData.phone}
                  style={{
                    padding: '0.9rem',
                    background: formData.name && formData.phone ? 'var(--gradient-primary)' : 'rgba(255,255,255,0.1)',
                    color: '#fff',
                    borderRadius: 12,
                    fontWeight: 600,
                    fontSize: '1rem',
                    border: 'none',
                    cursor: formData.name && formData.phone ? 'pointer' : 'default',
                    opacity: formData.name && formData.phone ? 1 : 0.5,
                    marginTop: '0.5rem',
                  }}
                >
                  生成名片
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .container > div[style*="grid"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}