import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, Briefcase, ArrowLeft, ArrowRight, 
  Search, BookOpen, Building2, User, Filter, CheckCircle2 
} from 'lucide-react';
import { FacultyProfileModal } from './FacultyProfileModal';
import { FacultyStickyGallery } from './FacultyStickyGallery';

export interface FacultySlot {
  id: number;
  name: string;
  designation: string;
  photoUrl: string;
}

export const OFFICIAL_FACULTY_MEMBERS: FacultySlot[] = [
  {
    id: 1,
    name: 'Prof. Uzma Zulqurnai',
    designation: 'Professor',
    photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    name: 'Dr. Abdul Kareem',
    designation: 'Associate Professor',
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    name: 'Prof. Shahid Gulzar',
    designation: 'Professor',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    name: 'Prof. Sibghat',
    designation: 'Professor',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 5,
    name: 'Dr. Abbas Haider',
    designation: 'Assistant Professor',
    photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 6,
    name: 'Dr. Mushtaq',
    designation: 'Associate Professor',
    photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 7,
    name: 'Dr. Abdul Raouf',
    designation: 'Associate Professor',
    photoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 8,
    name: 'Dr. M. Tahir',
    designation: 'Assistant Professor',
    photoUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 9,
    name: 'Prof. Khizer Hayat',
    designation: 'Professor',
    photoUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 10,
    name: 'Prof. Ali Shan',
    designation: 'Assistant Professor',
    photoUrl: 'https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 11,
    name: 'Prof. Usman Kazmi',
    designation: 'Assistant Professor',
    photoUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 12,
    name: 'Prof. Abeer Aslam',
    designation: 'Assistant Professor',
    photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 13,
    name: 'Prof. Marriam Gill',
    designation: 'Assistant Professor',
    photoUrl: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 14,
    name: 'Prof. Humra Owj',
    designation: 'Assistant Professor',
    photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 15,
    name: 'Prof. Iqra Shabbir',
    designation: 'Assistant Professor',
    photoUrl: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 16,
    name: 'Prof. Aliya Batool',
    designation: 'Assistant Professor',
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 17,
    name: 'Prof. Huzaifa Akmal',
    designation: 'Assistant Professor',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
  },
];

interface FacultyPageProps {
  onBackToHome: () => void;
  initialCategory?: string;
}

export const FacultyPage: React.FC<FacultyPageProps> = ({ 
  onBackToHome,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedFaculty, setSelectedFaculty] = useState<FacultySlot | null>(null);

  const filteredFaculty = OFFICIAL_FACULTY_MEMBERS.filter(faculty => {
    return searchQuery === '' || 
      faculty.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="bg-white min-h-screen text-slate-800">
      
      {/* 1. Sub-Header Banner & Institutional Breadcrumb */}
      <div className="bg-[#092242] text-white border-b border-[#14325a] py-6 sm:py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            {/* Return to Home Button */}
            <button
              id="back-to-home-btn"
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-200 hover:text-amber-300 transition-colors bg-white/10 hover:bg-white/15 px-3.5 py-1.5 rounded-lg border border-white/15"
            >
              <ArrowLeft size={16} />
              <span>Back to Home</span>
            </button>

            {/* Eyebrow badge */}
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
              Official Faculty Directory • UCP Bahawalpur
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Our Faculty
              </h1>
              <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-2xl leading-relaxed">
                Distinguished professors, doctors, and academic mentors at UCP Bahawalpur.
              </p>
            </div>

            {/* Search Input Bar */}
            <div className="relative shrink-0 w-full sm:w-72">
              <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search faculty by name..."
                className="w-full pl-9 pr-3.5 py-2 text-xs rounded-xl border border-white/20 bg-white/10 text-white placeholder-slate-300 focus:bg-white focus:text-slate-900 focus:placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-400 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[11px] text-slate-300 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* 2. Main Faculty Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        
        {/* Directory Count Header */}
        <div className="mb-8 pb-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-4 bg-[#a30f16] rounded-xs inline-block" />
              <span className="text-xs font-bold text-[#a30f16] uppercase tracking-wider">
                Official Directory
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#092242]">
              Academic Faculty Members
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Showing {filteredFaculty.length} distinguished faculty members
            </p>
          </div>
        </div>

        {/* Official Faculty Members Grid — Responsive Cards Layout (Image, Name & Designation) */}
        {filteredFaculty.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-xl border border-dashed border-slate-300">
            <User size={36} className="mx-auto text-slate-400 mb-2" />
            <h3 className="text-base font-bold text-slate-700">No faculty members found</h3>
            <p className="text-xs text-slate-500 mt-1">
              Try adjusting your search criteria.
            </p>
            <button
              onClick={() => setSearchQuery('')}
              className="mt-3 text-xs text-[#a30f16] font-semibold hover:underline"
            >
              Reset Search
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 lg:gap-8 pt-2">
            {filteredFaculty.map((faculty, index) => (
              <motion.div
                key={faculty.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: (index % 5) * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
                viewport={{ once: true, amount: 0.15 }}
                onClick={() => setSelectedFaculty(faculty)}
                className="group flex flex-col items-center text-center cursor-pointer p-2 sm:p-2.5 rounded-2xl bg-white hover:bg-slate-50/70 border border-slate-100 hover:border-slate-300 shadow-2xs hover:shadow-md transition-all duration-300"
              >
                {/* Official Portrait Frame */}
                <div className="w-full aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden bg-slate-100 border border-slate-200/90 shadow-2xs group-hover:shadow-xs group-hover:border-[#C5A059]/60 transition-all duration-300 relative">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Name & Designation: Crisp, official university typography */}
                <div className="mt-3 px-1 w-full text-center">
                  <h3 className="font-['Playfair_Display',serif] text-sm sm:text-base lg:text-lg font-bold text-[#0F2C61] group-hover:text-[#b8121a] transition-colors leading-snug">
                    {faculty.name}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 font-sans mt-0.5 font-medium">
                    {faculty.designation}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </main>

      {/* 3. Our Faculty Glimpse — Apple-Style Sticky Scroll (Desktop 300vh, Mobile Clean Vertical Stack) */}
      <FacultyStickyGallery />

      {/* 4. Bottom Pagination / Back to Home navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-200">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#092242] hover:text-[#a30f16] transition-colors cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Return to Main Campus Homepage</span>
          </button>

          <p className="text-xs text-slate-500 font-sans">
            University of Central Punjab · Bahawalpur Campus
          </p>
        </div>
      </div>

      {/* Official Faculty Profile Modal */}
      <FacultyProfileModal
        faculty={selectedFaculty ? {
          id: selectedFaculty.id,
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

    </div>
  );
};
