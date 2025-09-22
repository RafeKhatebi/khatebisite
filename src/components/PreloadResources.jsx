import { useEffect } from 'react'

const PreloadResources = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadLink = (href, as, type) => {
      const link = document.createElement('link')
      link.rel = 'preload'
      link.href = href
      link.as = as
      if (type) link.type = type
      document.head.appendChild(link)
    }

    // Preload fonts
    preloadLink('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap', 'style')
    preloadLink('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700&display=swap', 'style')

    // Preload critical translation files
    preloadLink('/locales/en/translation.json', 'fetch', 'application/json')
    
    // Detect user language and preload
    const userLang = localStorage.getItem('i18nextLng') || navigator.language.split('-')[0]
    if (userLang !== 'en') {
      preloadLink(`/locales/${userLang}/translation.json`, 'fetch', 'application/json')
    }
  }, [])

  return null
}

export default PreloadResources