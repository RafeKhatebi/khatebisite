import { Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import CV from './pages/CV'
import Portfolio from './pages/Portfolio'
import Articles from './pages/Articles'
import ArticleDetail from './pages/ArticleDetail'
import Contact from './pages/Contact'
import SimpleLogin from './admin/pages/SimpleLogin'
import SimpleDashboard from './admin/pages/SimpleDashboard'
import SimpleProjectsManager from './admin/pages/SimpleProjectsManager'
import SimpleSkillsManager from './admin/pages/SimpleSkillsManager'
import SimpleMessagesManager from './admin/pages/SimpleMessagesManager'
import SimpleExperienceManager from './admin/pages/SimpleExperienceManager'
import SimpleArticlesManager from './admin/pages/SimpleArticlesManager'
import SimpleEducationManager from './admin/pages/SimpleEducationManager'
import SimpleSettingsManager from './admin/pages/SimpleSettingsManager'
import { initializeData } from './utils/initializeData'

function App() {
  const { i18n } = useTranslation()
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false)

  useEffect(() => {
    const direction = i18n.language === 'fa' || i18n.language === 'ps' ? 'rtl' : 'ltr'
    document.documentElement.dir = direction
    document.documentElement.lang = i18n.language
    
    initializeData()
    
    const token = localStorage.getItem('adminToken')
    if (token) {
      setIsAdminAuthenticated(true)
    }
  }, [i18n.language])

  const handleAdminLogin = () => {
    setIsAdminAuthenticated(true)
  }

  const handleAdminLogout = () => {
    localStorage.removeItem('adminToken')
    setIsAdminAuthenticated(false)
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/admin" element={<SimpleLogin onLogin={handleAdminLogin} />} />
          <Route path="/admin/login" element={<SimpleLogin onLogin={handleAdminLogin} />} />
          <Route path="/admin/dashboard" element={
            isAdminAuthenticated ? <SimpleDashboard /> : <SimpleLogin onLogin={handleAdminLogin} />
          } />
          <Route path="/admin/projects" element={
            isAdminAuthenticated ? <SimpleProjectsManager /> : <SimpleLogin onLogin={handleAdminLogin} />
          } />
          <Route path="/admin/skills" element={
            isAdminAuthenticated ? <SimpleSkillsManager /> : <SimpleLogin onLogin={handleAdminLogin} />
          } />
          <Route path="/admin/messages" element={
            isAdminAuthenticated ? <SimpleMessagesManager /> : <SimpleLogin onLogin={handleAdminLogin} />
          } />
          <Route path="/admin/experience" element={
            isAdminAuthenticated ? <SimpleExperienceManager /> : <SimpleLogin onLogin={handleAdminLogin} />
          } />
          <Route path="/admin/articles" element={
            isAdminAuthenticated ? <SimpleArticlesManager /> : <SimpleLogin onLogin={handleAdminLogin} />
          } />
          <Route path="/admin/education" element={
            isAdminAuthenticated ? <SimpleEducationManager /> : <SimpleLogin onLogin={handleAdminLogin} />
          } />
          <Route path="/admin/settings" element={
            isAdminAuthenticated ? <SimpleSettingsManager /> : <SimpleLogin onLogin={handleAdminLogin} />
          } />
          <Route path="/*" element={
            <>
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
                  <Route path="*" element={
                    <div className="min-h-screen flex items-center justify-center">
                      <div className="text-center">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
                        <p className="text-gray-600">Page not found</p>
                      </div>
                    </div>
                  } />
                </Routes>
              </main>
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </ThemeProvider>
  )
}

export default App
