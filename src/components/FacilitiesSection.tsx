import React from 'react';
import { Building2, Sparkles, Compass, ArrowRight, ShieldCheck, Cpu, BookOpen, Layers } from 'lucide-react';

interface FacilitiesSectionProps {
  onOpenApply?: () => void;
  onOpenCampusLifePage?: () => void;
}

export const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({
  onOpenApply,
  onOpenCampusLifePage,
}) => {
  return (
    <section 
      id="facilities-section"
      className="py-[100px] bg-[#FBF9F5] border-b border-slate-200/80 overflow-hidden"
      aria-labelledby="facilities-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Header with Mask Reveal */}
        <header className="max-w-3xl mb-14 sm:mb-16" data-reveal="mask">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#a30f16]">
              FACILITIES & ARCHITECTURE
            </span>
            <span className="h-px w-8 bg-[#a30f16]/40" aria-hidden="true" />
          </div>

          <div className="mask-reveal-wrap">
            <h2
              id="facilities-heading"
              className="mask-reveal-child text-3xl sm:text-4xl lg:text-[46px] font-serif font-semibold text-[#092242] tracking-tight leading-[1.18]"
              style={{ fontFamily: "'Cormorant Garamond', 'Libre Baskerville', Georgia, serif" }}
            >
              Modern Learning Environment
            </h2>
          </div>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-sans max-w-2xl">
            Every square foot of UCP Bahawalpur is engineered to cultivate focus, collaboration, and intellectual rigor through purpose-built academic architecture and cutting-edge resources.
          </p>
        </header>

        {/* 2. IMAGE 09: Wide Architectural Feature (Grand Staircase & Central Atrium) */}
        {/* "This image works especially well as a wide architectural feature. Use subtle parallax. Do not overlay excessive text on top of the important architectural details." */}
        <div className="mb-14 lg:mb-16">
          <div className="group relative w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-stone-100 shadow-sm">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
              <img
                src="/assets/campus/9_facilities_grand_staircase.jpg"
                alt="Grand Architectural Staircase and Multi-Tier Interior Atrium at UCP Bahawalpur"
                loading="eager"
                className="w-full h-full object-cover object-center img-hover-scale"
              />
              {/* Minimal gradient at the very bottom only to preserve pure architectural details */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              
              {/* Quiet, unoccluding caption at bottom edge */}
              <div className="absolute bottom-5 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2 text-white pointer-events-none">
                <div>
                  <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-rose-300 font-semibold block mb-0.5">
                    Campus Architecture
                  </span>
                  <h3 className="font-serif text-lg sm:text-xl font-medium">
                    Grand Interior Atrium & Central Staircase
                  </h3>
                </div>
                <span className="text-xs text-slate-300 font-sans tracking-wide">
                  Purpose-Built Academic Infrastructure · UCP Bahawalpur
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3. IMAGE 05 & Facilities Grid Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          
          {/* IMAGE 05: Bright Interior Lobby Photograph ("Modern Learning Environment") */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xs flex-1 flex flex-col">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-stone-100">
                <img
                  src="/assets/campus/5_facilities_interior_lobby.jpg"
                  alt="Modern Learning Environment - Bright Interior Lobby and Academic Reception at UCP Bahawalpur"
                  loading="eager"
                  className="w-full h-full object-cover object-center img-hover-scale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-xs text-[#092242] text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded shadow-xs">
                  Modern Learning Environment
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 
                    className="text-xl sm:text-2xl font-serif font-semibold text-[#092242]"
                    style={{ fontFamily: "'Cormorant Garamond', 'Libre Baskerville', Georgia, serif" }}
                  >
                    Bright, Inspiring Academic Spaces
                  </h3>
                  <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-sans">
                    Natural sunlight, generous spatial volume, and quiet acoustics allow students and faculty to move seamlessly between lectures, research sessions, and collaborative group discussions.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                  <div className="space-y-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#a30f16]">Acoustic Balance</span>
                    <p className="text-xs text-slate-500">Sound-dampened corridors and quiet study niches</p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#a30f16]">Smart Infrastructure</span>
                    <p className="text-xs text-slate-500">Fiber Wi-Fi & climate-controlled ventilation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Complementary Facilities Showcase Cards */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
            
            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-xs hover:border-[#a30f16]/30 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#a30f16] flex items-center justify-center mb-4">
                <Cpu size={20} />
              </div>
              <h4 className="font-serif text-lg sm:text-xl font-semibold text-[#092242] mb-1">
                Advanced Computing & AI Labs
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                Dedicated workstations with high-throughput GPUs, machine learning libraries, and cyber security testbeds for FOIT students.
              </p>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-xs hover:border-[#a30f16]/30 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center mb-4">
                <BookOpen size={20} />
              </div>
              <h4 className="font-serif text-lg sm:text-xl font-semibold text-[#092242] mb-1">
                Digital Resource Commons
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                Comprehensive digital catalog linked to national research repositories, peer-reviewed journals, and quiet individual carrels.
              </p>
            </div>

            <div className="bg-white border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-xs hover:border-[#a30f16]/30 transition-all duration-300">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-4">
                <Layers size={20} />
              </div>
              <h4 className="font-serif text-lg sm:text-xl font-semibold text-[#092242] mb-1">
                Multi-Tier Lecture Theatres
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                Stepped amphitheater seating designed for clear visual lines, dynamic presentation displays, and interactive symposiums.
              </p>
            </div>

          </div>

        </div>

      </div>

      {/* 4. IMAGE 10: Sunlit Hallway Photograph (Secondary Interstitial Visual for Rhythm) */}
      {/* "Use the sunlit hallway photograph as: CAMPUS EXPERIENCE / FACILITIES. Use this as a secondary visual between major sections. It should create visual rhythm between larger images." */}
      <div className="mt-20 sm:mt-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-slate-200/80 bg-stone-100 shadow-xs">
          <div className="relative h-64 sm:h-80 lg:h-96 w-full overflow-hidden">
            <img
              src="/assets/campus/10_campus_sunlit_hallway.jpg"
              alt="Sunlit Hallway and Academic Concourse at UCP Bahawalpur"
              loading="eager"
              decoding="async"
              className="w-full h-full object-cover object-center img-hover-scale"
            />
            {/* Subtle scrim */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#092242]/85 via-[#092242]/30 to-transparent pointer-events-none" />

            <div className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-center max-w-xl text-white">
              <span className="text-[11px] font-sans uppercase tracking-[0.22em] text-amber-300 font-semibold mb-1">
                Campus Rhythm & Light
              </span>
              <h3 
                className="font-serif text-2xl sm:text-3xl font-semibold text-white leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', 'Libre Baskerville', Georgia, serif" }}
              >
                The Sunlit Concourse
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 mt-2 font-sans leading-relaxed">
                Interconnecting the academic wings, our sunlit hallways are designed with architectural rhythm that welcomes morning daylight into everyday student life.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};
