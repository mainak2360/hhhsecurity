import React from 'react';
import { ServiceItem, PageId } from '../types';
import { X, Check, ShieldCheck, ArrowRight, Building2, Clock, AlertTriangle } from 'lucide-react';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForQuote: (serviceId: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onSelectForQuote,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden text-slate-100 max-h-[90vh] flex flex-col">
        
        {/* Top Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block">
                Security Service Specification
              </span>
              <h2 className="text-lg font-bold text-white leading-tight">
                {service.title}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Status Indicator */}
        <div className="px-6 py-2.5 bg-slate-950/60 border-b border-slate-800/80 flex items-center justify-between text-xs">
          <span className="text-slate-400">Deployment Status:</span>
          <span
            className={`font-semibold px-2.5 py-0.5 rounded-full text-[11px] ${
              service.status === 'Confirmed'
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                : 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
            }`}
          >
            {service.status}
          </span>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-amber-400/90 mb-1.5">
              Overview & Deployment Scope
            </h3>
            <p className="text-slate-300 leading-relaxed text-sm">
              {service.fullDesc}
            </p>
          </div>

          {/* Key Deliverables */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2.5">
              Standard Deliverables
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.keyDeliverables.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs text-slate-300">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SOP Highlights */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Standard Operating Procedures (SOP)
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-300 list-disc list-inside marker:text-amber-400">
              {service.sopHighlights.map((sop, idx) => (
                <li key={idx} className="leading-relaxed">
                  {sop}
                </li>
              ))}
            </ul>
          </div>

          {/* Suitable Industries */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Suitable Sectors
            </h3>
            <div className="flex flex-wrap gap-2">
              {service.suitableIndustries.map((ind, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60"
                >
                  {ind}
                </span>
              ))}
            </div>
          </div>

          {service.minimumPersonnel && (
            <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center gap-2 text-xs text-slate-400">
              <Clock className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Recommended Team Size: <strong className="text-white">{service.minimumPersonnel}</strong></span>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 border-t border-slate-800 bg-slate-950 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="text-xs font-semibold text-slate-400 hover:text-white px-3 py-2 transition-colors"
          >
            Back to Services
          </button>
          <button
            onClick={() => {
              onSelectForQuote(service.id);
              onClose();
            }}
            className="flex items-center gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg transition-colors shadow-md"
          >
            <span>Request a Quote for this Service</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
