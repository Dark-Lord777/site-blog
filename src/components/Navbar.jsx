import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{ padding: '10px', gap: '20px', display: 'flex' }}>
      <Link to="/">Главная</Link>
      <Link to="/about">О нас</Link>
      <Link to="/contacts">Контакты</Link>
      <Link to="/blog">Блог</Link>
    </nav>
  )
}

export default Navbar
