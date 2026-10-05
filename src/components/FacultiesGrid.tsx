import React from 'react';
import { ArrowRight, BookOpen, GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { Faculty } from '../types';

interface FacultiesGridProps {
  onSelectFaculty: (facultyId: string) => void;
  onExploreFacultyPrograms: (facultyId: string) => void;
}

const BAHAWALPUR_FACULTIES: Faculty[] = [
  {
    id: 'foit',
    name: 'Faculty of Information Technology & Computer Science',
    shortName: 'FOIT',
    tagline: 'Leading Computing, Cyber Security & AI Education',
    dean: 'Dr. Muhammad Kashif',
    description: 'Offering industry-aligned computing education in Bahawalpur with rigorous foundations in algorithms, modern software architecture, and intelligent systems.',
    image: 'https://ucp.edu.pk/wp-content/uploads/2023/01/01.webp',
    accentColor: '#0284c7',
    programsCount: { undergraduate: 1, postgraduate: 0, phd: 0, adp: 5 },
    highlights: ['ADP Artificial Intelligence & Intelligent Systems', 'Specialized Computing & AI Laboratories', 'BS Computer Science & Software Development', 'Cyber Security & Data Science Curricula'],
  },
  {
    id: 'fms',
    name: 'UCP Business School (Management Sciences)',
    shortName: 'FMS',
    tagline: 'Developing Business Leaders, Analysts & Entrepreneurs',
    dean: 'Dr. Faisal Mustafa',
    description: 'Accredited business curriculum preparing students for dynamic careers in commercial analytics, financial services, enterprise strategy, and corporate accounting.',
    image: 'https://ucp.edu.pk/wp-content/uploads/2023/01/02.webp',
    accentColor: '#b45309',
    programsCount: { undergraduate: 3, postgraduate: 0, phd: 0, adp: 3 },
    highlights: ['Business Intelligence & Analytics Focus', 'Accounting & Financial Markets Foundation', 'Case Study & Applied Management Methodology', 'Corporate Internship Readiness'],
  },
  {
    id: 'fost',
    name: 'Faculty of Science & Technology',
    shortName: 'FOST',
    tagline: 'Pioneering Natural, Physical & Life Sciences',
    dean: 'Prof. Dr. Rehan Ahmad',
    description: 'Providing comprehensive laboratory and theoretical education across Physics, Chemistry, Biochemistry, Biotechnology, Mathematics, and Zoology.',
    image: 'https://ucp.edu.pk/wp-content/uploads/2023/01/science.webp',
    accentColor: '#0891b2',
    programsCount: { undergraduate: 6, postgraduate: 0, phd: 0, adp: 3 },
    highlights: ['Modern Science Research Laboratories', 'Practical Laboratory Experimentation', 'Interdisciplinary Biological & Physical Disciplines', 'Scientific Research Methodology'],
  },
  {
    id: 'fhss',
    name: 'Faculty of Humanities & Social Sciences',
    shortName: 'FHSS',
    tagline: 'Understanding Human Behaviour, Language & Society',
    dean: 'Dr. Fehmida Sultana',
    description: 'Dedicated to developing critical inquiry, psychological assessment skills, advanced literary analysis, and effective professional communication.',
    image: 'https://ucp.edu.pk/wp-content/uploads/2023/01/humanities.webp',
    accentColor: '#d97706',
    programsCount: { undergraduate: 2, postgraduate: 0, phd: 0, adp: 2 },
    highlights: ['Psychological Theory & Behavioural Studies', 'English Linguistics & Literary Studies', 'Cognitive & Interpersonal Communication Skills', 'Academic Writing & Critical Analysis'],
  },
];

export const FacultiesGrid: React.FC<FacultiesGridProps> = ({
  onSelectFaculty,
  onExploreFacultyPrograms,
}) => {
  return (
    <section id="faculties-section" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="max-w-2xl">
            <span data-reveal="label" data-reveal-delay="0" className="text-[#a30f16] font-bold text-xs sm:text-sm uppercase tracking-widest bg-rose-50 px-3.5 py-1.5 rounded-full border border-rose-100 inline-block mb-3">
              Academic Divisions
            </span>
            <h2 data-reveal="heading" data-reveal-delay="40" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#092242] tracking-tight">
              Faculties & Academic Centers
            </h2>
            <p data-reveal="text" data-reveal-delay="100" className="mt-3 text-slate-600 text-base sm:text-lg leading-relaxed">
              Governing UCP Bahawalpur's official 25 undergraduate and associate degree programmes across Computing, Business, Sciences, and Humanities.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-slate-700 bg-slate-100 px-3.5 py-1.5 rounded-lg border border-slate-200">
              4 Academic Faculties • 25 Programmes
            </span>
          </div>
        </div>

        {/* Faculties Grid: Cards render immediately */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BAHAWALPUR_FACULTIES.map((fac) => {
            return (
              <div
                key={fac.id}
                id={`faculty-card-${fac.id}`}
                className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1 hover:border-[#092242]/30"
              >
              <div>
                {/* Faculty Card Image Header */}
                <div className="relative h-44 w-full overflow-hidden bg-slate-900 aspect-[16/10]">
                  <img
                    src={fac.image}
                    alt={fac.name}
                    decoding="async"
                    className="w-full h-full object-cover subtle-hover-scale"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                  
                  {/* Short Name Pill */}
                  <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-md text-[#092242] font-black text-xs px-2.5 py-1 rounded-md shadow-xs">
                    {fac.shortName}
                  </div>

                  {/* Title on image */}
                  <div className="absolute bottom-3 left-3.5 right-3.5">
                    <h3 className="text-base font-bold text-white leading-snug drop-shadow-sm">
                      {fac.name}
                    </h3>
                  </div>
                </div>

                {/* Faculty Card Body */}
                <div className="p-4 space-y-3">
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {fac.description}
                  </p>

                  {/* Program counts pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    <span className="text-[11px] bg-slate-100 text-slate-800 font-bold px-2 py-0.5 rounded">
                      {fac.programsCount.undergraduate} BS
                    </span>
                    <span className="text-[11px] bg-amber-50 text-amber-900 border border-amber-200 font-bold px-2 py-0.5 rounded">
                      {fac.programsCount.adp} ADP/ADS
                    </span>
                    <span className="text-[11px] bg-[#092242]/5 text-[#092242] font-semibold px-2 py-0.5 rounded">
                      {fac.programsCount.undergraduate + fac.programsCount.adp} Total
                    </span>
                  </div>

                  {/* Highlights */}
                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    {fac.highlights.slice(0, 2).map((h, i) => (
                      <div key={i} className="flex items-center gap-1.5 text-xs text-slate-600">
                        <CheckCircle2 size={13} className="text-[#a30f16] shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-4 pt-0">
                <button
                  id={`btn-explore-fac-${fac.id}`}
                  onClick={() => onExploreFacultyPrograms(fac.id)}
                  className="w-full bg-slate-100 hover:bg-[#092242] text-slate-800 hover:text-white py-2 px-3 rounded-lg text-xs font-bold transition-all duration-200 flex items-center justify-center gap-1.5 group/btn cursor-pointer"
                >
                  <span>Explore Programmes</span>
                  <ArrowRight size={13} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
