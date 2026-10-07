import React, { useState } from 'react';

interface StripMember {
  id: number;
  marginTop: string;
  height: string;
  image: string;
  name: string;
  role: string;
}

const ELITE_STRIPS: StripMember[] = [
  {
    id: 1,
    marginTop: '30px',
    height: '300px',
    image: '/assets/elite-1.jpg',
    name: 'Member 1',
    role: 'Lead Coordinator',
  },
  {
    id: 2,
    marginTop: '10px',
    height: '320px',
    image: '/assets/elite-2.jpg',
    name: 'Member 2',
    role: 'Student Ambassador',
  },
  {
    id: 3,
    marginTop: '0px',
    height: '360px',
    image: '/assets/elite-3.jpg',
    name: 'Member 3',
    role: 'Media & Outreach',
  },
  {
    id: 4,
    marginTop: '20px',
    height: '330px',
    image: '/assets/elite-4.jpg',
    name: 'Member 4',
    role: 'Community Lead',
  },
  {
    id: 5,
    marginTop: '30px',
    height: '300px',
    image: '/assets/elite-5.jpg',
    name: 'Member 5',
    role: 'Sports Secretary',
  },
  {
    id: 6,
    marginTop: '15px',
    height: '325px',
    image: '/assets/elite-6.jpg',
    name: 'Member 6',
    role: 'Academic Delegate',
  },
  {
    id: 7,
    marginTop: '5px',
    height: '350px',
    image: '/assets/elite-7.jpg',
    name: 'Member 7',
    role: 'Cultural Executive',
  },
  {
    id: 8,
    marginTop: '25px',
    height: '310px',
    image: '/assets/elite-8.jpg',
    name: 'Member 8',
    role: 'Volunteer Liaison',
  },
];

export const UcpEliteNetworkSection: React.FC = () => {
  const [imgErrors, setImgErrors] = useState<Record<number, boolean>>({});

  const handleImgError = (id: number) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section
      id="ucp-elite-network"
      className="w-full relative overflow-hidden select-none min-h-[680px] lg:h-[720px] flex flex-col justify-between"
      style={{
        background: 'linear-gradient(180deg, #0A1931 0%, #101F3A 100%)',
        padding: '60px 0 40px 0',
      }}
    >
      {/* Background Subtle Diagonal Grid Pattern Overlay rgba(255,255,255,0.03) */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              rgba(255, 255, 255, 0.03) 0,
              rgba(255, 255, 255, 0.03) 1px,
              transparent 0,
              transparent 28px
            ),
            repeating-linear-gradient(
              -45deg,
              rgba(255, 255, 255, 0.03) 0,
              rgba(255, 255, 255, 0.03) 1px,
              transparent 0,
              transparent 28px
            )
          `,
        }}
      />

      {/* Subtle Ambient Radial Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(ellipse at center, #1b3b6f 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-between h-full min-h-[620px]">
        
        {/* =========================================================================
            TOP TITLE:
            "UCP ELITE" (Line 1)
            "STUDENT NETWORK" (Line 2)
            Font 42px bold, color #FFC700 yellow, Montserrat/Poppins, 1px tracking, line 1.2
            ========================================================================= */}
        <div className="text-center">
          <h2
            className="font-bold uppercase"
            style={{
              fontFamily: "'Montserrat', 'Poppins', sans-serif",
              fontSize: 'clamp(28px, 4.2vw, 42px)',
              color: '#FFC700',
              letterSpacing: '1px',
              lineHeight: 1.2,
              textShadow: '0 2px 16px rgba(255, 199, 0, 0.25)',
            }}
          >
            <span className="block">UCP ELITE</span>
            <span className="block">STUDENT NETWORK</span>
          </h2>
        </div>

        {/* =========================================================================
            MIDDLE: 8 VERTICAL STRIPS
            Container max-width 1100px, margin 40px auto, flex gap 12px justify center
            Each strip: width 110px, specific margin-top and height offset
            ========================================================================= */}
        <div className="w-full my-[30px] lg:my-[40px] flex justify-start lg:justify-center items-center overflow-x-auto scrollbar-none py-4 px-4 snap-x snap-mandatory">
          <div
            className="flex items-start gap-[12px] justify-start lg:justify-center mx-auto min-w-max lg:min-w-0"
            style={{
              maxWidth: '1100px',
              minHeight: '360px',
            }}
          >
            {ELITE_STRIPS.map((strip) => {
              const hasError = imgErrors[strip.id];

              return (
                <div
                  key={strip.id}
                  className="group relative shrink-0 overflow-hidden cursor-pointer rounded-[4px] snap-center transition-all duration-400 ease-out"
                  style={{
                    width: '110px',
                    height: strip.height,
                    marginTop: strip.marginTop,
                    backgroundColor: '#122543',
                  }}
                >
                  {/* Inner Hover Transition Wrapper */}
                  <div className="w-full h-full relative overflow-hidden transition-all duration-400 ease-out group-hover:scale-[1.06] group-hover:-translate-y-[6px] group-hover:shadow-[0_12px_30px_rgba(0,0,0,0.5)]">
                    {!hasError ? (
                      <img
                        src={strip.image}
                        alt={`UCP Elite Volunteer ${strip.id}`}
                        loading="lazy"
                        onError={() => handleImgError(strip.id)}
                        className="w-full h-full object-cover object-center transition-all duration-400 group-hover:brightness-105"
                        style={{
                          filter: 'brightness(0.95)',
                        }}
                      />
                    ) : (
                      /* Placeholder with Initial if photo fails to load */
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-[#162D52] to-[#0A1931] text-white p-2">
                        <div className="w-12 h-12 rounded-full bg-[#FFC700]/15 border border-[#FFC700]/40 flex items-center justify-center font-bold text-[#FFC700] text-lg mb-2">
                          #{strip.id}
                        </div>
                        <span className="text-[10px] uppercase font-mono tracking-wider text-slate-300 text-center">
                          Elite Team
                        </span>
                      </div>
                    )}

                    {/* Gradient darkening at base for prospectus depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1931]/80 via-transparent to-black/10 pointer-events-none opacity-60 group-hover:opacity-30 transition-opacity duration-300" />
                    
                    {/* Subtle golden top accent on hover */}
                    <div className="absolute top-0 inset-x-0 h-[2px] bg-[#FFC700] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            BOTTOM TEXT:
            "Volunteer Team Members"
            Cursive handwritten font 'Great Vibes' / 'Allison', cursive
            Color #FFFFFF, font 52px, text-align center, margin-top 30px, line 0.9, italic
            ========================================================================= */}
        <div className="text-center mt-[10px] sm:mt-[20px] pb-2">
          <p
            className="italic font-normal"
            style={{
              fontFamily: "'Great Vibes', 'Allison', 'Playfair Display', cursive",
              fontSize: 'clamp(36px, 5.5vw, 52px)',
              color: '#FFFFFF',
              lineHeight: 0.9,
              letterSpacing: '1px',
              textShadow: '0 2px 20px rgba(0, 0, 0, 0.6)',
            }}
          >
            Volunteer Team Members
          </p>
        </div>

      </div>
    </section>
  );
};
