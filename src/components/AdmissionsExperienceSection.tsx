import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Compass, MapPin, CheckCircle2, Phone, Mail } from 'lucide-react';
import { UCP_CONTACT } from '../data/ucpData';

interface AdmissionsExperienceSectionProps {
  onOpenApply: () => void;
  onOpenFee: () => void;
}

export const AdmissionsExperienceSection: React.FC<AdmissionsExperienceSectionProps> = ({
  onOpenApply,
  onOpenFee,
}) => {
  return (
    <section 
      id="admissions-section"
      className="py-[100px] bg-[#FAF8F5] border-b border-slate-200/80 overflow-hidden"
      aria-labelledby="admissions-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Motion Reveal */}
        <motion.header 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-3xl mb-14 sm:mb-16"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#C5A059]">
              ADMISSIONS & CAMPUS EXPERIENCE
            </span>
            <span className="h-[2px] w-8 bg-[#C5A059]" aria-hidden="true" />
          </div>

          <h2
            id="admissions-heading"
            className="text-3xl sm:text-4xl lg:text-[46px] font-['Playfair_Display',serif] font-bold text-[#0F2C61] tracking-tight leading-[1.18]"
          >
            Begin Your Journey — Visit Our Campus
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed font-sans max-w-2xl">
            A welcoming arrival experience awaits every prospective student and family at UCP Bahawalpur. Tour our lecture halls, laboratories, and student facilities firsthand.
          </p>
        </motion.header>

        {/* Entrance Photograph with Red Carpet */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
        >
          
          {/* Entrance Red Carpet Welcome Image */}
          <div className="lg:col-span-7">
            <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md">
              <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden">
                <img
                  src="/assets/campus/4_admissions_entrance_red_carpet.jpg"
                  alt="Begin Your Journey - Welcoming Red Carpet Entrance to UCP Bahawalpur Campus"
                  loading="eager"
                  className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                
                {/* Luminous, light-balanced transparent gradient scrim (no heavy dark mud) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />

                <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none">
                  <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#FEF08A] font-semibold block mb-0.5">
                    Campus Arrival & Welcome
                  </span>
                  <h3 className="font-['Playfair_Display',serif] text-xl sm:text-2xl font-bold">
                    The Grand Campus Entrance
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-100 font-sans mt-0.5">
                    Experience the dignity, hospitality, and academic prestige of UCP Bahawalpur.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Admissions Journey & Action Column */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-4">
              <h3 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#0F2C61]">
                Fall 2026 Admissions Now Open
              </h3>
              <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed font-sans">
                Applications are invited for undergraduate BS, BBA, and Associate Degree Programmes across Computer Science, Business, Natural Sciences, and Humanities.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 size={13} />
                </div>
                <div className="text-xs sm:text-sm text-slate-700 font-sans">
                  <strong>Personalized Campus Tours:</strong> Monday through Friday, 9:00 AM – 5:00 PM.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 size={13} />
                </div>
                <div className="text-xs sm:text-sm text-slate-700 font-sans">
                  <strong>Direct Faculty Counseling:</strong> Discuss degree pathways with academic mentors.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircle2 size={13} />
                </div>
                <div className="text-xs sm:text-sm text-slate-700 font-sans">
                  <strong>Scholarships & Financial Aid:</strong> Merit, kinship, and PGC alumni fee concessions.
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3.5">
              <button
                onClick={onOpenApply}
                className="px-6 py-3 bg-[#a30f16] hover:bg-[#860c12] text-white rounded-xl text-xs font-bold uppercase tracking-[0.16em] transition-all shadow-md hover:shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <span>Apply Online</span>
                <ArrowRight size={14} />
              </button>

              <button
                onClick={onOpenFee}
                className="px-5 py-3 bg-white border border-slate-300 hover:border-[#092242] text-[#092242] rounded-xl text-xs font-semibold uppercase tracking-[0.14em] transition-colors cursor-pointer"
              >
                Fee Structure
              </button>
            </div>

            {/* Quick Contact Line */}
            <div className="pt-2 text-xs text-slate-500 font-sans flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <Phone size={13} className="text-[#a30f16]" />
                <span>{UCP_CONTACT.phone}</span>
              </span>
              <span>·</span>
              <span className="flex items-center gap-1.5">
                <Mail size={13} className="text-[#a30f16]" />
                <span>{UCP_CONTACT.admissionsEmail}</span>
              </span>
            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};
