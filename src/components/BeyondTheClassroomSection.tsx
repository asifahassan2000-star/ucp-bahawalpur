import React from 'react';
import { ArrowRight, ArrowUp } from 'lucide-react';
import { AnimatedEventSection } from './AnimatedEventSection';

// Authentic project images from src/assets/images
import businessSeminarImg from '../assets/images/academic_business_seminar_1790317693556.jpg';
import computingLabImg from '../assets/images/academic_computing_lab_1790317681008.jpg';
import scienceLabImg from '../assets/images/academic_science_lab_1790317707417.jpg';
import libraryImg from '../assets/images/academic_humanities_library_1790317720335.jpg';
import studentPortraitImg from '../assets/images/bs_psychology_user.webp';
import bbaImg from '../assets/images/program_bba.webp';
import cyberSecurityImg from '../assets/images/program_cyber_security.jpg';
import englishImg from '../assets/images/program_bs_english.jpg';
import aiImg from '../assets/images/program_adp_ai.jpg';
import zoologyImg from '../assets/images/program_bs_zoology.webp';
import nawabImg from '../assets/images/nawab_of_bahawalpur.jpg';

// Authentic campus assets from public/assets/campus
const classroomImg = '/assets/campus/11_academics_classroom.jpg';
const courtyardImg = '/assets/campus/8_campus_life_courtyard.jpg';
const lawnImg = '/assets/campus/7_about_campus_building_lawn.jpg';
const corridorImg = '/assets/campus/6_campus_life_decorated_corridor.jpg';
const nightCampusImg = '/assets/campus/3_campus_after_hours_night.jpg';
const redCarpetImg = '/assets/campus/4_admissions_entrance_red_carpet.jpg';
const closingDramaticImg = '/assets/campus/14_closing_dramatic_campus.jpg';
const exteriorArchImg = '/assets/campus/12_about_architecture_exterior.jpg';
const sunlitHallwayImg = '/assets/campus/10_campus_sunlit_hallway.jpg';
const grandStaircaseImg = '/assets/campus/9_facilities_grand_staircase.jpg';

interface BeyondTheClassroomProps {
  onScrollToCampusLife?: () => void;
  onOpenCampusLifePage?: () => void;
}

export const BeyondTheClassroomSection: React.FC<BeyondTheClassroomProps> = ({
  onScrollToCampusLife,
  onOpenCampusLifePage,
}) => {
  const handleExploreCampusLife = () => {
    if (onOpenCampusLifePage) {
      onOpenCampusLifePage();
    } else if (onScrollToCampusLife) {
      onScrollToCampusLife();
    } else {
      const elem = document.getElementById('campus-section');
      if (elem) {
        elem.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <section 
      id="beyond-the-classroom-section"
      className="relative py-[100px] bg-[#FDFBF7] text-[#0F2C61] border-b border-[#0F2C61]/10 select-none selection:bg-[#0F2C61] selection:text-white"
      aria-labelledby="beyond-classroom-heading"
    >
      {/* Subtle Academic Grid Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(#0F2C61 1px, transparent 1px)',
          backgroundSize: '36px 36px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* ====================================================================
            SECTION HEADER — Editorial University Magazine Title
            ==================================================================== */}
        <header className="max-w-3xl mb-24 sm:mb-32">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono font-bold uppercase tracking-[0.28em] text-[#0F2C61]/80">
              EDITORIAL ARCHIVE · STUDENT EXPERIENCES
            </span>
            <span className="h-px w-10 bg-[#0F2C61]/30" aria-hidden="true" />
          </div>

          <h2
            id="beyond-classroom-heading"
            className="text-3xl sm:text-5xl lg:text-[56px] font-serif font-bold text-[#0F2C61] tracking-tight leading-[1.12] mb-6"
            style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
          >
            BEYOND THE CLASSROOM
          </h2>

          <p 
            className="text-lg sm:text-xl text-slate-700 font-serif italic leading-relaxed border-l-2 border-[#0F2C61]/40 pl-4 sm:pl-5 mb-4"
            style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
          >
            Experiences that shape student life beyond academics.
          </p>

          <p 
            className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans max-w-2xl"
            style={{ fontFamily: "'Inter', 'Source Sans 3', system-ui, sans-serif" }}
          >
            A curated photographic retrospective celebrating the dynamic collegiate journey at UCP Bahawalpur — from intellectual symposiums and exploratory excursions to communal celebrations that endure for a lifetime.
          </p>
        </header>

        {/* ====================================================================
            7 REUSABLE ANIMATED EVENT SECTIONS (Bento Grid, Ivy League Style)
            ==================================================================== */}
        
        {/* 1. Seminar & Learning - reverse=false */}
        <AnimatedEventSection
          title="Seminar & Learning"
          categoryNumber="01"
          categoryLabel="SEMINARS"
          description="Through keynote symposiums, executive workshops, guest lectures, and research seminars, students engage with innovative perspectives and practical industry insights beyond standard curriculum."
          reverse={false}
          highlights={['Keynote Symposiums', 'Executive Workshops', 'Industry Dialogues']}
          images={[
            {
              src: businessSeminarImg,
              alt: 'Business keynote seminar in main auditorium at UCP Bahawalpur',
              caption: 'Keynote Symposium in Executive Auditorium',
              tag: 'ACADEMIC DIALOGUE',
            },
            {
              src: computingLabImg,
              alt: 'Computing workshop and hackathon lab',
              caption: 'Collaborative Computing & Tech Labs',
            },
            {
              src: classroomImg,
              alt: 'Interactive seminar classroom discussions',
              caption: 'Active Learning & Interactive Forums',
            },
          ]}
        />

        {/* 2. Community & Memories - reverse=true */}
        <AnimatedEventSection
          title="Community & Memories"
          categoryNumber="02"
          categoryLabel="COMMUNITY"
          description="University life is also about the people, friendships, celebrations, and shared moments that become lasting memories across sunlit quads and historic collegiate halls."
          reverse={true}
          highlights={['Lifelong Friendships', 'Open Gathering Quads', 'Shared Milestones']}
          images={[
            {
              src: courtyardImg,
              alt: 'Central courtyard gathering of students',
              caption: 'Central Gathering Courtyard & Quads',
              tag: 'CAMPUS LIFE',
            },
            {
              src: nightCampusImg,
              alt: 'Illuminated campus after hours',
              caption: 'Evening Reflections & Illuminated Quads',
            },
            {
              src: libraryImg,
              alt: 'Humanities library study circle',
              caption: 'Collaborative Discourse in Humanities Library',
            },
          ]}
        />

        {/* 3. Student Engagement - reverse=false */}
        <AnimatedEventSection
          title="Student Engagement"
          categoryNumber="03"
          categoryLabel="STUDENT LIFE"
          description="From campus activities to student-led events, every experience contributes to a vibrant and connected university community governed by active collegiate societies."
          reverse={false}
          highlights={['65+ Societies', 'Championship Debates', 'Leadership Councils']}
          images={[
            {
              src: corridorImg,
              alt: 'Decorated celebration corridor and student exhibitions',
              caption: 'Themed Exhibition Corridors & Traditions',
              tag: 'SOCIETIES',
            },
            {
              src: studentPortraitImg,
              alt: 'Student council executive portrait',
              caption: 'Student Executive Governance & Voice',
            },
            {
              src: bbaImg,
              alt: 'Business presentations and student council projects',
              caption: 'Leadership Case Studies & Strategy Forums',
            },
          ]}
        />

        {/* 4. Village Tour - reverse=true */}
        <AnimatedEventSection
          title="Village Tour & Regional Excursions"
          categoryNumber="04"
          categoryLabel="EXCURSIONS"
          description="Educational trips and community village immersions connect students with Southern Punjab's rich architectural heritage, rural livelihoods, and time-honored cultural legacies."
          reverse={true}
          highlights={['Rural Community Visits', 'Regional Heritage', 'Field Expeditions']}
          images={[
            {
              src: lawnImg,
              alt: 'Expansive campus grounds and excursion assembly',
              caption: 'Regional Excursion Assembly on South Lawns',
              tag: 'DISCOVERY',
            },
            {
              src: nawabImg,
              alt: 'Historic Bahawalpur regional royal heritage',
              caption: 'Bahawalpur Heritage & Historic Architecture',
            },
            {
              src: exteriorArchImg,
              alt: 'Regional architectural landmarks and field research',
              caption: 'Architectural Field Studies in Cholistan',
            },
          ]}
        />

        {/* 5. Art & Carnival Festival - reverse=false */}
        <AnimatedEventSection
          title="Art & Carnival Festival"
          categoryNumber="05"
          categoryLabel="ARTS & CARNIVAL"
          description="Annual cultural carnivals showcase theatrical drama, fine art galleries, literary recitals, and musical evenings celebrating creative expression and cultural diversity."
          reverse={false}
          highlights={['Theatrical Enactments', 'Fine Arts Galleries', 'Mushaira & Poetry']}
          images={[
            {
              src: englishImg,
              alt: 'Literary Society and theatrical rehearsals',
              caption: 'Dramatic Arts Festival & Literary Circles',
              tag: 'CULTURE',
            },
            {
              src: sunlitHallwayImg,
              alt: 'Sunlit art exhibition pavilion hallway',
              caption: 'Sunlit Visual Art Exhibitions & Galleries',
            },
            {
              src: zoologyImg,
              alt: 'Creative student project installations',
              caption: 'Natural Sciences & Creative Installations',
            },
          ]}
        />

        {/* 6. Winter Gala Festival - reverse=true */}
        <AnimatedEventSection
          title="Winter Gala Festival"
          categoryNumber="06"
          categoryLabel="WINTER GALA"
          description="A signature seasonal tradition bringing together faculty, undergraduates, and alumni for an evening of formal honors, musical performances, and illuminated campus festivities."
          reverse={true}
          highlights={['Formal Honors Ceremony', 'Illuminated Festivities', 'Musical Recitals']}
          images={[
            {
              src: closingDramaticImg,
              alt: 'Winter evening campus panorama and gala assembly',
              caption: 'Grand Winter Gala Assembly & Illuminations',
              tag: 'ANNUAL GALA',
            },
            {
              src: grandStaircaseImg,
              alt: 'Grand staircase reception and formal awards',
              caption: 'Formal Honors Reception & Grand Foyer',
            },
            {
              src: aiImg,
              alt: 'Technology gala showcases and artificial intelligence demonstrations',
              caption: 'Annual Technology Showcase & Gala Demos',
            },
          ]}
        />

        {/* 7. Welcome Party - reverse=false */}
        <AnimatedEventSection
          title="Welcome Party & Matriculation"
          categoryNumber="07"
          categoryLabel="WELCOME PARTY"
          description="An official red-carpet welcome welcoming incoming students into the UCP fraternity with executive addresses, society orientations, and celebratory receptions."
          reverse={false}
          highlights={['Red Carpet Welcome', "Dean's Address", 'Freshman Orientation']}
          images={[
            {
              src: redCarpetImg,
              alt: 'Red carpet entrance welcome for new students',
              caption: 'Official Red-Carpet Matriculation Welcome',
              tag: 'ORIENTATION',
            },
            {
              src: scienceLabImg,
              alt: 'Academic laboratory orientation and discovery induction',
              caption: 'Academic Discovery & Laboratory Induction',
            },
            {
              src: cyberSecurityImg,
              alt: 'Freshmen society orientation and cyber lab introduction',
              caption: 'Student Society Orientation & Welcome Quads',
            },
          ]}
        />

        {/* ====================================================================
            EDITORIAL CONCLUSION & CTA
            ==================================================================== */}
        <div className="pt-20 sm:pt-28 border-t border-[#0F2C61]/10 text-center max-w-2xl mx-auto space-y-6">
          <div className="w-1.5 h-1.5 rounded-full bg-[#0F2C61] mx-auto" aria-hidden="true" />
          
          <p 
            className="text-2xl sm:text-3xl lg:text-4xl text-[#0F2C61] font-serif font-bold italic leading-tight"
            style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
          >
            “Every experience becomes part of the UCP story.”
          </p>

          <span className="block text-xs uppercase tracking-[0.26em] text-slate-500 font-mono">
            University of Central Punjab · Bahawalpur Campus
          </span>

          <div className="pt-4">
            <button
              onClick={handleExploreCampusLife}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#0F2C61] hover:bg-[#0A1D42] text-white font-mono text-xs uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-xl active:scale-95 cursor-pointer group"
            >
              <span>Explore Campus Life</span>
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 text-slate-300" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default BeyondTheClassroomSection;
