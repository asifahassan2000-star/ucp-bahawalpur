import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { FacultyProfileModal, FacultyProfileModalData } from './FacultyProfileModal';

export interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  photoUrl: string;
}

export const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: 'prof-uzma-zulqurnai',
    name: 'Prof. Uzma Zulqurnai',
    designation: 'Professor',
    photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'dr-abdul-kareem',
    name: 'Dr. Abdul Kareem',
    designation: 'Associate Professor',
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'prof-shahid-gulzar',
    name: 'Prof. Shahid Gulzar',
    designation: 'Professor',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'prof-sibghat',
    name: 'Prof. Sibghat',
    designation: 'Professor',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'dr-abbas-haider',
    name: 'Dr. Abbas Haider',
    designation: 'Assistant Professor',
    photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'dr-mushtaq',
    name: 'Dr. Mushtaq',
    designation: 'Associate Professor',
    photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'dr-abdul-raouf',
    name: 'Dr. Abdul Raouf',
    designation: 'Associate Professor',
    photoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'dr-m-tahir',
    name: 'Dr. M. Tahir',
    designation: 'Assistant Professor',
    photoUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'prof-khizer-hayat',
    name: 'Prof. Khizer Hayat',
    designation: 'Professor',
    photoUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'prof-ali-shan',
    name: 'Prof. Ali Shan',
    designation: 'Assistant Professor',
    photoUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'prof-usman-kazmi',
    name: 'Prof. Usman Kazmi',
    designation: 'Assistant Professor',
    photoUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'prof-abeer-aslam',
    name: 'Prof. Abeer Aslam',
    designation: 'Assistant Professor',
    photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'prof-marriam-gill',
    name: 'Prof. Marriam Gill',
    designation: 'Assistant Professor',
    photoUrl: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'prof-humra-owj',
    name: 'Prof. Humra Owj',
    designation: 'Assistant Professor',
    photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'prof-iqra-shabbir',
    name: 'Prof. Iqra Shabbir',
    designation: 'Assistant Professor',
    photoUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'prof-aliya-batool',
    name: 'Prof. Aliya Batool',
    designation: 'Assistant Professor',
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'prof-huzaifa-akmal',
    name: 'Prof. Huzaifa Akmal',
    designation: 'Assistant Professor',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
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

        {/* Official Faculty Members Grid — Exactly One Line of 4 Faculty Members */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-6 sm:gap-8 pt-4">
          {FACULTY_MEMBERS.slice(0, 4).map((faculty, index) => {
            return (
              <motion.div
                key={faculty.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, amount: 0.2 }}
                onClick={() => setSelectedFaculty(faculty)}
                className="group flex flex-col items-center text-center cursor-pointer"
              >
                {/* Official Portrait Frame */}
                <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/90 shadow-xs group-hover:shadow-md group-hover:border-[#C5A059]/60 transition-all duration-300 relative">
                  <img
                    src={faculty.photoUrl}
                    alt={faculty.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';
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
                Browse faculty members across all academic departments and disciplines.
              </p>
            </div>
            <button
              onClick={() => onViewAllFaculty('all')}
              className="bg-[#0F2C61] hover:bg-[#1a428a] text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-xl transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-xs hover:shadow shrink-0"
            >
              <span>View Faculty Directory</span>
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
          department: 'University of Central Punjab (Bahawalpur Campus)',
          highestDegree: 'Distinguished Academic Faculty',
          experience: 'Dedicated Academic Mentorship & Research',
          intro: `${selectedFaculty.name} is a distinguished faculty member dedicated to teaching, student mentorship, and scholarly excellence at UCP Bahawalpur.`,
          photoUrl: selectedFaculty.photoUrl,
        } : null}
        isOpen={!!selectedFaculty}
        onClose={() => setSelectedFaculty(null)}
      />
    </section>
  );
};
