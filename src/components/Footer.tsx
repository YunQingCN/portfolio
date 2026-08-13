import { Link } from 'react-router-dom'

const friendLinks = [
  { label: '干细胞', url: '#' },
  { label: '免疫细胞的制备与储存', url: '#' },
  { label: '人工智能的智慧康养体系', url: '#' },
]

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, #0a1f6b 0%, #071550 100%)',
      borderTop: '1px solid rgba(35, 203, 200, 0.1)',
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
              专注于细胞生物领域技术研发、应用及健康管理综合服务的高科技公司
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 600, marginBottom: '1rem', fontSize: '0.95rem' }}>快速导航</h4>
            {[
              { label: '集团简介', to: '/about' },
              { label: '人才队伍', to: '/team' },
              { label: '科学研究', to: '/research' },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.to}
                style={{ display: 'block', color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '0.5rem', transition: 'color 0.3s' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--primary-teal)' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-gray)' }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 600, marginBottom: '1rem', fontSize: '0.95rem' }}>服务项目</h4>
            {[
              { label: '细胞储存', to: '/cell-storage' },
              { label: '细胞技术服务', to: '/cell-service' },
              { label: '免疫细胞储存', to: '/cell-storage' },
              { label: '脂肪干细胞', to: '/cell-storage' },
              { label: '胎盘间充质干细胞', to: '/cell-storage' },
              { label: '牙髓干细胞', to: '/cell-storage' },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.to}
                style={{ display: 'block', color: 'var(--text-gray)', fontSize: '0.85rem', marginBottom: '0.5rem', transition: 'color 0.3s' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--primary-teal)' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-gray)' }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 600, marginBottom: '1rem', fontSize: '0.95rem' }}>联系我们</h4>
            <div style={{ color: 'var(--text-gray)', fontSize: '0.85rem', lineHeight: 2 }}>
              <div>服务热线：021-60835322</div>
              <div>邮箱：wxdc2022@outlook.com</div>
              <div>上海市青浦区朱家角康业路388弄18号华科慧谷产业园七楼</div>
            </div>
          </div>
        </div>

        {/* Friend Links */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '1.5rem',
          marginBottom: '1.5rem',
        }}>
          <h4 style={{ color: '#fff', fontWeight: 600, marginBottom: '0.8rem', fontSize: '0.9rem' }}>友情链接</h4>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {friendLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                style={{ color: 'var(--text-gray)', fontSize: '0.8rem', transition: 'color 0.3s' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--primary-teal)' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-gray)' }}
              >
                {link.label}
              </a>
            ))}
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
