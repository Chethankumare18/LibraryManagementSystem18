import React from 'react';

export default function Badge({ text, type = 'primary', icon, className = '' }) {
  const badgeClasses = {
    primary: 'badge-primary',
    success: 'badge-success',
    warning: 'badge-warning',
    error: 'badge-error',
    info: 'badge-info'
  };

  return (
    <span className={`badge ${badgeClasses[type] || 'badge-primary'} ${className}`.trim()}>
      {icon && <i className={icon} />}
      {text}
    </span>
  );
}

export function Pill({ text, type = 'ok' }) {
  return <span className={`pill pill-${type}`}>{text}</span>;
}
