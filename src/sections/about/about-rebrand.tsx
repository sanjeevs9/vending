'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function AboutRebrand() {
   const sectionRef = useRef<HTMLElement>(null);
   const headingRef = useRef<HTMLDivElement>(null);
   const videoRef = useRef<HTMLDivElement>(null);

   useGSAP(() => {
      gsap.from(headingRef.current, {
         y: 40,
         opacity: 0,
         duration: 0.9,
         ease: 'power3.out',
         scrollTrigger: { trigger: headingRef.current, start: 'top 80%' }
      });

      gsap.from(videoRef.current, {
         y: 60,
         opacity: 0,
         duration: 1,
         ease: 'power2.out',
         scrollTrigger: { trigger: videoRef.current, start: 'top 80%' }
      });
   }, []);

   return (
      <section
         ref={sectionRef}
         className="relative w-full py-[10vh] md:py-[14vh] bg-[#fafafa] overflow-hidden"
      >
         {/* Subtle decorative gold circle */}
         <div className="absolute top-[10%] left-[-5%] w-[20vw] h-[20vw] rounded-full bg-[#FDB12B]/8 pointer-events-none" />
         <div className="absolute bottom-[5%] right-[-3%] w-[12vw] h-[12vw] rounded-full bg-[#FDB12B]/6 pointer-events-none" />

         <div className="max-w-[1100px] mx-auto px-[4vw] md:px-[5vw] xl:px-[48px]">
            {/* Heading area */}
            <div ref={headingRef} className="text-center mb-[6vh] md:mb-[8vh]">
               <span className="inline-block text-primary text-[11px] md:text-[1.2vw] lg:text-[0.8vw] xl:text-[12px] font-semibold tracking-[0.2em] uppercase mb-[2vh]">
                  Our Evolution
               </span>
               <h2 className="text-[#1a1a1a] text-[26px] md:text-[4vw] lg:text-[3vw] xl:text-[40px] font-bold leading-[1.1] mb-[2vh]">
                  A New Face,{' '}
                  <span className="text-primary">Same Heart</span>
               </h2>
               <p className="text-[#1a1a1a]/40 text-[13px] md:text-[1.6vw] lg:text-[1.1vw] xl:text-[15px] leading-[1.7] max-w-[540px] mx-auto">
                  Our rebranding journey captures who we&apos;ve become — bolder,
                  sharper, and more committed than ever to redefining workplace
                  convenience across India.
               </p>
            </div>

            {/* Video container */}
            <div ref={videoRef} className="relative">
               {/* Decorative frame accent */}
               <div className="absolute -top-[12px] -left-[12px] w-[60px] h-[60px] border-t-[3px] border-l-[3px] border-primary/30 rounded-tl-2xl pointer-events-none z-10" />
               <div className="absolute -bottom-[12px] -right-[12px] w-[60px] h-[60px] border-b-[3px] border-r-[3px] border-primary/30 rounded-br-2xl pointer-events-none z-10" />

               {/* Video wrapper */}
               <div className="relative rounded-2xl overflow-hidden bg-[#1a1a1a] shadow-[0_8px_40px_rgba(0,0,0,0.1)]">
                  <video
                     className="w-full h-auto block"
                     autoPlay
                     muted
                     loop
                     playsInline
                     preload="metadata"
                  >
                     <source src="/video/video.mp4" type="video/mp4" />
                  </video>
               </div>
            </div>
         </div>
      </section>
   );
}
