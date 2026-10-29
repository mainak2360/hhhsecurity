import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { COMPANY_INFO, SERVICES_CATALOG } from '../data/companyData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { QuoteRequest } from '../types';
import {
  ShieldCheck,
  FileSpreadsheet,
  CheckCircle2,
  AlertCircle,
  Plus,
  Minus,
  ArrowRight,
  PhoneCall,
  Clock,
  Building2,
  MapPin,
  Calendar
} from 'lucide-react';

export const QuotePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service');

  const [formData, setFormData] = useState({
    customerName: '',
    companyName: '',
    phone: '',
    email: '',
    siteLocation: '',
    district: 'Guwahati (Kamrup Metro)',
    numberOfGuards: 2,
    shiftRequirements: '24-7-continuous' as '8h-day' | '8h-night' | '12h-rotational' | '24-7-continuous',
    commencementDate: 'Within 7 to 15 Days',
    additionalRequirements: '',
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedQuote, setSubmittedQuote] = useState<QuoteRequest | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    document.title = 'Request a Free Security Quote | Assam Security Intelligent Service';
  }, []);

  const assamDistricts = [
    'Guwahati (Kamrup Metro)',
    'Kamrup Rural',
    'Dibrugarh',
    'Jorhat',
    'Silchar (Cachar)',
    'Tinsukia',
    'Tezpur (Sonitpur)',
    'Nagaon',
    'Bongaigaon',
    'Barpeta',
    'Darrang',
    'Dhubri',
    'Golaghat',
    'Hailakandi',
    'Karimganj',
    'Lakhimpur',
    'Morigaon',
    'Nalbari',
    'Sivasagar',
    'Udalguri',
    'Other District in Assam'
  ];

  // Pre-select service from URL query param if present
  useEffect(() => {
    if (serviceParam) {
      const match = SERVICES_CATALOG.find((s) => s.id === serviceParam || s.title.toLowerCase().includes(serviceParam.toLowerCase()));
      if (match) {
        setSelectedServices([match.title]);
        return;
      }
    }
    if (selectedServices.length === 0) {
      setSelectedServices(['Manned Guarding & Security Personnel']);
    }
  }, [serviceParam]);

  const toggleService = (title: string) => {
    if (selectedServices.includes(title)) {
      if (selectedServices.length === 1) return; // Keep at least one
      setSelectedServices(selectedServices.filter((s) => s !== title));
    } else {
      setSelectedServices([...selectedServices, title]);
    }
  };

  const handleGuardCount = (delta: number) => {
    const next = formData.numberOfGuards + delta;
    if (next >= 1 && next <= 100) {
      setFormData({ ...formData, numberOfGuards: next });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.customerName.trim()) {
      setErrorMsg('Please enter your full name.');
      return;
    }

    if (!formData.companyName.trim()) {
      setErrorMsg('Please specify your company, organization, or residential complex name.');
      return;
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number for proposal discussion.');
      return;
    }

    if (!formData.email.trim()) {
      setErrorMsg('Please provide a corporate or personal email to receive the written rate card.');
      return;
    }

    if (!formData.siteLocation.trim()) {
      setErrorMsg('Please specify the site address / landmark in Assam.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const refNo = 'ASIS-QTE-' + Math.floor(100000 + Math.random() * 900000);
      const newQuote: QuoteRequest = {
        id: 'quote_' + Date.now(),
        referenceNo: refNo,
        timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        customerName: formData.customerName.trim(),
        companyName: formData.companyName.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        requiredServices: selectedServices,
        siteLocation: formData.siteLocation.trim(),
        district: formData.district,
        numberOfGuards: formData.numberOfGuards,
        shiftRequirements: formData.shiftRequirements,
        commencementDate: formData.commencementDate,
        additionalRequirements: formData.additionalRequirements.trim() || undefined,
        status: 'pending',
      };

      try {
        const existing = JSON.parse(localStorage.getItem('asis_quotes') || '[]');
        localStorage.setItem('asis_quotes', JSON.stringify([newQuote, ...existing]));
      } catch (err) {
        console.error('Storage error', err);
      }

      setIsSubmitting(false);
      setSubmittedQuote(newQuote);
    }, 750);
  };

  return (
    <div className="w-full space-y-16 py-6 sm:py-10">
      
      {/* 1. Header Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Request a Quote' }]} />

        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
            <FileSpreadsheet className="w-4 h-4" />
            <span>Official Lead Generation & Rate Card Estimator</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2]" style={{ textWrap: 'balance' }}>
            Request a Free Security Proposal & Quotation
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            Provide your facility specifications below. Our operations planners calculate optimal guard post distribution, shift rotations, and statutory wage billing tailored to Assam.
          </p>
        </div>
      </section>

      {/* 2. Main Form & Estimator Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form: 8 Columns */}
          <div className="lg:col-span-8 p-6 sm:p-10 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-6">
            
            {submittedQuote ? (
              <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4 animate-in fade-in">
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-white">
                  Security Quotation Request Confirmed!
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
                  Thank you, <strong>{submittedQuote.customerName}</strong> ({submittedQuote.companyName}). Your security deployment request has been logged.
                </p>

                <div className="p-4 bg-slate-950 rounded-xl max-w-md mx-auto border border-slate-800 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>Quotation Reference:</span>
                    <span className="font-mono font-bold text-amber-400">{submittedQuote.referenceNo}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Guards Requested:</span>
                    <span className="text-white font-medium">{submittedQuote.numberOfGuards} Personnel</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Shift Model:</span>
                    <span className="text-white font-medium">{submittedQuote.shiftRequirements}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Site District:</span>
                    <span className="text-white font-medium">{submittedQuote.district}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 max-w-md mx-auto">
                  A detailed formal quotation with breakdown of basic wages, EPF, ESIC, uniform allowances, and supervisory visit schedule will be sent to <strong>{submittedQuote.email}</strong>.
                </p>

                <div className="pt-2 flex justify-center gap-3">
                  <button
                    onClick={() => {
                      setSubmittedQuote(null);
                      setFormData({
                        customerName: '',
                        companyName: '',
                        phone: '',
                        email: '',
                        siteLocation: '',
                        district: 'Guwahati (Kamrup Metro)',
                        numberOfGuards: 2,
                        shiftRequirements: '24-7-continuous',
                        commencementDate: 'Within 7 to 15 Days',
                        additionalRequirements: '',
                      });
                    }}
                    className="px-6 py-2.5 text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors"
                  >
                    Submit Another Quote Request
                  </button>
                  <Link
                    to="/contact"
                    className="px-6 py-2.5 text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg transition-colors"
                  >
                    Direct Contact Desk &rarr;
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 text-xs">
                
                {errorMsg && (
                  <div className="p-3.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                {/* Section A: Client & Organization Details */}
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2">
                    <Building2 className="w-4 h-4" />
                    <span>1. Client & Organization Information</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-slate-300 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Bijit Sarma"
                        value={formData.customerName}
                        onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-300 mb-1.5">
                        Company / Organization / Society Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Pragjyotish Logistics Ltd / Green View Apts"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-3">
                    <div>
                      <label className="block font-semibold text-slate-300 mb-1.5">
                        Direct Contact Phone / Mobile *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 98640 XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-300 mb-1.5">
                        Official Email for Rate Card *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. procurement@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Section B: Security Services Required */}
                <div className="pt-4 border-t border-slate-800">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span>2. Required Security Services (Select all that apply)</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {SERVICES_CATALOG.map((s) => {
                      const isSelected = selectedServices.includes(s.title);
                      return (
                        <div
                          key={s.id}
                          onClick={() => toggleService(s.title)}
                          className={`p-3 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                            isSelected
                              ? 'bg-amber-500/10 border-amber-400/80 text-white'
                              : 'bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => {}}
                            className="w-4 h-4 rounded text-amber-500 focus:ring-amber-400 border-slate-700 bg-slate-900 mt-0.5"
                          />
                          <div>
                            <div className="font-semibold text-xs leading-snug">{s.title}</div>
                            <div className="text-[10px] text-slate-400 mt-0.5 line-clamp-1">{s.shortDesc}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Section C: Site Location & Guarding Parameters */}
                <div className="pt-4 border-t border-slate-800">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>3. Site Location & Guarding Parameters</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-semibold text-slate-300 mb-1.5">
                        Premises District in Assam *
                      </label>
                      <select
                        value={formData.district}
                        onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white focus:border-amber-400 focus:outline-none"
                      >
                        {assamDistricts.map((d) => (
                          <option key={d} value={d}>{d}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block font-semibold text-slate-300 mb-1.5">
                        Site Address / Landmark *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. VIP Road, Borjhar / Amingaon Industrial Area"
                        value={formData.siteLocation}
                        onChange={(e) => setFormData({ ...formData, siteLocation: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Guard Quantity Stepper & Shift Model */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    
                    {/* Guard Count Stepper */}
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                      <label className="block font-semibold text-slate-300">
                        Estimated Number of Guards / Staff
                      </label>
                      <div className="flex items-center gap-4">
                        <button
                          type="button"
                          onClick={() => handleGuardCount(-1)}
                          className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700 hover:border-slate-600 text-white flex items-center justify-center transition-colors"
                          aria-label="Decrease guards count"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="text-xl font-bold font-mono text-amber-400 w-12 text-center">
                          {formData.numberOfGuards}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleGuardCount(1)}
                          className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-700 hover:border-slate-600 text-white flex items-center justify-center transition-colors"
                          aria-label="Increase guards count"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                        <span className="text-xs text-slate-400">Personnel</span>
                      </div>
                    </div>

                    {/* Shift Model */}
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                      <label className="block font-semibold text-slate-300">
                        Shift Requirements *
                      </label>
                      <select
                        value={formData.shiftRequirements}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            shiftRequirements: e.target.value as any,
                          })
                        }
                        className="w-full px-3 py-2 rounded-lg bg-slate-900 border border-slate-700 text-white focus:border-amber-400 focus:outline-none"
                      >
                        <option value="24-7-continuous">24/7 Continuous (Day & Night Rotational)</option>
                        <option value="8h-day">8 Hours Day Shift (General Office Hours)</option>
                        <option value="8h-night">8 Hours Night Shift (Night Guarding Only)</option>
                        <option value="12h-rotational">12 Hours 2-Shift Rotational</option>
                      </select>
                    </div>

                  </div>

                  {/* Commencement Timeline */}
                  <div className="mt-4">
                    <label className="block font-semibold text-slate-300 mb-1.5">
                      Desired Mobilization Date / Timeline
                    </label>
                    <select
                      value={formData.commencementDate}
                      onChange={(e) => setFormData({ ...formData, commencementDate: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white focus:border-amber-400 focus:outline-none"
                    >
                      <option value="Immediate / Emergency (within 48 hours)">Immediate / Emergency (within 48 hours)</option>
                      <option value="Within 7 to 15 Days">Within 7 to 15 Days (Recommended for induction)</option>
                      <option value="Next Month">Next Month</option>
                      <option value="Currently Exploring / Planning Stage">Currently Exploring / Planning Stage</option>
                    </select>
                  </div>

                  {/* Additional notes */}
                  <div className="mt-4">
                    <label className="block font-semibold text-slate-300 mb-1.5">
                      Specific Instructions or Asset Details (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="e.g. Weighbridge inspection needed, metal detector required, or specific uniform requirements..."
                      value={formData.additionalRequirements}
                      onChange={(e) => setFormData({ ...formData, additionalRequirements: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider bg-amber-500 hover:bg-amber-400 active:scale-[0.99] text-slate-950 rounded-xl transition-all shadow-xl disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <FileSpreadsheet className="w-4 h-4" />
                  <span>{isSubmitting ? 'Calculating & Generating Proposal...' : 'Submit Security Quotation Request'}</span>
                </button>

              </form>
            )}

          </div>

          {/* Right Column: Instant Estimate Summary & Assurance */}
          <div className="lg:col-span-4 space-y-6">
            
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Deployment Scope Preview
              </h3>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Selected Services:</span>
                  <span className="font-semibold text-white text-right">{selectedServices.length} Selected</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Personnel Headcount:</span>
                  <span className="font-bold text-amber-400">{formData.numberOfGuards} Guards</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Supervisory Patrol:</span>
                  <span className="text-emerald-400">Included (Free of Cost)</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Statutory Compliances:</span>
                  <span className="text-slate-200">EPF, ESIC, State Wages</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Replacement Guarantee:</span>
                  <span className="text-slate-200">&le; 2 Hours for Absence</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400 space-y-1">
                <strong className="text-slate-200 block">Why Request a Formal Quotation?</strong>
                <p>
                  Private security rates in Assam are governed by statutory minimum wages plus administrative overheads. We provide transparent itemized proposals with zero hidden surcharges.
                </p>
              </div>
            </div>

            {/* Direct Telephone Support */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
                <PhoneCall className="w-4 h-4" />
                <span>Prefer to Speak Directly?</span>
              </div>
              <p className="text-xs text-slate-300">
                Call our senior deployment specialist right now for an immediate verbal estimate:
              </p>
              <div className="pt-1">
                <a
                  href={`tel:${COMPANY_INFO.contacts.phonePrimary.replace(/[^0-9+]/g, '')}`}
                  className="inline-block font-mono text-sm font-bold text-amber-400 hover:text-amber-300"
                >
                  {COMPANY_INFO.contacts.phoneFormattedDisplay}
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
