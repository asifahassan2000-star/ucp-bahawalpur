import React from 'react';
import { motion } from 'framer-motion';

export interface EventImageItem {
  src: string;
  alt: string;
  caption?: string;
  tag?: string;
}

export interface AnimatedEventSectionProps {
  title: string;
  description: string;
  images: (EventImageItem | string)[];
  reverse?: boolean;
  categoryLabel?: string;
  categoryNumber?: string;
  highlights?: string[];
}

export const AnimatedEventSection: React.FC<AnimatedEventSectionProps> = ({
  title,
  description,
  images,
  reverse = false,
  categoryLabel,
  categoryNumber,
  highlights = [],
}) => {
  // Normalize image data
  const normalizedImages: EventImageItem[] = images.map((item, idx) => {
    if (typeof item === 'string') {
      return {
        src: item,
        alt: `${title} photograph ${idx + 1}`,
        caption: undefined,
      };
    }
    return item;
  });

  const mainImage = normalizedImages[0];
  const subImage1 = normalizedImages[1] || normalizedImages[0];
  const subImage2 = normalizedImages[2] || normalizedImages[1] || normalizedImages[0];

  const easeCurve = [0.22, 1, 0.36, 1] as const;

  // If reverse=false: images assemble from left (-60), text from right (60)
  // If reverse=true: images from right (60), text from left (-60)
  const imagesInitialX = reverse ? 60 : -60;
  const textInitialX = reverse ? -60 : 60;

  return (
    <div className="relative mb-28 sm:mb-40 last:mb-16 select-none">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* ====================================================================
            BENTO GRID (3 images wrapped in motion.div, repeating on scroll)
            ==================================================================== */}
        <motion.div
          className={`lg:col-span-7 ${
            reverse ? 'order-1 lg:order-2' : 'order-1'
          }`}
          initial={{ opacity: 0, x: imagesInitialX }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: easeCurve }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-12 gap-4">
            
            {/* 1. Large Bento Image */}
            <motion.div
              className="sm:col-span-7 h-[300px] sm:h-[420px] rounded-2xl overflow-hidden border border-[#0F2C61]/10 bg-[#F5F7FA] shadow-md hover:shadow-xl transition-all duration-500 group relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: easeCurve }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <img
                src={mainImage?.src}
                alt={mainImage?.alt}
                loading="eager"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F2C61]/80 via-transparent to-transparent pointer-events-none" />
              {mainImage?.caption && (
                <div className="absolute bottom-4 left-5 right-5 text-white pointer-events-none">
                  <span className="text-[10px] font-mono tracking-widest uppercase text-white/80 bg-[#0F2C61]/70 px-2 py-0.5 rounded">
                    {mainImage.tag || 'FEATURE'}
                  </span>
                  <p className="mt-1 text-xs sm:text-sm font-sans text-white/95 line-clamp-1 drop-shadow-xs">
                    {mainImage.caption}
                  </p>
                </div>
              )}
            </motion.div>

            {/* 2 & 3. Two Small Bento Images (Stacked with 16px gap & staggered y:40 to y:0) */}
            <div className="sm:col-span-5 grid grid-rows-2 gap-4 h-[300px] sm:h-[420px]">
              
              {/* Small Image 1: delay 0.2, y:40 to y:0 */}
              <motion.div
                className="h-full rounded-2xl overflow-hidden border border-[#0F2C61]/10 bg-[#F5F7FA] shadow-md hover:shadow-xl transition-all duration-500 group relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2, ease: easeCurve }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <img
                  src={subImage1?.src}
                  alt={subImage1?.alt}
                  loading="eager"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2C61]/75 via-transparent to-transparent pointer-events-none" />
                {subImage1?.caption && (
                  <div className="absolute bottom-3 left-4 right-4 text-white pointer-events-none">
                    <p className="text-[11px] font-sans text-white/95 line-clamp-1 drop-shadow-xs">
                      {subImage1.caption}
                    </p>
                  </div>
                )}
              </motion.div>

              {/* Small Image 2: delay 0.4, y:40 to y:0 */}
              <motion.div
                className="h-full rounded-2xl overflow-hidden border border-[#0F2C61]/10 bg-[#F5F7FA] shadow-md hover:shadow-xl transition-all duration-500 group relative"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4, ease: easeCurve }}
                viewport={{ once: false, amount: 0.3 }}
              >
                <img
                  src={subImage2?.src}
                  alt={subImage2?.alt}
                  loading="eager"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2C61]/75 via-transparent to-transparent pointer-events-none" />
                {subImage2?.caption && (
                  <div className="absolute bottom-3 left-4 right-4 text-white pointer-events-none">
                    <p className="text-[11px] font-sans text-white/95 line-clamp-1 drop-shadow-xs">
                      {subImage2.caption}
                    </p>
                  </div>
                )}
              </motion.div>

            </div>

          </div>
        </motion.div>

        {/* ====================================================================
            TEXT CONTENT COLUMN (Wrapped in motion.div with delay 0.3)
            ==================================================================== */}
        <motion.div
          className={`lg:col-span-5 flex flex-col justify-center space-y-6 ${
            reverse ? 'order-2 lg:order-1' : 'order-2'
          }`}
          initial={{ opacity: 0, x: textInitialX }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: easeCurve }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {/* Label / Numbering */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#0F2C61] font-bold">
              {categoryNumber || (reverse ? 'COMMUNITY STORY' : 'CAMPUS STORY')}
              {categoryLabel && ` / ${categoryLabel.toUpperCase()}`}
            </span>
            <span className="h-px w-10 bg-[#0F2C61]/25" aria-hidden="true" />
          </div>

          {/* Heading in Playfair Display / Serif */}
          <h3
            className="text-2xl sm:text-3xl lg:text-[40px] font-serif font-bold text-[#0F2C61] tracking-tight leading-[1.16]"
            style={{ fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif" }}
          >
            {title}
          </h3>

          {/* Description in Inter / Sans */}
          <p
            className="text-slate-600 text-base sm:text-[17px] leading-relaxed font-sans"
            style={{ fontFamily: "'Inter', 'Source Sans 3', system-ui, sans-serif" }}
          >
            {description}
          </p>

          {/* Highlights */}
          {highlights.length > 0 && (
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-mono text-slate-600">
              {highlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#F5F7FA] border border-[#0F2C61]/10 text-[#0F2C61] font-medium"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F2C61]" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          )}
        </motion.div>

      </div>
    </div>
  );
};

export default AnimatedEventSection;
