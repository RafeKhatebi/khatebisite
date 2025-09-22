import { useState, useEffect } from 'react'

const SimpleSkillsManager = () => {
  const [skills, setSkills] = useState([])
  const [loading, setLoading] = useState(true)
  const [editingSkill, setEditingSkill] = useState(null)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    loadSkills()
  }, [])

  const loadSkills = () => {
    const data = JSON.parse(localStorage.getItem('siteData') || '{"skills":[]}')
    setSkills(data.skills || [])
    setLoading(false)
  }

  const saveSkills = (newSkills) => {
    const data = JSON.parse(localStorage.getItem('siteData') || '{}')
    data.skills = newSkills
    localStorage.setItem('siteData', JSON.stringify(data))
    setSkills(newSkills)
  }

  const handleSave = (skillData) => {
    let newSkills
    if (editingSkill) {
      newSkills = skills.map(s => s.id === editingSkill.id ? { ...skillData, id: editingSkill.id } : s)
    } else {
      newSkills = [...skills, { ...skillData, id: Date.now() }]
    }
    saveSkills(newSkills)
    setShowForm(false)
    setEditingSkill(null)
  }

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this skill?')) {
      const newSkills = skills.filter(s => s.id !== id)
      saveSkills(newSkills)
    }
  }

  const handleEdit = (skill) => {
    setEditingSkill(skill)
    setShowForm(true)
  }

  const handleAdd = () => {
    setEditingSkill(null)
    setShowForm(true)
  }

  if (loading) {
    return <div className="flex items-center justify-center p-8">Loading...</div>
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Skills Manager</h1>
        <button
          onClick={handleAdd}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Skill
        </button>
      </div>

      {showForm && (
        <SkillForm
          skill={editingSkill}
          onSave={handleSave}
          onCancel={() => {
            setShowForm(false)
            setEditingSkill(null)
          }}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div key={skill.id} className="bg-white p-6 rounded-lg shadow">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold">{skill.name}</h3>
              <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded">
                {skill.category}
              </span>
            </div>
            <div className="mb-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Proficiency</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="h-2 rounded-full"
                  style={{ 
                    width: `${skill.level}%`,
                    backgroundColor: skill.color || '#3B82F6'
                  }}
                ></div>
              </div>
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => handleEdit(skill)}
                className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(skill.id)}
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

const SkillForm = ({ skill, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: skill?.name || '',
    level: skill?.level || 50,
    category: skill?.category || '',
    color: skill?.color || '#3B82F6'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <h2 className="text-2xl font-bold mb-4">
        {skill ? 'Edit Skill' : 'Add New Skill'}
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <input
            type="text"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.category}
            onChange={(e) => setFormData({...formData, category: e.target.value})}
            placeholder="Frontend, Backend, Database, etc."
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Proficiency Level: {formData.level}%
          </label>
          <input
            type="range"
            min="0"
            max="100"
            className="w-full"
            value={formData.level}
            onChange={(e) => setFormData({...formData, level: parseInt(e.target.value)})}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Color</label>
          <input
            type="color"
            className="w-full h-10 border border-gray-300 rounded"
            value={formData.color}
            onChange={(e) => setFormData({...formData, color: e.target.value})}
          />
        </div>
        
        <div className="flex space-x-4">
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Save Skill
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

export default SimpleSkillsManager