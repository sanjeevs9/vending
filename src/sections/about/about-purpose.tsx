'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const values = [
   {
      num: '01',
      title: 'Smart Technology',
      desc: 'Intelligent systems supporting digital payments, prepaid cards, and currency denominations for smooth, cashless convenience.'
   },
   {
      num: '02',
      title: 'Operational Excellence',
      desc: 'High standards of hygiene, freshness, and timely replenishment through a dedicated logistics and refill team.'
   },
   {
      num: '03',
      title: 'Customer Experience First',
      desc: 'Reliability, speed, and product variety — so your people always have access to what they need without compromise.'
   }
];

export default function AboutPurpose() {
   const sectionRef = useRef<HTMLDivElement>(null);
   const missionRef = useRef<HTMLDivElement>(null);
   const valuesRef = useRef<HTMLDivElement>(null);

   useGSAP(() => {
      gsap.from(missionRef.current, {
         y: 40,
         opacity: 0,
         duration: 0.8,
         ease: 'power2.out',
         scrollTrigger: {
            trigger: missionRef.current,
            start: 'top 80%'
         }
      });

      if (valuesRef.current) {
         gsap.from(valuesRef.current.children, {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.12,
            ease: 'power2.out',
            scrollTrigger: {
               trigger: valuesRef.current,
               start: 'top 80%'
            }
         });
      }
   }, []);

   return (
      <section ref={sectionRef} className="w-full py-[8vh] md:py-[10vh] bg-white overflow-hidden">
         <div className="max-w-[1100px] mx-auto px-[4vw] md:px-[5vw] xl:px-[48px]">
            {/* Mission & Vision — split layout */}
            <div
               ref={missionRef}
               className="flex flex-col md:flex-row md:items-start md:justify-between gap-[3vh] md:gap-[5vw] mb-[8vh] md:mb-[10vh]"
            >
               <h2 className="text-[22px] md:text-[3vw] lg:text-[2.4vw] xl:text-[32px] font-bold text-[#1a1a1a] leading-tight md:w-[40%] md:flex-shrink-0">
                  Our <span className="text-primary">Purpose</span>
               </h2>
               <div className="md:w-[55%] space-y-[3vh]">
                  <div>
                     <span className="text-[#1a1a1a]/25 text-[11px] md:text-[1.1vw] lg:text-[0.8vw] xl:text-[12px] uppercase tracking-[2px] font-medium">
                        Mission
                     </span>
                     <p className="text-[#1a1a1a]/60 text-[14px] md:text-[1.6vw] lg:text-[1.15vw] xl:text-[16px] leading-[1.7] mt-[6px]">
                        To enable easy, reliable access to quality snacks and essentials
                        wherever people work, learn, or move.
                     </p>
                  </div>
                  <div className="h-[1px] bg-[#1a1a1a]/6" />
                  <div>
                     <span className="text-[#1a1a1a]/25 text-[11px] md:text-[1.1vw] lg:text-[0.8vw] xl:text-[12px] uppercase tracking-[2px] font-medium">
                        Vision
                     </span>
                     <p className="text-[#1a1a1a]/60 text-[14px] md:text-[1.6vw] lg:text-[1.15vw] xl:text-[16px] leading-[1.7] mt-[6px]">
                        To build India&apos;s most dependable and technology-driven smart
                        vending network — trusted by enterprises, institutions, and
                        individuals alike.
                     </p>
                  </div>
               </div>
            </div>

            {/* Values — split layout */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-[3vh] md:gap-[5vw]">
               <div className="md:w-[40%] md:flex-shrink-0">
                  <h2 className="text-[22px] md:text-[3vw] lg:text-[2.4vw] xl:text-[32px] font-bold text-[#1a1a1a] leading-tight mb-[1vh]">
                     What Fuels <span className="text-primary">Us</span>
                  </h2>
                  <p className="text-[#1a1a1a]/35 text-[13px] md:text-[1.3vw] lg:text-[1vw] xl:text-[14px]">
                     Every decision at Snackit is guided by three core principles.
                  </p>
               </div>

               <div ref={valuesRef} className="md:w-[55%] space-y-[20px] md:space-y-[24px]">
                  {values.map((value) => (
                     <div
                        key={value.num}
                        className="flex gap-[14px] md:gap-[18px] py-[4px]"
                     >
                        <span className="text-[#1a1a1a]/10 text-[24px] md:text-[28px] font-bold leading-none mt-[-2px] select-none">
                           {value.num}
                        </span>
                        <div>
                           <h4 className="text-[#1a1a1a] text-[14px] md:text-[1.5vw] lg:text-[1.1vw] xl:text-[15px] font-semibold mb-[4px]">
                              {value.title}
                           </h4>
                           <p className="text-[#1a1a1a]/45 text-[13px] md:text-[1.3vw] lg:text-[0.95vw] xl:text-[14px] leading-relaxed">
                              {value.desc}
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
