import React from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Helmet } from 'react-helmet-async'
import { articlesData } from '../data/articles'

const ArticleDetail = () => {
  const { category, slug } = useParams()
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language

  // Find the article by slug
  const article = articlesData.find(a => a.slug === slug && a.category === category)

  if (!article) {
    return <Navigate to="/articles" replace />
  }

  const formatDate = React.useCallback((dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString(currentLang === 'fa' ? 'fa-IR' : currentLang === 'ps' ? 'ps-AF' : 'en-US')
  }, [currentLang])

  // Get related articles (same category, excluding current)
  const relatedArticles = articlesData
    .filter(a => a.category === article.category && a.id !== article.id)
    .slice(0, 3)

  return (
    <>
      <Helmet>
        <title>{`${article.title?.[currentLang] || article.title?.en || 'Article'} - ${t('seo.articles.title')}`}</title>
        <meta name="description" content={article.excerpt?.[currentLang] || article.excerpt?.en || ''} />
        <meta property="og:title" content={article.title?.[currentLang] || article.title?.en || 'Article'} />
        <meta property="og:description" content={article.excerpt?.[currentLang] || article.excerpt?.en || ''} />
        <meta property="og:image" content={article.image} />
        <meta property="og:type" content="article" />
        <meta name="article:author" content={article.author} />
        <meta name="article:published_time" content={article.publishedAt} />
        <meta name="article:section" content={t(`articles.categories.${article.category}`)} />
      </Helmet>

      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link
            to="/articles"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8 group"
          >
            <svg
              className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={currentLang === 'fa' || currentLang === 'ps' ? 'M17 8l4 4m0 0l-4 4m4-4H3' : 'M7 16l-4-4m0 0l4-4m-4 4h18'}
              />
            </svg>
            {t('articles.backToList')}
          </Link>

          {/* Article Header */}
          <article className="bg-white rounded-xl shadow-lg overflow-hidden">
            {/* Featured Image */}
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={article.image}
                alt={article.title[currentLang]}
                className="w-full h-64 md:h-80 object-cover"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/800x400/6366f1/ffffff?text=${encodeURIComponent(article.title[currentLang].substring(0, 30))}`
                }}
              />
            </div>

            <div className="p-8">
              {/* Category and Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="inline-block px-4 py-2 text-sm font-semibold text-primary-600 bg-primary-100 rounded-full">
                  {t(`articles.categories.${article.category}`)}
                </span>
                <div className="flex items-center text-gray-500 text-sm">
                  <span>{t('articles.publishedOn')}: {formatDate(article.publishedAt)}</span>
                  <span className="mx-2">•</span>
                  <span>{t('articles.author')}: {article.author}</span>
                  <span className="mx-2">•</span>
                  <span>{article.readTime} min read</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {article.title?.[currentLang] || article.title?.en || 'Untitled'}
              </h1>

              {/* Excerpt */}
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {article.excerpt?.[currentLang] || article.excerpt?.en || ''}
              </p>

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {article.content?.[currentLang] || article.content?.en || 'Content not available'}
                </div>
              </div>
            </div>
          </article>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                {t('articles.relatedArticles')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {relatedArticles.map((relatedArticle) => (
                  <Link
                    key={relatedArticle.id}
                    to={`/articles/${relatedArticle.category}/${relatedArticle.slug}`}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden group"
                  >
                    <img
                      src={relatedArticle.image}
                      alt={relatedArticle.title[currentLang]}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.target.src = `https://via.placeholder.com/300x150/6366f1/ffffff?text=${encodeURIComponent(relatedArticle.title[currentLang].substring(0, 15))}`
                      }}
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors">
                        {relatedArticle.title?.[currentLang] || relatedArticle.title?.en || 'Untitled'}
                      </h3>
                      <p className="text-sm text-gray-600 line-clamp-2">
                        {relatedArticle.excerpt?.[currentLang] || relatedArticle.excerpt?.en || ''}
                      </p>
                      <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                        <span>{formatDate(relatedArticle.publishedAt)}</span>
                        <span>{relatedArticle.readTime} min</span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ArticleDetail
