import React from 'react';
import './Home.css'; // Importo stilimet specifike
import service1 from '../assets/images/service1.jpg';
import service2 from '../assets/images/service2.jpg';
import service3 from '../assets/images/service3.jpg';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>KUR JU DUHET EKSPERTIZË E KUALIFIKUR</h1>
        <p>Ekipi ynë i ekspertëve është i specializuar në hetimin dhe rindërtimin e aksidenteve të trafikut.</p>
        {/* <div className="buttons">
          <button>Our Services</button>
          <button>Areas of Expertise</button>
        </div> */}
      </section>
      <section className="services">
        <div className="service-item">
          <img src={service1} alt="Service 1" />
          <h3>SHUMËLLOJSHMËRI SHËRBIMESH</h3>
          <p>Reagim i Shpejtë, Konsulencë, Rindërtim i plotë i Përplasjes, Dëshmi eksperti.</p>
          <button>Mësoni më shumë</button>
        </div>
        <div className="service-item">
          <img src={service2} alt="Service 2" />
          <h3>MJETET E SAKTA</h3>
          <p>Ne përdorim pajisjet, programet, proceset dhe teknikat më të fundit.</p>
          <button>Mësoni më shumë</button>
        </div>
        <div className="service-item">
          <img src={service3} alt="Service 3" />
          <h3>EKPERIENCE E LARTË</h3>
          <p>Mbi 10 vjet përvojë, me një ekip rindërtues të lartë.</p>
          <button>Mësoni më shumë</button>
        </div>
      </section>
      <footer>
        <h2>Sfondi i Zbatimit të Ligjit</h2>
        <div className="arrows">
          {/* <span>&lt;</span> Shigjeta majtas
          <span>&gt;</span> Shigjeta djathtas */}
        </div>
        <nav>
          <a href="#whatwedo">Çfarë bëjmë ne</a>
          <a href="#theteam">Ekipi</a>
          <a href="#howwedoit">Si ta bëjmë </a>
          <a href="#contact">Kontakti</a>
        </nav>
        <div className="copyright">
          Copyright © 2024 Shoqata Kombëtare në Ndihmë të Aksidentuarve 
          {/* | <a href="#">Sitemap</a> | <a href="#">Website Design</a> by Riverworks Marketing */}
        </div>
      </footer>
    </div>
  );
}

export default Home;
