import { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    title: '五心集团',
    subtitle: '致力于干细胞生物科技领域',
    description: '拥有国内干细胞领域核心科学家团队，与各大医疗机构深度合作',
    bg: 'radial-gradient(ellipse at 30% 50%, rgba(33, 150, 243, 0.15) 0%, transparent 60%), radial-gradient(ellipse at 70% 30%, rgba(100, 181, 246, 0.1) 0%, transparent 50%), linear-gradient(180deg, #1a2a4a 0%, #0d1b2a 100%)',
  },
  {
    title: '120+ 服务案例',
    subtitle: '客户满意度100%',
    description: '驻全球办事处 15+ 与各大医疗机构和高科技生物公司进行深度合作，推动行业发展',
    bg: 'radial-gradient(ellipse at 60% 40%, rgba(100, 181, 246, 0.12) 0%, transparent 60%), radial-gradient(ellipse at 20% 70%, rgba(33, 150, 243, 0.08) 0%, transparent 50%), linear-gradient(180deg, #2a3f6f 0%, #0d1b2a 100%)',
  },
  {
    title: '五心科技',
    subtitle: '科技创新，关爱未来',
    description: '',
    bg: 'radial-gradient(ellipse at 50% 50%, rgba(25, 118, 210, 0.12) 0%, transparent 60%), radial-gradient(ellipse at 80% 20%, rgba(33, 150, 243, 0.1) 0%, transparent 50%), linear-gradient(180deg, #1a2a4a 0%, #2a3f6f 100%)',
  },
]

function DNAHelix() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio
      canvas.height = canvas.offsetHeight * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resize()
    window.addEventListener('resize', resize)

    const W = () => canvas.offsetWidth
    const H = () => canvas.offsetHeight
    const NUM_POINTS = 80
    const HELIX_RADIUS = 60
    const SEPARATION = 180

    const draw = (time: number) => {
      ctx.clearRect(0, 0, W(), H())
      const cx = W() / 2
      const speed = time * 0.0008

      for (let i = 0; i < NUM_POINTS; i++) {
        const t = i / NUM_POINTS
        const y = t * H()
        const angle = t * Math.PI * 6 + speed

        const x1 = cx + Math.sin(angle) * HELIX_RADIUS - SEPARATION / 2
        const x2 = cx + Math.sin(angle + Math.PI) * HELIX_RADIUS + SEPARATION / 2
        const z1 = Math.cos(angle)
        const z2 = Math.cos(angle + Math.PI)

        // Connecting bars (base pairs)
        if (i % 4 === 0) {
          const grad = ctx.createLinearGradient(x1, y, x2, y)
          const alpha1 = (z1 + 1) / 2 * 0.35 + 0.05
          const alpha2 = (z2 + 1) / 2 * 0.35 + 0.05
          grad.addColorStop(0, `rgba(33, 150, 243, ${alpha1})`)
          grad.addColorStop(0.5, `rgba(100, 181, 246, 0.15)`)
          grad.addColorStop(1, `rgba(33, 150, 243, ${alpha2})`)
          ctx.beginPath()
          ctx.moveTo(x1, y)
          ctx.lineTo(x2, y)
          ctx.strokeStyle = grad
          ctx.lineWidth = 1.5
          ctx.stroke()
        }

        // Strand 1 nodes
        const size1 = (z1 + 1) / 2 * 3 + 1.5
        const alpha1Node = (z1 + 1) / 2 * 0.6 + 0.2
        ctx.beginPath()
        ctx.arc(x1, y, size1, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(33, 150, 243, ${alpha1Node})`
        ctx.fill()
        if (z1 > 0.3) {
          ctx.shadowColor = 'rgba(33, 150, 243, 0.4)'
          ctx.shadowBlur = 8
          ctx.fill()
          ctx.shadowBlur = 0
        }

        // Strand 2 nodes
        const size2 = (z2 + 1) / 2 * 3 + 1.5
        const alpha2Node = (z2 + 1) / 2 * 0.6 + 0.2
        ctx.beginPath()
        ctx.arc(x2, y, size2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(100, 181, 246, ${alpha2Node})`
        ctx.fill()
        if (z2 > 0.3) {
          ctx.shadowColor = 'rgba(100, 181, 246, 0.4)'
          ctx.shadowBlur = 8
          ctx.fill()
          ctx.shadowBlur = 0
        }

        // Draw backbone lines
        if (i > 0) {
          const prevAngle = (i - 1) / NUM_POINTS * Math.PI * 6 + speed
          const prevY = (i - 1) / NUM_POINTS * H()
          const prevX1 = cx + Math.sin(prevAngle) * HELIX_RADIUS - SEPARATION / 2
          const prevX2 = cx + Math.sin(prevAngle + Math.PI) * HELIX_RADIUS + SEPARATION / 2

          ctx.beginPath()
          ctx.moveTo(prevX1, prevY)
          ctx.lineTo(x1, y)
          ctx.strokeStyle = `rgba(33, 150, 243, 0.25)`
          ctx.lineWidth = 1
          ctx.stroke()

          ctx.beginPath()
          ctx.moveTo(prevX2, prevY)
          ctx.lineTo(x2, y)
          ctx.strokeStyle = `rgba(100, 181, 246, 0.25)`
          ctx.lineWidth = 1
          ctx.stroke()
        }
      }

      animId = requestAnimationFrame(draw)
    }
    animId = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        opacity: 0.6,
        transform: 'rotate(15deg) scale(1.2)',
      }}
    />
  )
}

function Particles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 10 + 10,
    delay: Math.random() * 5,
  }))

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {particles.map((p) => (
        <motion.div
          key={p.id}
          style={{
            position: 'absolute',
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            borderRadius: '50%',
            background: `rgba(33, 150, 243, ${Math.random() * 0.3 + 0.1})`,
            boxShadow: `0 0 ${p.size * 2}px rgba(33, 150, 243, 0.3)`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [progress, setProgress] = useState(0)
  const [tick, setTick] = useState(0)
  const SLIDE_DURATION = 5000

  const goToSlide = useCallback((index: number) => {
    setCurrent(index)
    setTick((t) => t + 1)
  }, [])

  useEffect(() => {
    const startTime = Date.now()
    const progressTimer = setInterval(() => {
      const elapsed = Date.now() - startTime
      setProgress(Math.min((elapsed / SLIDE_DURATION) * 100, 100))
    }, 30)

    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
      setTick((t) => t + 1)
    }, SLIDE_DURATION)

    return () => {
      clearTimeout(timer)
      clearInterval(progressTimer)
    }
  }, [tick])

  return (
    <section style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          style={{
            position: 'absolute',
            inset: 0,
            background: slides[current].bg,
          }}
        >
          <Particles />
          <DNAHelix />
          <div style={{
            position: 'absolute',
            right: '-10%',
            top: '10%',
            width: '500px',
            height: '500px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(33, 150, 243, 0.08) 0%, transparent 70%)',
            border: '1px solid rgba(33, 150, 243, 0.06)',
          }} />
          <div style={{
            position: 'absolute',
            left: '5%',
            bottom: '15%',
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(100, 181, 246, 0.06) 0%, transparent 70%)',
          }} />
        </motion.div>
      </AnimatePresence>

      <div style={{
        position: 'relative',
        zIndex: 10,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        padding: '0 2rem',
      }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              style={{
                fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
                fontWeight: 900,
                marginBottom: '1rem',
                background: 'linear-gradient(135deg, #fff 0%, var(--accent-cyan) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {slides[current].title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{
                fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                color: 'var(--primary-teal)',
                marginBottom: '1rem',
                fontWeight: 500,
              }}
            >
              {slides[current].subtitle}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              style={{
                fontSize: '1rem',
                color: 'var(--text-gray)',
                maxWidth: 600,
                margin: '0 auto 2rem',
              }}
            >
              {slides[current].description}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
            >
              <a href="#technology" style={{
                padding: '0.8rem 2rem',
                background: 'var(--gradient-primary)',
                color: '#fff',
                borderRadius: 30,
                fontWeight: 600,
                fontSize: '0.95rem',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 30px rgba(33, 150, 243, 0.3)' }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}
              >
                了解更多
              </a>
              <a href="#contact" style={{
                padding: '0.8rem 2rem',
                border: '1px solid var(--primary-teal)',
                color: 'var(--primary-teal)',
                borderRadius: 30,
                fontWeight: 600,
                fontSize: '0.95rem',
                transition: 'all 0.3s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(33, 150, 243, 0.1)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent' }}
              >
                联系我们
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Progress bar */}
        <div style={{
          position: 'absolute',
          bottom: '4.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 200,
          height: 2,
          background: 'rgba(255,255,255,0.1)',
          borderRadius: 1,
          overflow: 'hidden',
        }}>
          <motion.div
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.03, ease: 'linear' }}
            style={{
              height: '100%',
              background: 'var(--primary-teal)',
              borderRadius: 1,
            }}
          />
        </div>

        <div style={{ position: 'absolute', bottom: '3rem', display: 'flex', gap: '0.5rem' }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              style={{
                width: current === i ? 32 : 10,
                height: 10,
                borderRadius: 5,
                background: current === i ? 'var(--primary-teal)' : 'rgba(255,255,255,0.3)',
                border: 'none',
                transition: 'all 0.3s',
              }}
            />
          ))}
        </div>

        <button
          onClick={() => goToSlide((current - 1 + slides.length) % slides.length)}
          style={{
            position: 'absolute',
            left: '1.5rem',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '50%',
            width: 44,
            height: 44,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            transition: 'all 0.3s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(33, 150, 243, 0.2)' }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={() => goToSlide((current + 1) % slides.length)}
          style={{
            position: 'absolute',
            right: '1.5rem',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255,255,255,0.05)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '50%',
            width: 44,
            height: 44,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            transition: 'all 0.3s',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(33, 150, 243, 0.2)' }}
          onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <style>{`
      `}</style>
    </section>
  )
}
