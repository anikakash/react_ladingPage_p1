import React, { useState } from 'react';
import VTMLogo from '../../assets/Valuetainment.svg'; // Path to your SVG file
import styles from './Header.module.css'; // Import the external CSS module

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.headerContainer}>
      <div className={styles.logoSection}>
        <img src={VTMLogo} alt="VTMERCH Logo" className={styles.logoImg} />
        <div className={styles.logoText}>
          <p>VTMERCH</p>
        </div>
      </div>

      <button className={styles.menuToggle} onClick={toggleMenu}>
        {isMenuOpen ? '✕' : '☰'}
      </button>

      <div className={`${styles.menuSection} ${isMenuOpen ? styles.mobileMenu : ''}`}>
        <nav>
          <ul className={styles.menu}>
            <li className={styles.menuItem}><a href="#">Home</a></li>
            <li className={styles.menuItem}><a href="#">Shop</a></li>
            <li className={styles.menuItem}><a href="#">About</a></li>
            <li className={styles.menuItem}><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
