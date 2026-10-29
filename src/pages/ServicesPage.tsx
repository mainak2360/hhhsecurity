import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_CATALOG } from '../data/companyData';
import { ServiceIllustration } from '../components/VisualShowcase';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ShieldCheck, Check, ArrowRight, Info, Filter, Clock, Eye, AlertCircle } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'manned' | 'electronic' | 'facility'>('all');

  useEffect(() => {
    document.title = 'Our Security Services | Assam Security Intelligent Service';
  }, []);

  const filteredServices = SERVICES_CATALOG.filter((item) => {
    if (activeFilter === 'all') return true;
    return item.category === activeFilter;
  });

  return (
    <div className="w-full space-y-16 py-6 sm:py-10">
      
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Our Services' }]} />

        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Assam Security Service Portfolio</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2]" style={{ textWrap: 'balance' }}>
            Comprehensive Security & Facility Management Services
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            Every facility has distinct risk profiles. We provide disciplined manned guarding, perimeter enforcement, round-the-clock supervisory inspections, and integrated facility upkeep tailored to Assam's commercial, industrial, and residential landscape.
          </p>
        </div>

        {/* Status Transparency Banner */}
        <div className="mt-8 p-4 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2.5 text-slate-300">
            <Info className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong>Service Availability Note:</strong> Confirmed core services are deployable immediately. Specialized surveillance & housekeeping services require tailored site inspection and scope approval.
            </span>
          </div>
          <div className="flex items-center gap-3 shrink-0 text-[11px] font-mono">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Confirmed Core</span>
            </span>
            <span className="flex items-center gap-1.5 text-amber-300">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Tailored Approval</span>
            </span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="mt-8 flex flex-wrap items-center gap-2 p-1.5 bg-slate-900/90 rounded-xl border border-slate-800 w-fit">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              activeFilter === 'all'
                ? 'bg-amber-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            All Services (8)
          </button>
          <button
            onClick={() => setActiveFilter('manned')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              activeFilter === 'manned'
                ? 'bg-amber-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Manned Guarding & Patrolling (6)
          </button>
          <button
            onClick={() => setActiveFilter('electronic')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              activeFilter === 'electronic'
                ? 'bg-amber-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            CCTV & Surveillance (1)
          </button>
          <button
            onClick={() => setActiveFilter('facility')}
            className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
              activeFilter === 'facility'
                ? 'bg-amber-500 text-slate-950 shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Facility Management (1)
          </button>
        </div>
      </section>

      {/* 2. Services List / Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {filteredServices.map((service, index) => (
            <div
              key={service.id}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-all flex flex-col lg:flex-row gap-8 items-start justify-between"
            >
              {/* Left Column: Visual and Meta */}
              <div className="w-full lg:w-72 shrink-0 space-y-3">
                <ServiceIllustration
                  type={service.id}
                  title={service.title}
                  category={service.category}
                />
                <div className="space-y-1.5 text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Status:</span>
                    <span
                      className={`font-semibold px-2 py-0.5 rounded text-[10px] ${
                        service.status === 'Confirmed'
                          ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                          : 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                      }`}
                    >
                      {service.status}
                    </span>
                  </div>
                  {service.minimumPersonnel && (
                    <div className="flex items-center justify-between text-[11px] text-slate-400">
                      <span>Deployment:</span>
                      <span className="text-slate-200">{service.minimumPersonnel}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Center Column: Description and Key Deliverables */}
              <div className="flex-1 space-y-4">
                <div>
                  <div className="text-[11px] font-mono text-amber-400 uppercase tracking-wider mb-1">
                    SERVICE 0{index + 1} // {service.category.toUpperCase()}
                  </div>
                  <Link to={`/services/${service.id}`}>
                    <h2 className="text-xl sm:text-2xl font-bold text-white hover:text-amber-400 transition-colors">
                      {service.title}
                    </h2>
                  </Link>
                  <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                    {service.fullDesc}
                  </p>
                </div>

                {/* Key Benefits */}
                <div className="space-y-2 pt-2">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                    Core Operational Benefits
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {service.benefits.map((b, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Suitable Industries Tags */}
                <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
                  <span className="text-slate-400 text-[11px]">Recommended Sectors:</span>
                  {service.suitableIndustries.map((ind, i) => (
                    <Link
                      key={i}
                      to="/industries"
                      className="px-2 py-0.5 rounded bg-slate-950 hover:bg-slate-850 border border-slate-800 text-slate-300 hover:text-white text-[11px] transition-colors"
                    >
                      {ind}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right Column: Actions */}
              <div className="w-full lg:w-48 shrink-0 flex flex-col gap-2.5 pt-4 lg:pt-0 lg:border-l lg:border-slate-800/80 lg:pl-6 self-stretch justify-center">
                <Link
                  to={`/quote?service=${encodeURIComponent(service.id)}`}
                  className="w-full py-2.5 px-4 text-xs font-bold uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl transition-colors shadow-sm flex items-center justify-center gap-1.5"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                <Link
                  to={`/services/${service.id}`}
                  className="w-full py-2.5 px-3 text-xs font-semibold text-slate-300 hover:text-white bg-slate-950 hover:bg-slate-850 border border-slate-800 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Dedicated Service Page &rarr;</span>
                </Link>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* 3. Bottom Consultation Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg font-bold text-white">Need a Multi-Service Security Package?</h3>
            <p className="text-xs text-slate-400">
              Combine manned guarding, CCTV monitoring, and night supervision under a single transparent SLA.
            </p>
          </div>
          <Link
            to="/quote"
            className="px-6 py-3 text-xs font-bold uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl transition-colors whitespace-nowrap shrink-0"
          >
            Build Custom Security Plan &rarr;
          </Link>
        </div>
      </section>

    </div>
  );
};
