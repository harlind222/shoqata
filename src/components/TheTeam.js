import React from 'react';
import './TheTeam.css'; 
import teamMembers from '../assets/images/data/teamMembers.json';
import Team1 from '../assets/images/team1.jpg';
import Team2 from '../assets/images/team2.jpg';
import Team3 from '../assets/images/team3.jpg';

function TheTeam() {
  return (
    <div className="the-team">
      <section className="team-intro">
        <h1>EKIPI JONË</h1>
        <p>
          "Shoqata Kombëtare në Ndihmë të Aksidentuarve" ofron mbështetje dhe ekspertizë për viktimat e aksidenteve, duke ofruar shërbime për rindërtimin e aksidenteve dhe këshillim ligjor. Me një ekip të kualifikuar, synojmë të lehtësojmë procesin e rikuperimit dhe të përmirësojmë sigurinë rrugore në Shqipëri.
        </p>
      </section>

      <section className="team-members">
        <h2>EKSPERTËT E AKSIDENTEVE</h2>
        <div className="member-grid">
          {teamMembers.senior.map((member, index) => (
            <div className="member-item" key={member.id}>
              <img 
                src={index === 0 ? Team1 : Team2} // First member uses Team1, second uses Team2
                alt={`Team Member ${index + 1}`} 
              />
              <h3>{member.name}</h3>
              <p>{member.position}</p>
              <p>{member.bio}</p>
              <div className="contact-info">
                <p>
                  <span className="icon">📧</span>
                  <a href={`mailto:${member.email}`}>{member.email}</a>
                </p>
                <p>
                  <span className="icon">📞</span>
                  <a href={`tel:${member.phone}`}>{member.phone}</a>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Uncomment the sections below if you have additional members */}
        {/* <h2>BASHKËPUNIM RIKONSTRUKSIONISTË</h2>
        <div className="member-grid">
          {teamMembers.associates.map(member => (
            <div className="member-item" key={member.id}>
              <img src={Team2} alt="Team Member 1" />
              <h3>{member.name}</h3>
              <p>{member.position}</p>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>
      
      <section className="administrative">
        <h2>ADMINISTRATIVE</h2>
        <div className="member-grid">
          {teamMembers.administrative.map(member => (
            <div className="member-item" key={member.id}>
              <img src={Team3} alt="Team Member 1" />
              <h3>{member.name}</h3>
              <p>{member.position}</p>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>
      </section> */}
      </section>

      <section className="quote-section">
        <blockquote>
          "EKSPERTËT E KUALIFIKUAR"
        </blockquote>
      </section>
    </div>
  );
}

export default TheTeam;
