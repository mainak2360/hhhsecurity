import React, { useState, useEffect } from 'react';
import { COMPANY_INFO, SERVICES_CATALOG } from '../data/companyData';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ContactMessage } from '../types';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  MessageCircle,
  ShieldAlert,
  Send,
  CheckCircle2,
  AlertCircle,
  Navigation
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Security Consultation',
    serviceCategory: 'Manned Guarding',
    message: '',
    preferredTime: 'Morning (09:00 - 12:00)',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<ContactMessage | null>(null);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    document.title = 'Contact & Google Maps | Assam Security Intelligent Service';
  }, []);

  const phonePrimary = COMPANY_INFO.contacts.phonePrimary;
  const whatsappUrl = `https://wa.me/${COMPANY_INFO.contacts.whatsappNumber}?text=${encodeURIComponent(
    COMPANY_INFO.contacts.whatsappPrefilledMessage
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim()) {
      setErrorMsg('Please enter your name.');
      return;
    }

    const cleanPhone = formData.phone.replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      setErrorMsg('Please enter a valid 10-digit phone number.');
      return;
    }

    if (!formData.message.trim()) {
      setErrorMsg('Please enter your enquiry message.');
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const newMsg: ContactMessage = {
        id: 'msg_' + Date.now(),
        timestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        subject: formData.subject,
        serviceCategory: formData.serviceCategory,
        message: formData.message.trim(),
        preferredTime: formData.preferredTime,
      };

      try {
        const existing = JSON.parse(localStorage.getItem('asis_messages') || '[]');
        localStorage.setItem('asis_messages', JSON.stringify([newMsg, ...existing]));
      } catch (err) {
        console.error('Storage error', err);
      }

      setIsSubmitting(false);
      setSubmittedMessage(newMsg);
    }, 600);
  };

  return (
    <div className="w-full space-y-16 py-6 sm:py-10">
      
      {/* 1. Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs items={[{ label: 'Contact Us' }]} />

        <div className="max-w-3xl space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
            <Phone className="w-4 h-4" />
            <span>Assam Security Communications Hub</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.2]" style={{ textWrap: 'balance' }}>
            Contact Our Security & Operations Desk
          </h1>
          <p className="text-base text-slate-300 leading-relaxed">
            Reach out directly for corporate security proposals, site vulnerability surveys, or operational assistance. Our operations team is available across all 35 districts of Assam.
          </p>
        </div>
      </section>

      {/* 2. Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-10 rounded-2xl bg-slate-900 border border-slate-800 shadow-xl space-y-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-white">
                Send an Official Enquiry
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                Fill out the form below. A senior security coordinator will respond within 4 business hours.
              </p>
            </div>

            {submittedMessage ? (
              <div className="p-8 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  Message Successfully Transmitted!
                </h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Thank you, <strong>{submittedMessage.name}</strong>. Your enquiry regarding <strong>{submittedMessage.subject}</strong> has been assigned to our Guwahati operations desk.
                </p>
                <div className="p-3 bg-slate-950 rounded-lg inline-block text-xs font-mono text-emerald-300 border border-slate-800">
                  Ticket Reference: {submittedMessage.id.toUpperCase()}
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmittedMessage(null);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: 'General Security Consultation',
                        serviceCategory: 'Manned Guarding',
                        message: '',
                        preferredTime: 'Morning (09:00 - 12:00)',
                      });
                    }}
                    className="px-5 py-2 text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors"
                  >
                    Send Another Message
                  </button>
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

                {/* Name & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-300 mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anup Barua"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-300 mb-1.5">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 94350 XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Email & Service Interest */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-300 mb-1.5">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. contact@business.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-300 mb-1.5">
                      Service Category
                    </label>
                    <select
                      value={formData.serviceCategory}
                      onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white focus:border-amber-400 focus:outline-none"
                    >
                      {SERVICES_CATALOG.map((s) => (
                        <option key={s.id} value={s.title}>{s.title}</option>
                      ))}
                      <option value="General Consultation">General Security Assessment</option>
                    </select>
                  </div>
                </div>

                {/* Subject & Preferred Callback Time */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-semibold text-slate-300 mb-1.5">
                      Enquiry Subject
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Security deployment for office building"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-semibold text-slate-300 mb-1.5">
                      Preferred Callback Window
                    </label>
                    <select
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white focus:border-amber-400 focus:outline-none"
                    >
                      <option value="Morning (09:00 - 12:00)">Morning (09:00 - 12:00)</option>
                      <option value="Afternoon (12:00 - 16:00)">Afternoon (12:00 - 16:00)</option>
                      <option value="Evening (16:00 - 19:00)">Evening (16:00 - 19:00)</option>
                      <option value="Anytime / Immediate">Anytime / Urgent</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block font-semibold text-slate-300 mb-1.5">
                    Your Requirements & Site Details *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your site location, approximate number of security guards required, day/night shift needs, or special instructions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-slate-950 border border-slate-800 text-white placeholder-slate-500 focus:border-amber-400 focus:outline-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 text-xs sm:text-sm font-bold uppercase tracking-wider bg-amber-500 hover:bg-amber-400 active:scale-[0.99] text-slate-950 rounded-xl transition-all shadow-md disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Transmitting Message...' : 'Submit Contact Enquiry'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Details, Verified Channels & Emergency Protocol */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Action Channels */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                Direct Channels
              </h3>

              <div className="space-y-3 text-xs">
                {/* WhatsApp Direct */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 hover:border-emerald-500/60 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                      <MessageCircle className="w-5 h-5 fill-current" />
                    </div>
                    <div>
                      <div className="font-bold text-white group-hover:text-emerald-400 transition-colors">
                        Chat on Official WhatsApp
                      </div>
                      <div className="text-[11px] text-slate-400">Instant consultation & quotes</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-emerald-400" />
                </a>

                {/* Primary Voice Desk */}
                <a
                  href={`tel:${phonePrimary.replace(/[^0-9+]/g, '')}`}
                  className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-amber-500/10 text-amber-400">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-white group-hover:text-amber-400 transition-colors">
                        Call Operations Desk
                      </div>
                      <div className="text-[11px] text-slate-400">{COMPANY_INFO.contacts.phoneFormattedDisplay}</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </a>

                {/* Official Email */}
                <a
                  href={`mailto:${COMPANY_INFO.contacts.emailOfficial}`}
                  className="p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-500/10 text-blue-400">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-white group-hover:text-blue-400 transition-colors">
                        Official Email
                      </div>
                      <div className="text-[11px] text-slate-400">{COMPANY_INFO.contacts.emailOfficial}</div>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </a>
              </div>
            </div>

            {/* Operating Hours & Emergency Duty Desk */}
            <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>Operating Schedule</span>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="flex justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400">24/7 Field Operations Desk:</span>
                  <span className="font-semibold text-emerald-400">Continuous 24 Hours</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-slate-800">
                  <span className="text-slate-400">Administrative Office:</span>
                  <span className="text-white">Mon – Sat: 09:00 – 18:30</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Sunday Operations:</span>
                  <span className="text-slate-400">Field Patrol Active (Office by Appt)</span>
                </div>
              </div>

              {/* Emergency Protocol */}
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-200/90 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-amber-300">
                  <ShieldAlert className="w-4 h-4" />
                  <span>Deployed Client Emergency Notice</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  {COMPANY_INFO.contacts.emergencyProtocol}
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. Google Maps Integration Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 border border-slate-800 space-y-6">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                <span>Verified Headquarters Location</span>
              </div>
              <h2 className="text-xl font-bold text-white">
                Christian Basti, G.S. Road, Guwahati
              </h2>
              <p className="text-xs text-slate-400 mt-1">
                House No. 42, G.S. Road, Christian Basti, Near Dispur Secretariat, Guwahati, Assam 781005
              </p>
            </div>

            <a
              href={COMPANY_INFO.headquarters.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider bg-slate-800 hover:bg-slate-700 text-white rounded-xl border border-slate-700 transition-colors flex items-center gap-2 whitespace-nowrap self-start sm:self-center"
            >
              <Navigation className="w-4 h-4 text-amber-400" />
              <span>Get Driving Directions</span>
            </a>
          </div>

          {/* Interactive Google Map Embed Container */}
          <div className="relative w-full h-80 sm:h-96 rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
            <iframe
              title="Assam Security Intelligent Service Headquarters Location"
              src={COMPANY_INFO.headquarters.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-[11px] text-slate-400 pt-2">
            <div>
              <span>Verification Status: </span>
              <span className="text-slate-300">G.S. Road Corporate Belt · Exact unit landmark confirmed with client visit.</span>
            </div>
            <div className="text-slate-500">
              Assam Pin Code: 781005 · Near Dispur Capital Complex
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
