import React, { useState, useEffect } from 'react';
import { 
  Menu, X, ChevronDown, Search, GraduationCap, Building2, 
  Award, Globe, Newspaper, PhoneCall, BookOpen, Compass,
  Sparkles, CheckCircle2, User, ExternalLink, ShieldCheck,
  Video, Laptop, Lightbulb, FileText, ArrowRight, Calendar,
  Home
} from 'lucide-react';
import { UcpLogo } from './UcpLogo';
import { FACULTIES, UCP_CONTACT } from '../data/ucpData';
import { OFFICIAL_BAHAWALPUR_PROGRAMMES } from '../data/bahawalpurProgrammesData';
import { InfoModalType } from './UcpInfoModal';

interface NavbarProps {
  onOpenApply: () => void;
  onOpenFee: () => void;
  onOpenPortal: () => void;
  onOpenInfo: (type: InfoModalType) => void;
  onSelectFaculty: (facultyId: string) => void;
  onScrollTo: (sectionId: string) => void;
  onOpenFacultyPage?: () => void;
  onOpenProgrammesPage?: (progId?: string) => void;
  onOpenLegacyPage?: () => void;
  onOpenCampusLifePage?: () => void;
  onBackToHome?: () => void;
  currentPage?: 'home' | 'faculty' | 'programmes' | 'legacy' | 'campus-life';
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenApply,
  onOpenFee,
  onOpenPortal,
  onOpenInfo,
  onSelectFaculty,
  onScrollTo,
  onOpenFacultyPage,
  onOpenProgrammesPage,
  onOpenLegacyPage,
  onOpenCampusLifePage,
  onBackToHome,
  currentPage = 'home',
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const bsProgrammes = OFFICIAL_BAHAWALPUR_PROGRAMMES.filter((p) => p.level === 'Undergraduate');
  const adpProgrammes = OFFICIAL_BAHAWALPUR_PROGRAMMES.filter((p) => p.level === 'Associate Degree');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    onScrollTo(sectionId);
  };

  return (
    <header 
      id="main-nav-header"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#092242]/95 backdrop-blur-md shadow-xl shadow-black/30 py-2.5 border-b border-[#183a66]' 
          : 'bg-[#092242] py-3.5 border-b border-[#122e54]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Official Logo (Crest + "University of Central Punjab Bahawalpur" on the same line) */}
          <UcpLogo 
            variant="header"
            onClick={() => {
              if (currentPage !== 'home' && onBackToHome) {
                onBackToHome();
              } else {
                handleNavClick('top');
              }
            }}
          />

          {/* Desktop Navigation Links - Official, clean, balanced and spacious */}
          <nav className="hidden lg:flex items-center space-x-1.5 xl:space-x-3 text-[14px] font-medium text-white">
            
            {/* 1. Home Button */}
            <button
              id="nav-home-btn"
              onClick={() => {
                if (currentPage !== 'home' && onBackToHome) {
                  onBackToHome();
                } else {
                  handleNavClick('top');
                }
              }}
              className={`px-3.5 py-2 rounded-lg transition-colors flex items-center gap-1.5 hover:text-white hover:bg-white/10 focus:outline-none cursor-pointer ${
                currentPage === 'home' ? 'text-white bg-white/15 font-bold shadow-xs' : 'text-white font-medium'
              }`}
            >
              <Home size={15} className="text-white shrink-0" />
              <span className="text-white">Home</span>
            </button>

            {/* 2. Academics Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('academics')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                id="nav-academics-btn"
                onClick={() => {
                  setActiveDropdown(activeDropdown === 'academics' ? null : 'academics');
                }}
                className={`px-3.5 py-2 rounded-lg transition-colors flex items-center gap-1.5 hover:text-white hover:bg-white/10 focus:outline-none cursor-pointer ${
                  activeDropdown === 'academics' || currentPage === 'programmes' ? 'text-white bg-white/15 font-bold' : 'text-white'
                }`}
              >
                <GraduationCap size={15} className="text-white shrink-0" />
                <span className="text-white">Academics</span>
                <ChevronDown size={14} className={`transition-transform duration-200 text-white/80 ${activeDropdown === 'academics' ? 'rotate-180' : ''}`} />
              </button>

              {/* Academics Mega Dropdown */}
              {activeDropdown === 'academics' && (
                <div 
                  className="absolute left-0 mt-1.5 w-[850px] max-w-[95vw] bg-white text-slate-800 rounded-2xl shadow-2xl border border-slate-200 p-5 animate-in fade-in slide-in-from-top-2 duration-150 z-50"
                  onMouseEnter={() => setActiveDropdown('academics')}
                >
                  {/* Top Bar */}
                  <div className="pb-3 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="bg-[#a30f16] text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded">
                          UCP Bahawalpur
                        </span>
                        <h4 className="text-sm font-extrabold text-[#092242] tracking-tight">
                          Academic Programmes — Fall 2026
                        </h4>
                      </div>
                      <p className="text-[12px] text-slate-500 mt-0.5">
                        Official Campus Offerings: 12 Undergraduate Degrees & 13 Associate Degrees
                      </p>
                    </div>
                    <div>
                      <button 
                        onClick={() => {
                          setActiveDropdown(null);
                          if (onOpenProgrammesPage) onOpenProgrammesPage();
                          else handleNavClick('finder-section');
                        }}
                        className="text-xs bg-[#092242] hover:bg-[#a30f16] text-white px-3 py-1.5 rounded-lg font-bold transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                      >
                        <Search size={13} /> View All Programmes (25) →
                      </button>
                    </div>
                  </div>

                  {/* Dual Grid: BS Programmes & ADP/ADS Programmes */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-3.5">
                    {/* 01. BS PROGRAMMES (12) */}
                    <div className="bg-slate-50/80 rounded-xl p-3 border border-slate-200/80">
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#092242]" />
                          <h5 className="text-[12px] font-extrabold text-[#092242] uppercase tracking-wider">
                            BS Programmes (12)
                          </h5>
                        </div>
                        <span className="text-[10px] font-bold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                          4-Year Degrees
                        </span>
                      </div>
                      <div className="space-y-1 max-h-[460px] overflow-y-auto pr-1 text-[12.5px]">
                        {bsProgrammes.map((prog) => (
                          <div
                            key={prog.id}
                            onClick={() => {
                              setActiveDropdown(null);
                              if (onOpenProgrammesPage) onOpenProgrammesPage(prog.id);
                            }}
                            className="group flex items-center justify-between p-1.5 rounded-lg hover:bg-white hover:shadow-xs border border-transparent hover:border-slate-200 transition-all cursor-pointer"
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <span className="text-[10px] font-extrabold text-[#092242] bg-slate-200/80 group-hover:bg-[#a30f16] group-hover:text-white transition-colors px-1.5 py-0.5 rounded shrink-0">
                                {prog.degree}
                              </span>
                              <span className="font-semibold text-slate-800 group-hover:text-[#a30f16] transition-colors truncate">
                                {prog.name}
                              </span>
                            </div>
                            <span className="text-[11px] font-mono text-slate-400 group-hover:text-slate-600 shrink-0 ml-2">
                              {prog.creditHours} Cr
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 02. ADP / ADS PROGRAMMES (13) */}
                    <div className="bg-slate-50/80 rounded-xl p-3 border border-slate-200/80">
                      <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-[#a30f16]" />
                          <h5 className="text-[12px] font-extrabold text-[#a30f16] uppercase tracking-wider">
                            ADP / ADS Programmes (13)
                          </h5>
                        </div>
                        <span className="text-[10px] font-bold text-[#a30f16] bg-rose-50 px-2 py-0.5 rounded border border-rose-100">
                          2-Year Degrees
                        </span>
                      </div>
                      <div className="space-y-1 max-h-[460px] overflow-y-auto pr-1 text-[12.5px]">
                        {adpProgrammes.map((prog) => (
                          <div
                            key={prog.id}
                            onClick={() => {
                              setActiveDropdown(null);
                              if (onOpenProgrammesPage) onOpenProgrammesPage(prog.id);
                            }}
                            className="group flex items-center justify-between p-1.5 rounded-lg hover:bg-white hover:shadow-xs border border-transparent hover:border-slate-200 transition-all cursor-pointer"
                          >
                            <div className="flex items-center gap-2 min-w-0">
                              <span className="text-[10px] font-extrabold px-1.5 py-0.5 rounded shrink-0 bg-rose-50 border border-rose-100 text-[#a30f16] group-hover:bg-[#a30f16] group-hover:text-white transition-colors">
                                {prog.degree}
                              </span>
                              <span className="font-semibold text-slate-800 group-hover:text-[#a30f16] transition-colors truncate">
                                {prog.name}
                              </span>
                            </div>
                            <span className="text-[11px] font-mono text-slate-400 group-hover:text-slate-600 shrink-0 ml-2">
                              {prog.creditHours} Cr
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Dropdown Footer */}
                  <div className="pt-2.5 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between bg-slate-50 p-2.5 rounded-xl gap-2 text-xs">
                    <button
                      onClick={() => {
                        setActiveDropdown(null);
                        if (onOpenProgrammesPage) onOpenProgrammesPage();
                        else handleNavClick('finder-section');
                      }}
                      className="font-bold text-[#a30f16] hover:underline flex items-center gap-1.5 cursor-pointer text-left"
                    >
                      <BookOpen size={14} />
                      Fee Structure — Fall 2026 (Detailed Credit Hours & Fees) ↗
                    </button>
                    <div className="flex items-center gap-3 shrink-0">
                      <a
                        href="https://ucpcolleges.pgc.edu/scholarship/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-slate-600 hover:text-[#a30f16] flex items-center gap-1"
                      >
                        Scholarships & Aid ↗
                      </a>
                      <a
                        href="https://ucp.edu.pk/academic-calendar/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-[#092242] hover:text-[#a30f16] flex items-center gap-1"
                      >
                        <Calendar size={13} className="text-[#a30f16]" />
                        Academic Calendar ↗
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 2. Admissions Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('admissions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                id="nav-admissions-btn"
                className={`px-3 py-1.5 rounded-lg transition-colors flex items-center gap-1 hover:text-amber-300 hover:bg-white/5 focus:outline-none ${
                  activeDropdown === 'admissions' ? 'text-amber-300 bg-white/10' : 'text-white'
                }`}
              >
                <span>Admissions</span>
                <ChevronDown size={14} className={`transition-transform duration-200 opacity-80 ${activeDropdown === 'admissions' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'admissions' && (
                <div className="absolute left-0 mt-1.5 w-64 bg-white text-slate-800 rounded-2xl shadow-2xl border border-slate-200 p-2.5 space-y-1 animate-in fade-in duration-150 z-50 text-[13px]">
                  <div className="px-3 py-2 bg-rose-50 rounded-xl text-rose-900 mb-1 border border-rose-100">
                    <span className="font-bold text-xs flex items-center gap-1">
                      <Sparkles size={13} className="text-[#a30f16]" /> Fall 2026 Admissions Open
                    </span>
                    <p className="text-[11px] text-rose-700">Online tests & admissions desk active</p>
                  </div>

                  <a
                    href="https://admissions.ucpcolleges.pgc.edu/login?returnUrl=%2Flogin%3FreturnUrl%3D%252F"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setActiveDropdown(null)}
                    className="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-100 flex items-center justify-between font-bold text-[#a30f16]"
                  >
                    <span>Apply Online</span>
                    <span className="bg-[#a30f16] text-white text-[10px] px-1.5 py-0.5 rounded font-bold">New ↗</span>
                  </a>

                  <a
                    href="https://ucpcolleges.pgc.edu/campus-network/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setActiveDropdown(null)}
                    className="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-100 flex items-center justify-between text-slate-700"
                  >
                    <span>Fee Structure & Programs</span>
                    <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-mono">Official ↗</span>
                  </a>

                  <a
                    href="https://ucp.edu.pk/rules-regulations/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setActiveDropdown(null)}
                    className="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-100 flex items-center justify-between text-slate-700"
                  >
                    <span>Rules & Regulations</span>
                    <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-mono">Official ↗</span>
                  </a>

                  <a
                    href="https://ucpcolleges.pgc.edu/scholarship/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setActiveDropdown(null)}
                    className="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-100 flex items-center justify-between text-slate-700"
                  >
                    <span>Scholarships & Concessions</span>
                    <span className="text-[10px] bg-amber-50 text-amber-700 border border-amber-200 px-1.5 py-0.5 rounded font-bold">1.3B PKR ↗</span>
                  </a>

                  <button
                    onClick={() => { setActiveDropdown(null); onOpenInfo('merit-list'); }}
                    className="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-100 flex items-center gap-2 text-slate-700"
                  >
                    Merit Lists & Test Schedule
                  </button>

                  <a
                    href="https://ucp.edu.pk/academic-calendar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setActiveDropdown(null)}
                    className="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-100 flex items-center justify-between text-slate-700"
                  >
                    <span className="flex items-center gap-2">
                      <Calendar size={14} className="text-[#a30f16]" />
                      Academic Calendar
                    </span>
                    <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-mono">2025-26</span>
                  </a>

                  <button
                    onClick={() => { setActiveDropdown(null); handleNavClick('finder-section'); }}
                    className="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-100 flex items-center gap-2 text-slate-700"
                  >
                    Eligibility & Criteria
                  </button>

                  <a
                    href="https://ucp.edu.pk/faqs/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setActiveDropdown(null)}
                    className="w-full text-left px-3 py-2 rounded-xl hover:bg-slate-100 flex items-center justify-between text-slate-700"
                  >
                    <span>Admissions & Campus FAQs</span>
                    <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded font-mono">Help ↗</span>
                  </a>
                </div>
              )}
            </div>

            {/* 3. Our Faculty (UCP Bahawalpur) - Dedicated Page */}
            <button
              id="nav-faculty-btn"
              onClick={() => {
                if (onOpenFacultyPage) {
                  onOpenFacultyPage();
                } else {
                  handleNavClick('faculty-section');
                }
              }}
              className={`px-3.5 py-2 rounded-lg transition-colors flex items-center gap-1.5 hover:text-white hover:bg-white/10 focus:outline-none font-medium cursor-pointer ${
                currentPage === 'faculty' ? 'text-white bg-white/15 font-bold shadow-xs' : 'text-white'
              }`}
            >
              <span>Our Faculty</span>
            </button>

            {/* 3b. Our Legacy (UCP Bahawalpur) - Dedicated Page */}
            <button
              id="nav-legacy-btn"
              onClick={() => {
                if (onOpenLegacyPage) {
                  onOpenLegacyPage();
                }
              }}
              className={`px-3.5 py-2 rounded-lg transition-colors flex items-center gap-1.5 hover:text-white hover:bg-white/10 focus:outline-none font-medium cursor-pointer ${
                currentPage === 'legacy' ? 'text-white bg-white/15 font-bold shadow-xs' : 'text-white'
              }`}
            >
              <span>Our Legacy</span>
            </button>

            {/* 4. About Dropdown (All items organized in this folder) */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveDropdown('about')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                id="nav-about-btn"
                className={`px-3.5 py-2 rounded-lg transition-colors flex items-center gap-1 hover:text-white hover:bg-white/10 focus:outline-none ${
                  activeDropdown === 'about' ? 'text-white bg-white/15 font-bold' : 'text-white'
                }`}
              >
                <span>About</span>
                <ChevronDown size={14} className={`transition-transform duration-200 text-white/80 ${activeDropdown === 'about' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'about' && (
                <div 
                  className="absolute left-0 xl:left-auto xl:-right-10 mt-1.5 w-[560px] bg-white text-slate-800 rounded-2xl shadow-2xl border border-slate-200 p-5 grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-top-2 duration-150 z-50 text-[13px]"
                  onMouseEnter={() => setActiveDropdown('about')}
                >
                  {/* Category 1: About UCP & Leadership */}
                  <div className="space-y-1.5">
                    <h5 className="text-[11px] font-bold text-[#092242] uppercase tracking-wider border-b border-slate-100 pb-1 flex items-center gap-1.5">
                      <Building2 size={13} className="text-[#a30f16]" /> About UCP
                    </h5>
                    <button
                      onClick={() => { setActiveDropdown(null); handleNavClick('leadership-section'); }}
                      className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-[#a30f16] flex items-center justify-between"
                    >
                      <span>Our Leadership</span>
                      <ArrowRight size={11} className="text-slate-400" />
                    </button>
                    <button
                      onClick={() => { setActiveDropdown(null); handleNavClick('stats-section'); }}
                      className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-[#a30f16] flex items-center justify-between"
                    >
                      <span>Vision & Rankings (QS #362)</span>
                      <ArrowRight size={11} className="text-slate-400" />
                    </button>
                    <button
                      onClick={() => { 
                        setActiveDropdown(null); 
                        if (onOpenCampusLifePage) {
                          onOpenCampusLifePage();
                        } else {
                          handleNavClick('campus-section'); 
                        }
                      }}
                      className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-[#a30f16] flex items-center justify-between"
                    >
                      <span>Campus Life & 65+ Societies</span>
                      <ArrowRight size={11} className="text-slate-400" />
                    </button>
                    <button
                      onClick={() => { setActiveDropdown(null); onOpenInfo('sustainability'); }}
                      className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-[#a30f16] flex items-center justify-between"
                    >
                      <span>Sustainability Initiatives</span>
                      <ArrowRight size={11} className="text-slate-400" />
                    </button>
                    <button
                      onClick={() => { setActiveDropdown(null); onOpenInfo('harassment-policy'); }}
                      className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-[#a30f16] flex items-center justify-between"
                    >
                      <span>Harassment Protection Policy</span>
                      <ArrowRight size={11} className="text-slate-400" />
                    </button>
                  </div>

                  {/* Category 2: Special Programs, Research & Media (Moved from top header) */}
                  <div className="space-y-1.5">
                    <h5 className="text-[11px] font-bold text-[#092242] uppercase tracking-wider border-b border-slate-100 pb-1 flex items-center gap-1.5">
                      <Globe size={13} className="text-[#a30f16]" /> Programs & Innovation
                    </h5>
                    
                    {/* Our Legacy (Replaces International Programs) */}
                    <button
                      id="nav-dropdown-our-legacy-btn"
                      onClick={() => { 
                        setActiveDropdown(null); 
                        if (onOpenLegacyPage) onOpenLegacyPage(); 
                      }}
                      className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-[#a30f16] flex items-center justify-between group cursor-pointer"
                    >
                      <span className="font-semibold text-slate-800 group-hover:text-[#a30f16]">Our Legacy</span>
                      <span className="text-[10px] bg-amber-100 text-amber-900 font-bold px-1.5 py-0.5 rounded">Heritage</span>
                    </button>

                    {/* CNN Academy */}
                    <button
                      onClick={() => { setActiveDropdown(null); onSelectFaculty('fmmc'); }}
                      className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-[#a30f16] flex items-center justify-between group"
                    >
                      <span className="font-semibold text-slate-800 group-hover:text-[#a30f16]">CNN Academy at UCP</span>
                      <span className="text-[10px] bg-red-100 text-red-700 font-bold px-1.5 py-0.5 rounded">Media</span>
                    </button>

                    {/* UCP Online */}
                    <button
                      onClick={() => { setActiveDropdown(null); onOpenInfo('ucp-online'); }}
                      className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-[#a30f16] flex items-center justify-between group"
                    >
                      <span className="font-semibold text-slate-800 group-hover:text-[#a30f16]">UCP Online (LMS & Digital)</span>
                      <span className="text-[10px] bg-blue-100 text-blue-700 px-1.5 py-0.5 rounded">E-Learn</span>
                    </button>

                    {/* ORIC */}
                    <a
                      href="https://oric.ucp.edu.pk/?_gl=1%2A1038nq8%2A_gcl_au%2AMTgzMjA3ODQ4MC4xNzkwMDEyMzQ5Li0uLS4xNzkwMTgwNDM0LjY0MTA5MDAyNi4xNzkwMTgwNDM0LjE3OTAxODA0MzQ.%2A_ga%2AMTk1MTM4Njg4MS4xNzkwMDEyMzQ5%2A_ga_9BBZL6TFYQ%2AczE3OTAxNzk2OTYkbzYkZzEkdDE3OTAxODA1MTUkajQyJGwwJGg0NzM0NDM5MzA."
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setActiveDropdown(null)}
                      className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-[#a30f16] flex items-center justify-between group"
                    >
                      <span className="font-semibold text-slate-800 group-hover:text-[#a30f16]">ORIC (Research & Tech)</span>
                      <span className="text-[10px] bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded">Official ↗</span>
                    </a>

                    {/* Blog */}
                    <a
                      href="https://ucp.edu.pk/blog/?_gl=1*g7icau*_gcl_au*mtgzmja3odq4mc4xnzkwmdeymzq5li0uls4xnzkwmtgwndm0ljy0mta5mdayni4xnzkwmtgwndm0lje3otaxoda0mzq.*_ga*mtk1mtm4njg4ms4xnzkwmdeymzq5*_ga_9bbzl6tfyq*cze3otaxnzk2otykbzykzzekdde3otaxoda0otckajywjgwwjgg0nzm0ndm5mza."
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setActiveDropdown(null)}
                      className="w-full text-left px-2.5 py-1.5 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-[#a30f16] flex items-center justify-between group"
                    >
                      <span className="font-semibold text-slate-800 group-hover:text-[#a30f16]">UCP Official Blog</span>
                      <span className="text-[10px] bg-amber-100 text-amber-800 px-1.5 py-0.5 rounded">Stories ↗</span>
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* 4. Student Login Portal (mcom.pgc.edu.pk) */}
            <a
              id="nav-myucp-btn"
              href="https://mcom.pgc.edu.pk/Student/StdLogin.jsp"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3.5 py-2 rounded-lg hover:text-amber-300 hover:bg-white/5 transition-colors focus:outline-none font-medium flex items-center gap-1.5 text-white"
            >
              <User size={14} className="text-emerald-400" />
              <span>Portal Login</span>
            </a>

          </nav>

          {/* Right Header Area: Search & Mobile Menu Toggle */}
          <div className="flex items-center space-x-2 shrink-0">
            <button
              id="header-search-btn"
              onClick={() => handleNavClick('finder-section')}
              className="p-2 text-slate-200 hover:text-white hover:bg-white/10 rounded-full transition-colors hidden sm:flex items-center justify-center focus:outline-none cursor-pointer"
              title="Search Courses & Degrees"
              aria-label="Search"
            >
              <Search size={18} />
            </button>

            {/* Mobile menu toggle hamburger */}
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-white hover:text-amber-300 rounded-lg focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#071b34] border-t border-slate-700/70 px-5 pt-4 pb-6 text-sm text-slate-100 space-y-3.5 shadow-2xl animate-in slide-in-from-top-3">
          <div className="grid grid-cols-2 gap-2 mb-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenApply();
              }}
              className="col-span-2 bg-[#a30f16] text-white py-2.5 px-3 rounded-lg font-bold text-center text-xs uppercase tracking-wider shadow flex items-center justify-center gap-1.5 hover:bg-[#880d12] transition-colors cursor-pointer"
            >
              <span>Apply Online — Fall 2026</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenCampusLifePage) {
                  onOpenCampusLifePage();
                } else {
                  handleNavClick('campus-section');
                }
              }}
              className="bg-white/10 text-white py-2 px-3 rounded-lg font-semibold text-center text-xs border border-white/20 block hover:bg-white/20 transition-colors"
            >
              Campus Life
            </button>
            <a
              href="https://mcom.pgc.edu.pk/Student/StdLogin.jsp"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-white/10 text-white py-2 px-3 rounded-lg font-semibold text-center text-xs border border-white/20 block hover:bg-white/20 transition-colors"
            >
              Student Portal
            </a>
          </div>

          <div className="space-y-1.5 border-b border-slate-700/60 pb-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (currentPage !== 'home' && onBackToHome) {
                  onBackToHome();
                } else {
                  handleNavClick('top');
                }
              }}
              className="w-full text-left py-2 font-semibold text-white flex items-center justify-between"
            >
              <span className="flex items-center gap-2">
                <Home size={15} />
                Home
              </span>
              {currentPage === 'home' && <span className="text-xs text-amber-300 font-bold">Current</span>}
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenProgrammesPage) {
                  onOpenProgrammesPage();
                } else {
                  handleNavClick('finder-section');
                }
              }}
              className="w-full text-left py-2 font-semibold text-white flex items-center justify-between"
            >
              <span>Academic Programmes</span>
              <span className="text-xs text-amber-300">Fall 2026</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenFacultyPage) {
                  onOpenFacultyPage();
                } else {
                  handleNavClick('faculty-section');
                }
              }}
              className="w-full text-left py-2 font-semibold text-white flex items-center justify-between"
            >
              <span>Our Faculty</span>
              <span className="text-xs text-amber-300">20 Profiles</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenProgrammesPage) onOpenProgrammesPage();
                else handleNavClick('finder-section');
              }}
              className="w-full text-left py-2 font-semibold text-white flex items-center justify-between"
            >
              <span>Academics & Programmes</span>
              <span className="text-xs text-amber-300">25 Degrees</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenProgrammesPage) onOpenProgrammesPage('bs-business-analytics');
              }}
              className="w-full text-left py-1 text-slate-300 hover:text-white text-xs pl-2 flex items-center justify-between"
            >
              <span>• BS Programmes (12 Degrees)</span>
              <span className="text-amber-300/80">4-Year</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenProgrammesPage) onOpenProgrammesPage('adp-psychology');
              }}
              className="w-full text-left py-1 text-slate-300 hover:text-white text-xs pl-2 flex items-center justify-between"
            >
              <span>• ADP / ADS Programmes (13 Degrees)</span>
              <span className="text-amber-300/80">2-Year</span>
            </button>
            <a
              href="https://ucpcolleges.pgc.edu/campus-network/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-left py-1 text-slate-300 hover:text-white text-xs pl-2 flex items-center justify-between"
            >
              <span>• Fee Structure & Programs</span>
              <span className="text-amber-300">↗</span>
            </a>
            <a
              href="https://ucp.edu.pk/rules-regulations/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-left py-1 text-slate-300 hover:text-white text-xs pl-2 flex items-center justify-between"
            >
              <span>• Rules & Regulations</span>
              <span className="text-amber-300">↗</span>
            </a>
            <a
              href="https://ucpcolleges.pgc.edu/scholarship/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-left py-1 text-slate-300 hover:text-white text-xs pl-2 flex items-center justify-between"
            >
              <span>• Scholarships & Concessions (1.3B PKR)</span>
              <span className="text-amber-300">↗</span>
            </a>
          </div>

          <div className="space-y-2 text-xs">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenInfo('merit-list'); }}
              className="w-full text-left py-1.5 text-slate-200 hover:text-white"
            >
              Admissions & Merit Lists
            </button>
            <a
              href="https://ucp.edu.pk/academic-calendar/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-left py-1.5 text-slate-200 hover:text-white flex items-center justify-between"
            >
              <span>Academic Calendar (Official)</span>
              <span className="text-xs text-amber-300">↗</span>
            </a>
            <a
              href="https://ucp.edu.pk/jobs/career-opportunities/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-left py-1.5 text-slate-200 hover:text-white flex items-center justify-between"
            >
              <span>Jobs & Careers (Official)</span>
              <span className="text-xs text-amber-300">↗</span>
            </a>
            <a
              href="https://horizon.ucp.edu.pk/verify?_gl=1*1jdpsum*_gcl_au*MTgzMjA3ODQ4MC4xNzkwMDEyMzQ5*_ga*MTk1MTM4Njg4MS4xNzkwMDEyMzQ5*_ga_9BBZL6TFYQ*czE3OTAxNzk2OTYkbzYkZzEkdDE3OTAxODAxMjQkajU5JGwwJGg0NzM0NDM5MzA."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-left py-1.5 text-slate-200 hover:text-white flex items-center justify-between"
            >
              <span>Verify Student Record</span>
              <span className="text-xs text-amber-300">↗</span>
            </a>
            <a
              href="https://ucp.edu.pk/faqs/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-left py-1.5 text-slate-200 hover:text-white flex items-center justify-between"
            >
              <span>UCP FAQs (Official)</span>
              <span className="text-xs text-amber-300">↗</span>
            </a>
            <button
              onClick={() => handleNavClick('leadership-section')}
              className="w-full text-left py-1.5 text-slate-200 hover:text-white"
            >
              Our Leadership
            </button>
            <button
              onClick={() => { 
                setMobileMenuOpen(false); 
                if (onOpenLegacyPage) onOpenLegacyPage(); 
              }}
              className="w-full text-left py-1.5 text-slate-200 hover:text-amber-300 flex items-center justify-between"
            >
              <span>Our Legacy</span>
              <span className="text-xs text-amber-300 font-bold">Royal Heritage</span>
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onSelectFaculty('fmmc'); }}
              className="w-full text-left py-1.5 text-slate-200 hover:text-white"
            >
              CNN Academy at UCP
            </button>
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenInfo('ucp-online'); }}
              className="w-full text-left py-1.5 text-slate-200 hover:text-white"
            >
              UCP Online (Distance Education)
            </button>
            <a
              href="https://oric.ucp.edu.pk/?_gl=1%2A1038nq8%2A_gcl_au%2AMTgzMjA3ODQ4MC4xNzkwMDEyMzQ5Li0uLS4xNzkwMTgwNDM0LjY0MTA5MDAyNi4xNzkwMTgwNDM0LjE3OTAxODA0MzQ.%2A_ga%2AMTk1MTM4Njg4MS4xNzkwMDEyMzQ5%2A_ga_9BBZL6TFYQ%2AczE3OTAxNzk2OTYkbzYkZzEkdDE3OTAxODA1MTUkajQyJGwwJGg0NzM0NDM5MzA."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-left py-1.5 text-slate-200 hover:text-white flex items-center justify-between"
            >
              <span>ORIC (Research & Tech)</span>
              <span className="text-xs text-amber-300">↗</span>
            </a>
            <a
              href="https://ucp.edu.pk/blog/?_gl=1*g7icau*_gcl_au*mtgzmja3odq4mc4xnzkwmdeymzq5li0uls4xnzkwmtgwndm0ljy0mta5mdayni4xnzkwmtgwndm0lje3otaxoda0mzq.*_ga*mtk1mtm4njg4ms4xnzkwmdeymzq5*_ga_9bbzl6tfyq*cze3otaxnzk2otykbzykzzekdde3otaxoda0otckajywjgwwjgg0nzm0ndm5mza."
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-left py-1.5 text-slate-200 hover:text-white flex items-center justify-between"
            >
              <span>UCP Blog & Campus Stories</span>
              <span className="text-xs text-amber-300">↗</span>
            </a>
          </div>

          <div className="pt-2 text-xs text-slate-400 border-t border-slate-700/60">
            <p>1 - Khayaban-e-Jinnah Road, Johar Town, Lahore • Helpline: {UCP_CONTACT.tollFree}</p>
          </div>
        </div>
      )}
    </header>
  );
};
