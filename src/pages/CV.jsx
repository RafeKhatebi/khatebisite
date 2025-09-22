import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import rafeImage from '../assets/img/rafe.jpg'
import cvFile from '../assets/new-cv-2025.pdf'
import { technicalSkills, workExperience, education, languages } from '../data/cvData'

const CV = () => {
  const { t } = useTranslation()

  const handleDownloadCV = () => {
    const link = document.createElement('a')
    link.href = cvFile
    link.download = 'Rafe-Ahmad-Khatebi-CV-2025.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      <Helmet>
        <title>{t('seo.cv.title')}</title>
        <meta name="description" content={t('seo.cv.description')} />
        <meta property="og:title" content={t('seo.cv.title')} />
        <meta property="og:description" content={t('seo.cv.description')} />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="section-title">{t('cv.title')}</h1>
            <p className="text-xl text-gray-600 mb-8">
              {t('cv.subtitle')}
            </p>
            <button
              onClick={handleDownloadCV}
              className="btn-primary px-8 py-3 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 inline-flex items-center space-x-2 rtl:space-x-reverse"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span>{t('cv.download')}</span>
            </button>
          </div>

          {/* Personal Info Card */}
          <div className="card mb-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary-500 to-purple-600 p-1">
                  <img 
                    src={rafeImage} 
                    alt="Rafe Ahmad Khatebi" 
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Rafe Ahmad Khatebi</h2>
                <p className="text-xl text-primary-600 mb-4">{t('cv.jobTitle')}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
                  <div className="flex items-center justify-center md:justify-start space-x-2 rtl:space-x-reverse">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>{t('cv.email')}</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start space-x-2 rtl:space-x-reverse">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>{t('cv.phone')}</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start space-x-2 rtl:space-x-reverse">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>{t('cv.location')}</span>
                  </div>
                  <div className="flex items-center justify-center md:justify-start space-x-2 rtl:space-x-reverse">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                    </svg>
                    <span>{t('cv.linkedin')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* Work Experience */}
              <div className="card">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2 rtl:space-x-reverse">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 00-2 2H10a2 2 0 00-2-2V6m8 0h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2" />
                  </svg>
                  <span>{t('cv.experience')}</span>
                </h2>
                <div className="space-y-6">
                  {workExperience.map((job, index) => (
                    <div key={index} className="border-l-4 border-primary-500 pl-6">
                      <div className="mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{job.position}</h3>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm text-gray-600">
                          <span className="font-medium text-primary-600">{job.company} • {job.location}</span>
                          <span>{job.period}</span>
                        </div>
                      </div>
                      <ul className="list-disc list-inside space-y-1 text-gray-700">
                        {job.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-sm">{resp}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="card">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2 rtl:space-x-reverse">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                  <span>{t('cv.education')}</span>
                </h2>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="border-l-4 border-green-500 pl-6">
                      <h3 className="text-lg font-semibold text-gray-900">{edu.degree}</h3>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm text-gray-600 mb-1">
                        <span className="font-medium text-green-600">{edu.school}</span>
                        <span>{edu.period}</span>
                      </div>
                      <p className="text-sm text-gray-700">{edu.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              {/* Technical Skills */}
              <div className="card">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2 rtl:space-x-reverse">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                  <span>{t('cv.skills')}</span>
                </h2>
                <div className="space-y-6">
                  {technicalSkills.map((category, index) => (
                    <div key={index}>
                      <h3 className="font-semibold text-gray-900 mb-3">{t(`cv.skillCategories.${category.key}`)}</h3>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div className="card">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2 rtl:space-x-reverse">
                  <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                  </svg>
                  <span>{t('cv.languages')}</span>
                </h2>
                <div className="space-y-3">
                  {languages.map((lang, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="font-medium text-gray-900">{lang.name}</span>
                      <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
                        {lang.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CV
