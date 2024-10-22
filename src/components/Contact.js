import React, { useState } from 'react';
import './Contact.css';
import { FaFacebookF, FaInstagram, FaTiktok, FaMapMarkerAlt } from 'react-icons/fa'; 
import emailjs from 'emailjs-com'; // Import EmailJS

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [emailStatus, setEmailStatus] = useState(null); // To handle email status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Define your EmailJS parameters
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    // Replace with your actual EmailJS service ID, template ID, and user ID
    emailjs.send('service_u4iiu8q', 'template_hxy61dq', {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    }, '0eP8id8oiKr0YqaEA') // Replace YOUR_USER_ID with your EmailJS public API key
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setEmailStatus('success'); // Set success state
    })
    .catch((err) => {
      console.error('FAILED...', err); // Log detailed error in console
      setEmailStatus('failed'); // Set failure state
    });

  
  };

  return (
    <div className="contact-page">
      <section className="hero">
        <h1>Kontakti</h1>
      </section>

      <section className="form-and-details">
        <div className="contact-form">
          <h2>Na Kontaktoni</h2>
          <form onSubmit={handleSubmit}>
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

            <button type="submit">Dërgo</button>

            {/* Display success or failure message */}
            {emailStatus === 'success' && <p>Mesazhi u dërgua me sukses!</p>}
            {emailStatus === 'failed' && <p>Gabim gjatë dërgimit të mesazhit. Provoni përsëri.</p>}
          </form>
        </div>

        <div className="contact-details">
          <h2>Informacione Kontakti</h2>
          <p><a href="tel:+355696307731">📞 +355 69 630 7731</a></p>
          <p>✉️ <a href="mailto:h.arlind222@gmail.com">hoxha.gezim1951@gmail.com</a></p>
          <p>
        {/* Location with icon and link */}
        <FaMapMarkerAlt /> Rruga Haxhi Hysen Dalliu, Përballë me Prokurorinë e Tiranës
      </p>
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
