import React from 'react';
import { Shield, Eye, Building2, Factory, Lock, CheckCircle2, Radio, Bell } from 'lucide-react';

export const HeroGraphic: React.FC = () => {
  return (
    <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-auto lg:h-[480px] rounded-2xl overflow-hidden border border-slate-800 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 shadow-2xl p-6 sm:p-8 flex flex-col justify-between">
      {/* Background Architectural Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #94a3b8 1px, transparent 0)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Subtle Navy-Amber Ambient Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Bar of the Graphic Display */}
      <div className="relative z-10 flex items-center justify-between border-b border-slate-800/80 pb-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <Shield className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-200 uppercase tracking-wider">
              Assam Security Operations Desk
            </div>
            <div className="text-[11px] text-slate-400">
              Guwahati Operations Centre · 24/7 Field Command
            </div>
          </div>
        </div>
        <div className="text-xs font-medium text-slate-300 flex items-center gap-2">
          <Radio className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>Supervisory Patrols Active</span>
        </div>
      </div>

      {/* Central Visual: Operations Blueprint & Guard Post Topology */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-3 gap-4 my-auto py-4">
        {/* Guarding Metric 1 */}
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-medium">PSARA Compliance</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
          </div>
          <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            100% Verified
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            Mandatory police background checks & state regulatory drill.
          </p>
        </div>

        {/* Guarding Metric 2 */}
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-medium">Response Supervision</span>
            <Eye className="w-4 h-4 text-amber-400" />
          </div>
          <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            24/7 Field Roving
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            Surprise night audits, post log stamping & zero-sleeping checks.
          </p>
        </div>

        {/* Guarding Metric 3 */}
        <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 backdrop-blur-sm">
          <div className="flex items-center justify-between text-slate-400 mb-2">
            <span className="text-xs font-medium">Territory Coverage</span>
            <Building2 className="w-4 h-4 text-blue-400" />
          </div>
          <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            All 35 Districts
          </div>
          <p className="text-[11px] text-slate-400 mt-1">
            Rapid mobilization for commercial, industrial & residential clients.
          </p>
        </div>
      </div>

      {/* Bottom Dispatch Status Row */}
      <div className="relative z-10 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-400" />
          <span>Active Units: Corporate, Industrial, Warehousing & Manned Guarding</span>
        </div>
        <div className="text-slate-400 font-mono text-[11px]">
          Guwahati Central Hub · G.S. Road
        </div>
      </div>
    </div>
  );
};

interface ServiceIllustrationProps {
  type: string;
  title: string;
  category: string;
}

export const ServiceIllustration: React.FC<ServiceIllustrationProps> = ({
  type,
  title,
  category,
}) => {
  // Return tailored thematic SVG composition for each service category
  const getVisual = () => {
    switch (type) {
      case 'manned-guarding':
      case 'corporate-office-security':
        return (
          <div className="relative w-full h-44 rounded-xl overflow-hidden bg-gradient-to-br from-slate-900 via-navy-950 to-slate-950 border border-slate-800/80 p-5 flex flex-col justify-between group-hover:border-amber-500/40 transition-colors">
            <div className="flex justify-between items-start">
              <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <Shield className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800">
                SOP-01 · ACCESS CONTROL
              </span>
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Uniformed Manned Sentinels</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Visitor logbook recording, frisking & turnstile verification</div>
            </div>
            {/* Visual Schematic Lines */}
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-gradient-to-r from-amber-500 to-blue-500 rounded-full" />
            </div>
          </div>
        );

      case 'industrial-warehouse-security':
        return (
          <div className="relative w-full h-44 rounded-xl overflow-hidden bg-gradient-to-br from-slate-900 via-navy-950 to-slate-950 border border-slate-800/80 p-5 flex flex-col justify-between group-hover:border-amber-500/40 transition-colors">
            <div className="flex justify-between items-start">
              <div className="p-2.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400">
                <Factory className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800">
                SOP-02 · WEIGHBRIDGE & PERIMETER
              </span>
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Cargo Manifest & Seal Inspection</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Commercial vehicle tally, scrap dispatch & night yard patrol</div>
            </div>
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div className="w-4/5 h-full bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full" />
            </div>
          </div>
        );

      case 'cctv-monitoring-surveillance':
        return (
          <div className="relative w-full h-44 rounded-xl overflow-hidden bg-gradient-to-br from-slate-900 via-navy-950 to-slate-950 border border-slate-800/80 p-5 flex flex-col justify-between group-hover:border-amber-500/40 transition-colors">
            <div className="flex justify-between items-start">
              <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <Eye className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800">
                SOP-03 · SURVEILLANCE DESK
              </span>
            </div>
            <div>
              <div className="text-xs font-semibold text-white">Real-Time NVR/DVR Video Wall</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Continuous camera sweep, tripwire breach alarm & incident archiving</div>
            </div>
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div className="w-2/3 h-full bg-gradient-to-r from-emerald-500 to-amber-500 rounded-full" />
            </div>
          </div>
        );

      default:
        return (
          <div className="relative w-full h-44 rounded-xl overflow-hidden bg-gradient-to-br from-slate-900 via-navy-950 to-slate-950 border border-slate-800/80 p-5 flex flex-col justify-between group-hover:border-amber-500/40 transition-colors">
            <div className="flex justify-between items-start">
              <div className="p-2.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400">
                <Lock className="w-5 h-5" />
              </div>
              <span className="text-[11px] font-mono text-slate-400 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-800">
                {category.toUpperCase()} · PROTOCOL
              </span>
            </div>
            <div>
              <div className="text-xs font-semibold text-white">{title}</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Rigorous deployment standards & continuous supervision</div>
            </div>
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div className="w-3/5 h-full bg-amber-500 rounded-full" />
            </div>
          </div>
        );
    }
  };

  return <div className="w-full">{getVisual()}</div>;
};
