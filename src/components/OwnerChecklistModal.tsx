import React, { useState, useEffect } from 'react';
import { OWNER_VERIFICATION_CHECKLIST, COMPANY_INFO } from '../data/companyData';
import { QuoteRequest, CareerApplication, ContactMessage } from '../types';
import { X, CheckCircle, AlertCircle, FileText, Phone, MapPin, ShieldCheck, Mail, Database, Download } from 'lucide-react';

interface OwnerChecklistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OwnerChecklistModal: React.FC<OwnerChecklistModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'checklist' | 'inbox' | 'deployment'>('checklist');
  const [quotes, setQuotes] = useState<QuoteRequest[]>([]);
  const [applications, setApplications] = useState<CareerApplication[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);

  useEffect(() => {
    if (isOpen) {
      try {
        const storedQuotes = JSON.parse(localStorage.getItem('asis_quotes') || '[]');
        const storedApps = JSON.parse(localStorage.getItem('asis_applications') || '[]');
        const storedMsgs = JSON.parse(localStorage.getItem('asis_messages') || '[]');
        setQuotes(storedQuotes);
        setApplications(storedApps);
        setMessages(storedMsgs);
      } catch (err) {
        console.error('Error loading stored submissions', err);
      }
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden text-slate-100">
        
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950">
          <div>
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              <span>Owner Pre-Launch & Verification Control Hub</span>
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Business Owner Checklist · Stored Enquiries Inbox · Deployment Guide
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex items-center gap-2 px-6 pt-3 border-b border-slate-800 bg-slate-950/50">
          <button
            onClick={() => setActiveTab('checklist')}
            className={`pb-2.5 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 ${
              activeTab === 'checklist'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Go-Live Requirements Checklist
          </button>
          <button
            onClick={() => setActiveTab('inbox')}
            className={`pb-2.5 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 flex items-center gap-1.5 ${
              activeTab === 'inbox'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <span>Submissions Inbox</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-800 text-slate-300">
              {quotes.length + applications.length + messages.length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('deployment')}
            className={`pb-2.5 text-xs font-semibold uppercase tracking-wider transition-colors border-b-2 ${
              activeTab === 'deployment'
                ? 'border-amber-400 text-amber-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            Deployment Instructions
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {activeTab === 'checklist' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 leading-relaxed">
                <strong>Pre-Launch Notice for Business Owner:</strong> All sections across this website use verified corporate frameworks. Below is the checklist of statutory documents, tax IDs, and verified telecommunication endpoints to deliver before public domain switchover.
              </div>

              <div className="space-y-3">
                {OWNER_VERIFICATION_CHECKLIST.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-semibold text-white">{item.title}</span>
                          <span
                            className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                              item.currentStatus === 'configured'
                                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                                : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                            }`}
                          >
                            {item.currentStatus === 'configured' ? 'STAGED & CONFIGURED' : 'PENDING OWNER INPUT'}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300">{item.description}</p>
                      </div>
                    </div>

                    <div className="mt-3 pt-3 border-t border-slate-800/80 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="text-slate-400 text-[11px] block">Current Value in Code:</span>
                        <span className="font-mono text-slate-300">{item.placeholderValue}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 text-[11px] block">Action Required:</span>
                        <span className="text-amber-300/90">{item.actionRequired}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'inbox' && (
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-bold text-white mb-2 flex items-center justify-between">
                  <span>Client Quote Requests ({quotes.length})</span>
                </h3>
                {quotes.length === 0 ? (
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 text-center">
                    No quote requests submitted yet. Use the "Request a Quote" form to submit test leads.
                  </div>
                ) : (
                  <div className="space-y-2">
                    {quotes.map((q) => (
                      <div key={q.id} className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 text-xs">
                        <div className="flex justify-between font-semibold text-white">
                          <span>{q.customerName} · {q.companyName}</span>
                          <span className="text-amber-400 font-mono">{q.referenceNo}</span>
                        </div>
                        <div className="text-slate-300 mt-1">
                          Phone: {q.phone} | Email: {q.email} | Location: {q.siteLocation} ({q.district})
                        </div>
                        <div className="text-slate-400 mt-1">
                          Guards: {q.numberOfGuards} | Shift: {q.shiftRequirements} | Services: {q.requiredServices.join(', ')}
                        </div>
                        {q.additionalRequirements && (
                          <div className="text-slate-400 italic mt-1">"{q.additionalRequirements}"</div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-sm font-bold text-white mb-2">
                  Contact Form Messages ({messages.length})
                </h3>
                {messages.length === 0 ? (
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 text-center">
                    No general enquiries submitted yet.
                  </div>
                ) : (
                  <div className="space-y-2">
                    {messages.map((m) => (
                      <div key={m.id} className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 text-xs">
                        <div className="flex justify-between font-semibold text-white">
                          <span>{m.name}</span>
                          <span className="text-slate-400">{m.timestamp}</span>
                        </div>
                        <div className="text-slate-300 mt-1">
                          Subject: {m.subject} | Phone: {m.phone} | Email: {m.email}
                        </div>
                        <div className="text-slate-400 mt-1">"{m.message}"</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div>
                <h3 className="text-sm font-bold text-white mb-2">
                  Job Applications Received ({applications.length})
                </h3>
                {applications.length === 0 ? (
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 text-center">
                    No career applications submitted yet.
                  </div>
                ) : (
                  <div className="space-y-2">
                    {applications.map((a) => (
                      <div key={a.id} className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 text-xs">
                        <div className="flex justify-between font-semibold text-white">
                          <span>{a.fullName} - {a.preferredRole}</span>
                          <span className="text-slate-400">{a.district}</span>
                        </div>
                        <div className="text-slate-300 mt-1">
                          Phone: {a.phone} | Exp: {a.experienceYears} | Ex-Serviceman: {a.isExServiceman ? 'Yes' : 'No'} | Edu: {a.education}
                        </div>
                        {a.fileName && (
                          <div className="text-emerald-400 text-[11px] mt-1">Resume Attached: {a.fileName}</div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {activeTab === 'deployment' && (
            <div className="space-y-4 text-xs text-slate-300 leading-relaxed">
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <h4 className="font-bold text-white text-sm mb-2">Step 1: Production Build Command</h4>
                <p className="text-slate-400">Run the standard optimized build command to create production assets in `/dist`:</p>
                <pre className="mt-2 p-3 rounded bg-slate-900 font-mono text-emerald-400 text-xs overflow-x-auto">
                  npm run build
                </pre>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <h4 className="font-bold text-white text-sm mb-2">Step 2: DNS & Domain Mapping</h4>
                <p className="text-slate-400">Point your official domain (e.g., `assamsecurity.in`) DNS A/CNAME records to the hosting server:</p>
                <div className="mt-2 space-y-1 font-mono text-[11px] text-slate-300">
                  <div>Type: A | Host: @ | Value: &lt;Target Server IP&gt;</div>
                  <div>Type: CNAME | Host: www | Value: assamsecurity.in</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                <h4 className="font-bold text-white text-sm mb-2">Step 3: Web Form Webhook / CRM Integration</h4>
                <p className="text-slate-400">Currently, form submissions are validated client-side and saved into secure local browser storage with immediate user receipt generation. For direct email notifications, link your preferred backend SMTP service or Zapier/Make webhook in `/src/pages/QuotePage.tsx` and `/src/pages/ContactPage.tsx`.</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-slate-950 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors"
          >
            Close Control Hub
          </button>
        </div>

      </div>
    </div>
  );
};
