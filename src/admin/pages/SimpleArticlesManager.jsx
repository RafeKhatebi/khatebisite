import { useState, useEffect } from 'react'

const SimpleArticlesManager = () => {
  const [articles, setArticles] = useState([])
  const [showForm, setShowForm] = useState(false)
  const [editingArticle, setEditingArticle] = useState(null)

  useEffect(() => {
    loadArticles()
  }, [])

  const loadArticles = () => {
    const data = JSON.parse(localStorage.getItem('siteData') || '{"articles":[]}')
    setArticles(data.articles || [])
  }

  const saveArticles = (newArticles) => {
    const data = JSON.parse(localStorage.getItem('siteData') || '{}')
    data.articles = newArticles
    localStorage.setItem('siteData', JSON.stringify(data))
    setArticles(newArticles)
    
    // Dispatch custom event to notify other components
    window.dispatchEvent(new CustomEvent('articlesUpdated'))
  }

  const handleAdd = () => {
    setEditingArticle(null)
    setShowForm(true)
  }

  const handleEdit = (article) => {
    setEditingArticle(article)
    setShowForm(true)
  }

  const handleDelete = (id) => {
    if (confirm('Delete this article?')) {
      const newArticles = articles.filter(a => a.id !== id)
      saveArticles(newArticles)
    }
  }

  const handleSave = (articleData) => {
    let newArticles
    if (editingArticle) {
      newArticles = articles.map(a => a.id === editingArticle.id ? { ...articleData, id: editingArticle.id } : a)
    } else {
      newArticles = [...articles, { ...articleData, id: Date.now() }]
    }
    saveArticles(newArticles)
    setShowForm(false)
    setEditingArticle(null)
  }

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Articles Manager</h1>
        <button onClick={handleAdd} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add Article
        </button>
      </div>

      {showForm && (
        <ArticleForm
          article={editingArticle}
          onSave={handleSave}
          onCancel={() => { setShowForm(false); setEditingArticle(null) }}
        />
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div key={article.id} className="bg-white p-6 rounded-lg shadow">
            <img src={article.image} alt={article.title?.en} className="w-full h-32 object-cover rounded mb-4" />
            <h3 className="text-xl font-semibold mb-2">{article.title?.en}</h3>
            <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt?.en}</p>
            <div className="flex justify-between items-center mb-4">
              <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">{article.category}</span>
              <span className="text-sm text-gray-500">{article.readTime} min</span>
            </div>
            <div className="flex justify-between">
              <button onClick={() => handleEdit(article)} className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700">
                Edit
              </button>
              <button onClick={() => handleDelete(article.id)} className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const ArticleForm = ({ article, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    slug: article?.slug || '',
    title: {
      en: article?.title?.en || '',
      fa: article?.title?.fa || '',
      ps: article?.title?.ps || ''
    },
    excerpt: {
      en: article?.excerpt?.en || '',
      fa: article?.excerpt?.fa || '',
      ps: article?.excerpt?.ps || ''
    },
    content: {
      en: article?.content?.en || '',
      fa: article?.content?.fa || '',
      ps: article?.content?.ps || ''
    },
    category: article?.category || 'programming',
    author: article?.author || 'Rafe Ahmad Khatebi',
    publishedAt: article?.publishedAt || new Date().toISOString().split('T')[0],
    image: article?.image || '',
    readTime: article?.readTime || 5
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <h2 className="text-2xl font-bold mb-4">{article ? 'Edit Article' : 'Add New Article'}</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Slug</label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.slug}
              onChange={(e) => setFormData({...formData, slug: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.category}
              onChange={(e) => setFormData({...formData, category: e.target.value})}
            >
              <option value="programming">Programming</option>
              <option value="ai">AI</option>
              <option value="research">Research</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title (English)</label>
          <input
            type="text"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.title.en}
            onChange={(e) => setFormData({...formData, title: {...formData.title, en: e.target.value}})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Excerpt (English)</label>
          <textarea
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.excerpt.en}
            onChange={(e) => setFormData({...formData, excerpt: {...formData.excerpt, en: e.target.value}})}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Content (English)</label>
          <textarea
            rows={6}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={formData.content.en}
            onChange={(e) => setFormData({...formData, content: {...formData.content, en: e.target.value}})}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
            <input
              type="url"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.image}
              onChange={(e) => setFormData({...formData, image: e.target.value})}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Read Time (minutes)</label>
            <input
              type="number"
              min="1"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.readTime}
              onChange={(e) => setFormData({...formData, readTime: parseInt(e.target.value)})}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Published Date</label>
            <input
              type="date"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={formData.publishedAt}
              onChange={(e) => setFormData({...formData, publishedAt: e.target.value})}
            />
          </div>
        </div>
        
        <div className="flex space-x-4">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Save Article
          </button>
          <button type="button" onClick={onCancel} className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default SimpleArticlesManager