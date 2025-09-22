import { useState, useEffect } from 'react'

const SimpleExperienceManager = () => {
  const [experiences, setExperiences] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [editingExp, setEditingExp] = useState(null)

  useEffect(() => {
    loadExperiences()
  }, [])

  const loadExperiences = () => {
    const data = JSON.parse(localStorage.getItem('siteData') || '{"experiences":[]}')
    setExperiences(data.experiences || [])
  }

  const saveExperiences = (newExperiences) => {
    const data = JSON.parse(localStorage.getItem('siteData') || '{}')
    data.experiences = newExperiences
    localStorage.setItem('siteData', JSON.stringify(data))
    setExperiences(newExperiences)
  }

  const handleAdd = () => {
    setEditingExp(null)
    setShowForm(true)
  }

  const handleEdit = (exp) => {
    setEditingExp(exp)
    setShowForm(true)
  }

  const handleDelete = (id) => {
    if (confirm('Delete this experience?')) {
      const newExperiences = experiences.filter(e => e.id !== id)
      saveExperiences(newExperiences)
    }
  }

  const handleSave = (expData) => {
    let newExperiences
    if (editingExp) {
      newExperiences = experiences.map(e => e.id === editingExp.id ? { ...expData, id: editingExp.id } : e)
    } else {
      newExperiences = [...experiences, { ...expData, id: Date.now() }]
    }
    saveExperiences(newExperiences)
    setShowForm(false)
    setEditingExp(null)
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Experience Manager</h1>
        <button onClick={handleAdd} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add Experience
        </button>
      </div>

      {showForm && (
        <ExperienceForm
          experience={editingExp}
          onSave={handleSave}
          onCancel={() => { setShowForm(false); setEditingExp(null) }}
        />
      )}

      <div className="space-y-6">
        {experiences.map((exp) => (
          <div key={exp.id} className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold">{exp.position}</h3>
                <p className="text-blue-600 font-medium">{exp.company}</p>
                <p className="text-gray-500">{exp.location} • {exp.period}</p>
              </div>
              <div className="flex space-x-2">
                <button onClick={() => handleEdit(exp)} className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700">
                  Edit
                </button>
                <button onClick={() => handleDelete(exp.id)} className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700">
                  Delete
                </button>
              </div>
            </div>
            <div>
              <h4 className="font-medium mb-2">Responsibilities:</h4>
              <ul className="list-disc list-inside space-y-1">
                {exp.responsibilities?.map((resp, index) => (
                  <li key={index} className="text-gray-700">{resp}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const ExperienceForm = ({ experience, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    position: experience?.position || '',
    company: experience?.company || '',
    location: experience?.location || '',
    period: experience?.period || '',
    responsibilities: experience?.responsibilities?.join('\n') || ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const expData = {
      ...formData,
      responsibilities: formData.responsibilities.split('\n').filter(r => r.trim())
    }
    onSave(expData)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <h2 className="text-2xl font-bold mb-4">{experience ? 'Edit Experience' : 'Add New Experience'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
          <input
            type="text"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.position}
            onChange={(e) => setFormData({...formData, position: e.target.value})}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.company}
              onChange={(e) => setFormData({...formData, company: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <input
              type="text"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.location}
              onChange={(e) => setFormData({...formData, location: e.target.value})}
            />
          </div>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Period</label>
          <input
            type="text"
            placeholder="e.g., 01/2024 - Present"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.period}
            onChange={(e) => setFormData({...formData, period: e.target.value})}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Responsibilities (one per line)</label>
          <textarea
            rows={5}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.responsibilities}
            onChange={(e) => setFormData({...formData, responsibilities: e.target.value})}
            placeholder="Enter each responsibility on a new line"
          />
        </div>
        
        <div className="flex space-x-4">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Save Experience
          </button>
          <button type="button" onClick={onCancel} className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default SimpleExperienceManager