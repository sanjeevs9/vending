'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';

if (typeof window !== 'undefined') {
   gsap.registerPlugin(ScrollTrigger);
}

export default function WhatWeBringSection() {
   const sectionRef = useRef<HTMLElement | null>(null);
   const headingRef = useRef<HTMLDivElement | null>(null);
   const leftItemsRef = useRef<(HTMLDivElement | null)[]>([]);
   const rightItemsRef = useRef<(HTMLDivElement | null)[]>([]);

   const leftItems = [
      {
         title: 'Zero capital investment with end-to-end management, including logistics and machine maintenance.'
      },
      {
         title: 'Smart vending machines with full currency denomination support and cutting-edge technology.'
      },
      {
         title: 'Curated snack selections available 24/7, ensuring hygiene, freshness, and quality.'
      },
      {
         title: 'Efficient refill operations for minimal downtime and consistently stocked machines.'
      }
   ];

   const rightItems = [
      {
         title: 'Dedicated office space to host our vending installations seamlessly.'
      },
      {
         title: 'Minimal service charges for round-the-clock access to our machines at your workplace.'
      },
      {
         title: 'Full access to our refill team for timely stock replenishment and smooth operations.'
      },
      {
         title: 'Safe and secure placement to protect machines and ensure uninterrupted service.'
      }
   ];

   useEffect(() => {
      if (typeof window === 'undefined') return;

      const ctx = gsap.context(() => {
         gsap.set(leftItemsRef.current, { autoAlpha: 0, x: -50 });
         gsap.set(rightItemsRef.current, { autoAlpha: 0, x: 50 });

         if (headingRef.current) {
            gsap.fromTo(
               headingRef.current.children,
               { autoAlpha: 0, y: -30 },
               {
                  autoAlpha: 1,
                  y: 0,
                  duration: 1,
                  stagger: 0.2,
                  ease: 'power3.out'
               }
            );
         }

         leftItemsRef.current.forEach((item) => {
            gsap.fromTo(
               item,
               { autoAlpha: 0, x: -50 },
               {
                  scrollTrigger: {
                     trigger: item,
                     start: 'top 80%',
                     end: 'bottom 20%',
                     toggleActions: 'play reverse restart reverse',
                     scrub: 0.5
                  },
                  autoAlpha: 1,
                  x: 0,
                  duration: 1,
                  ease: 'elastic.out'
               }
            );
         });

         rightItemsRef.current.forEach((item) => {
            gsap.fromTo(
               item,
               { autoAlpha: 0, x: 50 },
               {
                  scrollTrigger: {
                     trigger: item,
                     start: 'top 80%',
                     end: 'bottom 20%',
                     toggleActions: 'play reverse restart reverse',
                     scrub: 0.5
                  },
                  autoAlpha: 1,
                  x: 0,
                  duration: 1,
                  ease: 'elastic.out'
               }
            );
         });
      }, sectionRef);

      return () => ctx.revert();
   }, []);

   return (
      <section ref={sectionRef} className="py-[6vh] md:py-[8vh] overflow-hidden bg-white">
         {/* Heading row */}
         <div
            ref={headingRef}
            className="max-w-[1100px] mx-auto px-[4vw] md:px-[5vw] xl:px-[48px] mb-[5vh] md:mb-[6vh] flex flex-col md:flex-row md:justify-between gap-[2vh] md:gap-0"
         >
            <h2 className="text-[18px] md:text-[2.2vw] lg:text-[1.6vw] xl:text-[20px] font-bold text-[#1a1a1a]">
               What we have for you
            </h2>
            <h2 className="hidden md:block text-[18px] md:text-[2.2vw] lg:text-[1.6vw] xl:text-[20px] font-bold text-primary">
               What we Bring
            </h2>
            <h2 className="text-[18px] md:text-[2.2vw] lg:text-[1.6vw] xl:text-[20px] font-bold text-[#1a1a1a]">
               What we need in return
            </h2>
         </div>

         {/* Two columns */}
         <div className="max-w-[1100px] mx-auto px-[4vw] md:px-[5vw] xl:px-[48px] grid grid-cols-1 md:grid-cols-2 gap-[3vh] md:gap-[5vw]">
            {/* Left Column */}
            <div className="space-y-[2vh] md:space-y-[3vh]">
               {leftItems.map((item, index) => (
                  <div
                     key={`left-${index + 1}`}
                     ref={(el) => {
                        leftItemsRef.current[index] = el;
                     }}
                     className="border-l-[2px] border-[#1a1a1a]/10 pl-[16px] md:pl-[20px] py-[4px]"
                  >
                     <p className="text-[#1a1a1a]/60 text-[13px] md:text-[1.5vw] lg:text-[1.1vw] xl:text-[15px] leading-relaxed">
                        {item.title}
                     </p>
                  </div>
               ))}
            </div>

            {/* Right Column */}
            <div className="space-y-[2vh] md:space-y-[3vh]">
               {rightItems.map((item, index) => (
                  <div
                     key={`right-${index + 1}`}
                     ref={(el) => {
                        rightItemsRef.current[index] = el;
                     }}
                     className="border-l-[2px] border-[#1a1a1a]/10 pl-[16px] md:pl-[20px] py-[4px]"
                  >
                     <p className="text-[#1a1a1a]/60 text-[13px] md:text-[1.5vw] lg:text-[1.1vw] xl:text-[15px] leading-relaxed">
                        {item.title}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
