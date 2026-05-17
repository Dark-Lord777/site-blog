import { useParams, Link } from 'react-router-dom'

function Article() {
  const { slug } = useParams()

  // Контент для разных статей
  const articlesContent = {
    'first-post': {
      title: 'Первая статья',
      content: 'Это содержимое первой статьи. Здесь можно написать что угодно. React Router позволяет создавать динамические страницы с красивыми ссылками.'
    },
    'second-post': {
      title: 'Вторая статья',
      content: 'Деплой на GitHub Pages требует HashRouter вместо BrowserRouter, потому что GitHub Pages не поддерживает SPA из коробки. HashRouter добавляет # в URL, что решает проблему.'
    },
    'third-post': {
      title: 'Третья статья',
      content: 'Хуки в React — это круто! useState, useEffect, useParams — всё это позволяет создавать мощные приложения без классов.'
    }
  }

  const article = articlesContent[slug] || {
    title: 'Статья не найдена',
    content: 'Извините, такой статьи нет в нашем блоге.'
  }

  return (
    <div style={{ padding: '20px' }}>
      <Link to="/blog" style={{ display: 'inline-block', marginBottom: '20px' }}>← Назад к блогу</Link>
      <h1>{article.title}</h1>
      <p style={{ marginTop: '20px', lineHeight: '1.6' }}>{article.content}</p>
    </div>
  )
}

export default Article
