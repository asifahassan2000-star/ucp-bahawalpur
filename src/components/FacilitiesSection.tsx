import React, { useState } from 'react';
import { 
  Building2, Cpu, BookOpen, Microscope, ArrowRight
} from 'lucide-react';

interface FacilitiesSectionProps {
  onOpenApply?: () => void;
  onOpenCampusLifePage?: () => void;
}

export const FacilitiesSection: React.FC<FacilitiesSectionProps> = ({
  onOpenApply,
  onOpenCampusLifePage,
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'environment' | 'library' | 'computer' | 'science'>('all');

  return (
    <section 
      id="facilities-section"
      className="py-12 sm:py-16 bg-[#FAFAF8] border-b border-slate-200"
      aria-labelledby="facilities-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <header className="max-w-3xl mb-8 sm:mb-10">
          <span className="text-xs font-medium uppercase tracking-wider text-slate-500 block mb-2">
            Campus Facilities
          </span>
          <h2
            id="facilities-heading"
            className="text-2xl sm:text-3xl font-serif font-semibold text-slate-900 tracking-tight"
          >
            Learning Environment, Library & Laboratories
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
            Explore the academic spaces, central library, computer labs, and science facilities at UCP Bahawalpur.
          </p>

          {/* Minimal Category Tabs */}
          <div className="mt-6 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {[
              { id: 'all', label: 'All' },
              { id: 'environment', label: 'Learning Environment' },
              { id: 'library', label: 'Central Library' },
              { id: 'computer', label: 'Computer Labs' },
              { id: 'science', label: 'Science Labs' },
            ].map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-3 py-1.5 rounded text-xs sm:text-sm font-medium transition-colors shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-slate-900 text-white'
                      : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </header>

        {/* 1. LEARNING ENVIRONMENT */}
        {(activeTab === 'all' || activeTab === 'environment') && (
          <div className="mb-12 sm:mb-16">
            <div className="flex items-center gap-2 pb-3 mb-6 border-b border-slate-200">
              <Building2 size={16} className="text-slate-600" />
              <h3 className="text-base sm:text-lg font-serif font-semibold text-slate-900">
                Learning Environment & Campus Architecture
              </h3>
            </div>

            {/* Main Grand Staircase Card (Full Bleed 16:9, Edge-to-Edge) */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden mb-6 shadow-xs">
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-900">
                <img
                  src="/assets/campus/9_facilities_grand_staircase.jpg"
                  alt="Campus Grand Staircase and Atrium"
                  loading="lazy"
                  className="w-full h-full object-cover object-center block"
                />
              </div>
              <div className="p-4 sm:p-5 border-t border-slate-100">
                <h4 className="text-sm sm:text-base font-semibold text-slate-900">
                  Grand Staircase & Central Atrium
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                  Open multi-level architectural staircase and spacious central atrium designed with natural light.
                </p>
              </div>
            </div>

            {/* 2 Grid Cards: Lobby and Hallways (Full Bleed 16:9, Edge-to-Edge) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-900">
                  <img
                    src="/assets/campus/5_facilities_interior_lobby.jpg"
                    alt="Academic Lobby and Reception"
                    loading="lazy"
                    className="w-full h-full object-cover object-center block"
                  />
                </div>
                <div className="p-4 border-t border-slate-100">
                  <h4 className="text-sm sm:text-base font-semibold text-slate-900">
                    Academic Lobby & Reception
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                    Spacious reception hall connecting administrative offices and student access corridors.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-900">
                  <img
                    src="/assets/campus/10_campus_sunlit_hallway.jpg"
                    alt="Campus Corridors and Walkways"
                    loading="lazy"
                    className="w-full h-full object-cover object-center block"
                  />
                </div>
                <div className="p-4 border-t border-slate-100">
                  <h4 className="text-sm sm:text-base font-semibold text-slate-900">
                    Campus Walkways & Corridors
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                    Naturally lit corridors providing smooth movement between lecture rooms and study areas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. CENTRAL LIBRARY */}
        {(activeTab === 'all' || activeTab === 'library') && (
          <div className="mb-12 sm:mb-16">
            <div className="flex items-center gap-2 pb-3 mb-6 border-b border-slate-200">
              <BookOpen size={16} className="text-slate-600" />
              <h3 className="text-base sm:text-lg font-serif font-semibold text-slate-900">
                Central Library
              </h3>
            </div>

            {/* Main Library Reading Area Card (Full Bleed 16:9, Edge-to-Edge) */}
            <div className="bg-white rounded-xl border border-slate-200 overflow-hidden mb-6 shadow-xs">
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-900">
                <img
                  src="/assets/facilities/library-main-large.jpg"
                  alt="Central Library Main Reading Hall"
                  loading="lazy"
                  className="w-full h-full object-cover object-center block"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = 'https://i.ibb.co/RkzjL6m7/Whats-App-Image-2026-10-09-at-3-23-24-AM.jpg';
                  }}
                />
              </div>
              <div className="p-4 sm:p-5 border-t border-slate-100">
                <h4 className="text-sm sm:text-base font-semibold text-slate-900">
                  Main Reading Hall
                </h4>
                <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                  Spacious quiet reading hall equipped with dedicated study tables and reference materials.
                </p>
              </div>
            </div>

            {/* 2 Grid Cards: Study Desks & Book Stacks (Vertical 9:16 Frame) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
                <div className="relative w-full aspect-[9/16] overflow-hidden bg-slate-900">
                  <img
                    src="/assets/facilities/library-reading-2.jpg"
                    alt="Quiet Study Desks"
                    loading="lazy"
                    className="w-full h-full object-cover object-center block"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://i.ibb.co/369CDwy/Whats-App-Image-2026-10-09-at-3-42-32-AM.jpg';
                    }}
                  />
                </div>
                <div className="p-4 border-t border-slate-100">
                  <h4 className="text-sm sm:text-base font-semibold text-slate-900">
                    Individual Study Areas
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                    Quiet seating arrangements for individual reading, exam revision, and research work.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
                <div className="relative w-full aspect-[9/16] overflow-hidden bg-slate-900">
                  <img
                    src="/assets/facilities/library-stacks-new.jpg"
                    alt="Central Library Reference Section and Book Collections"
                    loading="lazy"
                    className="w-full h-full object-cover object-center block"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://i.ibb.co/S4MMZmXv/Whats-App-Image-2026-10-09-at-9-09-59-AM.jpg';
                    }}
                  />
                </div>
                <div className="p-4 border-t border-slate-100">
                  <h4 className="text-sm sm:text-base font-semibold text-slate-900">
                    Book Stacks & Collections
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                    Organized shelves with curriculum textbooks, reference guides, and journals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. COMPUTER LABS */}
        {(activeTab === 'all' || activeTab === 'computer') && (
          <div className="mb-12 sm:mb-16">
            <div className="flex items-center gap-2 pb-3 mb-6 border-b border-slate-200">
              <Cpu size={16} className="text-slate-600" />
              <h3 className="text-base sm:text-lg font-serif font-semibold text-slate-900">
                Computer Laboratories
              </h3>
            </div>

            {/* 2 Grid Cards: Computer Lab 1 (Landscape) & Computer Lab 2 (Vertical 9:16 Frame) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-900">
                  <img
                    src="/assets/facilities/comp-lab-1.jpg"
                    alt="Computer Laboratory Workstations"
                    loading="lazy"
                    className="w-full h-full object-cover object-center block"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://i.ibb.co/XZypYYCk/Whats-App-Image-2026-10-09-at-6-42-28-AM.jpg';
                    }}
                  />
                </div>
                <div className="p-4 border-t border-slate-100">
                  <h4 className="text-sm sm:text-base font-semibold text-slate-900">
                    Computer Lab 1
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                    High-density desktop computing facility for programming, algorithms, and database courses.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
                <div className="relative w-full aspect-[9/16] overflow-hidden bg-slate-900">
                  <img
                    src="/assets/facilities/comp-lab-2.jpg"
                    alt="IT and Computing Lab"
                    loading="lazy"
                    className="w-full h-full object-cover object-center block"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = 'https://i.ibb.co/JwR6L6CZ/Whats-App-Image-2026-10-09-at-6-51-57-AM.jpg';
                    }}
                  />
                </div>
                <div className="p-4 border-t border-slate-100">
                  <h4 className="text-sm sm:text-base font-semibold text-slate-900">
                    Computer Lab 2
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                    Dedicated computer lab setup for software practicals, networking, and IT projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 4. SCIENCE LABS */}
        {(activeTab === 'all' || activeTab === 'science') && (
          <div className="mb-10 sm:mb-12">
            <div className="flex items-center gap-2 pb-3 mb-6 border-b border-slate-200">
              <Microscope size={16} className="text-slate-600" />
              <h3 className="text-base sm:text-lg font-serif font-semibold text-slate-900">
                Science Laboratories
              </h3>
            </div>

            {/* 2 Grid Cards: Science Lab 1 & Science Lab 2 (Full Bleed 16:9, Edge-to-Edge) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-900">
                  <img
                    src="/assets/facilities/science-lab-1.jpg"
                    alt="Science Laboratory"
                    loading="lazy"
                    className="w-full h-full object-cover object-center block"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/images/offer-3.jpg';
                    }}
                  />
                </div>
                <div className="p-4 border-t border-slate-100">
                  <h4 className="text-sm sm:text-base font-semibold text-slate-900">
                    Science Laboratory
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                    Equipped experimental workstation benches for practical coursework and chemical testing.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-xs">
                <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-900">
                  <img
                    src="/assets/facilities/science-lab-2.jpg"
                    alt="Life Sciences and Biology Laboratory"
                    loading="lazy"
                    className="w-full h-full object-cover object-center block"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = '/src/assets/images/academic_science_lab_1790317707417.jpg';
                    }}
                  />
                </div>
                <div className="p-4 border-t border-slate-100">
                  <h4 className="text-sm sm:text-base font-semibold text-slate-900">
                    Life Sciences Laboratory
                  </h4>
                  <p className="mt-1 text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                    Practical laboratory space with optical microscopes for life sciences and bioscience study.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Minimal Bottom Action Strip */}
        <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-600">
          <span>Explore campus facilities or apply online for admissions.</span>
          <div className="flex items-center gap-3">
            {onOpenCampusLifePage && (
              <button
                onClick={onOpenCampusLifePage}
                className="px-3.5 py-1.5 bg-white hover:bg-slate-50 text-slate-700 font-medium rounded border border-slate-200 transition-colors cursor-pointer"
              >
                Campus Life
              </button>
            )}
            {onOpenApply && (
              <button
                onClick={onOpenApply}
                className="px-3.5 py-1.5 bg-[#a30f16] hover:bg-[#850c12] text-white font-medium rounded transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <span>Apply Now</span>
                <ArrowRight size={14} />
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default FacilitiesSection;

