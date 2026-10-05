import React from 'react';
import { ArrowRight, Compass, GraduationCap, MapPin, Sparkles } from 'lucide-react';
import { UCP_CONTACT } from '../data/ucpData';

interface ClosingDramaticSectionProps {
  onOpenApply: () => void;
  onOpenProgrammesPage: () => void;
  onScrollTo?: (id: string) => void;
}

export const ClosingDramaticSection: React.FC<ClosingDramaticSectionProps> = ({
  onOpenApply,
  onOpenProgrammesPage,
  onScrollTo,
}) => {
  return (
    <section 
      id="closing-campus-section"
      className="relative w-full bg-[#07192f] text-white overflow-hidden py-24 sm:py-32"
      aria-labelledby="closing-heading"
    >
      {/* IMAGE 14: Dramatic Architectural Image */}
      {/* "IMAGE 14: CLOSING SECTION - dramatic architectural image." */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/assets/campus/14_closing_dramatic_campus.jpg"
          alt="Dramatic Architectural Perspective of University of Central Punjab Bahawalpur"
          loading="eager"
          decoding="async"
          className="w-full h-full object-cover object-center img-hover-scale"
        />

        {/* Elegant Dark Scrim for Perfect Typography Contrast */}
        <div className="absolute inset-0 bg-[#07192f]/85 md:bg-[#07192f]/80 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07192f] via-transparent to-[#07192f]/60 pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center" data-reveal="mask">
        
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-xs uppercase tracking-[0.24em] font-semibold text-rose-300 mb-6 backdrop-blur-xs">
          <Sparkles size={13} />
          <span>YOUR ACADEMIC HOME IN SOUTHERN PUNJAB</span>
        </div>

        {/* Main Heading with Mask Reveal */}
        <div className="mask-reveal-wrap mb-6">
          <h2
            id="closing-heading"
            className="mask-reveal-child text-3xl sm:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-white leading-[1.15] drop-shadow-md"
            style={{ fontFamily: "'Cormorant Garamond', 'Libre Baskerville', Georgia, serif" }}
          >
            Experience UCP Bahawalpur
          </h2>
        </div>

        {/* Staggered Supporting Text */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-200/95 font-sans leading-relaxed mb-10 drop-shadow-xs">
          A tradition of excellence, a purpose-built architectural campus, and distinguished faculty committed to shaping leaders of character and distinction.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenApply}
            className="px-7 py-3.5 bg-[#a30f16] hover:bg-[#860c12] text-white rounded-xl text-xs sm:text-sm font-bold uppercase tracking-[0.16em] transition-all shadow-xl hover:shadow-rose-950/60 flex items-center gap-2.5 cursor-pointer transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Begin Application</span>
            <ArrowRight size={16} />
          </button>

          <button
            onClick={onOpenProgrammesPage}
            className="px-6 py-3.5 bg-white/15 hover:bg-white/25 text-white border border-white/40 rounded-xl text-xs sm:text-sm font-semibold uppercase tracking-[0.14em] backdrop-blur-md transition-all cursor-pointer shadow-lg"
          >
            Explore Academic Catalog
          </button>
        </div>

        {/* Location & Accreditation Marker */}
        <div className="mt-14 pt-8 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300 font-sans tracking-wide">
          <span>Chartered by the Government of the Punjab</span>
          <span>·</span>
          <span>HEC Recognized (Highest Category)</span>
          <span>·</span>
          <span>Bahawalpur, Punjab, Pakistan</span>
        </div>

      </div>
    </section>
  );
};
