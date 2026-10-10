import React from 'react';
import { Quote } from 'lucide-react';

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
  // Alternating layout on large screens:
  // Leader 01 (index 0): Large image LEFT, Text RIGHT
  // Leader 02 (index 1): Text LEFT, Large image RIGHT
  // Leader 03 (index 2): Large image LEFT, Text RIGHT
  // Leader 04 (index 3): Text LEFT, Large image RIGHT
  const isImageLeft = index % 2 === 0;

  return (
    <div className="w-full">
      {/* Editorial Profile Experience: Naturally proportioned on mobile, stately on desktop */}
      <section
        aria-label={`${leader.name} Profile`}
        className="py-8 sm:py-12 lg:py-20 lg:min-h-[75vh] flex items-center"
      >
        <div
          className={`w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 flex flex-col ${
            isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
          } items-center justify-between gap-8 sm:gap-12 lg:gap-16 xl:gap-24`}
        >
          {/* =========================================================================
              EDITORIAL PORTRAIT
              Clear, prominent, perfectly centered on mobile with crisp boundaries
              ========================================================================= */}
          <div className="w-full lg:w-[48%] xl:w-[47%] shrink-0">
            <div
              className="relative w-full max-w-[340px] sm:max-w-[440px] lg:max-w-none mx-auto aspect-[4/5] rounded-[8px] overflow-hidden bg-slate-100 shadow-[0_12px_36px_rgba(10,25,49,0.08)] border border-slate-200/90 group"
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
            </div>
          </div>

          {/* =========================================================================
              EDITORIAL CONTENT
              Always 100% visible, beautifully spaced and readable on mobile
              ========================================================================= */}
          <div
            className="w-full lg:w-[48%] xl:w-[46%] flex flex-col justify-center space-y-4 sm:space-y-5 lg:space-y-6"
          >
            {/* 1. Small Leadership Label */}
            <div className="flex items-center gap-2.5">
              <span className="w-4 h-[2px] bg-[#a30f16]" aria-hidden="true" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-[0.22em] text-[#a30f16]">
                {leader.number} — LEADERSHIP
              </span>
            </div>

            {/* 2. Leader Name */}
            <div>
              <h3 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl lg:text-[40px] xl:text-[44px] font-bold text-[#0A1931] tracking-tight leading-[1.15]">
                {leader.name}
              </h3>
            </div>

            {/* 3. Position / Title */}
            <div className="space-y-1">
              <p className="text-sm sm:text-[15px] font-semibold text-[#0A1931] tracking-normal font-sans">
                {leader.designation}
              </p>
              {leader.subRole && (
                <p className="text-xs uppercase tracking-wider font-semibold text-[#a30f16]">
                  {leader.subRole}
                </p>
              )}
            </div>

            {/* 4. Concise Professional Biography */}
            <div>
              <p className="text-[13.5px] sm:text-[15px] text-slate-600 leading-[1.75] font-sans">
                {leader.biography}
              </p>
            </div>

            {/* 5. Separate Subtle Leadership Message Area */}
            <div
              className="pt-4 sm:pt-5 border-t border-[#0A1931]/12 space-y-2.5 sm:space-y-3"
            >
              <div className="flex items-center gap-2">
                <Quote size={18} className="text-[#a30f16]" aria-hidden="true" />
                <span className="text-[10.5px] sm:text-[11px] font-mono uppercase tracking-[0.2em] text-[#0A1931]/70 font-semibold">
                  Leadership Message
                </span>
              </div>
              <blockquote className="font-['Playfair_Display',serif] text-[15px] sm:text-[16.5px] italic text-[#0A1931] leading-relaxed pl-3 border-l-2 border-[#a30f16]">
                “{leader.message}”
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BETWEEN LEADERS DIVIDER & NUMERICAL INDICATOR
          Significant breathing space, thin UCP navy divider, indicator 01 / 04
          ========================================================================= */}
      {index < total - 1 && (
        <div className="w-full my-8 sm:my-14 lg:my-20 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 flex items-center justify-between gap-6 select-none">
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
      className="relative bg-white text-[#0A1931] py-14 sm:py-20 lg:py-32 border-t border-slate-200/80 overflow-hidden"
      aria-labelledby="leadership-heading"
    >
      {/* Anchor alias so existing links to chairman-section also scroll smoothly */}
      <div id="chairman-section" className="absolute -top-20" aria-hidden="true" />

      {/* =========================================================================
          LEADERSHIP INTRO
          Minimal, spacious and elegant section introduction
          ========================================================================= */}
      <header
        className="max-w-4xl mx-auto text-center mb-10 sm:mb-16 lg:mb-24 px-4 sm:px-8"
      >
        <div className="inline-flex items-center gap-2 mb-3">
          <span className="w-4 h-[2px] bg-[#a30f16]" aria-hidden="true" />
          <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#a30f16] font-mono">
            LEADERSHIP
          </span>
          <span className="w-4 h-[2px] bg-[#a30f16]" aria-hidden="true" />
        </div>

        <h2
          id="leadership-heading"
          className="font-['Playfair_Display',serif] text-2xl sm:text-4xl lg:text-5xl xl:text-[52px] font-bold text-[#0A1931] tracking-tight leading-[1.15] mb-4 sm:mb-6"
        >
          Leadership with Vision. Excellence with Purpose.
        </h2>

        <p className="text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed font-sans max-w-2xl mx-auto">
          At UCP Bahawalpur, leadership is rooted in academic excellence, responsible guidance and a commitment to creating meaningful opportunities for students.
        </p>
      </header>

      {/* =========================================================================
          FOUR LEADERS — DISTINCT FULL-WIDTH EDITORIAL EXPERIENCES
          ========================================================================= */}
      <div className="space-y-2 sm:space-y-4">
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
      <div
        className="mt-14 sm:mt-24 lg:mt-32 pt-10 sm:pt-16 border-t border-[#0A1931]/10 text-center max-w-3xl mx-auto px-6"
      >
        <div className="w-1.5 h-1.5 rounded-full bg-[#a30f16] mx-auto mb-4 sm:mb-6" aria-hidden="true" />
        <blockquote className="font-['Playfair_Display',serif] text-xl sm:text-2xl lg:text-[30px] font-medium italic text-[#0A1931] leading-relaxed">
          “Leadership is not simply about direction — it is about creating a future worth moving toward.”
        </blockquote>
        <p className="mt-3 sm:mt-4 font-mono text-[10.5px] sm:text-xs uppercase tracking-[0.24em] text-slate-500">
          University of Central Punjab · Bahawalpur Campus
        </p>
      </div>
    </section>
  );
};

export default OurLeadershipSection;
