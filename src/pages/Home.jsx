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

      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        </div>
        {/* Hero Section */}
        <section className="pt-8 sm:pt-16 pb-16 sm:pb-24 container-mobile">
          <div className="max-w-4xl mx-auto">
            <div className="text-center">
              {/* Profile Image */}
              <div className="mb-6 sm:mb-8">
                <div className="relative inline-block">
                  <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 mx-auto rounded-full bg-gradient-to-r from-primary-500 to-purple-600 p-1">
                    <img 
                      src={rafeImage} 
                      alt="Rafe Ahmad Khatebi" 
                      className="w-full h-full rounded-full object-cover"
                      loading="eager"
                      decoding="async"
                      fetchpriority="high"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 sm:-bottom-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full border-2 sm:border-4 border-white flex items-center justify-center">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Hero Content */}
              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight fade-in-up hero-title">
                  {t('home.title')}
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-primary-600 font-medium fade-in-up" style={{animationDelay: '0.2s'}}>
                  {t('home.subtitle')}
                </p>
                <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed fade-in-up px-4" style={{animationDelay: '0.4s'}}>
                  {t('home.description')}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-4 fade-in-up" style={{animationDelay: '0.6s'}}>
                  <Link
                    to="/contact"
                    className="w-full sm:w-auto touch-target btn-primary px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl shadow-lg button-hover"
                  >
                    {t('home.cta')}
                  </Link>
                  <Link
                    to="/portfolio"
                    className="w-full sm:w-auto touch-target btn-secondary px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-xl shadow-lg button-hover"
                  >
                    {t('home.viewWork')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 sm:py-16 bg-white/50 backdrop-blur-sm">
          <div className="container-mobile">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {statsData.map((stat, index) => (
                <div key={index} className="text-center py-4">
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-600 mb-2">{stat.value}</div>
                  <div className="text-sm sm:text-base text-gray-600 font-medium">{t(stat.key)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12 sm:py-16">
          <div className="container-mobile">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <Link
                to="/about"
                className="card card-hover group touch-target p-6 fade-in-up"
                style={{animationDelay: '0.1s'}}
              >
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-200 transition-colors">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{t('nav.about')}</h3>
                  <p className="text-gray-600 text-sm">{t('about.subtitle')}</p>
                </div>
              </Link>

              <Link
                to="/cv"
                className="card card-hover group touch-target p-6 fade-in-up"
                style={{animationDelay: '0.2s'}}
              >
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{t('nav.cv')}</h3>
                  <p className="text-gray-600 text-sm">{t('cv.subtitle')}</p>
                </div>
              </Link>

              <Link
                to="/portfolio"
                className="card card-hover group touch-target p-6 fade-in-up"
                style={{animationDelay: '0.3s'}}
              >
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{t('nav.portfolio')}</h3>
                  <p className="text-gray-600 text-sm">{t('portfolio.subtitle')}</p>
                </div>
              </Link>

              <Link
                to="/contact"
                className="card card-hover group touch-target p-6 fade-in-up"
                style={{animationDelay: '0.4s'}}
              >
                <div className="text-center">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{t('nav.contact')}</h3>
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
