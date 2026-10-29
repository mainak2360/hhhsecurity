import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../data/companyData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { Shield, Eye, Award, CheckCircle, Users, Target, Compass, Lock, PhoneCall, ArrowRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Our Organization | Assam Security Intelligent Service';
  }, []);

  return (
    <div className="w-full space-y-16 sm:space-y-24 py-6 sm:py-10">
      
      {/* 1. Header Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'About Us' }]} />

        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
            <Shield className="w-4 h-4" />
            <span>About Assam Security Intelligent Service</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2]" style={{ textWrap: 'balance' }}>
            Built on Discipline. Dedicated to Vigilance. Driven by Integrity.
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Assam Security Intelligent Service (ASIS) is an indigenous private security and facility management organization providing professional protection solutions for residential complexes, industrial plants, corporate offices, and institutional assets across the state of Assam.
          </p>
        </div>
      </section>

      {/* 2. Mission, Vision, and Values Bento */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Mission */}
          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-white">Our Mission</h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
                To safeguard the lives, properties, and commercial assets of our clients across Assam by deploying rigorously trained, police-verified security personnel upheld by round-the-clock supervisory vigilance and uncompromised professional ethics.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800 text-[11px] font-mono text-amber-400">
              MISSION // SECURE & PROTECT
            </div>
          </div>

          {/* Vision */}
          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                <Compass className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-white">Our Vision</h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-2">
                To be recognized as the most dependable, transparent, and ethically governed private security agency in Northeast India, setting benchmark standards in guard welfare, statutory compliance, and client satisfaction.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-800 text-[11px] font-mono text-blue-400">
              VISION // BENCHMARK EXCELLENCE
            </div>
          </div>

          {/* Core Values */}
          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h2 className="text-lg font-bold text-white">Our Core Values</h2>
              <ul className="text-xs sm:text-sm text-slate-300 space-y-2 mt-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span><strong>Discipline:</strong> Crisp turnout, punctuality & strict guard decorum.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span><strong>Vigilance:</strong> Unbroken attention to gates, perimeters & registers.</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span><strong>Integrity:</strong> Zero tolerance for theft, pilferage, or negligence.</span>
                </li>
              </ul>
            </div>
            <div className="pt-4 border-t border-slate-800 text-[11px] font-mono text-emerald-400">
              VALUES // DISCIPLINE & TRUST
            </div>
          </div>

        </div>
      </section>

      {/* 3. Training & Professionalism Standards */}
      <section className="bg-slate-900/40 border-y border-slate-800/80 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
              Operational Standards
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              How We Train & Prepare Our Guards
            </h2>
            <p className="text-sm text-slate-400 mt-2">
              Unlike unorganized manpower contractors who place unvetted laborers in uniforms, our recruits undergo structured training conforming to statutory standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <span className="text-xs font-mono text-amber-400">01. PHYSICAL TRAINING</span>
              <h3 className="text-sm font-bold text-white">Endurance & Turnout</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Physical drill, posture, uniform maintenance, salutes, and stance, ensuring guards command respect at your facility entrance.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <span className="text-xs font-mono text-amber-400">02. ACCESS CONTROL</span>
              <h3 className="text-sm font-bold text-white">Registers & Material Passes</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Systematic recording of visitor photo IDs, returnable vs non-returnable delivery gate passes, key registers, and baggage checks.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <span className="text-xs font-mono text-amber-400">03. EMERGENCY DRILLS</span>
              <h3 className="text-sm font-bold text-white">Fire & Evacuation</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Operating ABC dry-powder and CO2 fire extinguishers, managing building evacuation routes, and executing crowd safety protocols.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 space-y-3">
              <span className="text-xs font-mono text-amber-400">04. CONFLICT MANAGEMENT</span>
              <h3 className="text-sm font-bold text-white">De-escalation & Hospitality</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Resolving disputes with agitated visitors or delivery personnel calmly without physical altercations or damaging client reputation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Verified Company Profile & Transparent Disclosure */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Company Profile & Statutory Governance
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Transparency and regulatory compliance are the cornerstones of our client partnerships.
              </p>
            </div>
            <div className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-lg shrink-0">
              OPERATIONAL JURISDICTION: ASSAM
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs text-slate-300 leading-relaxed">
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Organizational Hierarchy
              </h3>
              <p>
                Our field operational structure is designed for swift response and zero dilution of authority:
              </p>
              <ul className="space-y-2 list-disc list-inside text-slate-300 marker:text-amber-400">
                <li><strong className="text-white">Operations Director:</strong> Overall strategy, client liaison, and legal statutory compliance.</li>
                <li><strong className="text-white">Field Operations Officers (FO):</strong> Assigned per district cluster; conducting regular site audits and roster management.</li>
                <li><strong className="text-white">Night Patrolling Squad:</strong> Mobile squad carrying out surprise inspections between 22:00 and 05:00 hours.</li>
                <li><strong className="text-white">Site Security Supervisors:</strong> On-ground team leads for large commercial, factory, or event deployments.</li>
                <li><strong className="text-white">Security Guards & Marshals:</strong> Stationed sentinels executing gate duties, turnstile screening, and perimeter watches.</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Verified Information Policy
              </h3>
              <p>
                We believe in authentic credibility rather than fabricated testimonials. In accordance with strict ethical standards:
              </p>
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 space-y-2">
                <div className="flex items-center gap-2 text-amber-400 font-semibold">
                  <Lock className="w-4 h-4" />
                  <span>Client Confidentiality</span>
                </div>
                <p className="text-slate-400 text-xs">
                  We do not publicly publish confidential client blueprints, security logs, or corporate facility locations on open promotional pages without written consent. Detailed references and verifiable track records are provided upon signing of Non-Disclosure Agreements (NDAs).
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Consultation CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-8">
        <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 space-y-4 max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Have Specific Security Questions for Your Premise?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300">
            Our operations directors are available for site inspections and security vulnerability audits across Assam.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              to="/quote"
              className="px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl transition-colors"
            >
              Request a Free Security Consultation
            </Link>
            <Link
              to="/contact"
              className="px-5 py-3 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-slate-900 border border-slate-700 rounded-xl transition-colors"
            >
              Contact Our Desk
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
