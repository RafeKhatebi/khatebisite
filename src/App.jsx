import { Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import CV from './pages/CV'
import Portfolio from './pages/Portfolio'
import Articles from './pages/Articles'
import ArticleDetail from './pages/ArticleDetail'
import Contact from './pages/Contact'

function App() {
  const { i18n } = useTranslation()

  useEffect(() => {
    // Set document direction based on language
    const direction = i18n.language === 'fa' || i18n.language === 'ps' ? 'rtl' : 'ltr'
    document.documentElement.dir = direction
    document.documentElement.lang = i18n.language
  }, [i18n.language])

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/articles/:category/:slug" element={<ArticleDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<div className="min-h-screen flex items-center justify-center"><div className="text-center"><h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1><p className="text-gray-600">Page not found</p></div></div>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
