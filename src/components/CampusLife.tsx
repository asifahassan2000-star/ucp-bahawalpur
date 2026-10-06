import React, { useEffect, useRef, useState } from 'react';
import { 
  ArrowRight, Users, Sparkles, Calendar, MapPin, 
  Compass, Award, BookOpen, Music, Flag
} from 'lucide-react';

// Authentic project assets from src/assets/images
import businessSeminarImg from '../assets/images/academic_business_seminar_1790317693556.jpg';
import computingLabImg from '../assets/images/academic_computing_lab_1790317681008.jpg';
import libraryImg from '../assets/images/academic_humanities_library_1790317720335.jpg';
import studentPortraitImg from '../assets/images/bs_psychology_user.jpg';
import bbaImg from '../assets/images/program_bba.png';
import cyberSecurityImg from '../assets/images/program_cyber_security.jpg';
import scienceLabImg from '../assets/images/academic_science_lab_1790317707417.jpg';

// Authentic campus assets from public/assets/campus
const corridorImg = '/assets/campus/6_campus_life_decorated_corridor.jpg';
const courtyardImg = '/assets/campus/8_campus_life_courtyard.jpg';
const nightCampusImg = '/assets/campus/3_campus_after_hours_night.jpg';
const lawnImg = '/assets/campus/7_about_campus_building_lawn.jpg';
const hallwayImg = '/assets/campus/10_campus_sunlit_hallway.jpg';
const redCarpetImg = '/assets/campus/4_admissions_entrance_red_carpet.jpg';
const closingDramaticImg = '/assets/campus/14_closing_dramatic_campus.jpg';

interface CampusLifeProps {
  onOpenCampusLifePage?: () => void;
}

interface MarqueeItem {
  id: string;
  title: string;
  tag: string;
  image: string;
  subtitle: string;
}

export const CampusLife: React.FC<CampusLifeProps> = ({ onOpenCampusLifePage }) => {
  // Scroll reveal visibility flags for each block
  const [headerVisible, setHeaderVisible] = useState(false);
  const [spreadVisible, setSpreadVisible] = useState(false);
  const [nightSpreadVisible, setNightSpreadVisible] = useState(false);
  const [marqueeHeaderVisible, setMarqueeHeaderVisible] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);
  const spreadRef = useRef<HTMLDivElement>(null);
  const nightSpreadRef = useRef<HTMLDivElement>(null);
  const marqueeHeaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === headerRef.current) setHeaderVisible(true);
          if (entry.target === spreadRef.current) setSpreadVisible(true);
          if (entry.target === nightSpreadRef.current) setNightSpreadVisible(true);
          if (entry.target === marqueeHeaderRef.current) setMarqueeHeaderVisible(true);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.12,
      rootMargin: '40px 0px -40px 0px',
    });

    if (headerRef.current) observer.observe(headerRef.current);
    if (spreadRef.current) observer.observe(spreadRef.current);
    if (nightSpreadRef.current) observer.observe(nightSpreadRef.current);
    if (marqueeHeaderRef.current) observer.observe(marqueeHeaderRef.current);

    // Fallback timer so animations always display quickly
    const fallbackTimer = setTimeout(() => {
      setHeaderVisible(true);
      setSpreadVisible(true);
      setNightSpreadVisible(true);
      setMarqueeHeaderVisible(true);
    }, 1200);

    return () => {
      observer.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);

  // Premium Marquee Sequence (All Real Campus & Event Imagery)
  const marqueeItems: MarqueeItem[] = [
    {
      id: 'mq-1',
      title: 'Keynote Symposiums & Summits',
      tag: 'Academic Discourse',
      image: businessSeminarImg,
      subtitle: 'Student leadership dialogues in the grand auditorium',
    },
    {
      id: 'mq-2',
      title: 'Central Gathering Courtyard',
      tag: 'Student Spaces',
      image: courtyardImg,
      subtitle: 'Sunlit open-air forum between lecture hours',
    },
    {
      id: 'mq-3',
      title: 'Annual Festival Corridor',
      tag: 'Campus Traditions',
      image: corridorImg,
      subtitle: 'Themed exhibition halls and seasonal festivities',
    },
    {
      id: 'mq-4',
      title: 'Sunlit Architectural Walkways',
      tag: 'Campus Architecture',
      image: hallwayImg,
      subtitle: 'Spacious corridors bathed in natural light',
    },
    {
      id: 'mq-5',
      title: 'Red Carpet Welcoming Ceremony',
      tag: 'Student Community',
      image: redCarpetImg,
      subtitle: 'Annual matriculation and celebratory receptions',
    },
    {
      id: 'mq-6',
      title: 'Evening Labs & Innovation Quads',
      tag: 'Campus After Hours',
      image: nightCampusImg,
      subtitle: 'Illuminated campus welcoming collaborative teams',
    },
    {
      id: 'mq-7',
      title: 'Hands-On Computing Workshops',
      tag: 'Collaborative Labs',
      image: computingLabImg,
      subtitle: 'State-of-the-art tech society hackathons',
    },
    {
      id: 'mq-8',
      title: 'Humanities & Research Library',
      tag: 'Intellectual Circles',
      image: libraryImg,
      subtitle: 'Quiet study sanctuaries and group discourse tables',
    },
    {
      id: 'mq-9',
      title: 'Manicured Lawns & Green Spaces',
      tag: 'Outdoor Life',
      image: lawnImg,
      subtitle: 'Expansive campus grounds for recreation and dialogue',
    },
    {
      id: 'mq-10',
      title: 'Southern Punjab Horizon',
      tag: 'Campus Identity',
      image: closingDramaticImg,
      subtitle: 'Dignified institutional architecture under evening skies',
    },
  ];

  return (
    <section 
      id="campus-section" 
      className="relative py-[100px] bg-[#FDFBF7] text-[#0A1931] border-b border-[#0A1931]/10 overflow-hidden"
      aria-labelledby="campus-life-heading"
    >
      {/* Subtle Fine Academic Grid Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: 'radial-gradient(#0A1931 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* ====================================================================
            1. SOPHISTICATED SECTION HEADING
            "Life at UCP Bahawalpur"
            Small label: "CAMPUS LIFE"
            Supporting text: "Beyond the classroom, every experience becomes part of the UCP journey."
            ==================================================================== */}
        <header 
          ref={headerRef}
          className={`max-w-3xl mb-20 sm:mb-28 transition-all duration-700 ease-out ${
            headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'
          }`}
        >
          {/* Small label: CAMPUS LIFE with subtle gold accent line */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.28em] text-[#C5A880]">
              CAMPUS LIFE
            </span>
            <span className="h-px w-10 bg-[#C5A880]/60" aria-hidden="true" />
          </div>

          {/* Main Title: Life at UCP Bahawalpur */}
          <h2
            id="campus-life-heading"
            className="text-3xl sm:text-5xl lg:text-[56px] font-serif font-bold text-[#0A1931] tracking-tight leading-[1.12] mb-6"
            style={{ fontFamily: "'Cormorant Garamond', 'Libre Baskerville', 'Playfair Display', Georgia, serif" }}
          >
            Life at UCP Bahawalpur
          </h2>

          {/* Supporting Text: Beyond the classroom, every experience becomes part of the UCP journey. */}
          <p className="text-lg sm:text-xl text-slate-700 font-serif italic leading-relaxed border-l-2 border-[#C5A880] pl-4 sm:pl-5 mb-5">
            Beyond the classroom, every experience becomes part of the UCP journey.
          </p>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans max-w-2xl">
            From lively student gathering spaces in open courtyards to academic festivals, dynamic student societies, and vibrant campus events, life at UCP Bahawalpur fosters lifelong friendships and professional leadership.
          </p>
        </header>

        {/* ====================================================================
            2. ASYMMETRIC EDITORIAL SPREAD — LARGE CURVED/ROUNDED PHOTOGRAPHY
            Features:
            - Left: Large vertical curved photograph (Decorated Corridor IMAGE 06)
            - Right top: Expansive curved arched photograph (Courtyard IMAGE 08)
            - Right bottom: Refined editorial narrative with elegant typography
            ==================================================================== */}
        <div 
          ref={spreadRef}
          className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-28 sm:mb-36 transition-all duration-800 ease-out ${
            spreadVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Left Column: Striking Large Curved Vertical Editorial Image */}
          <div className="lg:col-span-6">
            <div className="relative group">
              {/* Primary Anchor: Decorated Corridor with sophisticated curved silhouette */}
              <div className="relative w-full aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-[36px_16px_48px_16px] border border-[#0A1931]/10 bg-slate-100 shadow-[0_16px_40px_rgba(10,25,49,0.07)]">
                <img
                  src={corridorImg}
                  alt="Student Life Beyond the Classroom - Decorated Corridor at UCP Bahawalpur"
                  loading="eager"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                
                {/* Refined gradient scrim for editorial caption */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931]/85 via-[#0A1931]/20 to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 text-white pointer-events-none">
                  <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-[#C5A880] font-semibold block mb-1.5">
                    COLLEGIATE ATMOSPHERE
                  </span>
                  <h3 
                    className="font-serif text-2xl sm:text-3xl font-bold leading-tight drop-shadow-sm mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', 'Libre Baskerville', Georgia, serif" }}
                  >
                    The Rhythm of Campus Life
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed max-w-md">
                    Themed academic corridors, student exhibition displays, and seasonal campus celebrations that bring energy to daily collegiate study.
                  </p>
                </div>
              </div>

              {/* Decorative Subtle Accent Tag */}
              <div className="absolute -top-3 -right-3 hidden sm:flex items-center gap-2 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full border border-[#0A1931]/10 shadow-lg text-[11px] font-mono uppercase tracking-wider text-[#0A1931]">
                <Sparkles size={13} className="text-[#C5A880]" />
                <span>Editorial Feature</span>
              </div>
            </div>
          </div>

          {/* Right Column: Arched Courtyard Photograph & Editorial Narrative */}
          <div className="lg:col-span-6 flex flex-col space-y-8">
            
            {/* Arched Courtyard Image (Large curved/rounded photograph) */}
            <div className="relative group overflow-hidden rounded-t-[70px] rounded-b-2xl border border-[#0A1931]/10 bg-slate-100 shadow-[0_14px_35px_rgba(10,25,49,0.06)] aspect-[16/10] w-full">
              <img
                src={courtyardImg}
                alt="Central Courtyards and Student Gathering Grounds at UCP Bahawalpur"
                loading="eager"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931]/80 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-5 left-6 right-6 text-white pointer-events-none">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#C5A880] font-semibold block mb-0.5">
                  STUDENT GATHERING GROUNDS
                </span>
                <h4 
                  className="font-serif text-xl sm:text-2xl font-bold leading-snug drop-shadow-sm"
                  style={{ fontFamily: "'Cormorant Garamond', 'Libre Baskerville', Georgia, serif" }}
                >
                  Central Courtyards & Open Quads
                </h4>
              </div>
            </div>

            {/* Editorial Narrative Block */}
            <div className="space-y-6 pt-2">
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="h-2 w-2 rounded-full bg-[#A51C30]" />
                  <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#A51C30] font-bold">
                    COMMUNITY & LEADERSHIP
                  </span>
                </div>
                <h3 
                  className="text-2xl sm:text-3xl font-serif font-bold text-[#0A1931] leading-tight"
                  style={{ fontFamily: "'Cormorant Garamond', 'Libre Baskerville', Georgia, serif" }}
                >
                  A Vibrant Ecosystem of Student Engagement
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-sans">
                  At UCP Bahawalpur, learning thrives in conversation. Between classes, students gather in lush quads, plan national debating fixtures, organize theatre festivals, and coordinate community outreach programs.
                </p>
              </div>

              {/* Sophisticated Distinctive Columns (No childish cards or heavy borders) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2 border-t border-[#0A1931]/10">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#0A1931] font-bold uppercase tracking-wider">
                    <Users size={14} className="text-[#C5A880]" />
                    <span>65+ Active Societies</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Student-governed chapters spanning Literary, Debates, Computer Science, Dramatic Arts, and Entrepreneurship.
                  </p>
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#0A1931] font-bold uppercase tracking-wider">
                    <Calendar size={14} className="text-[#C5A880]" />
                    <span>Annual Traditions</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Inter-faculty Olympiads, spring festivals, cultural galas, and regional excursions across Pakistan.
                  </p>
                </div>
              </div>

              {/* Clean Editorial Action Link */}
              {onOpenCampusLifePage && (
                <div className="pt-2">
                  <button
                    onClick={onOpenCampusLifePage}
                    className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#0A1931] hover:text-[#A51C30] transition-colors cursor-pointer group"
                  >
                    <span>View Dedicated Campus Life Archive</span>
                    <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1.5 text-[#C5A880]" />
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* ====================================================================
            3. CINEMATIC WIDE ARCHITECTURAL PANORAMA — "CAMPUS AFTER HOURS"
            Large, immersive photograph with rounded curvature and refined typography
            ==================================================================== */}
        <div 
          ref={nightSpreadRef}
          className={`mb-32 sm:mb-40 transition-all duration-800 ease-out ${
            nightSpreadVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="relative group overflow-hidden rounded-[28px] sm:rounded-[40px] border border-[#0A1931]/10 bg-[#07192F] shadow-[0_20px_50px_rgba(10,25,49,0.08)]">
            <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full overflow-hidden">
              <img
                src={nightCampusImg}
                alt="Campus After Hours - Illuminated Architectural View of UCP Bahawalpur"
                loading="eager"
                className="w-full h-full object-cover object-center transition-transform duration-800 ease-out group-hover:scale-[1.025]"
              />

              {/* Scrim for rich evening atmosphere */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07192F]/90 via-[#07192F]/30 to-transparent pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 sm:bottom-12 sm:left-12 sm:right-12 flex flex-col md:flex-row md:items-end justify-between gap-6 text-white pointer-events-none">
                <div className="max-w-2xl">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[11px] font-mono uppercase tracking-[0.26em] text-[#C5A880] font-bold">
                      CAMPUS AFTER HOURS
                    </span>
                    <span className="h-px w-8 bg-[#C5A880]/50" />
                  </div>

                  <h3 
                    className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-white drop-shadow-md mb-2 sm:mb-3"
                    style={{ fontFamily: "'Cormorant Garamond', 'Libre Baskerville', Georgia, serif" }}
                  >
                    Where Academic Passion Extends into the Evening
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-200 font-sans leading-relaxed max-w-xl">
                    As twilight settles over the Cholistan horizon, the campus architecture illuminates, welcoming evening symposiums, hackathons, robotics labs, and collaborative team research that carry forward student curiosity.
                  </p>
                </div>

                <div className="pointer-events-auto flex-shrink-0">
                  {onOpenCampusLifePage && (
                    <button
                      onClick={onOpenCampusLifePage}
                      className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/30 text-xs font-mono uppercase tracking-widest backdrop-blur-md transition-all duration-300 shadow-sm hover:shadow-lg active:scale-95 cursor-pointer group"
                    >
                      <span>Explore Experiences</span>
                      <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 text-[#C5A880]" />
                    </button>
                  )}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ====================================================================
            4. INFINITE HORIZONTAL IMAGE MARQUEE SECTION
            Heading:
            "Moments That Define Campus Life"
            Below it:
            "Explore the people, experiences, events and memories that make UCP Bahawalpur more than a place to study."
            Continuous movement from LEFT TO RIGHT with smooth hover pause.
            Large, clearly visible, premium proportions, no tiny thumbnails.
            ==================================================================== */}
        <div 
          ref={marqueeHeaderRef}
          className={`space-y-10 sm:space-y-12 transition-all duration-700 ease-out ${
            marqueeHeaderVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-7'
          }`}
        >
          {/* Header above Marquee */}
          <div className="text-center max-w-3xl mx-auto space-y-3 px-4">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.26em] text-[#C5A880]">
              CURATED RETROSPECTIVE
            </span>
            <h3 
              className="text-2xl sm:text-4xl font-serif font-bold text-[#0A1931] tracking-tight leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', 'Libre Baskerville', Georgia, serif" }}
            >
              Moments That Define Campus Life
            </h3>
            <p className="text-sm sm:text-base text-slate-600 font-sans leading-relaxed max-w-2xl mx-auto">
              Explore the people, experiences, events and memories that make UCP Bahawalpur more than a place to study.
            </p>
          </div>

          {/* Marquee Outer Container with Edge Fade Masks */}
          <div className="marquee-container relative w-full overflow-hidden py-4 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
            
            {/* Left & Right Editorial Fades for Seamless Viewport Transitions */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-r from-[#FDFBF7] to-transparent z-20 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-28 bg-gradient-to-l from-[#FDFBF7] to-transparent z-20 pointer-events-none" />

            {/* Seamless Infinite Marquee Track Moving LEFT TO RIGHT */}
            <div className="animate-marquee-ltr flex items-center gap-6 sm:gap-8">
              
              {/* First Sequence of Large Premium Images */}
              {marqueeItems.map((item, idx) => (
                <div 
                  key={`mq-first-${item.id}-${idx}`}
                  className="group/card relative w-[320px] sm:w-[400px] md:w-[440px] aspect-[16/11] flex-shrink-0 overflow-hidden rounded-2xl sm:rounded-3xl border border-[#0A1931]/10 bg-slate-100 shadow-[0_10px_30px_rgba(10,25,49,0.06)] cursor-pointer"
                  onClick={onOpenCampusLifePage}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="eager"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover/card:scale-105"
                  />
                  
                  {/* Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931]/85 via-[#0A1931]/20 to-transparent pointer-events-none transition-opacity duration-300 group-hover/card:opacity-95" />

                  {/* Editorial Tag & Title Overlay */}
                  <div className="absolute bottom-4 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 text-white pointer-events-none">
                    <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#C5A880] font-semibold block mb-1">
                      {item.tag}
                    </span>
                    <h4 
                      className="font-serif text-base sm:text-xl font-bold text-white leading-tight drop-shadow-xs mb-1"
                      style={{ fontFamily: "'Cormorant Garamond', 'Libre Baskerville', Georgia, serif" }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-200 line-clamp-1 font-sans">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}

              {/* Exact Duplicated Sequence for Perfect Gapless Infinite Loop (Left-to-Right) */}
              {marqueeItems.map((item, idx) => (
                <div 
                  key={`mq-second-${item.id}-${idx}`}
                  className="group/card relative w-[320px] sm:w-[400px] md:w-[440px] aspect-[16/11] flex-shrink-0 overflow-hidden rounded-2xl sm:rounded-3xl border border-[#0A1931]/10 bg-slate-100 shadow-[0_10px_30px_rgba(10,25,49,0.06)] cursor-pointer"
                  onClick={onOpenCampusLifePage}
                  aria-hidden="true"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="eager"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover/card:scale-105"
                  />
                  
                  {/* Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931]/85 via-[#0A1931]/20 to-transparent pointer-events-none transition-opacity duration-300 group-hover/card:opacity-95" />

                  {/* Editorial Tag & Title Overlay */}
                  <div className="absolute bottom-4 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6 text-white pointer-events-none">
                    <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#C5A880] font-semibold block mb-1">
                      {item.tag}
                    </span>
                    <h4 
                      className="font-serif text-base sm:text-xl font-bold text-white leading-tight drop-shadow-xs mb-1"
                      style={{ fontFamily: "'Cormorant Garamond', 'Libre Baskerville', Georgia, serif" }}
                    >
                      {item.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-200 line-clamp-1 font-sans">
                      {item.subtitle}
                    </p>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CampusLife;
