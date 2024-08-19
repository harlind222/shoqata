import React from 'react';
import './TheTeam.css'; 
import teamMembers from '../assets/images/data/teamMembers.json';
import Team1 from '../assets/images/team1.jpg';
import Team2 from '../assets/images/team2.jpg';
import Team3 from '../assets/images/team3.jpg';
// import Team4 from '../assets/images/team4.jpg';

function TheTeam() {
  return (
    <div className="the-team">
      <section className="team-intro">
        <h1>EKIPI JONË</h1>
        <p>
        E themeluar mbi 10 vjet më parë, firma përbëhet nga Rindërtues dhe Bashkëpunëtorë të Lartë, të gjithë ish-oficerë të zbatimit të ligjit që i shërbyen Gjeorgjisë dhe Tenesit. Rindërtuesit tanë të vjetër kanë dallimin e shërbimit në njësinë e rindërtimit të vrasjeve me automjete të Gjeorgjisë, e njohur si Ekipi i Specializuar i Rindërtimit të Përplasjeve (SCRT).
        </p>
      </section>

      <section className="team-members">
        <h2>RIKONSTRUKSIONISTËT E LARTË</h2>
        <div className="member-grid">
          {teamMembers.senior.map(member => (
            <div className="member-item" key={member.id}>
             <img src={Team1} alt="Team Member 1" />
              <h3>{member.name}</h3>
              <p>{member.position}</p>
              <p>{member.bio}</p>
              {/* <button>Read Bio</button> */}
            </div>
          ))}
        </div>

        <h2>BASHKËPUNIM RIKONSTRUKSIONISTË</h2>
        <div className="member-grid">
          {teamMembers.associates.map(member => (
            <div className="member-item" key={member.id}>
                       <img src={Team2} alt="Team Member 1" />
              <h3>{member.name}</h3>
              <p>{member.position}</p>
              <p>{member.bio}</p>
              {/* <button>Read Bio</button> */}
            </div>
          ))}
        </div>
      </section>

      <section className="administrative">
        <h2>ADMINISTRATIVE</h2>
        <div className="member-grid">
          {teamMembers.administrative.map(member => (
            <div className="member-item" key={member.id}>
              <img src={Team3} alt="Team Member 1" />
              <h3>{member.name}</h3>
              <p>{member.position}</p>
              <p>{member.bio}</p>
              {/* <button>Read Bio</button> */}
            </div>
          ))}
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

export default TheTeam;
