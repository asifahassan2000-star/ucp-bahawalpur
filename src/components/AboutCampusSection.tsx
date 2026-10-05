import React from 'react';
import { ArrowRight, Compass, ShieldCheck, Sparkles, Building2, Trees, CheckCircle2 } from 'lucide-react';

interface AboutCampusSectionProps {
  onOpenApply?: () => void;
  onOpenLegacyPage?: () => void;
  onScrollTo?: (id: string) => void;
}

export const AboutCampusSection: React.FC<AboutCampusSectionProps> = ({
  onOpenApply,
  onOpenLegacyPage,
  onScrollTo,
}) => {
  return (
    <section 
      id="our-campus-section"
      className="relative bg-white py-20 sm:py-24 lg:py-28 border-b border-slate-200/80 overflow-hidden"
      aria-labelledby="about-campus-heading"
    >
      {/* Subtle architectural dot grid background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(#092242 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Mask Reveal */}
        <div className="max-w-3xl mb-12 sm:mb-14" data-reveal="mask">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#a30f16]">
              OUR CAMPUS · BAHAWALPUR
            </span>
            <span className="h-px w-8 bg-[#a30f16]/40" aria-hidden="true" />
          </div>

          <div className="mask-reveal-wrap">
            <h2
              id="about-campus-heading"
              className="mask-reveal-child text-3xl sm:text-4xl lg:text-[46px] font-serif font-semibold text-[#092242] tracking-tight leading-[1.18]"
              style={{ fontFamily: "'Cormorant Garamond', 'Libre Baskerville', Georgia, serif" }}
            >
              An Environment Built for Growth
            </h2>
          </div>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-sans max-w-2xl">
            Rooted in the historic scholarly legacy of Bahawalpur and developed with purpose-built modern architecture, UCP Bahawalpur provides world-class educational spaces designed to inspire academic discovery.
          </p>
        </div>

        {/* Dual-Column Architectural Showcase:
            - Left Column: Primary Wide Architectural Visual (IMAGE 12) + Academic Infrastructure
            - Right Column: Compact, full-view Campus Grounds Visual (IMAGE 07) + Highlights
        */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column (lg:col-span-7): Featured First — Wide Architectural Exterior (IMAGE 12) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            
            {/* IMAGE 12: Close Architectural Exterior Photograph (Natural 16:9 Landscape) */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-[#FAF8F5] shadow-xs w-full aspect-[16/9]">
              <img
                src="/assets/campus/12_about_architecture_exterior.jpg"
                alt="UCP Bahawalpur Architectural Exterior and Modern Campus Facade"
                loading="eager"
                className="w-full h-full object-cover object-center img-hover-scale"
              />

              {/* Gentle bottom scrim for caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#092242]/75 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-4 right-4 text-white pointer-events-none">
                <span className="text-[10px] font-sans uppercase tracking-[0.18em] text-rose-300 font-semibold block mb-0.5">
                  Architectural Detail · UCP Bahawalpur
                </span>
                <h3 className="font-serif text-base sm:text-lg font-semibold leading-tight">
                  Modern Institutional Facade & Academic Wing
                </h3>
              </div>
            </div>

            {/* Contemporary Learning Standards Narrative Block */}
            <div className="bg-[#FDFBF7] border border-slate-200/90 rounded-2xl p-6 sm:p-7 space-y-4 shadow-xs">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#a30f16]">
                  <Building2 size={16} />
                  <span>Purpose-Built Academic Infrastructure</span>
                </div>
                <span className="text-[11px] font-medium text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                  Bahawalpur Region
                </span>
              </div>

              <h4 
                className="font-serif text-xl sm:text-2xl font-semibold text-[#092242]"
                style={{ fontFamily: "'Cormorant Garamond', 'Libre Baskerville', Georgia, serif" }}
              >
                World-Class Facilities for Tomorrow’s Leaders
              </h4>

              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                Spread across an expansive footprint, the campus integrates digital lecture theatres, advanced computing labs, high-speed fiber connectivity, and dedicated faculty research lounges. Every space is engineered to facilitate rigorous inquiry and collaborative problem solving.
              </p>

              <div className="pt-2 flex items-center gap-4 flex-wrap border-t border-slate-200/70">
                {onOpenLegacyPage && (
                  <button
                    onClick={onOpenLegacyPage}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#092242] hover:text-[#a30f16] transition-colors cursor-pointer group/btn"
                  >
                    <span>Explore Our Legacy</span>
                    <ArrowRight size={13} className="transition-transform group-hover/btn:translate-x-1 text-[#a30f16]" />
                  </button>
                )}
                {onOpenApply && (
                  <button
                    onClick={onOpenApply}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#a30f16] hover:text-[#092242] transition-colors cursor-pointer group/btn ml-auto"
                  >
                    <span>Apply for Admissions</span>
                    <ArrowRight size={13} className="transition-transform group-hover/btn:translate-x-1" />
                  </button>
                )}
              </div>
            </div>

          </div>

          {/* Right Column (lg:col-span-5):
              IMAGE 07 (Campus Building with Lawn) placed here (NOT at start),
              in a small, compact, exact-ratio frame showing 100% of the image with full clarity!
          */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* Campus Grounds & Architecture Showcase Card */}
            <div className="bg-[#FAF8F5] border border-slate-200/90 rounded-2xl p-5 sm:p-6 shadow-xs">
              <div className="flex items-center gap-2 mb-4">
                <Trees size={16} className="text-[#a30f16]" />
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#092242]">
                  Central Lawns & Academic Complex
                </span>
              </div>

              {/* Side-by-side presentation: Compact Full-View Image + Key Campus Specs */}
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                
                {/* IMAGE 07: Small frame, exact 897/1600 ratio, showing full size image with NO cropping */}
                <div 
                  className="group relative overflow-hidden rounded-xl border border-slate-200/90 bg-white shadow-xs shrink-0 transition-transform duration-300 hover:shadow-md"
                  style={{
                    width: '185px',
                    aspectRatio: '897 / 1600',
                  }}
                >
                  <img
                    src="/assets/campus/7_about_campus_building_lawn.jpg"
                    alt="University of Central Punjab Bahawalpur Campus Building with Central Lawns"
                    loading="eager"
                    className="w-full h-full object-contain block img-hover-scale"
                    style={{
                      aspectRatio: '897 / 1600',
                    }}
                  />

                  {/* Discreet bottom caption */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#092242]/85 to-transparent p-2 text-center pointer-events-none">
                    <span className="text-[10px] font-sans font-medium text-white tracking-wider block">
                      Full Campus View
                    </span>
                  </div>
                </div>

                {/* Campus Specs list right alongside the compact image */}
                <div className="flex-1 space-y-3 text-xs text-slate-700">
                  <p className="text-slate-600 leading-relaxed font-sans">
                    The Bahawalpur campus grounds combine expansive green lawns with modern academic wings, providing peaceful student gathering areas and outdoor study environments.
                  </p>

                  <div className="space-y-2 pt-1 border-t border-slate-200/70">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-emerald-600 mt-0.5 shrink-0" />
                      <span><strong>Purpose-Built:</strong> Comprehensive educational facility.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-emerald-600 mt-0.5 shrink-0" />
                      <span><strong>Lush Green Grounds:</strong> Central courtyards & landscaped lawns.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-emerald-600 mt-0.5 shrink-0" />
                      <span><strong>State-of-the-Art:</strong> Multimedia classrooms and labs.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="text-emerald-600 mt-0.5 shrink-0" />
                      <span><strong>Safe & Accessible:</strong> 24/7 security and pedestrian walkways.</span>
                    </div>
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
