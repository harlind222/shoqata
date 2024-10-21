import React, { useState } from 'react';
import './ServiceDetailModal.css';

function ServiceDetailModal({ service }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden'; // Disable scrolling on body
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto'; // Enable scrolling on body
  };

  return (
    <>
      <button className="learn-more" onClick={openModal}>Mësoni më shumë</button>

      {isOpen && (
        <div className="modal-overlay show" onClick={closeModal}>
          <div className="modal" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>{service.title}</h2>
              <span className="close" onClick={closeModal}>&times;</span>
            </div>
            <div className="modal-body">
              <img src={service.image} alt={service.title} style={{ width: '100%', borderRadius: '8px' }} />
              <p>{service.description}</p>
            </div>
            <div className="modal-footer">
              <button className="learn-more" onClick={closeModal}>Mbyll</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ServiceDetailModal;
