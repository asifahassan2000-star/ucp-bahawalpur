import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, Calendar, Compass, MapPin, CheckCircle2, 
  Phone, Mail, Navigation, Clock, ExternalLink, ShieldCheck, Bus,
  Plus, Minus, LocateFixed
} from 'lucide-react';
import { UCP_CONTACT } from '../data/ucpData';

interface AdmissionsExperienceSectionProps {
  onOpenApply: () => void;
  onOpenFee: () => void;
}

const GOOGLE_MAPS_PIN_URL = 'https://maps.app.goo.gl/PXBnmvrt2kSXk5Fm7';
const UCP_COORDINATES: [number, number] = [29.3956, 71.6722];

export const AdmissionsExperienceSection: React.FC<AdmissionsExperienceSectionProps> = ({
  onOpenApply,
  onOpenFee,
}) => {
  const mapInstanceRef = useRef<any>(null);

  const handleZoomIn = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.zoomOut();
    }
  };

  const handleRecenter = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.flyTo(UCP_COORDINATES, 14, {
        duration: 0.8,
        easeLinearity: 0.25,
      });
    }
  };

  useEffect(() => {
    let checkInterval: ReturnType<typeof setInterval> | null = null;
    let isMounted = true;

    const initMap = () => {
      const L = (window as any).L;
      const mapContainer = document.getElementById('map');
      if (!L || !mapContainer || mapInstanceRef.current) return;

      try {
        const map = L.map('map', {
          zoomControl: false,
          scrollWheelZoom: false,
        }).setView(UCP_COORDINATES, 14);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          maxZoom: 19,
        }).addTo(map);

        // Custom branded pin marker with perspective ground shadow in university official colors (Navy #0F2C61 & Crimson #a30f16)
        const customIcon = L.divIcon({
          className: 'custom-ucp-pin-wrapper',
          html: `
            <div style="position: relative; width: 44px; height: 56px; display: flex; justify-content: center;">
              <!-- Official University Tinted Perspective Ground Shadow -->
              <div class="ucp-marker-shadow" style="
                position: absolute;
                bottom: 2px;
                left: 50%;
                transform: translateX(-50%);
                width: 30px;
                height: 10px;
                background: radial-gradient(ellipse at center, rgba(15, 44, 97, 0.72) 0%, rgba(163, 15, 22, 0.45) 45%, rgba(15, 44, 97, 0.15) 75%, transparent 100%);
                border-radius: 50%;
                filter: blur(1.2px);
                box-shadow: 0 0 12px rgba(163, 15, 22, 0.35);
                pointer-events: none;
              "></div>
              
              <!-- Pulsing Ambient Ground Beacon Ring (UCP Crimson) -->
              <div class="ucp-marker-ring" style="
                position: absolute;
                bottom: 3px;
                left: 50%;
                transform: translateX(-50%);
                width: 24px;
                height: 8px;
                border-radius: 50%;
                border: 1.5px solid rgba(163, 15, 22, 0.55);
                pointer-events: none;
              "></div>

              <!-- University Branded Teardrop Pin -->
              <div class="ucp-marker-pin" style="
                position: absolute;
                top: 0;
                left: 50%;
                margin-left: -20px;
                width: 40px;
                height: 40px;
                background: linear-gradient(135deg, #a30f16 0%, #860c12 55%, #0F2C61 100%);
                border: 2.5px solid #ffffff;
                border-radius: 50% 50% 50% 0;
                transform: rotate(-45deg);
                box-shadow: 0 4px 14px rgba(163, 15, 22, 0.5), inset 0 1px 2px rgba(255, 255, 255, 0.35);
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
              ">
                <div style="
                  transform: rotate(45deg);
                  color: #ffffff;
                  font-weight: 800;
                  font-size: 11px;
                  letter-spacing: -0.2px;
                  font-family: 'Inter', system-ui, sans-serif;
                  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
                ">UCP</div>
              </div>
            </div>
          `,
          iconSize: [44, 56],
          iconAnchor: [22, 54],
          popupAnchor: [0, -54],
        });

        const marker = L.marker(UCP_COORDINATES, { icon: customIcon }).addTo(map);

        const popupContent = `
          <div style="font-family: 'Inter', system-ui, sans-serif; padding: 6px 4px; min-width: 230px;">
            <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 6px;">
              <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #a30f16;"></span>
              <span style="font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.12em; color: #a30f16;">Official Campus</span>
            </div>
            <h4 style="margin: 0 0 4px 0; font-size: 15px; font-weight: 700; color: #0F2C61; font-family: 'Playfair Display', serif;">University of Central Punjab</h4>
            <p style="margin: 0 0 10px 0; font-size: 12px; color: #64748b; line-height: 1.45;">Bahawalpur Campus • Main Academic & Admissions Complex</p>
            <a 
              href="${GOOGLE_MAPS_PIN_URL}" 
              target="_blank" 
              rel="noopener noreferrer"
              style="display: inline-flex; align-items: center; gap: 6px; background: #a30f16; color: #ffffff; padding: 7px 14px; border-radius: 8px; text-decoration: none; font-size: 11px; font-weight: 700; letter-spacing: 0.04em;"
            >
              Get Directions ↗
            </a>
          </div>
        `;

        marker.bindPopup(popupContent).openPopup();

        mapInstanceRef.current = map;

        // Invalidate size to ensure full tile rendering without blank patches
        setTimeout(() => {
          if (mapInstanceRef.current) {
            mapInstanceRef.current.invalidateSize();
          }
        }, 300);
      } catch (err) {
        console.warn('Leaflet map initialization warning:', err);
      }
    };

    if ((window as any).L) {
      initMap();
    } else {
      checkInterval = setInterval(() => {
        if ((window as any).L) {
          if (checkInterval) clearInterval(checkInterval);
          if (isMounted) initMap();
        }
      }, 80);
    }

    return () => {
      isMounted = false;
      if (checkInterval) clearInterval(checkInterval);
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <section 
      id="admissions-section"
      className="py-[90px] sm:py-[110px] bg-[#FAF8F5] border-b border-slate-200/80 overflow-hidden"
      aria-labelledby="admissions-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Motion Reveal */}
        <motion.header 
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="max-w-3xl mb-12 sm:mb-16"
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

        {/* Entrance Photograph with Red Carpet & Admissions Guidance */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-16 sm:mb-20"
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
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />

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

        {/* =========================================================================
            WORLD-CLASS LOCATION & INTERACTIVE LEAFLET OPENSTREETMAP SECTION
            Generous breathing room above and below, refined entrance animations,
            and clean, borderless official typographic hierarchy.
            ========================================================================= */}
        <div id="location-section" className="pt-8 sm:pt-12 scroll-mt-24 relative">
          {/* Anchor alias for location navigation */}
          <div id="campus-location-section" className="absolute -top-24" aria-hidden="true" />

          {/* Subtle Institutional Hairline Separator */}
          <div className="w-full h-px bg-slate-200/80 mb-14 sm:mb-20" aria-hidden="true" />

          <motion.div
            initial={{ opacity: 0, y: 45, scale: 0.99 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.95, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true, amount: 0.15 }}
            className="relative bg-white rounded-3xl border border-slate-200/80 shadow-[0_20px_50px_rgba(15,44,97,0.06)] hover:shadow-[0_25px_60px_rgba(15,44,97,0.09)] transition-shadow duration-500 overflow-hidden p-6 sm:p-8 lg:p-12 mb-10"
          >
            {/* Ambient Subtle Luminous Gradient Backdrop */}
            <div 
              className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-[#0F2C61]/5 blur-3xl pointer-events-none" 
              aria-hidden="true" 
            />

            {/* Section Header with Actions */}
            <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-100">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0F2C61]/5 text-[#0F2C61] text-xs font-semibold tracking-wide uppercase mb-3">
                  <MapPin size={13} className="text-[#a30f16]" />
                  <span>CAMPUS LOCATION & REACHABILITY</span>
                </div>
                <h3 
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#0F2C61] tracking-tight leading-tight"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Find UCP Bahawalpur Campus
                </h3>
                <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl leading-relaxed">
                  Centrally located with convenient transit access across Bahawalpur and Southern Punjab. Explore the interactive campus map below or launch live navigation.
                </p>
              </div>

              {/* Action Bar */}
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100/80 text-slate-700 text-xs font-medium border border-slate-200/80">
                  <Navigation size={13} className="text-slate-500" />
                  <span>29.3956° N, 71.6722° E</span>
                </span>
                <a
                  href={GOOGLE_MAPS_PIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#a30f16] hover:bg-[#860c12] text-white rounded-xl text-xs font-bold uppercase tracking-[0.14em] transition-all shadow-md hover:shadow-lg cursor-pointer"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>

            {/* Interactive Map & Side Location Details Grid */}
            <div className="relative z-10 mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              
              {/* The 400px Responsive Leaflet Map with Marker */}
              <div className="lg:col-span-8">
                <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs bg-slate-100 transition-all duration-300">
                  {/* Free Leaflet.js with OpenStreetMap Container */}
                  <div 
                    id="map" 
                    className="w-full h-[400px] z-10" 
                    style={{ minHeight: '400px' }}
                  />

                  {/* Custom Official University Zoom & Map Navigation Controls */}
                  <div 
                    className="absolute top-3.5 left-3.5 z-[400] flex flex-col items-center bg-white/95 backdrop-blur-md rounded-xl p-1 border border-slate-200/90 shadow-[0_4px_16px_rgba(15,44,97,0.14)]"
                    role="group"
                    aria-label="Map navigation and zoom controls"
                  >
                    <button
                      onClick={handleZoomIn}
                      type="button"
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-[#0F2C61] hover:text-white hover:bg-[#a30f16] active:bg-[#860c12] transition-all cursor-pointer"
                      title="Zoom In"
                      aria-label="Zoom in"
                    >
                      <Plus size={16} strokeWidth={2.5} />
                    </button>
                    <div className="w-5 h-px bg-slate-200/90 my-0.5" />
                    <button
                      onClick={handleZoomOut}
                      type="button"
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-[#0F2C61] hover:text-white hover:bg-[#a30f16] active:bg-[#860c12] transition-all cursor-pointer"
                      title="Zoom Out"
                      aria-label="Zoom out"
                    >
                      <Minus size={16} strokeWidth={2.5} />
                    </button>
                    <div className="w-5 h-px bg-slate-200/90 my-0.5" />
                    <button
                      onClick={handleRecenter}
                      type="button"
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-[#0F2C61] hover:text-white hover:bg-[#0F2C61] active:bg-[#092242] transition-all cursor-pointer"
                      title="Center UCP Campus"
                      aria-label="Reset view and center on campus"
                    >
                      <LocateFixed size={15} strokeWidth={2.2} />
                    </button>
                  </div>

                  {/* Floating Map Status Overlay */}
                  <div className="absolute top-3.5 right-3.5 z-[400] bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-200 shadow-sm pointer-events-none flex items-center gap-2 text-[11px] font-medium text-[#0F2C61]">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>UCP Bahawalpur Campus Marker</span>
                  </div>
                </div>

                {/* Map Footer Note */}
                <div className="mt-3 flex flex-wrap items-center justify-between text-xs text-slate-500 px-1 gap-2">
                  <span>Free OpenStreetMap tiles with Leaflet.js • Click marker for directions</span>
                  <a 
                    href={GOOGLE_MAPS_PIN_URL}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#a30f16] hover:underline font-medium inline-flex items-center gap-1"
                  >
                    <span>View live traffic & transit on Google Maps</span>
                    <ExternalLink size={11} />
                  </a>
                </div>
              </div>

              {/* Minimal Official Campus Access Information Panels (Selected Components) */}
              <div className="lg:col-span-4 flex flex-col divide-y divide-slate-100 pt-1 lg:pt-0">
                
                {/* CSS Selector 1: Location */}
                <div className="py-4.5 first:pt-0 transition-transform duration-200">
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#a30f16] block">
                    Campus Location
                  </span>
                  <h4 
                    className="text-base font-semibold text-[#0F2C61] mt-1 tracking-tight"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    Main Multan Road, Bahawalpur
                  </h4>
                  <a
                    href={GOOGLE_MAPS_PIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[#a30f16] font-semibold mt-2 hover:underline transition-colors"
                  >
                    <span>Get Directions</span>
                    <ArrowRight size={12} />
                  </a>
                </div>

                {/* CSS Selector 2: Visiting Hours */}
                <div className="py-4.5 transition-transform duration-200">
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400 block">
                    Visiting Hours
                  </span>
                  <h4 
                    className="text-base font-semibold text-[#0F2C61] mt-1 tracking-tight"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    Mon – Fri: 8:30 AM – 5:00 PM
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 font-sans">
                    Saturday: 9:00 AM – 2:00 PM
                  </p>
                </div>

                {/* CSS Selector 3: Transport & Commute */}
                <div className="py-4.5 last:pb-0 transition-transform duration-200">
                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-400 block">
                    Campus Transit
                  </span>
                  <h4 
                    className="text-base font-semibold text-[#0F2C61] mt-1 tracking-tight"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    Dedicated Shuttle Fleet
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 font-sans leading-relaxed">
                    Connecting Bahawalpur & surrounding districts
                  </p>
                </div>

              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
