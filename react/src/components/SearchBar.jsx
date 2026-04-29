import React from 'react';

export default function SearchBar({ value, onChange, placeholder = 'Search...', onSearch, className = '' }) {
  return (
    <div style={{ position: 'relative' }}>
      <input
        type="text"
        className={`input ${className}`.trim()}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && onSearch) onSearch(value);
        }}
      />
      <i
        className="fas fa-search"
        style={{
          position: 'absolute',
          right: '1rem',
          top: '50%',
          transform: 'translateY(-50%)',
          color: 'var(--text-tertiary)',
          pointerEvents: 'none'
        }}
      />
    </div>
  );
}
