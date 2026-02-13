'use client';

import Navbar from '@/components/navbar';
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
            { y: 40, opacity: 0, duration: 0.8 },
            '-=0.6'
         )
         .from(
            descRef.current,
            { y: 30, opacity: 0, duration: 0.8 },
            '-=0.4'
         )
         .from(
            lineRef.current,
            { scaleX: 0, duration: 1, ease: 'power4.out' },
            '-=0.3'
         );
   }, []);

   return (
      <section className="relative w-full min-h-screen overflow-hidden bg-[#fafafa]">
         {/* Gradient mesh — gold and red */}
         <div
            className="absolute inset-0 pointer-events-none z-0"
            style={{
               background: [
                  'radial-gradient(ellipse 80% 70% at 75% 25%, rgba(253,177,43,0.18) 0%, transparent 60%)',
                  'radial-gradient(ellipse 60% 60% at 90% 70%, rgba(231,0,11,0.08) 0%, transparent 55%)',
                  'radial-gradient(ellipse 50% 50% at 20% 80%, rgba(253,177,43,0.10) 0%, transparent 50%)',
                  'radial-gradient(ellipse 70% 50% at 50% 10%, rgba(231,0,11,0.04) 0%, transparent 50%)',
                  'radial-gradient(ellipse 40% 40% at 60% 55%, rgba(253,177,43,0.08) 0%, transparent 45%)'
               ].join(', ')
            }}
         />

         {/* Bottom waves */}
         <svg
            className="absolute bottom-0 left-0 w-full pointer-events-none z-[2]"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            style={{ height: '22vh' }}
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               d="M0,220 C180,160 420,260 660,190 C900,120 1140,240 1440,180 L1440,320 L0,320 Z"
               fill="#E7000B"
               opacity="0.07"
            />
            <path
               d="M0,240 C240,190 480,280 720,220 C960,160 1200,260 1440,210 L1440,320 L0,320 Z"
               fill="#D4960A"
               opacity="0.15"
            />
            <path
               d="M0,260 C200,230 400,290 600,250 C800,210 1000,280 1200,245 C1350,220 1440,255 1440,250 L1440,320 L0,320 Z"
               fill="#FDB12B"
               opacity="0.3"
            />
            <path
               d="M0,280 C160,260 340,300 520,275 C700,250 880,295 1060,270 C1240,245 1380,280 1440,272 L1440,320 L0,320 Z"
               fill="#FDB12B"
               opacity="0.55"
            />
            <path
               d="M0,282 C160,262 340,302 520,277 C700,252 880,297 1060,272 C1240,247 1380,282 1440,274"
               fill="none"
               stroke="#E7000B"
               strokeWidth="1.5"
               opacity="0.12"
            />
         </svg>

         {/* Content */}
         <div className="relative z-10 w-full h-full px-[3vw] md:px-[4vw] xl:px-[56px] flex flex-col max-w-[1700px] mx-auto">
            <Navbar />

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
               />

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
                  Snackit is creating a smarter way to access everyday snacks
                  and essentials.
               </p>
            </div>
         </div>
      </section>
   );
}
