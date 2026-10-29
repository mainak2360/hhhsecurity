import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { MessageCircle, X, ExternalLink } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const phone = COMPANY_INFO.contacts.whatsappNumber;
  const message = COMPANY_INFO.contacts.whatsappPrefilledMessage;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phone}?text=${encodedMessage}`;

  return (
    <aside aria-label="WhatsApp quick consultation" className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Quick Info Bubble (Accessible on Click or Expand) */}
      {isOpen && (
        <div className="mb-3 w-80 p-4 rounded-xl bg-slate-900 border border-slate-700 shadow-2xl text-slate-100 text-xs animate-in fade-in slide-in-from-bottom-2 duration-150">
          <div className="flex items-center justify-between pb-2 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
              <span className="font-semibold text-slate-200">
                Official WhatsApp Desk
              </span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded"
              aria-label="Close WhatsApp prompt"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="mt-2.5 text-slate-300 leading-relaxed">
            Connect directly with Assam Security Intelligent Service for immediate consultation or site requirement review.
          </p>

          <div className="mt-3 p-2.5 rounded bg-slate-950 border border-slate-800 text-[11px] text-slate-400 italic">
            "{message}"
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3.5 w-full flex items-center justify-center gap-2 py-2 px-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition-colors"
          >
            <span>Open in WhatsApp</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="flex items-center gap-2">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 py-2.5 px-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs shadow-lg hover:shadow-emerald-600/25 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          aria-label="Chat on WhatsApp with Assam Security Intelligent Service"
        >
          <MessageCircle className="w-4 h-4 fill-current shrink-0" />
          <span className="hidden sm:inline font-semibold">WhatsApp Security Desk</span>
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-full bg-slate-900 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800 text-xs shadow-md"
          title="Information about WhatsApp contact"
          aria-label="Toggle WhatsApp details"
        >
          <span className="text-xs font-mono font-bold px-0.5">?</span>
        </button>
      </div>
    </aside>
  );
};
