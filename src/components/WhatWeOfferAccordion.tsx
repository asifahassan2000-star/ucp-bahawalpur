import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, GraduationCap, Laptop, BookOpen, Activity, ArrowRight, ExternalLink } from 'lucide-react';

interface OfferCard {
  id: number;
  image: string;
  fallbackImage: string;
  title: string;
  collapsedTitle: string;
  description: string;
  badge: string;
  icon: React.ComponentType<{ className?: string }>;
  actionText: string;
  externalLink?: string;
  targetId?: string;
}

interface WhatWeOfferAccordionProps {
  onOpenApply?: (programName?: string) => void;
  onOpenProgrammesPage?: () => void;
  onOpenCampusLifePage?: () => void;
  onScrollTo?: (id: string) => void;
}

const INTERNATIONAL_OFFICE_URL =
  'https://ucpio.ucp.edu.pk/?_gl=1%2A1bxetf4%2A_gcl_au%2AMTYwNTM0NDE2My4xNzkxMzA5NzAw%2A_ga%2AMTk1MjM5OTM3NS4xNzkxMzA5NzAx%2A_ga_9BBZL6TFYQ%2AczE3OTEzMjM3NDgkbzQkZzAkdDE3OTEzMjM3NDgkajYwJGwwJGg3MDA3Njc0MTA.';

export const WhatWeOfferAccordion: React.FC<WhatWeOfferAccordionProps> = ({
  onOpenApply,
  onOpenProgrammesPage,
  onOpenCampusLifePage,
  onScrollTo,
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const cards: OfferCard[] = [
    {
      id: 1,
      image: '/images/offer-1.jpg',
      fallbackImage: '/assets/campus/13_hero_sunset_campus.jpg',
      title: 'International Office',
      collapsedTitle: 'International Office',
      description:
        'Connecting UCP Bahawalpur students to prestigious global partner universities, international exchange programmes, overseas scholarships, and worldwide research collaborations.',
      badge: 'Global Linkages & Exchange',
      icon: Globe,
      actionText: 'Visit International Office',
      externalLink: INTERNATIONAL_OFFICE_URL,
    },
    {
      id: 2,
      image: '/images/offer-2.jpg',
      fallbackImage: '/assets/campus/11_academics_classroom.jpg',
      title: 'Exceptional Faculty',
      collapsedTitle: 'Exceptional Faculty',
      description:
        'Learn from highly qualified and experienced faculty comprising PhD scholars, renowned industry mentors, and distinguished educators dedicated to personalized mentorship and academic rigor.',
      badge: 'Distinguished Mentors',
      icon: GraduationCap,
      actionText: 'Meet Our Faculty',
      targetId: 'faculty-section',
    },
    {
      id: 3,
      image: '/images/offer-3.jpg',
      fallbackImage: '/assets/campus/10_campus_sunlit_hallway.jpg',
      title: 'Modern Learning',
      collapsedTitle: 'Modern Learning',
      description:
        'Well-equipped computing laboratories, high-tech science facilities, and an expansive digital library designed for research, collaborative innovation, and holistic intellectual development.',
      badge: 'Smart Classrooms & Labs',
      icon: Laptop,
      actionText: 'Explore Facilities',
      targetId: 'facilities-section',
    },
    {
      id: 4,
      image: '/images/offer-4.jpg',
      fallbackImage: '/assets/campus/8_campus_life_courtyard.jpg',
      title: 'Holistic Development',
      collapsedTitle: 'Holistic Development',
      description:
        'Comprehensive focus on character building, leadership mentoring, ethics, and personality grooming that transform aspiring students into principled professionals and community leaders.',
      badge: 'Character & Leadership',
      icon: BookOpen,
      actionText: 'Discover Programmes',
      targetId: 'faculties-section',
    },
    {
      id: 5,
      image: '/images/offer-5.jpg',
      fallbackImage: '/assets/campus/6_campus_life_decorated_corridor.jpg',
      title: 'Co-curricular Activities',
      collapsedTitle: 'Co-curricular Activities',
      description:
        'A wide range of sports leagues, debating societies, arts councils, and social development clubs fostering physical vitality, creative expression, and lifelong friendships.',
      badge: 'Societies & Sports',
      icon: Activity,
      actionText: 'Experience Campus Life',
      targetId: 'campus-life',
    },
  ];

  const handleAction = (card: OfferCard, e: React.MouseEvent) => {
    e.stopPropagation();
    if (card.externalLink) {
      window.open(card.externalLink, '_blank', 'noopener,noreferrer');
      return;
    }
    if (card.targetId === 'campus-life' && onOpenCampusLifePage) {
      onOpenCampusLifePage();
      return;
    }
    if (card.targetId === 'faculties-section' && onOpenProgrammesPage) {
      onOpenProgrammesPage();
      return;
    }
    if (card.targetId && onScrollTo) {
      onScrollTo(card.targetId);
      return;
    }
    if (onOpenApply) {
      onOpenApply();
    }
  };

  const handleCardClick = (index: number, card: OfferCard) => {
    if (activeIndex === index && card.externalLink) {
      window.open(card.externalLink, '_blank', 'noopener,noreferrer');
      return;
    }
    setActiveIndex(index);
  };

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden" id="what-we-offer">
      {/* Background Accent Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#0F2C52] blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#a30f16] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-8 md:mb-10 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F2C52]/5 text-[#0F2C52] text-xs font-semibold tracking-wide uppercase mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#a30f16]" />
            Academic Excellence & Campus Life
          </div>
          <h2
            className="text-[32px] font-bold text-[#0F172A] tracking-tight leading-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            What we offer for you
          </h2>
          <p className="text-[13px] text-[#64748B] mt-2 max-w-2xl leading-relaxed font-sans">
            At UCP Bahawalpur, we are dedicated to providing our students with a holistic educational experience that seamlessly blends academic rigor, state-of-the-art facilities, and transformative co-curricular development.
          </p>
        </div>

        {/* Main Expanding Accordion Gallery */}
        <div className="w-full">
          <div
            className="flex flex-col md:flex-row gap-[12px] w-full md:h-[420px]"
            role="region"
            aria-label="What we offer accordion gallery"
          >
            {cards.map((card, index) => {
              const isExpanded = activeIndex === index;
              const IconComponent = card.icon;

              return (
                <div
                  key={card.id}
                  onClick={() => handleCardClick(index, card)}
                  onMouseEnter={() => setActiveIndex(index)}
                  style={{
                    flexGrow: isExpanded ? 5.2 : 1,
                    flexBasis: isExpanded ? '520px' : '90px',
                    transition:
                      'flex-grow 920ms cubic-bezier(0.22, 1, 0.36, 1), flex-basis 920ms cubic-bezier(0.22, 1, 0.36, 1), height 920ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 700ms ease, border-color 700ms ease',
                  }}
                  className={`
                    relative rounded-[16px] overflow-hidden cursor-pointer select-none
                    shadow-[0_8px_24px_rgba(15,23,42,0.08)] hover:shadow-[0_18px_38px_rgba(15,44,82,0.2)]
                    h-[80px] md:h-full
                    ${
                      isExpanded
                        ? 'h-[360px] md:h-full md:min-w-[360px] md:max-w-[620px] ring-2 ring-[#0F2C52]/30'
                        : 'h-[80px] md:h-full md:w-[90px] md:min-w-[85px] md:max-w-[105px]'
                    }
                  `}
                >
                  {/* Background Image with graceful smooth zoom: scale 1.08 when collapsed -> 1.0 when expanded */}
                  <img
                    src={card.image}
                    alt={card.title}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== card.fallbackImage) {
                        target.src = card.fallbackImage;
                      }
                    }}
                    className={`
                      absolute inset-0 w-full h-full object-cover object-center
                      transition-transform duration-[1100ms] ease-[cubic-bezier(0.22,1,0.36,1)]
                      ${isExpanded ? 'scale-100' : 'scale-108'}
                    `}
                  />

                  {/* Overlays */}
                  {/* 1. Base dark overlay when collapsed (0.4) */}
                  <div
                    className={`
                      absolute inset-0 transition-opacity duration-700 ease-out
                      ${isExpanded ? 'opacity-0 pointer-events-none' : 'bg-black/40 opacity-100'}
                    `}
                  />

                  {/* 2. Expanded Gradient: Left gradient overlay bg linear-gradient(90deg, rgba(15,44,82,0.88) 0%, rgba(15,44,82,0.6) 55%, transparent 100%) */}
                  <div
                    className={`
                      absolute inset-0 transition-opacity duration-800 ease-in-out pointer-events-none
                      ${isExpanded ? 'opacity-100' : 'opacity-0'}
                    `}
                    style={{
                      background:
                        'linear-gradient(90deg, rgba(15,44,82,0.88) 0%, rgba(15,44,82,0.6) 55%, transparent 100%)',
                    }}
                  />

                  {/* Collapsed State: Vertical rotated text bottom centered on desktop */}
                  <div
                    className={`
                      absolute inset-0 flex items-center justify-center transition-opacity duration-500
                      ${isExpanded ? 'opacity-0 pointer-events-none' : 'opacity-100'}
                    `}
                  >
                    {/* Desktop Vertical Text (Rotated bottom-to-top) */}
                    <div className="hidden md:flex flex-col items-center justify-end h-full pb-8 w-full">
                      <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-4 shadow-sm border border-white/20">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span
                        className="text-white text-[13.5px] font-semibold tracking-wide whitespace-nowrap drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)] select-none"
                        style={{
                          writingMode: 'vertical-rl',
                          transform: 'rotate(180deg)',
                        }}
                      >
                        {card.collapsedTitle}
                      </span>
                    </div>

                    {/* Mobile Horizontal Bar when collapsed */}
                    <div className="flex md:hidden items-center justify-between w-full px-5 h-full bg-black/35 backdrop-blur-[2px]">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white border border-white/20">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="text-white font-semibold text-sm tracking-wide">
                          {card.title}
                        </span>
                      </div>
                      <span className="text-xs text-white/70 font-medium px-2 py-0.5 rounded-full bg-white/10">
                        Expand
                      </span>
                    </div>
                  </div>

                  {/* Expanded Content with Impressive Staggered Flow Animation */}
                  <AnimatePresence mode="wait">
                    {isExpanded && (
                      <motion.div
                        key={`content-${card.id}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.2 } }}
                        transition={{ duration: 0.4 }}
                        className="relative z-10 h-full flex flex-col justify-between p-6 sm:p-[28px]"
                      >
                        {/* Top Tag & Slide Number */}
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                          className="flex items-center justify-between"
                        >
                          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium tracking-wide">
                            <IconComponent className="w-3.5 h-3.5 text-[#F59E0B]" />
                            <span>{card.badge}</span>
                          </div>
                          <span className="text-white/40 text-xs font-mono font-semibold">
                            0{card.id} / 05
                          </span>
                        </motion.div>

                        {/* Left side Content (~60% width on desktop) */}
                        <div className="max-w-[95%] md:max-w-[62%] my-auto pt-2">
                          <motion.h3
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
                            className="text-[20px] md:text-[22px] font-bold text-white mb-2 leading-snug drop-shadow-sm tracking-tight"
                            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                          >
                            {card.title}
                          </motion.h3>

                          {/* Subtle golden flow divider */}
                          <motion.div
                            initial={{ width: 0, opacity: 0 }}
                            animate={{ width: 44, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="h-[2px] bg-gradient-to-r from-[#F59E0B] to-transparent rounded-full mb-3"
                          />

                          <motion.p
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.55, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
                            className="text-[13px] text-white/85 leading-relaxed line-clamp-4 font-sans drop-shadow-sm"
                          >
                            {card.description}
                          </motion.p>

                          {/* Interactive Button */}
                          <motion.div
                            initial={{ opacity: 0, y: 12, scale: 0.96 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.42, ease: [0.22, 1, 0.36, 1] }}
                            className="mt-4 pt-1"
                          >
                            <button
                              type="button"
                              onClick={(e) => handleAction(card, e)}
                              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white text-[#0F2C52] text-xs font-semibold hover:bg-[#F8FAFC] active:scale-95 transition-all shadow-md group cursor-pointer"
                            >
                              <span>{card.actionText}</span>
                              {card.externalLink ? (
                                <ExternalLink className="w-3.5 h-3.5 text-[#a30f16] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                              ) : (
                                <ArrowRight className="w-3.5 h-3.5 text-[#a30f16] group-hover:translate-x-1 transition-transform" />
                              )}
                            </button>
                          </motion.div>
                        </div>

                        {/* Bottom Indicator */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.48 }}
                          className="flex items-center gap-2 text-[11px] text-white/60"
                        >
                          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                          <span>University of Central Punjab • Bahawalpur Campus</span>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Dots below for Mobile */}
          <div
            className="flex md:hidden justify-center items-center gap-2 mt-5"
            role="tablist"
            aria-label="Gallery slides"
          >
            {cards.map((card, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={card.id}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to ${card.title}`}
                  className={`
                    transition-all duration-300 rounded-full cursor-pointer
                    ${
                      isActive
                        ? 'w-7 h-2.5 bg-[#0F2C52] shadow-sm'
                        : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                    }
                  `}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferAccordion;
