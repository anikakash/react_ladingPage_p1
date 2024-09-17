import React, { useState } from 'react';
import VTMLogo from '../assets/Valuetainment.svg'; // Path to your SVG file
import './Header.css'; // Import the external CSS file for styling

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header-container">
      <div className="logo-section">
        <img src={VTMLogo} alt="VTMERCH Logo" className="logo-img" />
        <div className="logo-text">
          <p>VTMERCH</p>
        </div>
      </div>

      <button className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? '✕' : '☰'}
      </button>

      <div className={`menu-section ${isMenuOpen ? 'mobile-menu' : ''}`}>
        <nav>
          <ul className="menu">
            <li className="menu-item"><a href="#">Home</a></li>
            <li className="menu-item"><a href="#">Shop</a></li>
            <li className="menu-item"><a href="#">About</a></li>
            <li className="menu-item"><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
