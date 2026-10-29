import React from 'react';

export const TopographicLines: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`pointer-events-none select-none absolute inset-0 overflow-hidden ${className}`}>
      <svg
        className="w-full h-full opacity-35"
        viewBox="0 0 1440 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid slice"
      >
        <g stroke="currentColor" strokeWidth="1" className="text-amber-500/30">
          <circle cx="280" cy="80" r="120" strokeDasharray="3 3" />
          <circle cx="280" cy="80" r="180" />
          <circle cx="280" cy="80" r="240" />
          <circle cx="280" cy="80" r="310" />
          <circle cx="280" cy="80" r="390" strokeDasharray="6 3" />
          <circle cx="280" cy="80" r="480" />
          <circle cx="280" cy="80" r="580" />
          <circle cx="280" cy="80" r="690" />
          <circle cx="280" cy="80" r="820" />
          <circle cx="280" cy="80" r="960" />
          <circle cx="280" cy="80" r="1120" />
        </g>
        <g stroke="currentColor" strokeWidth="0.75" className="text-blue-400/20">
          <ellipse cx="1100" cy="120" rx="350" ry="260" strokeDasharray="4 4" />
          <ellipse cx="1100" cy="120" rx="460" ry="340" />
          <ellipse cx="1100" cy="120" rx="580" ry="430" />
          <ellipse cx="1100" cy="120" rx="720" ry="540" />
          <ellipse cx="1100" cy="120" rx="890" ry="670" strokeDasharray="6 3" />
        </g>
      </svg>
    </div>
  );
};
