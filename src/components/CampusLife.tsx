import React, { useState } from 'react';
import { 
  Users, Sparkles, Trophy, ArrowRight, Compass, Calendar, 
  MapPin, Heart, Shield, Music, BookOpen, Flag
} from 'lucide-react';
import { STUDENT_CLUBS } from '../data/ucpData';

interface CampusLifeProps {
  onOpenCampusLifePage?: () => void;
}

export const CampusLife: React.FC<CampusLifeProps> = ({ onOpenCampusLifePage }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'societies' | 'spaces'>('all');

  return (
    <section 
      id="campus-section" 
      className="py-24 sm:py-28 lg:py-32 bg-white border-b border-slate-200/80 overflow-hidden"
      aria-labelledby="campus-life-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Header with Mask Reveal */}
        <header className="max-w-3xl mb-14 sm:mb-16" data-reveal="mask">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#a30f16]">
              CAMPUS LIFE · STUDENT EXPERIENCE
            </span>
            <span className="h-px w-8 bg-[#a30f16]/40" aria-hidden="true" />
          </div>

          <div className="mask-reveal-wrap">
            <h2
              id="campus-life-heading"
              className="mask-reveal-child text-3xl sm:text-4xl lg:text-[46px] font-serif font-semibold text-[#092242] tracking-tight leading-[1.18]"
              style={{ fontFamily: "'Cormorant Garamond', 'Libre Baskerville', Georgia, serif" }}
            >
              Life Beyond the Classroom
            </h2>
          </div>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-sans max-w-2xl">
            From lively student gathering spaces in open courtyards to academic festivals, dynamic student societies, and vibrant campus events, life at UCP Bahawalpur fosters lifelong community.
          </p>
        </header>

        {/* 2. Asymmetric Editorial Photography Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-14 lg:mb-16">
          
          {/* IMAGE 06: Decorated Corridor Photograph (Strong Vertical Editorial Photograph) */}
          {/* "Use the decorated corridor photograph as: CAMPUS LIFE SECTION. This should represent: 'Student Experience' or 'Life Beyond the Classroom'. Use it as a strong vertical editorial photograph. A subtle scroll/parallax effect is appropriate." */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-[#FAF8F5] shadow-xs flex-1 min-h-[460px] lg:min-h-[520px]">
              <img
                src="/assets/campus/6_campus_life_decorated_corridor.jpg"
                alt="Student Experience and Life Beyond the Classroom - Decorated Corridor at UCP Bahawalpur"
                loading="eager"
                className="w-full h-full object-cover object-center img-hover-scale"
              />

              {/* Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#092242]/85 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-rose-300 font-semibold block mb-1">
                  Student Experience
                </span>
                <h3 
                  className="font-serif text-xl sm:text-2xl font-semibold leading-tight"
                  style={{ fontFamily: "'Cormorant Garamond', 'Libre Baskerville', Georgia, serif" }}
                >
                  Life Beyond the Classroom
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-sans">
                  Themed academic corridors, student exhibition displays, and seasonal campus celebrations.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: IMAGE 08 & Student Community Details (Asymmetric Layout) */}
          {/* "Use the courtyard photograph as: CAMPUS LIFE / STUDENT SPACES. Use it to communicate: Campus environment, Student gathering spaces, Open spaces, Daily campus experience. Use an asymmetric editorial layout rather than a generic 3-column card." */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* IMAGE 08: Courtyard Photograph (Open Gathering Spaces) */}
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-[#FAF8F5] shadow-xs flex-1 min-h-[290px]">
              <img
                src="/assets/campus/8_campus_life_courtyard.jpg"
                alt="UCP Bahawalpur Courtyard - Student Gathering Spaces and Open Campus Environment"
                loading="eager"
                className="w-full h-full object-cover object-center img-hover-scale"
              />

              {/* Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#092242]/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                <span className="text-[11px] font-sans uppercase tracking-[0.18em] text-amber-200 font-semibold block mb-0.5">
                  Student Spaces
                </span>
                <h4 
                  className="font-serif text-lg sm:text-xl font-semibold leading-snug"
                  style={{ fontFamily: "'Cormorant Garamond', 'Libre Baskerville', Georgia, serif" }}
                >
                  Central Courtyards & Open Gathering Grounds
                </h4>
                <p className="text-xs text-slate-200 font-sans mt-0.5 max-w-lg">
                  Lush open spaces where students gather between lectures to discuss ideas, relax, and connect.
                </p>
              </div>
            </div>

            {/* Asymmetric Campus Narrative Card */}
            <div className="bg-[#FAF8F5] border border-slate-200/90 rounded-2xl p-6 sm:p-8 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200/70 pb-3">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#a30f16]">
                  Daily Campus Experience
                </span>
                <span className="text-xs text-slate-500 font-mono">
                  65+ Registered Student Clubs & Societies
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="space-y-1">
                  <h5 className="font-serif text-base font-semibold text-[#092242]">
                    Culture, Arts & Debates
                  </h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    National championship-winning debating squads, drama festivals, and literary circles.
                  </p>
                </div>
                <div className="space-y-1">
                  <h5 className="font-serif text-base font-semibold text-[#092242]">
                    Sports & Recreation
                  </h5>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Badminton, table tennis, cricket, futsal, and annual inter-faculty athletics championships.
                  </p>
                </div>
              </div>

              {onOpenCampusLifePage && (
                <div className="pt-2">
                  <button
                    onClick={onOpenCampusLifePage}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#092242] hover:text-[#a30f16] transition-colors cursor-pointer group/btn"
                  >
                    <span>Explore Campus Life Gallery</span>
                    <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1 text-[#a30f16]" />
                  </button>
                </div>
              )}
            </div>

          </div>

        </div>

        {/* 3. IMAGE 03: Night-Lit Architectural Photograph ("Campus After Hours") */}
        {/* "Use the night-lit architectural photograph as: HOMEPAGE / CAMPUS LIFE FEATURE IMAGE. This is a dramatic architectural image. Use it as a large editorial image. Potential placement: 'Campus After Hours' or 'Experience UCP Bahawalpur'. It can also be used as a secondary hero/feature visual. Give this image subtle scroll parallax." */}
        <div className="mt-14 lg:mt-18">
          <div className="group relative w-full overflow-hidden rounded-2xl border border-slate-800 bg-[#07192f] shadow-lg">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
              <img
                src="/assets/campus/3_campus_after_hours_night.jpg"
                alt="Campus After Hours - Dramatic Night-Lit Architectural View of UCP Bahawalpur"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover object-center img-hover-scale"
              />

              {/* Scrim for dramatic evening atmosphere */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07192f]/90 via-[#07192f]/20 to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-white pointer-events-none">
                <div className="max-w-xl">
                  <span className="text-[11px] font-sans uppercase tracking-[0.24em] text-amber-300 font-bold block mb-1">
                    Campus After Hours
                  </span>
                  <h3 
                    className="font-serif text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-white drop-shadow-sm"
                    style={{ fontFamily: "'Cormorant Garamond', 'Libre Baskerville', Georgia, serif" }}
                  >
                    Experience UCP Bahawalpur
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 mt-2 font-sans leading-relaxed">
                    As dusk settles over Southern Punjab, the campus architecture is illuminated, welcoming evening seminars, symposiums, and collaborative student project labs.
                  </p>
                </div>

                <div className="pointer-events-auto">
                  {onOpenCampusLifePage && (
                    <button
                      onClick={onOpenCampusLifePage}
                      className="px-5 py-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-xl text-xs font-semibold uppercase tracking-[0.14em] backdrop-blur-md transition-all cursor-pointer shadow-sm"
                    >
                      View Campus Life
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
