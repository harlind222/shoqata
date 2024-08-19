import React from 'react';
import './HowWeDoIt.css'; 
// import coverImage from '../assets/images/cover3.jpg'; 
import vehicleInspections from '../assets/images/photo1.jpg';
import dataRetrieval from '../assets/images/photo2.jpg';
import commercialVehicle from '../assets/images/photo3.jpg';
import siteProcessing from '../assets/images/photo4.jpg';
import forensicMapping from '../assets/images/photo5.jpg';
import speedCalculations from '../assets/images/photo6.jpg';

function HowWeDoIt() {
  return (
    <div className="how-we-do-it">
      <section className="hero">
        <h1>SI TA BËJMË</h1>
      </section>

      <section className="methodology">
        <div>
          <h2>METODOLOGJIA E RINDËRTIMIT TË KOLIZIONIT</h2>
          <p>
          Me një gamë të gjerë eksperience në fushat integrale të hetimit dhe rindërtimit të aksidenteve rrugore, ICA është plotësisht e pajisur për të ndihmuar në të gjitha aspektet e hetimit të aksidentit dhe procesit të rindërtimit. Ne e kuptojmë se çdo incident është unik dhe kërkon ndihmë nga ekspertët për rindërtim në mënyrë që të përcaktojmë se cilat metoda duhet të zbatohen për të identifikuar faktet për secilin prej klientëve tanë.
          </p>
        </div>
      </section>

      <section className="methodology-overview">
        <h2>PËRMBLEDHJE E METODOLOGJISË</h2>
        <div className="overview-grid">
          <div className="overview-item">
            <img src={vehicleInspections} alt="Vehicle Inspections" />
            <h3>KONTROLLET E MJETEVE</h3>
          </div>
          <div className="overview-item">
            <img src={dataRetrieval} alt="Data Retrieval and Analysis" />
            <h3>RRITJA DHE ANALIZA E TË DHËNAVE</h3>
          </div>
          <div className="overview-item">
            <img src={commercialVehicle} alt="Commercial Vehicle Inspections" />
            <h3>INSPEKTIMET E MJETEVE TREGTARE</h3>
          </div>
          <div className="overview-item">
            <img src={siteProcessing} alt="Site Processing" />
            <h3>PËRPUNIMI I FAQET</h3>
          </div>
          <div className="overview-item">
            <img src={forensicMapping} alt="Forensic Mapping" />
            <h3>HARTAT MJEKËSORE</h3>
          </div>
          <div className="overview-item">
            <img src={speedCalculations} alt="Speed Calculations" />
            <h3>LLOGARITJET E SHPEJTËSISË</h3>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <h2>PERGJIGJE 24 ORE</h2>
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

export default HowWeDoIt;
