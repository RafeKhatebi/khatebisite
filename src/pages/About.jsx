import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import rafeImage from '../assets/img/rafe.jpg'
import { SkeletonProfile, SkeletonSkill } from '../components/SkeletonLoader'

const About = () => {
  const { t } = useTranslation()

  const skills = [
    { name: 'React.js', level: 90, color: 'bg-blue-500' },
    { name: 'TypeScript', level: 85, color: 'bg-blue-600' },
    { name: 'JavaScript', level: 95, color: 'bg-yellow-500' },
    { name: 'PHP (Laravel)', level: 88, color: 'bg-purple-500' },
    { name: 'MySQL', level: 85, color: 'bg-orange-500' },
    { name: 'Tailwind CSS', level: 92, color: 'bg-cyan-500' },
    { name: 'WordPress', level: 80, color: 'bg-blue-700' },
    { name: 'Node.js', level: 75, color: 'bg-green-500' }
  ]

  const experiences = [
    {
      title: 'Full Stack Web Developer',
      company: 'Novatech Company',
      period: '05/2025 - Present',
      description: 'Developing high-performance web applications using React, TypeScript, and modern backend technologies.'
    },
    {
      title: 'Frontend Developer',
      company: 'Aqsa Group Company',
      period: '04/2025 - 08/2025',
      description: 'Built responsive web applications with modern UI/UX design and SEO-friendly architecture.'
    },
    {
      title: 'Frontend Developer',
      company: 'CSOFCS | ITCH - Herat University',
      period: '2024 - 2025',
      description: 'Developed custom WordPress themes and integrated React frontends with secure coding practices.'
    },
    {
      title: 'Frontend Developer',
      company: 'CTI (Code to Inspire)',
      period: '03/2024 - 07/2024',
      description: 'Applied secure coding practices including input validation and CSRF protection in web applications.'
    }
  ]

  return (
    <>
      <Helmet>
        <title>{t('seo.about.title')}</title>
        <meta name="description" content={t('seo.about.description')} />
        <meta property="og:title" content={t('seo.about.title')} />
        <meta property="og:description" content={t('seo.about.description')} />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="section-title">{t('about.title')}</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>

          {/* Bio Section */}
          <div className="mb-16">
            <div className="card max-w-4xl mx-auto">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary-500 to-purple-600 p-1">
                    <img
                      src={rafeImage}
                      alt="Rafe Ahmad Khatebi"
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1 text-center lg:text-left">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    {t('about.bio')}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-600 mb-1">3+</div>
                      <div className="text-sm text-gray-600">{t('about.years')}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-600 mb-1">15+</div>
                      <div className="text-sm text-gray-600">{t('about.projects')}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-primary-600 mb-1">10+</div>
                      <div className="text-sm text-gray-600">{t('about.clients')}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills & Experience Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Skills Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">{t('about.skills')}</h2>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="card fade-in-left" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900 dark:text-gray-100">{skill.name}</span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out hover:shadow-lg`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">{t('about.experience')}</h2>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={`${exp.title}-${exp.company}`} className="card border-l-4 border-primary-500 hover:border-primary-600 card-hover fade-in-right" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="mb-4">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                        <span className="text-primary-600 dark:text-primary-400 font-medium">{exp.company}</span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">{exp.period}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Technologies Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">{t('about.technologies')}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: 'React', icon: '⚛️' },
                { name: 'Node.js', icon: '🟢' },
                { name: 'TypeScript', icon: '🔷' },
                { name: 'Python', icon: '🐍' },
                { name: 'Laravel', icon: '🖨️' },
                { name: 'PostgreSQL', icon: '🐘' },
                { name: 'Bootstrap', icon: '🅱️' },
                { name: 'Docker', icon: '🐳' },
                { name: 'Git', icon: '📝' },
                { name: 'Figma', icon: '🎨' },
                { name: 'Tailwind', icon: '💨' },
                { name: 'Next.js', icon: '▲' }
              ].map((tech, index) => (
                <div key={index} className="card text-center card-hover fade-in-up" style={{animationDelay: `${index * 0.05}s`}}>
                  <div className="text-3xl mb-2 transform hover:scale-110 transition-transform duration-200">{tech.icon}</div>
                  <div className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
