import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { JOB_VACANCIES, COMPANY_INFO } from '../data/companyData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CareerApplication } from '../types';
import {
  Briefcase,
  CheckCircle2,
  Clock,
  MapPin,
  ArrowRight,
  ArrowLeft,
  Upload,
  AlertCircle,
  FileCheck
} from 'lucide-react';

export const JobDetailPage: React.FC = () => {
  const { jobId } = useParams<{ jobId: string }>();

  const job = JOB_VACANCIES.find((j) => j.id === jobId);

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    district: 'Guwahati (Kamrup Metro)',
    location: '',
    experienceYears: 'Freshers (0 years)',
    isExServiceman: false,
    education: '10th Pass (Matriculation)',
    message: '',
    consentGiven: false,
  });

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedApp, setSubmittedApp] = useState<CareerApplication | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (job) {
      document.title = `${job.title} Recruitment | Assam Security Intelligent Service`;
    }
  }, [job]);

  if (!job) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center space-y-4">
        <h1 className="text-2xl font-bold text-white">Vacancy Not Found</h1>
        <p className="text-sm text-slate-400">
          The requested job position could not be located in our recruitment board.
        </p>
        <Link
          to="/careers"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 text-slate-950 font-bold text-xs uppercase"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Careers</span>
        </Link>
      </div>
    );
  }

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
    'Other District in Assam'
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size > 5 * 1024 * 1024) {
        setErrorMsg('Resume file size must be less than 5MB.');
        return;
      }
      setSelectedFile(file);
      setErrorMsg('');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.fullName.trim()) {
      setErrorMsg('Please enter your full name as per official ID.');
      return;
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit mobile number.');
      return;
    }

    if (!formData.consentGiven) {
      setErrorMsg('You must agree to the background verification consent.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const newApp: CareerApplication = {
        id: 'app_' + Date.now(),
        timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        fullName: formData.fullName.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim() || undefined,
        preferredRole: job.title,
        location: formData.location.trim() || formData.district,
        district: formData.district,
        experienceYears: formData.experienceYears,
        isExServiceman: formData.isExServiceman,
        education: formData.education,
        message: formData.message.trim() || undefined,
        fileName: selectedFile ? selectedFile.name : undefined,
        consentGiven: true,
      };

      try {
        const existing = JSON.parse(localStorage.getItem('asis_applications') || '[]');
        localStorage.setItem('asis_applications', JSON.stringify([newApp, ...existing]));
      } catch (err) {
        console.error('Storage error', err);
      }

      setIsSubmitting(false);
      setSubmittedApp(newApp);
    }, 700);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-12">
      
      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: 'Careers & Recruitment', path: '/careers' },
          { label: job.title }
        ]}
      />

      {/* Header Banner */}
      <section className="p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 shadow-xl space-y-4">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400">
            {job.type}
          </span>
          <span className="text-[10px] font-semibold px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            {job.openings} Openings Active
          </span>
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
          {job.title}
        </h1>

        <div className="flex flex-wrap items-center gap-6 text-xs text-slate-300 pt-1">
          <div className="flex items-center gap-1.5">
            <MapPin className="w-4 h-4 text-amber-400" />
            <span>{job.location}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Briefcase className="w-4 h-4 text-amber-400" />
            <span>Experience: {job.minExperience}</span>
          </div>
        </div>
      </section>

      {/* Responsibilities & Qualifications Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Responsibilities */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <FileCheck className="w-5 h-5 text-amber-400" />
            <span>Key Duties & Post Responsibilities</span>
          </h2>
          <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
            {job.responsibilities.map((resp, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{resp}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Eligibility Criteria */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-amber-400" />
            <span>Eligibility & Candidate Criteria</span>
          </h2>
          <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
            {job.eligibility.map((el, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-slate-950 border border-slate-800 text-amber-400 font-mono text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{el}</span>
              </li>
            ))}
          </ul>
        </div>

      </section>

      {/* Application Form */}
      <section className="p-6 sm:p-10 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-6">
        <div>
          <h2 className="text-xl font-bold text-white">
            Apply Online for: {job.title}
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Submit your information below to register your application directly with our recruitment desk.
          </p>
        </div>

        {submittedApp ? (
          <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">Application Recorded!</h3>
            <p className="text-xs text-slate-300 max-w-md mx-auto">
              Your application for <strong>{job.title}</strong> has been logged under Tracking ID: <strong>{submittedApp.id.toUpperCase()}</strong>.
            </p>
            <div className="pt-2">
              <Link
                to="/careers"
                className="px-5 py-2 text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white rounded-lg inline-block"
              >
                View Other Openings &rarr;
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            {errorMsg && (
              <div className="p-3 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-300 mb-1.5">
                  Full Name (As per ID Card) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Manash Kalita"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-300 mb-1.5">
                  Mobile Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. 98640 12345"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-semibold text-slate-300 mb-1.5">
                  Home District in Assam *
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
                  Educational Qualification *
                </label>
                <select
                  value={formData.education}
                  onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white focus:border-amber-400 focus:outline-none"
                >
                  <option value="10th Pass (Matriculation)">10th Pass (Matriculation)</option>
                  <option value="12th Pass (Higher Secondary)">12th Pass (Higher Secondary)</option>
                  <option value="Graduate / Degree">Graduate / Degree Holder</option>
                  <option value="8th Standard Pass">8th Standard Pass</option>
                </select>
              </div>
            </div>

            {/* Resume Upload */}
            <div>
              <label className="block font-semibold text-slate-300 mb-1.5">
                Upload Resume / Bio-Data (Optional)
              </label>
              <div className="relative border-2 border-dashed border-slate-800 hover:border-slate-700 rounded-xl p-4 text-center">
                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  onChange={handleFileChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
                <div className="flex flex-col items-center justify-center space-y-1">
                  <Upload className="w-5 h-5 text-amber-400" />
                  <span className="text-slate-300 font-medium">
                    {selectedFile ? selectedFile.name : 'Click to select CV (PDF, DOCX, or Image, max 5MB)'}
                  </span>
                </div>
              </div>
            </div>

            {/* Consent */}
            <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 flex items-start gap-2.5">
              <input
                type="checkbox"
                id="jobConsent"
                required
                checked={formData.consentGiven}
                onChange={(e) => setFormData({ ...formData, consentGiven: e.target.checked })}
                className="w-4 h-4 rounded text-amber-500 focus:ring-amber-400 border-slate-700 bg-slate-900 mt-0.5 shrink-0"
              />
              <label htmlFor="jobConsent" className="text-slate-400 text-[11px] leading-relaxed cursor-pointer">
                I authorize Assam Security Intelligent Service to conduct criminal background verification and police character verification in accordance with statutory PSARA standards.
              </label>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl transition-all shadow-md disabled:opacity-50"
            >
              {isSubmitting ? 'Transmitting Application...' : `Submit Application for ${job.title}`}
            </button>
          </form>
        )}
      </section>

    </div>
  );
};
