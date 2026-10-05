import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  ChevronLeft, ChevronRight, ArrowRight,
  GraduationCap, Building2, Award, Sparkles 
} from 'lucide-react';
import { HERO_SLIDES } from '../data/ucpData';
import computingLabImg from '../assets/images/academic_computing_lab_1790317681008.jpg';
import ucpBwpBuilding5Local from '../assets/images/ucp_bwp_building_5.jpg';
import heroCampusHighlightImg from '../assets/images/hero_campus_highlight.jpg';
import ucpBuildingBlueprintImg from '../assets/images/ucp_building_blueprint.jpg';

interface HeroSliderProps {
  onOpenApply: () => void;
  onOpenFee: () => void;
  onScrollTo: (sectionId: string) => void;
  onSelectFaculty: (facultyId: string) => void;
  onOpenProgrammesPage?: () => void;
  onOpenLegacyPage?: () => void;
}

// 3.6 seconds per slide (reduced by 1 second from 4.6s for faster, dynamic transitions)
const SLIDE_DURATION = 3600;

export const HeroSlider: React.FC<HeroSliderProps> = ({
  onOpenApply,
  onOpenFee,
  onScrollTo,
  onSelectFaculty,
  onOpenProgrammesPage,
  onOpenLegacyPage,
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  const totalSlides = HERO_SLIDES.length;

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Auto-advance timer (transitions 1 second earlier than before)
  useEffect(() => {
    if (isHovered) return;

    const timer = window.setInterval(() => {
      nextSlide();
    }, SLIDE_DURATION);

    return () => clearInterval(timer);
  }, [isHovered, nextSlide]);

  // Keyboard navigation (ArrowLeft & ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartXRef.current || !touchEndXRef.current) return;
    const distance = touchStartXRef.current - touchEndXRef.current;
    if (distance > 50) {
      nextSlide();
    } else if (distance < -50) {
      prevSlide();
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  // Resolve slide image (handling local asset references)
  const getSlideImage = (slide: typeof HERO_SLIDES[0]) => {
    if (slide.id === 'bahawalpur-excellence') {
      return slide.image || '/assets/campus/13_hero_sunset_campus.jpg';
    }
    if (slide.id === 'campus-tomorrow') {
      return ucpBuildingBlueprintImg;
    }
    if (slide.id === 'discover-future') {
      return computingLabImg;
    }
    if (slide.id === 'next-generation' && !slide.image) {
      return ucpBwpBuilding5Local;
    }
    return slide.image;
  };

  const handleAction = (actionKey: string) => {
    if (actionKey === 'apply') onOpenApply();
    else if (actionKey === 'programs') {
      if (onOpenProgrammesPage) {
        onOpenProgrammesPage();
      } else {
        window.open('https://ucpcolleges.pgc.edu/campus-network/', '_blank', 'noopener,noreferrer');
      }
    }
    else if (actionKey === 'legacy') {
      if (onOpenLegacyPage) {
        onOpenLegacyPage();
      } else {
        onScrollTo('heritage-section');
      }
    }
    else if (actionKey === 'fee') {
      onOpenFee();
    }
    else if (actionKey === 'tour' || actionKey === 'campus-life') {
      onScrollTo('campus-section');
    }
    else if (actionKey === 'fmmc') {
      onSelectFaculty('fmmc');
    }
    else {
      onScrollTo(actionKey);
    }
  };

  return (
    <div 
      id="hero-slider-section" 
      className="relative w-full bg-[#07192f] overflow-hidden select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="University of Central Punjab Bahawalpur Campus Hero Showcase"
    >
      {/* =========================================================================
          1. FULL-VIEWPORT CINEMATIC BACKGROUND SLIDES (KEN BURNS EFFECT)
          ========================================================================= */}
      <div className="relative w-full h-[88vh] sm:h-[90vh] lg:h-[92vh] min-h-[580px] sm:min-h-[640px] max-h-[960px] overflow-hidden">
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          const imageSrc = getSlideImage(slide);

          return (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
              }`}
              aria-hidden={!isActive}
            >
              {/* Background Image Container with Cinematic Ken Burns Zoom & High Clarity */}
              <div className="absolute inset-0 overflow-hidden bg-[#07192f]">
                <img
                  src={imageSrc}
                  alt={slide.title}
                  loading="eager"
                  decoding="async"
                  fetchPriority={index === 0 ? "high" : "auto"}
                  referrerPolicy="no-referrer"
                  className={`w-full h-full object-cover object-center transform transition-transform ease-out will-change-transform ${
                    isActive 
                      ? 'scale-105 translate-x-0.5 duration-[7500ms]' 
                      : 'scale-100 duration-700'
                  }`}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (slide.id === 'bahawalpur-excellence') {
                      target.src = heroCampusHighlightImg;
                    } else if (slide.fallbackImage) {
                      target.src = slide.fallbackImage;
                    }
                  }}
                />

                {/* Premium Scrim Overlays: Clear presentation where photo detail shines, protected left side for typography */}
                {/* 1. Primary Left-to-Right Horizontal Vignette (fades to transparent so sunset architecture is vividly visible) */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#07192f]/90 via-[#07192f]/60 md:via-[#07192f]/25 to-transparent" />
                
                {/* 2. Vertical Depth Scrim (Bottom Anchor & Header Shadow) */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#07192f]/85 via-transparent to-black/20" />
              </div>

              {/* Slide Content: Elegant International University Typography & Layout */}
              <div className="relative z-20 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center pb-14 sm:pb-16">
                <div className="max-w-3xl text-left space-y-4 sm:space-y-5">
                  
                  {/* Clean Editorial Pre-Header */}
                  <div 
                    className={`inline-flex items-center text-white/90 text-xs sm:text-sm font-semibold tracking-[0.22em] uppercase drop-shadow-sm transition-all duration-700 ${
                      isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: isActive ? '100ms' : '0ms' }}
                  >
                    <span>{slide.preheader || 'UNIVERSITY OF CENTRAL PUNJAB'}</span>
                  </div>

                  {/* World-Class Editorial Serif Heading with Mask Reveal */}
                  <div className="overflow-hidden">
                    <h1 
                      className={`font-serif text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.14] drop-shadow-md text-balance max-w-2xl transition-transform duration-[950ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                        isActive ? 'translate-y-0' : 'translate-y-full'
                      }`}
                      style={{ transitionDelay: isActive ? '200ms' : '0ms' }}
                    >
                      {slide.title}
                    </h1>
                  </div>

                  {/* Clean, Modern Sans-Serif Body: Staggered supporting text */}
                  <p 
                    className={`text-base sm:text-lg text-slate-100/95 font-sans font-normal leading-relaxed max-w-xl drop-shadow transition-all duration-700 ease-out ${
                      isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: isActive ? '360ms' : '0ms' }}
                  >
                    {slide.subtitle}
                  </p>

                  {/* Professional Action Buttons: Subtle CTA reveal */}
                  <div 
                    className={`flex flex-wrap items-center gap-3.5 sm:gap-4 pt-2 transition-all duration-600 ease-out ${
                      isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: isActive ? '460ms' : '0ms' }}
                  >
                    {/* Primary Button */}
                    <button
                      id={`hero-cta-primary-${slide.id}`}
                      onClick={() => handleAction(slide.primaryCta.action)}
                      className="bg-[#a30f16] hover:bg-[#860c12] text-white px-6 py-3 sm:px-7 sm:py-3.5 rounded-xl font-bold text-sm tracking-wide transition-all shadow-xl hover:shadow-rose-950/60 flex items-center gap-2.5 transform hover:-translate-y-0.5 active:translate-y-0 active:scale-95 cursor-pointer border border-rose-500/30"
                    >
                      <span>{slide.primaryCta.label}</span>
                      <ArrowRight size={17} className="transition-transform group-hover:translate-x-0.5" />
                    </button>

                    {/* Secondary Button */}
                    {slide.secondaryCta && (
                      <button
                        id={`hero-cta-secondary-${slide.id}`}
                        onClick={() => handleAction(slide.secondaryCta!.action)}
                        className="bg-white/10 hover:bg-white/20 text-white border border-white/30 hover:border-white/70 px-5 py-3 sm:px-6 sm:py-3.5 rounded-xl font-semibold text-sm backdrop-blur-md transition-all active:scale-95 cursor-pointer shadow-lg"
                      >
                        {slide.secondaryCta.label}
                      </button>
                    )}
                  </div>

                </div>
              </div>
            </div>
          );
        })}

        {/* =========================================================================
            2. EDITORIAL PREV / NEXT LATERAL ARROWS (FROSTED GLASS)
            ========================================================================= */}
        <div className="flex absolute z-30 inset-y-0 left-2 sm:left-4 lg:left-8 items-center pointer-events-none">
          <button
            onClick={prevSlide}
            className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-950/40 hover:bg-[#a30f16] text-white border border-white/20 hover:border-transparent backdrop-blur-md flex items-center justify-center transition-all duration-200 shadow-xl hover:scale-105 active:scale-95 cursor-pointer group"
            aria-label="Previous Slide"
          >
            <ChevronLeft size={22} className="group-hover:-translate-x-0.5 transition-transform" />
          </button>
        </div>

        <div className="flex absolute z-30 inset-y-0 right-2 sm:right-4 lg:right-8 items-center pointer-events-none">
          <button
            onClick={nextSlide}
            className="pointer-events-auto w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-950/40 hover:bg-[#a30f16] text-white border border-white/20 hover:border-transparent backdrop-blur-md flex items-center justify-center transition-all duration-200 shadow-xl hover:scale-105 active:scale-95 cursor-pointer group"
            aria-label="Next Slide"
          >
            <ChevronRight size={22} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* =========================================================================
            3. SLIDE INDICATOR PILLS (Direct Navigation)
            ========================================================================= */}
        <div className="absolute z-30 bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
          {HERO_SLIDES.map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentSlide(dotIdx)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                dotIdx === currentSlide
                  ? 'w-8 h-2 bg-[#a30f16] shadow-lg ring-1 ring-white/50'
                  : 'w-2 h-2 bg-white/40 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${dotIdx + 1}`}
            />
          ))}
        </div>

      </div>

      {/* =========================================================================
          4. QUICK-ACTION INSTITUTIONAL BAR (Directly below Hero)
          ========================================================================= */}
      <div className="relative z-30 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-4 sm:p-5 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 text-slate-800">
          
          {/* Card 1: Academic Programmes */}
          <button 
            onClick={() => {
              if (onOpenProgrammesPage) {
                onOpenProgrammesPage();
              } else {
                window.open('https://ucpcolleges.pgc.edu/campus-network/', '_blank', 'noopener,noreferrer');
              }
            }}
            className="flex items-center text-left gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group border border-transparent hover:border-slate-200"
          >
            <div className="w-11 h-11 rounded-xl bg-blue-50 text-[#092242] flex items-center justify-center shrink-0 group-hover:bg-[#092242] group-hover:text-white transition-all shadow-sm">
              <GraduationCap size={22} />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#a30f16] transition-colors leading-snug">
                Academic Programmes
              </h4>
              <p className="text-xs text-slate-500 font-medium">25 Accredited Degrees →</p>
            </div>
          </button>

          {/* Card 2: Fee Structure */}
          <button 
            onClick={onOpenFee}
            className="flex items-center text-left gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group border border-transparent hover:border-slate-200"
          >
            <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center shrink-0 group-hover:bg-amber-700 group-hover:text-white transition-all shadow-sm">
              <Award size={22} />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#a30f16] transition-colors leading-snug">
                Fee Structure
              </h4>
              <p className="text-xs text-slate-500 font-medium">Official Fee Schedule ↗</p>
            </div>
          </button>

          {/* Card 3: Apply for Fall 2026 */}
          <button 
            onClick={onOpenApply}
            className="flex items-center text-left gap-3.5 p-3 rounded-xl hover:bg-rose-50/60 transition-colors cursor-pointer group border border-transparent hover:border-rose-100"
          >
            <div className="w-11 h-11 rounded-xl bg-rose-50 text-[#a30f16] flex items-center justify-center shrink-0 group-hover:bg-[#a30f16] group-hover:text-white transition-all shadow-sm">
              <Sparkles size={22} />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-[#a30f16] transition-colors leading-snug">
                Apply for Fall 2026
              </h4>
              <p className="text-xs text-rose-700 font-medium">Admissions Open Online</p>
            </div>
          </button>

          {/* Card 4: Campus Facilities & Heritage */}
          <button 
            onClick={() => onScrollTo('campus-section')}
            className="flex items-center text-left gap-3.5 p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group border border-transparent hover:border-slate-200"
          >
            <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-800 flex items-center justify-center shrink-0 group-hover:bg-emerald-700 group-hover:text-white transition-all shadow-sm">
              <Building2 size={22} />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-[#a30f16] transition-colors leading-snug">
                Campus Life & Labs
              </h4>
              <p className="text-xs text-slate-500 font-medium">Modern Smart Campus</p>
            </div>
          </button>

        </div>
      </div>

    </div>
  );
};
