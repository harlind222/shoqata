import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/images/logo.png';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <nav className="navbar">
        {/* Menu toggle only applies to the menu icon */}
        <div className="menu-left" onClick={toggleMenu}>
          <FaBars className="menu-icon" />
          <span className="menu-text">Menu</span>
        </div>

        {/* Remove onClick from the logo container */}
        <div className="logo-container">
          <Link to="/" className="brand-name">
            <img src={logo} alt="Logo" className="logo" />
            Shoqata Kombëtare në Ndihmë të Aksidentuarve
          </Link>
        </div>

        <div className="right-menu">
          <a href="tel:+355 69 630 7731" className="call-now">
            <FaPhone className="call-now-icon" />
            Telefononi
          </a>
          <Link to="/contact" className="contact-link">Kontakti</Link>
        </div>
      </nav>

      {/* Mini Menu */}
      <div className={`mini-menu ${isOpen ? 'open' : ''}`}>
        <FaTimes className="close-icon" onClick={toggleMenu} />
        <ul>
          <li>
            <Link to="/whatwedo" className="nav-item" onClick={toggleMenu}>ÇFARË BËJMË?</Link>
          </li>
          <li>
            <Link to="/howwedoit" className="nav-item" onClick={toggleMenu}>SI E BËJMË?</Link>
          </li>
          <li>
            <Link to="/theteam" className="nav-item" onClick={toggleMenu}>EKIPI</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
