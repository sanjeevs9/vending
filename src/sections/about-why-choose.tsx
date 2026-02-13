'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const benefits = [
   'No capital investment required',
   'End-to-end installation & maintenance',
   'Curated snack and beverage selection',
   'Complete logistics & refill management',
   'Hygienic, fresh, and premium-quality products',
   'Smart, future-ready vending technology'
];

export default function AboutWhyChoose() {
   const sectionRef = useRef<HTMLDivElement>(null);
   const headingRef = useRef<HTMLDivElement>(null);
   const gridRef = useRef<HTMLDivElement>(null);
   const footerRef = useRef<HTMLParagraphElement>(null);
   const commitHeadingRef = useRef<HTMLDivElement>(null);
   const commitBodyRef = useRef<HTMLDivElement>(null);

   useGSAP(() => {
      gsap.from(headingRef.current, {
         y: 40,
         opacity: 0,
         duration: 0.8,
         ease: 'power2.out',
         scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%'
         }
      });

      if (gridRef.current) {
         gsap.from(gridRef.current.children, {
            y: 40,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
               trigger: gridRef.current,
               start: 'top 80%'
            }
         });
      }

      gsap.from(footerRef.current, {
         y: 20,
         opacity: 0,
         duration: 0.7,
         ease: 'power2.out',
         scrollTrigger: {
            trigger: footerRef.current,
            start: 'top 90%'
         }
      });

      gsap.from(commitHeadingRef.current, {
         y: 40,
         opacity: 0,
         duration: 0.8,
         ease: 'power2.out',
         scrollTrigger: {
            trigger: commitHeadingRef.current,
            start: 'top 80%'
         }
      });

      gsap.from(commitBodyRef.current, {
         y: 30,
         opacity: 0,
         duration: 0.8,
         ease: 'power2.out',
         scrollTrigger: {
            trigger: commitBodyRef.current,
            start: 'top 85%'
         }
      });
   }, []);

   return (
      <>
         {/* Why Organizations Choose Snackit */}
         <section
            ref={sectionRef}
            className="w-full min-h-[70vh] relative flex flex-col justify-center py-[10vh] overflow-hidden bg-[#f5f5f5]"
         >
            {/* Decorative gold organic shape — left */}
            <svg
               className="absolute top-[-10%] left-[-5%] w-[30%] h-[100%] pointer-events-none z-0"
               viewBox="0 0 400 500"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  d="M300,40 C380,100 370,250 320,360 C270,470 160,500 80,440 C0,380 -20,240 30,140 C80,40 200,-20 300,40 Z"
                  fill="#FDB12B"
                  opacity="0.08"
               />
            </svg>

            {/* Decorative red organic shape — bottom right */}
            <svg
               className="absolute bottom-[-15%] right-[-3%] w-[25%] h-[70%] pointer-events-none z-0"
               viewBox="0 0 400 500"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  d="M100,460 C20,400 -10,260 30,150 C70,40 180,0 280,50 C380,100 400,240 360,350 C320,460 200,520 100,460 Z"
                  fill="#E7000B"
                  opacity="0.04"
               />
            </svg>

            <div className="absolute top-[15%] right-[8%] w-[3vw] h-[3vw] rounded-full bg-[#E7000B]/5 pointer-events-none z-0" />
            <div className="absolute bottom-[25%] left-[12%] w-[6px] h-[6px] rounded-full bg-[#FDB12B]/30 pointer-events-none z-0" />

            {/* Bottom wavy accent */}
            <svg
               className="absolute bottom-0 left-0 w-full pointer-events-none z-0"
               viewBox="0 0 1440 120"
               preserveAspectRatio="none"
               style={{ height: '6vh' }}
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  d="M0,80 C360,40 720,100 1080,60 C1260,40 1380,70 1440,60 L1440,120 L0,120 Z"
                  fill="#FDB12B"
                  opacity="0.1"
               />
            </svg>

            <div className="relative z-10 max-w-[1100px] mx-auto px-[4vw] md:px-[6vw] xl:px-[56px] w-full">
               <div ref={headingRef} className="text-center mb-[6vh]">
                  <span className="text-[#E7000B] text-[12px] md:text-[1.5vw] lg:text-[1vw] xl:text-[14px] font-medium tracking-widest uppercase">
                     Why Snackit
                  </span>
                  <h2 className="text-[28px] md:text-[5vw] lg:text-[4vw] xl:text-[48px] font-bold text-[#1a1a1a] mt-[1vh]">
                     Why Organizations
                     <br />
                     <span className="text-[#E7000B]">Choose Snackit</span>
                  </h2>
               </div>

               <div
                  ref={gridRef}
                  className="grid grid-cols-1 md:grid-cols-2 gap-[12px] md:gap-[16px] max-w-[900px] mx-auto mb-[6vh]"
               >
                  {benefits.map((benefit, idx) => (
                     <div
                        key={idx + 1}
                        className="group flex items-start gap-[12px] md:gap-[16px] bg-white rounded-xl p-[16px] md:p-[20px] border border-transparent hover:border-[#FDB12B]/20 hover:shadow-[0_4px_20px_rgba(253,177,43,0.08)] transition-all duration-400"
                     >
                        <div className="w-[22px] h-[22px] md:w-[26px] md:h-[26px] rounded-full bg-[#E7000B] flex items-center justify-center flex-shrink-0 mt-[2px] group-hover:scale-110 transition-transform duration-300">
                           <svg
                              className="w-[12px] h-[12px] md:w-[14px] md:h-[14px] text-white"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                           >
                              <polyline points="20 6 9 17 4 12" />
                           </svg>
                        </div>
                        <span className="text-[#1a1a1a]/70 text-[14px] md:text-[1.8vw] lg:text-[1.2vw] xl:text-[16px] font-medium leading-snug">
                           {benefit}
                        </span>
                     </div>
                  ))}
               </div>

               <p
                  ref={footerRef}
                  className="text-[#1a1a1a] text-[16px] md:text-[2.5vw] lg:text-[1.6vw] xl:text-[20px] font-bold text-center"
               >
                  We handle everything — so you can focus on{' '}
                  <span className="text-[#E7000B]">your business</span>.
               </p>
            </div>
         </section>

         {/* Our Commitment */}
         <section className="w-full relative py-[12vh] overflow-hidden bg-white">
            {/* Warm gradient mesh background */}
            <div
               className="absolute inset-0 pointer-events-none z-0"
               style={{
                  background: [
                     'radial-gradient(ellipse 80% 70% at 25% 30%, rgba(253,177,43,0.10) 0%, transparent 60%)',
                     'radial-gradient(ellipse 60% 60% at 80% 70%, rgba(231,0,11,0.05) 0%, transparent 55%)',
                     'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(253,177,43,0.05) 0%, transparent 50%)'
                  ].join(', ')
               }}
            />

            <div className="relative z-10 max-w-[900px] mx-auto px-[4vw] md:px-[6vw] xl:px-[56px] text-center">
               <div ref={commitHeadingRef}>
                  <span className="text-[#FDB12B] text-[12px] md:text-[1.5vw] lg:text-[1vw] xl:text-[14px] font-medium tracking-widest uppercase block mb-[3vh]">
                     Our Commitment
                  </span>

                  <h2 className="text-[24px] md:text-[4vw] lg:text-[3vw] xl:text-[40px] font-bold text-[#1a1a1a] leading-tight mb-[3vh]">
                     We aim to create healthier, happier,
                     <br className="hidden md:block" />
                     and more{' '}
                     <span className="text-[#FDB12B]">
                        energized work environments
                     </span>
                     .
                  </h2>
               </div>

               <div ref={commitBodyRef}>
                  <p className="text-[#1a1a1a]/50 text-[16px] md:text-[2.5vw] lg:text-[1.8vw] xl:text-[22px] font-medium mb-[3vh]">
                     Because when people feel better, they{' '}
                     <span className="text-[#E7000B] font-bold">
                        perform better
                     </span>
                     .
                  </p>

                  <div className="w-[40px] h-[3px] bg-gradient-to-r from-[#E7000B] to-[#FDB12B] mx-auto mb-[3vh]" />

                  <p className="text-[#1a1a1a]/35 text-[14px] md:text-[2vw] lg:text-[1.3vw] xl:text-[17px]">
                     Snackit exists to make everyday convenience effortless.
                  </p>
               </div>
            </div>
         </section>
      </>
   );
}
