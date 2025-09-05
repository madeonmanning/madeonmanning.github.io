
import React from 'react';
import './ImageGalleryModal.css';

const ImageGalleryModal = ({ images, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>X</button>
        <div className="image-grid">
          {images.map((image, index) => (
            <div key={index} className="grid-item">
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageGalleryModal;
