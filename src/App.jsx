import { HashRouter, Routes, Route } from 'react-router-dom'  // HashRouter для GitHub Pages!
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Blog from './pages/Blog'
import Article from './pages/Article'

function App() {
  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<Article />} />
      </Routes>
    </HashRouter>
  )
}

export default App
