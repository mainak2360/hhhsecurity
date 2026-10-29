import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { SERVICES_CATALOG, COMPANY_INFO } from '../data/companyData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ServiceIllustration } from '../components/VisualShowcase';
import {
  ShieldCheck,
  CheckCircle2,
  Clock,
  ArrowRight,
  ArrowLeft,
  Building2,
  FileText,
  AlertTriangle,
  PhoneCall,
  Lock,
  Layers,
  Sparkles
} from 'lucide-react';

export const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();

  const service = SERVICES_CATALOG.find((s) => s.id === serviceId);

  useEffect(() => {
    if (service) {
      document.title = `${service.title} | Assam Security Intelligent Service`;
    }
  }, [service]);

  if (!service) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="text-2xl font-bold text-white">Service Not Found</h1>
        <p className="text-sm text-slate-400">
          The requested security service could not be located in our catalog.
        </p>
        <Link
          to="/services"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs uppercase"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Services</span>
        </Link>
      </div>
    );
  }

  const relatedServices = SERVICES_CATALOG.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12">
      
      {/* Breadcrumb Navigation */}
      <Breadcrumbs
        items={[
          { label: 'Our Services', path: '/services' },
          { label: service.title }
        ]}
      />

      {/* Main Service Hero Banner */}
      <section className="relative p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400">
                SERVICE ID: {service.id.toUpperCase()}
              </span>
              <span
                className={`text-[10px] font-semibold px-2.5 py-0.5 rounded-full ${
                  service.status === 'Confirmed'
                    ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                    : 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                }`}
              >
                {service.status}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              {service.fullDesc}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to={`/quote?service=${encodeURIComponent(service.id)}`}
                className="px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl transition-all shadow-md flex items-center gap-2"
              >
                <span>Request a Quote for this Service</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="px-4 py-3 text-xs sm:text-sm font-semibold text-slate-300 hover:text-white bg-slate-950 border border-slate-800 rounded-xl transition-colors flex items-center gap-1.5"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>All Services</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 w-full">
            <ServiceIllustration
              type={service.id}
              title={service.title}
              category={service.category}
            />
          </div>

        </div>
      </section>

      {/* Key Deliverables & Benefits Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Core Benefits */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            <span>Key Operational Benefits</span>
          </h2>
          <p className="text-xs text-slate-400">
            Measurable safeguards and risk mitigation outcomes delivered upon deployment:
          </p>
          <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
            {service.benefits.map((b, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{b}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Standard Deliverables & SOPs */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <FileText className="w-5 h-5 text-amber-400" />
            <span>Standard Operating Procedures (SOP)</span>
          </h2>
          <p className="text-xs text-slate-400">
            Mandatory execution standards enforced on-site daily:
          </p>
          <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
            {service.sopHighlights.map((sop, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-slate-950 border border-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{sop}</span>
              </li>
            ))}
          </ul>
        </div>

      </section>

      {/* Deployment & Equipment Specifications */}
      <section className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-6">
        <div>
          <h2 className="text-lg font-bold text-white">
            Deployment Architecture & Standard Kit
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Personnel are deployed with complete uniform kit, identification, and communication equipment.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
            <span className="text-slate-400 block font-semibold text-[11px]">Recommended Team Size:</span>
            <div className="text-sm font-bold text-white">{service.minimumPersonnel || 'Sized to site requirement'}</div>
            <p className="text-[11px] text-slate-400">Scaled according to gate count, yard acreage, and floor layout.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
            <span className="text-slate-400 block font-semibold text-[11px]">Supervisory Oversight:</span>
            <div className="text-sm font-bold text-white">24/7 Field Inspections</div>
            <p className="text-[11px] text-slate-400">Field Officers conduct surprise day and night turn-out audits.</p>
          </div>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-1.5">
            <span className="text-slate-400 block font-semibold text-[11px]">Replacement Guarantee:</span>
            <div className="text-sm font-bold text-white">&le; 2 Hours Reliever</div>
            <p className="text-[11px] text-slate-400">Reserve guard pool maintained in Guwahati and district hubs.</p>
          </div>
        </div>

        {/* Suitable Industries */}
        <div className="pt-4 border-t border-slate-800/80">
          <span className="text-xs font-semibold text-slate-300 block mb-2.5">
            Recommended For These Industries:
          </span>
          <div className="flex flex-wrap gap-2">
            {service.suitableIndustries.map((ind, i) => (
              <Link
                key={i}
                to="/industries"
                className="px-3 py-1.5 rounded-lg bg-slate-950 hover:bg-slate-850 border border-slate-800 text-xs text-slate-300 hover:text-white transition-colors"
              >
                {ind} &rarr;
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Generation Callout */}
      <section className="p-8 rounded-2xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-900 border border-amber-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1.5">
          <h3 className="text-xl font-bold text-white">
            Need {service.title} for Your Facility?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300">
            Our deployment directors assess your site and furnish an itemized wage and shift calculation within 24 hours.
          </p>
        </div>
        <Link
          to={`/quote?service=${encodeURIComponent(service.id)}`}
          className="px-6 py-3.5 text-xs sm:text-sm font-bold uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl transition-all shadow-lg whitespace-nowrap shrink-0"
        >
          Request Tailored Proposal &rarr;
        </Link>
      </section>

      {/* Related Services */}
      <section className="space-y-6 pt-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-white">Other Security Services</h2>
          <Link to="/services" className="text-xs font-semibold text-amber-400 hover:text-amber-300">
            View All Services &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedServices.map((rel) => (
            <Link
              key={rel.id}
              to={`/services/${rel.id}`}
              className="group p-5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono uppercase text-amber-400">{rel.category}</span>
                <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors mt-1">
                  {rel.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1.5 line-clamp-2">{rel.shortDesc}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-semibold text-slate-300 flex items-center justify-between">
                <span>View Full Page</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
};
