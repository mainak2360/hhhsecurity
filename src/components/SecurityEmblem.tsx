import React from 'react';

interface SecurityEmblemProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const SecurityEmblem: React.FC<SecurityEmblemProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12',
  };

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Precision Shield Icon */}
      <div
        className={`${iconSizes[size]} relative flex items-center justify-center shrink-0 rounded-lg bg-gradient-to-br from-slate-900 to-navy-950 border border-amber-500/30 shadow-inner group`}
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          className="w-5/6 h-5/6 text-amber-400"
          strokeWidth="1.75"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Shield Contour */}
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="rgba(217, 119, 6, 0.12)" />
          {/* Internal Star / Compass of Vigilance */}
          <path d="M12 7l1.2 2.8 3 .4-2.2 2 .6 3-2.6-1.5-2.6 1.5.6-3-2.2-2 3-.4z" fill="currentColor" stroke="none" />
          <path d="M12 14v4" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className="text-base font-bold tracking-tight text-white uppercase font-sans">
            Assam Security
          </span>
          <span className="text-[10px] font-semibold tracking-widest text-amber-400/90 uppercase mt-0.5">
            Intelligent Service
          </span>
        </div>
      )}
    </div>
  );
};
