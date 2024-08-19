import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/images/logo.png'; // Sigurohuni që rruga e logos është e saktë

function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="logo-container">
          <img src={logo} alt="Impact Collision Analysis Logo" className="logo" />
          <Link to="/" className="brand-name">Shoqata Kombëtare në Ndihmë të Aksidentuarve</Link>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/whatwedo">ÇFARË BËJMË</Link>
          </li>
          <li>
            <Link to="/howwedoit">SI TA BËJMË</Link>
          </li>
          <li>
            <Link to="/theteam">EKIPI</Link>
          </li>
          <li>
            <Link to="/contact">KONTAKTI</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
