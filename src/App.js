import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { useState } from 'react';
import Biography from './pages/Biography';
import Contact from './pages/Contact';
import CodeShowcase from './pages/CodeShowcase';
import HomePage from './pages/HomePage';
import RecentWorks from './pages/RecentWorks';
import Resume from './pages/Resume';
import './App.css';

function App() {
  // Use state for menu bar toggling
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(prevState => !prevState);
  };
  // A function to close the menu bar
  const closeMenu = () => {setMenuOpen(false)}
  return (
    <Router>
      <div className='layout'>
        <header className='header'>
        <div className="menuToggle" onClick={toggleMenu}>
            &#9776; {/* Hamburger icon */}
          </div>
          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><Link to='/' onClick={closeMenu}>Home</Link></li>
              <li><Link to='/Biography' onClick={closeMenu}>Biography</Link></li>
              <li><Link to='/RecentWorks' onClick={closeMenu}>Recent Works</Link></li>
              <li><Link to='/CodeShowcase' onClick={closeMenu}>Code Showcase</Link></li>
              <li><Link to='/Resume' onClick={closeMenu}>Resume</Link></li>
              <li><Link to='/Contact' onClick={closeMenu}>Contact</Link></li>
            </ul>
          </nav>
        </header>

        <main className='mainContainer'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/biography" element={<Biography />} />
            <Route path="/RecentWorks" element={<RecentWorks />} />
            <Route path="/CodeShowcase" element={<CodeShowcase />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer>
          <p>&copy; 2024 Michael Moreno | All Rights Reserved</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
