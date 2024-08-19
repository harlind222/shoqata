import React from 'react';
import './Contact.css';
// import contactImage from '../assets/images/contactImage.jpg'; // Vendosni këtu foton që dëshironi për sfondin e pjesës "Get in Touch"

function Contact() {
  return (
    <div className="contact-page">
      <section className="hero">
        <h1>KONTAKTONI</h1>
      </section>

      <section className="contact-info">
        <div className="contact-details">
          {/* <img src={contactImage} alt="Contact Us" /> */}
          <p>
            <strong>TELEFONI:</strong> <a href="tel:+355 69 707 2755">+355 69 707 2755</a><br />
            <strong>FAX:</strong> 706.965.2747<br />
            <strong>NA GJENI: </strong> TIRANE, ALBANIA
          </p>
        </div>
        <div className="contact-form">
          <form>
            <label>Emri juaj </label>
            <input type="text" required />

            <label>Email juaj (required)</label>
            <input type="email" required />

            <label>Subjekt</label>
            <input type="text" />

            <label>Mesazhi yt</label>
            <textarea rows="5" required></textarea>

            {/* <div className="captcha">
              <label>Please verify that you are human *</label>
              <div className="captcha-box"> */}
                {/* Shtoni kodin e captcha këtu */}
              {/* </div>
            </div> */}

            <button type="submit">Paraqisni</button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <nav>
        <a href="#whatwedo">Çfarë bëjmë ne</a>
          <a href="#theteam">Ekipi</a>
          <a href="#howwedoit">Si ta bëjmë </a>
          <a href="#contact">Kontakti</a>
        </nav>
      </footer>
    </div>
  );
}

export default Contact;
