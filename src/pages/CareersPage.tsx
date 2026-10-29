import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { JOB_VACANCIES, COMPANY_INFO } from '../data/companyData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CareerApplication } from '../types';
import { Briefcase, Upload, CheckCircle2, AlertCircle, FileText, ShieldCheck, ChevronRight, UserCheck, ArrowRight } from 'lucide-react';

export const CareersPage: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string>('Security Guard (Manned Guarding)');
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
    document.title = 'Careers & Guard Recruitment | Assam Security Intelligent Service';
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
      setErrorMsg('Please enter your full name as per Aadhaar or official ID.');
      return;
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setErrorMsg('Please provide a valid 10-digit Indian mobile number for interview calling.');
      return;
    }

    if (!formData.consentGiven) {
      setErrorMsg('You must agree to the background verification and police verification consent.');
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
        preferredRole: selectedRole,
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
    <div className="w-full space-y-16 py-6 sm:py-10">
      
      {/* 1. Header Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Careers & Recruitment' }]} />

        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
            <Briefcase className="w-4 h-4" />
            <span>Recruitment & Careers Desk</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2]" style={{ textWrap: 'balance' }}>
            Build a Respected Career in Private Security
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            Assam Security Intelligent Service offers dignified employment, structured pre-induction training, on-time monthly salary disbursement, and statutory benefits (EPF & ESIC) across Assam.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-1">
            <div className="font-bold text-white">Timely Salary</div>
            <div className="text-[11px] text-slate-400">Direct bank account transfer within the 7th of every month.</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-1">
            <div className="font-bold text-white">EPF & ESIC Benefits</div>
            <div className="text-[11px] text-slate-400">Provident fund accumulation and family medical coverage.</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-1">
            <div className="font-bold text-white">Free Uniforms & Kit</div>
            <div className="text-[11px] text-slate-400">Quality uniforms, boots, belt, cap, and badge provided.</div>
          </div>
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 space-y-1">
            <div className="font-bold text-white">Ex-Servicemen Welcome</div>
            <div className="text-[11px] text-slate-400">Dedicated armed & supervisory posts for defense veterans.</div>
          </div>
        </div>
      </section>

      {/* 2. Open Vacancies List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-white tracking-tight">
            Active Job Openings
          </h2>
          <p className="text-xs text-slate-400 mt-1">
            Select a position to prefill the application form below or visit its dedicated vacancy page.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {JOB_VACANCIES.map((job) => (
            <div
              key={job.id}
              className={`p-6 rounded-2xl bg-slate-900/80 border transition-all flex flex-col justify-between ${
                selectedRole === job.title
                  ? 'border-amber-400 ring-1 ring-amber-400/40 bg-slate-900'
                  : 'border-slate-800 hover:border-slate-700'
              }`}
            >
              <div>
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider block">
                      {job.type} · {job.openings} Openings
                    </span>
                    <Link to={`/careers/${job.id}`}>
                      <h3 className="text-lg font-bold text-white hover:text-amber-400 transition-colors mt-1">
                        {job.title}
                      </h3>
                    </Link>
                    <div className="text-xs text-slate-400 mt-0.5">
                      Location: {job.location}
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedRole(job.title);
                      const formElement = document.getElementById('application-form');
                      formElement?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                      selectedRole === job.title
                        ? 'bg-amber-500 text-slate-950 font-bold'
                        : 'bg-slate-800 hover:bg-slate-700 text-white'
                    }`}
                  >
                    {selectedRole === job.title ? 'Selected' : 'Apply Below'}
                  </button>
                </div>

                {/* Eligibility */}
                <div className="mt-4 pt-4 border-t border-slate-800 space-y-2 text-xs">
                  <span className="font-semibold text-slate-300 block">Eligibility Criteria:</span>
                  <ul className="space-y-1 text-slate-400 list-disc list-inside marker:text-amber-400">
                    {job.eligibility.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="line-clamp-1">{item}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <Link
                  to={`/careers/${job.id}`}
                  className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1"
                >
                  <span>Dedicated Vacancy Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Job Application Form */}
      <section id="application-form" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-6">
          
          <div className="border-b border-slate-800 pb-4">
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Job Application Enquiry Form
            </h2>
            <p className="text-xs text-slate-400 mt-1">
              Submit your particulars for preliminary screening. Shortlisted applicants will be contacted for physical measurement and document verification at our Guwahati recruitment office.
            </p>
          </div>

          {submittedApp ? (
            <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4 animate-in fade-in">
              <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-white">
                Application Successfully Submitted!
              </h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto">
                Thank you, <strong>{submittedApp.fullName}</strong>. Your enquiry for the position of <strong>{submittedApp.preferredRole}</strong> has been logged into our recruitment desk.
              </p>
              <div className="p-3 bg-slate-950 rounded-lg inline-block text-xs font-mono text-emerald-300 border border-slate-800">
                Application Tracking ID: {submittedApp.id.toUpperCase()}
              </div>
              <p className="text-[11px] text-slate-400">
                Our Recruitment Officer will call you on <strong>{submittedApp.phone}</strong> for document scrutiny.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setSubmittedApp(null);
                    setFormData({
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
                    setSelectedFile(null);
                  }}
                  className="px-5 py-2 text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors"
                >
                  Submit Another Application
                </button>
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

              {/* Position Selected */}
              <div>
                <label className="block font-semibold text-slate-300 mb-1.5">
                  Preferred Job Role *
                </label>
                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white focus:border-amber-400 focus:outline-none"
                >
                  {JOB_VACANCIES.map((j) => (
                    <option key={j.id} value={j.title}>
                      {j.title} ({j.location})
                    </option>
                  ))}
                  <option value="Control Room / CCTV Operator">Control Room / CCTV Operator</option>
                  <option value="Armed Sentinel (Gunman)">Armed Sentinel (Gunman)</option>
                  <option value="Event Security Marshal / Bouncer">Event Security Marshal / Bouncer</option>
                </select>
              </div>

              {/* Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-300 mb-1.5">
                    Applicant Full Name (As per ID Card) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Das"
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

              {/* District & Hometown */}
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
                    Current Village / Town / Locality
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Jalukbari, Guwahati"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Education & Experience */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-300 mb-1.5">
                    Educational Qualification *
                  </label>
                  <select
                    value={formData.education}
                    onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white focus:border-amber-400 focus:outline-none"
                  >
                    <option value="10th Pass (Matriculation)">10th Pass (Matriculation / HSLC)</option>
                    <option value="12th Pass (Higher Secondary)">12th Pass (Higher Secondary / HS)</option>
                    <option value="Graduate / Degree">Graduate / Degree Holder</option>
                    <option value="8th Standard Pass">8th Standard Pass</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-300 mb-1.5">
                    Prior Security Experience
                  </label>
                  <select
                    value={formData.experienceYears}
                    onChange={(e) => setFormData({ ...formData, experienceYears: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white focus:border-amber-400 focus:outline-none"
                  >
                    <option value="Freshers (0 years)">Fresher (No prior security experience)</option>
                    <option value="1 to 2 Years">1 to 2 Years Private Security</option>
                    <option value="3 to 5 Years">3 to 5 Years (Experienced Guard)</option>
                    <option value="5+ Years (Supervisor Grade)">5+ Years (Supervisor Grade)</option>
                  </select>
                </div>
              </div>

              {/* Ex-Serviceman Checkbox */}
              <div className="p-3.5 rounded-lg bg-slate-950 border border-slate-800 flex items-center gap-3">
                <input
                  type="checkbox"
                  id="exServiceman"
                  checked={formData.isExServiceman}
                  onChange={(e) => setFormData({ ...formData, isExServiceman: e.target.checked })}
                  className="w-4 h-4 rounded text-amber-500 focus:ring-amber-400 border-slate-700 bg-slate-900"
                />
                <label htmlFor="exServiceman" className="text-slate-300 font-medium cursor-pointer">
                  I am an Ex-Serviceman (Army / Navy / Air Force / Assam Rifles / CRPF / BSF / State Police)
                </label>
              </div>

              {/* Resume / Document Upload */}
              <div>
                <label className="block font-semibold text-slate-300 mb-1.5">
                  Upload Bio-data / Resume (Optional)
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
                      {selectedFile ? selectedFile.name : 'Click or drag your CV here (PDF, DOCX, or Image, max 5MB)'}
                    </span>
                    <span className="text-[11px] text-slate-500">
                      If you do not have a digital CV, you can still submit the form.
                    </span>
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block font-semibold text-slate-300 mb-1.5">
                  Additional Notes or Remarks (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us about your height, physical fitness, or preferred posting town..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                />
              </div>

              {/* Consent Notice */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                <div className="flex items-start gap-2.5">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    checked={formData.consentGiven}
                    onChange={(e) => setFormData({ ...formData, consentGiven: e.target.checked })}
                    className="w-4 h-4 rounded text-amber-500 focus:ring-amber-400 border-slate-700 bg-slate-900 mt-0.5 shrink-0"
                  />
                  <label htmlFor="consent" className="text-slate-400 text-[11px] leading-relaxed cursor-pointer">
                    I solemnly declare that all particulars stated above are true. I authorize Assam Security Intelligent Service to conduct necessary background verification, character reference checks, and local police verification in accordance with statutory PSARA guidelines.
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider bg-amber-500 hover:bg-amber-400 active:scale-[0.99] text-slate-950 rounded-xl transition-all shadow-md disabled:opacity-50"
              >
                {isSubmitting ? 'Recording Application...' : 'Submit Job Application'}
              </button>

            </form>
          )}

        </div>
      </section>

    </div>
  );
};
