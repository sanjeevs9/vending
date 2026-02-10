'use client';

import Navbar from '@/components/navbar';
import GradientBackground from './gradient-background';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

export default function AboutHero() {
   const headingRef = useRef<HTMLHeadingElement>(null);
   const subtitleRef = useRef<HTMLParagraphElement>(null);
   const descRef = useRef<HTMLParagraphElement>(null);
   const lineRef = useRef<HTMLDivElement>(null);

   useGSAP(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out' } });

      tl.from(headingRef.current, {
         y: 80,
         opacity: 0,
         duration: 1.2
      })
         .from(
            subtitleRef.current,
            {
               y: 40,
               opacity: 0,
               duration: 0.8
            },
            '-=0.6'
         )
         .from(
            descRef.current,
            {
               y: 30,
               opacity: 0,
               duration: 0.8
            },
            '-=0.4'
         )
         .from(
            lineRef.current,
            {
               scaleX: 0,
               duration: 1,
               ease: 'power4.out'
            },
            '-=0.3'
         );
   }, []);

   return (
      <GradientBackground>
         <section className="relative w-full min-h-screen overflow-hidden">
            <div className="relative z-10 w-full h-full px-[3vw] md:px-[4vw] xl:px-[56px] flex flex-col max-w-[1700px] mx-auto">
               <Navbar />

               {/* Centered hero content */}
               <div className="flex-grow flex flex-col justify-center items-center text-center min-h-[90vh]">
                  <span className="text-[#FDB12B] text-[12px] md:text-[1.5vw] lg:text-[1vw] xl:text-[14px] font-medium tracking-widest uppercase mb-[2vh]">
                     About Us
                  </span>

                  <h1
                     ref={headingRef}
                     className="text-[#1a1a1a] text-[36px] md:text-[9vw] lg:text-[7vw] xl:text-[86px] font-bold leading-none mb-[3vh]"
                  >
                     Who We Are
                  </h1>

                  <div
                     ref={lineRef}
                     className="w-[20vw] xl:w-[200px] h-[2px] bg-[#FDB12B]/40 mb-[3vh] origin-left"
                  ></div>

                  <p
                     ref={subtitleRef}
                     className="text-[#1a1a1a]/70 text-[16px] md:text-[2.5vw] lg:text-[1.8vw] xl:text-[22px] font-medium mb-[2vh] max-w-[80vw] md:max-w-[60vw] xl:max-w-[700px]"
                  >
                     Building the Future of On-Site Convenience
                  </p>
                  <p
                     ref={descRef}
                     className="text-[#1a1a1a]/50 text-[14px] md:text-[1.8vw] lg:text-[1.3vw] xl:text-[16px] max-w-[70vw] md:max-w-[50vw] xl:max-w-[600px] leading-relaxed"
                  >
                     Snackit is creating a smarter way to access everyday
                     snacks and essentials.
                  </p>
               </div>
            </div>
         </section>
      </GradientBackground>
   );
}
