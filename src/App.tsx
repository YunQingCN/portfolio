import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingToolbar from './components/FloatingToolbar'
import HomePage from './pages/HomePage'
import BusinessCardPage from './pages/BusinessCardPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/business-card" element={<BusinessCardPage />} />
      </Routes>
      <Footer />
      <FloatingToolbar />
    </BrowserRouter>
  )
}

export default App