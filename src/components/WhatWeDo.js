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
        <h1>ÇFARË BËJMË?</h1>
        <p>
        Kombinimi i pasur i përvojës shumëvjeçare në zbatimin e ligjit, trajnimeve të specializuara në rindërtim dhe njohurive të avancuara inxhinierike na bën një partner të besueshëm dhe të çmuar për çdo nevojë tuajën në rindërtimin e aksidenteve. Ofrojmë mundësi në marrjen e dëmshperblimit në rast aksidenti.
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
            <p>Reagim i menjëhershëm dhe i efektshëm për të gjitha situatat emergjente.</p>
          </div>
          <div className="service-item">
            <img src={consultation} alt="Konsultim" />
            <h3>KONSULTIM</h3>
            <p>Ekspertizë e lartë dhe këshilla strategjike për çështje të komplikuara.</p>
          </div>
          <div className="service-item">
            <img src={crashReconstruction} alt="Rindërtim i Aksidentit" />
            <h3>RINDËRTIMI I AKSIDENTIT</h3>
            <p>Rindërtim i saktë dhe i detajuar për të përcaktuar shkakun e aksidentit.</p>
          </div>
          <div className="service-item">
            <img src={expertTestimony} alt="Dëshmi Eksperti" />
            <h3>DËMSHPËRBLIME NË RASTE AKSIDENTI</h3>
            <p>Me përvoje 20-vjecare në fushën e sigurimeve.</p>
          </div>
        </div>
      </section>

      <section className="quote-section">
        <blockquote>
          "Ekspertiza dhe përkushtimi ynë janë të bazuara në vite përvojë dhe përpjekje për drejtësi."
        </blockquote>
      </section>
    </div>
  );
}

export default WhatWeDo;
