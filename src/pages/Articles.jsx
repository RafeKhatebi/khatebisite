import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { categories } from '../data/articles'

const Articles = () => {
    const { t, i18n } = useTranslation()
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [filteredArticles, setFilteredArticles] = useState([])
    const [articles, setArticles] = useState([])
    const currentLang = i18n.language

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('siteData') || '{}')
        const articlesData = data.articles || []
        setArticles(articlesData)
        setFilteredArticles(articlesData)
    }, [])

    useEffect(() => {
        const filtered = selectedCategory === 'all' 
            ? articles 
            : articles.filter(article => article.category === selectedCategory)
        setFilteredArticles(filtered)
    }, [selectedCategory, articles])

    const formatDate = (dateString) => {
        const date = new Date(dateString)
        return date.toLocaleDateString(currentLang === 'fa' ? 'fa-IR' : currentLang === 'ps' ? 'ps-AF' : 'en-US')
    }

    return (
        <>
            <Helmet>
                <title>{t('seo.articles.title')}</title>
                <meta name="description" content={t('seo.articles.description')} />
                <meta property="og:title" content={t('seo.articles.title')} />
                <meta property="og:description" content={t('seo.articles.description')} />
                <meta property="og:type" content="website" />
            </Helmet>

            <div className="min-h-screen bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            {t('articles.title')}
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            {t('articles.subtitle')}
                        </p>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`px-6 py-3 rounded-full font-medium transition-all duration-200 ${selectedCategory === category.id
                                    ? 'bg-primary-600 text-white shadow-lg'
                                    : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600 shadow-md'
                                    }`}
                            >
                                {category.id === 'all'
                                    ? t('articles.allCategories')
                                    : t(`articles.categories.${category.key}`)
                                }
                            </button>
                        ))}
                    </div>

                    {/* Articles Grid */}
                    {filteredArticles.length === 0 ? (
                        <div className="text-center py-12">
                            <p className="text-gray-500 text-lg">{t('articles.noArticles')}</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredArticles.map((article) => (
                                <article
                                    key={article.id}
                                    className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                                >
                                    {/* Article Image */}
                                    <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                                        <img
                                            src={article.image}
                                            alt={article.title?.[currentLang] || article.title?.en || 'Article image'}
                                            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                                            onError={(e) => {
                                                const title = article.title?.[currentLang] || article.title?.en || 'Article'
                                                e.target.src = `https://via.placeholder.com/400x200/6366f1/ffffff?text=${encodeURIComponent(title.substring(0, 20))}`
                                            }}
                                        />
                                    </div>

                                    <div className="p-6">
                                        {/* Category Badge */}
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="inline-block px-3 py-1 text-xs font-semibold text-primary-600 bg-primary-100 rounded-full">
                                                {t(`articles.categories.${article.category}`)}
                                            </span>
                                            <span className="text-sm text-gray-500">
                                                {article.readTime} min read
                                            </span>
                                        </div>

                                        {/* Title */}
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
                                            {article.title?.[currentLang] || article.title?.en || 'Untitled'}
                                        </h3>

                                        {/* Excerpt */}
                                        <p className="text-gray-600 mb-4 line-clamp-3">
                                            {article.excerpt?.[currentLang] || article.excerpt?.en || ''}
                                        </p>

                                        {/* Meta Info */}
                                        <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                                            <span>{article.author}</span>
                                            <span>{formatDate(article.publishedAt)}</span>
                                        </div>

                                        {/* Read More Button */}
                                        <Link
                                            to={`/articles/${article.category}/${article.slug}`}
                                            className="inline-flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 group"
                                        >
                                            {t('articles.readMore')}
                                            <svg
                                                className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d={['fa', 'ps'].includes(currentLang) ? 'M7 17l10-10M7 7h10v10' : 'M17 7l-10 10M17 17V7H7'}
                                                />
                                            </svg>
                                        </Link>
                                    </div>
                                </article>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default Articles
