import React, { useState, useEffect } from 'react';
import { OFFICIAL_STATS } from '../data/ucpData';

interface StatisticsSectionProps {
  onOpenScholarshipsPage?: () => void;
}

export const StatisticsSection: React.FC<StatisticsSectionProps> = ({ onOpenScholarshipsPage }) => {
  // Comprehensive list of all statistics present across the UCP website
  const allStatsList = [
    // Core requested figures & rankings
    { value: '1,620', label: 'ADP Programs' },
    { value: '165', label: 'Merit Scholarships' },
    { value: '130+', label: 'PhD Faculty' },
    { value: '715', label: 'Top Ranked' },
    
    // Global & National Rankings
    { value: '#362', label: 'QS Asia Ranking' },
    { value: '#206', label: 'GreenMetric Ranking' },
    { value: '91.3', label: 'HEC QEC Score' },
    { value: '29,000+', label: 'Alumni Network' },

    // Academic Breadth
    { value: '33+', label: 'Undergraduate BS' },
    { value: '34+', label: 'Postgraduate MS' },
    { value: '19', label: 'Doctoral PhD Fields' },
    { value: '25', label: 'BWP Campus Degrees' },

    // Faculty & Mentorship Excellence
    { value: '199', label: 'Full PhD Faculty' },
    { value: '16', label: 'Intl Faculty' },
    { value: '20:1', label: 'Student Ratio' },
    { value: '13', label: 'ADP Disciplines' },

    // Diversity & Institutional Aid
    { value: '42%', label: 'Women Leadership' },
    { value: '43%', label: 'Women in Faculty' },
    { value: '42%', label: 'Female Students' },
    { value: '65', label: 'Active Societies' },

    // Financial Aid & Community Impact
    { value: '1.3B+', label: 'PKR Scholarships' },
    { value: '37%+', label: 'Financial Aid Rate' },
    { value: '50%', label: 'Top Merit Waiver' },
    { value: '100%', label: 'Apex Accreditations' },
  ];

  // Group all statistics into slides of 4 stats each
  const statsPerSlide = 4;
  const slides: Array<typeof allStatsList> = [];
  for (let i = 0; i < allStatsList.length; i += statsPerSlide) {
    slides.push(allStatsList.slice(i, i + statsPerSlide));
  }

  // Active slide state (cycles every 3 seconds)
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [slides.length, isPaused]);

  return (
    <section 
      id="stats-section" 
      className="py-[60px] sm:py-[80px] bg-[#FAF8F5] text-[#0A1931] relative"
      aria-labelledby="stats-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Preserved Institutional Headings */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-px w-8 bg-[#C41E3A]/40" aria-hidden="true" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#C41E3A]">
              INSTITUTIONAL EXCELLENCE & IMPACT
            </span>
            <span className="h-px w-8 bg-[#C41E3A]/40" aria-hidden="true" />
          </div>

          <h2 
            id="stats-heading"
            className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-semibold text-[#0A1931] tracking-tight leading-[1.18]"
            style={{ fontFamily: "'Cormorant Garamond', 'Libre Baskerville', 'Playfair Display', Georgia, serif" }}
          >
            Key Facts & Performance Figures
          </h2>

          <p className="mt-3 text-slate-600 text-[15px] sm:text-[16.5px] leading-relaxed font-sans max-w-2xl mx-auto">
            Benchmarked against premier national and international accreditation standards. Discover the official metrics that define the University of Central Punjab's academic standing.
          </p>
        </div>

        {/* =========================================================================
            KIPS STYLE NO-BORDER BLUE SECTION (CONTAINING ALL OFFICIAL STATS)
            Height 380px, bg #0F2C52, overflow hidden, position relative.
            No borders, no cards, no shadows.
            ========================================================================= */}
        <div 
          className="relative w-full bg-[#0F2C52] overflow-hidden rounded-none text-white font-['Inter',sans-serif]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          
          {/* =========================================================================
              DESKTOP VIEW (lg: and above): KIPS STYLE NO-BORDER BLUE SECTION
              Height 380px, bg #0F2C52, position relative. Left big circle and right text.
              ========================================================================= */}
          <div className="hidden lg:block relative w-full h-[380px]">
            {/* Left Big Circle:
                Absolute left -10% bottom -20%, width 620px height 620px bg #123A70 border-radius 50%
                Inside centered: Big text "37%+" font 88px bold white Inter. */}
            <div 
              onClick={onOpenScholarshipsPage}
              className="absolute left-[-10%] bottom-[-20%] w-[620px] h-[620px] bg-[#123A70] rounded-full flex flex-col items-center justify-center select-none cursor-pointer transition-transform duration-500 hover:scale-[1.02]"
              title="Click to explore Scholarships & Financial Aid"
            >
              {/* Centered Content inside the circle */}
              <div className="flex flex-col items-center justify-center text-center translate-x-16 -translate-y-10 px-6">
                <span className="text-[88px] font-bold text-white leading-none tracking-tight font-sans">
                  37%+
                </span>
                <span className="text-[13px] text-white/70 font-normal mt-2 max-w-[240px] leading-snug">
                  Students on Financial Aid & Merit Concessions
                </span>
                <div className="flex items-center gap-1.5 mt-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C41E3A]"></span>
                  <span className="text-[11px] uppercase tracking-wider text-white/50 font-semibold font-mono">
                    1.3B+ PKR Disbursed
                  </span>
                </div>
              </div>
            </div>

            {/* Right Content:
                Title "Achievements Secured by UCPians Every Year" and moving numbers */}
            <div className="absolute top-[16%] left-[45%] right-[5%] flex flex-col justify-center max-w-2xl">
              
              {/* Title with subtle red accent dot */}
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C41E3A] shrink-0" aria-hidden="true" />
                <h3 className="text-[22px] font-bold text-white tracking-tight leading-snug font-sans">
                  Achievements Secured by UCPians Every Year
                </h3>
              </div>

              {/* Description */}
              <p className="mt-2.5 text-[12px] text-white/70 max-w-[420px] leading-[1.6] font-normal">
                UCP has been achieving remarkable success across academics, research, and national competitions. Over 29,000 alumni network secured seats in top professional institutes and corporate sectors nationwide.
              </p>

              {/* Bottom Moving Numbers - No Border */}
              <div className="mt-8 overflow-hidden w-full max-w-[560px]">
                <div 
                  className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                >
                  {slides.map((group, groupIdx) => (
                    <div 
                      key={groupIdx} 
                      className="w-full shrink-0 flex items-center justify-start gap-[48px]"
                    >
                      {group.map((stat, statIdx) => (
                        <div key={statIdx} className="flex flex-col select-none min-w-[70px]">
                          <div className="flex items-center gap-1">
                            <span className="text-[18px] font-bold text-[#FFFFFF] font-sans tracking-tight">
                              {stat.value}
                            </span>
                            <span className="w-1 h-1 rounded-full bg-[#C41E3A]" aria-hidden="true" />
                          </div>
                          <span className="text-[10px] uppercase text-white/60 tracking-wider font-medium mt-0.5 whitespace-nowrap">
                            {stat.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation Dots Indicator */}
              <div className="flex items-center gap-1.5 mt-5">
                {slides.map((_, dotIdx) => {
                  const isActive = activeSlide === dotIdx;
                  return (
                    <button
                      key={dotIdx}
                      onClick={() => setActiveSlide(dotIdx)}
                      aria-label={`Go to slide ${dotIdx + 1} of ${slides.length}`}
                      className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                        isActive 
                          ? 'w-6 bg-white' 
                          : 'w-1.5 bg-white/30 hover:bg-white/60'
                      }`}
                    />
                  );
                })}
                <span className="text-[10px] text-white/40 ml-2 font-mono">
                  {activeSlide + 1}/{slides.length}
                </span>
              </div>

            </div>
          </div>

          {/* =========================================================================
              MOBILE & TABLET VIEW (< lg): PRISTINE RESPONSIVE NON-OVERLAPPING STACK
              Clear visual hierarchy, zero text collision, same premium visibility as desktop.
              ========================================================================= */}
          <div className="flex lg:hidden flex-col gap-6 p-5 sm:p-7 w-full">

            {/* 1. Dedicated Financial Aid & Scholarship Feature Card */}
            <div 
              onClick={onOpenScholarshipsPage}
              className="bg-[#123A70] rounded-xl p-4 sm:p-5 border border-white/15 shadow-md flex items-center gap-4 cursor-pointer active:scale-[0.99] transition-all hover:border-amber-400/40"
              title="Click to explore Scholarships & Financial Aid"
            >
              {/* Circle badge with prominent 37%+ */}
              <div className="w-20 h-20 sm:w-22 sm:h-22 rounded-full bg-[#0F2C52] border-2 border-white/20 flex flex-col items-center justify-center shrink-0 shadow-inner">
                <span className="text-[26px] sm:text-[30px] font-bold text-white tracking-tight leading-none font-sans">
                  37%+
                </span>
                <span className="text-[9px] uppercase tracking-wider text-amber-400 font-mono font-medium mt-1">
                  Aid Rate
                </span>
              </div>

              {/* Content side */}
              <div className="flex flex-col min-w-0">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C41E3A] shrink-0" aria-hidden="true" />
                  <span className="text-[11px] sm:text-xs uppercase tracking-wider text-white/80 font-semibold font-mono">
                    1.3B+ PKR Disbursed
                  </span>
                </div>
                <h4 className="text-[13.5px] sm:text-[15px] font-bold text-white leading-snug">
                  Students on Financial Aid & Merit Concessions
                </h4>
                <span className="text-[11px] text-amber-300 font-medium mt-1.5 flex items-center gap-1">
                  Explore Scholarships & Waivers →
                </span>
              </div>
            </div>

            {/* 2. Achievements Title & Description */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C41E3A] shrink-0" aria-hidden="true" />
                <h3 className="text-[19px] sm:text-[21px] font-bold text-white tracking-tight leading-snug font-sans">
                  Achievements Secured by UCPians Every Year
                </h3>
              </div>

              <p className="mt-2 text-[12.5px] sm:text-[13px] text-white/75 leading-[1.6] font-normal">
                UCP has been achieving remarkable success across academics, research, and national competitions. Over 29,000 alumni network secured seats in top professional institutes and corporate sectors nationwide.
              </p>

              {/* 3. Mobile Moving Numbers (2x2 Grid per slide to give labels plenty of breathing room) */}
              <div className="mt-5 overflow-hidden w-full">
                <div 
                  className="flex transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]"
                  style={{ transform: `translateX(-${activeSlide * 100}%)` }}
                >
                  {slides.map((group, groupIdx) => (
                    <div 
                      key={groupIdx} 
                      className="w-full shrink-0 grid grid-cols-2 gap-x-4 gap-y-3.5 py-1"
                    >
                      {group.map((stat, statIdx) => (
                        <div key={statIdx} className="flex flex-col select-none">
                          <div className="flex items-center gap-1.5">
                            <span className="text-[19px] sm:text-[21px] font-bold text-[#FFFFFF] font-sans tracking-tight leading-none">
                              {stat.value}
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C41E3A] shrink-0" aria-hidden="true" />
                          </div>
                          <span className="text-[10.5px] sm:text-[11px] uppercase text-white/70 tracking-wider font-medium mt-1 leading-snug">
                            {stat.label}
                          </span>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* 4. Mobile Navigation Dots & Slide Indicator */}
              <div className="flex items-center justify-between mt-5 pt-3 border-t border-white/10">
                <div className="flex items-center gap-1.5">
                  {slides.map((_, dotIdx) => {
                    const isActive = activeSlide === dotIdx;
                    return (
                      <button
                        key={dotIdx}
                        onClick={() => setActiveSlide(dotIdx)}
                        aria-label={`Go to slide ${dotIdx + 1} of ${slides.length}`}
                        className={`h-1.5 transition-all duration-300 rounded-full cursor-pointer ${
                          isActive 
                            ? 'w-6 bg-white' 
                            : 'w-1.5 bg-white/30 hover:bg-white/60'
                        }`}
                      />
                    );
                  })}
                </div>
                <span className="text-[11px] text-white/50 font-mono">
                  Slide {activeSlide + 1} of {slides.length}
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
