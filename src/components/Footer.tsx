import React from 'react';
import { 
  MapPin, Phone, Mail, Printer, Headphones, Radio,
  ChevronRight
} from 'lucide-react';
import { UcpLogo } from './UcpLogo';
import { UCP_CONTACT } from '../data/ucpData';
import { InfoModalType } from './UcpInfoModal';

interface FooterProps {
  onOpenApply: () => void;
  onOpenFee: () => void;
  onOpenPortal: () => void;
  onOpenInfo: (type: InfoModalType) => void;
  onScrollTo: (sectionId: string) => void;
  onSelectFaculty: (facultyId: string) => void;
  onOpenLegacyPage?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenApply,
  onOpenFee,
  onOpenPortal,
  onOpenInfo,
  onScrollTo,
  onSelectFaculty,
  onOpenLegacyPage,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      id="footer-section" 
      className="relative bg-[#0b2341] text-white pt-16 pb-6 overflow-hidden border-t border-[#13335c] select-none"
    >
      {/* High-Contrast White-Line Architectural Blueprint Background System - Properly Visible & Highlighted */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Deep blue academic base */}
        <div className="absolute inset-0 bg-[#06182e] z-0" />

        {/* Ambient architectural blueprint cyan radiance behind building */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,#0284c7_0%,transparent_70%)] opacity-35 z-0" />

        {/* CAD Blueprint Drafting Coordinate Grid */}
        <svg 
          className="absolute inset-0 w-full h-full opacity-25 z-0 pointer-events-none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* 24px Minor Blueprint Grid */}
            <pattern id="footer-blueprint-grid-minor" width="24" height="24" patternUnits="userSpaceOnUse">
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#7dd3fc" strokeWidth="0.5" strokeOpacity="0.18" />
            </pattern>
            {/* 96px Major Blueprint Grid */}
            <pattern id="footer-blueprint-grid-major" width="96" height="96" patternUnits="userSpaceOnUse">
              <rect width="96" height="96" fill="url(#footer-blueprint-grid-minor)" />
              <path d="M 96 0 L 0 0 0 96" fill="none" stroke="#7dd3fc" strokeWidth="1" strokeOpacity="0.32" />
              {/* Subtle crosshairs at grid intersections */}
              <path d="M -4 0 L 4 0 M 0 -4 L 0 4" stroke="#ffffff" strokeWidth="1.2" strokeOpacity="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-blueprint-grid-major)" />
        </svg>

        {/* Architectural drafting grid overlay */}

        {/* Semi-transparent dark academic navy overlay: darker at top for text clarity, transparent at bottom so building shines */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#06182e]/90 via-[#07192f]/55 to-[#06182e]/45 z-2 pointer-events-none" />

        {/* Architectural Title Block & Coordinate Stamp */}
        <div className="absolute right-4 sm:right-8 bottom-3 sm:bottom-4 pointer-events-none z-3 flex items-center gap-3 opacity-60 font-mono text-[9px] text-white">
          <span className="hidden md:inline tracking-wider font-semibold text-cyan-200">UNIVERSITY OF CENTRAL PUNJAB · BAHAWALPUR</span>
          <span className="hidden sm:inline text-cyan-400/50">|</span>
          <span className="tracking-wider text-white/90">ARCHITECTURAL SCHEMATIC · MAIN ELEVATION</span>
          <span className="hidden sm:inline text-cyan-400/50">|</span>
          <span className="text-cyan-300">SHEET AR-01</span>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* Main 3-Column Grid as in Screenshot - Adjusted column spans and padding to give UCP logo ample room and shift Useful Links right */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-8 xl:gap-12 pb-14 items-start">
          
          {/* Left Column: Brand Identity, Crest, & Social / App Icons */}
          <div className="md:col-span-12 lg:col-span-5 xl:col-span-5 space-y-6 pr-2 lg:pr-6">
            <UcpLogo 
              variant="footer"
              onClick={scrollToTop}
            />

            {/* Social & Mobile App Circle Buttons (2 rows as shown in screenshot) */}
            <div className="space-y-3 pt-2">
              {/* Row 1: Facebook, Twitter/X, LinkedIn, YouTube, Instagram */}
              <div className="flex items-center gap-2.5">
                {/* Facebook */}
                <a 
                  href="https://facebook.com/UCPofficial" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full border border-white/35 flex items-center justify-center text-white hover:bg-white hover:text-[#0b2341] hover:border-white transition-all transform hover:scale-110 shadow-sm"
                  title="UCP on Facebook"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>

                {/* Twitter / X */}
                <a 
                  href="https://x.com/UCPofficial" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full border border-white/35 flex items-center justify-center text-white hover:bg-white hover:text-[#0b2341] hover:border-white transition-all transform hover:scale-110 shadow-sm"
                  title="UCP on X (Twitter)"
                  aria-label="X / Twitter"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a 
                  href="https://linkedin.com/school/university-of-central-punjab" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full border border-white/35 flex items-center justify-center text-white hover:bg-white hover:text-[#0b2341] hover:border-white transition-all transform hover:scale-110 shadow-sm"
                  title="UCP on LinkedIn"
                  aria-label="LinkedIn"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a 
                  href="https://youtube.com/UCPofficial" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full border border-white/35 flex items-center justify-center text-white hover:bg-white hover:text-[#0b2341] hover:border-white transition-all transform hover:scale-110 shadow-sm"
                  title="UCP on YouTube"
                  aria-label="YouTube"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a 
                  href="https://instagram.com/UCPofficial" 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-9 h-9 rounded-full border border-white/35 flex items-center justify-center text-white hover:bg-white hover:text-[#0b2341] hover:border-white transition-all transform hover:scale-110 shadow-sm"
                  title="UCP on Instagram"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>

              {/* Row 2: Apple, Android, Mic/Podcast, Broadcast Tower */}
              <div className="flex items-center gap-2.5">
                {/* Apple */}
                <button
                  onClick={onOpenPortal}
                  className="w-9 h-9 rounded-full border border-white/35 flex items-center justify-center text-white hover:bg-white hover:text-[#0b2341] hover:border-white transition-all transform hover:scale-110 shadow-sm"
                  title="Download UCP iOS App"
                  aria-label="Apple App Store"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.92-2.85-.9.04-2 .6-2.65 1.35-.58.66-1.09 1.73-.95 2.76 1 .08 2.06-.51 2.68-1.26z" />
                  </svg>
                </button>

                {/* Android Play Store */}
                <button
                  onClick={onOpenPortal}
                  className="w-9 h-9 rounded-full border border-white/35 flex items-center justify-center text-white hover:bg-white hover:text-[#0b2341] hover:border-white transition-all transform hover:scale-110 shadow-sm"
                  title="Download UCP Android App"
                  aria-label="Android Play Store"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.551 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4482.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.4116 13.8533 8.0838 12 8.0838c-1.8533 0-3.5902.3278-5.1378.8662L4.8399 5.4471a.4158.4158 0 00-.5676-.1521.4158.4158 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3432-4.1021-2.6889-7.5743-6.1185-9.4396" />
                  </svg>
                </button>

                {/* Podcast / Mic */}
                <button
                  onClick={() => onOpenInfo('blog')}
                  className="w-9 h-9 rounded-full border border-white/35 flex items-center justify-center text-white hover:bg-white hover:text-[#0b2341] hover:border-white transition-all transform hover:scale-110 shadow-sm"
                  title="UCP Podcasts & Voices"
                  aria-label="Podcasts"
                >
                  <Headphones size={15} />
                </button>

                {/* Campus Radio FM 92.6 */}
                <button
                  onClick={() => onOpenInfo('blog')}
                  className="w-9 h-9 rounded-full border border-white/35 flex items-center justify-center text-white hover:bg-white hover:text-[#0b2341] hover:border-white transition-all transform hover:scale-110 shadow-sm"
                  title={`UCP Live FM ${UCP_CONTACT.radioFrequency} Radio`}
                  aria-label="UCP Radio"
                >
                  <Radio size={15} />
                </button>
              </div>
            </div>
          </div>

          {/* Middle Column: USEFUL LINKS - Moved slightly to the right with dedicated padding and generous margins */}
          <div className="md:col-span-6 lg:col-span-3 xl:col-span-3 space-y-3 lg:pl-6 xl:pl-10">
            <h4 className="text-white text-[15px] font-bold tracking-wider uppercase border-b border-white/10 pb-2 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-sm inline-block" />
              USEFUL LINKS
            </h4>
            
            <ul className="text-[13px] text-slate-200 space-y-1">
              {onOpenLegacyPage && (
                <li>
                  <button 
                    onClick={onOpenLegacyPage}
                    className="group w-full text-left px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-2 hover:bg-white/10 text-amber-300 hover:text-amber-200 hover:drop-shadow-[0_0_8px_rgba(253,224,71,0.6)] focus:outline-none focus:ring-1 focus:ring-amber-300/50 cursor-pointer font-medium"
                  >
                    <span className="text-amber-400 font-bold group-hover:translate-x-1 transition-all duration-200">›</span>
                    <span className="group-hover:font-semibold transition-all">Our Legacy (Bahawalpur Heritage)</span>
                    <span className="text-[10px] bg-amber-400/20 text-amber-300 px-1.5 py-0.5 rounded font-bold ml-auto">Heritage</span>
                  </button>
                </li>
              )}
              <li>
                <a 
                  href="https://mcom.pgc.edu.pk/Student/StdLogin.jsp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full text-left px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-2 hover:bg-white/10 hover:text-amber-300 hover:drop-shadow-[0_0_8px_rgba(253,224,71,0.6)] focus:outline-none focus:ring-1 focus:ring-amber-300/50 cursor-pointer"
                >
                  <span className="text-slate-400 font-bold group-hover:text-amber-400 group-hover:translate-x-1 transition-all duration-200">›</span>
                  <span className="group-hover:font-semibold transition-all">Student Portal (mcom.pgc.edu.pk)</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://ucp.edu.pk/academic-calendar/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full text-left px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-2 hover:bg-white/10 hover:text-amber-300 hover:drop-shadow-[0_0_8px_rgba(253,224,71,0.6)] focus:outline-none focus:ring-1 focus:ring-amber-300/50 cursor-pointer"
                >
                  <span className="text-slate-400 font-bold group-hover:text-amber-400 group-hover:translate-x-1 transition-all duration-200">›</span>
                  <span className="group-hover:font-semibold transition-all">Academic Calendar</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://ucp.edu.pk/exam-office/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full text-left px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-2 hover:bg-white/10 hover:text-amber-300 hover:drop-shadow-[0_0_8px_rgba(253,224,71,0.6)] focus:outline-none focus:ring-1 focus:ring-amber-300/50 cursor-pointer"
                >
                  <span className="text-slate-400 font-bold group-hover:text-amber-400 group-hover:translate-x-1 transition-all duration-200">›</span>
                  <span className="group-hover:font-semibold transition-all">Exam Office</span>
                </a>
              </li>
              <li>
                <button 
                  onClick={() => onOpenInfo('sustainability')}
                  className="group w-full text-left px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-2 hover:bg-white/10 hover:text-amber-300 hover:drop-shadow-[0_0_8px_rgba(253,224,71,0.6)] focus:outline-none focus:ring-1 focus:ring-amber-300/50 cursor-pointer"
                >
                  <span className="text-slate-400 font-bold group-hover:text-amber-400 group-hover:translate-x-1 transition-all duration-200">›</span>
                  <span className="group-hover:font-semibold transition-all">Sustainability</span>
                </button>
              </li>
              <li>
                <a 
                  href="https://ucp.edu.pk/inc/uploads/2019/01/SEXUALHARASSMENT-POLICY.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full text-left px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-2 hover:bg-white/10 hover:text-amber-300 hover:drop-shadow-[0_0_8px_rgba(253,224,71,0.6)] focus:outline-none focus:ring-1 focus:ring-amber-300/50 cursor-pointer"
                >
                  <span className="text-slate-400 font-bold group-hover:text-amber-400 group-hover:translate-x-1 transition-all duration-200">›</span>
                  <span className="group-hover:font-semibold transition-all">Harassment Policy</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://ucpcolleges.pgc.edu/scholarship/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full text-left px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-2 hover:bg-white/10 hover:text-amber-300 hover:drop-shadow-[0_0_8px_rgba(253,224,71,0.6)] focus:outline-none focus:ring-1 focus:ring-amber-300/50 cursor-pointer"
                >
                  <span className="text-slate-400 font-bold group-hover:text-amber-400 group-hover:translate-x-1 transition-all duration-200">›</span>
                  <span className="group-hover:font-semibold transition-all">Scholarships & Concessions</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://ucp.edu.pk/jobs/career-opportunities/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full text-left px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-2 hover:bg-white/10 hover:text-amber-300 hover:drop-shadow-[0_0_8px_rgba(253,224,71,0.6)] focus:outline-none focus:ring-1 focus:ring-amber-300/50 cursor-pointer"
                >
                  <span className="text-slate-400 font-bold group-hover:text-amber-400 group-hover:translate-x-1 transition-all duration-200">›</span>
                  <span className="group-hover:font-semibold transition-all">Jobs</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://horizon.ucp.edu.pk/verify?_gl=1*1jdpsum*_gcl_au*MTgzMjA3ODQ4MC4xNzkwMDEyMzQ5*_ga*MTk1MTM4Njg4MS4xNzkwMDEyMzQ5*_ga_9BBZL6TFYQ*czE3OTAxNzk2OTYkbzYkZzEkdDE3OTAxODAxMjQkajU5JGwwJGg0NzM0NDM5MzA."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full text-left px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-2 hover:bg-white/10 hover:text-amber-300 hover:drop-shadow-[0_0_8px_rgba(253,224,71,0.6)] focus:outline-none focus:ring-1 focus:ring-amber-300/50 cursor-pointer"
                >
                  <span className="text-slate-400 font-bold group-hover:text-amber-400 group-hover:translate-x-1 transition-all duration-200">›</span>
                  <span className="group-hover:font-semibold transition-all">Verify Student</span>
                </a>
              </li>
              <li>
                <button 
                  onClick={() => onOpenInfo('tender-notice')}
                  className="group w-full text-left px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-2 hover:bg-white/10 hover:text-amber-300 hover:drop-shadow-[0_0_8px_rgba(253,224,71,0.6)] focus:outline-none focus:ring-1 focus:ring-amber-300/50 cursor-pointer"
                >
                  <span className="text-slate-400 font-bold group-hover:text-amber-400 group-hover:translate-x-1 transition-all duration-200">›</span>
                  <span className="group-hover:font-semibold transition-all">Tender Notice</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onOpenInfo('rehnumai-markaz')}
                  className="group w-full text-left px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-2 hover:bg-white/10 hover:text-amber-300 hover:drop-shadow-[0_0_8px_rgba(253,224,71,0.6)] focus:outline-none focus:ring-1 focus:ring-amber-300/50 cursor-pointer"
                >
                  <span className="text-slate-400 font-bold group-hover:text-amber-400 group-hover:translate-x-1 transition-all duration-200">›</span>
                  <span className="group-hover:font-semibold transition-all">Rehnumai Markaz Portal</span>
                </button>
              </li>
              <li>
                <a 
                  href="https://ucp.edu.pk/faqs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full text-left px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-2 hover:bg-white/10 hover:text-amber-300 hover:drop-shadow-[0_0_8px_rgba(253,224,71,0.6)] focus:outline-none focus:ring-1 focus:ring-amber-300/50 cursor-pointer"
                >
                  <span className="text-slate-400 font-bold group-hover:text-amber-400 group-hover:translate-x-1 transition-all duration-200">›</span>
                  <span className="group-hover:font-semibold transition-all">FAQs</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://ucp.edu.pk/blog/?_gl=1*g7icau*_gcl_au*mtgzmja3odq4mc4xnzkwmdeymzq5li0uls4xnzkwmtgwndm0ljy0mta5mdayni4xnzkwmtgwndm0lje3otaxoda0mzq.*_ga*mtk1mtm4njg4ms4xnzkwmdeymzq5*_ga_9bbzl6tfyq*cze3otaxnzk2otykbzykzzekdde3otaxoda0otckajywjgwwjgg0nzm0ndm5mza."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full text-left px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-2 hover:bg-white/10 hover:text-amber-300 hover:drop-shadow-[0_0_8px_rgba(253,224,71,0.6)] focus:outline-none focus:ring-1 focus:ring-amber-300/50 cursor-pointer"
                >
                  <span className="text-slate-400 font-bold group-hover:text-amber-400 group-hover:translate-x-1 transition-all duration-200">›</span>
                  <span className="group-hover:font-semibold transition-all">UCP Blogs</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://oric.ucp.edu.pk/?_gl=1%2A1038nq8%2A_gcl_au%2AMTgzMjA3ODQ4MC4xNzkwMDEyMzQ5Li0uLS4xNzkwMTgwNDM0LjY0MTA5MDAyNi4xNzkwMTgwNDM0LjE3OTAxODA0MzQ.%2A_ga%2AMTk1MTM4Njg4MS4xNzkwMDEyMzQ5%2A_ga_9BBZL6TFYQ%2AczE3OTAxNzk2OTYkbzYkZzEkdDE3OTAxODA1MTUkajQyJGwwJGg0NzM0NDM5MzA."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full text-left px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-2 hover:bg-white/10 hover:text-amber-300 hover:drop-shadow-[0_0_8px_rgba(253,224,71,0.6)] focus:outline-none focus:ring-1 focus:ring-amber-300/50 cursor-pointer"
                >
                  <span className="text-slate-400 font-bold group-hover:text-amber-400 group-hover:translate-x-1 transition-all duration-200">›</span>
                  <span className="group-hover:font-semibold transition-all">Research & Tech (ORIC)</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://ucpcolleges.pgc.edu/campus-network/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full text-left px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-2 hover:bg-white/10 hover:text-amber-300 hover:drop-shadow-[0_0_8px_rgba(253,224,71,0.6)] focus:outline-none focus:ring-1 focus:ring-amber-300/50 cursor-pointer"
                >
                  <span className="text-slate-400 font-bold group-hover:text-amber-400 group-hover:translate-x-1 transition-all duration-200">›</span>
                  <span className="group-hover:font-semibold transition-all">Programs & Fee Structure</span>
                </a>
              </li>
              <li>
                <a 
                  href="https://ucp.edu.pk/rules-regulations/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-full text-left px-3 py-1.5 rounded-lg transition-all duration-200 flex items-center gap-2 hover:bg-white/10 hover:text-amber-300 hover:drop-shadow-[0_0_8px_rgba(253,224,71,0.6)] focus:outline-none focus:ring-1 focus:ring-amber-300/50 cursor-pointer"
                >
                  <span className="text-slate-400 font-bold group-hover:text-amber-400 group-hover:translate-x-1 transition-all duration-200">›</span>
                  <span className="group-hover:font-semibold transition-all">Rules & Regulations</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column: CONTACT US - Focused Element */}
          <div className="md:col-span-6 lg:col-span-4 xl:col-span-4 space-y-4 lg:pl-6">
            <h4 className="text-white text-[15px] font-bold tracking-wider uppercase border-b border-white/10 pb-2 flex items-center gap-2">
              <span className="w-1.5 h-4 bg-amber-400 rounded-sm inline-block" />
              CONTACT US
            </h4>

            <div className="text-[13px] text-slate-200/90 space-y-1.5">
              {/* Address */}
              <div className="group flex items-start gap-3 px-3 py-2 rounded-lg transition-colors duration-200 hover:bg-white/10 hover:text-amber-300 cursor-pointer">
                <MapPin size={17} className="text-slate-300 group-hover:text-amber-300 transition-colors shrink-0 mt-0.5" />
                <span className="leading-snug transition-colors duration-200 group-hover:text-amber-300">
                  1 - Khayaban-e-Jinnah Road, Johar Town, Lahore.
                </span>
              </div>

              {/* Phone */}
              <a 
                href="tel:+924235880007"
                className="group flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-200 hover:bg-white/10 hover:text-amber-300 cursor-pointer"
              >
                <Phone size={16} className="text-slate-300 group-hover:text-amber-300 transition-colors shrink-0" />
                <span className="transition-colors duration-200 group-hover:text-amber-300">Phone: +92-42-35880007</span>
              </a>

              {/* Toll-Free */}
              <a 
                href="tel:080000827"
                className="group flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-200 hover:bg-white/10 hover:text-amber-300 cursor-pointer"
              >
                <Phone size={16} className="text-slate-300 group-hover:text-amber-300 transition-colors shrink-0" />
                <span className="transition-colors duration-200 group-hover:text-amber-300">(+92) 80-000-827 (9:00AM to 5:00PM)</span>
              </a>

              {/* Fax */}
              <div className="group flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-200 hover:bg-white/10 hover:text-amber-300 cursor-pointer">
                <Printer size={16} className="text-slate-300 group-hover:text-amber-300 transition-colors shrink-0" />
                <span className="transition-colors duration-200 group-hover:text-amber-300">Fax: +92-42-35954892</span>
              </div>

              {/* Email */}
              <a 
                href="mailto:info@ucp.edu.pk" 
                className="group flex items-center gap-3 px-3 py-2 rounded-lg transition-colors duration-200 hover:bg-white/10 hover:text-amber-300 cursor-pointer"
              >
                <Mail size={16} className="text-slate-300 group-hover:text-amber-300 transition-colors shrink-0" />
                <span className="transition-colors duration-200 group-hover:text-amber-300">Email: info@ucp.edu.pk</span>
              </a>
            </div>
          </div>

        </div>

        {/* Center TOP Button (As seen in the screenshot right above the bottom border) */}
        <div className="relative flex justify-center items-center py-2 mb-4">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-slate-700/60" />
          </div>
          <button
            id="footer-back-to-top-btn"
            onClick={scrollToTop}
            className="relative bg-[#0b2341] border border-white/30 hover:border-white hover:bg-white/10 text-white text-[11px] font-bold tracking-[0.2em] px-6 py-1.5 transition-all focus:outline-none"
            title="Scroll to top of page"
          >
            TOP
          </button>
        </div>

        {/* Bottom Sub-Bar: Copyright & Legal */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-between text-[11.5px] text-slate-300 gap-3">
          <p>
            Copyright © 2013 - 2025 University of Central Punjab
          </p>

          <div className="flex items-center gap-4 text-slate-300">
            <a 
              href="https://ucp.edu.pk/rules-regulations/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-300 transition-colors cursor-pointer"
            >
              Rules & Regulations
            </a>
            <button 
              onClick={() => onOpenInfo('faqs')}
              className="hover:text-amber-300 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => onOpenInfo('faqs')}
              className="hover:text-amber-300 transition-colors cursor-pointer"
            >
              Disclaimer
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
