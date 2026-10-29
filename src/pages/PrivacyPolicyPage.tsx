import React, { useEffect } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ShieldCheck, Lock, FileText, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const PrivacyPolicyPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Privacy Policy & Data Security | Assam Security Intelligent Service';
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />

      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" />
          <span>Statutory Data Protection</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">
          Privacy Policy & Applicant Data Protection
        </h1>
        <p className="text-xs text-slate-400">
          Last Updated: March 2026 · Official governance guidelines of Assam Security Intelligent Service.
        </p>
      </div>

      <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <Lock className="w-4 h-4 text-amber-400" />
            <span>1. Scope & Commitment</span>
          </h2>
          <p>
            Assam Security Intelligent Service ("ASIS", "we", "our") respects the privacy and confidentiality of corporate clients, residential facility managers, and career applicants. This policy explains how we collect, store, and process personal and organizational data obtained through our website and on-site consultations.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">2. Information Collected from Commercial Enquiries</h2>
          <p>
            When you request a quotation or consultation, we collect:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-400">
            <li>Contact person name, organizational designation, and business name</li>
            <li>Direct telephone/mobile numbers and official email addresses</li>
            <li>Premises location, district in Assam, and physical guarding parameters</li>
          </ul>
          <p className="text-xs text-slate-400 mt-2">
            This information is used strictly to prepare formal Service Level Agreements (SLAs), conduct threat surveys, and calculate statutory wage allocations.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">3. Job Applicant Background Verification</h2>
          <p>
            In compliance with the Private Security Agencies (Regulation) Act, 2005 (PSARA) and Assam State PSARA Rules:
          </p>
          <ul className="list-disc list-inside space-y-1 text-slate-400">
            <li>Candidate bio-data and identification documents are verified with local police stations.</li>
            <li>Criminal records and character background checks are mandatory prior to active deployment.</li>
            <li>Applicant documents are retained securely and never sold or shared with commercial marketing agencies.</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">4. Confidentiality of Client Premises Blueprints</h2>
          <p>
            We adhere to strict non-disclosure policies regarding client architectural blueprints, CCTV camera locations, server room access logs, and safe deposit access schedules. All operational staff sign binding non-disclosure agreements before commencing duty.
          </p>
        </section>

        <section className="space-y-2 pt-4 border-t border-slate-800">
          <h2 className="text-base font-bold text-white">5. Contact Our Data Compliance Desk</h2>
          <p>
            For any questions regarding personal data protection, contact our administrative office:
          </p>
          <div className="text-xs text-slate-400">
            <div>Email: {COMPANY_INFO.contacts.emailOfficial}</div>
            <div>Phone: {COMPANY_INFO.contacts.phoneFormattedDisplay}</div>
            <div>Registered Address: {COMPANY_INFO.headquarters.addressLine1}, {COMPANY_INFO.headquarters.city}, Assam – {COMPANY_INFO.headquarters.pincode}</div>
          </div>
        </section>
      </div>
    </div>
  );
};
