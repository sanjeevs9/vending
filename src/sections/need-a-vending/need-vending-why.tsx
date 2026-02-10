'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const reasons = [
   {
      title: 'Zero Capital Investment',
      description:
         'We provide the machine, stock it, and maintain it. You provide the space — that\'s it. No upfront costs, no hidden fees, no surprises.'
   },
   {
      title: 'End-to-End Management',
      description:
         'Installation, stocking, restocking, cleaning, maintenance — we handle every single aspect so you never have to think about it.'
   },
   {
      title: 'Smart Monitoring',
      description:
         'Real-time inventory tracking, consumption analytics, and automated alerts ensure your machine is always stocked with what your team wants.'
   },
   {
      title: 'Curated for Your Team',
      description:
         'We customise the product mix based on your team\'s preferences — from health-conscious options to crowd-favourite snacks and beverages.'
   },
   {
      title: 'Rapid Response Support',
      description:
         'Dedicated support team with fast turnaround. Machine issues? We\'re on it within hours, not days.'
   },
   {
      title: 'Sustainable & Efficient',
      description:
         'Energy-efficient machines with eco-conscious packaging options. Smart cooling systems reduce power consumption by up to 40%.'
   }
];

export default function NeedVendingWhy() {
   const sectionRef = useRef<HTMLDivElement>(null);
   const headingRef = useRef<HTMLDivElement>(null);
   const cardsRef = useRef<HTMLDivElement>(null);

   useGSAP(() => {
      gsap.from(headingRef.current, {
         y: 50,
         opacity: 0,
         duration: 0.8,
         ease: 'power2.out',
         scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%'
         }
      });

      if (cardsRef.current) {
         gsap.from(cardsRef.current.children, {
            y: 60,
            opacity: 0,
            duration: 0.7,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
               trigger: cardsRef.current,
               start: 'top 80%'
            }
         });
      }
   }, []);

   return (
      <section
         id="why-section"
         ref={sectionRef}
         className="relative w-full py-[10vh] overflow-hidden"
      >
         {/* Dark background with gold shapes */}
         <div className="absolute inset-0 bg-[#1a1a1a] z-0">
            <svg
               className="absolute top-[-10%] right-[-5%] w-[40%] h-[120%] pointer-events-none opacity-20"
               viewBox="0 0 400 500"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  d="M300,40 C380,100 370,250 320,360 C270,470 160,500 80,440 C0,380 -20,240 30,140 C80,40 200,-20 300,40 Z"
                  fill="#FDB12B"
               />
            </svg>
            <svg
               className="absolute bottom-[-15%] left-[-5%] w-[30%] h-[80%] pointer-events-none opacity-15"
               viewBox="0 0 400 500"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  d="M100,460 C20,400 -10,260 30,150 C70,40 180,0 280,50 C380,100 400,240 360,350 C320,460 200,520 100,460 Z"
                  fill="#FDB12B"
               />
            </svg>
         </div>

         <div className="relative z-10 max-w-[1400px] mx-auto px-[4vw] md:px-[6vw] xl:px-[56px]">
            <div ref={headingRef} className="text-center mb-[8vh]">
               <span className="text-[#FDB12B] text-[12px] md:text-[1.5vw] lg:text-[1vw] xl:text-[14px] font-medium tracking-widest uppercase">
                  Why Snackit
               </span>
               <h2 className="text-[26px] md:text-[5vw] lg:text-[3.5vw] xl:text-[44px] font-bold text-white mt-[1vh] mb-[2vh]">
                  Because Convenience Should Be{' '}
                  <span className="text-[#FDB12B]">Simple</span>
               </h2>
               <p className="text-[14px] md:text-[1.8vw] lg:text-[1.2vw] xl:text-[16px] text-white/40 max-w-[60vw] xl:max-w-[560px] mx-auto">
                  One partner. One solution. Total peace of mind. Here&apos;s
                  why businesses choose Snackit.
               </p>
            </div>

            <div
               ref={cardsRef}
               className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[16px] md:gap-[2vw]"
            >
               {reasons.map((reason, idx) => (
                  <div
                     key={idx + 1}
                     className="border border-[#FDB12B]/15 rounded-2xl p-[20px] md:p-[3vh] bg-white/5 hover:bg-white/10 transition-all duration-500 group"
                  >
                     <div className="flex items-center gap-[10px] md:gap-[1vw] mb-[2vh]">
                        <div className="w-[8px] h-[8px] rounded-full bg-[#FDB12B] group-hover:scale-150 transition-transform duration-300"></div>
                        <h3 className="text-white text-[16px] md:text-[2vw] lg:text-[1.5vw] xl:text-[18px] font-bold">
                           {reason.title}
                        </h3>
                     </div>
                     <p className="text-white/50 text-[13px] md:text-[1.4vw] lg:text-[1vw] xl:text-[14px] leading-relaxed">
                        {reason.description}
                     </p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
