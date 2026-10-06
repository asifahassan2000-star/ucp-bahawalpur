import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FacultyProfileModal, FacultyProfileModalData } from './FacultyProfileModal';

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  department: string;
  highestDegree: string;
  experienceYears: string;
  specialization: string;
  photoUrl: string;
  researchTags?: string[];
}

export const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: 'tariq-mehmood',
    name: 'Prof. Dr. Tariq Mehmood',
    designation: 'Professor & Head of Department',
    department: 'Computer Science & Information Technology',
    highestDegree: 'Ph.D. in Computer Science (FAST-NUCES / Postdoc Univ. of Manchester)',
    experienceYears: '18+ Years',
    specialization: 'Distributed Algorithms, High-Performance Systems & Machine Learning',
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    researchTags: ['Distributed Systems', 'Deep Neural Networks', 'Algorithmic Optimization'],
  },
  {
    id: 'farhana-yasmin',
    name: 'Dr. Farhana Yasmin',
    designation: 'Associate Professor',
    department: 'Management Studies & Business Administration',
    highestDegree: 'Ph.D. in Finance & Banking (LUMS)',
    experienceYears: '14+ Years',
    specialization: 'Corporate Governance, Financial Modeling & Risk Valuation Frameworks',
    photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    researchTags: ['Corporate Governance', 'Financial Risk Valuation', 'Microfinance Systems'],
  },
  {
    id: 'salman-rashid',
    name: 'Engr. Dr. Salman Rashid',
    designation: 'Associate Professor & Program Director',
    department: 'Engineering & Applied Sciences',
    highestDegree: 'Ph.D. in Electrical Engineering (UET Lahore)',
    experienceYears: '16+ Years',
    specialization: 'Renewable Power Architecture, Intelligent Microgrids & Instrumentation',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    researchTags: ['Intelligent Microgrids', 'Renewable Power Systems', 'Industrial Instrumentation'],
  },
  {
    id: 'aisha-siddiqua',
    name: 'Dr. Aisha Siddiqua',
    designation: 'Assistant Professor',
    department: 'Humanities & Social Sciences',
    highestDegree: 'Ph.D. in Applied Linguistics (University of Birmingham, UK)',
    experienceYears: '11+ Years',
    specialization: 'Educational Sociolinguistics, Contemporary Discourse & Pedagogical Design',
    photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    researchTags: ['Educational Sociolinguistics', 'Contemporary Discourse', 'Curriculum Design'],
  },
  {
    id: 'asif-khan',
    name: 'Prof. Dr. Muhammad Asif Khan',
    designation: 'Professor & Director of Academic Affairs',
    department: 'Faculty of Law & Constitutional Studies',
    highestDegree: 'LL.M. & Ph.D. in Constitutional Law (University of London)',
    experienceYears: '20+ Years',
    specialization: 'Constitutional Jurisprudence, Judicial Oversight & Regulatory Public Policy',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    researchTags: ['Constitutional Jurisprudence', 'Regulatory Policy', 'Judicial Advisory'],
  },
];

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
              International researchers, senior jurists, and industry mentors leading academic rigor and transformative scholarship at UCP Bahawalpur.
            </p>
          </div>

          {onViewAllFaculty && (
            <button
              onClick={() => onViewAllFaculty('all')}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0F2C61] hover:text-[#C5A059] group transition-colors cursor-pointer self-start md:self-end shrink-0"
            >
              <span>Explore All 20 Faculty Profiles</span>
              <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
            </button>
          )}
        </div>

        {/* Premium Editorial Faculty Rows */}
        <div className="border-t border-[#E5E7EB]">
          {FACULTY_MEMBERS.map((faculty, index) => {
            return (
              <motion.div
                key={faculty.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 1,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, amount: 0.3 }}
                onClick={() => setSelectedFaculty(faculty)}
                className="group relative border-b border-[#E5E7EB] p-8 transition-colors duration-300 hover:bg-[#F8FAFC] flex flex-col md:flex-row md:items-center justify-between gap-6 sm:gap-8 cursor-pointer overflow-hidden"
              >
                {/* Left gold line that grows from 0% to 100% height on hover */}
                <div 
                  className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#C5A059] h-0 group-hover:h-full transition-[height] duration-400 ease-out pointer-events-none"
                  aria-hidden="true"
                />

                {/* Left side: Image + Center Information */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 flex-1 min-w-0">
                  
                  {/* Image: 140x140 square, radius 20px, grayscale default, color & scale 1.05 on hover */}
                  <div className="w-[140px] h-[140px] shrink-0 rounded-[20px] overflow-hidden bg-slate-100 border border-slate-200/80 shadow-xs relative">
                    <img
                      src={faculty.photoUrl}
                      alt={faculty.name}
                      className="w-full h-full object-cover object-top grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                      loading="eager"
                      decoding="async"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';
                      }}
                    />
                  </div>

                  {/* Center: Name + Title in gold small tag + PhD details + Specialization line (1 line only) */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
                      <h3 className="font-['Playfair_Display',serif] text-[22px] font-semibold text-[#0F2C61] tracking-tight leading-snug">
                        {faculty.name}
                      </h3>
                      {/* Title in gold small tag */}
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded text-[11px] font-medium tracking-wide uppercase bg-[#C5A059]/15 text-[#8C6D23] border border-[#C5A059]/30 whitespace-nowrap">
                        {faculty.designation}
                      </span>
                    </div>

                    {/* PhD details */}
                    <div className="text-[13px] sm:text-[14px] text-slate-600 font-sans mt-1.5 flex flex-wrap items-center gap-1.5 sm:gap-2">
                      <span className="font-medium text-slate-700">{faculty.highestDegree}</span>
                      <span className="text-slate-300 hidden sm:inline">•</span>
                      <span className="text-slate-500 text-[13px]">{faculty.department}</span>
                    </div>

                    {/* Specialization line (1 line only) */}
                    <p className="text-[13px] sm:text-[14px] text-slate-500 font-sans mt-1 truncate max-w-2xl">
                      <span className="text-slate-400 font-normal">Specialization: </span>
                      <span className="text-slate-600 font-normal">{faculty.specialization}</span>
                    </p>
                  </div>
                </div>

                {/* Right side: Experience badge (18+ Years) and arrow icon + 'View Profile ->' on hover. NO EMAIL! */}
                <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center gap-3 shrink-0 pt-2 sm:pt-0 border-t border-slate-100 sm:border-0">
                  <span className="px-3.5 py-1.5 rounded-full text-xs sm:text-[13px] font-medium bg-[#F1F5F9] text-slate-700 border border-slate-200/80 whitespace-nowrap">
                    {faculty.experienceYears}
                  </span>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedFaculty(faculty);
                    }}
                    className="flex items-center gap-2 text-[13px] font-semibold text-[#0F2C61] group-hover:text-[#C5A059] transition-colors cursor-pointer"
                  >
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium">
                      View Profile
                    </span>
                    <ArrowRight 
                      size={16} 
                      className="text-slate-400 group-hover:text-[#C5A059] group-hover:translate-x-1.5 transition-all duration-300 shrink-0" 
                    />
                  </button>
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
                Complete Academic Directory
              </h4>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5 font-sans">
                Browse all 20 departmental chairs, research directors, and scholar profiles across disciplines.
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
        faculty={selectedFaculty}
        isOpen={!!selectedFaculty}
        onClose={() => setSelectedFaculty(null)}
      />
    </section>
  );
};
