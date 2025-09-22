import { useState, useEffect } from 'react'

const SimpleEducationManager = () => {
  const [education, setEducation] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [editingEdu, setEditingEdu] = useState(null)

  useEffect(() => {
    loadEducation()
  }, [])

  const loadEducation = () => {
    const data = JSON.parse(localStorage.getItem('siteData') || '{"education":[]}')
    setEducation(data.education || [])
  }

  const saveEducation = (newEducation) => {
    const data = JSON.parse(localStorage.getItem('siteData') || '{}')
    data.education = newEducation
    localStorage.setItem('siteData', JSON.stringify(data))
    setEducation(newEducation)
  }

  const handleAdd = () => {
    setEditingEdu(null)
    setShowForm(true)
  }

  const handleEdit = (edu) => {
    setEditingEdu(edu)
    setShowForm(true)
  }

  const handleDelete = (id) => {
    if (confirm('Delete this education?')) {
      const newEducation = education.filter(e => e.id !== id)
      saveEducation(newEducation)
    }
  }

  const handleSave = (eduData) => {
    let newEducation
    if (editingEdu) {
      newEducation = education.map(e => e.id === editingEdu.id ? { ...eduData, id: editingEdu.id } : e)
    } else {
      newEducation = [...education, { ...eduData, id: Date.now() }]
    }
    saveEducation(newEducation)
    setShowForm(false)
    setEditingEdu(null)
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Education Manager</h1>
        <button onClick={handleAdd} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add Education
        </button>
      </div>

      {showForm && (
        <EducationForm
          education={editingEdu}
          onSave={handleSave}
          onCancel={() => { setShowForm(false); setEditingEdu(null) }}
        />
      )}

      <div className="space-y-6">
        {education.map((edu) => (
          <div key={edu.id} className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold">{edu.degree}</h3>
                <p className="text-green-600 font-medium">{edu.school}</p>
                <p className="text-gray-500">{edu.location} • {edu.period}</p>
              </div>
              <div className="flex space-x-2">
                <button onClick={() => handleEdit(edu)} className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700">
                  Edit
                </button>
                <button onClick={() => handleDelete(edu.id)} className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700">
                  Delete
                </button>
              </div>
            </div>
            <p className="text-gray-700">{edu.details}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

const EducationForm = ({ education, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    degree: education?.degree || '',
    school: education?.school || '',
    location: education?.location || '',
    period: education?.period || '',
    details: education?.details || ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <h2 className="text-2xl font-bold mb-4">{education ? 'Edit Education' : 'Add New Education'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Degree</label>
          <input
            type="text"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.degree}
            onChange={(e) => setFormData({...formData, degree: e.target.value})}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">School</label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.school}
              onChange={(e) => setFormData({...formData, school: e.target.value})}
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
            placeholder="e.g., 2022 - Present"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.period}
            onChange={(e) => setFormData({...formData, period: e.target.value})}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Details</label>
          <textarea
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.details}
            onChange={(e) => setFormData({...formData, details: e.target.value})}
            placeholder="GPA, coursework, achievements, etc."
          />
        </div>
        
        <div className="flex space-x-4">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Save Education
          </button>
          <button type="button" onClick={onCancel} className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default SimpleEducationManager