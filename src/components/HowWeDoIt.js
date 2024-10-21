import React from 'react';
import './HowWeDoIt.css'; 
import vehicleInspections from '../assets/images/photo1.jpg';
import dataRetrieval from '../assets/images/photo2.jpg';
import commercialVehicle from '../assets/images/photo3.jpg';
import siteProcessing from '../assets/images/photo4.jpg';
import forensicMapping from '../assets/images/photo5.jpg';
import speedCalculations from '../assets/images/photo6.jpg';
import kutiazeze from '../assets/images/photo7.jpg';
import crash from '../assets/images/photo8.jpg';

function HowWeDoIt() {
  return (
    <div className="how-we-do-it">
      <section className="hero">
        <h1>SI E BËJMË?</h1>
        <p>
        Me përvojë të thellë në hetimin dhe rindërtimin e aksidenteve rrugore, SH.K.N.N.T.A është e përgatitur të ofrojë asistencë të plotë në çdo aspekt të këtij procesi kompleks. Ne e kuptojmë që çdo aksident është i veçantë dhe kërkon një qasje të personalizuar nga ekspertët tanë. Nëpërmjet metodave të avancuara të rindërtimit, ne punojmë për të zbuluar faktet e sakta dhe për të siguruar që klientët tanë të marrin një analizë të detajuar dhe profesionale për secilin rast.
        </p>
      </section>

      <section className="methodology">
        <div>
          <h2>METODOLOGJIA E RINDËRTIMIT TË AKSIDENTIT</h2>
          <p>
          Me një gamë të gjerë eksperience në fushat integrale të hetimit dhe rindërtimit të aksidenteve rrugore, SH.K.N.N.T.A është plotësisht e pajisur për të ndihmuar në të gjitha aspektet e hetimit të aksidentit dhe procesit të rindërtimit. Ne e kuptojmë se çdo incident është unik dhe kërkon ndihmë nga ekspertët për rindërtim në mënyrë që të përcaktojmë se cilat metoda duhet të zbatohen për të identifikuar faktet për secilin prej klientëve tanë.
          </p>
        </div>
      </section>

      {/* <section className="methodology-overview">
        <h2>PËRMBLEDHJE E METODOLOGJISË</h2>
        <div className="overview-grid">
          <div className="overview-item">
            <img src={vehicleInspections} alt="Vehicle Inspections" />
            <h3>INSPEKTIMET E MJETEVE</h3>
            <p>Inspektime të detajuara për të përcaktuar gjendjen teknike dhe defektet e mundshme të mjeteve.</p>
          </div>
          <div className="overview-item">
            <img src={dataRetrieval} alt="Data Retrieval and Analysis" />
            <h3>MARRA E TË DHËNAVE DHE ANALIZAVE </h3>
            <p>Mbledhja dhe analizimi i të dhënave nga kutitë e zeza dhe pajisjet e tjera për të rindërtuar aksidentin.</p>
          </div>
          <div className="overview-item">
            <img src={commercialVehicle} alt="Commercial Vehicle Inspections" />
            <h3>INSPEKTIMET E MJETEVE KOMERCIALE</h3>
            <p>Inspektime të specializuara për mjete tregtare për të siguruar që ato janë në përputhje me standardet e sigurisë.</p>
          </div>
          <div className="overview-item">
            <img src={siteProcessing} alt="Site Processing" />
            <h3>PËRPUNIMI</h3>
            <p>Përpunimi i vendngjarjes për të mbledhur provat e nevojshme për hetimin e aksidentit.</p>
          </div>
          <div className="overview-item">
            <img src={forensicMapping} alt="Forensic Mapping" />
            <h3>HARTIMI FORENZIKE</h3>
            <p>Hartimi i vendndodhjes së aksidentit duke përdorur teknologji të avancuar për të dokumentuar detajet e sakta.</p>
          </div>
          <div className="overview-item">
            <img src={speedCalculations} alt="Speed Calculations" />
            <h3>LLOGARITJET E SHPEJTËSISË</h3>
            <p>Llogaritje të detajuara të shpejtësisë për të përcaktuar faktorët që kanë kontribuar në aksident.</p>
          </div>
           <div className="overview-item">
            <img src={kutiazeze} alt="Kutia Zeze" />
            <h3>INSPEKTIMI I KUTISE SE ZEZE</h3>
            <p>Analiza e të dhënave nga kutitë e zeza për të rindërtuar sekuencat e ngjarjeve para aksidentit.</p>
          </div>
          <div className="overview-item">
            <img src={crash} alt="3D CRASH" />
            <h3>SKANIM 3D DHE MODELE 3D</h3>
            <p>Përdorimi i skanimit dhe modeleve 3D siguron një vizualizim të skenës dhe/ose automjeteve në mënyrë që të përcjellë një kuptim më të thjeshtë të koncepteve komplekse. ICA përdor teknologjinë më të fundit për të krijuar modele 3D të skenave dhe automjeteve me rezolucion të lartë, ultra-realiste.</p>
          </div>
        </div>
      </section> */}


      
      <section className="quote-section">
        <blockquote>
          "EDUKIMI INXHINIERIK"
        </blockquote>
      </section>
    </div>
  );
}

export default HowWeDoIt;
