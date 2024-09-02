import React from 'react';
import './WhatWeDo.css'; 
import rapidResponse from '../assets/images/image1.jpg';
import consultation from '../assets/images/image2.jpg';
import crashReconstruction from '../assets/images/image3.jpg';
import expertTestimony from '../assets/images/image4.jpg';
import cover from '../assets/images/photo4.jpg';

function WhatWeDo() {
  return (
    <div className="what-we-do">
      <section className="hero">
        <h1>ÇFARË BËJMË</h1>
        <p>
          Kombinimi i fuqishëm i përvojës shumëvjeçare të zbatimit të ligjit, 
          trajnimi i avancuar i rindërtimit dhe edukimi inxhinierik na bën një 
          burim të vlefshëm dhe të besueshëm për të gjitha nevojat tuaja të rindërtimit të aksidenteve.
        </p>
      </section>

      <section className="collision-reconstruction">
        <div className="text-content">
          <h2>Rindërtimi i Aksidenteve</h2>
          <p>
            Ekipi ynë i ekspertëve është i specializuar në hetimin dhe rindërtimin e aksidenteve të trafikut, 
            duke u fokusuar në këto fusha kryesore: inspektimet në terren, inspektimet e automjeteve, 
            marrja e të dhënave dhe analiza. Bazuar në urgjencën dhe nevojat tuaja specifike, 
            ne përcaktojmë se çfarë pajisje, teknika, ekzaminime dhe teste vlefshmërie të përdoren 
            gjatë procesit të rindërtimit të përplasjes. Këto mjete janë të përditësuara vazhdimisht 
            për të ofruar shërbimin më cilësor që ju nevojitet, të gjitha në një vend.
          </p>
        </div>
        <div className="image-content">
          <img src={cover} alt="Rindërtimi i Përplasjeve" />
        </div>
      </section>

      <section className="services-overview">
        <h2>PËRMBLEDHJE E SHËRBIMEVE</h2>
        <div className="services-grid">
          <div className="service-item">
            <img src={rapidResponse} alt="Përgjigje e Shpejtë" />
            <h3>PËRGJIGJE E SHPEJTË</h3>
          </div>
          <div className="service-item">
            <img src={consultation} alt="Konsultim" />
            <h3>KONSULTIM</h3>
          </div>
          <div className="service-item">
            <img src={crashReconstruction} alt="Rindërtim i Aksidentit" />
            <h3>RINDËRTIMI I AKSIDENTIT</h3>
          </div>
          <div className="service-item">
            <img src={expertTestimony} alt="Dëshmi Eksperti" />
            <h3>DËSHMI EKSPERTI</h3>
          </div>
        </div>
        <section className="capabilities">
          <h3>AFTËSITË TONA</h3>
          <div className="capabilities-grid">
            <div className="capability-item">
              <i className="fas fa-bolt"></i>
              <h4>Reagimi i Shpejtë</h4>
              <p>Ne përgjigjemi shpejt dhe me efikasitet për çdo emergjencë.</p>
            </div>
            <div className="capability-item">
              <i className="fas fa-tools"></i>
              <h4>Përpunimi i Faqes</h4>
              <p>Pajisjet dhe teknikat më të mira për përpunimin e vendeve të ngjarjes.</p>
            </div>
            <div className="capability-item">
              <i className="fas fa-shield-alt"></i>
              <h4>Ruajtja e Dëshmive</h4>
              <p>Sigurimi dhe ruajtja e provave është prioriteti ynë kryesor.</p>
            </div>
            <div className="capability-item">
              <i className="fas fa-car-crash"></i>
              <h4>Rindërtimi i Përplasjes</h4>
              <p>Rindërtojmë përplasjet për të përcaktuar shkakun dhe përgjegjësinë.</p>
            </div>
            <div className="capability-item">
              <i className="fas fa-database"></i>
              <h4>Marrja e të Dhënave</h4>
              <p>Analizë e thelluar dhe e saktë e të dhënave të aksidentit.</p>
            </div>
            <div className="capability-item">
              <i className="fas fa-gavel"></i>
              <h4>Dëshmia e Ekspertit</h4>
              <p>Dëshmi profesionale dhe të besueshme në gjykatë.</p>
            </div>
          </div>
        </section>
      </section>

      {/* Remove footer and add quote section */}
      <section className="quote-section">
        <blockquote>
          "Ekspertiza dhe përkushtimi ynë janë të bazuara në vite përvojë dhe përpjekje për drejtësi."
        </blockquote>
      </section>
    </div>
  );
}

export default WhatWeDo;
