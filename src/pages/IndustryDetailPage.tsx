import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { INDUSTRIES_CATALOG, SERVICES_CATALOG } from '../data/companyData';
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
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  AlertTriangle,
  Clock,
  Layers
} from 'lucide-react';

export const IndustryDetailPage: React.FC = () => {
  const { industryId } = useParams<{ industryId: string }>();

  const industry = INDUSTRIES_CATALOG.find((i) => i.id === industryId);

  useEffect(() => {
    if (industry) {
      document.title = `${industry.name} Security Solutions | Assam Security Intelligent Service`;
    }
  }, [industry]);

  if (!industry) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="text-2xl font-bold text-white">Industry Sector Not Found</h1>
        <p className="text-sm text-slate-400">
          The requested industry sector could not be located in our coverage directory.
        </p>
        <Link
          to="/industries"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs uppercase"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Industries</span>
        </Link>
      </div>
    );
  }

  const otherIndustries = INDUSTRIES_CATALOG.filter((i) => i.id !== industry.id).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12">
      
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Industries We Protect', path: '/industries' },
          { label: industry.name }
        ]}
      />

      {/* Hero Section */}
      <section className="p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 shadow-xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider">
          <span>SECTOR BLUEPRINT</span>
          <span>·</span>
          <span>ASSAM OPERATIONS</span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
          Security & Facility Solutions for {industry.name}
        </h1>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
          {industry.description}
        </p>

        <div className="flex flex-wrap items-center gap-4 pt-3">
          <Link
            to="/quote"
            className="px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl transition-all shadow-md flex items-center gap-2"
          >
            <span>Request {industry.name} Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            to="/industries"
            className="px-4 py-3 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-slate-950 border border-slate-800 rounded-xl transition-colors flex items-center gap-1.5"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Sectors</span>
          </Link>
        </div>
      </section>

      {/* Risks Addressed & Shift Architecture */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
            <span>Key Sector Risks Addressed</span>
          </h2>
          <p className="text-xs text-slate-400">
            Specific vulnerabilities and loss triggers mitigated by our post protocols:
          </p>
          <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
            {industry.keyRisksAddressed.map((risk, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{risk}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 flex flex-col justify-between">
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Clock className="w-5 h-5 text-amber-400" />
              <span>Recommended Shift Architecture</span>
            </h2>
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm text-slate-300 leading-relaxed">
              {industry.typicalShiftSetup}
            </div>
            <p className="text-xs text-slate-400">
              Shift models are formulated to maintain alertness, eliminate fatigue during odd hours, and ensure continuous gate handover without unmanned gaps.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300">
            <strong>Recommended Core Services:</strong> {industry.recommendedServices.join(', ')}
          </div>
        </div>

      </section>

      {/* Consultation Banner */}
      <section className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="text-xl font-bold text-white">
            Schedule an On-Site Vulnerability Survey
          </h3>
          <p className="text-xs sm:text-sm text-slate-400">
            We inspect your entry/exit barriers, lighting, perimeter fences, and blind zones across Assam.
          </p>
        </div>
        <Link
          to="/quote"
          className="px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl transition-all shadow-md whitespace-nowrap shrink-0"
        >
          Book Survey Visit &rarr;
        </Link>
      </section>

      {/* Other Sectors */}
      <section className="space-y-6 pt-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white">Other Industries We Protect</h2>
          <Link to="/industries" className="text-xs font-semibold text-amber-400 hover:text-amber-300">
            View All Industries &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {otherIndustries.map((ind) => (
            <Link
              key={ind.id}
              to={`/industries/${ind.id}`}
              className="group p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                  {ind.name}
                </h3>
                <p className="text-xs text-slate-400 mt-1.5 line-clamp-2">{ind.description}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-semibold text-slate-300 flex items-center justify-between">
                <span>View Protection Blueprint</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
};
