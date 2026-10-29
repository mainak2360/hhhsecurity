import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO, SERVICES_CATALOG } from '../data/companyData';
import { SecurityEmblem } from './SecurityEmblem';
import { Phone, Mail, MapPin, Clock, ShieldCheck, ChevronRight } from 'lucide-react';

interface FooterProps {
  onOpenChecklist?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenChecklist }) => {
  return (
    <footer className="w-full bg-slate-950 border-t border-slate-800 text-slate-400 text-xs">
      {/* Top Banner: Statutory & Regulatory Commitment */}
      <div className="border-b border-slate-900 bg-slate-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
            <span>Strict compliance with Private Security Agencies (Regulation) Act (PSARA) standards and Assam state safety mandates.</span>
          </div>
          <Link
            to="/owner-verification"
            className="text-[11px] font-mono text-amber-400 hover:text-amber-300 underline underline-offset-4 flex items-center gap-1"
          >
            <span>Pre-Launch Owner Verification & Readiness Hub</span>
            <ChevronRight className="w-3 h-3" />
          </Link>
        </div>
      </div>

      {/* Main 4-Column Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1: Brand & Identity */}
          <div className="space-y-4">
            <Link to="/" className="inline-block">
              <SecurityEmblem size="md" />
            </Link>
            <p className="text-slate-300 text-xs leading-relaxed">
              {COMPANY_INFO.subTagline}
            </p>
            <div className="text-[11px] text-slate-400 space-y-1 pt-1">
              <div>Coverage: <span className="text-slate-300">All 35 Districts of Assam</span></div>
              <div>Operations Command: <span className="text-slate-300">Guwahati Central Hub</span></div>
            </div>
          </div>

          {/* Column 2: Core Services Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Security Services
            </h3>
            <ul className="space-y-2">
              {SERVICES_CATALOG.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services/${service.id}`}
                    className="text-left text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-left text-xs text-amber-400/90 hover:text-amber-300 font-medium transition-colors"
                >
                  View All 8 Services &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Links & Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Company Navigation
            </h3>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Our Organization
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-white transition-colors">
                  Industries We Protect
                </Link>
              </li>
              <li>
                <Link to="/careers" className="hover:text-white transition-colors">
                  Careers & Guard Recruitment
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact & Google Maps
                </Link>
              </li>
              <li>
                <Link to="/quote" className="text-amber-400 hover:text-amber-300 font-semibold transition-colors">
                  Request a Free Quote
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Operations Desk */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Registered Office & Desk
            </h3>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>
                  {COMPANY_INFO.headquarters.addressLine1}, {COMPANY_INFO.headquarters.addressLine2}, {COMPANY_INFO.headquarters.city}, {COMPANY_INFO.headquarters.state} – {COMPANY_INFO.headquarters.pincode}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${COMPANY_INFO.contacts.phonePrimary.replace(/[^0-9+]/g, '')}`} className="hover:text-white">
                  {COMPANY_INFO.contacts.phoneFormattedDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contacts.emailOfficial}`} className="hover:text-white">
                  {COMPANY_INFO.contacts.emailOfficial}
                </a>
              </div>
              <div className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div>Desk: {COMPANY_INFO.contacts.controlRoomHours}</div>
                  <div className="text-[11px] text-slate-400">{COMPANY_INFO.contacts.officeHours}</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Legal Bar */}
        <div className="mt-12 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Assam Security Intelligent Service. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4">
            <Link to="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <span aria-hidden="true">&middot;</span>
            <Link to="/terms-and-conditions" className="hover:text-slate-300 transition-colors">
              Terms & Conditions
            </Link>
            <span aria-hidden="true">&middot;</span>
            <Link to="/owner-verification" className="text-amber-400/80 hover:text-amber-300 transition-colors">
              Owner Checklist & Leads
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
