import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowLeft, ArrowRight, X, ChevronLeft, ChevronRight, 
  Sparkles, Camera
} from 'lucide-react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FadingStackLightbox } from './FadingStackLightbox';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Authentic Campus & Student Imagery from Project Assets
const heroCampusImg = '/assets/campus/3_campus_after_hours_night.jpg';
import campusBuildingImg from '../assets/images/ucp_bwp_building_5.jpg';
import computingLabImg from '../assets/images/academic_computing_lab_1790317681008.jpg';
import businessSeminarImg from '../assets/images/academic_business_seminar_1790317693556.jpg';
import scienceLabImg from '../assets/images/academic_science_lab_1790317707417.jpg';
import libraryImg from '../assets/images/academic_humanities_library_1790317720335.jpg';
import studentPortraitImg from '../assets/images/bs_psychology_user.jpg';
import techCyberImg from '../assets/images/program_cyber_security.jpg';
import businessMeetingImg from '../assets/images/program_bba.png';
import leadershipForumImg from '../assets/images/program_adp_business_administration.jpg';
import literarySocietyImg from '../assets/images/program_bs_english.jpg';
import roboticsExpoImg from '../assets/images/program_adp_ai.jpg';
import biotechResearchImg from '../assets/images/program_bs_biotechnology.jpg';
import chemistryExpoImg from '../assets/images/program_bs_chemistry.png';

interface CampusLifePageProps {
  onBackToHome: () => void;
  onOpenApply: () => void;
  onOpenProgrammesPage: () => void;
  onOpenFee: () => void;
}

type CategoryType = 'ALL' | 'EVENTS' | 'CULTURE' | 'SPORTS' | 'SOCIETIES' | 'ACADEMICS' | 'COMMUNITY';

interface GalleryItem {
  id: string;
  number: string;
  title: string;
  category: CategoryType;
  categoryLabel: string;
  caption: string;
  image: string;
  aspect: string;
  speed: number;
}

export const CampusLifePage: React.FC<CampusLifePageProps> = ({
  onBackToHome,
  onOpenApply,
  onOpenProgrammesPage,
}) => {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('ALL');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);
  const [fadingStackOpen, setFadingStackOpen] = useState<boolean>(false);
  const [fadingStackImages, setFadingStackImages] = useState<string[]>([]);
  const [fadingStackCategory, setFadingStackCategory] = useState<string>('Campus Life');
  const [autoCycleIndex, setAutoCycleIndex] = useState<number>(0);

  // Auto-cycle visible card image every 4 seconds without opening
  useEffect(() => {
    const timer = setInterval(() => {
      setAutoCycleIndex((prev) => prev + 1);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const openLightbox = (categoryImages: string[], categoryTitle: string = 'Campus Life') => {
    setFadingStackImages(categoryImages);
    setFadingStackCategory(categoryTitle);
    setFadingStackOpen(true);
  };

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // DOM Refs for GSAP & Lenis
  const pageContainerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const heroImageRef = useRef<HTMLImageElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLElement>(null);
  const introHeadingRef = useRef<HTMLHeadingElement>(null);
  const introParaRef = useRef<HTMLParagraphElement>(null);
  const momentsRef = useRef<HTMLElement>(null);
  const momentsImageRef = useRef<HTMLImageElement>(null);
  const momentsTextRef = useRef<HTMLDivElement>(null);
  const horizontalSectionRef = useRef<HTMLElement>(null);
  const horizontalTrackRef = useRef<HTMLDivElement>(null);
  const finalCtaRef = useRef<HTMLElement>(null);
  const finalCtaImageRef = useRef<HTMLImageElement>(null);

  // Gallery Data
  const galleryItems: GalleryItem[] = [
    {
      id: 'g-1',
      number: '01',
      title: 'Youth Leadership & Policy Summit',
      category: 'EVENTS',
      categoryLabel: 'Campus Events',
      caption: 'Over 600 delegates convening for debates and keynote dialogues with industry leaders in the main auditorium.',
      image: businessSeminarImg,
      aspect: 'aspect-[16/10]',
      speed: 0.85
    },
    {
      id: 'g-2',
      number: '02',
      title: 'Bahaar Cultural Festival & Mushaira',
      category: 'CULTURE',
      categoryLabel: 'Culture',
      caption: 'Traditional performing arts, calligraphy, and poetry recitals celebrating regional heritage and artistic voice.',
      image: literarySocietyImg,
      aspect: 'aspect-[4/5]',
      speed: 1.05
    },
    {
      id: 'g-3',
      number: '03',
      title: 'Robotics & Autonomous Systems Lab',
      category: 'ACADEMICS',
      categoryLabel: 'Academics',
      caption: 'Hands-on electronic innovation where scholars synthesize robotics code and embedded circuits.',
      image: roboticsExpoImg,
      aspect: 'aspect-[1/1]',
      speed: 0.75
    },
    {
      id: 'g-4',
      number: '04',
      title: 'Student Societies Executive Council',
      category: 'SOCIETIES',
      categoryLabel: 'Societies',
      caption: 'Student-led councils spearheading debates, social impact initiatives, and collegiate symposia.',
      image: leadershipForumImg,
      aspect: 'aspect-[4/3]',
      speed: 0.95
    },
    {
      id: 'g-5',
      number: '05',
      title: 'Inter-Varsity Athletic Championships',
      category: 'SPORTS',
      categoryLabel: 'Sports',
      caption: 'Competitive discipline, teamwork, and championship gold in futsal, cricket, and badminton.',
      image: techCyberImg,
      aspect: 'aspect-[16/9]',
      speed: 1.08
    },
    {
      id: 'g-6',
      number: '06',
      title: 'Collegiate Mentorship & Study Halls',
      category: 'COMMUNITY',
      categoryLabel: 'Community',
      caption: 'Lifelong friendships forged across peer study circles in the central atrium.',
      image: studentPortraitImg,
      aspect: 'aspect-[3/4]',
      speed: 0.80
    },
    {
      id: 'g-7',
      number: '07',
      title: 'Molecular Discovery & Scientific Inquiry',
      category: 'ACADEMICS',
      categoryLabel: 'Academics',
      caption: 'Undergraduates engaged in laboratory inquiry with senior scientific faculty.',
      image: scienceLabImg,
      aspect: 'aspect-[16/10]',
      speed: 1.02
    },
    {
      id: 'g-8',
      number: '08',
      title: 'Quiet Study & Humanities Sanctuary',
      category: 'ACADEMICS',
      categoryLabel: 'Academics',
      caption: 'Natural afternoon light filling the library reading pavilion between lectures.',
      image: libraryImg,
      aspect: 'aspect-[4/3]',
      speed: 0.88
    },
    {
      id: 'g-9',
      number: '09',
      title: 'Community Outreach & Regional Welfare',
      category: 'COMMUNITY',
      categoryLabel: 'Community',
      caption: 'Student volunteers conducting medical camps and literacy workshops in South Punjab.',
      image: businessMeetingImg,
      aspect: 'aspect-[16/10]',
      speed: 0.92
    },
    {
      id: 'g-10',
      number: '10',
      title: 'Biotech Synthesis & Research Chambers',
      category: 'ACADEMICS',
      categoryLabel: 'Academics',
      caption: 'Investigating cellular biology and agricultural genetics in university research suites.',
      image: biotechResearchImg,
      aspect: 'aspect-[1/1]',
      speed: 1.05
    },
    {
      id: 'g-11',
      number: '11',
      title: 'Central Courtyard & Student Gathering Grounds',
      category: 'COMMUNITY',
      categoryLabel: 'Open Spaces',
      caption: 'Lush open courtyard lawns where students gather between lectures to discuss ideas and relax.',
      image: '/assets/campus/8_campus_life_courtyard.jpg',
      aspect: 'aspect-[16/9]',
      speed: 0.78
    },
    {
      id: 'g-12',
      number: '12',
      title: 'Analytical Chemistry & Material Testing',
      category: 'ACADEMICS',
      categoryLabel: 'Academics',
      caption: 'Rigorous empirical observation and analysis in specialized departmental laboratories.',
      image: chemistryExpoImg,
      aspect: 'aspect-[4/3]',
      speed: 0.96
    }
  ];

  // Filter gallery
  const filteredGallery = activeCategory === 'ALL'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  // 1. Lenis Smooth Scroll + GSAP ScrollTrigger Integration
  useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let lenis: Lenis | null = null;
    let tickerHandler: ((time: number) => void) | null = null;

    if (!prefersReducedMotion) {
      lenis = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        touchMultiplier: 1.8,
        infinite: false,
      });

      // Synchronize Lenis with GSAP ScrollTrigger
      lenis.on('scroll', ScrollTrigger.update);

      tickerHandler = (time: number) => {
        lenis?.raf(time * 1000);
      };

      gsap.ticker.add(tickerHandler);
      gsap.ticker.lagSmoothing(0);
    }

    const ctx = gsap.context(() => {
      // -------------------------------------------------------------
      // B. Hero Parallax: Image scale & vertical position scrub
      // -------------------------------------------------------------
      if (heroRef.current && heroImageRef.current) {
        gsap.fromTo(
          heroImageRef.current,
          { scale: 1.06, yPercent: 0 },
          {
            scale: 1.0,
            yPercent: 18,
            ease: 'none',
            scrollTrigger: {
              trigger: heroRef.current,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            }
          }
        );
      }

      // -------------------------------------------------------------
      // C. Hero Text Transformation: Moves upward & fades with scroll
      // -------------------------------------------------------------
      if (heroRef.current && heroContentRef.current) {
        gsap.to(heroContentRef.current, {
          yPercent: -22,
          opacity: 0.15,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: '65% top',
            scrub: true,
          }
        });
      }

      // -------------------------------------------------------------
      // D. Introduction Section: Staggered upward reveals
      // -------------------------------------------------------------
      if (introRef.current && introHeadingRef.current && introParaRef.current) {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: introRef.current,
            start: 'top 80%',
            end: 'top 35%',
            scrub: 0.6,
          }
        });

        tl.fromTo(
          introHeadingRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out', duration: 1 }
        ).fromTo(
          introParaRef.current,
          { y: 35, opacity: 0 },
          { y: 0, opacity: 1, ease: 'power2.out', duration: 1 },
          '-=0.5'
        );
      }

      // -------------------------------------------------------------
      // E. "Moments That Matter": Image scale 1.08 -> 1 & text scrub
      // -------------------------------------------------------------
      if (momentsRef.current && momentsImageRef.current && momentsTextRef.current) {
        gsap.fromTo(
          momentsImageRef.current,
          { scale: 1.08, yPercent: -5 },
          {
            scale: 1.0,
            yPercent: 5,
            ease: 'none',
            scrollTrigger: {
              trigger: momentsRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            }
          }
        );

        gsap.fromTo(
          momentsTextRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: momentsRef.current,
              start: 'top 70%',
              end: 'top 35%',
              scrub: 0.5,
            }
          }
        );
      }

      // -------------------------------------------------------------
      // G. Signature Horizontal Scroll Photography Section
      // -------------------------------------------------------------
      if (horizontalSectionRef.current && horizontalTrackRef.current) {
        const track = horizontalTrackRef.current;
        const totalScroll = track.scrollWidth - window.innerWidth + 80;

        if (totalScroll > 0 && window.innerWidth >= 768) {
          gsap.to(track, {
            x: -totalScroll,
            ease: 'none',
            scrollTrigger: {
              trigger: horizontalSectionRef.current,
              pin: true,
              scrub: 1,
              start: 'top top',
              end: () => `+=${totalScroll + 200}`,
              invalidateOnRefresh: true,
            }
          });
        }
      }

      // -------------------------------------------------------------
      // 10. Final Cinematic Closing Moment: Scale 1.08 -> 1.00
      // -------------------------------------------------------------
      if (finalCtaRef.current && finalCtaImageRef.current) {
        gsap.fromTo(
          finalCtaImageRef.current,
          { scale: 1.08 },
          {
            scale: 1.00,
            ease: 'none',
            scrollTrigger: {
              trigger: finalCtaRef.current,
              start: 'top bottom',
              end: 'bottom bottom',
              scrub: true,
            }
          }
        );
      }

      // -------------------------------------------------------------
      // Parallax on Editorial Photo Composition Images
      // -------------------------------------------------------------
      const parallaxImages = document.querySelectorAll<HTMLElement>('.editorial-parallax-img');
      parallaxImages.forEach((imgEl) => {
        const speedAttr = imgEl.getAttribute('data-speed');
        const speed = speedAttr ? parseFloat(speedAttr) : 1;
        const deltaY = (speed - 1) * 70;

        gsap.fromTo(
          imgEl,
          { y: -deltaY },
          {
            y: deltaY,
            ease: 'none',
            scrollTrigger: {
              trigger: imgEl.parentElement || imgEl,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            }
          }
        );
      });
    }, pageContainerRef);

    // Refresh ScrollTrigger once everything is mounted
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      ctx.revert();
      if (lenis && tickerHandler) {
        gsap.ticker.remove(tickerHandler);
        lenis.destroy();
      }
    };
  }, [activeCategory]);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') setActiveLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNextLightbox();
      if (e.key === 'ArrowLeft') handlePrevLightbox();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, filteredGallery.length]);

  const handleNextLightbox = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((activeLightboxIndex + 1) % filteredGallery.length);
  };

  const handlePrevLightbox = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((activeLightboxIndex - 1 + filteredGallery.length) % filteredGallery.length);
  };

  // Touch handlers for mobile swipe in lightbox
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) handleNextLightbox();
    if (distance < -50) handlePrevLightbox();
    setTouchStart(null);
    setTouchEnd(null);
  };

  const scrollToIntroduction = () => {
    introRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div 
      ref={pageContainerRef} 
      className="min-h-screen bg-[#FBFBFD] text-slate-900 selection:bg-[#A51C30] selection:text-white relative overflow-x-clip"
    >
      
      {/* 1. Context Top Bar (Quiet Institutional Nav) */}
      <nav 
        aria-label="Campus Life Context" 
        className="bg-[#0A1931] border-b border-slate-800/80 py-3.5 px-4 sm:px-6 lg:px-8 text-white select-none z-30 relative"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="group inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors focus:outline-none"
          >
            <ArrowLeft size={15} className="transition-transform group-hover:-translate-x-1 text-amber-400" />
            <span>Return to Main Portal</span>
          </button>

          <div className="flex items-center gap-4 text-xs">
            <span className="hidden sm:inline text-slate-400 font-mono text-[11px] tracking-wider">
              UCP BAHAWALPUR · CAMPUS CHRONICLE
            </span>
            <button
              onClick={onOpenProgrammesPage}
              className="text-amber-300 hover:text-amber-200 font-semibold underline underline-offset-4 decoration-amber-400/40"
            >
              Academic Programmes →
            </button>
          </div>
        </div>
      </nav>

      {/* 2. COMPLETELY REDESIGNED EDITORIAL HERO */}
      <header 
        ref={heroRef}
        className="relative h-screen w-full flex flex-col justify-between overflow-hidden bg-[#0A1931] select-none"
      >
        {/* Full Viewport Authentic Campus Photograph with Scroll Parallax */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            ref={heroImageRef}
            src={heroCampusImg}
            alt="University of Central Punjab Bahawalpur Campus"
            className="w-full h-[120%] object-cover object-center filter brightness-[0.72] contrast-[1.06]"
          />
          {/* Subtle Editorial Vignette & Navy Atmosphere */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931] via-transparent to-[#0A1931]/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1931]/80 via-transparent to-transparent" />
        </div>

        {/* Upper-Left Small Editorial Label: CAMPUS LIFE / 01 */}
        <div className="relative z-10 p-6 sm:p-10 lg:p-14">
          <div className="inline-flex items-center gap-2.5 font-mono text-xs tracking-[0.28em] text-white/90 uppercase font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-[#A51C30]" />
            <span>CAMPUS LIFE / 01</span>
          </div>
        </div>

        {/* Lower-Left Refined Heading & Text (NOT Centered, Compact, Editorial Serif) */}
        <div 
          ref={heroContentRef} 
          className="relative z-10 max-w-2xl p-6 sm:p-10 lg:p-14 text-white"
        >
          {/* Main Heading: “Where University Becomes Experience” */}
          <h1 
            className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-[1.08] mb-4"
            style={{ fontFamily: "'Cinzel', 'Playfair Display', Georgia, serif" }}
          >
            Where University<br />
            Becomes Experience
          </h1>

          {/* Under it: Small Supporting Paragraph */}
          <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed max-w-lg mb-8 tracking-wide">
            Discover the people, moments and experiences that shape life at UCP Bahawalpur.
          </p>

          {/* Bottom-Left: SCROLL TO EXPLORE ↓ */}
          <div>
            <button
              onClick={scrollToIntroduction}
              className="inline-flex items-center gap-2 text-xs font-mono tracking-[0.25em] uppercase text-white/80 hover:text-amber-300 transition-colors focus:outline-none group"
            >
              <span>SCROLL TO EXPLORE</span>
              <span className="transition-transform group-hover:translate-y-1 text-amber-400">↓</span>
            </button>
          </div>
        </div>
      </header>

      {/* 3. CAMPUS LIFE INTRODUCTION (Generous Whitespace & Staggered Scroll Entrance) */}
      <section 
        ref={introRef}
        className="py-28 sm:py-40 px-6 sm:px-12 lg:px-16 max-w-5xl mx-auto select-none"
      >
        <div className="border-l-2 border-[#A51C30] pl-6 sm:pl-10 space-y-4">
          {/* Small Label: THE UCP EXPERIENCE */}
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#A51C30] font-semibold block">
            THE UCP EXPERIENCE
          </span>

          {/* Heading: “More Than a Campus.” */}
          <h2 
            ref={introHeadingRef}
            className="text-3xl sm:text-5xl font-normal text-[#0A1931] tracking-tight"
            style={{ fontFamily: "'Cinzel', 'Playfair Display', Georgia, serif" }}
          >
            More Than a Campus.
          </h2>

          {/* Short Paragraph */}
          <p 
            ref={introParaRef}
            className="text-base sm:text-xl text-slate-600 font-light leading-relaxed max-w-2xl pt-2"
          >
            University life is shaped by the people you meet, the ideas you explore and the moments you remember long after the classroom.
          </p>
        </div>
      </section>

      {/* 4. EDITORIAL PHOTO COMPOSITION (Asymmetric with Multi-Speed Parallax) */}
      <section className="px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto pb-24 sm:pb-36 select-none">
        
        {/* Layout 1: Large image + Small image + Medium image with slight visual overlaps */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Large Image (Left Col 7) */}
          <div className="md:col-span-7 relative group cursor-pointer" onClick={() => setActiveLightboxIndex(0)}>
            <div className="overflow-hidden rounded-lg bg-slate-900 shadow-xl border border-slate-200/50">
              <img
                src={businessSeminarImg}
                alt="Youth Leadership Dialogue"
                data-speed="0.85"
                className="editorial-parallax-img w-full aspect-[16/10] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
            <div className="pt-3 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span className="tracking-wider text-slate-700 font-semibold">01 — Campus Events</span>
              <span>Auditorium Session</span>
            </div>
          </div>

          {/* Stacked Small & Medium Images (Right Col 5) */}
          <div className="md:col-span-5 space-y-10 lg:space-y-14 md:-ml-6 z-10">
            {/* Small Image */}
            <div className="relative group cursor-pointer max-w-xs md:ml-auto" onClick={() => setActiveLightboxIndex(1)}>
              <div className="overflow-hidden rounded-lg bg-slate-900 shadow-2xl border border-slate-200/60">
                <img
                  src={literarySocietyImg}
                  alt="Cultural Mushaira"
                  data-speed="1.08"
                  className="editorial-parallax-img w-full aspect-[4/5] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="pt-2.5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="tracking-wider text-slate-700 font-semibold">02 — Culture</span>
                <span>Annual Gala</span>
              </div>
            </div>

            {/* Medium Image */}
            <div className="relative group cursor-pointer" onClick={() => setActiveLightboxIndex(2)}>
              <div className="overflow-hidden rounded-lg bg-slate-900 shadow-xl border border-slate-200/50">
                <img
                  src={roboticsExpoImg}
                  alt="Robotics & AI Innovation"
                  data-speed="0.78"
                  className="editorial-parallax-img w-full aspect-[4/3] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="pt-2.5 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="tracking-wider text-slate-700 font-semibold">03 — Innovation</span>
                <span>Robotics Arena</span>
              </div>
            </div>
          </div>

        </div>

        {/* Layout 2: Inverted Asymmetric Composition with Generous Whitespace */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center pt-24 sm:pt-36">
          
          {/* Small Portrait Image (Col 4) */}
          <div className="md:col-span-4 relative group cursor-pointer" onClick={() => setActiveLightboxIndex(5)}>
            <div className="overflow-hidden rounded-lg bg-slate-900 shadow-xl border border-slate-200/50">
              <img
                src={studentPortraitImg}
                alt="Student Life"
                data-speed="1.05"
                className="editorial-parallax-img w-full aspect-[3/4] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
            <div className="pt-2.5 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span className="tracking-wider text-slate-700 font-semibold">04 — Student Life</span>
              <span>Central Library</span>
            </div>
          </div>

          {/* Medium Wide Image (Col 8) */}
          <div className="md:col-span-8 relative group cursor-pointer" onClick={() => setActiveLightboxIndex(4)}>
            <div className="overflow-hidden rounded-lg bg-slate-900 shadow-xl border border-slate-200/50">
              <img
                src={techCyberImg}
                alt="Sports & Athletic Tournament"
                data-speed="0.82"
                className="editorial-parallax-img w-full aspect-[16/9] object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
            <div className="pt-2.5 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span className="tracking-wider text-slate-700 font-semibold">05 — Sports</span>
              <span>Championship Finals</span>
            </div>
          </div>

        </div>

      </section>

      {/* 5. “MOMENTS THAT MATTER” (Scroll-linked scale 1.08 -> 1 and staggered text entry) */}
      <section 
        ref={momentsRef}
        className="py-24 sm:py-36 bg-[#0A1931] text-white relative overflow-hidden select-none"
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Col: Large Photograph with Scroll Scale Animation */}
            <div className="lg:col-span-7 overflow-hidden rounded-xl bg-slate-950 border border-slate-800 shadow-2xl">
              <div className="overflow-hidden aspect-[4/3] sm:aspect-[16/10]">
                <img
                  ref={momentsImageRef}
                  src="/assets/campus/6_campus_life_decorated_corridor.jpg"
                  alt="Student Experience and Decorated Corridors at UCP Bahawalpur"
                  className="w-full h-full object-cover filter brightness-[0.92] contrast-[1.05]"
                />
              </div>
            </div>

            {/* Right Col: Editorial Text */}
            <div 
              ref={momentsTextRef}
              className="lg:col-span-5 space-y-5"
            >
              <span className="font-mono text-xs uppercase tracking-[0.3em] text-amber-400 font-semibold block">
                MOMENTS THAT MATTER
              </span>

              <h3 
                className="text-2xl sm:text-4xl lg:text-5xl font-normal leading-tight text-white"
                style={{ fontFamily: "'Cinzel', 'Playfair Display', serif" }}
              >
                Every day brings something new.
              </h3>

              <div className="w-12 h-[2px] bg-[#A51C30]" />

              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed pt-2">
                From spontaneous dialogues in the sunlit brick courtyards to late-night software builds in the high-performance computing lab, university life at UCP Bahawalpur is continuous discovery.
              </p>

              <div className="pt-4">
                <button
                  onClick={onOpenProgrammesPage}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-amber-300 hover:text-white transition-colors"
                >
                  <span>Explore Academic Paths</span>
                  <span>→</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. SIGNATURE HORIZONTAL SCROLL MOMENT — “Life in Motion” */}
      <section 
        ref={horizontalSectionRef}
        className="relative bg-[#0A1931] text-white overflow-hidden py-16 md:py-0 md:h-screen flex flex-col justify-center select-none border-t border-slate-800"
      >
        {/* Section Heading: Life in Motion (Moderate Size, Elegant) */}
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 w-full mb-8 md:mb-12 flex items-center justify-between">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-slate-400 font-semibold block mb-1">
              CAMPUS CHRONOLOGY
            </span>
            <h2 
              className="text-2xl sm:text-4xl font-normal text-white tracking-tight"
              style={{ fontFamily: "'Cinzel', 'Playfair Display', Georgia, serif" }}
            >
              Life in Motion
            </h2>
          </div>

          <div className="hidden md:flex items-center gap-2 font-mono text-xs text-slate-400">
            <span>Scroll vertically to pan</span>
            <span className="text-amber-400">→</span>
          </div>
        </div>

        {/* Horizontal Track of 6 Varied Authentic Photographs */}
        <div 
          ref={horizontalTrackRef}
          className="flex gap-6 sm:gap-8 px-6 sm:px-10 lg:px-16 overflow-x-auto md:overflow-visible no-scrollbar will-change-transform items-center"
        >
          {[
            { 
              images: [computingLabImg, techCyberImg, roboticsExpoImg, libraryImg, scienceLabImg],
              title: 'High-Tech Computing Facility', 
              caption: 'Continuous Hackathons & Code Synthesis', 
              aspect: 'w-72 sm:w-96 aspect-[16/10]' 
            },
            { 
              images: [libraryImg, literarySocietyImg, studentPortraitImg, computingLabImg, campusBuildingImg],
              title: 'Grand Humanities Hall', 
              caption: 'Quiet Sanctuary for Deep Inquiry', 
              aspect: 'w-64 sm:w-80 aspect-[3/4]' 
            },
            { 
              images: [scienceLabImg, chemistryExpoImg, biotechResearchImg, computingLabImg, libraryImg],
              title: 'Faculty of Science Labs', 
              caption: 'Molecular Investigation & Analysis', 
              aspect: 'w-80 sm:w-[28rem] aspect-[16/9]' 
            },
            { 
              images: [campusBuildingImg, heroCampusImg, businessSeminarImg, libraryImg, computingLabImg],
              title: 'Bahawalpur Quadrangle', 
              caption: 'The Heart of Collegiate Life', 
              aspect: 'w-72 sm:w-96 aspect-[4/3]' 
            },
            { 
              images: [businessMeetingImg, leadershipForumImg, businessSeminarImg, campusBuildingImg, computingLabImg],
              title: 'Civic Outreach Forum', 
              caption: 'Community Literacy & Welfare Clinics', 
              aspect: 'w-64 sm:w-80 aspect-[1/1]' 
            },
            { 
              images: [biotechResearchImg, scienceLabImg, chemistryExpoImg, computingLabImg, libraryImg],
              title: 'Applied Biotechnology', 
              caption: 'Genetic Inquiry & Sustainable Agriculture', 
              aspect: 'w-80 sm:w-[26rem] aspect-[16/10]' 
            },
          ].map((item, idx) => {
            const currentImg = item.images[(autoCycleIndex + idx) % item.images.length];

            return (
              <div 
                key={idx}
                className={`shrink-0 ${item.aspect} rounded-lg overflow-hidden bg-slate-950 border border-slate-800/80 shadow-2xl relative group cursor-pointer hover:brightness-105`}
                onClick={() => {
                  openLightbox(item.images, `Life in Motion - ${item.title}`);
                }}
              >
                <img
                  key={currentImg}
                  src={currentImg}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-[1.04] animate-in fade-in"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931]/95 via-transparent to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="text-sm sm:text-base font-bold tracking-tight text-white drop-shadow-sm">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-300 font-light truncate drop-shadow">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. CAMPUS LIFE CATEGORIES & COMPACT FILTERED VIEW */}
      <section className="py-24 sm:py-36 px-6 sm:px-10 lg:px-16 max-w-7xl mx-auto select-none">
        
        {/* Minimal Category Navigation (EVENTS, CULTURE, SPORTS, SOCIETIES, ACADEMICS, COMMUNITY) */}
        <div className="flex items-center justify-between flex-wrap gap-4 pb-12 border-b border-slate-200">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-[#A51C30] font-semibold block mb-1">
              THE ARCHIVE
            </span>
            <h3 
              className="text-2xl sm:text-3xl font-normal text-[#0A1931]"
              style={{ fontFamily: "'Cinzel', 'Playfair Display', serif" }}
            >
              Categorical Views
            </h3>
          </div>

          <div className="flex items-center gap-4 sm:gap-6 flex-wrap font-mono text-xs font-semibold">
            {(['ALL', 'EVENTS', 'CULTURE', 'SPORTS', 'SOCIETIES', 'ACADEMICS', 'COMMUNITY'] as CategoryType[]).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`py-1.5 transition-colors relative uppercase tracking-wider ${
                  activeCategory === cat
                    ? 'text-[#0A1931] font-bold'
                    : 'text-slate-400 hover:text-slate-700'
                }`}
              >
                <span>{cat}</span>
                {activeCategory === cat && (
                  <span className="absolute bottom-0 inset-x-0 h-[2px] bg-[#A51C30] rounded-full animate-in fade-in" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Filtered Grid with Elegant Minimal Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          {filteredGallery.map((item, itemIdx) => {
            const categoryPool = galleryItems
              .filter((g) => g.category === item.category && g.id !== item.id)
              .map((g) => g.image);
            const allOtherPool = [
              computingLabImg,
              libraryImg,
              scienceLabImg,
              campusBuildingImg,
              businessMeetingImg,
              biotechResearchImg,
              businessSeminarImg,
              literarySocietyImg,
            ];
            const fiveImages = [
              item.image,
              ...categoryPool,
              ...allOtherPool,
            ].filter((v, i, a) => a.indexOf(v) === i).slice(0, 5);

            const currentDisplayImg = fiveImages[(autoCycleIndex + itemIdx) % fiveImages.length];

            return (
              <div
                key={item.id}
                onClick={() => {
                  openLightbox(fiveImages, item.categoryLabel || item.title);
                }}
                className="group cursor-pointer hover:brightness-105 transition-all duration-300 space-y-3"
              >
                <div className="overflow-hidden rounded-lg bg-slate-900 border border-slate-200/60 shadow-sm relative">
                  <img
                    key={currentDisplayImg}
                    src={currentDisplayImg}
                    alt={item.title}
                    loading="eager"
                    decoding="async"
                    className="w-full aspect-[4/3] object-cover transition-all duration-1000 ease-out group-hover:scale-[1.03] animate-in fade-in"
                  />
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#A51C30]" />
                    <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
                      {item.categoryLabel}
                    </span>
                  </div>
                  <h4 
                    className="text-base font-bold text-[#0A1931] group-hover:text-[#A51C30] transition-colors leading-snug"
                  >
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 font-light line-clamp-2 mt-1">
                    {item.caption}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* 8. FINAL SECTION — Exception Full-Width Authentic Campus Photograph (Scale 1.08 -> 1.00) */}
      <section 
        ref={finalCtaRef}
        className="relative h-[85vh] sm:h-[90vh] w-full flex items-center justify-center overflow-hidden bg-[#0A1931] text-white select-none"
      >
        {/* Full-width authentic image with subtle scroll scale */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img
            ref={finalCtaImageRef}
            src="/assets/campus/14_closing_dramatic_campus.jpg"
            alt="University of Central Punjab Bahawalpur"
            className="w-full h-full object-cover object-center filter brightness-[0.55] contrast-[1.08]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931] via-transparent to-[#0A1931]/60" />
        </div>

        {/* Minimal Overlay Text: “YOUR STORY STARTS HERE.” */}
        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto space-y-6">
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-amber-300 font-semibold block">
            ADMISSIONS & CAMPUS LIFE
          </span>

          <h2 
            className="text-3xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-tight"
            style={{ fontFamily: "'Cinzel', 'Playfair Display', Georgia, serif" }}
          >
            YOUR STORY<br />
            STARTS HERE.
          </h2>

          <div className="w-12 h-[2px] bg-[#A51C30] mx-auto" />

          <p className="font-mono text-xs tracking-[0.25em] text-slate-300 uppercase">
            UCP BAHAWALPUR
          </p>

          <div className="pt-4 flex items-center justify-center gap-4">
            <button
              onClick={onOpenApply}
              className="px-6 py-3 bg-[#A51C30] hover:bg-[#860c12] text-white font-mono text-xs uppercase tracking-widest rounded transition-all shadow-xl active:scale-95"
            >
              Apply Online
            </button>
            <button
              onClick={onBackToHome}
              className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-mono text-xs uppercase tracking-widest rounded transition-all border border-white/20 active:scale-95"
            >
              Explore Portal ↓
            </button>
          </div>
        </div>
      </section>

      {/* 9. FULLSCREEN LIGHTBOX / GALLERY EXPERIENCE */}
      {activeLightboxIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-[#0A1931]/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 select-none animate-in fade-in duration-200"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Top Bar: Caption & Close */}
          <div className="flex items-center justify-between text-white z-20">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-amber-300 tracking-wider">
                {activeLightboxIndex + 1} / {filteredGallery.length}
              </span>
              <span className="text-slate-500 text-xs hidden sm:inline">|</span>
              <span className="font-mono text-[11px] uppercase tracking-wider text-slate-300 hidden sm:inline">
                {filteredGallery[activeLightboxIndex].categoryLabel}
              </span>
            </div>

            <button
              onClick={() => setActiveLightboxIndex(null)}
              className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-colors focus:outline-none"
              aria-label="Close Lightbox"
            >
              <X size={24} />
            </button>
          </div>

          {/* Central Image & Controls */}
          <div className="relative flex-1 flex items-center justify-center py-4 overflow-hidden">
            <button
              onClick={handlePrevLightbox}
              className="absolute left-2 sm:left-4 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-all focus:outline-none border border-white/20 active:scale-95"
              aria-label="Previous Image"
            >
              <ChevronLeft size={22} />
            </button>

            <div className="max-w-5xl max-h-[72vh] w-full h-full flex items-center justify-center p-2">
              <img
                src={filteredGallery[activeLightboxIndex].image}
                alt={filteredGallery[activeLightboxIndex].title}
                className="max-h-full max-w-full object-contain rounded-lg shadow-2xl"
              />
            </div>

            <button
              onClick={handleNextLightbox}
              className="absolute right-2 sm:right-4 z-20 w-11 h-11 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center transition-all focus:outline-none border border-white/20 active:scale-95"
              aria-label="Next Image"
            >
              <ChevronRight size={22} />
            </button>
          </div>

          {/* Bottom Caption Bar */}
          <div className="max-w-3xl mx-auto text-center text-white z-20 px-4">
            <h4 
              className="text-base sm:text-xl font-normal tracking-tight text-white mb-1"
              style={{ fontFamily: "'Cinzel', Georgia, serif" }}
            >
              {filteredGallery[activeLightboxIndex].title}
            </h4>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              {filteredGallery[activeLightboxIndex].caption}
            </p>
            <div className="text-[10px] text-slate-400 font-mono mt-2">
              Use arrow keys or swipe horizontally to navigate
            </div>
          </div>
        </div>
      )}

      {/* Fading Stack Lightbox Modal */}
      <FadingStackLightbox
        isOpen={fadingStackOpen}
        onClose={() => setFadingStackOpen(false)}
        images={fadingStackImages}
        categoryName={fadingStackCategory}
      />

    </div>
  );
};
