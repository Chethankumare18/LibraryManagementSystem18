import React from 'react';

export default function Topbar({ title, subtitle, onMenuClick, children, actions }) {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <button className="topbar-toggle" onClick={onMenuClick}>
          <i className="fas fa-bars"></i>
        </button>
        <div>
          <div className="topbar-title">{title}</div>
          {subtitle && <div className="topbar-subtitle">{subtitle}</div>}
        </div>
      </div>
      <div className="topbar-right">
        {actions && <div className="topbar-actions">{actions}</div>}
        {children}
      </div>
    </div>
  );
}
