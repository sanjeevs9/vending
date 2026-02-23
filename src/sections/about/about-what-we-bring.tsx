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
   const mobileHeading1Ref = useRef<HTMLHeadingElement | null>(null);
   const mobileHeading2Ref = useRef<HTMLHeadingElement | null>(null);
   const mobileLeftRef = useRef<(HTMLDivElement | null)[]>([]);
   const mobileRightRef = useRef<(HTMLDivElement | null)[]>([]);

   const leftItems = [
      {
         title: 'No capital investment on your end.'
      },
      {
         title: 'Smart vending machines with full provision for currency denomination.'
      },
      {
         title: 'Variety of hand-picked and assorted snacking items round the clock with complete responsibility of logistics and machine maintenance.'
      },
      {
         title: 'We keep up with our quality, maintaining high standards of hygiene and freshness in our products.'
      },
      {
         title: 'High performing refill team to ensure quickest turnaround and reduced refill times. Bid adieu to inadequate snacking options at any point.'
      },
      {
         title: 'We put our efforts to employ state-of-the-art technology with our vending machines to keep up with the constant evolution of the corporate needs.'
      },
      {
         title: 'The joyousness of happy and energetic people around.'
      }
   ];

   const rightItems = [
      {
         title: 'Office space for our installations.'
      },
      {
         title: 'Minimal service charges for our machinery that will be at your perusal in the workplace.'
      },
      {
         title: 'Access to our refilling team for stock replenishment.'
      },
      {
         title: 'Ensuring a safe & sound environment for our machines to be secured from damage.'
      }
   ];

   useEffect(() => {
      if (typeof window === 'undefined') return;

      const ctx = gsap.context(() => {
         gsap.set(leftItemsRef.current, { autoAlpha: 0, x: 50 });
         gsap.set(rightItemsRef.current, { autoAlpha: 0, x: -50 });

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

         rightItemsRef.current.forEach((item) => {
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

         // Mobile animations
         [mobileHeading1Ref.current, mobileHeading2Ref.current].forEach(
            (el) => {
               if (!el) return;
               gsap.fromTo(
                  el,
                  { autoAlpha: 0, y: -30 },
                  {
                     scrollTrigger: {
                        trigger: el,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                     },
                     autoAlpha: 1,
                     y: 0,
                     duration: 0.8,
                     ease: 'power3.out'
                  }
               );
            }
         );

         mobileLeftRef.current.forEach((item) => {
            if (!item) return;
            gsap.fromTo(
               item,
               { autoAlpha: 0, x: 50 },
               {
                  scrollTrigger: {
                     trigger: item,
                     start: 'top 85%',
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

         mobileRightRef.current.forEach((item) => {
            if (!item) return;
            gsap.fromTo(
               item,
               { autoAlpha: 0, x: -50 },
               {
                  scrollTrigger: {
                     trigger: item,
                     start: 'top 85%',
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
         {/* Desktop: heading row across top */}
         <div
            ref={headingRef}
            className="hidden md:flex max-w-[1100px] mx-auto px-[4vw] md:px-[5vw] xl:px-[48px] mb-[5vh] md:mb-[6vh] md:flex-row md:justify-between"
         >
            <h2 className="text-[2.2vw] lg:text-[1.6vw] xl:text-[20px] font-bold text-[#1a1a1a]">
               What do we <span className="text-primary">have</span> for you?
            </h2>
            <h2 className="text-[2.2vw] lg:text-[1.6vw] xl:text-[20px] font-bold text-primary">
               What we Bring
            </h2>
            <h2 className="text-[2.2vw] lg:text-[1.6vw] xl:text-[20px] font-bold text-[#1a1a1a]">
               What we <span className="text-primary">need</span> in return
            </h2>
         </div>

         {/* Desktop: two columns side by side */}
         <div className="hidden md:grid max-w-[1100px] mx-auto px-[4vw] md:px-[5vw] xl:px-[48px] grid-cols-2 gap-[5vw]">
            {/* Left Column */}
            <div className="space-y-[3vh]">
               {leftItems.map((item, index) => (
                  <div
                     key={`left-${index + 1}`}
                     ref={(el) => {
                        leftItemsRef.current[index] = el;
                     }}
                     className="border-l-[2px] border-[#1a1a1a]/10 pl-[20px] py-[4px]"
                  >
                     <p className="text-[#1a1a1a]/60 text-[1.5vw] lg:text-[1.1vw] xl:text-[15px] leading-relaxed">
                        {item.title}
                     </p>
                  </div>
               ))}
            </div>

            {/* Right Column */}
            <div className="space-y-[3vh]">
               {rightItems.map((item, index) => (
                  <div
                     key={`right-${index + 1}`}
                     ref={(el) => {
                        rightItemsRef.current[index] = el;
                     }}
                     className="border-l-[2px] border-[#1a1a1a]/10 pl-[20px] py-[4px]"
                  >
                     <p className="text-[#1a1a1a]/60 text-[1.5vw] lg:text-[1.1vw] xl:text-[15px] leading-relaxed">
                        {item.title}
                     </p>
                  </div>
               ))}
            </div>
         </div>

         {/* Mobile: heading then items, sequentially */}
         <div className="md:hidden max-w-[1100px] mx-auto px-[4vw]">
            {/* Section 1: What we have */}
            <h2
               ref={mobileHeading1Ref}
               className="text-[18px] font-bold text-[#1a1a1a] mb-[3vh]"
            >
               What do we <span className="text-primary">have</span> for you?
            </h2>
            <div className="space-y-[2vh] mb-[6vh]">
               {leftItems.map((item, index) => (
                  <div
                     key={`left-m-${index + 1}`}
                     ref={(el) => {
                        mobileLeftRef.current[index] = el;
                     }}
                     className="border-l-[2px] border-[#1a1a1a]/10 pl-[16px] py-[4px]"
                  >
                     <p className="text-[#1a1a1a]/60 text-[13px] leading-relaxed">
                        {item.title}
                     </p>
                  </div>
               ))}
            </div>

            {/* Section 2: What we need */}
            <h2
               ref={mobileHeading2Ref}
               className="text-[18px] font-bold text-[#1a1a1a] mb-[3vh]"
            >
               What we <span className="text-primary">need</span> in return
            </h2>
            <div className="space-y-[2vh]">
               {rightItems.map((item, index) => (
                  <div
                     key={`right-m-${index + 1}`}
                     ref={(el) => {
                        mobileRightRef.current[index] = el;
                     }}
                     className="border-l-[2px] border-[#1a1a1a]/10 pl-[16px] py-[4px]"
                  >
                     <p className="text-[#1a1a1a]/60 text-[13px] leading-relaxed">
                        {item.title}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
