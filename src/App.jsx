import { Routes, Route } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useEffect, useState, lazy, Suspense } from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import ErrorBoundary from './components/ErrorBoundary'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SkeletonLoader from './components/SkeletonLoader'
import { initializeData } from './utils/initializeData'

// Lazy load pages
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const CV = lazy(() => import('./pages/CV'))
const Portfolio = lazy(() => import('./pages/Portfolio'))
const Articles = lazy(() => import('./pages/Articles'))
const ArticleDetail = lazy(() => import('./pages/ArticleDetail'))
const Contact = lazy(() => import('./pages/Contact'))

// Lazy load admin pages
const SimpleLogin = lazy(() => import('./admin/pages/SimpleLogin'))
const SimpleDashboard = lazy(() => import('./admin/pages/SimpleDashboard'))
const SimpleProjectsManager = lazy(() => import('./admin/pages/SimpleProjectsManager'))
const SimpleSkillsManager = lazy(() => import('./admin/pages/SimpleSkillsManager'))
const SimpleMessagesManager = lazy(() => import('./admin/pages/SimpleMessagesManager'))
const SimpleExperienceManager = lazy(() => import('./admin/pages/SimpleExperienceManager'))
const SimpleArticlesManager = lazy(() => import('./admin/pages/SimpleArticlesManager'))
const SimpleEducationManager = lazy(() => import('./admin/pages/SimpleEducationManager'))
const SimpleSettingsManager = lazy(() => import('./admin/pages/SimpleSettingsManager'))

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
    <ErrorBoundary>
      <ThemeProvider>
        <div className="min-h-screen flex flex-col">
          <Suspense fallback={<SkeletonLoader />}>
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
          </Suspense>
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App
