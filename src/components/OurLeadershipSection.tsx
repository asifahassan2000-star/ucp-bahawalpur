import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Quote } from 'lucide-react';

const EASE_CUBIC: [number, number, number, number] = [0.22, 1, 0.36, 1];

interface LeaderProfile {
  id: string;
  number: string;
  name: string;
  designation: string;
  subRole?: string;
  portraitUrl: string;
  fallbackUrl?: string;
  biography: string;
  message: string;
}

const LEADERSHIP_PROFILES: LeaderProfile[] = [
  {
    id: 'mian-amir-mahmood',
    number: '01',
    name: 'Mian Amir Mahmood',
    designation: 'Founder, University of Central Punjab & Punjab Group of Colleges',
    subRole: 'Chairman, Board of Governors',
    portraitUrl: '/assets/campus/chairman_mian_amir_mahmood_portrait.webp',
    fallbackUrl: '/assets/campus/chairman_mian_amir_mahmood.webp',
    biography:
      'Associated with the founding of the Punjab Group of Colleges and has served as a prominent educationist and institutional leader across Pakistan since 1985. As Chairman of the Board of Governors since UCP’s charter in 1999, his vision guides higher educational accessibility, academic rigor, and state-of-the-art campus learning infrastructure across the country.',
    message:
      'We aim to make our students adaptable to change so that they may thrive in a rapidly evolving job market; critical thinkers to identify problems in our society, and creative to come up with pragmatic solutions.'
  },
  {
    id: 'dr-hammad-naveed',
    number: '02',
    name: 'Dr. Hammad Naveed',
    designation: 'Pro-Rector, University of Central Punjab',
    subRole: 'Executive Academic & Research Leadership',
    portraitUrl: '/assets/campus/3_pro_rector_hammad_naveed_portrait.jpg',
    biography:
      'A distinguished scholar and Fulbright alumnus holding a Ph.D. in Bioinformatics from the University of Illinois at Chicago with post-doctoral research tenure at CAS-MPG and KAUST. Prior to his leadership at UCP, Dr. Naveed served as Director of FAST Lahore, championing computational sciences, interdisciplinary curricula, and transformative academic governance.',
    message:
      'Our educational philosophy centers on research excellence, entrepreneurial mindset, and global competency — creating an intellectual environment where students turn ideas into impactful societal solutions.'
  },
  {
    id: 'prof-dr-hamid-iqbal',
    number: '03',
    name: 'Prof. Dr. Hamid Iqbal',
    designation: 'Director, UCP Bahawalpur Campus',
    subRole: 'Director, PGC & UCP Bahawalpur Educational Cluster',
    portraitUrl: '/assets/campus/1_director_hamid_iqbal_portrait.jpg',
    fallbackUrl: '/assets/campus/1_director_hamid_iqbal.jpg',
    biography:
      'Providing strategic academic and operational leadership at UCP Bahawalpur and across the regional educational network. Prof. Dr. Hamid Iqbal spearheads advanced technological laboratories, university-industry linkages, and academic modernization, bringing prestigious university learning to the Southern Punjab corridor.',
    message:
      'UCP Bahawalpur is committed to expanding world-class academic horizons across Southern Punjab, cultivating exceptional graduates who lead with ethical integrity and professional mastery.'
  },
  {
    id: 'prof-dr-aurangzaib-virk',
    number: '04',
    name: 'Prof. Dr. Aurangzaib Virk',
    designation: 'Principal & Academic Coordinator, UCP Bahawalpur Campus',
    subRole: 'Head of Academic Governance & Discipline Boards',
    portraitUrl: '/assets/campus/2_principal_aurangzaib_virk_portrait.jpg',
    fallbackUrl: '/assets/campus/2_principal_aurangzaib_virk.jpg',
    biography:
      'Overseeing academic administration, examination boards, and student development at UCP Bahawalpur Campus. His governance champions rigorous classroom standards, personalized mentorship, and continuous faculty advancement across all undergraduate and associate degree faculties.',
    message:
      'True academic governance thrives on rigorous scholarship, unwavering personal discipline, and close student mentorship that turns ambition into meaningful achievement.'
  }
];

interface LeaderRowProps {
  leader: LeaderProfile;
  index: number;
  total: number;
}

const LeaderRow: React.FC<LeaderRowProps> = ({ leader, index, total }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Subtle scroll-linked movement for the image: moves approx 15px relative to text
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const imageParallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [14, -14]
  );

  // Alternating layout on large screens:
  // Leader 01 (index 0): Large image LEFT, Text RIGHT
  // Leader 02 (index 1): Text LEFT, Large image RIGHT
  // Leader 03 (index 2): Large image LEFT, Text RIGHT
  // Leader 04 (index 3): Text LEFT, Large image RIGHT
  const isImageLeft = index % 2 === 0;

  // Staggered text reveal variants
  const textContainerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.12
      }
    }
  };

  const textItemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: EASE_CUBIC
      }
    }
  };

  const imageEntranceVariants: Variants = {
    hidden: { opacity: 0.85, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: EASE_CUBIC
      }
    }
  };

  return (
    <div ref={containerRef} className="w-full">
      {/* Editorial Profile Experience: 80-100vh of vertical presence */}
      <section
        aria-label={`${leader.name} Profile`}
        className="min-h-[75vh] lg:min-h-[85vh] flex items-center py-12 sm:py-16 lg:py-20"
      >
        <div
          className={`w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 flex flex-col ${
            isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
          } items-center justify-between gap-12 sm:gap-16 lg:gap-20 xl:gap-24`}
        >
          {/* =========================================================================
              EDITORIAL PORTRAIT
              Occupy 48–52% of available width with generous breathing room
              Subtle hover movement: scale 1.015
              Subtle scroll parallax: 10–20px
              ========================================================================= */}
          <div className="w-full lg:w-[50%] xl:w-[49%] shrink-0">
            <motion.div
              variants={imageEntranceVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              style={{ y: imageParallaxY }}
              className="relative w-full max-w-[560px] mx-auto lg:max-w-none aspect-[4/5] rounded-[8px] overflow-hidden bg-slate-100 shadow-[0_20px_45px_rgba(10,25,49,0.08)] border border-slate-200/90 group"
            >
              <img
                src={leader.portraitUrl}
                alt={leader.name}
                loading={index < 2 ? 'eager' : 'lazy'}
                decoding="async"
                className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.018]"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (leader.fallbackUrl && target.src !== leader.fallbackUrl) {
                    target.src = leader.fallbackUrl;
                  }
                }}
              />
              {/* Refined subtle border overlay for crisp editorial boundary */}
              <div className="absolute inset-0 border border-[#0A1931]/10 pointer-events-none rounded-[8px]" />
            </motion.div>
          </div>

          {/* =========================================================================
              EDITORIAL CONTENT
              Occupy 38–42% of available width
              Staggered reveal: Label -> Name -> Title -> Bio -> Message
              ========================================================================= */}
          <motion.div
            variants={textContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="w-full lg:w-[44%] xl:w-[42%] flex flex-col justify-center space-y-6 lg:space-y-7"
          >
            {/* 1. Small Leadership Label */}
            <motion.div variants={textItemVariants} className="flex items-center gap-2.5">
              <span className="w-4 h-[2px] bg-[#a30f16]" aria-hidden="true" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.22em] text-[#a30f16]">
                {leader.number} — LEADERSHIP
              </span>
            </motion.div>

            {/* 2. Leader Name */}
            <motion.div variants={textItemVariants}>
              <h3 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl lg:text-[42px] xl:text-[46px] font-bold text-[#0A1931] tracking-tight leading-[1.12]">
                {leader.name}
              </h3>
            </motion.div>

            {/* 3. Position / Title */}
            <motion.div variants={textItemVariants} className="space-y-1">
              <p className="text-sm sm:text-[15px] font-semibold text-[#0A1931] tracking-normal font-sans">
                {leader.designation}
              </p>
              {leader.subRole && (
                <p className="text-xs uppercase tracking-wider font-semibold text-[#a30f16]">
                  {leader.subRole}
                </p>
              )}
            </motion.div>

            {/* 4. Concise Professional Biography */}
            <motion.div variants={textItemVariants}>
              <p className="text-[14.5px] sm:text-[15.5px] text-slate-600 leading-[1.8] font-sans">
                {leader.biography}
              </p>
            </motion.div>

            {/* 5. Separate Subtle Leadership Message Area */}
            <motion.div
              variants={textItemVariants}
              className="pt-6 border-t border-[#0A1931]/12 space-y-3.5"
            >
              <div className="flex items-center gap-2">
                <Quote size={20} className="text-[#a30f16]" aria-hidden="true" />
                <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#0A1931]/70 font-semibold">
                  Leadership Message
                </span>
              </div>
              <blockquote className="font-['Playfair_Display',serif] text-[16px] sm:text-[17.5px] italic text-[#0A1931] leading-relaxed pl-3 border-l-2 border-[#a30f16]">
                “{leader.message}”
              </blockquote>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          BETWEEN LEADERS DIVIDER & NUMERICAL INDICATOR
          Significant breathing space, thin UCP navy divider, indicator 01 / 04
          ========================================================================= */}
      {index < total - 1 && (
        <div className="w-full my-12 sm:my-20 lg:my-24 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 flex items-center justify-between gap-6 select-none">
          <div className="h-px bg-[#0A1931]/12 flex-1" />
          <span className="font-mono text-xs sm:text-[13px] font-bold tracking-[0.25em] text-[#0A1931]/45 px-3">
            {leader.number} / {String(total).padStart(2, '0')}
          </span>
          <div className="h-px bg-[#0A1931]/12 flex-1" />
        </div>
      )}
    </div>
  );
};

interface OurLeadershipSectionProps {
  onOpenApply?: () => void;
  onScrollTo?: (sectionId: string) => void;
}

export const OurLeadershipSection: React.FC<OurLeadershipSectionProps> = () => {
  return (
    <section
      id="leadership-section"
      className="relative bg-white text-[#0A1931] py-24 sm:py-32 lg:py-40 border-t border-slate-200/80 overflow-hidden select-none"
      aria-labelledby="leadership-heading"
    >
      {/* Anchor alias so existing links to chairman-section also scroll smoothly */}
      <div id="chairman-section" className="absolute -top-20" aria-hidden="true" />

      {/* =========================================================================
          LEADERSHIP INTRO
          Minimal, spacious and elegant section introduction
          ========================================================================= */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: EASE_CUBIC }}
        className="max-w-4xl mx-auto text-center mb-20 sm:mb-28 lg:mb-36 px-5 sm:px-8"
      >
        <div className="inline-flex items-center gap-2 mb-4">
          <span className="w-4 h-[2px] bg-[#a30f16]" aria-hidden="true" />
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#a30f16] font-mono">
            LEADERSHIP
          </span>
          <span className="w-4 h-[2px] bg-[#a30f16]" aria-hidden="true" />
        </div>

        <h2
          id="leadership-heading"
          className="font-['Playfair_Display',serif] text-3xl sm:text-4xl lg:text-5xl xl:text-[54px] font-bold text-[#0A1931] tracking-tight leading-[1.14] mb-6"
        >
          Leadership with Vision. Excellence with Purpose.
        </h2>

        <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-sans max-w-2xl mx-auto">
          At UCP Bahawalpur, leadership is rooted in academic excellence, responsible guidance and a commitment to creating meaningful opportunities for students.
        </p>
      </motion.header>

      {/* =========================================================================
          FOUR LEADERS — DISTINCT FULL-WIDTH EDITORIAL EXPERIENCES
          ========================================================================= */}
      <div className="space-y-4">
        {LEADERSHIP_PROFILES.map((leader, index) => (
          <LeaderRow
            key={leader.id}
            leader={leader}
            index={index}
            total={LEADERSHIP_PROFILES.length}
          />
        ))}
      </div>

      {/* =========================================================================
          SECTION TRANSITION
          Refined closing statement with generous whitespace
          ========================================================================= */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.75, ease: EASE_CUBIC }}
        className="mt-28 sm:mt-36 lg:mt-44 pt-16 sm:pt-20 border-t border-[#0A1931]/10 text-center max-w-3xl mx-auto px-6"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-[#a30f16] mx-auto mb-6" aria-hidden="true" />
        <blockquote className="font-['Playfair_Display',serif] text-2xl sm:text-3xl lg:text-[32px] font-medium italic text-[#0A1931] leading-relaxed">
          “Leadership is not simply about direction — it is about creating a future worth moving toward.”
        </blockquote>
        <p className="mt-4 font-mono text-[11px] sm:text-xs uppercase tracking-[0.24em] text-slate-500">
          University of Central Punjab · Bahawalpur Campus
        </p>
      </motion.div>
    </section>
  );
};

export default OurLeadershipSection;
