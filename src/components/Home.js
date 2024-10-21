import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'; 
import './Home.css';
import service1 from '../assets/images/service1.jpg';
import service2 from '../assets/images/service2.jpg';
import service3 from '../assets/images/service3.jpg';
import heroImage from '../assets/images/background2.jpg'; // Importo imazhin hero

const services = [
  {
    title: 'SHËRBIME TË SHPEJTA DHE EFIKASE',
    image: service1,
    description: 'Ne ofrojmë përgjigje të menjëhershme dhe veprim të shpejtë për të gjithë rastet e aksidenteve.',
  },
  {
    title: 'EKSPERTIZË E LARTË',
    image: service2,
    description: 'Ofrojmë mbrotje. Akte ekspertimi Autoteknike në të tre shkallët e gjyqësorit.',
  },
  {
    title: 'ANALIZA TË THELLUARA',
    image: service3,
    description: 'Ne përdorim teknologjinë më të fundit për të analizuar dhe rindërtuar aksidentet në mënyrë precize.',
  },
];

function Home() {
  return (
    <div className="home">
      <section 
        className="hero"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'left center',
        }}
      >
        <div className="hero-text">
          <h1>EKSPERT DHE AVOKAT MSC. TRANSPORT DR. GEZIM HOXHA</h1>
          <p>44 VJET EKSPERIENCË I AKSIDENTEVE RRUGORE</p>
        </div>
      </section>

      <section className="services">
        {services.map((service, index) => (
          <div className="service-item" key={service.title}>
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </section>

      <footer>
        <h2>Kontaktoni Ekspertët</h2>
        <nav>
          <a href="/whatwedo">ÇFARË BËJMË?</a>
          <a href="/theteam">EKIPI</a>
          <a href="/howwedoit">SI E BËJMË?</a>
          <a href="/contact">KONTAKTI</a>
        </nav>
        <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <FaTiktok />
          </a>
        </div>
        <div className="copyright">
          ©2024 Shoqata Kombëtare në Ndihmë të Aksidentuarve. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default Home;
