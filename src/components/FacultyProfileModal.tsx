import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, BookOpen, GraduationCap, CheckCircle2 } from 'lucide-react';

export interface FacultyProfileModalData {
  id: string | number;
  name: string;
  designation: string;
  department: string;
  highestDegree: string;
  experienceYears?: string;
  experience?: string;
  specialization?: string;
  intro?: string;
  photoUrl: string;
  researchTags?: string[];
}

interface FacultyProfileModalProps {
  faculty: FacultyProfileModalData | null;
  isOpen: boolean;
  onClose: () => void;
}

export const FacultyProfileModal: React.FC<FacultyProfileModalProps> = ({
  faculty,
  isOpen,
  onClose,
}) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!faculty) return null;

  // Derive concise 3 left bullets (Education & Expertise)
  const degreeBullet = faculty.highestDegree;
  const specializationBullet = faculty.specialization 
    ? faculty.specialization 
    : faculty.intro
    ? faculty.intro.replace(/^(Specializes in|Focuses on|Conducts advanced investigations into|Supervises|Researches|Expert in)\s+/i, '').split('.')[0]
    : 'Advanced Higher Education Pedagogy';
  const divisionBullet = faculty.department || 'Academic Division of Advanced Studies';

  // Derive concise 3 right bullets (Experience & Research)
  const expString = faculty.experienceYears || (faculty.experience ? (faculty.experience.match(/\d+\+?\s*Years?/i)?.[0] ? `${faculty.experience.match(/\d+\+?\s*Years?/i)?.[0]} Academic & Research Tenure` : faculty.experience) : '12+ Years Academic Leadership');
  
  // Research tags (3 concise tags)
  const researchTags = faculty.researchTags && faculty.researchTags.length >= 3
    ? faculty.researchTags
    : [
        'Applied Research & Methodology',
        'Peer-Reviewed Academic Publications',
        'Graduate Scholarly Mentorship'
      ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop: black/50 with backdrop-blur-xl, click outside to close */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-xl cursor-pointer"
            aria-hidden="true"
          />

          {/* Modal Container: centered, width 820px, max-height 85vh, border-radius 24px, background white, shadow 2xl */}
          <motion.div
            initial={{ scale: 0.92, y: 20, opacity: 0 }}
            animate={{ 
              scale: 1, 
              y: 0, 
              opacity: 1,
              transition: { type: 'spring', damping: 25, stiffness: 280 } 
            }}
            exit={{ 
              scale: 0.92, 
              y: 20, 
              opacity: 0,
              transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } 
            }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[820px] max-h-[85vh] bg-white rounded-[24px] shadow-2xl z-10 overflow-y-auto border border-slate-100 p-6 sm:p-10 text-slate-800"
            role="dialog"
            aria-modal="true"
            aria-labelledby="faculty-modal-name"
          >
            {/* Close button top right: X in circle */}
            <button
              onClick={onClose}
              aria-label="Close modal"
              className="absolute top-5 right-5 sm:top-6 sm:right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-800 flex items-center justify-center transition-colors cursor-pointer z-20 group"
            >
              <X size={18} className="group-hover:rotate-90 transition-transform duration-200" />
            </button>

            {/* Modal Heading Accent */}
            <div className="text-center mb-6">
              <span className="text-[10px] font-semibold tracking-[0.25em] uppercase text-[#C5A059] block">
                Official Faculty Dossier
              </span>
            </div>

            {/* 3-Column Layout: Left (Education) | Center (Image, Name, Title) | Right (Experience, Research) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center pt-2">
              
              {/* LEFT COLUMN: Education & Expertise (x: -20 to 0 delay 0.2) */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-4 text-left order-2 md:order-1"
              >
                <div className="border-b border-slate-100 pb-2">
                  <h4 className="text-[11px] font-bold tracking-wider uppercase text-slate-400">
                    Education & Expertise
                  </h4>
                </div>

                <ul className="space-y-3 font-sans text-[13px] text-slate-600 leading-snug">
                  {/* Bullet 1: PhD details */}
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0 mt-1.5" />
                    <span>{degreeBullet}</span>
                  </li>
                  {/* Bullet 2: Specialization */}
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0 mt-1.5" />
                    <span>{specializationBullet}</span>
                  </li>
                  {/* Bullet 3: Department */}
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C5A059] shrink-0 mt-1.5" />
                    <span>{divisionBullet}</span>
                  </li>
                </ul>
              </motion.div>

              {/* CENTER COLUMN: Image 160x160 rounded-2xl, Name Playfair 24px, Title tag gold (scale 0.9 to 1 delay 0.1) */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center text-center order-1 md:order-2 px-2"
              >
                {/* Image: 160x160 rounded-2xl, subtle shadow and gold ring */}
                <div className="w-[160px] h-[160px] rounded-2xl overflow-hidden shadow-md ring-2 ring-[#C5A059]/50 ring-offset-4 ring-offset-white bg-slate-100 shrink-0">
                  <img
                    src={faculty.photoUrl}
                    alt={faculty.name}
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                  />
                </div>

                {/* Name: Playfair 24px */}
                <h3 
                  id="faculty-modal-name"
                  className="font-['Playfair_Display',serif] text-2xl font-bold text-[#0F2C61] mt-4 tracking-tight leading-snug"
                >
                  {faculty.name}
                </h3>

                {/* Title tag gold */}
                <div className="mt-2">
                  <span className="inline-flex items-center px-3 py-1 rounded text-[11px] font-semibold tracking-wider uppercase bg-[#C5A059]/15 text-[#8C6D23] border border-[#C5A059]/30">
                    {faculty.designation}
                  </span>
                </div>
              </motion.div>

              {/* RIGHT COLUMN: Experience, Research Areas (x: 20 to 0 delay 0.2) */}
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="space-y-4 text-left order-3"
              >
                <div className="border-b border-slate-100 pb-2">
                  <h4 className="text-[11px] font-bold tracking-wider uppercase text-slate-400">
                    Experience & Research
                  </h4>
                </div>

                <ul className="space-y-3 font-sans text-[13px] text-slate-600 leading-snug">
                  {/* Bullet 1: Experience */}
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F2C61] shrink-0 mt-1.5" />
                    <span>{expString}</span>
                  </li>
                  {/* Bullet 2: Research Tag 1 & 2 */}
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F2C61] shrink-0 mt-1.5" />
                    <span>{researchTags[0]}</span>
                  </li>
                  {/* Bullet 3: Research Tag 3 */}
                  <li className="flex items-start gap-2.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0F2C61] shrink-0 mt-1.5" />
                    <span>{researchTags[1] || researchTags[2] || 'Active Scholar-Practitioner'}</span>
                  </li>
                </ul>

                {/* 3 Research Tags Pill Row */}
                <div className="pt-2 flex flex-wrap gap-1.5">
                  {researchTags.slice(0, 3).map((tag, idx) => (
                    <span 
                      key={idx}
                      className="text-[10.5px] font-medium bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-slate-200/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

            </div>

            {/* Bottom Subtle Note */}
            <div className="mt-8 pt-4 border-t border-slate-100 text-center">
              <span className="text-[11px] text-slate-400 font-sans">
                University of Central Punjab • Bahawalpur Campus Academic Registry
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
