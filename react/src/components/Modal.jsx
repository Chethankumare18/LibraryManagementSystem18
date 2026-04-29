import React from 'react';

export default function Modal({ title, open, onClose, children, size = 'md', showFooter = false, footer }) {
  if (!open) return null;

  const sizeMap = {
    sm: '400px',
    md: '560px',
    lg: '700px',
    xl: '900px'
  };

  return (
    <div className="modal-overlay open" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal-box" style={{ maxWidth: sizeMap[size] }}>
        <div className="modal-content">
          {title && <div className="modal-title">{title}</div>}
          {children}
        </div>
        {showFooter && footer && (
          <div className="modal-footer">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
