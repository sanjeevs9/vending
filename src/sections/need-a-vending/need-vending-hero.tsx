/* eslint-disable @next/next/no-img-element */
'use client';

import Navbar from '@/components/navbar';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

export default function NeedVendingHero() {
   const headingRef = useRef<HTMLHeadingElement>(null);
   const subtitleRef = useRef<HTMLParagraphElement>(null);
   const ctaRef = useRef<HTMLDivElement>(null);

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
            ctaRef.current,
            { y: 20, opacity: 0, duration: 0.6 },
            '-=0.3'
         );
   }, []);

   const handleScroll = (sectionId: string) => {
      const section = document.getElementById(sectionId);
      if (section) {
         section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
   };

   return (
      <section className="relative w-full min-h-screen overflow-hidden bg-[#f5f5f5]">
         {/* Gold organic shapes */}
         <svg
            className="absolute top-[5%] right-[-10%] w-[55%] h-[90%] pointer-events-none z-0"
            viewBox="0 0 600 700"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               d="M520,50 C600,150 580,300 540,420 C500,540 420,650 300,680 C180,710 80,640 40,500 C0,360 30,200 120,100 C210,0 380,-30 520,50 Z"
               fill="#FDB12B"
               opacity="0.12"
            />
            <path
               d="M480,120 C540,190 530,310 490,410 C450,510 370,580 270,590 C170,600 100,540 80,430 C60,320 90,200 170,130 C250,60 380,60 480,120 Z"
               fill="#FDB12B"
               opacity="0.18"
            />
         </svg>

         <svg
            className="absolute bottom-[-10%] left-[-8%] w-[35%] h-[50%] pointer-events-none z-0"
            viewBox="0 0 400 500"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               d="M300,40 C380,100 370,250 320,360 C270,470 160,500 80,440 C0,380 -20,240 30,140 C80,40 200,-20 300,40 Z"
               fill="#FDB12B"
               opacity="0.1"
            />
         </svg>

         {/* Decorative dots */}
         <div className="absolute top-[15%] right-[10%] w-[3vw] h-[3vw] rounded-full bg-[#FDB12B]/15 pointer-events-none z-0" />
         <div className="absolute bottom-[30%] left-[8%] w-[8px] h-[8px] rounded-full bg-[#FDB12B]/25 pointer-events-none z-0" />

         {/* Gold waves at bottom */}
         <svg
            className="absolute bottom-0 left-0 w-full pointer-events-none z-[1]"
            viewBox="0 0 1440 200"
            preserveAspectRatio="none"
            style={{ height: '12vh' }}
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               d="M0,140 C200,100 400,180 600,120 C800,60 1000,160 1200,110 C1350,75 1440,130 1440,130 L1440,200 L0,200 Z"
               fill="#FDB12B"
               opacity="0.25"
            />
            <path
               d="M0,160 C160,130 340,190 520,150 C700,110 880,180 1060,140 C1240,100 1380,160 1440,150 L1440,200 L0,200 Z"
               fill="#FDB12B"
               opacity="0.45"
            />
         </svg>

         {/* Content */}
         <div className="relative z-10 w-full h-full px-[3vw] md:px-[4vw] xl:px-[56px] flex flex-col max-w-[1700px] mx-auto">
            <Navbar />

            {/* Main content — split layout */}
            <div className="flex flex-col md:flex-row justify-between flex-grow min-h-[90vh]">
               {/* Left side — text content */}
               <div className="flex flex-col justify-center items-center md:items-start w-full md:w-[45%] mb-[5vh] md:mb-0 pt-6 md:pt-0">
                  <span className="text-[#FDB12B] text-[12px] md:text-[1.5vw] lg:text-[1vw] xl:text-[14px] font-medium tracking-widest uppercase mb-[2vh]">
                     Vending Solutions
                  </span>

                  <h1
                     ref={headingRef}
                     className="text-[#1a1a1a] text-[8vw] md:text-[6vw] lg:text-[4.5vw] xl:text-[56px] font-bold leading-[1.1] mb-[3vh] text-center md:text-left"
                  >
                     Need a Vending
                     <br />
                     <span className="text-[#E7000B]">Machine?</span>
                  </h1>

                  <p
                     ref={subtitleRef}
                     className="text-[#1a1a1a]/40 text-[14px] md:text-[2vw] lg:text-[1.3vw] xl:text-[18px] mb-[4vh] tracking-wide text-center md:text-left"
                  >
                     Modern machines customised for your
                     <br />
                     workplace or facility
                  </p>

                  {/* CTA Buttons */}
                  <div ref={ctaRef} className="flex items-center justify-center md:justify-start gap-[10px] md:gap-[2vw]">
                     <button
                        onClick={() => handleScroll('vending-contact-section')}
                        className="bg-[#E7000B] hover:bg-[#c5000a] text-white font-bold rounded-full px-[16px] md:px-[2.5vw] xl:px-[32px] py-[8px] md:py-[1.8vh] xl:py-[14px] text-[11px] md:text-[1.5vw] lg:text-[1vw] xl:text-[14px] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(231,0,11,0.3)]"
                     >
                        Request a Machine
                     </button>
                     <button
                        onClick={() => handleScroll('features-section')}
                        className="border-2 border-[#1a1a1a]/15 hover:border-[#E7000B] text-[#1a1a1a]/60 hover:text-[#E7000B] rounded-full px-[16px] md:px-[2.5vw] xl:px-[32px] py-[8px] md:py-[1.8vh] xl:py-[14px] text-[11px] md:text-[1.5vw] lg:text-[1vw] xl:text-[14px] font-medium transition-all duration-300"
                     >
                        Learn More
                     </button>
                  </div>
               </div>

               {/* Right side — vending machine */}
               <div className="w-full md:w-[55%] relative flex justify-center items-center z-[2] pt-8 md:pt-20 2xl:pl-40">
                  <div className="relative z-[5] h-[40vh] md:h-[60vh] w-auto">
                     <img
                        src="/hero/vending-machine.png"
                        alt="Smart vending machine"
                        className="h-full w-auto object-contain drop-shadow-[0_15px_50px_rgba(0,0,0,0.15)]"
                     />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
