import React from 'react';

export default function Card({ children, className = '', hover = true, gradient = false, ...props }) {
  const baseClasses = `card ${hover ? '' : ''} ${gradient ? 'card-glass' : ''} ${className}`.trim();
  return (
    <div className={baseClasses} {...props}>
      {children}
    </div>
  );
}
