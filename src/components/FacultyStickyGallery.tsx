import React, { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';

const FACULTY_IMAGES = [
  {
    id: 1,
    src: '/src/assets/images/offer_faculty_lecture_1791279851129.jpg',
    fallback: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1600&q=85',
  },
  {
    id: 2,
    src: '/src/assets/images/academic_business_seminar_1790317693556.jpg',
    fallback: 'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=1600&q=85',
  },
  {
    id: 3,
    src: '/src/assets/images/offer_holistic_study_1791279880054.jpg',
    fallback: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=85',
  },
  {
    id: 4,
    src: '/src/assets/images/academic_humanities_library_1790317720335.jpg',
    fallback: 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1600&q=85',
  },
  {
    id: 5,
    src: '/src/assets/images/academic_science_lab_1790317707417.jpg',
    fallback: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1600&q=85',
  },
  {
    id: 6,
    src: '/src/assets/images/academic_computing_lab_1790317681008.jpg',
    fallback: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1600&q=85',
  },
  {
    id: 7,
    src: '/src/assets/images/offer_modern_lab_1791279866696.jpg',
    fallback: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=85',
  },
  {
    id: 8,
    src: '/src/assets/images/offer_international_office_1791280646986.jpg',
    fallback: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=85',
  },
  {
    id: 9,
    src: '/src/assets/images/offer_top_positions_1791279835956.jpg',
    fallback: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=85',
  },
  {
    id: 10,
    src: '/src/assets/images/academic_hero_campus_1790317667918.jpg',
    fallback: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1600&q=85',
  },
];

export const FacultyStickyGallery: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Measure scroll through section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const count = FACULTY_IMAGES.length;

  // Generate smooth cross-fade opacities for all 10 full-size straight images
  const opacities = FACULTY_IMAGES.map((_, i) => {
    if (i === 0) {
      return useTransform(scrollYProgress, [0, 0.08, 0.15], [1, 1, 0]);
    }
    if (i === count - 1) {
      return useTransform(scrollYProgress, [0.85, 0.92, 1], [0, 1, 1]);
    }
    const center = i / (count - 1);
    const halfWindow = 0.52 / (count - 1);
    const start = Math.max(0, center - halfWindow);
    const end = Math.min(1, center + halfWindow);
    return useTransform(
      scrollYProgress,
      [start, center - 0.02, center + 0.02, end],
      [0, 1, 1, 0]
    );
  });

  // Subtle cinematic depth zoom for each image as it stays in focus
  const scales = FACULTY_IMAGES.map((_, i) => {
    const center = i / (count - 1);
    const window = 1 / (count - 1);
    const start = Math.max(0, center - window);
    const end = Math.min(1, center + window);
    return useTransform(scrollYProgress, [start, end], [1.0, 1.04]);
  });

  // Overall scroll progress bar width
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section 
      id="faculty-sticky-focus" 
      className="w-full bg-white border-t border-slate-100"
    >
      {/* =========================================================================
          DESKTOP VIEW (Screens >= 768px):
          Apple-Style 300vh Sticky Scroll Gallery with Smooth Fade Transition
          ========================================================================= */}
      <div ref={containerRef} className="hidden md:block relative h-[300vh] bg-white">
        {/* Sticky Full-Viewport Stage */}
        <div className="sticky top-0 h-screen w-full flex items-center justify-center p-6 lg:p-8 overflow-hidden bg-white">
          
          {/* Full-Size Straight Cinematic Image Canvas (Desktop full screen) */}
          <div className="relative w-full max-w-7xl h-[80vh] lg:h-[84vh] rounded-3xl overflow-hidden shadow-xl border border-slate-200/90 bg-slate-950">
            
            {/* 10 Big Full-Size Straight Images with Smooth Cinematic Fade Transition */}
            {FACULTY_IMAGES.map((item, index) => {
              const opacity = opacities[index];
              const scale = scales[index];

              return (
                <motion.div
                  key={item.id}
                  style={{ opacity }}
                  className="absolute inset-0 w-full h-full overflow-hidden"
                >
                  <motion.img
                    style={{ scale }}
                    src={item.src}
                    alt={`Faculty Session ${index + 1}`}
                    loading={index < 2 ? 'eager' : 'lazy'}
                    decoding="async"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      if (!target.dataset.tried) {
                        target.dataset.tried = 'true';
                        target.src = item.fallback;
                      }
                    }}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out"
                  />
                </motion.div>
              );
            })}

            {/* Minimalist Bottom Indicator Bar — Clean & Official with No Distracting Text */}
            <div className="absolute bottom-6 inset-x-6 z-20 flex items-center justify-between pointer-events-none">
              
              {/* Minimal Image Counter Badge */}
              <div className="flex items-center gap-2 bg-black/60 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/20 text-white font-mono text-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <div className="flex items-center">
                  {FACULTY_IMAGES.map((_, i) => (
                    <motion.span
                      key={i}
                      style={{ opacity: opacities[i] }}
                      className="absolute"
                    >
                      {String(i + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
                    </motion.span>
                  ))}
                  {/* Spacer for width */}
                  <span className="opacity-0">00 / {String(count).padStart(2, '0')}</span>
                </div>
              </div>

              {/* Subtle Progress Bar */}
              <div className="w-36 lg:w-48 h-1 bg-white/20 backdrop-blur-xs rounded-full overflow-hidden">
                <motion.div
                  style={{ width: progressWidth }}
                  className="h-full bg-white rounded-full"
                />
              </div>

            </div>

          </div>

        </div>
      </div>

      {/* =========================================================================
          MOBILE VIEW (Screens < 768px):
          Sticky disabled, height auto. Straight stacked vertical cards 
          width 100%, height 250px, no overlap, smooth fade-in on scroll
          to eliminate mobile sticky scroll lock bugs.
          ========================================================================= */}
      <div className="block md:hidden w-full px-4 py-8 max-w-lg mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-4 bg-[#a30f16] rounded-xs inline-block" />
          <span className="text-xs font-bold text-[#092242] uppercase tracking-wider">
            Faculty Life & Academic Sessions
          </span>
        </div>

        <div className="flex flex-col gap-4 w-full">
          {FACULTY_IMAGES.map((item, index) => (
            <motion.div
              key={`mob-${item.id}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="w-full h-[250px] rounded-2xl overflow-hidden shadow-xs border border-slate-200 bg-slate-900 relative"
            >
              <img
                src={item.src}
                alt={`Faculty Session ${index + 1}`}
                loading="lazy"
                decoding="async"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (!target.dataset.tried) {
                    target.dataset.tried = 'true';
                    target.src = item.fallback;
                  }
                }}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20 text-white font-mono text-[11px]">
                {String(index + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};
