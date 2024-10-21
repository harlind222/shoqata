import React, { useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'; 

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const createMailtoLink = () => {
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    return `mailto:h.arlind222@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="contact-page">
      <section className="hero">
        <h1>Kontakt</h1>
      </section>

      <section className="form-and-details">
        <div className="contact-form">
          <h2>Na Kontaktoni</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <label>Emri juaj*</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label>Email juaj*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label>Mesazhi juaj*</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <a href={createMailtoLink()}>
              <button type="button">Dërgo</button>
            </a>
          </form>
        </div>

        <div className="contact-details">
          <h2>Informacione Kontakti</h2>
          <p>📞 +355 69 630 7731</p>
          <p>✉️ <a href="mailto:h.arlind222@gmail.com">hoxha.gezim1951@gmail.com</a></p>
          {/* <h3>Ndiqni Ne</h3> */}
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
        </div>
      </section>

      <section className="map-section">
        <h2>Na Gjeni Këtu</h2>
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
