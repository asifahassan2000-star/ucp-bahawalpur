import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FacultyProfileModal } from './FacultyProfileModal';
import { ALL_FACULTY_MEMBERS, FacultyMemberData } from '../data/facultyData';

export type FacultyMember = FacultyMemberData;
export const FACULTY_MEMBERS = ALL_FACULTY_MEMBERS;

interface FacultySectionProps {
  onViewAllFaculty?: (category?: string) => void;
}

export const FacultySection: React.FC<FacultySectionProps> = ({
  onViewAllFaculty
}) => {
  const [selectedFaculty, setSelectedFaculty] = useState<FacultyMember | null>(null);

  return (
    <section 
      id="faculty-section" 
      className="bg-white py-[100px] border-b border-[#E5E7EB] text-[#0F2C61]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Minimal, Editorial Section Header */}
        <div className="mb-14 sm:mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-[#C5A059]" />
              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C5A059]">
                Distinguished Academia
              </span>
            </div>
            <h2 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl lg:text-5xl font-normal text-[#0F2C61] tracking-tight">
              Our Faculty
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 font-sans max-w-2xl leading-relaxed">
              Distinguished professors, researchers, and mentors leading academic excellence at UCP Bahawalpur.
            </p>
          </div>

          {onViewAllFaculty && (
            <button
              onClick={() => onViewAllFaculty('all')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0F2C61] hover:text-[#C5A059] group transition-colors cursor-pointer self-start md:self-end shrink-0"
            >
              <span>View Faculty Directory</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>

        {/* Official Faculty Members Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 pt-4">
          {ALL_FACULTY_MEMBERS.map((faculty, index) => {
            return (
              <motion.div
                key={faculty.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: (index % 4) * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, amount: 0.15 }}
                onClick={() => setSelectedFaculty(faculty)}
                className="group flex flex-col items-center text-center cursor-pointer"
              >
                {/* Official Portrait Frame */}
                <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/90 shadow-xs group-hover:shadow-md group-hover:border-[#C5A059]/60 transition-all duration-300 relative">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Name: Crisp, prominent typography */}
                <div className="mt-3.5 px-1">
                  <h3 className="font-['Playfair_Display',serif] text-base sm:text-lg font-bold text-[#0F2C61] group-hover:text-[#b8121a] transition-colors leading-snug">
                    {faculty.name}
                  </h3>
                  <p className="text-xs text-slate-500 font-sans mt-0.5 font-medium">
                    {faculty.designation}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Minimal Directory Footer Callout */}
        {onViewAllFaculty && (
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 p-6 rounded-2xl bg-[#F8FAFC] border border-[#E5E7EB]">
            <div>
              <h4 className="font-['Playfair_Display',serif] text-lg font-medium text-[#0F2C61]">
                Academic Faculty Directory
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5 font-sans">
                Browse all {ALL_FACULTY_MEMBERS.length} faculty members across academic departments and disciplines.
              </p>
            </div>
            <button
              onClick={() => onViewAllFaculty('all')}
              className="bg-[#0F2C61] hover:bg-[#1a428a] text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-xl transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-xs hover:shadow shrink-0"
            >
              <span>View Full Directory</span>
              <ArrowRight size={14} />
            </button>
          </div>
        )}

      </div>

      {/* Premium Faculty Profile Modal */}
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
