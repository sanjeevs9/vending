'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useState } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const values = [
   {
      number: '01',
      title: 'Smart Technology',
      description:
         'Our vending machines are equipped with intelligent systems supporting digital payments, prepaid cards, and currency denominations — ensuring smooth, cashless convenience.'
   },
   {
      number: '02',
      title: 'Operational Excellence',
      description:
         'We maintain high standards of hygiene, freshness, and timely replenishment through a dedicated, high-performing refill and logistics team.'
   },
   {
      number: '03',
      title: 'Customer Experience First',
      description:
         'We focus on reliability, speed, and product variety so that your employees and customers always have access to what they need — without compromise.'
   }
];

export default function AboutPurpose() {
   const [activeValue, setActiveValue] = useState<number | null>(null);

   const purposeRef = useRef<HTMLDivElement>(null);
   const purposeHeadingRef = useRef<HTMLDivElement>(null);
   const quoteRef = useRef<HTMLParagraphElement>(null);
   const missionRef = useRef<HTMLDivElement>(null);
   const visionRef = useRef<HTMLDivElement>(null);
   const bridgeRef = useRef<HTMLParagraphElement>(null);
   const valuesHeadingRef = useRef<HTMLDivElement>(null);
   const valuesListRef = useRef<HTMLDivElement>(null);

   useGSAP(() => {
      gsap.from(purposeHeadingRef.current, {
         y: 50,
         opacity: 0,
         duration: 0.8,
         ease: 'power2.out',
         scrollTrigger: {
            trigger: purposeRef.current,
            start: 'top 75%'
         }
      });

      gsap.from(quoteRef.current, {
         y: 30,
         opacity: 0,
         duration: 0.7,
         ease: 'power2.out',
         scrollTrigger: {
            trigger: quoteRef.current,
            start: 'top 85%'
         }
      });

      gsap.from(missionRef.current, {
         x: -80,
         opacity: 0,
         duration: 1,
         ease: 'power2.out',
         scrollTrigger: {
            trigger: missionRef.current,
            start: 'top 85%'
         }
      });

      gsap.from(visionRef.current, {
         x: 80,
         opacity: 0,
         duration: 1,
         ease: 'power2.out',
         scrollTrigger: {
            trigger: visionRef.current,
            start: 'top 85%'
         }
      });

      gsap.from(bridgeRef.current, {
         y: 20,
         opacity: 0,
         duration: 0.7,
         ease: 'power2.out',
         scrollTrigger: {
            trigger: bridgeRef.current,
            start: 'top 88%'
         }
      });

      gsap.from(valuesHeadingRef.current, {
         y: 40,
         opacity: 0,
         duration: 0.8,
         ease: 'power2.out',
         scrollTrigger: {
            trigger: valuesHeadingRef.current,
            start: 'top 80%'
         }
      });

      if (valuesListRef.current) {
         gsap.from(valuesListRef.current.children, {
            x: -60,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
               trigger: valuesListRef.current,
               start: 'top 80%'
            }
         });
      }
   }, []);

   return (
      <>
         {/* Our Purpose — Mission & Vision */}
         <section
            ref={purposeRef}
            className="w-full min-h-screen flex flex-col justify-center py-[10vh] bg-[#fafafa] overflow-hidden relative"
         >
            {/* Subtle red organic shape — right */}
            <svg
               className="absolute bottom-[-10%] right-[-5%] w-[30%] h-[80%] pointer-events-none z-0"
               viewBox="0 0 400 500"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  d="M100,460 C20,400 -10,260 30,150 C70,40 180,0 280,50 C380,100 400,240 360,350 C320,460 200,520 100,460 Z"
                  fill="#E7000B"
                  opacity="0.04"
               />
            </svg>

            <div className="absolute top-[12%] left-[6%] w-[4px] h-[4px] rounded-full bg-[#FDB12B]/30 pointer-events-none z-0" />

            <div className="relative z-10 max-w-[1200px] mx-auto px-[4vw] md:px-[6vw] xl:px-[56px] w-full">
               {/* Heading */}
               <div ref={purposeHeadingRef} className="text-center mb-[4vh]">
                  <span className="text-[#FDB12B] text-[12px] md:text-[1.5vw] lg:text-[1vw] xl:text-[14px] font-medium tracking-widest uppercase">
                     Our Purpose
                  </span>
                  <h2 className="text-[28px] md:text-[5vw] lg:text-[4vw] xl:text-[48px] font-bold text-[#1a1a1a] mt-[1vh]">
                     Making Quality Snacking
                     <br />
                     <span className="text-[#E7000B]">Instantly Accessible</span>
                  </h2>
               </div>

               <p
                  ref={quoteRef}
                  className="text-[#1a1a1a]/45 text-[15px] md:text-[2vw] lg:text-[1.4vw] xl:text-[18px] text-center max-w-[600px] mx-auto mb-[8vh] italic"
               >
                  &ldquo;We believe access to good food should never interrupt
                  great work.&rdquo;
               </p>

               {/* Mission Block — editorial style with number watermark */}
               <div
                  ref={missionRef}
                  className="relative mb-[3vh] rounded-xl overflow-hidden bg-white border-l-4 border-[#FDB12B] p-[24px] md:p-[5vh] shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
               >
                  <span className="absolute top-[12px] right-[16px] md:top-[20px] md:right-[32px] text-[60px] md:text-[100px] font-bold text-[#FDB12B]/[0.07] leading-none select-none pointer-events-none">
                     01
                  </span>
                  <span className="text-[#FDB12B] text-[11px] md:text-[1.3vw] lg:text-[0.9vw] xl:text-[13px] font-semibold tracking-[0.2em] uppercase">
                     Mission
                  </span>
                  <h3 className="text-[#1a1a1a] text-[20px] md:text-[3vw] lg:text-[2.2vw] xl:text-[28px] font-bold mt-[1.5vh] leading-tight max-w-[85%]">
                     To enable easy, reliable access to quality snacks and
                     essentials wherever people work, learn, or move.
                  </h3>
               </div>

               {/* Vision Block — editorial style */}
               <div
                  ref={visionRef}
                  className="relative mb-[4vh] rounded-xl overflow-hidden bg-white border-l-4 border-[#E7000B] p-[24px] md:p-[5vh] shadow-[0_4px_20px_rgba(0,0,0,0.04)]"
               >
                  <span className="absolute top-[12px] right-[16px] md:top-[20px] md:right-[32px] text-[60px] md:text-[100px] font-bold text-[#E7000B]/[0.07] leading-none select-none pointer-events-none">
                     02
                  </span>
                  <span className="text-[#E7000B] text-[11px] md:text-[1.3vw] lg:text-[0.9vw] xl:text-[13px] font-semibold tracking-[0.2em] uppercase">
                     Vision
                  </span>
                  <h3 className="text-[#1a1a1a] text-[20px] md:text-[3vw] lg:text-[2.2vw] xl:text-[28px] font-bold mt-[1.5vh] leading-tight max-w-[85%]">
                     To build India&apos;s most dependable and technology-driven
                     smart vending network — trusted by enterprises, institutions,
                     and individuals alike.
                  </h3>
               </div>

               {/* Bridge text */}
               <p
                  ref={bridgeRef}
                  className="text-[#1a1a1a]/40 text-[14px] md:text-[1.8vw] lg:text-[1.2vw] xl:text-[16px] text-center max-w-[600px] mx-auto mt-[2vh]"
               >
                  From corporate offices to educational campuses, we ensure that
                  hunger never slows productivity.
               </p>
            </div>
         </section>

         {/* What Fuels Us — Interactive Values Accordion */}
         <section className="w-full min-h-[80vh] relative flex flex-col justify-center py-[10vh] overflow-hidden bg-white">
            {/* Decorative gold organic shape — right */}
            <svg
               className="absolute top-[-10%] right-[-5%] w-[35%] h-[120%] pointer-events-none z-0"
               viewBox="0 0 400 500"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  d="M300,40 C380,100 370,250 320,360 C270,470 160,500 80,440 C0,380 -20,240 30,140 C80,40 200,-20 300,40 Z"
                  fill="#FDB12B"
                  opacity="0.06"
               />
            </svg>

            <div className="absolute bottom-[20%] left-[5%] w-[8px] h-[8px] rounded-full bg-[#FDB12B]/25 pointer-events-none z-0" />
            <div className="absolute top-[25%] right-[10%] w-[4px] h-[4px] rounded-full bg-[#E7000B]/20 pointer-events-none z-0" />

            <div className="relative z-10 max-w-[1200px] mx-auto px-[4vw] md:px-[6vw] xl:px-[56px] w-full">
               <div ref={valuesHeadingRef} className="mb-[6vh]">
                  <span className="text-[#FDB12B] text-[12px] md:text-[1.5vw] lg:text-[1vw] xl:text-[14px] font-medium tracking-widest uppercase block text-center">
                     Our Values
                  </span>
                  <h2 className="text-[28px] md:text-[5vw] lg:text-[4vw] xl:text-[48px] font-bold text-[#1a1a1a] mt-[1vh] mb-[2vh] text-center">
                     What Fuels Us
                  </h2>
                  <p className="text-[14px] md:text-[2vw] lg:text-[1.4vw] xl:text-[17px] text-[#1a1a1a]/45 max-w-[600px] mx-auto text-center">
                     Every decision at Snackit is guided by three core principles:
                  </p>
               </div>

               {/* Interactive accordion — inspired by VendingRequirements */}
               <div ref={valuesListRef} className="max-w-[900px] mx-auto">
                  {values.map((value, idx) => (
                     <div key={idx + 1}>
                        <div className="w-full h-[1.5px] bg-gradient-to-r from-[#FDB12B] via-[#FDB12B]/30 to-transparent" />
                        <div
                           className="py-[3.5vh] px-[2vw] md:px-[3vw] hover:bg-[#FDB12B]/[0.03] transition-colors duration-300 cursor-pointer"
                           role="button"
                           tabIndex={0}
                           onMouseEnter={() => setActiveValue(idx)}
                           onMouseLeave={() => setActiveValue(null)}
                           onFocus={() => setActiveValue(idx)}
                           onBlur={() => setActiveValue(null)}
                           onKeyDown={(e) => {
                              if (e.key === 'Enter' || e.key === ' ')
                                 setActiveValue(idx);
                              if (e.key === 'Escape') setActiveValue(null);
                           }}
                           onTouchStart={() =>
                              setActiveValue(activeValue === idx ? null : idx)
                           }
                        >
                           <div className="flex items-start gap-[3vw] md:gap-[2.5vw]">
                              <span
                                 className={`text-[28px] md:text-[3vw] lg:text-[2.2vw] xl:text-[32px] font-bold leading-none transition-colors duration-300 ${
                                    activeValue === idx
                                       ? 'text-[#FDB12B]'
                                       : 'text-[#1a1a1a]/12'
                                 }`}
                              >
                                 {value.number}
                              </span>
                              <div className="flex-1">
                                 <div className="flex items-center justify-between">
                                    <h3
                                       className={`text-[18px] md:text-[2.5vw] lg:text-[1.8vw] xl:text-[24px] font-bold transition-colors duration-300 ${
                                          activeValue === idx
                                             ? 'text-[#E7000B]'
                                             : 'text-[#1a1a1a]'
                                       }`}
                                    >
                                       {value.title}
                                    </h3>
                                    <svg
                                       className="w-[20px] h-[20px] md:w-[2vw] md:h-[2vw] min-w-[18px] min-h-[18px] text-[#E7000B] transition-all duration-300 flex-shrink-0 ml-[2vw]"
                                       viewBox="0 0 24 24"
                                       fill="none"
                                       stroke="currentColor"
                                       strokeWidth="2"
                                       strokeLinecap="round"
                                       strokeLinejoin="round"
                                    >
                                       <line x1="5" y1="12" x2="19" y2="12" />
                                       <line
                                          x1="12"
                                          y1="5"
                                          x2="12"
                                          y2="19"
                                          className={`transition-opacity duration-300 ${
                                             activeValue === idx
                                                ? 'opacity-0'
                                                : 'opacity-100'
                                          }`}
                                       />
                                    </svg>
                                 </div>
                                 <div
                                    className={`overflow-hidden transition-all duration-500 ${
                                       activeValue === idx
                                          ? 'max-h-[200px] opacity-100 pt-[2vh]'
                                          : 'max-h-0 opacity-0'
                                    }`}
                                 >
                                    <p className="text-[#1a1a1a]/50 text-[13px] md:text-[1.5vw] lg:text-[1.1vw] xl:text-[15px] leading-relaxed">
                                       {value.description}
                                    </p>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
                  <div className="w-full h-[1.5px] bg-gradient-to-r from-[#FDB12B] via-[#FDB12B]/30 to-transparent" />
               </div>
            </div>
         </section>
      </>
   );
}
