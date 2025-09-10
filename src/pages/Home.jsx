import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import rafeImage from '../assets/img/rafe.jpg'
import { statsData } from '../data/statsData'

const Home = () => {
  const { t } = useTranslation()

  return (
    <>
      <Helmet>
        <title>{t('seo.home.title')}</title>
        <meta name="description" content={t('seo.home.description')} />
        <meta property="og:title" content={t('seo.home.title')} />
        <meta property="og:description" content={t('seo.home.description')} />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        {/* Hero Section */}
        <section className="pt-20 pb-32 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              {/* Profile Image */}
              <div className="mb-8">
                <div className="relative inline-block">
                  <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-r from-primary-500 to-purple-600 p-1">
                    <img 
                      src={rafeImage} 
                      alt="Rafe Ahmad Khatebi" 
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Hero Content */}
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 fade-in">
                  {t('home.title')}
                </h1>
                <p className="text-xl md:text-2xl text-primary-600 font-medium mb-6 fade-in">
                  {t('home.subtitle')}
                </p>
                <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed fade-in">
                  {t('home.description')}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in">
                  <Link
                    to="/contact"
                    className="btn-primary px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    {t('home.cta')}
                  </Link>
                  <Link
                    to="/portfolio"
                    className="btn-secondary px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                  >
                    {t('home.viewWork')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {statsData.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{t(stat.key)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link
                to="/about"
                className="card hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                    <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('nav.about')}</h3>
                  <p className="text-gray-600 text-sm">{t('about.subtitle')}</p>
                </div>
              </Link>

              <Link
                to="/cv"
                className="card hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('nav.cv')}</h3>
                  <p className="text-gray-600 text-sm">{t('cv.subtitle')}</p>
                </div>
              </Link>

              <Link
                to="/portfolio"
                className="card hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('nav.portfolio')}</h3>
                  <p className="text-gray-600 text-sm">{t('portfolio.subtitle')}</p>
                </div>
              </Link>

              <Link
                to="/contact"
                className="card hover:shadow-lg transform hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                    <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{t('nav.contact')}</h3>
                  <p className="text-gray-600 text-sm">{t('contact.subtitle')}</p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Home
