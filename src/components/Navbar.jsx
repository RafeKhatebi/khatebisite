import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [langDropdown, setLangDropdown] = useState(false)
  const { t, i18n } = useTranslation()
  const location = useLocation()

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'fa', name: 'فارسی', flag: '🇮🇷' },
    { code: 'ps', name: 'پښتو', flag: '🇦🇫' }
  ]

  const navItems = [
    { path: '/', key: 'home' },
    { path: '/about', key: 'about' },
    { path: '/cv', key: 'cv' },
    { path: '/portfolio', key: 'portfolio' },
    { path: '/articles', key: 'articles' },
    { path: '/contact', key: 'contact' }
  ]

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setLangDropdown(false)
  }

  const isActive = (path) => location.pathname === path

  const getNavLinkClass = (active) => {
    const baseClass = 'px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200'
    return active
      ? `${baseClass} text-primary-600 bg-primary-50`
      : `${baseClass} text-gray-700 hover:text-primary-600 hover:bg-gray-50`
  }

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">RK</span>
            </div>
            <span className="font-bold text-xl text-gray-900">{t('nav.name')}</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.key}
                to={item.path}
                className={getNavLinkClass(isActive(item.path))}
              >
                {t(`nav.${item.key}`)}
              </Link>
            ))}

            {/* Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdown(!langDropdown)}
                className="flex items-center space-x-2 rtl:space-x-reverse px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors duration-200"
              >
                <span>{languages[languages.findIndex(lang => lang.code === i18n.language)]?.flag}</span>
                <span>{t('nav.language')}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {langDropdown && (
                <div className="absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => changeLanguage(lang.code)}
                      className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center space-x-3 rtl:space-x-reverse ${i18n.language === lang.code ? 'text-primary-600 bg-primary-50' : 'text-gray-700'
                        }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-colors duration-200"
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

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.key}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive(item.path)
                      ? 'text-primary-600 bg-primary-50'
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                    }`}
                >
                  {t(`nav.${item.key}`)}
                </Link>
              ))}

              {/* Mobile Language Options */}
              <div className="pt-2 border-t border-gray-200 mt-2">
                <p className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {t('nav.language')}
                </p>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      changeLanguage(lang.code)
                      setIsOpen(false)
                    }}
                    className={`w-full text-left px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center space-x-3 rtl:space-x-reverse ${i18n.language === lang.code
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
                      }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Backdrop only for language dropdown */}
      {langDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setLangDropdown(false)}
        />
      )}
    </nav>
  )
}

export default Navbar
