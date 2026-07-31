import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, #0a1525 0%, #070e17 100%)',
      borderTop: '1px solid rgba(33, 150, 243, 0.1)',
      padding: '3rem 0 1.5rem',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '2rem',
          marginBottom: '2rem',
        }}>
          {/* Company Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1rem' }}>
              <div style={{
                width: 40, height: 40, borderRadius: '50%',
                background: 'rgba(255,255,255,0.95)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                overflow: 'hidden',
              }}>
                <img src="/logo.png" alt="五心集团" style={{ width: 34, height: 34, objectFit: 'contain' }} />
              </div>
              <div>
                <div style={{ fontWeight: 700, color: '#fff' }}>五心集团</div>
                <div style={{ fontSize: '0.6rem', color: 'var(--primary-teal)', letterSpacing: 2 }}>WUXINDAO GROUP</div>
              </div>
            </div>
            <p style={{ color: 'var(--text-gray)', fontSize: '0.85rem', lineHeight: 1.7 }}>
              上海五心集团<br />
              致力于干细胞生物科技领域
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 600, marginBottom: '1rem', fontSize: '0.95rem' }}>快速导航</h4>
            {['集团简介', '人才队伍', '科学研究'].map((item) => (
              <Link
                key={item}
                to="/"
                style={{ display: 'block', color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '0.5rem', transition: 'color 0.3s' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--primary-teal)' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-gray)' }}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 600, marginBottom: '1rem', fontSize: '0.95rem' }}>服务项目</h4>
            {['细胞储存', '细胞技术服务'].map((item) => (
              <div key={item} style={{ color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                {item}
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 600, marginBottom: '1rem', fontSize: '0.95rem' }}>联系我们</h4>
            <div style={{ color: 'var(--text-gray)', fontSize: '0.85rem', lineHeight: 2 }}>
              <div>服务热线：021-60835322</div>
              <div>邮箱：wxdc2022@outlook.com</div>
              <div>上海市青浦区朱家角康业路388弄18号</div>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <div style={{ color: 'var(--text-gray)', fontSize: '0.8rem' }}>
            © 2024 上海五心集团 版权所有 | 沪ICP备2021035221号-2
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/business-card" style={{
              color: 'var(--primary-teal)',
              fontSize: '0.85rem',
              fontWeight: 500,
            }}>
              员工名片生成 →
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 500px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  )
}