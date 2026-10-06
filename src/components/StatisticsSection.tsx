import React, { useState } from 'react';
import { 
  GraduationCap, BookOpenCheck, Award, Users, Globe, Scale, 
  UserCheck, HeartHandshake, Smile, TrendingUp, Leaf, ShieldCheck, 
  Coins, HelpingHand, Briefcase, Sparkles, ExternalLink
} from 'lucide-react';
import { OFFICIAL_STATS } from '../data/ucpData';
import { AnimatedCounter } from './AnimatedCounter';

const iconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap size={22} strokeWidth={1.75} />,
  BookOpenCheck: <BookOpenCheck size={22} strokeWidth={1.75} />,
  Award: <Award size={22} strokeWidth={1.75} />,
  Users: <Users size={22} strokeWidth={1.75} />,
  Globe: <Globe size={22} strokeWidth={1.75} />,
  Scale: <Scale size={22} strokeWidth={1.75} />,
  UserCheck: <UserCheck size={22} strokeWidth={1.75} />,
  HeartHandshake: <HeartHandshake size={22} strokeWidth={1.75} />,
  Smile: <Smile size={22} strokeWidth={1.75} />,
  TrendingUp: <TrendingUp size={22} strokeWidth={1.75} />,
  Leaf: <Leaf size={22} strokeWidth={1.75} />,
  ShieldCheck: <ShieldCheck size={22} strokeWidth={1.75} />,
  Coins: <Coins size={22} strokeWidth={1.75} />,
  HelpingHand: <HelpingHand size={22} strokeWidth={1.75} />,
  Briefcase: <Briefcase size={22} strokeWidth={1.75} />,
  Sparkles: <Sparkles size={22} strokeWidth={1.75} />,
};

// Official image icons from ucp.edu.pk
const officialIconUrls: Record<string, string> = {
  'undergrad-prog': 'https://ucp.edu.pk/wp-content/uploads/2023/01/Undergraduate-Programs-Offered.webp',
  'postgrad-prog': 'https://ucp.edu.pk/wp-content/uploads/2023/01/Postgraduate-Programs-Offered.webp',
  'phd-prog': 'https://ucp.edu.pk/wp-content/uploads/2023/01/PhD-Programs-Offered.webp',
  'phd-faculty': 'https://ucp.edu.pk/wp-content/uploads/2023/01/PhD-Faculty-Members.webp',
  'intl-faculty': 'https://ucp.edu.pk/wp-content/uploads/2023/01/International-Faculty-Members.webp',
  'student-ratio': 'https://ucp.edu.pk/wp-content/uploads/2023/01/Student-Teacher-Ratio.webp',
  'women-leadership': 'https://ucp.edu.pk/wp-content/uploads/2023/01/Women-in-Senior-Leadership.webp',
  'women-faculty': 'https://ucp.edu.pk/wp-content/uploads/2023/01/Women-in-Faculty.webp',
  'female-students': 'https://ucp.edu.pk/wp-content/uploads/2023/01/Female-Students-Population.webp',
  'qs-ranking': 'https://ucp.edu.pk/wp-content/uploads/2023/01/Top-Asian-QS-Ranking.webp',
  'green-metric': 'https://ucp.edu.pk/wp-content/uploads/2023/01/UI-Green-Matrix-Ranking-.webp',
  'hec-qec': 'https://ucp.edu.pk/wp-content/uploads/2023/01/HEC-Score-Quality-Assurance.webp',
  'scholarships': 'https://ucp.edu.pk/wp-content/uploads/2023/01/Scholarships-Awarded.webp',
  'financial-aid': 'https://ucp.edu.pk/wp-content/uploads/2023/01/Students-on-Financial-Aid-1.webp',
  'alumni': 'https://ucp.edu.pk/wp-content/uploads/2023/01/Alumni.webp',
  'clubs-societies': 'https://ucp.edu.pk/wp-content/uploads/2023/01/Dynamic-Student-Clubs-Societies.webp',
};

export const StatisticsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Indicators' },
    { id: 'academics', label: 'Academic Breadth' },
    { id: 'faculty', label: 'Faculty & Mentorship' },
    { id: 'diversity', label: 'Diversity & Inclusion' },
    { id: 'rankings', label: 'Rankings & Accreditations' },
    { id: 'aid', label: 'Scholarships & Aid' },
  ];

  const displayedStats = OFFICIAL_STATS.filter((item) => {
    if (activeTab === 'all') return true;
    return item.category === activeTab;
  });

  return (
    <section 
      id="stats-section" 
      className="py-[100px] bg-[#FAF8F5] text-[#0A1931] relative border-t border-b border-[#0A1931]/10 selection:bg-[#A51C30] selection:text-white"
      aria-labelledby="stats-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header: Prestigious Institutional Typography */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-px w-8 bg-[#A51C30]/40" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#A51C30]">
              INSTITUTIONAL EXCELLENCE & IMPACT
            </span>
            <span className="h-px w-8 bg-[#A51C30]/40" aria-hidden="true" />
          </div>

          <h2 
            id="stats-heading"
            className="text-3xl sm:text-4xl lg:text-[46px] font-serif font-semibold text-[#0A1931] tracking-tight leading-[1.18]"
            style={{ fontFamily: "'Cormorant Garamond', 'Libre Baskerville', 'Playfair Display', Georgia, serif" }}
          >
            Key Facts & Performance Figures
          </h2>

          <p className="mt-4 text-slate-600 text-[16.5px] sm:text-[18px] leading-relaxed font-sans max-w-2xl mx-auto">
            Benchmarked against premier national and international accreditation standards. Discover the official metrics that define the University of Central Punjab's academic standing.
          </p>

          <div className="h-px w-20 bg-[#A51C30]/40 mx-auto mt-6" aria-hidden="true" />
        </div>

        {/* Filter Navigation: Clean Institutional Bar (No Bouncy Candy Pills) */}
        <div className="flex items-center justify-center gap-1 sm:gap-2 flex-wrap mb-12 border-b border-[#0A1931]/10 pb-3">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`text-xs sm:text-[13px] px-3.5 py-2 uppercase tracking-[0.14em] font-medium transition-colors relative cursor-pointer ${
                  isActive
                    ? 'text-[#0A1931] font-bold'
                    : 'text-slate-500 hover:text-[#0A1931]'
                }`}
              >
                {cat.label}
                {isActive && (
                  <span 
                    className="absolute bottom-0 inset-x-2 h-[2px] bg-[#A51C30]" 
                    aria-hidden="true" 
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Statistics Grid: Refined Institutional Editorial Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
          {displayedStats.map((item) => {
            const officialImg = officialIconUrls[item.id];
            return (
              <div
                key={item.id}
                id={`stat-card-${item.id}`}
                className="bg-white border border-[#0A1931]/10 hover:border-[#0A1931]/25 p-5 sm:p-6 transition-all duration-300 hover:shadow-[0_8px_25px_rgba(10,25,49,0.05)] flex flex-col justify-between group relative"
              >
                {/* Thin crimson hairline indicator on hover */}
                <div 
                  className="absolute top-0 left-0 h-[2px] w-0 bg-[#A51C30] transition-all duration-300 ease-out group-hover:w-full"
                  aria-hidden="true"
                />

                <div>
                  {/* Clean Icon Container */}
                  <div className="w-11 h-11 bg-[#FAF8F5] border border-[#0A1931]/10 rounded-sm flex items-center justify-center text-[#0A1931] group-hover:bg-[#0A1931] group-hover:text-white transition-colors duration-300 mb-4 overflow-hidden">
                    {officialImg ? (
                      <img
                        src={officialImg}
                        alt=""
                        className="w-6 h-6 object-contain opacity-80 group-hover:opacity-100 group-hover:invert transition-all"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = 'none';
                        }}
                      />
                    ) : null}
                    <div className="only-if-no-img">
                      {iconMap[item.iconName] || <Award size={20} strokeWidth={1.75} />}
                    </div>
                  </div>

                  {/* Number Value: Bold Serif Number */}
                  <div className="flex items-baseline gap-1">
                    <span 
                      className="text-3xl sm:text-4xl lg:text-[42px] font-serif font-bold text-[#0A1931] tracking-tight group-hover:text-[#A51C30] transition-colors leading-none"
                      style={{ fontFamily: "'Cormorant Garamond', 'Libre Baskerville', Georgia, serif" }}
                    >
                      <AnimatedCounter value={item.value} duration={850} />
                    </span>
                  </div>

                  {/* Metric Label */}
                  <h3 className="text-sm sm:text-[15px] font-sans font-bold text-[#0A1931] mt-3 leading-snug">
                    {item.label}
                  </h3>
                </div>

                {/* Subtitle / Context */}
                <p className="text-xs sm:text-[13px] text-slate-500 mt-3 pt-3 border-t border-[#0A1931]/10 leading-relaxed font-sans font-normal">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Official Scholarship Notice Panel (Dignified Institutional Announcement) */}
        <div className="mt-14 bg-white border border-[#0A1931]/15 border-l-4 border-l-[#A51C30] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="text-center md:text-left space-y-2">
            <span className="text-[11px] font-sans font-bold uppercase tracking-[0.2em] text-[#A51C30] block">
              Financial Accessibility & Merit Concessions
            </span>
            <h3 
              className="text-2xl sm:text-3xl font-serif font-semibold text-[#0A1931] tracking-tight"
              style={{ fontFamily: "'Cormorant Garamond', 'Libre Baskerville', Georgia, serif" }}
            >
              <AnimatedCounter value="1.3" duration={850} /> Billion PKR Awarded in Scholarships
            </h3>
            <p className="text-sm sm:text-[15px] text-slate-600 max-w-2xl leading-relaxed font-sans">
              UCP ensures academic access for deserving scholars. Over 37% of our student body benefits from merit, sports, PGC alumni kinship, and need-based financial concessions.
            </p>
          </div>
          
          <div className="shrink-0 flex flex-wrap items-center gap-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#0A1931] bg-[#FAF8F5] border border-[#0A1931]/15 px-3.5 py-2.5 rounded-sm font-sans">
              <AnimatedCounter value="50%" duration={850} /> PGC Alumni Waiver
            </span>
            <a
              href="https://ucpcolleges.pgc.edu/scholarship/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold uppercase tracking-[0.14em] text-white bg-[#0A1931] hover:bg-[#A51C30] px-5 py-3 transition-colors flex items-center gap-2 rounded-sm shadow-xs cursor-pointer font-sans"
            >
              <span>Explore Scholarships</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
