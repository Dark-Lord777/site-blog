import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav style={{ 
      padding: '15px', 
      gap: '20px', 
      display: 'flex', 
      backgroundColor: '#333',
      marginBottom: '20px'
    }}>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Главная</Link>
      <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>О нас</Link>
      <Link to="/contacts" style={{ color: 'white', textDecoration: 'none' }}>Контакты</Link>
      <Link to="/blog" style={{ color: 'white', textDecoration: 'none' }}>Блог</Link>
    </nav>
  )
}

export default Navbar
