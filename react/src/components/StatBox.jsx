import React from 'react';

export default function StatBox({ icon, label, value, change, variant = 'default', onClick, className = '' }) {
  const variantClasses = {
    default: '',
    primary: 'primary',
    secondary: 'secondary'
  };

  return (
    <div
      className={`stat-box ${variantClasses[variant] || ''} ${className}`.trim()}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {icon && <div className="stat-icon">{icon}</div>}
      {label && <div className="stat-label">{label}</div>}
      <div className="stat-value">{value}</div>
      {change && <div className="stat-change">{change}</div>}
    </div>
  );
}
