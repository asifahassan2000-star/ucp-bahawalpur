import React, { useState } from 'react';
import { 
  GraduationCap, Briefcase, Mail, ArrowLeft, 
  Search, BookOpen, Building2, User, Filter, CheckCircle2 
} from 'lucide-react';

export interface FacultySlot {
  id: number;
  name: string;
  category: string;
  categoryName: string;
  designation: string;
  highestDegree: string;
  experience: string;
  intro: string;
  email: string;
  photoUrl: string;
}

export const FACULTY_CATEGORIES = [
  { id: 'all', name: 'All Departments', shortName: 'All Faculty', count: 20 },
  { id: 'cs-it', name: 'Computer Science & Information Technology', shortName: 'CS & IT', count: 4 },
  { id: 'business', name: 'Management Studies & Business Administration', shortName: 'Business & Management', count: 4 },
  { id: 'engineering', name: 'Engineering & Applied Technology', shortName: 'Engineering & Tech', count: 4 },
  { id: 'humanities', name: 'Humanities & Social Sciences', shortName: 'Humanities & Social Sciences', count: 4 },
  { id: 'law', name: 'Faculty of Law & Policy', shortName: 'Law & Policy', count: 4 },
];

export const DEMO_FACULTY_SLOTS: FacultySlot[] = [
  // --- Category 1: Computer Science & IT (Slots 1-4) ---
  {
    id: 1,
    name: 'Prof. Dr. Tariq Mehmood',
    category: 'cs-it',
    categoryName: 'Computer Science & Information Technology',
    designation: 'Professor & Head of Department',
    highestDegree: 'Ph.D. in Computer Science (FAST-NUCES / Postdoc Univ. of Manchester)',
    experience: '18+ Years Teaching & Research Experience',
    intro: 'Specializes in distributed algorithms, machine learning systems, and computer vision architectures with over 40 peer-reviewed journal papers.',
    email: 'tariq.mehmood@ucp.edu.pk',
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    name: 'Dr. Shahzad Ahmad',
    category: 'cs-it',
    categoryName: 'Computer Science & Information Technology',
    designation: 'Associate Professor & Research Lead',
    highestDegree: 'Ph.D. in Software Engineering (NUST / Postdoc Germany)',
    experience: '14+ Years Academic & Industry Experience',
    intro: 'Focuses on software architecture modeling, cyber security threat defense, and cloud computing optimizations.',
    email: 'shahzad.ahmad@ucp.edu.pk',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    name: 'Dr. Zoya Farooq',
    category: 'cs-it',
    categoryName: 'Computer Science & Information Technology',
    designation: 'Assistant Professor',
    highestDegree: 'Ph.D. in Artificial Intelligence (LUMS)',
    experience: '9+ Years Teaching & Industry Experience',
    intro: 'Conducts advanced investigations into natural language processing for low-resource languages and neural network optimizations.',
    email: 'zoya.farooq@ucp.edu.pk',
    photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    name: 'Engr. Bilal Hassan',
    category: 'cs-it',
    categoryName: 'Computer Science & Information Technology',
    designation: 'Senior Lecturer & Lab Director',
    highestDegree: 'M.S. in Computer Science & Data Engineering (PUCIT)',
    experience: '8+ Years Industry & Lab Instruction Experience',
    intro: 'Supervises software development incubations, enterprise web systems, and competitive algorithmic programming teams.',
    email: 'bilal.hassan@ucp.edu.pk',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
  },

  // --- Category 2: Management & Business Studies (Slots 5-8) ---
  {
    id: 5,
    name: 'Dr. Farhana Yasmin',
    category: 'business',
    categoryName: 'Management Studies & Business Administration',
    designation: 'Associate Professor & Program Director',
    highestDegree: 'Ph.D. in Finance & Banking (LUMS)',
    experience: '15+ Years Academic & Consulting Experience',
    intro: 'Senior consultant in corporate financial restructuring, investment portfolio strategies, and Islamic banking instruments.',
    email: 'farhana.yasmin@ucp.edu.pk',
    photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 6,
    name: 'Prof. Dr. Kamran Siddiqui',
    category: 'business',
    categoryName: 'Management Studies & Business Administration',
    designation: 'Professor of Strategic Marketing',
    highestDegree: 'Ph.D. in Marketing & Consumer Behavior (IBA Karachi)',
    experience: '20+ Years Corporate & University Experience',
    intro: 'Publishes widely in consumer psychology, brand architecture, and multi-channel international trade distribution.',
    email: 'kamran.siddiqui@ucp.edu.pk',
    photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 7,
    name: 'Dr. Nida Mansoor',
    category: 'business',
    categoryName: 'Management Studies & Business Administration',
    designation: 'Assistant Professor & MBA Advisor',
    highestDegree: 'Ph.D. in Human Resource Management (Monash University, Australia)',
    experience: '10+ Years Higher Education Experience',
    intro: 'Specializes in organizational agility, executive talent management, and modern corporate leadership dynamics.',
    email: 'nida.mansoor@ucp.edu.pk',
    photoUrl: 'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 8,
    name: 'Mr. Usman Tariq',
    category: 'business',
    categoryName: 'Management Studies & Business Administration',
    designation: 'Assistant Professor of Supply Chain & Operations',
    highestDegree: 'M.Phil / MS in Supply Chain Management (Warwick, UK)',
    experience: '11+ Years Industrial Logistics & Academic Practice',
    intro: 'Brings high-impact FMCG logistical expertise into student case studies and modern enterprise inventory modeling.',
    email: 'usman.tariq@ucp.edu.pk',
    photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
  },

  // --- Category 3: Engineering & Technology (Slots 9-12) ---
  {
    id: 9,
    name: 'Engr. Dr. Salman Rashid',
    category: 'engineering',
    categoryName: 'Engineering & Applied Technology',
    designation: 'Associate Professor & Program Director',
    highestDegree: 'Ph.D. in Electrical Engineering (UET Lahore)',
    experience: '16+ Years Industrial & Academic Experience',
    intro: 'PEC registered Chartered Engineer specializing in power electronics, renewable micro-grids, and high-voltage distribution networks.',
    email: 'salman.rashid@ucp.edu.pk',
    photoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 10,
    name: 'Dr. Waqas Ali Qureshi',
    category: 'engineering',
    categoryName: 'Engineering & Applied Technology',
    designation: 'Associate Professor, Mechanical & Energy Systems',
    highestDegree: 'Ph.D. in Thermal Engineering (KAIST, South Korea)',
    experience: '13+ Years Teaching & Industrial R&D',
    intro: 'Conducts experimental heat transfer research, HVAC automation, and thermodynamic cycle computational simulations.',
    email: 'waqas.qureshi@ucp.edu.pk',
    photoUrl: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 11,
    name: 'Engr. Dr. Saima Malik',
    category: 'engineering',
    categoryName: 'Engineering & Applied Technology',
    designation: 'Assistant Professor, Civil & Structural Engineering',
    highestDegree: 'Ph.D. in Structural Engineering (UET / Sheffield, UK)',
    experience: '12+ Years Infrastructure Consultancy & Teaching',
    intro: 'Consultant in seismic structural resilience, sustainable eco-concrete formulations, and geotechnical foundations.',
    email: 'saima.malik@ucp.edu.pk',
    photoUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 12,
    name: 'Engr. Hamza Javed',
    category: 'engineering',
    categoryName: 'Engineering & Applied Technology',
    designation: 'Lecturer & Robotics Lab Coordinator',
    highestDegree: 'M.S. in Mechatronics & Control Systems (NUST)',
    experience: '7+ Years Industrial Automation & Instruction',
    intro: 'Guides undergraduate capstone projects in autonomous mobile robotics, embedded IoT systems, and industrial PLC control.',
    email: 'hamza.javed@ucp.edu.pk',
    photoUrl: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80',
  },

  // --- Category 4: Humanities & Social Sciences (Slots 13-16) ---
  {
    id: 13,
    name: 'Dr. Aisha Siddiqua',
    category: 'humanities',
    categoryName: 'Humanities & Social Sciences',
    designation: 'Assistant Professor of Applied Linguistics',
    highestDegree: 'Ph.D. in Applied Linguistics (University of Birmingham, UK)',
    experience: '11+ Years Higher Education Teaching Experience',
    intro: 'Specializes in academic discourse analysis, language acquisition frameworks, and modern bilingual communication curricula.',
    email: 'aisha.siddiqua@ucp.edu.pk',
    photoUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 14,
    name: 'Prof. Dr. Zahid Munir',
    category: 'humanities',
    categoryName: 'Humanities & Social Sciences',
    designation: 'Professor & Dean of Social Sciences',
    highestDegree: 'Ph.D. in Sociology & Public Policy (Punjab University)',
    experience: '22+ Years Academic Leadership & Research',
    intro: 'Extensive background in community social stratification research, demographic analysis, and institutional policy design.',
    email: 'zahid.munir@ucp.edu.pk',
    photoUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 15,
    name: 'Dr. Maryam Khalid',
    category: 'humanities',
    categoryName: 'Humanities & Social Sciences',
    designation: 'Associate Professor of Psychology',
    highestDegree: 'Ph.D. in Clinical & Behavioral Psychology (GCU Lahore)',
    experience: '13+ Years Clinical Supervision & Academic Instruction',
    intro: 'Researches cognitive behavioral dynamics, student emotional well-being, and psychometric diagnostic assessment tools.',
    email: 'maryam.khalid@ucp.edu.pk',
    photoUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 16,
    name: 'Mr. Asadullah Sheikh',
    category: 'humanities',
    categoryName: 'Humanities & Social Sciences',
    designation: 'Assistant Professor of International Relations',
    highestDegree: 'M.Phil in International Relations & Geopolitics (QAU Islamabad)',
    experience: '10+ Years Diplomatic History & Policy Teaching',
    intro: 'Mentors Model United Nations societies while delivering lectures on South Asian diplomatic affairs and international security.',
    email: 'asadullah.sheikh@ucp.edu.pk',
    photoUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
  },

  // --- Category 5: Law & Policy (Slots 17-20) ---
  {
    id: 17,
    name: 'Prof. Dr. Muhammad Asif Khan',
    category: 'law',
    categoryName: 'Faculty of Law & Policy',
    designation: 'Professor & Director of Academic Affairs',
    highestDegree: 'LL.M. & Ph.D. in Constitutional Law (University of London, UK)',
    experience: '20+ Years Judicial Advisory & University Teaching',
    intro: 'Renowned legal scholar and advocate of the High Court, contributing extensive advisory oversight on regulatory jurisprudence.',
    email: 'asif.khan@ucp.edu.pk',
    photoUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 18,
    name: 'Barrister Daniyal Qureshi',
    category: 'law',
    categoryName: 'Faculty of Law & Policy',
    designation: 'Associate Professor of Corporate & Commercial Law',
    highestDegree: 'Bar-at-Law (Lincoln’s Inn) & LL.M. (King’s College London)',
    experience: '14+ Years Corporate Litigation & Moot Court Mentorship',
    intro: 'Leads commercial contract law clinics and coaches the national championship winning UCP Jessup Moot Court delegations.',
    email: 'daniyal.qureshi@ucp.edu.pk',
    photoUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 19,
    name: 'Ms. Rabia Noreen',
    category: 'law',
    categoryName: 'Faculty of Law & Policy',
    designation: 'Assistant Professor of Criminal Jurisprudence',
    highestDegree: 'LL.M. in Human Rights & Criminal Justice (Univ. of Melbourne)',
    experience: '9+ Years Legal Practice & Academic Instruction',
    intro: 'Advocate High Court specializing in constitutional fundamental rights, procedural evidence law, and public advocacy.',
    email: 'rabia.noreen@ucp.edu.pk',
    photoUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 20,
    name: 'Advocate Fahad Mehmood',
    category: 'law',
    categoryName: 'Faculty of Law & Policy',
    designation: 'Senior Lecturer & Moot Court Director',
    highestDegree: 'LL.M. in Civil Procedure & Arbitration (LUMS)',
    experience: '8+ Years Legal Instruction & High Court Practice',
    intro: 'Coordinates clinical legal education, trial advocacy workshops, and alternative dispute resolution training modules.',
    email: 'fahad.mehmood@ucp.edu.pk',
    photoUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80',
  },
];

interface FacultyPageProps {
  onBackToHome: () => void;
  initialCategory?: string;
}

export const FacultyPage: React.FC<FacultyPageProps> = ({ 
  onBackToHome,
  initialCategory = 'all'
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const currentCategoryObj = FACULTY_CATEGORIES.find(c => c.id === selectedCategory) || FACULTY_CATEGORIES[0];

  const filteredFaculty = DEMO_FACULTY_SLOTS.filter(faculty => {
    const matchesCategory = selectedCategory === 'all' || faculty.category === selectedCategory;
    const matchesSearch = searchQuery === '' || 
      faculty.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faculty.designation.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faculty.highestDegree.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faculty.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
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

          <div className="flex items-center gap-2 mb-2">
            <span className="h-0.5 w-6 bg-[#a30f16]" />
            <span className="text-xs font-bold text-slate-300 uppercase tracking-wider">
              Academic Departments & Chairs
            </span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
            Our Faculty
          </h1>
          <p className="mt-2 text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            20 Faculty profile slots arranged across academic departments. Select a category below to view specific departmental faculty members.
          </p>

        </div>
      </div>

      {/* 2. Category Selector Tabs (Separate Category Pages) */}
      <div className="sticky top-0 z-40 bg-white border-b border-slate-200 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 py-3 overflow-x-auto no-scrollbar">
            
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              {FACULTY_CATEGORIES.map((cat) => {
                const isActive = selectedCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    id={`faculty-cat-${cat.id}-btn`}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
                      isActive
                        ? 'bg-[#092242] text-white shadow-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900'
                    }`}
                  >
                    <span>{cat.shortName}</span>
                    <span 
                      className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                        isActive ? 'bg-[#a30f16] text-white' : 'bg-slate-200 text-slate-600'
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Quick Search */}
            <div className="relative shrink-0 w-44 sm:w-60">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search faculty..."
                className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#092242]"
              />
            </div>

          </div>
        </div>
      </div>

      {/* 3. Main Faculty Content */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        
        {/* Category Header */}
        <div className="mb-8 pb-4 border-b border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-1.5 h-4 bg-[#a30f16] rounded-xs inline-block" />
              <span className="text-xs font-bold text-[#a30f16] uppercase tracking-wider">
                Department View
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-[#092242]">
              {currentCategoryObj.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Showing {filteredFaculty.length} of {DEMO_FACULTY_SLOTS.length} faculty member slots
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-500 font-medium bg-slate-100 px-3 py-1.5 rounded-lg border border-slate-200">
              Template Demo • Ready for Customization
            </span>
          </div>
        </div>

        {/* 20 Horizontal Faculty Cards */}
        {filteredFaculty.length === 0 ? (
          <div className="text-center py-16 bg-slate-50 rounded-xl border border-dashed border-slate-300">
            <User size={36} className="mx-auto text-slate-400 mb-2" />
            <h3 className="text-base font-bold text-slate-700">No faculty members found</h3>
            <p className="text-xs text-slate-500 mt-1">
              Try adjusting your search criteria or switch to "All Departments".
            </p>
            <button
              onClick={() => { setSelectedCategory('all'); setSearchQuery(''); }}
              className="mt-3 text-xs text-[#a30f16] font-semibold hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-5">
            {filteredFaculty.map((faculty, index) => {
              const cardDelay = (index % 5) * 80 + 100;
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
                  <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-slate-200 bg-slate-100">
                    <img
                      src={faculty.photoUrl}
                      alt={faculty.name}
                      className="w-full h-full object-cover object-top"
                      loading="eager"
                      decoding="async"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src =
                          'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80';
                      }}
                    />
                    <div className="absolute bottom-0 right-0 bg-[#092242] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full border border-white">
                      #{faculty.id}
                    </div>
                  </div>
                </div>

                {/* Information on the RIGHT */}
                <div className="flex-1 min-w-0">
                  
                  {/* Faculty Name + Small Red Accent Line */}
                  <div>
                    <div className="flex flex-wrap items-baseline gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-[#092242] leading-tight">
                        {faculty.name}
                      </h3>
                      <span className="text-[11px] font-medium text-slate-500">
                        (Slot #{faculty.id})
                      </span>
                    </div>
                    {/* Small red accent line beside or under faculty name */}
                    <div className="w-8 h-0.5 bg-[#a30f16] mt-1.5 mb-2" />
                  </div>

                  {/* Designation & Department */}
                  <div className="text-sm font-semibold text-slate-800 mb-2">
                    <span>{faculty.designation}</span>
                    <span className="text-slate-400 mx-2 font-normal">•</span>
                    <span className="text-slate-600 font-normal">{faculty.categoryName}</span>
                  </div>

                  {/* Highest Degree, Experience & Email */}
                  <div className="flex flex-wrap items-center gap-y-1.5 gap-x-4 text-xs sm:text-[13px] text-slate-600 mb-3">
                    <div className="flex items-center gap-1.5">
                      <GraduationCap size={15} className="text-[#092242] shrink-0" />
                      <span className="font-medium text-slate-700">{faculty.highestDegree}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Briefcase size={14} className="text-slate-500 shrink-0" />
                      <span className="text-slate-600">{faculty.experience}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Mail size={14} className="text-slate-400 shrink-0" />
                      <a 
                        href={`mailto:${faculty.email}`}
                        className="text-slate-600 hover:text-[#a30f16] transition-colors"
                      >
                        {faculty.email}
                      </a>
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
        )}

        {/* Bottom Pagination / Back to Home navigation */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={onBackToHome}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#092242] hover:text-[#a30f16] transition-colors cursor-pointer"
          >
            <ArrowLeft size={16} />
            <span>Return to Main Campus Homepage</span>
          </button>

          <p className="text-xs text-slate-500">
            Total 20 faculty slots ready for profile details & pictures.
          </p>
        </div>

      </main>

    </div>
  );
};
