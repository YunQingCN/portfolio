import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingToolbar from './components/FloatingToolbar'
import HomePage from './pages/HomePage'
import TechnologyPage from './pages/TechnologyPage'
import ProductsPage from './pages/ProductsPage'
import NewsPage from './pages/NewsPage'
import AboutPage from './pages/AboutPage'
import TeamPage from './pages/TeamPage'
import ResearchPage from './pages/ResearchPage'
import CellServicePage from './pages/CellServicePage'
import CellStoragePage from './pages/CellStoragePage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/cell-service" element={<CellServicePage />} />
        <Route path="/cell-storage" element={<CellStoragePage />} />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
      <Footer />
      <FloatingToolbar />
    </HashRouter>
  )
}

export default App