import { Link } from 'react-router-dom'

function Blog() {
  const articles = [
    { id: 1, title: 'Первая статья', slug: 'first-post', description: 'Введение в React Router' },
    { id: 2, title: 'Вторая статья', slug: 'second-post', description: 'Деплой на GitHub Pages' },
    { id: 3, title: 'Третья статья', slug: 'third-post', description: 'Работа с хуками' }
  ]

  return (
    <div style={{ padding: '20px' }}>
      <h1>Блог</h1>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
        {articles.map(article => (
          <div key={article.id} style={{ border: '1px solid #ccc', padding: '15px', borderRadius: '8px' }}>
            <Link to={`/blog/${article.slug}`} style={{ fontSize: '20px', textDecoration: 'none', color: '#333' }}>
              {article.title}
            </Link>
            <p style={{ color: '#666', marginTop: '10px' }}>{article.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
