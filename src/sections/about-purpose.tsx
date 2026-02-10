'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const values = [
   {
      title: 'Technology',
      description:
         'Smart systems that monitor, adapt, and deliver — making every vending interaction seamless.'
   },
   {
      title: 'Consistency',
      description:
         'Reliable operations, regular restocking, and dependable service you can count on every day.'
   },
   {
      title: 'Experience',
      description:
         'Every touchpoint designed around the customer — from product selection to final delivery.'
   }
];

export default function AboutPurpose() {
   const sectionRef = useRef<HTMLDivElement>(null);
   const headingRef = useRef<HTMLDivElement>(null);
   const missionRef = useRef<HTMLDivElement>(null);
   const visionRef = useRef<HTMLDivElement>(null);
   const valuesHeadingRef = useRef<HTMLDivElement>(null);
   const valueCardsRef = useRef<HTMLDivElement>(null);

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

      if (valueCardsRef.current) {
         gsap.from(valueCardsRef.current.children, {
            y: 60,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
               trigger: valueCardsRef.current,
               start: 'top 80%'
            }
         });
      }
   }, []);

   return (
      <>
         {/* Our Purpose */}
         <section
            id="purpose-section"
            ref={sectionRef}
            className="w-full min-h-screen flex flex-col justify-center px-[4vw] md:px-[6vw] py-[10vh]"
         >
            <div ref={headingRef} className="text-center mb-[8vh]">
               <h2 className="text-[8vw] md:text-[5vw] lg:text-[4vw] font-bold text-red-600 mb-[2vh]">
                  Our Purpose
               </h2>
               <p className="text-[3.5vw] md:text-[2vw] lg:text-[1.5vw] text-gray-500 max-w-[70vw] mx-auto">
                  Making Quality Snacking Instantly Accessible
               </p>
            </div>

            <div className="flex flex-col md:flex-row gap-[4vw] justify-center items-stretch max-w-[90vw] mx-auto w-full">
               {/* Mission */}
               <div
                  ref={missionRef}
                  className="flex-1 bg-black rounded-2xl p-[4vh] md:p-[5vh] flex flex-col justify-between min-h-[30vh]"
               >
                  <div>
                     <span className="text-red-400 text-[3vw] md:text-[1.5vw] lg:text-[1vw] font-medium tracking-widest uppercase">
                        Mission
                     </span>
                     <h3 className="text-white text-[5vw] md:text-[3vw] lg:text-[2.2vw] font-bold mt-[2vh] leading-tight">
                        Enable easy access to food and essentials wherever
                        people work or move
                     </h3>
                  </div>
                  <div className="mt-[4vh] w-full h-[2px] bg-gradient-to-r from-red-500 to-transparent"></div>
               </div>

               {/* Vision */}
               <div
                  ref={visionRef}
                  className="flex-1 border-2 border-red-500 rounded-2xl p-[4vh] md:p-[5vh] flex flex-col justify-between min-h-[30vh]"
               >
                  <div>
                     <span className="text-red-500 text-[3vw] md:text-[1.5vw] lg:text-[1vw] font-medium tracking-widest uppercase">
                        Vision
                     </span>
                     <h3 className="text-red-800 text-[5vw] md:text-[3vw] lg:text-[2.2vw] font-bold mt-[2vh] leading-tight">
                        Create India&apos;s most dependable smart vending
                        network
                     </h3>
                  </div>
                  <div className="mt-[4vh] w-full h-[2px] bg-gradient-to-r from-red-500 to-transparent"></div>
               </div>
            </div>
         </section>

         {/* What Fuels Us */}
         <section className="w-full min-h-[80vh] relative flex flex-col justify-center px-[4vw] md:px-[6vw] py-[10vh] overflow-hidden">
            {/* Red gradient background matching the about section on home */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-400 z-0">
               <div className="absolute inset-0 opacity-20">
                  <svg
                     width="100%"
                     height="100%"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <defs>
                        <pattern
                           id="wave-about"
                           x="0"
                           y="0"
                           width="200"
                           height="200"
                           patternUnits="userSpaceOnUse"
                        >
                           <path
                              d="M0,100 C40,70 60,130 100,100 C140,70 160,130 200,100 L200,200 L0,200 Z"
                              fill="red"
                           />
                           <path
                              d="M0,50 C40,20 60,80 100,50 C140,20 160,80 200,50 L200,0 L0,0 Z"
                              fill="red"
                           />
                        </pattern>
                     </defs>
                     <rect
                        width="100%"
                        height="100%"
                        fill="url(#wave-about)"
                     />
                  </svg>
               </div>
            </div>

            <div className="relative z-10">
               <div ref={valuesHeadingRef} className="text-center mb-[6vh]">
                  <h2 className="text-[8vw] md:text-[5vw] lg:text-[4vw] font-bold text-white mb-[2vh]">
                     What Fuels Us
                  </h2>
                  <p className="text-[3.5vw] md:text-[2vw] lg:text-[1.5vw] text-white/70 max-w-[60vw] mx-auto">
                     Innovation with Accountability
                  </p>
               </div>

               <div
                  ref={valueCardsRef}
                  className="grid grid-cols-1 md:grid-cols-3 gap-[3vw] max-w-[90vw] mx-auto w-full"
               >
                  {values.map((value, idx) => (
                     <div
                        key={idx + 1}
                        className="border border-white/20 rounded-2xl p-[4vh] backdrop-blur-sm bg-white/10 hover:bg-white/20 transition-colors duration-500"
                     >
                        <div className="w-[3vw] h-[3vw] min-w-[28px] min-h-[28px] max-w-[40px] max-h-[40px] rounded-full bg-white mb-[3vh]"></div>
                        <h3 className="text-white text-[4vw] md:text-[2.5vw] lg:text-[1.8vw] font-bold mb-[2vh]">
                           {value.title}
                        </h3>
                        <p className="text-white/80 text-[3vw] md:text-[1.5vw] lg:text-[1.1vw] leading-relaxed">
                           {value.description}
                        </p>
                     </div>
                  ))}
               </div>

               <p className="text-white/60 text-center mt-[6vh] text-[3vw] md:text-[1.5vw] lg:text-[1.1vw] max-w-[60vw] mx-auto italic">
                  Technology, consistency, and customer experience guide every
                  decision we make.
               </p>
            </div>
         </section>
      </>
   );
}
