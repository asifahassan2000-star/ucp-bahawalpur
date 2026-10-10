import React, { useState, useEffect, useRef, useCallback } from 'react';
import { 
  ChevronLeft, ChevronRight, ArrowRight
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
  onOpenCampusLifePage?: () => void;
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
  onOpenCampusLifePage,
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
    if (slide.image) {
      return slide.image;
    }
    if (slide.id === 'bahawalpur-excellence') {
      return '/assets/campus/13_hero_sunset_campus.jpg';
    }
    if (slide.id === 'campus-tomorrow') {
      return ucpBuildingBlueprintImg;
    }
    if (slide.id === 'discover-future') {
      return computingLabImg;
    }
    if (slide.id === 'next-generation') {
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
      if (onOpenCampusLifePage) {
        onOpenCampusLifePage();
      } else {
        onScrollTo('campus-section');
      }
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
              {/* Background Image Container with Cinematic Ken Burns Zoom (1 to 1.08 over 10s) & High Clarity */}
              <div className="absolute inset-0 overflow-hidden bg-slate-900">
                <img
                  src={imageSrc}
                  alt={slide.title}
                  loading={index === 0 ? "eager" : "lazy"}
                  decoding="async"
                  fetchPriority={index === 0 ? "high" : "low"}
                  referrerPolicy="no-referrer"
                  style={{
                    transform: isActive ? 'scale(1.08)' : 'scale(1)',
                    transition: isActive ? 'transform 10000ms cubic-bezier(0.25, 1, 0.5, 1)' : 'transform 700ms ease-out',
                  }}
                  className="w-full h-full object-cover object-center will-change-transform"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    if (slide.id === 'bahawalpur-excellence') {
                      target.src = heroCampusHighlightImg;
                    } else if (slide.fallbackImage) {
                      target.src = slide.fallbackImage;
                    }
                  }}
                />

                {/* Subtle, Luminous Non-Dark Scrim (Preserving Full Image Brilliance) */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
              </div>

              {/* Slide Content: Elegant International University Typography & Layout */}
              <div className="relative z-20 max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex flex-col justify-center pb-14 sm:pb-16">
                <div className="max-w-3xl text-left space-y-4 sm:space-y-5">
                  
                  {/* Clean Editorial Pre-Header */}
                  <div 
                    className={`inline-flex items-center text-[#FEF08A] text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase drop-shadow-sm transition-all duration-700 ${
                      isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: isActive ? '100ms' : '0ms' }}
                  >
                    <span>{slide.preheader || 'UNIVERSITY OF CENTRAL PUNJAB'}</span>
                  </div>

                  {/* World-Class Editorial Serif Heading with Clip-Path Reveal */}
                  <div className="overflow-hidden py-1">
                    <h1 
                      style={{
                        clipPath: isActive 
                          ? 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' 
                          : 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)',
                        transform: isActive ? 'translateY(0)' : 'translateY(36px)',
                        transition: 'clip-path 1100ms cubic-bezier(0.16, 1, 0.3, 1), transform 1100ms cubic-bezier(0.16, 1, 0.3, 1)',
                        transitionDelay: isActive ? '200ms' : '0ms',
                      }}
                      className="font-['Playfair_Display',serif] text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.14] drop-shadow-lg text-balance max-w-2xl"
                    >
                      {slide.title}
                    </h1>
                  </div>

                  {/* Clean, Modern Sans-Serif Body (Inter): Staggered supporting text */}
                  <p 
                    className={`text-base sm:text-lg text-slate-100 font-sans font-normal leading-relaxed max-w-xl drop-shadow transition-all duration-700 ease-out ${
                      isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: isActive ? '380ms' : '0ms' }}
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
          4. INSTITUTIONAL HIGHLIGHTS — JUST WORDS, NO BORDER, BELOW HERO SECTION
          ========================================================================= */}
      <section 
        aria-label="Why Choose UCP Bahawalpur - Institutional Highlights"
        className="w-full relative z-20 select-none px-4 sm:px-6 lg:px-8 pt-8 pb-10 sm:pt-10 sm:pb-12 bg-[#07192f]"
      >
        <div 
          className="w-full max-w-7xl mx-auto"
        >
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            
            {/* Punjab Group Legacy */}
            <div 
              onClick={() => onOpenLegacyPage ? onOpenLegacyPage() : onScrollTo('heritage-section')}
              className="group cursor-pointer flex flex-col text-left transition-colors duration-200"
            >
              <h3 className="text-white font-medium text-base sm:text-[17px] tracking-normal group-hover:text-amber-300 transition-colors">
                Punjab Group Legacy
              </h3>
              <p className="text-slate-300/80 text-xs sm:text-sm font-normal mt-1 leading-relaxed">
                40 Years of Educational Excellence
              </p>
            </div>

            {/* HEC Recognized Degrees */}
            <div 
              onClick={() => onOpenProgrammesPage ? onOpenProgrammesPage() : onScrollTo('faculties-section')}
              className="group cursor-pointer flex flex-col text-left transition-colors duration-200"
            >
              <h3 className="text-white font-medium text-base sm:text-[17px] tracking-normal group-hover:text-amber-300 transition-colors">
                HEC Recognized Degrees
              </h3>
              <p className="text-slate-300/80 text-xs sm:text-sm font-normal mt-1 leading-relaxed">
                25 Accredited Programs
              </p>
            </div>

            {/* Purpose-Built Campus */}
            <div 
              onClick={() => onScrollTo('campus-section')}
              className="group cursor-pointer flex flex-col text-left transition-colors duration-200"
            >
              <h3 className="text-white font-medium text-base sm:text-[17px] tracking-normal group-hover:text-amber-300 transition-colors">
                Purpose-Built Campus
              </h3>
              <p className="text-slate-300/80 text-xs sm:text-sm font-normal mt-1 leading-relaxed">
                Modern Labs & Smart Facilities
              </p>
            </div>

            {/* Career-Focused Education */}
            <div 
              onClick={() => onOpenProgrammesPage ? onOpenProgrammesPage() : onScrollTo('what-we-offer')}
              className="group cursor-pointer flex flex-col text-left transition-colors duration-200"
            >
              <h3 className="text-white font-medium text-base sm:text-[17px] tracking-normal group-hover:text-amber-300 transition-colors">
                Career-Focused Education
              </h3>
              <p className="text-slate-300/80 text-xs sm:text-sm font-normal mt-1 leading-relaxed">
                Industry Linkages & Scholarships
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
