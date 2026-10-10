import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Trees, CheckCircle2 } from 'lucide-react';

interface AboutCampusSectionProps {
  onOpenApply?: () => void;
  onOpenLegacyPage?: () => void;
  onScrollTo?: (id: string) => void;
}

export const AboutCampusSection: React.FC<AboutCampusSectionProps> = ({
  onOpenApply,
  onOpenLegacyPage,
}) => {
  const easeCurve = [0.22, 1, 0.36, 1] as const;

  return (
    <section 
      id="our-campus-section"
      className="relative bg-white py-14 sm:py-20 lg:py-[100px] border-b border-slate-200/80"
      aria-labelledby="about-campus-heading"
    >
      {/* Anchor alias for About navigation */}
      <div id="about-section" className="absolute -top-24" aria-hidden="true" />
      
      {/* Subtle architectural dot grid background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(#092242 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Framer Motion Reveal */}
        <motion.div 
          className="max-w-3xl mb-12 sm:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: easeCurve }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#a30f16]">
              OUR CAMPUS · BAHAWALPUR
            </span>
            <span className="h-px w-8 bg-[#a30f16]/40" aria-hidden="true" />
          </div>

          <h2
            id="about-campus-heading"
            className="text-3xl sm:text-4xl lg:text-[46px] font-serif font-semibold text-[#092242] tracking-tight leading-[1.18]"
            style={{ fontFamily: "'Cormorant Garamond', 'Libre Baskerville', Georgia, serif" }}
          >
            An Environment Built for Growth
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-sans max-w-2xl">
            Rooted in the historic scholarly legacy of Bahawalpur and developed with purpose-built modern architecture, UCP Bahawalpur provides world-class educational spaces designed to inspire academic discovery.
          </p>
        </motion.div>

        {/* Dual-Column Architectural Showcase with Framer Motion Alternating Animations */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Featured First — Wide Architectural Exterior (IMAGE 12) from Left (-60px) */}
          <motion.div 
            className="lg:col-span-7 flex flex-col space-y-6"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: easeCurve }}
            viewport={{ once: false, amount: 0.3 }}
          >
            
            {/* IMAGE 12: Architectural Exterior Photograph (Full Bleed 16:9, Edge-to-Edge) */}
            <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-900 shadow-xs w-full aspect-[16/9]">
              <img
                src="/assets/campus/12_about_architecture_exterior.jpg"
                alt="UCP Bahawalpur Architectural Exterior and Modern Campus Facade"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center block transition-transform duration-700 ease-out group-hover:scale-102"
              />
            </div>

            {/* Contemporary Learning Standards Narrative Block (Staggered y: 40) */}
            <motion.div 
              className="bg-[#FDFBF7] border border-slate-200/90 rounded-2xl p-6 sm:p-7 space-y-4 shadow-xs"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: easeCurve }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#a30f16]">
                  <Building2 size={16} />
                  <span>Purpose-Built Academic Infrastructure</span>
                </div>
                <span className="text-[11px] font-medium text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                  Bahawalpur Region
                </span>
              </div>

              <h4 
                className="font-serif text-xl sm:text-2xl font-semibold text-[#092242]"
                style={{ fontFamily: "'Cormorant Garamond', 'Libre Baskerville', Georgia, serif" }}
              >
                World-Class Facilities for Tomorrow’s Leaders
              </h4>

              <p className="text-sm text-slate-600 leading-relaxed font-sans">
                Spread across an expansive footprint, the campus integrates digital lecture theatres, advanced computing labs, high-speed fiber connectivity, and dedicated faculty research lounges. Every space is engineered to facilitate rigorous inquiry and collaborative problem solving.
              </p>

              <div className="pt-2 flex items-center gap-4 flex-wrap border-t border-slate-200/70">
                {onOpenLegacyPage && (
                  <button
                    onClick={onOpenLegacyPage}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#092242] hover:text-[#a30f16] transition-colors cursor-pointer group/btn"
                  >
                    <span>Explore Our Legacy</span>
                    <ArrowRight size={13} className="transition-transform group-hover/btn:translate-x-1 text-[#a30f16]" />
                  </button>
                )}
                {onOpenApply && (
                  <button
                    onClick={onOpenApply}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#a30f16] hover:text-[#092242] transition-colors cursor-pointer group/btn ml-auto"
                  >
                    <span>Apply for Admissions</span>
                    <ArrowRight size={13} className="transition-transform group-hover/btn:translate-x-1" />
                  </button>
                )}
              </div>
            </motion.div>

          </motion.div>

          {/* Right Column (lg:col-span-5): Campus Grounds Visual from Right (+60px) */}
          <motion.div 
            className="lg:col-span-5 flex flex-col space-y-6"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.15, ease: easeCurve }}
            viewport={{ once: false, amount: 0.3 }}
          >
            
            {/* Campus Grounds & Architecture Showcase Card */}
            <div className="bg-[#FAF8F5] border border-slate-200/90 rounded-2xl p-6 sm:p-7 shadow-xs space-y-5">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[#092242]">
                  <Trees size={16} className="text-[#a30f16]" />
                  <span>Central Lawns & Academic Complex</span>
                </div>
                <span className="text-[11px] font-medium text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200">
                  Full Campus View
                </span>
              </div>

              {/* Full-Bleed 16:9 Edge-to-Edge Image Showcase */}
              <div className="group relative overflow-hidden rounded-xl border border-slate-200 bg-slate-900 shadow-xs w-full aspect-[16/9]">
                <img
                  src="/assets/campus/7_about_campus_building_lawn.jpg"
                  alt="University of Central Punjab Bahawalpur Campus Building with Central Lawns"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center block transition-transform duration-700 ease-out group-hover:scale-102"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/assets/campus/12_about_architecture_exterior.jpg';
                  }}
                />
              </div>

              {/* Campus Specs list right underneath the full image */}
              <div className="space-y-3 text-xs sm:text-[13px] text-slate-700">
                <p className="text-slate-600 leading-relaxed font-sans">
                  The Bahawalpur campus grounds combine expansive green lawns with modern academic wings, providing peaceful student gathering areas and outdoor study environments.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3 border-t border-slate-200/70">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>Purpose-Built:</strong> Comprehensive higher education complex.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>Lush Green Grounds:</strong> Central courtyards & manicured lawns.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>State-of-the-Art:</strong> Multimedia lecture halls and research labs.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 size={15} className="text-emerald-600 mt-0.5 shrink-0" />
                    <span><strong>Safe & Accessible:</strong> 24/7 security & pedestrian concourses.</span>
                  </div>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default AboutCampusSection;
