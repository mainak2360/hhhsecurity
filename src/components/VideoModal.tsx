import React from 'react';
import { X, ShieldCheck, Play, Radio, CheckCircle2 } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl text-slate-100">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white">
                Assam Security Guard Operations &amp; Turnout Drill
              </h3>
              <p className="text-[11px] text-slate-400">
                24/7 Field Supervision, Manned Vigilance &amp; Turnout Protocol
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close video overview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Simulation / Interactive Presentation */}
        <div className="relative w-full aspect-video bg-slate-950 flex flex-col items-center justify-center p-8 text-center overflow-hidden">
          {/* Ambient Lighting */}
          <div className="absolute inset-0 bg-gradient-to-tr from-cyan-950/40 via-slate-950 to-blue-950/40" />

          {/* Background Guard Corridor Visual */}
          <img
            src="/images/hero-guard-corridor.png"
            alt="Security Patrol Corridor"
            className="absolute inset-0 w-full h-full object-cover opacity-30 blur-xs"
          />

          <div className="relative z-10 space-y-4 max-w-lg">
            <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 mx-auto flex items-center justify-center shadow-lg">
              <Play className="w-7 h-7 fill-current ml-1" />
            </div>

            <h4 className="text-xl font-extrabold text-white">
              Guarding Excellence Across All 35 Districts of Assam
            </h4>

            <p className="text-xs text-slate-300 leading-relaxed">
              Every Assam Security sentinel undergoes statutory police verification, physical drill training, and night supervisory surprise audits to guarantee zero lapses.
            </p>

            <div className="flex flex-wrap justify-center gap-3 pt-2 text-[11px] text-amber-300">
              <span className="flex items-center gap-1 bg-slate-900/80 px-3 py-1 rounded-full border border-slate-800">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                100% Police Character Vetted
              </span>
              <span className="flex items-center gap-1 bg-slate-900/80 px-3 py-1 rounded-full border border-slate-800">
                <Radio className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                Live Night Patrolling Active
              </span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-mono">
            HEADQUARTERS: CHRISTIAN BASTI, G.S. ROAD, GUWAHATI
          </span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors"
          >
            Close Reel
          </button>
        </div>

      </div>
    </div>
  );
};
