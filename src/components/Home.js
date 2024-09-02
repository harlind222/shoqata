import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import service1 from '../assets/images/service1.jpg';
import service2 from '../assets/images/service2.jpg';
import service3 from '../assets/images/service3.jpg';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Ekip i Ekspertëve të Kualifikuar</h1>
        <p>Ekipi ynë i ekspertëve është i specializuar në hetimin dhe rindërtimin e aksidenteve të trafikut.</p>
        {/* <div className="buttons">
          <Link to="/whatwedo" className="primary-button">Shërbimet Tona</Link>
          <Link to="/howwedoit" className="secondary-button">Fushat e Ekspertizës</Link>
        </div> */}
      </section>

      <section className="services">
        <div className="service-item">
          <img src={service1} alt="Service 1" />
          <h3>SHËRBIME TË SHUMTA</h3>
          <p>Reagim i Shpejtë, Konsulencë, Rindërtim i plotë i Përplasjes, Dëshmi eksperti.</p>
          <button className="learn-more">Mësoni më shumë</button>
        </div>
        <div className="service-item">
          <img src={service2} alt="Service 2" />
          <h3>TEKNOLOGJI E AVANCUAR</h3>
          <p>Ne përdorim pajisjet, programet, proceset dhe teknikat më të fundit.</p>
          <button className="learn-more">Mësoni më shumë</button>
        </div>
        <div className="service-item">
          <img src={service3} alt="Service 3" />
          <h3>PËRVOJË E PASUR</h3>
          <p>Mbi 10 vjet përvojë, me një ekip rindërtues të lartë.</p>
          <button className="learn-more">Mësoni më shumë</button>
        </div>
      </section>

      <footer>
        <h2>Kontaktoni Ekspertët</h2>
        <nav>
          <Link to="/whatwedo">ÇFARË BËJMË NE</Link>
          <Link to="/theteam">EKIPI</Link>
          <Link to="/howwedoit">SI TA BËJMË</Link>
          <Link to="/contact">KONTAKTI</Link>
        </nav>
        <div className="social-icons">
          <a href="https://www.facebook.com/profile.php?id=61564991512134" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
        </div>
        <div className="copyright">
          Copyright © 2024 Shoqata Kombëtare në Ndihmë të Aksidentuarve
        </div>
      </footer>
    </div>
  );
}

export default Home;
