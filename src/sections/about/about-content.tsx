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
   'Hygienic, fresh, and premium products',
   'Smart, future-ready vending technology'
];

export default function AboutContent() {
   const storyRef = useRef<HTMLDivElement>(null);
   const cardsRef = useRef<HTMLDivElement>(null);
   const benefitsHeadingRef = useRef<HTMLDivElement>(null);
   const benefitsRef = useRef<HTMLDivElement>(null);

   useGSAP(() => {
      gsap.from(storyRef.current, {
         y: 40,
         opacity: 0,
         duration: 0.8,
         ease: 'power2.out',
         scrollTrigger: { trigger: storyRef.current, start: 'top 80%' }
      });

      if (cardsRef.current) {
         gsap.from(cardsRef.current.children, {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: { trigger: cardsRef.current, start: 'top 80%' }
         });
      }

      gsap.from(benefitsHeadingRef.current, {
         y: 30,
         opacity: 0,
         duration: 0.7,
         ease: 'power2.out',
         scrollTrigger: { trigger: benefitsHeadingRef.current, start: 'top 80%' }
      });

      if (benefitsRef.current) {
         gsap.from(benefitsRef.current.children, {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.06,
            ease: 'power2.out',
            scrollTrigger: { trigger: benefitsRef.current, start: 'top 85%' }
         });
      }
   }, []);

   return (
      <>
         {/* Story + Mission/Vision */}
         <section className="w-full py-[8vh] md:py-[10vh] bg-white">
            <div className="max-w-[1100px] mx-auto px-[4vw] md:px-[5vw] xl:px-[48px]">
               {/* Story — split layout */}
               <div ref={storyRef} className="flex flex-col md:flex-row md:items-start md:justify-between gap-[3vh] md:gap-[5vw] mb-[8vh] md:mb-[10vh]">
                  <h2 className="text-[22px] md:text-[3vw] lg:text-[2.4vw] xl:text-[32px] font-bold text-[#1a1a1a] leading-tight md:w-[40%] md:flex-shrink-0">
                     Redefining Workplace{' '}
                     <span className="text-primary">Convenience</span>
                  </h2>
                  <p className="text-[#1a1a1a]/50 text-[13px] md:text-[1.5vw] lg:text-[1.1vw] xl:text-[15px] leading-[1.8] md:w-[55%]">
                     Born from within the corporate ecosystem, Snackit is redefining
                     workplace convenience through intelligent vending solutions.
                     Where productivity, energy, and accessibility matter every single
                     day — we deliver premium snacks, beverages, and essentials through
                     smart vending machines designed for reliability and ease of use.
                  </p>
               </div>
            </div>
         </section>

         {/* Why Choose */}
         <section className="w-full py-[6vh] md:py-[8vh] bg-white">
            <div className="max-w-[1100px] mx-auto px-[4vw] md:px-[5vw] xl:px-[48px]">
               <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-[3vh] md:gap-[5vw]">
                  <div ref={benefitsHeadingRef} className="md:w-[35%] md:flex-shrink-0">
                     <h2 className="text-[22px] md:text-[3vw] lg:text-[2.4vw] xl:text-[32px] font-bold text-[#1a1a1a] leading-tight mb-[1.5vh]">
                        Why Organizations Choose{' '}
                        <span className="text-primary">Snackit</span>
                     </h2>
                     <p className="text-[#1a1a1a]/40 text-[13px] md:text-[1.3vw] lg:text-[1vw] xl:text-[14px]">
                        We handle everything — so you can focus on your business.
                     </p>
                  </div>

                  <div ref={benefitsRef} className="md:w-[55%] space-y-[10px] md:space-y-[12px]">
                     {benefits.map((benefit, idx) => (
                        <div
                           key={idx + 1}
                           className="flex items-center gap-[12px] py-[6px]"
                        >
                           <svg
                              className="w-[16px] h-[16px] text-[#1a1a1a]/25 flex-shrink-0"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                           >
                              <polyline points="20 6 9 17 4 12" />
                           </svg>
                           <span className="text-[#1a1a1a]/70 text-[14px] md:text-[1.5vw] lg:text-[1.1vw] xl:text-[15px]">
                              {benefit}
                           </span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}
