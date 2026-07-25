import React, { useEffect } from 'react';
import './Modal.css';

export default function Modal({ isOpen, onClose, modalId, title, titleId, closeAriaLabel, children }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className={`kp-ov ${isOpen ? 'on' : ''}`}
      id={`m-${modalId}`}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
      aria-labelledby={titleId}
    >
      <div className="kp-md">
        <div className="kp-hd">
          <h3 id={titleId}>{title}</h3>
          <button className="kp-x" onClick={onClose} aria-label={closeAriaLabel || 'ปิดป็อปอัพ'}>
            ✕
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
