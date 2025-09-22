import { useState, useEffect } from 'react'

const SimpleSettingsManager = () => {
  const [settings, setSettings] = useState({
    siteName: 'Rafe Ahmad Khatebi',
    siteDescription: 'Full Stack Web Developer',
    email: 'rkhatibi2003@gmail.com',
    phone: '+93 728 958 423',
    location: 'Herat, Afghanistan',
    bio: 'Passionate Full Stack Developer with expertise in modern web technologies including React, Laravel, and TypeScript. Currently pursuing Computer Science at Herat University with a focus on creating innovative web solutions.',
    yearsExperience: '3+',
    projectsCompleted: '15+',
    clientsSatisfied: '10+',
    cvFile: '/src/assets/new-cv-2025.pdf'
  })

  useEffect(() => {
    loadSettings()
  }, [])

  const loadSettings = () => {
    const data = JSON.parse(localStorage.getItem('siteData') || '{}')
    if (data.settings) {
      setSettings({ ...settings, ...data.settings })
    }
  }

  const saveSettings = (newSettings) => {
    const data = JSON.parse(localStorage.getItem('siteData') || '{}')
    data.settings = newSettings
    localStorage.setItem('siteData', JSON.stringify(data))
    setSettings(newSettings)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    saveSettings(settings)
    alert('Settings saved successfully!')
  }

  const handleChange = (field, value) => {
    setSettings({ ...settings, [field]: value })
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Site Settings</h1>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Site Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={settings.siteName}
                onChange={(e) => handleChange('siteName', e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Site Description</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={settings.siteDescription}
                onChange={(e) => handleChange('siteDescription', e.target.value)}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={settings.email}
                onChange={(e) => handleChange('email', e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={settings.phone}
                onChange={(e) => handleChange('phone', e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={settings.location}
                onChange={(e) => handleChange('location', e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Bio</label>
            <textarea
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={settings.bio}
              onChange={(e) => handleChange('bio', e.target.value)}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Years Experience</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={settings.yearsExperience}
                onChange={(e) => handleChange('yearsExperience', e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Projects Completed</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={settings.projectsCompleted}
                onChange={(e) => handleChange('projectsCompleted', e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Clients Satisfied</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={settings.clientsSatisfied}
                onChange={(e) => handleChange('clientsSatisfied', e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">CV File Path</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={settings.cvFile}
              onChange={(e) => handleChange('cvFile', e.target.value)}
            />
            <p className="text-sm text-gray-500 mt-1">Path to your CV file (e.g., /src/assets/new-cv-2025.pdf)</p>
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Save Settings
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SimpleSettingsManager