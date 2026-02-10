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
            className="w-full min-h-screen flex flex-col justify-center px-[4vw] md:px-[6vw] xl:px-[56px] py-[10vh] bg-white max-w-[1400px] mx-auto"
         >
            <div ref={headingRef} className="text-center mb-[8vh]">
               <span className="text-[#FDB12B] text-[12px] md:text-[1.5vw] lg:text-[1vw] xl:text-[14px] font-medium tracking-widest uppercase">
                  Our Purpose
               </span>
               <h2 className="text-[28px] md:text-[5vw] lg:text-[4vw] xl:text-[48px] font-bold text-[#1a1a1a] mt-[1vh] mb-[2vh]">
                  Making Quality Snacking
                  <br />
                  <span className="text-[#E7000B]">Instantly Accessible</span>
               </h2>
            </div>

            <div className="flex flex-col md:flex-row gap-[4vw] md:gap-[3vw] justify-center items-stretch max-w-[90vw] xl:max-w-[1200px] mx-auto w-full">
               {/* Mission */}
               <div
                  ref={missionRef}
                  className="flex-1 bg-[#1a1a1a] rounded-2xl p-[24px] md:p-[5vh] flex flex-col justify-between min-h-[30vh]"
               >
                  <div>
                     <span className="text-[#FDB12B] text-[12px] md:text-[1.5vw] lg:text-[1vw] xl:text-[14px] font-medium tracking-widest uppercase">
                        Mission
                     </span>
                     <h3 className="text-white text-[20px] md:text-[3vw] lg:text-[2.2vw] xl:text-[28px] font-bold mt-[2vh] leading-tight">
                        Enable easy access to food and essentials wherever
                        people work or move
                     </h3>
                  </div>
                  <div className="mt-[4vh] w-full h-[2px] bg-gradient-to-r from-[#FDB12B] to-transparent"></div>
               </div>

               {/* Vision */}
               <div
                  ref={visionRef}
                  className="flex-1 border-2 border-[#FDB12B]/30 rounded-2xl p-[24px] md:p-[5vh] flex flex-col justify-between min-h-[30vh] bg-[#f5f5f5]"
               >
                  <div>
                     <span className="text-[#E7000B] text-[12px] md:text-[1.5vw] lg:text-[1vw] xl:text-[14px] font-medium tracking-widest uppercase">
                        Vision
                     </span>
                     <h3 className="text-[#1a1a1a] text-[20px] md:text-[3vw] lg:text-[2.2vw] xl:text-[28px] font-bold mt-[2vh] leading-tight">
                        Create India&apos;s most dependable smart vending
                        network
                     </h3>
                  </div>
                  <div className="mt-[4vh] w-full h-[2px] bg-gradient-to-r from-[#E7000B] to-transparent"></div>
               </div>
            </div>
         </section>

         {/* What Fuels Us */}
         <section className="w-full min-h-[80vh] relative flex flex-col justify-center px-[4vw] md:px-[6vw] xl:px-[56px] py-[10vh] overflow-hidden">
            {/* Dark background with gold accents */}
            <div className="absolute inset-0 bg-[#1a1a1a] z-0">
               {/* Decorative gold organic shape */}
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

            <div className="relative z-10 max-w-[1400px] mx-auto w-full">
               <div ref={valuesHeadingRef} className="text-center mb-[6vh]">
                  <span className="text-[#FDB12B] text-[12px] md:text-[1.5vw] lg:text-[1vw] xl:text-[14px] font-medium tracking-widest uppercase">
                     Our Values
                  </span>
                  <h2 className="text-[28px] md:text-[5vw] lg:text-[4vw] xl:text-[48px] font-bold text-white mt-[1vh] mb-[2vh]">
                     What Fuels Us
                  </h2>
                  <p className="text-[14px] md:text-[2vw] lg:text-[1.5vw] xl:text-[18px] text-white/50 max-w-[60vw] xl:max-w-[600px] mx-auto">
                     Innovation with Accountability
                  </p>
               </div>

               <div
                  ref={valueCardsRef}
                  className="grid grid-cols-1 md:grid-cols-3 gap-[16px] md:gap-[3vw] max-w-[90vw] xl:max-w-[1200px] mx-auto w-full"
               >
                  {values.map((value, idx) => (
                     <div
                        key={idx + 1}
                        className="border border-[#FDB12B]/20 rounded-2xl p-[24px] md:p-[4vh] backdrop-blur-sm bg-white/5 hover:bg-white/10 transition-colors duration-500"
                     >
                        <div className="w-[28px] h-[28px] md:w-[3vw] md:h-[3vw] md:min-w-[28px] md:min-h-[28px] md:max-w-[40px] md:max-h-[40px] rounded-full bg-[#FDB12B] mb-[3vh]"></div>
                        <h3 className="text-white text-[18px] md:text-[2.5vw] lg:text-[1.8vw] xl:text-[22px] font-bold mb-[2vh]">
                           {value.title}
                        </h3>
                        <p className="text-white/60 text-[13px] md:text-[1.5vw] lg:text-[1.1vw] xl:text-[15px] leading-relaxed">
                           {value.description}
                        </p>
                     </div>
                  ))}
               </div>

               <p className="text-white/40 text-center mt-[6vh] text-[13px] md:text-[1.5vw] lg:text-[1.1vw] xl:text-[15px] max-w-[60vw] xl:max-w-[600px] mx-auto italic">
                  Technology, consistency, and customer experience guide every
                  decision we make.
               </p>
            </div>
         </section>
      </>
   );
}
