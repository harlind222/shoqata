import React from 'react';
import './Contact.css';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(e.target.subject.value);
    const body = encodeURIComponent(
      `Emri: ${e.target.name.value}\nEmail: ${e.target.email.value}\n\nMesazhi:\n${e.target.message.value}`
    );
    window.location.href = `mailto:h.arlind222@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contact-page">
      <section className="hero">
        <h1>KONTAKTONI</h1>
      </section>

      <section className="contact-info">
        <div className="contact-details">
          <h2>Informacion Kontakti</h2>
          <p>
            <strong>TELEFONI:</strong> <a href="tel:+355697072755">+355 69 707 2755</a><br />
            <strong>ADRESA:</strong> Rruga Haxhi Hysen Dalli, Përballe Prokurorisë së Tiranës<br />
            <strong>EMAIL:</strong> <a href="mailto:h.arlind222@gmail.com">hoxha.gezim1951@gmail.comm</a><br />
          </p>
          <p>
            <strong>Ndiqni ne:</strong><br />
            <a href="https://www.facebook.com/profile.php?id=61564991512134" target="_blank" rel="noopener noreferrer">
              <FaFacebookF className="social-icon" /> Facebook
            </a><br />
            <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="social-icon" /> Instagram
            </a>
          </p>
        </div>

        <div className="contact-form">
          <h2>Na Kontaktoni</h2>
          <form onSubmit={handleSubmit}>
            <label>Emri juaj (e nevojshme)</label>
            <input type="text" name="name" required />

            <label>Email juaj (e nevojshme)</label>
            <input type="email" name="email" required />

            <label>Subjekti</label>
            <input type="text" name="subject" />

            <label>Mesazhi juaj (e nevojshme)</label>
            <textarea name="message" rows="5" required></textarea>

            <button type="submit">Paraqisni</button>
          </form>
        </div>
      </section>

      <section className="contact-extra">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3162.173057434068!2d19.810597!3d41.3329228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135031096c166c47%3A0xa8cc1e47d303efae!2sProsecutor%27s%20Office%20in%20Tirana!5e0!3m2!1sen!2sus!4v1692091803010!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            title="Our Location"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default Contact;
