import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Search, ArrowRight, BookOpen, RotateCcw, GraduationCap, Sparkles, Layers } from 'lucide-react';
import { 
  OFFICIAL_BAHAWALPUR_PROGRAMMES, 
  BahawalpurProgramme 
} from '../data/bahawalpurProgrammesData';

interface ProgramFinderProps {
  onSelectProgram?: (program: any) => void;
  onApplyForProgram?: (programName: string) => void;
  onOpenProgrammesPage?: (progId?: string) => void;
}

type CategoryTab = 
  | 'All' 
  | 'Computing & Technology' 
  | 'Business' 
  | 'Science' 
  | 'Humanities & Social Sciences';

export const ProgramFinder: React.FC<ProgramFinderProps> = ({
  onSelectProgram,
  onApplyForProgram,
  onOpenProgrammesPage,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryTab>('All');
  const [selectedDegree, setSelectedDegree] = useState<'All' | 'BS' | 'BBA' | 'ADP' | 'ADS'>('All');
  const [hoveredProgramId, setHoveredProgramId] = useState<string | null>(null);
  const [transitioningProgramId, setTransitioningProgramId] = useState<string | null>(null);

  // Subtle scroll shift reference
  const sectionRef = useRef<HTMLElement>(null);
  const [scrollShift, setScrollShift] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (sectionRef.current) {
            const rect = sectionRef.current.getBoundingClientRect();
            // Subtle shift calculation (between 0 and 10px)
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
              const progress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
              setScrollShift(Math.round((progress - 0.5) * 14));
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categoryTabs: CategoryTab[] = [
    'All',
    'Computing & Technology',
    'Business',
    'Science',
    'Humanities & Social Sciences',
  ];

  const filteredProgrammes = useMemo(() => {
    return OFFICIAL_BAHAWALPUR_PROGRAMMES.filter((prog) => {
      const matchesSearch = 
        searchQuery === '' ||
        prog.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prog.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prog.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prog.whatYouWillLearn.some(w => w.toLowerCase().includes(searchQuery.toLowerCase()));

      let matchesCategory = true;
      if (selectedCategory !== 'All') {
        matchesCategory = prog.category === selectedCategory;
      }

      const matchesDegree = selectedDegree === 'All' || prog.degree === selectedDegree;

      return matchesSearch && matchesCategory && matchesDegree;
    });
  }, [searchQuery, selectedCategory, selectedDegree]);

  const handleCardClick = (prog: BahawalpurProgramme) => {
    setTransitioningProgramId(prog.id);
    setTimeout(() => {
      setTransitioningProgramId(null);
      if (onOpenProgrammesPage) {
        onOpenProgrammesPage(prog.id);
      } else if (onSelectProgram) {
        onSelectProgram(prog);
      }
    }, 280);
  };

  return (
    <section 
      ref={sectionRef}
      id="finder-section" 
      className="relative py-20 sm:py-24 lg:py-28 bg-[#FCFBF9] border-b border-stone-200/90 overflow-hidden"
      aria-labelledby="programs-directory-heading"
    >
      {/* Subtle institutional grid texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(#092242 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* =========================================================================
            2. SECTION INTRO — Editorial Academic Directory Header
            ========================================================================= */}
        <div 
          className="max-w-3xl mb-12 sm:mb-16 transition-transform duration-300 ease-out"
          style={{ transform: `translateY(${scrollShift * 0.4}px)` }}
          data-reveal="mask"
        >
          {/* Small Eyebrow: uppercase, letter-spaced, deep UCP red */}
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-bold uppercase tracking-[0.24em] text-[#A51C30]">
              ACADEMIC PROGRAMMES
            </span>
            <span className="h-px w-8 bg-[#A51C30]/50" aria-hidden="true" />
            <span className="text-[11px] font-mono text-stone-500 uppercase tracking-widest hidden sm:inline-block">
              UCP Bahawalpur Directory
            </span>
          </div>

          {/* Main Heading: 44-56px desktop, 32-38px mobile, medium/semi-bold, elegant serif */}
          <div className="mask-reveal-wrap">
            <h2 
              id="programs-directory-heading"
              className="mask-reveal-child text-3xl sm:text-4xl lg:text-[46px] xl:text-[50px] font-serif font-medium sm:font-semibold text-[#092242] tracking-tight leading-[1.18]"
              style={{ fontFamily: "'Cormorant Garamond', 'Libre Baskerville', Georgia, serif" }}
            >
              Shape Your Future at UCP Bahawalpur
            </h2>
          </div>

          {/* Concise 1-2 line description */}
          <p className="mt-4 text-[15.5px] sm:text-[17px] text-stone-600 leading-relaxed font-sans max-w-2xl">
            Explore undergraduate and associate degree programmes structured to cultivate intellectual rigor, technical mastery, and professional leadership across diverse academic disciplines.
          </p>

          {/* Editorial Quick-Nav & Action Strip */}
          <div className="mt-5 flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={() => {
                if (onOpenProgrammesPage) onOpenProgrammesPage();
              }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#092242] hover:bg-[#A51C30] text-white text-xs font-semibold uppercase tracking-[0.14em] rounded-md shadow-xs transition-colors cursor-pointer group/cta"
            >
              <span>View Full Academic Directory ({OFFICIAL_BAHAWALPUR_PROGRAMMES.length} Programmes)</span>
              <ArrowRight size={13} className="transition-transform group-hover/cta:translate-x-1" />
            </button>
            <span className="text-xs font-mono text-stone-500 bg-stone-100/80 px-3 py-1.5 rounded-md border border-stone-200">
              Fall 2026 Admissions Open
            </span>
          </div>
        </div>

        {/* =========================================================================
            SEARCH & ACADEMIC CATEGORY NAVIGATION
            Clean, restrained filter system matching university prospectus standards
            ========================================================================= */}
        <div className="bg-white rounded-xl border border-stone-200/90 p-5 sm:p-6 shadow-xs mb-10 space-y-4">
          
          {/* Clean Search Input */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-400" size={17} />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search programmes by title, discipline, or keyword... (e.g. Computer Science, Accounting, Artificial Intelligence)"
              className="w-full pl-11 pr-4 py-2.5 bg-[#FAF8F5] border border-stone-200 rounded-lg text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-1 focus:ring-[#092242] focus:border-[#092242] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700 font-mono cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          {/* Academic Discipline Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 border-b border-stone-100 scrollbar-none text-xs font-medium">
            {categoryTabs.map((tab) => {
              const isActive = selectedCategory === tab;
              const count = tab === 'All' 
                ? OFFICIAL_BAHAWALPUR_PROGRAMMES.length 
                : OFFICIAL_BAHAWALPUR_PROGRAMMES.filter(p => p.category === tab).length;

              return (
                <button
                  key={tab}
                  onClick={() => setSelectedCategory(tab)}
                  className={`px-3.5 py-2 rounded-lg whitespace-nowrap transition-colors focus:outline-none cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#092242] text-white font-semibold shadow-xs'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
                  }`}
                >
                  <span>{tab}</span>
                  <span className={`font-mono text-[10.5px] px-1.5 py-0.2 rounded ${
                    isActive ? 'bg-white/20 text-white' : 'bg-stone-100 text-stone-500'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Level Filter & Result Count Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-1 text-xs">
            <div className="flex items-center gap-2">
              <span className="text-stone-500 font-medium">Degree Level:</span>
              <div className="flex items-center gap-1">
                {(['All', 'BS', 'BBA', 'ADP', 'ADS'] as const).map((deg) => (
                  <button
                    key={deg}
                    onClick={() => setSelectedDegree(deg)}
                    className={`px-2.5 py-1 rounded-md text-xs font-mono transition-colors cursor-pointer ${
                      selectedDegree === deg
                        ? 'bg-[#092242] text-white font-bold'
                        : 'text-stone-600 hover:bg-stone-100'
                    }`}
                  >
                    {deg}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              {(searchQuery || selectedCategory !== 'All' || selectedDegree !== 'All') && (
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                    setSelectedDegree('All');
                  }}
                  className="text-xs text-[#A51C30] hover:underline flex items-center gap-1 cursor-pointer font-medium"
                >
                  <RotateCcw size={12} />
                  <span>Reset Filters</span>
                </button>
              )}
              <span className="text-stone-500 font-mono text-[11px]">
                Showing {filteredProgrammes.length} of {OFFICIAL_BAHAWALPUR_PROGRAMMES.length} Programmes
              </span>
            </div>
          </div>
        </div>

        {/* =========================================================================
            3. THE ACADEMIC DIRECTORY — REFINED EDITORIAL GRID
            - 3-column layout with subtle visual rhythm
            - Images are immediately present and sharp (NO loading delays)
            - Signature hover interaction: image scale + 3px shift + red accent line expansion
            - Active programme focus effect: subtle 8% dimming on siblings
            - Discreet editorial numbering: 01, 02, 03...
            ========================================================================= */}
        {filteredProgrammes.length > 0 ? (
          <div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 lg:gap-8 items-stretch"
            style={{ transform: `translateY(${scrollShift * 0.2}px)` }}
          >
            {filteredProgrammes.map((prog, index) => {
              const numberStr = String(index + 1).padStart(2, '0');
              const isHovered = hoveredProgramId === prog.id;
              const isAnyHovered = hoveredProgramId !== null;
              const isSibling = isAnyHovered && !isHovered;
              const isTransitioning = transitioningProgramId === prog.id;

              return (
                <article
                  key={prog.id}
                  onClick={() => handleCardClick(prog)}
                  onMouseEnter={() => setHoveredProgramId(prog.id)}
                  onMouseLeave={() => setHoveredProgramId(null)}
                  className={`group relative bg-white border border-stone-200/90 rounded-lg overflow-hidden flex flex-col justify-between cursor-pointer transition-all duration-[480ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    isHovered 
                      ? 'border-[#092242]/35 shadow-[0_12px_32px_rgba(9,34,66,0.08)] -translate-y-1.5' 
                      : isSibling 
                        ? 'opacity-[0.92] border-stone-200/70 shadow-xs' 
                        : 'shadow-xs hover:border-stone-300'
                  } ${isTransitioning ? 'scale-[1.02] ring-2 ring-[#092242]' : ''}`}
                >
                  {/* Top UCP Red Hairline Accent (Expands from left on hover) */}
                  <div 
                    className="absolute top-0 left-0 h-[2.5px] w-0 bg-[#A51C30] transition-all duration-[480ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full z-20"
                    aria-hidden="true"
                  />

                  {/* Top Area: Program Image & Tags */}
                  <div>
                    <div className="relative aspect-[16/10] bg-stone-100 overflow-hidden">
                      <img
                        src={prog.image}
                        alt={prog.name}
                        loading="eager"
                        decoding="async"
                        className={`w-full h-full object-cover transition-transform duration-[520ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          prog.id === 'adp-business-administration' ? 'object-[center_35%]' : 'object-center'
                        } ${isHovered ? 'scale-[1.028] -translate-y-0.5' : 'scale-100'}`}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          if (prog.id === 'bs-psychology') {
                            target.src = 'https://i.ibb.co/zWQVBLTD/shutterstock-158110544-scaled.jpg';
                          } else if (prog.id === 'bs-physics') {
                            target.src = 'https://i.ibb.co/MkxJ7Nzy/Chat-GPT-Image-Sep-26-2026-09-44-35-AM.png';
                          } else if (prog.id === 'bba') {
                            target.src = 'https://i.ibb.co/TXgwt6f/Chat-GPT-Image-Sep-27-2026-07-07-56-AM.png';
                          } else if (prog.id === 'adp-artificial-intelligence') {
                            target.src = 'https://i.ibb.co/bMFsfmxh/hand-holding-ai-globe.jpg';
                          } else if (prog.id === 'adp-cyber-security' || prog.id === 'bs-cyber-security' || prog.id === 'bs-cyber') {
                            target.src = 'https://i.ibb.co/DPDbZQ7K/images.jpg';
                          } else if (prog.id === 'bs-mathematics') {
                            target.src = 'https://i.ibb.co/2Ys8Y5H3/shutterstock-2475273911-scaled.jpg';
                          } else if (prog.id === 'bs-chemistry') {
                            target.src = 'https://i.ibb.co/h1fDTVTm/p0f776fj.png';
                          } else if (prog.id === 'bs-zoology') {
                            target.src = 'https://i.ibb.co/hFKgG2vw/Zoology.png';
                          } else if (prog.id === 'adp-psychology') {
                            target.src = 'https://i.ibb.co/chP4mYWB/What-s-the-Difference-Between-a-Psychiatrist-and-Psychologist.webp';
                          } else if (prog.id === 'bs-english') {
                            target.src = 'https://i.ibb.co/cKvTywH6/360-F-409187796-W9bg-IQAKZYs-Wkc9g-Xt-Pbs5h-YAWXd6z1-T.jpg';
                          } else if (prog.id === 'bs-business-analytics') {
                            target.src = 'https://i.ibb.co/Ld75Vg2t/i-Stock-1311598658.jpg';
                          } else if (prog.id === 'bs-biotechnology') {
                            target.src = 'https://i.ibb.co/wFZF6w95/Biotechnology-1000x600px.jpg';
                          } else if (prog.id === 'bs-accounting-finance') {
                            target.src = 'https://i.ibb.co/p6MpMGDn/shutterstock-527098861-1-scaled.avif';
                          } else if (prog.id === 'bs-biochemistry') {
                            target.src = 'https://i.ibb.co/VW7jZHDF/pipette-over-test-tube-dropping-sample-chemical-into-sample-plant-scaled-jpg.webp';
                          } else if (prog.id === 'bs-computer-science') {
                            target.src = 'https://i.ibb.co/V0QdQKgG/images-1.jpg';
                          } else if (prog.id === 'adp-software-engineering') {
                            target.src = 'https://i.ibb.co/rf2T1y2M/images.jpg';
                          } else if (prog.id === 'adp-data-science') {
                            target.src = 'https://i.ibb.co/LDnggNLM/FUq-HEVVUs-AAb-ZB0.jpg';
                          } else if (prog.id === 'ads-zoology-botany-chemistry') {
                            target.src = 'https://i.ibb.co/GfDX6Zg7/pngtree-laboratory-plant-research-image-21361714.webp';
                          } else if (prog.id === 'ads-math-physics') {
                            target.src = 'https://i.ibb.co/wN2rcm0p/creative-concept-hand-holding-light-bulb-with-planets-mathematical-formulas-representing-idea-genera.jpg';
                          } else if (prog.id === 'adp-english') {
                            target.src = 'https://i.ibb.co/xdLNTjf/360-F-310395027-i-VFf-VOCWFUONEIo-Ri-Tk7-Wq-U7-GLTOf3-QE.jpg';
                          } else if (prog.id === 'adp-business-analytics') {
                            target.src = 'https://i.ibb.co/cKT5qwbp/What-is-business-analytics-Getty-Images-1281224851-e1708028042563.webp';
                          } else if (prog.id === 'adp-biotechnology') {
                            target.src = 'https://i.ibb.co/35mFgXjT/7052877-13ab.webp';
                          } else if (prog.id === 'adp-accounting-finance') {
                            target.src = 'https://i.ibb.co/xS78W5ZT/accounting-and-finance.jpg';
                          } else if (prog.id === 'adp-business-administration') {
                            target.src = 'https://i.ibb.co/Ps0SNKc7/images-1.jpg';
                          } else if (prog.id === 'adp-computer-science') {
                            target.src = 'https://i.ibb.co/nqtHPF6p/Online-Learning-South-Asia-Learning-Indoor-Getty-Images-1071652068.webp';
                          }
                        }}
                      />

                      {/* Subtle, restrained bottom scrim for legibility without darkening architecture */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#092242]/70 via-transparent to-transparent pointer-events-none opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

                      {/* Top Corner: Degree Tag */}
                      <div className="absolute top-3 left-3 bg-[#092242]/90 text-white text-[11px] font-mono px-2 py-0.5 rounded-xs tracking-wider font-semibold shadow-xs">
                        {prog.degree}
                      </div>

                      {/* Top Right: Level Identifier */}
                      <div className="absolute top-3 right-3 bg-white/95 text-[#092242] text-[10px] font-sans uppercase font-bold tracking-wider px-2 py-0.5 rounded-xs shadow-xs border border-black/5">
                        {prog.level === 'Undergraduate' ? '4-Year BS' : '2-Year Associate'}
                      </div>
                    </div>

                    {/* Editorial Content Block */}
                    <div className="p-5 sm:p-6 pb-4">
                      
                      {/* Numbering + Academic Discipline Strip */}
                      <div className="flex items-center justify-between gap-2 mb-2 pb-1.5 border-b border-stone-100">
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs font-bold tracking-widest text-[#092242]/55">
                            {numberStr}
                          </span>
                          <span className="text-[11px] font-sans uppercase font-bold tracking-[0.16em] text-[#A51C30]">
                            {prog.category}
                          </span>
                        </div>
                        <span className="font-mono text-[11px] text-stone-500 tabular-nums">
                          {prog.creditHours} Cr. Hrs
                        </span>
                      </div>

                      {/* Programme Title */}
                      <div className="space-y-1.5">
                        <h3 className="text-[20px] sm:text-[22px] font-sans font-bold text-[#092242] tracking-tight leading-snug transition-transform duration-[480ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1">
                          {prog.name}
                        </h3>

                        {/* Thin UCP Red Accent Line Under Title */}
                        <div 
                          className="h-[2px] w-0 bg-[#A51C30] transition-all duration-[480ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-12"
                          aria-hidden="true"
                        />
                      </div>

                      {/* Concise Description */}
                      <p className="mt-2.5 text-xs sm:text-[13px] text-stone-600 line-clamp-2 leading-relaxed font-sans">
                        {prog.shortDescription}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Action Layer: Fee Summary & Signature "Explore Programme" Button */}
                  <div className="px-5 sm:px-6 py-3.5 bg-[#FAF8F5]/80 border-t border-stone-100 flex items-center justify-between text-xs">
                    <span className="font-mono text-[11px] text-stone-500 tabular-nums">
                      PKR {prog.yearlyAverage.toLocaleString()}/yr avg
                    </span>

                    {/* Signature Interaction Action */}
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#092242] group-hover:text-[#A51C30] transition-colors duration-300">
                      <span>Explore Programme</span>
                      <ArrowRight 
                        size={13} 
                        className="transition-transform duration-[480ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-1.5 text-[#A51C30]" 
                      />
                    </span>
                  </div>

                </article>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl border border-stone-200 p-8 shadow-xs">
            <h4 className="text-base font-serif font-bold text-stone-800">No matching programmes found</h4>
            <p className="text-xs text-stone-500 mt-1 max-w-sm mx-auto">
              Please adjust your search keywords or discipline filters above to view available offerings.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSelectedDegree('All');
              }}
              className="mt-4 px-4 py-2 bg-[#092242] text-white rounded-lg text-xs font-medium hover:bg-slate-800 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* =========================================================================
            CLASSROOMS & LEARNING SPOTLIGHT (IMAGE 11)
            Authentic Academic Environment as mapped in Image Hierarchy
            ========================================================================= */}
        <div className="mt-16 sm:mt-20 bg-white border border-stone-200/90 rounded-xl overflow-hidden shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            
            {/* Authentic Classroom Photograph */}
            <div className="lg:col-span-6 relative min-h-[300px] sm:min-h-[360px] overflow-hidden bg-stone-100">
              <img
                src="/assets/campus/11_academics_classroom.jpg"
                alt="Learning at UCP Bahawalpur - Purpose-Built Multimedia Classroom and Academic Environment"
                loading="eager"
                decoding="async"
                className="w-full h-full object-cover object-center img-hover-scale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#092242]/75 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-6 right-6 text-white pointer-events-none">
                <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-amber-300 font-semibold block mb-0.5">
                  Academic Environment · UCP Bahawalpur
                </span>
                <p className="text-base sm:text-lg font-serif font-semibold">
                  Multimedia Lecture Theatres & Collaborative Classrooms
                </p>
              </div>
            </div>

            {/* Editorial Narrative */}
            <div className="lg:col-span-6 p-7 sm:p-10 lg:p-12 flex flex-col justify-center space-y-4 bg-[#FDFBF7]">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#A51C30]">
                <BookOpen size={14} />
                <span>Academic Experience</span>
              </div>
              <h3 
                className="text-2xl sm:text-3xl font-serif font-semibold text-[#092242] tracking-tight leading-snug"
                style={{ fontFamily: "'Cormorant Garamond', 'Libre Baskerville', Georgia, serif" }}
              >
                Learning at UCP Bahawalpur
              </h3>
              <p className="text-sm sm:text-[15px] text-stone-600 leading-relaxed font-sans">
                Our air-conditioned smart classrooms are equipped with modern multimedia projection, high-definition audio-visual learning aids, and ergonomic seating configured for collaborative inquiry and faculty mentorship.
              </p>
              <div className="pt-2 flex items-center gap-3">
                <button
                  onClick={() => {
                    if (onOpenProgrammesPage) onOpenProgrammesPage();
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#092242] hover:bg-[#A51C30] text-white text-xs font-semibold uppercase tracking-[0.14em] rounded-md transition-colors cursor-pointer group/btn shadow-xs"
                >
                  <span>Explore Academic Curricula</span>
                  <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
