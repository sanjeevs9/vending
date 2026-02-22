'use client';

import { ContainerTextFlip } from '@/components/ui/container-text-flip';
import Navbar from '@/components/navbar';
import Image from 'next/image';
import heroTiltedImg from '../../../public/hero/tilted.png';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

export default function SmartVendingLandingPage() {
   const headingRef = useRef<HTMLHeadingElement>(null);
   const subtitleRef = useRef<HTMLParagraphElement>(null);
   const ctaRef = useRef<HTMLDivElement>(null);
   const machineRef = useRef<HTMLDivElement>(null);

   useGSAP(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(headingRef.current, { y: 60, opacity: 0, duration: 0.9 })
         .from(subtitleRef.current, { y: 30, opacity: 0, duration: 0.7 }, '-=0.5')
         .from(ctaRef.current, { y: 20, opacity: 0, duration: 0.5 }, '-=0.3')
         .from(
            machineRef.current,
            { y: 80, opacity: 0, duration: 1, ease: 'power2.out' },
            '-=0.7'
         );
   }, []);

   const handleScroll = (sectionId: string) => {
      const section = document.getElementById(sectionId);
      if (section) {
         section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         });
      }
   };

   return (
      <section className="hero-section relative w-full min-h-screen overflow-hidden bg-[#f5f5f5]">
         {/* === ORGANIC SHAPE BEHIND MACHINE === */}
         <svg
            className="absolute top-[2%] right-[-8%] w-[65%] h-[95%] pointer-events-none z-[1]"
            viewBox="0 0 600 700"
            xmlns="http://www.w3.org/2000/svg"
         >
            {/* Main flowing shape — brand gold */}
            <path
               d="M520,50 C600,150 580,300 540,420 C500,540 420,650 300,680 C180,710 80,640 40,500 C0,360 30,200 120,100 C210,0 380,-30 520,50 Z"
               fill="#FDB12B"
               opacity="0.15"
            />
            {/* Inner accent shape */}
            <path
               d="M480,120 C540,190 530,310 490,410 C450,510 370,580 270,590 C170,600 100,540 80,430 C60,320 90,200 170,130 C250,60 380,60 480,120 Z"
               fill="#FDB12B"
               opacity="0.2"
            />
         </svg>

         {/* Small golden circle — top right */}
         <div className="absolute top-[8vh] right-[5vw] w-[4vw] h-[4vw] rounded-full bg-[#FDB12B]/15 pointer-events-none z-[1]" />
         {/* Tiny gold dot — left area */}
         <div className="absolute top-[35%] left-[42%] w-[8px] h-[8px] rounded-full bg-[#FDB12B]/25 pointer-events-none z-[1]" />

         {/* === GOLDEN WAVY PATTERNS AT BOTTOM === */}
         <svg
            className="absolute bottom-0 left-0 w-full pointer-events-none z-[2]"
            viewBox="0 0 1440 300"
            preserveAspectRatio="none"
            style={{ height: '30vh' }}
            xmlns="http://www.w3.org/2000/svg"
         >
            {/* Back wave — deep gold */}
            <path
               d="M0,200 C180,140 360,260 540,180 C720,100 900,240 1080,160 C1260,80 1380,180 1440,150 L1440,300 L0,300 Z"
               fill="#D4960A"
               opacity="0.3"
            />
            {/* Middle wave — brand gold */}
            <path
               d="M0,220 C200,170 400,280 600,200 C800,120 1000,260 1200,190 C1350,140 1440,200 1440,200 L1440,300 L0,300 Z"
               fill="#FDB12B"
               opacity="0.5"
            />
            {/* Front wave — bright gold */}
            <path
               d="M0,250 C160,210 340,290 520,240 C700,190 880,280 1060,230 C1240,180 1380,250 1440,240 L1440,300 L0,300 Z"
               fill="#FDB12B"
               opacity="0.8"
            />
         </svg>
         <div className=" w-full h-full">
               <Navbar />
            </div>
         {/* === MAIN CONTENT === */}
         <div className="relative z-10 w-full h-full px-[3vw] md:px-[4vw] xl:px-[56px] flex flex-col max-w-[1700px] mx-auto">
            

            {/* Main content — split layout */}
            <div className="flex flex-col md:flex-row justify-between flex-grow min-h-0 md:min-h-[90vh]">
               {/* Left side — text content */}
               <div className="flex flex-col justify-center items-center md:items-start w-full md:w-[45%] mb-[3vh] md:mb-0 pt-6 md:pt-0">
                  <h1 ref={headingRef} className="text-[#1a1a1a] text-[8vw] md:text-[6vw] lg:text-[4.5vw] xl:text-[56px] font-bold leading-[1.1] mb-[3vh] text-center md:text-left">
                     Snack{' '}
                     <ContainerTextFlip
                        words={[
                           'Smarter',
                           'Healthier',
                           'Sharper',
                           'Mindfully'
                        ]}
                     />
                     <br />
                     Work Better
                  </h1>

                  <p ref={subtitleRef} className="text-[#1a1a1a]/40 text-[14px] md:text-[2vw] lg:text-[1.3vw] xl:text-[18px] mb-[4vh] tracking-wide text-center md:text-left">
                     Redefining Convenience Through Smart
                     <br />
                     Vending Machines
                  </p>

                  {/* CTA Buttons */}
                  <div ref={ctaRef} className="flex items-center justify-center md:justify-start gap-[10px] md:gap-[2vw]">
                     <button
                        onClick={() => handleScroll('contact-section')}
                        className="bg-primary hover:bg-primary-dark text-white font-bold rounded-full px-[16px] md:px-[2.5vw] xl:px-[32px] py-[8px] md:py-[1.8vh] xl:py-[14px] text-[11px] md:text-[1.5vw] lg:text-[1vw] xl:text-[14px] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(231,0,11,0.3)]"
                     >
                        Get a Machine
                     </button>
                     <button
                        onClick={() => handleScroll('products-section')}
                        className="border-2 border-[#1a1a1a]/15 hover:border-[#E7000B] text-[#1a1a1a]/60 hover:text-[#E7000B] rounded-full px-[16px] md:px-[2.5vw] xl:px-[32px] py-[8px] md:py-[1.8vh] xl:py-[14px] text-[11px] md:text-[1.5vw] lg:text-[1vw] xl:text-[14px] font-medium transition-all duration-300"
                     >
                        View Products
                     </button>
                  </div>
               </div>

               {/* Right side — vending machine on the blob */}
               <div className="w-full md:w-[55%] relative z-[2] flex items-center justify-center min-h-[320px] md:min-h-0">
                  {/* Main vending machine */}
                  <div ref={machineRef} className="relative md:absolute md:inset-0 flex justify-center items-center z-[5] md:pt-10 md:pl-10">
                     <div className="relative h-[260px] md:h-[600px] w-[200px] md:w-[460px]">
                        <Image
                           src={heroTiltedImg}
                           alt="Smart vending machine with snacks"
                           priority
                           fill
                           sizes="(max-width: 768px) 200px, 460px"
                           className="object-contain drop-shadow-[0_15px_50px_rgba(0,0,0,0.15)]"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
