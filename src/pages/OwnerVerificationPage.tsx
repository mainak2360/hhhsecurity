import React, { useState, useEffect } from 'react';
import { OWNER_VERIFICATION_CHECKLIST, COMPANY_INFO } from '../data/companyData';
import { QuoteRequest, CareerApplication, ContactMessage } from '../types';
import { Breadcrumbs } from '../components/Breadcrumbs';
import {
  ShieldCheck,
  CheckCircle,
  AlertCircle,
  Download,
  Trash2,
  FileSpreadsheet,
  Mail,
  UserCheck,
  Building,
  Server,
  Key
} from 'lucide-react';

export const OwnerVerificationPage: React.FC = () => {
  const [quotes, setQuotes] = useState<QuoteRequest[]>([]);
  const [applications, setApplications] = useState<CareerApplication[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [activeTab, setActiveTab] = useState<'checklist' | 'inbox' | 'deployment'>('checklist');

  useEffect(() => {
    document.title = 'Owner Verification & Launchpad | Assam Security Intelligent Service';
    loadData();
  }, []);

  const loadData = () => {
    try {
      const q = JSON.parse(localStorage.getItem('asis_quotes') || '[]');
      const a = JSON.parse(localStorage.getItem('asis_applications') || '[]');
      const m = JSON.parse(localStorage.getItem('asis_messages') || '[]');
      setQuotes(q);
      setApplications(a);
      setMessages(m);
    } catch (err) {
      console.error(err);
    }
  };

  const clearAllData = () => {
    if (window.confirm('Are you sure you want to clear stored test enquiries and applications?')) {
      localStorage.removeItem('asis_quotes');
      localStorage.removeItem('asis_applications');
      localStorage.removeItem('asis_messages');
      loadData();
    }
  };

  const exportDataJson = () => {
    const payload = {
      exportTimestamp: new Date().toISOString(),
      company: COMPANY_INFO.name,
      quotes,
      applications,
      messages,
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `asis_leads_export_${Date.now()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      <Breadcrumbs items={[{ label: 'Owner Verification & Operations Hub' }]} />

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Business Owner Control Hub</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
            Pre-Launch Verification & Inbound Enquiries
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Statutory onboarding checklist, live customer leads inbox, and deployment guides.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={exportDataJson}
            className="px-3.5 py-2 text-xs font-semibold bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 rounded-lg transition-colors flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5 text-amber-400" />
            <span>Export Leads JSON</span>
          </button>
          <button
            onClick={clearAllData}
            className="px-3 py-2 text-xs font-semibold text-slate-400 hover:text-rose-400 bg-slate-950 border border-slate-800 rounded-lg transition-colors"
            title="Reset test data"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-2">
        <button
          onClick={() => setActiveTab('checklist')}
          className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors ${
            activeTab === 'checklist'
              ? 'bg-amber-500 text-slate-950'
              : 'text-slate-400 hover:text-white bg-slate-900'
          }`}
        >
          Go-Live Readiness Checklist
        </button>
        <button
          onClick={() => setActiveTab('inbox')}
          className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center gap-2 ${
            activeTab === 'inbox'
              ? 'bg-amber-500 text-slate-950'
              : 'text-slate-400 hover:text-white bg-slate-900'
          }`}
        >
          <span>Leads & Applications Inbox</span>
          <span className="px-1.5 py-0.2 rounded-full text-[10px] bg-slate-800 text-slate-200">
            {quotes.length + applications.length + messages.length}
          </span>
        </button>
        <button
          onClick={() => setActiveTab('deployment')}
          className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-lg transition-colors ${
            activeTab === 'deployment'
              ? 'bg-amber-500 text-slate-950'
              : 'text-slate-400 hover:text-white bg-slate-900'
          }`}
        >
          Server & Domain Deployment
        </button>
      </div>

      {/* Tab 1: Checklist */}
      {activeTab === 'checklist' && (
        <div className="space-y-6">
          <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 leading-relaxed">
            <strong>Checklist Instructions for Business Owner:</strong> Before deploying to the official domain, update the verified PSARA license number, GSTIN, and active phone numbers.
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {OWNER_VERIFICATION_CHECKLIST.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-sm font-bold text-white">{item.title}</h3>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded shrink-0 ${
                      item.currentStatus === 'configured'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                    }`}
                  >
                    {item.currentStatus === 'configured' ? 'STAGED & ACTIVE' : 'PENDING INPUT'}
                  </span>
                </div>
                <p className="text-xs text-slate-300">{item.description}</p>
                <div className="pt-2 border-t border-slate-800 text-xs space-y-1">
                  <div className="text-slate-400 text-[11px]">
                    Current Setting: <span className="text-slate-200 font-mono">{item.placeholderValue}</span>
                  </div>
                  <div className="text-amber-300/90 text-[11px]">
                    Required: {item.actionRequired}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 2: Inbox */}
      {activeTab === 'inbox' && (
        <div className="space-y-8">
          {/* Quotes */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider flex items-center justify-between">
              <span>Client Quote Requests ({quotes.length})</span>
            </h2>
            {quotes.length === 0 ? (
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 text-center">
                No quote requests submitted yet.
              </div>
            ) : (
              <div className="space-y-3">
                {quotes.map((q) => (
                  <div key={q.id} className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-1.5">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-bold text-white text-sm">{q.customerName} · {q.companyName}</span>
                      <span className="font-mono text-amber-400 font-bold">{q.referenceNo}</span>
                    </div>
                    <div className="text-slate-300">
                      Phone: <a href={`tel:${q.phone}`} className="text-amber-400 hover:underline">{q.phone}</a> | Email: <a href={`mailto:${q.email}`} className="text-blue-400 hover:underline">{q.email}</a>
                    </div>
                    <div className="text-slate-400">
                      Location: {q.siteLocation} ({q.district}) | Personnel: {q.numberOfGuards} Guards | Shift: {q.shiftRequirements}
                    </div>
                    <div className="text-slate-400">
                      Services: <strong className="text-slate-200">{q.requiredServices.join(', ')}</strong>
                    </div>
                    {q.additionalRequirements && (
                      <div className="text-slate-300 italic pt-1 border-t border-slate-900">"{q.additionalRequirements}"</div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Messages */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">
              Contact Form Inquiries ({messages.length})
            </h2>
            {messages.length === 0 ? (
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 text-center">
                No contact form enquiries logged yet.
              </div>
            ) : (
              <div className="space-y-3">
                {messages.map((m) => (
                  <div key={m.id} className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-1">
                    <div className="flex justify-between font-bold text-white">
                      <span>{m.name}</span>
                      <span className="text-slate-500 font-normal">{m.timestamp}</span>
                    </div>
                    <div className="text-slate-300">
                      Subject: {m.subject} | Phone: {m.phone} | Category: {m.serviceCategory}
                    </div>
                    <p className="text-slate-400 italic">"{m.message}"</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Job Applications */}
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
            <h2 className="text-sm font-bold text-white uppercase tracking-wider">
              Guard & Supervisor Job Applications ({applications.length})
            </h2>
            {applications.length === 0 ? (
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-400 text-center">
                No job applications received yet.
              </div>
            ) : (
              <div className="space-y-3">
                {applications.map((a) => (
                  <div key={a.id} className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs space-y-1.5">
                    <div className="flex justify-between font-bold text-white">
                      <span>{a.fullName} - {a.preferredRole}</span>
                      <span className="text-slate-500">{a.district}</span>
                    </div>
                    <div className="text-slate-300">
                      Mobile: {a.phone} | Qualification: {a.education} | Experience: {a.experienceYears} | Ex-Serviceman: {a.isExServiceman ? 'YES' : 'NO'}
                    </div>
                    {a.fileName && (
                      <div className="text-emerald-400 text-[11px]">Resume attached: {a.fileName}</div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab 3: Deployment */}
      {activeTab === 'deployment' && (
        <div className="space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Server className="w-5 h-5 text-amber-400" />
              <span>Hosting & Production Build Setup</span>
            </h2>
            <p>
              This website is engineered on Vite, React 19, TypeScript, Tailwind CSS, and react-router-dom. It produces a high-speed, lightweight static build suitable for Cloud Run, Vercel, Netlify, cPanel, or standard VPS hosting.
            </p>
            <div className="p-4 rounded-xl bg-slate-950 font-mono text-emerald-400 text-xs">
              npm run build
            </div>
            <p className="text-xs text-slate-400">
              The compiled production assets are generated in the `/dist` folder.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <Key className="w-5 h-5 text-amber-400" />
              <span>Connecting Web Forms to Real Email / CRM (Webhook)</span>
            </h2>
            <p>
              In production, you can forward submissions directly to your email inbox (e.g. `enquiry@assamsecurity.in`) by adding an email dispatch API endpoint in `server.ts` or attaching a Formspree / Webhook / Resend API key to `src/pages/QuotePage.tsx`.
            </p>
          </div>
        </div>
      )}

    </div>
  );
};
