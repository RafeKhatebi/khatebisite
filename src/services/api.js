import axios from 'axios'

// Create axios instance with base configuration
const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:3001/api',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor
api.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('authToken')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// Response interceptor
api.interceptors.response.use(
  (response) => {
    // Verify response has proper authorization context
    if (response.config.url?.includes('/protected/') && !response.config.headers.Authorization) {
      throw new Error('Unauthorized access to protected resource')
    }
    return response.data
  },
  (error) => {
    // Handle common errors
    if (error.response?.status === 401) {
      localStorage.removeItem('authToken')
      window.location.href = '/login'
    } else if (error.response?.status === 403) {
      console.error('Access forbidden')
    } else if (error.response?.status === 404) {
      console.error('Resource not found')
    } else if (error.response?.status >= 500) {
      console.error('Server error')
    }
    return Promise.reject(error)
  }
)

// API endpoints
export const portfolioAPI = {
  getProjects: () => {
    const token = localStorage.getItem('authToken')
    if (!token) throw new Error('Authentication required')
    return api.get('/projects')
  },
  getProject: (id) => {
    const token = localStorage.getItem('authToken')
    if (!token) throw new Error('Authentication required')
    return api.get(`/projects/${id}`)
  },
}

export const contactAPI = {
  sendMessage: (data) => {
    const token = localStorage.getItem('authToken')
    if (!token) throw new Error('Authentication required')
    return api.post('/contact', data)
  },
}

export default api
