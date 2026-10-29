import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO, SERVICES_CATALOG, INDUSTRIES_CATALOG } from '../data/companyData';
import { ServiceIllustration } from '../components/VisualShowcase';
import { VideoModal } from '../components/VideoModal';
import {
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
  Play,
  Eye,
  Award,
  Clock,
  PhoneCall,
  ChevronRight,
  FileCheck,
  Briefcase
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  useEffect(() => {
    document.title = 'Assam Security Intelligent Service | Your Safety. Our Responsibility.';
  }, []);

  return (
    <div className="w-full bg-[#070b14] text-slate-100 overflow-hidden relative">
      
      {/* 1. Main Cinematic Hero Section with User's Uploaded Background Image */}
      <section
        aria-label="Your Safety. Our Responsibility."
        className="relative w-full min-h-[90vh] lg:min-h-[96vh] flex items-center justify-start overflow-hidden bg-[#030c19] border-b border-slate-800/70"
      >
        {/* Full-Width Cinematic Background Image (Exact attached photo) */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-no-repeat bg-[position:25%_center] sm:bg-[position:35%_center] md:bg-center transition-all duration-700"
          style={{
            backgroundImage: `url('/assets/aistudio/Why_Are_Private_Security_Services_Growing_in_Demand__fa654d64.jpg')`,
            backgroundColor: '#030c19',
          }}
          role="img"
          aria-label="Professional security guard vigilant beside modern corporate glass building at night"
        />

        {/* Professional Dark Navy-Blue Gradient Overlay requested by user */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background: 'linear-gradient(90deg, rgba(3, 12, 25, 0.88) 0%, rgba(3, 12, 25, 0.58) 48%, rgba(3, 12, 25, 0.18) 100%)',
          }}
        />

        {/* Mobile vertical gradient reinforcement for pristine text readability */}
        <div className="absolute inset-0 z-[2] pointer-events-none md:hidden bg-gradient-to-t from-[#030c19] via-[#030c19]/65 to-[#030c19]/40" />

        {/* Subtle top & bottom edge vignettes for smooth transitions */}
        <div className="absolute inset-x-0 top-0 h-28 z-[2] pointer-events-none bg-gradient-to-b from-[#030c19]/90 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-32 z-[2] pointer-events-none bg-gradient-to-t from-[#070b14] to-transparent" />

        {/* Hero Content Positioned on Left Side */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 lg:py-28">
          <div className="max-w-2xl space-y-6 sm:space-y-8 animate-hero-fade">
            
            {/* Small Label */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#030c19]/75 border border-amber-400/40 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
              <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.2em] text-amber-300">
                PROFESSIONAL SECURITY &amp; FACILITY MANAGEMENT
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.08] text-white">
              Your Safety. <br />
              <span className="text-amber-400 font-serif italic font-normal tracking-wide">
                Our Responsibility.
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal max-w-xl drop-shadow-sm">
              Reliable security solutions designed to protect your people, property, and business with confidence.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/quote"
                className="px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-slate-950 transition-all shadow-xl hover:shadow-amber-500/30 flex items-center gap-2 group hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Request a Quote</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              <Link
                to="/services"
                className="px-8 py-4 rounded-full text-xs sm:text-sm font-semibold tracking-wide text-slate-100 hover:text-white bg-[#030c19]/75 hover:bg-slate-800/90 border border-slate-600/80 hover:border-amber-400/60 backdrop-blur-md transition-all flex items-center gap-2 group hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Explore Our Services</span>
                <ArrowUpRight className="w-4 h-4 text-amber-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Subtle Trust Indicators on Left */}
            <div className="pt-6 sm:pt-8 flex flex-wrap items-center gap-5 sm:gap-8 text-xs text-slate-300 border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>PSARA Licensed Standard</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>100% Police Verified Personnel</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>24/7 Operations Command</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Key Trust Indicators Strip - Transparent Surface */}
      <section className="border-b border-slate-800/70 bg-transparent py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left bg-transparent">
            
            <div className="space-y-1 bg-transparent">
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                24/7
              </div>
              <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                Vigilance Command
              </div>
              <p className="text-[11px] text-slate-400">
                Round-the-clock control room &amp; surprise field audits.
              </p>
            </div>

            <div className="space-y-1 bg-transparent">
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                100%
              </div>
              <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                Vetted Guards
              </div>
              <p className="text-[11px] text-slate-400">
                Local police station character &amp; background verification.
              </p>
            </div>

            <div className="space-y-1 bg-transparent">
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                35
              </div>
              <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                Districts of Assam
              </div>
              <p className="text-[11px] text-slate-400">
                Operational reach across Upper, Lower, and Central Assam.
              </p>
            </div>

            <div className="space-y-1 bg-transparent">
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                PSARA
              </div>
              <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider">
                Compliance Standard
              </div>
              <p className="text-[11px] text-slate-400">
                Governed under Private Security Agencies Act standards.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Patrol Command & Drill Showcase Card */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 bg-transparent">
        <div className="relative w-full rounded-2xl sm:rounded-3xl lg:rounded-[2rem] overflow-hidden border border-slate-700/60 shadow-2xl bg-transparent group">
          
          <div className="relative w-full aspect-[16/9] max-h-[500px] min-h-[340px] sm:min-h-[420px] overflow-hidden">
            <img
              src="/assets/aistudio/Screenshot_2026-10-30_024509_2ee05d79.png"
              alt="Professional Security Guard Patrolling Corridor with Flashlight"
              className="w-full h-full object-cover object-center group-hover:scale-[1.01] transition-transform duration-700"
            />

            {/* Atmospheric Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070b14] via-transparent to-transparent opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#070b14]/50 via-transparent to-[#070b14]/50" />

            {/* Interactive Frosted Glass Play Button */}
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-slate-950/50 hover:bg-slate-950/75 border border-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all shadow-2xl hover:scale-110 active:scale-95 group/btn"
              aria-label="Watch Security Guard Turnout Drill video preview"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/15 flex items-center justify-center">
                <Play className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-white ml-1 transition-transform group-hover/btn:scale-110" />
              </div>
            </button>

            {/* Live Status Overlay Top-Right */}
            <div className="absolute top-5 right-5 sm:top-7 sm:right-7 z-10 hidden sm:flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-950/70 border border-slate-700/80 backdrop-blur-md text-xs font-semibold text-slate-200">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Active 24/7 Patrol Command</span>
            </div>

            {/* Bottom Integrated Stats Bar Overlay */}
            <div className="absolute bottom-0 left-0 right-0 z-20 p-6 sm:p-8 bg-gradient-to-t from-[#070b14]/95 via-[#070b14]/60 to-transparent">
              <div className="grid grid-cols-3 max-w-xl sm:max-w-2xl gap-4 sm:gap-8 items-end bg-transparent">
                
                <div className="space-y-1 bg-transparent">
                  <div className="text-[10px] sm:text-xs font-medium text-slate-300">
                    Successful Projects
                  </div>
                  <div className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-sans drop-shadow-md">
                    2500+
                  </div>
                </div>

                <div className="space-y-1 pl-4 sm:pl-8 border-l border-slate-700/70 bg-transparent">
                  <div className="text-[10px] sm:text-xs font-medium text-slate-300">
                    Years in Business
                  </div>
                  <div className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-sans drop-shadow-md">
                    650+
                  </div>
                </div>

                <div className="space-y-1 pl-4 sm:pl-8 border-l border-slate-700/70 bg-transparent">
                  <div className="text-[10px] sm:text-xs font-medium text-slate-300">
                    Happy Customers
                  </div>
                  <div className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight font-sans drop-shadow-md">
                    380M+
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Services Overview - Transparent cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-transparent">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 bg-transparent">
          <div className="bg-transparent">
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
              Our Security Capabilities
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Comprehensive Protection &amp; Facility Solutions
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-2xl">
              From commercial high-rises to industrial warehouses, we deploy disciplined personnel trained to manage access, mitigate threats, and maintain order.
            </p>
          </div>
          <Link
            to="/services"
            className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 uppercase tracking-wider shrink-0 bg-transparent"
          >
            <span>View All 8 Services</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* 6 Featured Service Cards with Transparent Background */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 bg-transparent">
          {SERVICES_CATALOG.slice(0, 6).map((service) => (
            <div
              key={service.id}
              className="group p-6 rounded-2xl bg-transparent border border-slate-800/80 hover:border-amber-400/50 hover:bg-slate-900/20 backdrop-blur-xs transition-all hover:shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-4 bg-transparent">
                <ServiceIllustration
                  type={service.id}
                  title={service.title}
                  category={service.category}
                />
                
                <div className="bg-transparent">
                  <div className="flex items-center justify-between gap-2 mb-1.5 bg-transparent">
                    <span className="text-[11px] font-mono text-amber-400 uppercase tracking-wider bg-transparent">
                      {service.category}
                    </span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded bg-transparent ${
                        service.status === 'Confirmed'
                          ? 'text-emerald-400 border border-emerald-500/30'
                          : 'text-amber-300 border border-amber-500/30'
                      }`}
                    >
                      {service.status === 'Confirmed' ? 'Confirmed Service' : 'Tailored Scope'}
                    </span>
                  </div>
                  <Link to={`/services/${service.id}`}>
                    <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                      {service.title}
                    </h3>
                  </Link>
                  <p className="text-xs text-slate-300 mt-2 leading-relaxed line-clamp-3">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Key Benefits Preview */}
                <div className="pt-2 border-t border-slate-800/80 space-y-1.5 text-xs text-slate-400 bg-transparent">
                  {service.benefits.slice(0, 2).map((benefit, i) => (
                    <div key={i} className="flex items-start gap-2 bg-transparent">
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-400/80 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between bg-transparent">
                <Link
                  to={`/services/${service.id}`}
                  className="text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  SOP &amp; Specs &rarr;
                </Link>
                <Link
                  to={`/quote?service=${encodeURIComponent(service.id)}`}
                  className="px-3 py-1.5 text-xs font-semibold bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-lg transition-colors"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Why Choose Us Section */}
      <section className="relative border-y border-slate-800/80 py-20 lg:py-24 overflow-hidden bg-transparent">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 bg-transparent">
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
              The ASIS Security Standard
            </div>
            <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight">
              Why Assam Security Intelligent Service?
            </h2>
            <p className="text-sm text-slate-300 mt-3 leading-relaxed">
              We eliminate the common pitfalls of private security: absenteeism, lack of supervision, and untrained guards. Here is how our operational framework protects your assets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-transparent">
            
            <div className="p-6 rounded-2xl bg-transparent border border-slate-800/80 hover:border-amber-400/50 hover:bg-slate-900/20 backdrop-blur-sm space-y-3 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white">Rigorous Pre-Induction Training</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Before setting foot on a client premises, every guard completes training in gate management, visitor screening, fire-fighting, and emergency de-escalation.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-transparent border border-slate-800/80 hover:border-amber-400/50 hover:bg-slate-900/20 backdrop-blur-sm space-y-3 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                <FileCheck className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white">100% Police Verification</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We conduct complete criminal background checks, address validation, and police character verification on every security guard and supervisor deployed.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-transparent border border-slate-800/80 hover:border-amber-400/50 hover:bg-slate-900/20 backdrop-blur-sm space-y-3 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white">24/7 Field Inspections</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Mobile Field Officers conduct unannounced day and night surprise visits, stamp site visitor logs, inspect turnout, and verify alertness at odd hours.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-transparent border border-slate-800/80 hover:border-amber-400/50 hover:bg-slate-900/20 backdrop-blur-sm space-y-3 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white">Statutory Labour Compliance</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                We protect clients from statutory liabilities by maintaining full compliance with EPF, ESIC, and minimum wage notifications issued by the Government of Assam.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Industries Served Preview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-transparent">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 bg-transparent">
          <div className="bg-transparent">
            <div className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
              Sectors We Protect
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Engineered for Key Assam Industries
            </h2>
            <p className="text-sm text-slate-400 mt-2 max-w-xl">
              Security requirements differ fundamentally between a tea processing plant, a corporate IT office, and a gated residential society.
            </p>
          </div>
          <Link
            to="/industries"
            className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 uppercase tracking-wider shrink-0 bg-transparent"
          >
            <span>Explore All 8 Industries</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-transparent">
          {INDUSTRIES_CATALOG.slice(0, 4).map((ind) => (
            <Link
              key={ind.id}
              to={`/industries/${ind.id}`}
              className="p-5 rounded-xl bg-transparent border border-slate-800/80 hover:border-amber-400/50 hover:bg-slate-900/20 backdrop-blur-xs transition-colors space-y-2 group block"
            >
              <h3 className="text-sm font-bold text-white group-hover:text-amber-400 transition-colors">
                {ind.name}
              </h3>
              <p className="text-xs text-slate-400 line-clamp-2">
                {ind.description}
              </p>
              <div className="text-[11px] text-amber-400/90 font-medium pt-1">
                View Risk SOPs &rarr;
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* 7. Recruitment / Careers Teaser */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 bg-transparent">
        <div className="p-8 sm:p-10 rounded-2xl bg-transparent border border-slate-800/80 hover:border-slate-700 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-6 transition-colors">
          <div className="space-y-2 max-w-xl bg-transparent">
            <div className="flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-wider bg-transparent">
              <Briefcase className="w-4 h-4" />
              <span>Career Opportunities at ASIS</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white">
              Join Assam’s Premier Security Personnel Squad
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              We are actively hiring disciplined Security Guards, Field Supervisors, Armed sentinels (Ex-Servicemen), and Facility attendants across Assam with timely salaries, EPF, and ESIC benefits.
            </p>
          </div>
          <Link
            to="/careers"
            className="px-6 py-3 text-xs sm:text-sm font-bold uppercase tracking-wider bg-transparent hover:bg-white/10 text-white rounded-xl border border-slate-700 hover:border-amber-400 transition-colors whitespace-nowrap shrink-0 backdrop-blur-xs"
          >
            Apply for Guard / Supervisor Roles
          </Link>
        </div>
      </section>

      {/* 8. Conversion CTA Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 bg-transparent">
        <div className="relative rounded-3xl overflow-hidden bg-transparent border border-amber-500/30 p-8 sm:p-12 text-center space-y-6 shadow-2xl backdrop-blur-sm">
          <div className="relative z-10 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-400 text-xs font-semibold border border-amber-500/20">
            <ShieldCheck className="w-4 h-4" />
            <span>Protect What Matters Most</span>
          </div>

          <h2 className="relative z-10 text-2xl sm:text-4xl font-extrabold text-white tracking-tight max-w-2xl mx-auto" style={{ textWrap: 'balance' }}>
            Ready to Secure Your Premises with Disciplined Professionals?
          </h2>

          <p className="relative z-10 text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
            Contact our security consultants for a customized assessment of your facility, guard requirements, and shift planning.
          </p>

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/quote"
              className="px-8 py-4 text-xs sm:text-sm font-bold uppercase tracking-wider bg-amber-500 hover:bg-amber-400 text-slate-950 rounded-xl transition-all shadow-xl hover:shadow-amber-500/25"
            >
              Request a Free Security Consultation
            </Link>
            <Link
              to="/contact"
              className="px-6 py-4 text-xs sm:text-sm font-semibold text-slate-200 hover:text-white bg-transparent hover:bg-white/5 border border-slate-700 hover:border-amber-400/60 rounded-xl transition-colors backdrop-blur-xs"
            >
              Contact Operations Desk
            </Link>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
      />

    </div>
  );
};
