const CACHE_NAME = 'khatebi-v1'
const urlsToCache = [
  '/',
  '/locales/en/translation.json',
  '/locales/fa/translation.json',
  '/locales/ps/translation.json'
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  )
})

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        if (response) {
          return response
        }
        return fetch(event.request)
      })
  )
})