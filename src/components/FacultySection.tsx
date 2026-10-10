import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FacultyProfileModal } from './FacultyProfileModal';
import { FacultyStickyGallery } from './FacultyStickyGallery';
import { ALL_FACULTY_MEMBERS, FacultyMemberData } from '../data/facultyData';

export type FacultyMember = FacultyMemberData;
export const FACULTY_MEMBERS = ALL_FACULTY_MEMBERS;

interface FacultySectionProps {
  onViewAllFaculty?: (category?: string) => void;
}

// 5 Curated Academic Leaders representing core academic pillars
const FEATURED_IDS = [
  'dr-abdul-kareem',     // CS & AI
  'dr-abbas-haider',     // Electrical & Systems Engineering
  'prof-ali-shan',       // Software Engineering
  'prof-uzma-zulqurnai', // Humanities & Social Sciences
  'prof-shahid-gulzar',  // Management Sciences
];

export const FacultySection: React.FC<FacultySectionProps> = ({
  onViewAllFaculty
}) => {
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyMember | null>(null);

  // Exact 5 featured faculty members
  const featuredFaculty: FacultyMemberData[] = FEATURED_IDS.map(id => 
    ALL_FACULTY_MEMBERS.find(f => f.id === id)
  ).filter((f): f is FacultyMemberData => !!f);

  return (
    <section 
      id="faculty-section" 
      className="bg-white py-10 sm:py-12 md:py-14 border-b border-slate-200 text-[#0F2C61] relative"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Compact, Clean Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-8 sm:mb-9">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-5 h-[2px] bg-[#C5A059]" />
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] text-[#C5A059]">
                Distinguished Faculty
              </span>
            </div>
            
            <h2 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl lg:text-4xl font-normal text-[#0F2C61] tracking-tight">
              Our Faculty
            </h2>
          </div>

          {onViewAllFaculty && (
            <button
              onClick={() => onViewAllFaculty('all')}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0F2C61] hover:text-[#a30f16] group transition-colors cursor-pointer self-start sm:self-end shrink-0"
            >
              <span>View All 20 Faculty Profiles</span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>

        {/* 
          All Five Visible Clearly in a Single Compact, Minimal Row
          Cards show ONLY Photo + Name (all extra metadata removed; viewable in profile modal on click)
        */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3.5 sm:gap-4 lg:gap-5">
          {featuredFaculty.map((faculty, index) => {
            return (
              <motion.div
                key={faculty.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, amount: 0.2 }}
                onClick={() => setSelectedFaculty(faculty)}
                className="group flex flex-col items-center text-center cursor-pointer"
              >
                {/* Compact, Crisp Portrait */}
                <div className="w-full aspect-[4/5] rounded-xl overflow-hidden bg-slate-100 border border-slate-200/90 shadow-xs group-hover:shadow-md group-hover:border-[#C5A059] transition-all duration-300 relative">
                  <img
                    src={faculty.photoUrl}
                    alt={faculty.name}
                    className={`w-full h-full object-cover ${faculty.objectPosition || 'object-top'} transition-transform duration-500 ease-out group-hover:scale-105`}
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = faculty.fallbackPhotoUrl;
                    }}
                  />
                  <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Just the Name */}
                <div className="mt-2.5 px-0.5 w-full">
                  <h3 className="font-['Playfair_Display',serif] text-sm sm:text-base font-bold text-[#0F2C61] group-hover:text-[#a30f16] transition-colors leading-snug line-clamp-2">
                    {faculty.name}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* Faculty in Action: One Image Place with Scroll Transitions & 3s Auto-Change */}
      <div className="mt-8 border-t border-slate-100">
        <FacultyStickyGallery />
      </div>

      {/* Premium Faculty Profile Modal - Displays full degree, department, experience, and specialization on click */}
      <FacultyProfileModal
        faculty={selectedFaculty ? {
          id: selectedFaculty.name,
          name: selectedFaculty.name,
          designation: selectedFaculty.designation,
          department: selectedFaculty.department,
          highestDegree: selectedFaculty.highestDegree,
          experience: selectedFaculty.experienceYears,
          specialization: selectedFaculty.specialization,
          intro: selectedFaculty.intro,
          photoUrl: selectedFaculty.photoUrl,
        } : null}
        isOpen={!!selectedFaculty}
        onClose={() => setSelectedFaculty(null)}
      />
    </section>
  );
};

export default FacultySection;
