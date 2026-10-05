import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, X, Award, ExternalLink, ShieldCheck, BookOpen, Quote } from 'lucide-react';

interface LeaderProfile {
  id: string;
  number: string;
  name: string;
  position: string;
  category: string;
  portraitUrl?: string;
  verifiedBio: string;
  quote?: string;
  honors?: string[];
  institutionalRoles?: string[];
  keyFocus?: string;
  isFounding?: boolean;
}

const LEADERSHIP_PROFILES: LeaderProfile[] = [
  {
    id: 'mian-amir-mahmood',
    number: '01',
    name: 'Mian Amir Mahmood',
    position: 'Founder • Punjab Group of Colleges',
    category: 'Founding Leadership',
    portraitUrl: 'https://ucp.edu.pk/wp-content/uploads/2023/01/home_chiarmain.webp',
    isFounding: true,
    verifiedBio:
      'Mian Amir Mahmood is associated with the founding of the Punjab Group of Colleges and has served as a prominent educationist and institutional leader. He has also been identified as Chairman of the Punjab Group of Colleges and has been associated with the University of Central Punjab since its charter in 1999. His vision has driven educational access, academic standards, and institutional development across Pakistan.',
    quote:
      'We aim to make our students adaptable to change so that they may thrive in a rapidly evolving job market; critical thinkers to identify problems in our society, and creative to come up with pragmatic solutions.',
    honors: [
      'Hilal-e-Imtiaz — Conferred by the Government of Pakistan for distinguished public service in the field of education.',
    ],
    institutionalRoles: [
      'Chairman, Board of Governors, University of Central Punjab',
      'Chairman, Punjab Group of Colleges (PGC)',
      'Founding Patron, Educational Network of Pakistan',
    ],
    keyFocus: 'Institutional Expansion, Higher Education Access & Educational Standards',
  },
  {
    id: 'prof-dr-hamid-iqbal',
    number: '02',
    name: 'Prof. Dr. Hamid Iqbal',
    position: 'Director • UCP Bahawalpur Campus',
    category: 'Campus Directorate',
    portraitUrl: '/assets/campus/1_director_hamid_iqbal.jpg',
    verifiedBio:
      'Providing academic and institutional leadership at UCP Bahawalpur, with a focus on strengthening the campus experience and supporting academic excellence.',
    institutionalRoles: [
      'Director, UCP & Punjab Group of Colleges (PGC) Region Bahawalpur',
      'Director, PGC Bahawalpur Cluster',
      'Co-Chair, International Symposium on AI and Secure Systems (ISAISS 2026), hosted by UCP Bahawalpur',
    ],
    keyFocus: 'Academic Operations, Regional Institutional Leadership & Campus Expansion',
  },
  {
    id: 'prof-dr-aurangzaib-virk',
    number: '03',
    name: 'Prof. Dr. Aurangzaib Virk',
    position: 'Principal & Coordinator • UCP Bahawalpur Campus',
    category: 'Academic Administration',
    portraitUrl: '/assets/campus/2_principal_aurangzaib_virk.jpg',
    verifiedBio:
      'Serving as Principal and Coordinator at UCP Bahawalpur Campus, overseeing academic coordination, institutional discipline, and faculty excellence across university departments.',
    institutionalRoles: [
      'Principal and Coordinator, UCP Bahawalpur Campus',
      'Patron-in-Chief, International Symposium on AI and Secure Systems (ISAISS 2026), hosted by UCP Bahawalpur',
      'Coordinator of University Academic Councils & Examinations',
    ],
    keyFocus: 'Academic Coordination, Institutional Governance & Student Discipline',
  },
];

interface OurLeadershipSectionProps {
  onOpenApply?: () => void;
  onScrollTo?: (sectionId: string) => void;
}

export const OurLeadershipSection: React.FC<OurLeadershipSectionProps> = ({
  onOpenApply,
}) => {
  const [activeProfile, setActiveProfile] = useState<LeaderProfile | null>(null);
  const [quoteRevealed, setQuoteRevealed] = useState(false);
  const quoteRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!quoteRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setQuoteRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '60px 0px 0px 0px' }
    );
    observer.observe(quoteRef.current);

    const timer = setTimeout(() => {
      setQuoteRevealed(true);
    }, 1200);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <section
      id="leadership-section"
      className="relative bg-[#FDFBF7] text-[#0A1931] py-24 sm:py-28 lg:py-32 border-t border-[#0A1931]/10 selection:bg-[#A51C30] selection:text-white"
      aria-labelledby="leadership-heading"
    >
      {/* Anchor alias so existing links to chairman-section also scroll here smoothly */}
      <div id="chairman-section" className="absolute -top-20" aria-hidden="true" />

      {/* Subtle fine architectural hairline texture in background - very restrained */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: `radial-gradient(#0A1931 1px, transparent 1px)`,
          backgroundSize: '36px 36px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* 1. SECTION INTRODUCTION */}
        <header className="max-w-3xl mb-16 sm:mb-20" data-reveal="mask">
          {/* Small Eyebrow: small uppercase, letter-spaced */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#A51C30]">
              OUR LEADERSHIP
            </span>
            <span className="h-px w-8 bg-[#A51C30]/50" aria-hidden="true" />
          </div>

          {/* Main Heading with Mask Reveal */}
          <div className="mask-reveal-wrap">
            <h2
              id="leadership-heading"
              className="mask-reveal-child text-3xl sm:text-4xl lg:text-[50px] font-serif font-semibold text-[#0A1931] tracking-tight leading-[1.18] mb-5"
              style={{ fontFamily: "'Cormorant Garamond', 'Libre Baskerville', 'Playfair Display', Georgia, serif" }}
            >
              Leadership That Shapes Our Future
            </h2>
          </div>

          {/* Supporting Text: ~17-19px comfortable line-height */}
          <p className="text-[17px] sm:text-[18.5px] text-slate-600 leading-relaxed font-sans max-w-2xl">
            UCP Bahawalpur is guided by a leadership committed to academic excellence, institutional growth and the development of future generations.
          </p>

          {/* Very thin navy or muted red line beneath the introductory area as a subtle editorial detail */}
          <div className="h-px w-24 bg-[#A51C30]/50 mt-8" aria-hidden="true" />
        </header>

        {/* 2. LEADERSHIP PROFILES COMPOSITION */}
        <div className="space-y-16 lg:space-y-20">
          
          {/* PROFILE 01 — FOUNDING LEADERSHIP (Visual Prominence) */}
          {(() => {
            const profile = LEADERSHIP_PROFILES[0];
            return (
              <article
                className="group relative border border-[#0A1931]/10 bg-white p-6 sm:p-8 lg:p-12 transition-all duration-500 hover:border-[#0A1931]/20 hover:shadow-[0_8px_30px_rgb(10,25,49,0.04)]"
                aria-label={`Profile of ${profile.name}`}
              >
                {/* Thin red accent line appearing on hover */}
                <div 
                  className="absolute top-0 left-0 h-[2px] w-0 bg-[#A51C30] transition-all duration-500 ease-out group-hover:w-full"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
                  
                  {/* Portrait Column: Large professional portrait with editorial framing */}
                  <div className="lg:col-span-5 flex justify-center lg:justify-start">
                    <div className="relative w-full max-w-[360px] sm:max-w-[390px] aspect-[4/5] overflow-hidden bg-[#FAF8F5] border border-[#0A1931]/10">
                      {profile.portraitUrl ? (
                        <img
                          src={profile.portraitUrl}
                          alt={`Official portrait of ${profile.name}`}
                          loading="eager"
                          decoding="async"
                          className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                          onError={(e) => {
                            // Neutral tasteful fallback
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                      ) : null}

                      {/* Subtle editorial photo frame watermark */}
                      <div className="absolute inset-0 border border-white/40 pointer-events-none" />
                    </div>
                  </div>

                  {/* Editorial Text Column */}
                  <div className="lg:col-span-7 flex flex-col justify-center space-y-6 transition-transform duration-500 group-hover:translate-x-1">
                    
                    {/* Index & Category Header */}
                    <div className="flex items-center justify-between border-b border-[#0A1931]/10 pb-3">
                      <span className="font-serif text-xs sm:text-sm font-semibold tracking-widest text-[#0A1931]/50 uppercase">
                        {profile.number}
                      </span>
                      <span className="text-[12px] font-sans font-medium uppercase tracking-[0.16em] text-[#A51C30]">
                        {profile.category}
                      </span>
                    </div>

                    {/* Leader Identity */}
                    <div className="space-y-1.5">
                      <h3 
                        className="text-2xl sm:text-3xl lg:text-[36px] font-serif font-semibold text-[#0A1931] tracking-tight leading-tight"
                        style={{ fontFamily: "'Cormorant Garamond', 'Libre Baskerville', Georgia, serif" }}
                      >
                        {profile.name}
                      </h3>
                      <p className="text-[13px] sm:text-[14px] font-sans font-bold uppercase tracking-[0.16em] text-[#A51C30]">
                        {profile.position}
                      </p>
                    </div>

                    {/* Concise Verified Institutional Description */}
                    <p className="text-[15.5px] sm:text-[16.5px] text-slate-600 leading-relaxed font-sans">
                      {profile.verifiedBio}
                    </p>

                    {/* Core Educational Philosophy Quote */}
                    {profile.quote && (
                      <blockquote className="border-l-2 border-[#A51C30] pl-4 sm:pl-5 py-1 text-[15px] sm:text-[16px] text-[#0A1931] font-serif italic leading-relaxed bg-[#FBF9F5] p-3">
                        “{profile.quote}”
                      </blockquote>
                    )}

                    {/* Verified National Honor Notice */}
                    {profile.honors && profile.honors.length > 0 && (
                      <div className="flex items-start gap-2.5 text-xs text-slate-600 font-sans pt-1">
                        <Award size={15} className="text-[#A51C30] shrink-0 mt-0.5" />
                        <span>{profile.honors[0]}</span>
                      </div>
                    )}

                    {/* Interactive "Read Profile" Action */}
                    <div className="pt-2">
                      <button
                        onClick={() => setActiveProfile(profile)}
                        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#0A1931] hover:text-[#A51C30] transition-colors group/btn cursor-pointer py-1.5"
                        aria-haspopup="dialog"
                      >
                        <span>Read Complete Profile</span>
                        <ChevronRight 
                          size={14} 
                          className="transition-transform duration-300 group-hover/btn:translate-x-1 text-[#A51C30]" 
                        />
                      </button>
                    </div>
                  </div>

                </div>
              </article>
            );
          })()}

          {/* PROFILES 02 & 03 — CAMPUS DIRECTOR & PRINCIPAL (Balanced Editorial Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {LEADERSHIP_PROFILES.slice(1).map((profile) => (
              <article
                key={profile.id}
                className="group relative border border-[#0A1931]/10 bg-white p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 hover:border-[#0A1931]/20 hover:shadow-[0_8px_30px_rgb(10,25,49,0.04)]"
                aria-label={`Profile of ${profile.name}`}
              >
                {/* Thin red accent line appearing on hover */}
                <div 
                  className="absolute top-0 left-0 h-[2px] w-0 bg-[#A51C30] transition-all duration-500 ease-out group-hover:w-full"
                  aria-hidden="true"
                />

                <div className="space-y-6">
                  {/* Index & Category Header */}
                  <div className="flex items-center justify-between border-b border-[#0A1931]/10 pb-3">
                    <span className="font-mono text-sm font-bold tracking-widest text-[#0A1931]/75 uppercase">
                      {profile.number}
                    </span>
                    <span className="text-[12px] font-sans font-semibold uppercase tracking-[0.16em] text-[#A51C30]">
                      {profile.category}
                    </span>
                  </div>

                  {/* Portrait Area: Dignified Editorial Portrait Frame (Cohesive with Leadership Visual System) */}
                  <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden bg-[#FAF8F5] border border-[#0A1931]/15 p-2 shadow-xs group-hover:border-[#0A1931]/30 transition-all duration-500">
                    {profile.portraitUrl ? (
                      <div className="relative w-full h-full overflow-hidden bg-slate-100">
                        <img
                          src={profile.portraitUrl}
                          alt={`Official portrait of ${profile.name}`}
                          loading="eager"
                          className="w-full h-full object-cover object-top img-hover-scale"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                        {/* Subtle hairline photo border */}
                        <div className="absolute inset-0 border border-black/5 pointer-events-none" />
                      </div>
                    ) : (
                      /* Tasteful Neutral Institutional Image Placeholder */
                      <div className="w-full h-full p-6 flex flex-col items-center justify-center text-center relative bg-gradient-to-b from-[#FDFBF7] to-[#F5F2EB]">
                        <div className="w-16 h-16 rounded-full border border-[#0A1931]/15 flex items-center justify-center text-[#0A1931]/40 mb-3 bg-white/60 shadow-xs">
                          <BookOpen size={24} strokeWidth={1.5} className="text-[#0A1931]/60" />
                        </div>
                        <span 
                          className="font-serif text-lg text-[#0A1931] font-medium tracking-tight"
                          style={{ fontFamily: "'Cormorant Garamond', 'Libre Baskerville', Georgia, serif" }}
                        >
                          {profile.name}
                        </span>
                        <span className="text-[11px] font-sans uppercase tracking-[0.14em] text-[#A51C30] mt-1 font-medium">
                          {profile.position.split('•')[0].trim()}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Leader Identity */}
                  <div className="space-y-1.5 transition-transform duration-500 group-hover:translate-x-1">
                    <h3 
                      className="text-xl sm:text-2xl lg:text-[26px] font-serif font-semibold text-[#0A1931] tracking-tight leading-tight"
                      style={{ fontFamily: "'Cormorant Garamond', 'Libre Baskerville', Georgia, serif" }}
                    >
                      {profile.name}
                    </h3>
                    <p className="text-[12.5px] sm:text-[13.5px] font-sans font-bold uppercase tracking-[0.16em] text-[#A51C30]">
                      {profile.position}
                    </p>
                  </div>

                  {/* Concise Verified Biography */}
                  <p className="text-[15px] sm:text-[15.5px] text-slate-600 leading-relaxed font-sans transition-transform duration-500 group-hover:translate-x-1">
                    {profile.verifiedBio}
                  </p>
                </div>

                {/* Interactive "Read Profile" Action */}
                <div className="pt-6 mt-6 border-t border-[#0A1931]/10 flex items-center justify-between">
                  <button
                    onClick={() => setActiveProfile(profile)}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#0A1931] hover:text-[#A51C30] transition-colors group/btn cursor-pointer py-1"
                    aria-haspopup="dialog"
                  >
                    <span>Read Profile</span>
                    <ChevronRight 
                      size={14} 
                      className="transition-transform duration-300 group-hover/btn:translate-x-1 text-[#A51C30]" 
                    />
                  </button>

                  <span className="text-[11px] font-mono text-slate-400">
                    {profile.number} / 03
                  </span>
                </div>
              </article>
            ))}
          </div>

        </div>

        {/* 3. PRESIDENTIAL CREED & INSTITUTIONAL QUOTATION STATEMENT */}
        <div 
          ref={quoteRef}
          data-reveal="card"
          className={`relative mt-20 sm:mt-28 pt-10 pb-12 sm:pt-14 sm:pb-16 px-6 sm:px-12 lg:px-16 rounded-3xl bg-gradient-to-b from-white via-[#FCFAF7] to-[#F7F4EC] border-2 border-[#0A1931]/10 shadow-[0_20px_50px_-15px_rgba(10,25,49,0.07)] text-center max-w-4xl mx-auto overflow-hidden quote-premium-scroll ${
            quoteRevealed ? 'is-active' : ''
          }`}
        >
          {/* Subtle architectural hairline border detail */}
          <div className="absolute inset-1.5 rounded-[22px] border border-[#0A1931]/5 pointer-events-none" aria-hidden="true" />

          {/* Top Institutional Crest Badge */}
          <div className="relative inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50/90 border border-rose-100 text-[#A51C30] text-[11px] font-bold uppercase tracking-[0.24em] mb-6 shadow-xs">
            <Quote size={13} className="text-[#A51C30] shrink-0" />
            <span>INSTITUTIONAL PHILOSOPHY & CREED</span>
          </div>

          {/* Bold, Breathtaking Academic Quotation - p:nth-of-type(1) */}
          <p 
            className="relative text-2xl sm:text-3xl md:text-4xl lg:text-[42px] text-[#0A1931] font-serif font-bold leading-[1.28] sm:leading-[1.3] md:leading-[1.32] tracking-tight max-w-3xl mx-auto drop-shadow-xs"
            style={{ fontFamily: "'Cormorant Garamond', 'Libre Baskerville', 'Playfair Display', Georgia, serif" }}
          >
            <span className="text-[#A51C30] font-serif font-black mr-2 text-3xl sm:text-4xl md:text-5xl align-top select-none inline-block">“</span>
            Building an institution is a long-term vision. Its true legacy is measured by the generations it empowers.
            <span className="text-[#A51C30] font-serif font-black ml-2 text-3xl sm:text-4xl md:text-5xl align-bottom select-none inline-block">”</span>
          </p>

          {/* Dynamic Animated Crimson Center Accent Line */}
          <div 
            className="quote-accent-bar h-[3px] bg-gradient-to-r from-transparent via-[#A51C30] to-transparent mx-auto mt-6 rounded-full" 
            aria-hidden="true" 
          />

          {/* Premium Editorial Attribution */}
          <div className="mt-5 space-y-1">
            <span className="block text-xs sm:text-[13px] uppercase tracking-[0.26em] text-[#0A1931]/85 font-sans font-bold">
              University of Central Punjab · Bahawalpur Campus
            </span>
            <span className="inline-block text-[11px] font-mono tracking-widest text-[#A51C30] uppercase font-semibold">
              Established 2002 · Punjab Group of Colleges · Chartered University
            </span>
          </div>
        </div>

      </div>

      {/* 4. REFINED EDITORIAL PROFILE MODAL */}
      {activeProfile && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0A1931]/70 backdrop-blur-xs animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-leader-name"
        >
          <div 
            className="relative w-full max-w-2xl bg-white border border-[#0A1931]/15 shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button */}
            <button
              onClick={() => setActiveProfile(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full border border-slate-200 text-slate-500 hover:text-[#0A1931] hover:border-[#0A1931] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Close Profile Panel"
            >
              <X size={16} />
            </button>

            {/* Modal Header */}
            <div className="border-b border-[#0A1931]/10 pb-5 mb-6">
              <span className="text-[11px] font-sans font-medium uppercase tracking-[0.2em] text-[#A51C30] block mb-1">
                {activeProfile.number} · {activeProfile.category}
              </span>
              <h3 
                id="modal-leader-name"
                className="text-2xl sm:text-3xl font-serif font-semibold text-[#0A1931] tracking-tight"
                style={{ fontFamily: "'Cormorant Garamond', 'Libre Baskerville', Georgia, serif" }}
              >
                {activeProfile.name}
              </h3>
              <p className="text-xs sm:text-[13px] font-sans font-medium uppercase tracking-[0.14em] text-[#A51C30] mt-1">
                {activeProfile.position}
              </p>
            </div>

            {/* Verified Content Area */}
            <div className="space-y-6">
              
              {/* Optional Portrait in modal */}
              {activeProfile.portraitUrl && (
                <div className="w-32 sm:w-40 aspect-[4/5] bg-slate-100 border border-slate-200 overflow-hidden mb-4">
                  <img 
                    src={activeProfile.portraitUrl} 
                    alt={activeProfile.name}
                    className="w-full h-full object-cover object-top" 
                  />
                </div>
              )}

              {/* Verified Biography */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0A1931] mb-2 font-sans">
                  Institutional Biography
                </h4>
                <p className="text-[15.5px] text-slate-700 leading-relaxed font-sans">
                  {activeProfile.verifiedBio}
                </p>
              </div>

              {/* Quote if applicable */}
              {activeProfile.quote && (
                <div className="border-l-2 border-[#A51C30] pl-4 py-2 bg-[#FAF8F5]">
                  <p className="text-[15px] font-serif italic text-[#0A1931] leading-relaxed">
                    “{activeProfile.quote}”
                  </p>
                </div>
              )}

              {/* Verified Honors */}
              {activeProfile.honors && activeProfile.honors.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0A1931] mb-2 font-sans flex items-center gap-1.5">
                    <Award size={14} className="text-[#A51C30]" />
                    <span>Conferred National Honors</span>
                  </h4>
                  <ul className="space-y-1.5 text-[14px] text-slate-700 font-sans">
                    {activeProfile.honors.map((honor, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#A51C30] mt-2 shrink-0" />
                        <span>{honor}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Verified Institutional Roles */}
              {activeProfile.institutionalRoles && activeProfile.institutionalRoles.length > 0 && (
                <div>
                  <h4 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0A1931] mb-2 font-sans flex items-center gap-1.5">
                    <ShieldCheck size={14} className="text-[#A51C30]" />
                    <span>Institutional Roles & Appointments</span>
                  </h4>
                  <ul className="space-y-1.5 text-[14px] text-slate-700 font-sans">
                    {activeProfile.institutionalRoles.map((role, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#A51C30] mt-2 shrink-0" />
                        <span>{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Key Institutional Focus */}
              {activeProfile.keyFocus && (
                <div className="pt-2 border-t border-[#0A1931]/10 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-500 font-sans gap-2">
                  <span>Scope: {activeProfile.keyFocus}</span>
                  <span className="text-[#A51C30] font-medium">UCP Bahawalpur Campus</span>
                </div>
              )}
            </div>

            {/* Modal Bottom Bar */}
            <div className="mt-8 pt-4 border-t border-[#0A1931]/10 flex items-center justify-end">
              <button
                onClick={() => setActiveProfile(null)}
                className="px-5 py-2 text-xs font-semibold uppercase tracking-[0.14em] bg-[#0A1931] hover:bg-[#A51C30] text-white transition-colors cursor-pointer"
              >
                Close Profile
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
