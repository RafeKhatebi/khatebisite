import { useState, useRef, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [aboutDropdown, setAboutDropdown] = useState(false)
  const [portfolioDropdown, setPortfolioDropdown] = useState(false)
  const [langDropdown, setLangDropdown] = useState(false)
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const aboutRef = useRef(null)
  const portfolioRef = useRef(null)
  const langRef = useRef(null)

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setLangDropdown(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (aboutRef.current && !aboutRef.current.contains(event.target)) {
        setAboutDropdown(false)
      }
      if (portfolioRef.current && !portfolioRef.current.contains(event.target)) {
        setPortfolioDropdown(false)
      }
      if (langRef.current && !langRef.current.contains(event.target)) {
        setLangDropdown(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 backdrop-blur-sm bg-white/95 dark:bg-gray-900/95 safe-top">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18">
          <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse group touch-target">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <span className="text-white font-bold text-lg sm:text-xl">RK</span>
            </div>
            <span className="font-bold text-xl sm:text-2xl text-gray-900 dark:text-gray-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors hidden sm:block">
              {t('nav.name')}
            </span>
          </Link>

          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8 rtl:space-x-reverse">
            <Link
              to="/"
              className={`nav-link ${location.pathname === '/' ? 'text-primary-600 dark:text-primary-400' : ''}`}
            >
              {t('nav.home')}
            </Link>
            
            <div className="relative" ref={aboutRef}>
              <button
                onClick={() => setAboutDropdown(!aboutDropdown)}
                className={`nav-link flex items-center space-x-1 rtl:space-x-reverse ${
                  location.pathname === '/about' || location.pathname === '/cv' ? 'text-primary-600 dark:text-primary-400' : ''
                }`}
              >
                <span>{t('nav.about')}</span>
                <svg className={`w-4 h-4 transition-transform ${aboutDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {aboutDropdown && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
                  <Link
                    to="/about"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-primary-400"
                    onClick={() => setAboutDropdown(false)}
                  >
                    {t('nav.about')}
                  </Link>
                  <Link
                    to="/cv"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-primary-400"
                    onClick={() => setAboutDropdown(false)}
                  >
                    {t('nav.cv')}
                  </Link>
                </div>
              )}
            </div>

            <div className="relative" ref={portfolioRef}>
              <button
                onClick={() => setPortfolioDropdown(!portfolioDropdown)}
                className={`nav-link flex items-center space-x-1 rtl:space-x-reverse ${
                  location.pathname === '/portfolio' || location.pathname.includes('/articles') ? 'text-primary-600 dark:text-primary-400' : ''
                }`}
              >
                <span>{t('nav.portfolio')}</span>
                <svg className={`w-4 h-4 transition-transform ${portfolioDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {portfolioDropdown && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
                  <Link
                    to="/portfolio"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-primary-400"
                    onClick={() => setPortfolioDropdown(false)}
                  >
                    {t('nav.portfolio')}
                  </Link>
                  <Link
                    to="/articles"
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-primary-600 dark:hover:text-primary-400"
                    onClick={() => setPortfolioDropdown(false)}
                  >
                    {t('nav.articles')}
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`nav-link ${location.pathname === '/contact' ? 'text-primary-600 dark:text-primary-400' : ''}`}
            >
              {t('nav.contact')}
            </Link>
          </div>

          <div className="hidden sm:flex items-center space-x-2 sm:space-x-4 rtl:space-x-reverse">
            <ThemeToggle />
            
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangDropdown(!langDropdown)}
                className="flex items-center space-x-1 sm:space-x-2 rtl:space-x-reverse px-2 sm:px-3 py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 shadow-sm"
              >
                <span className="text-xs sm:text-sm font-medium">
                  {i18n.language === 'en' ? '🇺🇸 EN' : i18n.language === 'fa' ? '🇮🇷 فا' : '🇦🇫 پښ'}
                </span>
                <svg className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform ${langDropdown ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {langDropdown && (
                <div className="absolute top-full right-0 mt-2 w-36 sm:w-40 bg-white dark:bg-gray-800 rounded-lg sm:rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 py-2 z-50">
                  <button
                    onClick={() => changeLanguage('en')}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                      i18n.language === 'en' ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20' : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    🇺🇸 English
                  </button>
                  <button
                    onClick={() => changeLanguage('fa')}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                      i18n.language === 'fa' ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20' : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    🇮🇷 فارسی
                  </button>
                  <button
                    onClick={() => changeLanguage('ps')}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${
                      i18n.language === 'ps' ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20' : 'text-gray-700 dark:text-gray-300'
                    }`}
                  >
                    🇦🇫 پښتو
                  </button>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-2 lg:hidden">
            <div className="sm:hidden">
              <ThemeToggle />
            </div>
            
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="touch-target p-3 rounded-lg text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden">
            <div className="px-4 pt-4 pb-6 space-y-3 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto">
              <Link
                to="/"
                className={`mobile-nav-link ${location.pathname === '/' ? 'text-primary-600 dark:text-primary-400' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {t('nav.home')}
              </Link>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  {t('nav.about')}
                </div>
                <div className="space-y-1">
                  <Link
                    to="/about"
                    className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === '/about' ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20' : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {t('nav.about')}
                  </Link>
                  <Link
                    to="/cv"
                    className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === '/cv' ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20' : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {t('nav.cv')}
                  </Link>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  {t('nav.portfolio')}
                </div>
                <div className="space-y-1">
                  <Link
                    to="/portfolio"
                    className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === '/portfolio' ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20' : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {t('nav.portfolio')}
                  </Link>
                  <Link
                    to="/articles"
                    className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname.includes('/articles') ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20' : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {t('nav.articles')}
                  </Link>
                </div>
              </div>

              <Link
                to="/contact"
                className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${location.pathname === '/contact' ? 'text-primary-600 dark:text-primary-400 bg-primary-50 dark:bg-primary-900/20' : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:bg-gray-100 dark:hover:bg-gray-700'}`}
                onClick={() => setIsOpen(false)}
              >
                {t('nav.contact')}
              </Link>
              
              <div className="pt-3 border-t border-gray-200 dark:border-gray-700">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3">
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider block mb-3">Language</span>
                  <div className="grid grid-cols-1 gap-2">
                    <button
                      onClick={() => {
                        changeLanguage('en')
                        setIsOpen(false)
                      }}
                      className={`touch-target px-4 py-3 text-base rounded-lg transition-all duration-200 font-medium ${
                        i18n.language === 'en' 
                          ? 'bg-primary-600 text-white shadow-sm' 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      🇺🇸 English
                    </button>
                    <button
                      onClick={() => {
                        changeLanguage('fa')
                        setIsOpen(false)
                      }}
                      className={`touch-target px-4 py-3 text-base rounded-lg transition-all duration-200 font-medium ${
                        i18n.language === 'fa' 
                          ? 'bg-primary-600 text-white shadow-sm' 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      🇮🇷 فارسی
                    </button>
                    <button
                      onClick={() => {
                        changeLanguage('ps')
                        setIsOpen(false)
                      }}
                      className={`touch-target px-4 py-3 text-base rounded-lg transition-all duration-200 font-medium ${
                        i18n.language === 'ps' 
                          ? 'bg-primary-600 text-white shadow-sm' 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      🇦🇫 پښتو
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar