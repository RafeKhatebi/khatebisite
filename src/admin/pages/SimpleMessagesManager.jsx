import { useState, useEffect } from 'react'

const SimpleMessagesManager = () => {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadMessages()
  }, [])

  const loadMessages = () => {
    const data = JSON.parse(localStorage.getItem('siteData') || '{"messages":[]}')
    setMessages(data.messages || [])
    setLoading(false)
  }

  const saveMessages = (newMessages) => {
    const data = JSON.parse(localStorage.getItem('siteData') || '{}')
    data.messages = newMessages
    localStorage.setItem('siteData', JSON.stringify(data))
    setMessages(newMessages)
  }

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this message?')) {
      const newMessages = messages.filter(m => m.id !== id)
      saveMessages(newMessages)
    }
  }

  const markAsRead = (id) => {
    const newMessages = messages.map(m => 
      m.id === id ? { ...m, read: true } : m
    )
    saveMessages(newMessages)
  }

  if (loading) {
    return <div className="flex items-center justify-center p-8">Loading...</div>
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Messages Manager</h1>

      {messages.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-gray-500">No messages yet.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {messages.map((message) => (
            <div 
              key={message.id} 
              className={`bg-white p-6 rounded-lg shadow ${!message.read ? 'border-l-4 border-blue-500' : ''}`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold">{message.name}</h3>
                  <p className="text-gray-600">{message.email}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(message.date).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex space-x-2">
                  {!message.read && (
                    <button
                      onClick={() => markAsRead(message.id)}
                      className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
                    >
                      Mark as Read
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(message.id)}
                    className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700"
                  >
                    Delete
                  </button>
                </div>
              </div>
              <div className="bg-gray-50 p-4 rounded">
                <p className="whitespace-pre-wrap">{message.message}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SimpleMessagesManager