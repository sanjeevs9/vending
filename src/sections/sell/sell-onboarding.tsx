'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import vendingImg from "../../../public/vectors/sell/vending.png";
import Image from 'next/image';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const steps = [
   {
      num: '01',
      title: 'Product Listing & Category Alignment',
      desc: 'We review your products and map them to the right categories and machine slots for maximum visibility.'
   },
   {
      num: '02',
      title: 'Shelf Strategy by Location',
      desc: 'Your products are positioned based on consumer demographics and demand patterns at each location.'
   },
   {
      num: '03',
      title: 'Demand-Driven Placement',
      desc: 'Data-backed decisions ensure your products are placed where they sell best, optimising every shelf slot.'
   },
   {
      num: '04',
      title: 'Regular Replenishment',
      desc: 'Our logistics team ensures consistent stock levels so your products never run out at any location.'
   }
];

export default function SellOnboarding() {
   const sectionRef = useRef<HTMLDivElement>(null);
   const headingRef = useRef<HTMLDivElement>(null);
   const stepRefs = [
      useRef<HTMLDivElement>(null),
      useRef<HTMLDivElement>(null),
      useRef<HTMLDivElement>(null),
      useRef<HTMLDivElement>(null)
   ];

   useGSAP(() => {
      const isDesktop = window.innerWidth >= 768;

      // Heading fade in
      gsap.from(headingRef.current, {
         y: 30,
         opacity: 0,
         duration: 0.8,
         ease: 'power2.out',
         scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
      });

      // Only run pinned scroll animation on desktop
      if (!isDesktop) return;

      // Set initial state — all cards hidden below
      const refs = stepRefs.map((r) => r.current).filter(Boolean);
      gsap.set(refs.slice(1), {
         y: '400%',
         opacity: 0
      });

      // Pinned scrub timeline — each card scrolls in one by one
      const tl = gsap.timeline({
         scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '+=250%',
            scrub: 1.5,
            pin: true,
            anticipatePin: 1
         }
      });

      // Stagger each card into view
      refs.slice(1).forEach((ref) => {
         tl.to(
            ref,
            {
               y: 0,
               opacity: 1,
               ease: 'power4.out',
               duration: 1
            },
            '+=0.3'
         );
      });
   }, []);

   return (
      <section
         ref={sectionRef}
         className="w-full md:min-h-screen flex items-center py-[5vh] md:py-0 overflow-hidden"
      >
         <div className="max-w-[1100px] w-full mx-auto px-[4vw] md:px-[5vw] xl:px-[48px]">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-[3vh] md:gap-[5vw]">
               <div ref={headingRef} className="md:w-[40%] md:flex-shrink-0 flex flex-col">
                  <h2 className="text-[22px] md:text-[3vw] lg:text-[2.4vw] xl:text-[32px] font-bold text-[#1a1a1a] leading-tight mb-[1vh]">
                     Product <span className="text-primary">Onboarding</span>
                     <br />
                     Made Simple
                  </h2>
                  <p className="text-[#1a1a1a]/35 text-[13px] md:text-[1.3vw] lg:text-[1vw] xl:text-[14px] leading-relaxed mb-[3vh]">
                     From listing to live — we handle the rest.
                     <br />
                     Simple integration. Scalable distribution.
                  </p>
                  <div className="hidden md:block max-w-[180px] lg:max-w-[220px] mx-auto md:mx-0 mt-auto">
                     <Image
                        src={vendingImg}
                        alt="Vending machine"
                        className="w-full h-auto object-cover"
                     />
                  </div>
               </div>

               {/* Steps */}
               <div className="md:w-[55%] space-y-[16px] md:space-y-[20px]">
                  {steps.map((step, idx) => (
                     <div
                        key={step.num}
                        ref={stepRefs[idx]}
                        className="flex gap-[14px] md:gap-[18px] bg-[#f5f5f5] rounded-xl p-[18px] md:p-[22px] transform-gpu"
                     >
                        <span className="text-[#1a1a1a]/10 text-[22px] md:text-[26px] font-bold leading-none mt-[-1px] select-none">
                           {step.num}
                        </span>
                        <div>
                           <h4 className="text-[#1a1a1a] text-[14px] md:text-[1.5vw] lg:text-[1.1vw] xl:text-[15px] font-semibold mb-[3px]">
                              {step.title}
                           </h4>
                           <p className="text-[#1a1a1a]/40 text-[12px] md:text-[1.3vw] lg:text-[0.95vw] xl:text-[13px] leading-relaxed">
                              {step.desc}
                           </p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}
