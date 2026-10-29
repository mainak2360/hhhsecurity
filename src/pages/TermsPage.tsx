import React, { useEffect } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ShieldAlert, FileText, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const TermsPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Terms & Conditions | Assam Security Intelligent Service';
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />

      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
          <FileText className="w-4 h-4" />
          <span>Operational Service Terms</span>
        </div>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">
          Terms & Conditions of Security Engagement
        </h1>
        <p className="text-xs text-slate-400">
          Standard operational terms governing private security guarding and facility management contracts in Assam.
        </p>
      </div>

      <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
        <section className="space-y-2">
          <h2 className="text-base font-bold text-white flex items-center gap-2">
            <ShieldAlert className="w-4 h-4 text-amber-400" />
            <span>1. Regulatory Compliance (PSARA Framework)</span>
          </h2>
          <p>
            All security services are provided in strict conformance with the Private Security Agencies (Regulation) Act, 2005 (PSARA), Assam State PSARA Rules, and notifications issued by the Home Department, Government of Assam.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">2. Statutory Wage & Benefits Mandate</h2>
          <p>
            All deployed security personnel receive statutory wages conforming to minimum wage notifications for Security Guards (Semi-Skilled / Skilled category) along with EPF, ESIC, and statutory uniform allowances. Client invoices clearly reflect statutory breakdowns without undisclosed markups.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">3. Shift Schedules & Relief Personnel</h2>
          <p>
            Standard shift rosters follow 8-hour or 12-hour rotational models. Assam Security Intelligent Service maintains an active reliever pool to substitute guards in the event of sudden medical leave or emergencies within 2 hours.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">4. Incident Reporting & Daily Occurrence Books</h2>
          <p>
            Security guards maintain an on-site Daily Occurrence Book (DOB), visitor registers, and vehicle logbooks. Any security breach, gate damage, or unauthorized entry attempt is immediately escalated to the client's designated security administrator and logged with our 24/7 Guwahati operations command.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-base font-bold text-white">5. Commercial Invoicing & Payment Terms</h2>
          <p>
            Monthly security service invoices are submitted by the 1st of each month with proof of previous month's statutory challans (EPF & ESIC) upon request. Payments are processed via RTGS/NEFT or corporate cheque within agreed credit periods.
          </p>
        </section>

        <section className="space-y-2 pt-4 border-t border-slate-800">
          <h2 className="text-base font-bold text-white">6. Legal Jurisdiction</h2>
          <p>
            All contracts and disputes arising from service delivery are subject to the exclusive jurisdiction of the competent courts in Guwahati, Assam.
          </p>
        </section>
      </div>
    </div>
  );
};
