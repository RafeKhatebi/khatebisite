import { useTranslation } from 'react-i18next'
import { useMemo } from 'react'

const Footer = () => {
  const { t } = useTranslation()
  const currentYear = useMemo(() => new Date().getFullYear(), [])

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-400">
              © {currentYear} Rafe Ahmad Khatebi. {t('footer.rights')}.
            </p>
          </div>
          <div className="text-sm text-gray-400">
            <p>{t('footer.madeWith')}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
