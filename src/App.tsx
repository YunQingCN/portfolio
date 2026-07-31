import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import FloatingToolbar from './components/FloatingToolbar'
import HomePage from './pages/HomePage'
import BusinessCardPage from './pages/BusinessCardPage'

function App() {
  return (
    <BrowserRouter>
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