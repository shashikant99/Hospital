import React from 'react';

const Logo = ({ className = 'w-10 h-10', ...props }) => {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Background Circle */}
      <circle cx="100" cy="100" r="96" fill="#08120c" stroke="#f97316" strokeWidth="4" />
      
      {/* Outer Green Border */}
      <circle cx="100" cy="100" r="88" fill="none" stroke="#22c55e" strokeWidth="2.5" />
      
      {/* Inner Orange Dotted Border */}
      <circle cx="100" cy="100" r="66" fill="none" stroke="#ea580c" strokeWidth="3" strokeDasharray="6,4" />
      
      {/* Paths for text */}
      {/* Top text path (clockwise) */}
      <path
        id="logo-top-path"
        d="M 24 100 A 76 76 0 0 1 176 100"
        fill="none"
      />
      
      {/* Bottom text path (counter-clockwise) */}
      <path
        id="logo-bottom-path"
        d="M 28 100 A 72 72 0 0 0 172 100"
        fill="none"
      />

      {/* Top Text: Pandit Ganesh Narayan */}
      <text fill="#f97316" fontSize="15" fontWeight="bold" letterSpacing="0.03em" fontFamily="Outfit, system-ui, sans-serif">
        <textPath href="#logo-top-path" startOffset="50%" textAnchor="middle">
          Pandit Ganesh Narayan
        </textPath>
      </text>

      {/* Bottom Text: HOMEOPATHIC CLINIC */}
      <text fill="#22c55e" fontSize="13" fontWeight="bold" letterSpacing="0.04em" fontFamily="Outfit, system-ui, sans-serif">
        <textPath href="#logo-bottom-path" startOffset="50%" textAnchor="middle">
          HOMEOPATHIC CLINIC
        </textPath>
      </text>

      {/* Center Circle Content */}
      <circle cx="100" cy="100" r="54" fill="#040a06" />

      {/* Stylized Wings/Hands holding Caduceus Leaf */}
      {/* Left wing/hand */}
      <path
        d="M 75 105 C 75 90, 85 80, 92 84 C 95 86, 96 92, 95 102 C 94 112, 85 125, 75 105 Z"
        fill="#22c55e"
        opacity="0.85"
      />
      {/* Right wing/hand */}
      <path
        d="M 125 105 C 125 90, 115 80, 108 84 C 105 86, 104 92, 105 102 C 106 112, 115 125, 125 105 Z"
        fill="#22c55e"
        opacity="0.85"
      />
      
      {/* Central Staff/Leaf */}
      <path
        d="M 100 78 C 98 88, 97 105, 100 120 C 103 105, 102 88, 100 78 Z"
        fill="#4ade80"
      />
      
      {/* Center Caduceus Wings Crossbar */}
      <path
        d="M 90 92 Q 100 88 110 92"
        fill="none"
        stroke="#4ade80"
        strokeWidth="2"
      />

      {/* PGN Text */}
      <text
        x="100"
        y="75"
        textAnchor="middle"
        fill="url(#pgn-grad)"
        fontSize="17"
        fontWeight="900"
        letterSpacing="0.05em"
        fontFamily="Outfit, system-ui, sans-serif"
      >
        PGN
      </text>

      {/* SURAJGARH Text */}
      <text
        x="100"
        y="126"
        textAnchor="middle"
        fill="#f97316"
        fontSize="9"
        fontWeight="bold"
        letterSpacing="0.08em"
        fontFamily="Outfit, system-ui, sans-serif"
      >
        SURAJGARH
      </text>

      {/* Gradient definition for PGN text */}
      <defs>
        <linearGradient id="pgn-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#fb923c" />
          <stop offset="50%" stopColor="#f97316" />
          <stop offset="100%" stopColor="#ea580c" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Logo;
