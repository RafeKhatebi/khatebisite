import { useState, useEffect } from 'react'

const SimpleProjectsManager = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingProject, setEditingProject] = useState(null)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    loadProjects()
  }, [])

  const loadProjects = () => {
    const data = JSON.parse(localStorage.getItem('siteData') || '{"projects":[]}')
    setProjects(data.projects || [])
    setLoading(false)
  }

  const saveProjects = (newProjects) => {
    const data = JSON.parse(localStorage.getItem('siteData') || '{}')
    data.projects = newProjects
    localStorage.setItem('siteData', JSON.stringify(data))
    setProjects(newProjects)
  }

  const handleSave = (projectData) => {
    let newProjects
    if (editingProject) {
      newProjects = projects.map(p => p.id === editingProject.id ? { ...projectData, id: editingProject.id } : p)
    } else {
      newProjects = [...projects, { ...projectData, id: Date.now() }]
    }
    saveProjects(newProjects)
    setShowForm(false)
    setEditingProject(null)
  }

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this project?')) {
      const newProjects = projects.filter(p => p.id !== id)
      saveProjects(newProjects)
    }
  }

  const handleEdit = (project) => {
    setEditingProject(project)
    setShowForm(true)
  }

  const handleAdd = () => {
    setEditingProject(null)
    setShowForm(true)
  }

  if (loading) {
    return <div className="flex items-center justify-center p-8">Loading...</div>
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Projects Manager</h1>
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Project
        </button>
      </div>

      {showForm && (
        <ProjectForm
          project={editingProject}
          onSave={handleSave}
          onCancel={() => {
            setShowForm(false)
            setEditingProject(null)
          }}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="bg-white p-6 rounded-lg shadow">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-32 object-cover rounded mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
            <div className="flex flex-wrap gap-1 mb-4">
              {project.technologies?.map((tech, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => handleEdit(project)}
                className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(project.id)}
                className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const ProjectForm = ({ project, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    title: project?.title || '',
    description: project?.description || '',
    image: project?.image || '',
    demo_url: project?.demo_url || '',
    github_url: project?.github_url || '',
    technologies: project?.technologies?.join(', ') || '',
    featured: project?.featured || false
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const projectData = {
      ...formData,
      technologies: formData.technologies.split(',').map(tech => tech.trim()).filter(Boolean)
    }
    onSave(projectData)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <h2 className="text-2xl font-bold mb-4">
        {project ? 'Edit Project' : 'Add New Project'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
          <input
            type="text"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.title}
            onChange={(e) => setFormData({...formData, title: e.target.value})}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <textarea
            required
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.description}
            onChange={(e) => setFormData({...formData, description: e.target.value})}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
          <input
            type="url"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.image}
            onChange={(e) => setFormData({...formData, image: e.target.value})}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Demo URL</label>
            <input
              type="url"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.demo_url}
              onChange={(e) => setFormData({...formData, demo_url: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">GitHub URL</label>
            <input
              type="url"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.github_url}
              onChange={(e) => setFormData({...formData, github_url: e.target.value})}
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Technologies (comma separated)
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.technologies}
            onChange={(e) => setFormData({...formData, technologies: e.target.value})}
            placeholder="React, Node.js, MongoDB"
          />
        </div>
        
        <div className="flex items-center">
          <input
            type="checkbox"
            id="featured"
            className="mr-2"
            checked={formData.featured}
            onChange={(e) => setFormData({...formData, featured: e.target.checked})}
          />
          <label htmlFor="featured" className="text-sm font-medium text-gray-700">
            Featured Project
          </label>
        </div>
        
        <div className="flex space-x-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Save Project
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default SimpleProjectsManager