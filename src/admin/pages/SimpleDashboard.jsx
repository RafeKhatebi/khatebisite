import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const SimpleDashboard = () => {
  const [stats, setStats] = useState({
    projects: 0,
    skills: 0,
    experiences: 0,
    messages: 0
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchStats()
  }, [])

  const fetchStats = () => {
    try {
      const data = JSON.parse(localStorage.getItem('siteData') || '{}')
      
      setStats({
        projects: data.projects?.length || 0,
        skills: data.skills?.length || 0,
        experiences: data.experiences?.length || 0,
        messages: data.messages?.length || 0
      })
    } catch (error) {
      console.error('Error fetching stats:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="flex items-center justify-center p-8">Loading...</div>
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">Projects</h3>
          <p className="text-3xl font-bold text-blue-600">{stats.projects}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">Skills</h3>
          <p className="text-3xl font-bold text-green-600">{stats.skills}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">Experience</h3>
          <p className="text-3xl font-bold text-purple-600">{stats.experiences}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700">Messages</h3>
          <p className="text-3xl font-bold text-red-600">{stats.messages}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Link to="/admin/projects" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">Manage Projects</h3>
          <p className="text-gray-600">Add, edit, and organize your portfolio projects</p>
        </Link>
        
        <Link to="/admin/skills" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">Manage Skills</h3>
          <p className="text-gray-600">Update your technical skills and proficiency levels</p>
        </Link>
        
        <Link to="/admin/experience" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">Manage Experience</h3>
          <p className="text-gray-600">Update your work experience and career history</p>
        </Link>
        
        <Link to="/admin/articles" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">Manage Articles</h3>
          <p className="text-gray-600">Create and edit blog articles</p>
        </Link>
        
        <Link to="/admin/messages" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">View Messages</h3>
          <p className="text-gray-600">Check contact form submissions</p>
        </Link>
        
        <Link to="/admin/education" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">Manage Education</h3>
          <p className="text-gray-600">Update your educational background</p>
        </Link>
        
        <Link to="/admin/settings" className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow">
          <h3 className="text-xl font-semibold mb-2">Site Settings</h3>
          <p className="text-gray-600">Update personal information and site configuration</p>
        </Link>
      </div>
    </div>
  )
}

export default SimpleDashboard