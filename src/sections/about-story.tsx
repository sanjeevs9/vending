'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function AboutStory() {
   const sectionRef = useRef<HTMLDivElement>(null);
   const tagRef = useRef<HTMLSpanElement>(null);
   const headingRef = useRef<HTMLHeadingElement>(null);
   const subtitleRef = useRef<HTMLParagraphElement>(null);
   const bodyRef = useRef<HTMLDivElement>(null);
   const lineRef = useRef<HTMLDivElement>(null);
   const quoteRef = useRef<HTMLDivElement>(null);

   useGSAP(() => {
      gsap.from(tagRef.current, {
         y: 20,
         opacity: 0,
         duration: 0.6,
         ease: 'power2.out',
         scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
      });

      gsap.from(headingRef.current, {
         y: 50,
         opacity: 0,
         duration: 0.9,
         ease: 'power2.out',
         scrollTrigger: { trigger: headingRef.current, start: 'top 85%' }
      });

      gsap.from(subtitleRef.current, {
         y: 30,
         opacity: 0,
         duration: 0.7,
         ease: 'power2.out',
         scrollTrigger: { trigger: subtitleRef.current, start: 'top 85%' }
      });

      gsap.from(bodyRef.current, {
         y: 30,
         opacity: 0,
         duration: 0.8,
         ease: 'power2.out',
         scrollTrigger: { trigger: bodyRef.current, start: 'top 85%' }
      });

      gsap.from(lineRef.current, {
         scaleX: 0,
         duration: 1,
         ease: 'power4.out',
         scrollTrigger: { trigger: lineRef.current, start: 'top 90%' }
      });

      gsap.from(quoteRef.current, {
         y: 40,
         opacity: 0,
         duration: 1,
         ease: 'power2.out',
         scrollTrigger: { trigger: quoteRef.current, start: 'top 85%' }
      });
   }, []);

   return (
      <section
         ref={sectionRef}
         className="relative w-full py-[12vh] overflow-hidden bg-white"
      >
         {/* Decorative gold organic shape — left */}
         <svg
            className="absolute top-[-10%] left-[-5%] w-[35%] h-[120%] pointer-events-none z-0"
            viewBox="0 0 400 500"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               d="M300,40 C380,100 370,250 320,360 C270,470 160,500 80,440 C0,380 -20,240 30,140 C80,40 200,-20 300,40 Z"
               fill="#FDB12B"
               opacity="0.08"
            />
         </svg>

         {/* Decorative accents */}
         <div className="absolute top-[20%] right-[8%] w-[3vw] h-[3vw] rounded-full bg-[#E7000B]/6 pointer-events-none z-0" />
         <div className="absolute bottom-[15%] left-[15%] w-[6px] h-[6px] rounded-full bg-[#FDB12B]/25 pointer-events-none z-0" />

         <div className="relative z-10 max-w-[1100px] mx-auto px-[4vw] md:px-[6vw] xl:px-[56px]">
            <span
               ref={tagRef}
               className="text-[#FDB12B] text-[12px] md:text-[1.5vw] lg:text-[1vw] xl:text-[14px] font-medium tracking-widest uppercase block text-center mb-[2vh]"
            >
               Our Story
            </span>

            <h2
               ref={headingRef}
               className="text-[28px] md:text-[5vw] lg:text-[4vw] xl:text-[52px] font-bold text-[#1a1a1a] text-center leading-tight mb-[2vh]"
            >
               Redefining Workplace
               <br />
               <span className="text-[#E7000B]">Convenience</span>
            </h2>

            <p
               ref={subtitleRef}
               className="text-[#1a1a1a]/55 text-[15px] md:text-[2.2vw] lg:text-[1.5vw] xl:text-[19px] font-medium text-center mb-[5vh] max-w-[650px] mx-auto"
            >
               Born from within the corporate ecosystem, we understand
               the fast-paced demands of modern workspaces.
            </p>

            <div
               ref={bodyRef}
               className="max-w-[800px] mx-auto mb-[6vh]"
            >
               <p className="text-[#1a1a1a]/50 text-[14px] md:text-[2vw] lg:text-[1.3vw] xl:text-[17px] leading-[1.8] text-center">
                  Snackit is redefining workplace convenience through intelligent
                  vending solutions. Where productivity, energy, and accessibility
                  matter every single day — Snackit delivers premium snacks,
                  beverages, and essentials through state-of-the-art smart vending
                  machines designed for reliability, hygiene, and ease of use.
               </p>
            </div>

            <div
               ref={lineRef}
               className="w-[60px] h-[3px] bg-gradient-to-r from-[#FDB12B] to-[#E7000B] mx-auto mb-[6vh] origin-left"
            />

            {/* Dramatic pullquote */}
            <div ref={quoteRef} className="relative max-w-[900px] mx-auto text-center">
               {/* Decorative quote mark */}
               <svg
                  className="absolute -top-[24px] left-[8%] md:left-[15%] w-[36px] h-[36px] md:w-[44px] md:h-[44px] text-[#FDB12B]/20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
               >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
               </svg>
               <p className="text-[#1a1a1a] text-[20px] md:text-[3.5vw] lg:text-[2.5vw] xl:text-[34px] font-bold leading-[1.2]">
                  We don&apos;t just install machines.
                  <br />
                  <span className="text-[#E7000B]">
                     We create seamless convenience experiences.
                  </span>
               </p>
            </div>
         </div>
      </section>
   );
}
