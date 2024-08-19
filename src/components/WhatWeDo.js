import React from 'react';
import './WhatWeDo.css'; // Ensure this file contains the correct styling
import rapidResponse from '../assets/images/image1.jpg';
import consultation from '../assets/images/image2.jpg';
import crashReconstruction from '../assets/images/image3.jpg';
import expertTestimony from '../assets/images/image4.jpg';
import cover from '../assets/images/cover.jpg';

function WhatWeDo() {
  return (
    <div className="what-we-do">
      <section className="hero">
        <h1>ÇFARË BËJMË</h1>
        <p>
        Kombinimi i fuqishëm i përvojës shumëvjeçare të zbatimit të ligjit, 
          trajnimi i avancuar i rindërtimit dhe edukimi inxhinierik na bën a 
          burim i vlefshëm dhe i besueshëm për të gjitha nevojat tuaja të rindërtimit të aksidenteve.
        </p>
      </section>

      <section className="collision-reconstruction">
        <div className="text-content">
          <h2>Rindërtimi i përplasjeve</h2>
          <p>
          Ekipi ynë i ekspertëve është i specializuar në hetimin dhe rindërtimin e trafikut 
            aksidentet, duke u fokusuar në këto fusha kryesore: inspektimet në terren, inspektimet e automjeteve, 
            marrja e të dhënave dhe analiza. Bazuar në urgjencën dhe nevojat tuaja specifike 
            situatë, ne përcaktojmë se çfarë pajisje, teknika, ekzaminime dhe vlefshmëri 
            testet për t'u përdorur gjatë procesit të rindërtimit të përplasjes. Këto mjete janë 
            përditësuar vazhdimisht për të ofruar shërbimin më cilësor që ju nevojitet, 
            te gjitha ne nje vend.
          </p>
        </div>
        <div className="image-content">
          {/* <img src={cover} alt="Cover" /> */}
        </div>
      </section>

      <section className="services-overview">
        <h2>PËRMBLEDHJE E SHËRBIMEVE</h2>
        <div className="services-grid">
          <div className="service-item">
            <img src={rapidResponse} alt="Rapid Response" />
            <h3>PËRGJIGJE E SHPEJTË</h3>
          </div>
          <div className="service-item">
            <img src={consultation} alt="Consultation" />
            <h3>KONSULTIMI</h3>
          </div>
          <div className="service-item">
            <img src={crashReconstruction} alt="Crash Reconstruction" />
            <h3>RINDËRTIMI I AKSIDENTIT</h3>
          </div>
          <div className="service-item">
            <img src={expertTestimony} alt="Expert Testimony" />
            <h3>DËSHMI EKSPERTI</h3>
          </div>
        </div>
        <div className="capabilities">
          <h3>AFTËSITË TONA</h3>
          <ul>
            <li>Reagimi i shpejtë</li>
            <li>Përpunimi i faqes</li>
            <li>Ruajtja e dëshmive</li>
            <li>Rindërtimi i përplasjes</li>
            <li>Marrja e të dhënave</li>
            <li>Hetimet e mashtrimit në sigurime</li>
            <li>Dëshmia e ekspertit</li>
          </ul>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <h2>Diskutoni rastin tuaj me ekspertët</h2>
          <p>
            Call <strong>+355 69 707 2755</strong> 
            {/* or <a href="shknnta@gmail.com">message us</a>. */}
          </p>
          <nav>
          <a href="#whatwedo">Çfarë bëjmë ne</a>
          <a href="#theteam">Ekipi</a>
          <a href="#howwedoit">Si ta bëjmë </a>
          <a href="#contact">Kontakti</a>
          </nav>
        </div>
      </footer>
    </div>
  );
}

export default WhatWeDo;
