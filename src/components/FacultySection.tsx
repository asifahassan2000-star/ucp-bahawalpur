import React from 'react';
import { GraduationCap, Briefcase, Award } from 'lucide-react';

interface FacultyMember {
  id: string;
  name: string;
  designation: string;
  department: string;
  highestDegree: string;
  experience: string;
  intro: string;
  photoUrl: string;
}

const FACULTY_MEMBERS: FacultyMember[] = [
  {
    id: 'tariq-mehmood',
    name: 'Prof. Dr. Tariq Mehmood',
    designation: 'Professor & Head of Department',
    department: 'Department of Computer Science & Information Technology',
    highestDegree: 'Ph.D. in Computer Science (FAST-NUCES / Postdoc Univ. of Manchester)',
    experience: '18+ Years Teaching & Research Experience',
    intro: 'Specializes in distributed algorithms, data structures, and machine learning architectures, authoring over 40 research publications in peer-reviewed journals.',
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'farhana-yasmin',
    name: 'Dr. Farhana Yasmin',
    designation: 'Associate Professor',
    department: 'Faculty of Management Studies & Business Administration',
    highestDegree: 'Ph.D. in Finance & Banking (LUMS)',
    experience: '14+ Years Academic & Industry Consulting Experience',
    intro: 'Expert in corporate financial management, risk analysis, and corporate governance frameworks, leading national research projects on microfinance systems.',
    photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'salman-rashid',
    name: 'Engr. Dr. Salman Rashid',
    designation: 'Associate Professor & Program Director',
    department: 'Faculty of Engineering & Applied Sciences',
    highestDegree: 'Ph.D. in Electrical Engineering (UET Lahore)',
    experience: '16+ Years Industrial & Teaching Experience',
    intro: 'PEC registered professional engineer focusing on renewable power systems, intelligent microgrids, and industrial instrumentation technologies.',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'aisha-siddiqua',
    name: 'Dr. Aisha Siddiqua',
    designation: 'Assistant Professor',
    department: 'Faculty of Humanities & Social Sciences',
    highestDegree: 'Ph.D. in Applied Linguistics (University of Birmingham, UK)',
    experience: '11+ Years Higher Education Teaching Experience',
    intro: 'Conducts research in educational sociolinguistics, discourse analysis, and academic communication curriculum for contemporary higher learning.',
    photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 'asif-khan',
    name: 'Prof. Dr. Muhammad Asif Khan',
    designation: 'Professor & Director of Academic Affairs',
    department: 'Faculty of Law & Constitutional Studies',
    highestDegree: 'LL.M. & Ph.D. in Constitutional Law (University of London)',
    experience: '20+ Years Judicial Advisory & University Teaching Experience',
    intro: 'Senior legal scholar and advocate of the High Court, contributing extensive advisory oversight on regulatory jurisprudence and institutional policies.',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
  },
];

interface FacultySectionProps {
  onViewAllFaculty?: (category?: string) => void;
}

export const FacultySection: React.FC<FacultySectionProps> = ({
  onViewAllFaculty
}) => {
  return (
    <section 
      id="faculty-section" 
      className="bg-white py-16 sm:py-20 border-b border-slate-200"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simple, Institutional Section Header */}
        <div className="mb-12 text-left">
          <div data-reveal="heading" data-reveal-delay="0" className="flex items-center gap-2 mb-2">
            <span className="h-0.5 w-6 bg-[#a30f16]" />
            <span className="text-xs font-bold text-[#a30f16] uppercase tracking-wider">
              UCP Bahawalpur
            </span>
          </div>
          <h2 data-reveal="heading" data-reveal-delay="0" className="text-3xl sm:text-4xl font-extrabold text-[#092242] tracking-tight">
            Our Faculty
          </h2>
          <p data-reveal="text" data-reveal-delay="120" className="mt-2 text-base text-slate-600 max-w-2xl">
            Distinguished academicians, industry researchers, and scholar-practitioners shaping future leaders through academic rigor and personal mentorship.
          </p>
        </div>

        {/* 5 Horizontal Profile Cards */}
        <div className="space-y-5">
          {FACULTY_MEMBERS.map((faculty, index) => {
            const cardDelay = index * 150 + 270;
            return (
              <div
                key={faculty.id}
                data-reveal="card"
                data-reveal-delay={String(cardDelay)}
                style={{ transitionDelay: `${cardDelay}ms` }}
                className="bg-white border border-slate-200 rounded-xl p-5 sm:p-6 shadow-xs hover:shadow-sm transition-shadow duration-200 flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-6"
              >
              {/* Circular Professional Photo on the LEFT */}
              <div className="shrink-0 self-center sm:self-start">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-slate-200 bg-slate-100">
                  <img
                    src={faculty.photoUrl}
                    alt={faculty.name}
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                    decoding="async"
                    onError={(e) => {
                      // Fallback professional silhouette
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';
                    }}
                  />
                </div>
              </div>

              {/* Information on the RIGHT */}
              <div className="flex-1 min-w-0">
                
                {/* Faculty Name + Small Red Accent Line */}
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-[#092242] leading-tight">
                    {faculty.name}
                  </h3>
                  {/* Small red accent line beside or under faculty name */}
                  <div className="w-8 h-0.5 bg-[#a30f16] mt-1.5 mb-2" />
                </div>

                {/* Designation & Department */}
                <div className="text-sm font-semibold text-slate-800 mb-2">
                  <span>{faculty.designation}</span>
                  <span className="text-slate-400 mx-2 font-normal">•</span>
                  <span className="text-slate-600 font-normal">{faculty.department}</span>
                </div>

                {/* Highest Degree & Experience Metadata */}
                <div className="flex flex-wrap items-center gap-y-1.5 gap-x-4 text-xs sm:text-[13px] text-slate-600 mb-3">
                  <div className="flex items-center gap-1.5">
                    <GraduationCap size={15} className="text-[#092242] shrink-0" />
                    <span className="font-medium text-slate-700">{faculty.highestDegree}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Briefcase size={14} className="text-slate-500 shrink-0" />
                    <span className="text-slate-600">{faculty.experience}</span>
                  </div>
                </div>

                {/* Short 1-2 line Professional Introduction */}
                <p className="text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-2">
                  {faculty.intro}
                </p>

              </div>
            </div>
            );
          })}
        </div>

        {/* Call-to-Action to Full 20-Faculty Directory Page */}
        <div data-reveal="card" data-reveal-delay="420" className="mt-10 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 p-5 rounded-xl border border-slate-200">
          <div>
            <h4 className="text-sm sm:text-base font-bold text-[#092242]">
              Department-Wise Faculty Directory
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
              Explore 20 faculty profiles organized by department with research focus, degrees, and academic credentials.
            </p>
          </div>
          {onViewAllFaculty && (
            <button
              onClick={() => onViewAllFaculty('all')}
              className="bg-[#092242] hover:bg-[#14325a] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-lg transition-colors flex items-center gap-2 cursor-pointer shadow-xs hover:shadow shrink-0"
            >
              <span>View Full Faculty Directory</span>
              <span>→</span>
            </button>
          )}
        </div>

      </div>
    </section>
  );
};
