import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import PageLoader from './components/PageLoader'
import './app.css'

export default function App(){
  return (
    <div className="app-root">
      <header className="site-header">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/whatwedo">What We Do</Link>
          <Link to="/nowriseskill">NowRise Institute</Link>
          <Link to="/talent">Talent & Hiring</Link>
          <Link to="/ai-growth">AI & Growth</Link>
          <Link to="/career">Careers</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<PageLoader file="/home.html" />} />
          <Route path="/whatwedo" element={<PageLoader file="/whatwedo.html" />} />
          <Route path="/nowriseskill" element={<PageLoader file="/nowriseskill.html" />} />
          <Route path="/talent" element={<PageLoader file="/talent-hiring.html" />} />
          <Route path="/ai-growth" element={<PageLoader file="/ai-growth.html" />} />
          <Route path="/career" element={<PageLoader file="/career.html" />} />
          <Route path="/contact" element={<PageLoader file="/contact.html" />} />
        </Routes>
      </main>
    </div>
  )
}
