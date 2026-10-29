import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { INDUSTRIES_CATALOG } from '../data/companyData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  Building,
  Factory,
  Home,
  ShoppingBag,
  Truck,
  GraduationCap,
  HeartPulse,
  Sparkles,
  ShieldAlert,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

export const IndustriesPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Industries We Protect | Assam Security Intelligent Service';
  }, []);

  const getIcon = (id: string) => {
    switch (id) {
      case 'corporate-offices': return <Building className="w-5 h-5 text-amber-400" />;
      case 'factories-industrial': return <Factory className="w-5 h-5 text-amber-400" />;
      case 'residential-societies': return <Home className="w-5 h-5 text-amber-400" />;
      case 'retail-shopping': return <ShoppingBag className="w-5 h-5 text-amber-400" />;
      case 'warehouses-logistics': return <Truck className="w-5 h-5 text-amber-400" />;
      case 'educational-institutions': return <GraduationCap className="w-5 h-5 text-amber-400" />;
      case 'hospitals-healthcare': return <HeartPulse className="w-5 h-5 text-amber-400" />;
      case 'events-venues': return <Sparkles className="w-5 h-5 text-amber-400" />;
      default: return <Building className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <div className="w-full space-y-16 py-6 sm:py-10">
      
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Industries We Protect' }]} />

        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
            <ShieldAlert className="w-4 h-4" />
            <span>Sector-Specific Security Protocols</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2]" style={{ textWrap: 'balance' }}>
            Industries We Protect Across Assam
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            Different sectors face fundamentally different vulnerabilities. Our operational guard deployment plans are custom-engineered for your industry's physical risks, shift rhythms, and regulatory requirements.
          </p>
        </div>

        {/* Ethical Notice Banner */}
        <div className="mt-8 p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-start gap-3">
          <div className="w-2 h-2 rounded-full bg-amber-400 mt-1.5 shrink-0" />
          <p>
            <strong>Transparent Governance Note:</strong> We respect client privacy agreements and never display unauthorized customer logos or fabricate unverified corporate endorsements. Deployments are tailored through rigorous on-site threat assessments.
          </p>
        </div>
      </section>

      {/* 2. Industries 8-Grid Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {INDUSTRIES_CATALOG.map((ind) => (
            <div
              key={ind.id}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                    {getIcon(ind.id)}
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
                    SECTOR // {ind.id.toUpperCase()}
                  </span>
                </div>

                <div>
                  <Link to={`/industries/${ind.id}`}>
                    <h2 className="text-xl font-bold text-white hover:text-amber-400 transition-colors">
                      {ind.name}
                    </h2>
                  </Link>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                    {ind.description}
                  </p>
                </div>

                {/* Risks Mitigated */}
                <div className="space-y-2 pt-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Specific Vulnerabilities Addressed
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {ind.keyRisksAddressed.map((risk, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{risk}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Typical Shift Setup */}
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800/80 text-xs">
                  <span className="text-slate-400 block font-medium mb-0.5">Typical Shift Architecture:</span>
                  <span className="text-slate-200">{ind.typicalShiftSetup}</span>
                </div>
              </div>

              {/* Bottom Recommendation & CTA */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <Link
                  to={`/industries/${ind.id}`}
                  className="text-xs font-semibold text-slate-300 hover:text-white"
                >
                  Dedicated Blueprint &rarr;
                </Link>
                <Link
                  to="/quote"
                  className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg transition-colors whitespace-nowrap"
                >
                  Request Sector Quote
                </Link>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 3. Site Vulnerability Survey CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-white">
            Need an On-Site Risk Assessment of Your Facility?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Our Field Operations officers visit your premises anywhere in Assam to inspect entry-exit choke points, lighting blind spots, and visitor flow before formulating a proposal.
          </p>
          <div className="pt-2 flex justify-center">
            <Link
              to="/quote"
              className="px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl transition-colors shadow-lg"
            >
              Book an On-Site Security Survey
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
