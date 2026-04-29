/**
 * Modern Premium Logo Component for CSE Library
 * Tech-style with gradient colors and responsive design
 * Suitable for dark and light backgrounds
 */

export default function Logo({ size = 48, animated = true, variant = 'gradient' }) {
  const sizeMap = {
    sm: 32,
    md: 48,
    lg: 64,
    xl: 80
  };

  const actualSize = typeof size === 'string' ? sizeMap[size] : size;

  // Gradient variants for light and dark backgrounds
  const gradients = {
    gradient: 'url(#logoGradient)',
    dark: 'url(#logoDarkGradient)',
    light: 'url(#logoLightGradient)'
  };

  const animationStyle = animated ? {
    animation: 'logoFloat 6s ease-in-out infinite'
  } : {};

  return (
    <>
      <style>{`
        @keyframes logoFloat {
          0%, 100% { transform: translateY(0px) rotateZ(0deg); }
          50% { transform: translateY(-8px) rotateZ(2deg); }
        }
        @keyframes logoPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.85; }
        }
        .logo-container {
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
      `}</style>

      <svg
        width={actualSize}
        height={actualSize}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="logo-container"
        style={animationStyle}
      >
        {/* Define Gradients */}
        <defs>
          {/* Main gradient: Blue to Purple */}
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="50%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>

          {/* Dark background gradient */}
          <linearGradient id="logoDarkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60A5FA" />
            <stop offset="50%" stopColor="#22D3EE" />
            <stop offset="100%" stopColor="#A78BFA" />
          </linearGradient>

          {/* Light background gradient */}
          <linearGradient id="logoLightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E40AF" />
            <stop offset="50%" stopColor="#0E7490" />
            <stop offset="100%" stopColor="#6D28D9" />
          </linearGradient>

          {/* Shadow filter */}
          <filter id="logoShadow">
            <feDropShadow dx="0" dy="2" stdDeviation="3" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* Background Circle - Subtle glow */}
        <circle cx="32" cy="32" r="31" fill={gradients[variant]} opacity="0.08" />

        {/* Main Hexagon Shape */}
        <g filter="url(#logoShadow)">
          {/* Outer hexagon border */}
          <path
            d="M32 6 L52 16 L52 36 L32 46 L12 36 L12 16 Z"
            fill="none"
            stroke={gradients[variant]}
            strokeWidth="1.5"
            opacity="0.3"
          />

          {/* Hexagon body - main fill */}
          <path
            d="M32 8 L50 17 L50 35 L32 44 L14 35 L14 17 Z"
            fill={gradients[variant]}
            opacity="0.95"
          />
        </g>

        {/* Inner Circuit Lines - Knowledge Tech Symbol */}
        <g strokeLinecap="round" strokeLinejoin="round" stroke="white" strokeWidth="1.2" opacity="0.9">
          {/* Top horizontal line */}
          <line x1="20" y1="24" x2="44" y2="24" />

          {/* Vertical connecting line */}
          <line x1="32" y1="24" x2="32" y2="36" />

          {/* Bottom connections */}
          <line x1="20" y1="36" x2="28" y2="36" />
          <line x1="36" y1="36" x2="44" y2="36" />

          {/* Left diagonal */}
          <line x1="18" y1="20" x2="24" y2="26" />

          {/* Right diagonal */}
          <line x1="46" y1="20" x2="40" y2="26" />
        </g>

        {/* Center Tech Node - Knowledge point */}
        <g>
          {/* Outer circle ring */}
          <circle cx="32" cy="30" r="4" fill="none" stroke="white" strokeWidth="1" opacity="0.6" />

          {/* Inner tech node */}
          <circle cx="32" cy="30" r="2.5" fill="white" opacity="0.95" />

          {/* Pulse ring effect */}
          <circle cx="32" cy="30" r="5.5" fill="none" stroke="white" strokeWidth="0.8" opacity="0.3" />
        </g>

        {/* Top-left knowledge accent */}
        <g opacity="0.8">
          <circle cx="20" cy="18" r="1.5" fill="white" />
        </g>

        {/* Top-right accent */}
        <g opacity="0.8">
          <circle cx="44" cy="18" r="1.5" fill="white" />
        </g>

        {/* Shine/Highlight effect */}
        <ellipse cx="26" cy="20" rx="6" ry="5" fill="white" opacity="0.12" />
      </svg>
    </>
  );
}
