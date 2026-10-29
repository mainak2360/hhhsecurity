import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { SecurityEmblem } from './SecurityEmblem';
import { PhoneCall, ArrowUpRight, X } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface NavbarProps {
  onOpenChecklist?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenChecklist }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const leftNavLinks = [
    { to: '/about', label: 'ABOUT' },
    { to: '/services', label: 'SERVICES' },
    { to: '/industries', label: 'INDUSTRIES' },
    { to: '/contact', label: 'CONTACT' },
  ];

  const allNavLinks = [
    { to: '/', label: 'HOME' },
    { to: '/about', label: 'ABOUT' },
    { to: '/services', label: 'SERVICES' },
    { to: '/industries', label: 'INDUSTRIES' },
    { to: '/careers', label: 'CAREERS' },
    { to: '/contact', label: 'CONTACT' },
    { to: '/quote', label: 'REQUEST A QUOTE' },
  ];

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-[#070b14]/95 backdrop-blur-md border-b border-slate-800/60 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left Zone: Minimalist clean uppercase text nav links */}
          <nav className="hidden md:flex items-center gap-7 text-[12px] font-semibold tracking-wider text-slate-300">
            {leftNavLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `transition-colors tracking-widest hover:text-white ${
                    isActive ? 'text-amber-400 font-bold' : 'text-slate-300'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Center Zone: Centered Brand Shield Crest & Typography */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2.5 text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-lg group"
            aria-label="Assam Security Intelligent Service Homepage"
          >
            {/* Custom SVG Shield matching reference screenshot */}
            <div className="relative flex items-center justify-center shrink-0">
              <svg
                viewBox="0 0 32 36"
                className="w-8 h-9 text-amber-400 drop-shadow-[0_2px_8px_rgba(245,158,11,0.25)]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.75"
              >
                <path
                  d="M16 2 L29 6 V19 C29 27.5 16 34 16 34 C16 34 3 27.5 3 19 V6 Z"
                  fill="rgba(11, 20, 38, 0.9)"
                  stroke="currentColor"
                />
                {/* Internal security laurel / vigilance leaf lines */}
                <path d="M16 8 V24" stroke="currentColor" strokeWidth="1.5" />
                <path d="M16 14 C12 11 9 14 8 18" stroke="currentColor" strokeWidth="1.2" />
                <path d="M16 14 C20 11 23 14 24 18" stroke="currentColor" strokeWidth="1.2" />
                <path d="M16 19 C13 17 11 20 10 23" stroke="currentColor" strokeWidth="1.2" />
                <path d="M16 19 C19 17 21 20 22 23" stroke="currentColor" strokeWidth="1.2" />
              </svg>
            </div>

            <div className="flex flex-col text-left leading-tight">
              <span className="text-sm font-extrabold tracking-wider text-white uppercase font-sans">
                ASSAM SECURITY
              </span>
              <span className="text-[9px] font-bold tracking-[0.25em] text-amber-400 uppercase">
                INTELLIGENT SERVICE
              </span>
            </div>
          </Link>

          {/* Right Zone: Clean Action Buttons & Hamburger Menu */}
          <div className="flex items-center gap-4">
            <Link
              to="/quote"
              className="hidden lg:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-full bg-slate-900 border border-slate-700 hover:border-amber-400/60 text-slate-200 hover:text-white transition-all tracking-wide"
            >
              <span>Request a Quote</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-amber-400" />
            </Link>

            {/* Hamburger Icon with Two Minimalist Bars matching the screenshot */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-300 hover:text-white hover:bg-slate-900 border border-slate-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500"
              aria-label="Toggle navigation drawer"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <div className="w-5 flex flex-col items-end justify-center gap-1.5 py-1">
                  <span className="w-5 h-0.5 bg-slate-200 rounded-full" />
                  <span className="w-3.5 h-0.5 bg-amber-400 rounded-full group-hover:w-5 transition-all" />
                </div>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Full Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="bg-[#070b14] border-b border-slate-800 px-6 pt-4 pb-8 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-2">
            {allNavLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `text-left px-3 py-2.5 rounded-lg text-sm font-semibold tracking-wider transition-colors ${
                    isActive
                      ? 'bg-amber-500/10 text-amber-400'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-3">
            <Link
              to="/quote"
              onClick={closeMenu}
              className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider bg-amber-500 text-slate-950 rounded-full hover:bg-amber-400 transition-colors flex items-center justify-center gap-2"
            >
              <span>Request a Free Security Consultation</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <a
              href={`tel:${COMPANY_INFO.contacts.phonePrimary.replace(/[^0-9+]/g, '')}`}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-medium text-slate-300 bg-slate-900 rounded-full hover:bg-slate-800 border border-slate-800"
            >
              <PhoneCall className="w-3.5 h-3.5 text-amber-400" />
              <span>Operations Desk: {COMPANY_INFO.contacts.phoneFormattedDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
