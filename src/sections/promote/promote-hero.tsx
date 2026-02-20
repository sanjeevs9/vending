/* eslint-disable @next/next/no-img-element */
'use client';

import Navbar from '@/components/navbar';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

export default function PromoteHero() {
   const containerRef = useRef<HTMLDivElement>(null);
   const tagRef = useRef<HTMLSpanElement>(null);
   const headingRef = useRef<HTMLHeadingElement>(null);
   const subtitleRef = useRef<HTMLParagraphElement>(null);
   const ctaRef = useRef<HTMLDivElement>(null);
   const machineRef = useRef<HTMLDivElement>(null);
   const statsRef = useRef<HTMLDivElement>(null);

   useGSAP(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(tagRef.current, { y: 20, opacity: 0, duration: 0.6 })
         .from(headingRef.current, { y: 60, opacity: 0, duration: 0.9 }, '-=0.3')
         .from(subtitleRef.current, { y: 30, opacity: 0, duration: 0.7 }, '-=0.5')
         .from(ctaRef.current, { y: 20, opacity: 0, duration: 0.5 }, '-=0.3')
         .from(
            machineRef.current,
            { y: 80, opacity: 0, duration: 1, ease: 'power2.out' },
            '-=0.7'
         )
         .from(statsRef.current, { y: 20, opacity: 0, duration: 0.5 }, '-=0.3');
   }, []);

   const handleScroll = (sectionId: string) => {
      const section = document.getElementById(sectionId);
      if (section) {
         section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
   };

   return (
      <section
         ref={containerRef}
         className="relative w-full min-h-screen overflow-hidden bg-[#f5f5f5]"
      >
         {/* Subtle bg accent */}
         <div
            className="absolute top-[-20%] left-[-10%] w-[60%] h-[120%] pointer-events-none z-0 rounded-full"
            style={{
               background:
                  'radial-gradient(ellipse at center, rgba(231,0,11,0.03) 0%, transparent 70%)'
            }}
         />

         <div className="relative z-10 w-full h-full flex flex-col max-w-[1700px] mx-auto">
            <Navbar />

            <div className="flex flex-col md:flex-row justify-between flex-grow min-h-0 md:min-h-[90vh] px-[3vw] md:px-[4vw] xl:px-[56px]">
               {/* Left — text content */}
               <div className="flex flex-col justify-center items-center md:items-start w-full md:w-[48%] mb-[3vh] md:mb-0 pt-6 md:pt-0">
                  {/* <span
                     ref={tagRef}
                     className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 text-primary text-[10px] md:text-[1.2vw] lg:text-[0.85vw] xl:text-[12px] font-semibold tracking-[0.15em] uppercase rounded-full px-[14px] py-[6px] md:px-[1.5vw] md:py-[0.8vh] xl:px-[18px] xl:py-[8px] mb-[3vh]"
                  >
                     <span className="w-[6px] h-[6px] rounded-full bg-primary animate-pulse" />
                     For Advertisers
                  </span> */}

                  <h1
                     ref={headingRef}
                     className="text-[#1a1a1a] text-[9vw] md:text-[5.5vw] lg:text-[4.2vw] xl:text-[54px] font-bold leading-[1.05] mb-[2.5vh] text-center md:text-left tracking-[-0.02em]"
                  >
                     Advertise Through
                     <br />
                     <span className="text-primary">Snackit</span>
                  </h1>

                  <p
                     ref={subtitleRef}
                     className="text-[#1a1a1a]/45 text-[13px] md:text-[1.8vw] lg:text-[1.2vw] xl:text-[17px] mb-[4vh] tracking-wide leading-[1.6] text-center md:text-left max-w-[460px]"
                  >
                     Turn everyday moments into brand impressions.
                     <br className="hidden md:block" />
                     Reach captive audiences during real consumption
                     <br className="hidden md:block" />
                     moments across India&apos;s smartest workplaces.
                  </p>

                  {/* CTA Buttons */}
                  <div
                     ref={ctaRef}
                     className="flex items-center justify-center md:justify-start gap-[10px] md:gap-[1.5vw]"
                  >
                     <button
                        onClick={() => handleScroll('promote-contact-section')}
                        className="group bg-primary hover:bg-primary-dark text-white font-bold rounded-full px-[18px] md:px-[2.5vw] xl:px-[32px] py-[10px] md:py-[1.8vh] xl:py-[14px] text-[11px] md:text-[1.5vw] lg:text-[1vw] xl:text-[14px] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(231,0,11,0.25)] flex items-center gap-2"
                     >
                        Start Advertising
                        <svg
                           className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                           strokeWidth={2.5}
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                           />
                        </svg>
                     </button>
                     <button
                        onClick={() => handleScroll('promote-features-section')}
                        className="border-2 border-[#1a1a1a]/12 hover:border-primary/40 text-black/55 hover:text-primary rounded-full px-[18px] md:px-[2.5vw] xl:px-[32px] py-[10px] md:py-[1.8vh] xl:py-[14px] text-[11px] md:text-[1.5vw] lg:text-[1vw] xl:text-[14px] font-medium transition-all duration-300"
                     >
                        Explore Options
                     </button>
                  </div>

                  {/* Trust stats */}
                  <div
                     ref={statsRef}
                     className="flex items-center gap-[24px] md:gap-[3vw] xl:gap-[40px] mt-[5vh] pt-[3vh] border-t border-[#1a1a1a]/6"
                  >
                     <div className="text-center md:text-left">
                        <span className="text-black text-[18px] md:text-[2.5vw] lg:text-[1.6vw] xl:text-[22px] font-bold block leading-none">
                           1M+
                        </span>
                        <span className="text-[#1a1a1a]/35 text-[9px] md:text-[1.1vw] lg:text-[0.75vw] xl:text-[11px] tracking-wide uppercase mt-1 block">
                           Daily Impressions
                        </span>
                     </div>
                     <div className="w-[1px] h-[32px] bg-black/8" />
                     <div className="text-center md:text-left">
                        <span className="text-black text-[18px] md:text-[2.5vw] lg:text-[1.6vw] xl:text-[22px] font-bold block leading-none">
                           15+
                        </span>
                        <span className="text-black/35 text-[9px] md:text-[1.1vw] lg:text-[0.75vw] xl:text-[11px] tracking-wide uppercase mt-1 block">
                           Cities
                        </span>
                     </div>
                     <div className="w-[1px] h-[32px] bg-black/8" />
                     <div className="text-center md:text-left">
                        <span className="text-black text-[18px] md:text-[2.5vw] lg:text-[1.6vw] xl:text-[22px] font-bold block leading-none">
                           600+
                        </span>
                        <span className="text-black/35 text-[9px] md:text-[1.1vw] lg:text-[0.75vw] xl:text-[11px] tracking-wide uppercase mt-1 block">
                           Locations
                        </span>
                     </div>
                  </div>
               </div>

               {/* Right — vending machine visual */}
               <div className="w-full md:w-[50%] relative z-[2] flex items-center justify-center min-h-[280px] md:min-h-0">
                  <div
                     ref={machineRef}
                     className="relative md:absolute md:inset-0 flex justify-center items-center z-[5] md:pl-[5%] md:pt-[3%]"
                  >
                     <div className="relative h-[220px] md:h-[500px] w-auto">
                        <img
                           src="/hero/front.png"
                           alt="Snackit vending machine with brand advertising"
                           className="h-full w-auto object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
                        />
                        {/* Branding highlight overlay */}
                        <div className="absolute inset-0 pointer-events-none">
                           <div className="absolute top-[8%] right-[5%] bg-primary/90 text-white text-[8px] md:text-[11px] font-bold px-[8px] md:px-[12px] py-[3px] md:py-[5px] rounded-full shadow-lg animate-pulse">
                              Your Brand Here
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
