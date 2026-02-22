'use client';

import Navbar from '@/components/navbar';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { useRef } from 'react';
import brand1Img from "../../../public/vectors/sell/products/1.png";
import brand2Img from "../../../public/vectors/sell/products/2.png";
import brand3Img from "../../../public/vectors/sell/products/3.png";
import brand4Img from "../../../public/vectors/sell/products/4.png";
import brand5Img from "../../../public/vectors/sell/products/5.png";
import brand6Img from "../../../public/vectors/sell/products/6.png";
import brand7Img from "../../../public/vectors/sell/products/7.png";
import heroTiltedImg from "../../../public/hero/tilted.png";
import Image from 'next/image';


gsap.registerPlugin(useGSAP);

const floatingItems = [
   { label: brand1Img, top: '5%',  right: '8%',  left: undefined, bottom: undefined, size: 'w-[50px] h-[50px] lg:w-[100px] lg:h-[100px]' },
   { label: brand2Img, top: '22%', right: '-2%', left: undefined, bottom: undefined, size: 'w-[45px] h-[45px] lg:w-[85px] lg:h-[85px]' },
   { label: brand3Img, top: undefined, right: '5%',  left: undefined, bottom: '10%', size: 'w-[50px] h-[50px] lg:w-[95px] lg:h-[95px]' },
   { label: brand4Img, top: '6%',  right: undefined, left: '0%',  bottom: undefined, size: 'w-[45px] h-[45px] lg:w-[90px] lg:h-[90px]' },
   { label: brand5Img, top: '42%', right: undefined, left: '-3%', bottom: undefined, size: 'w-[50px] h-[50px] lg:w-[100px] lg:h-[100px]' },
   { label: brand6Img, top: undefined, right: undefined, left: '2%', bottom: '8%',  size: 'w-[45px] h-[45px] lg:w-[88px] lg:h-[88px]' },
   { label: brand7Img, top: undefined, right: '-1%', left: undefined, bottom: '38%', size: 'w-[48px] h-[48px] lg:w-[92px] lg:h-[92px]' }
];

export default function SellHero() {
   const containerRef = useRef<HTMLDivElement>(null);
   const tagRef = useRef<HTMLSpanElement>(null);
   const headingRef = useRef<HTMLHeadingElement>(null);
   const subtitleRef = useRef<HTMLParagraphElement>(null);
   const ctaRef = useRef<HTMLDivElement>(null);
   const machineRef = useRef<HTMLDivElement>(null);
   const statsRef = useRef<HTMLDivElement>(null);
   const floatersRef = useRef<(HTMLDivElement | null)[]>([]);

   useGSAP(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.from(tagRef.current, { y: 20, opacity: 0, duration: 0.6 })
         .from(headingRef.current, { y: 60, opacity: 0, duration: 0.9 }, '-=0.3')
         .from(subtitleRef.current, { y: 30, opacity: 0, duration: 0.7 }, '-=0.5')
         .from(ctaRef.current, { y: 20, opacity: 0, duration: 0.5 }, '-=0.3')
         .from(
            machineRef.current,
            { y: 80, opacity: 0, duration: 1, ease: 'power2.out' },
            '-=0.7'
         )
         .from(statsRef.current, { y: 20, opacity: 0, duration: 0.5 }, '-=0.3');

      // Floating items entrance + continuous bobbing
      floatersRef.current.forEach((el, i) => {
         if (!el) return;
         gsap.from(el, {
            scale: 0,
            opacity: 0,
            duration: 0.5,
            delay: 1.2 + i * 0.15,
            ease: 'back.out(1.5)'
         });
         gsap.to(el, {
            y: '+=10',
            duration: 2.2 + i * 0.3,
            ease: 'sine.inOut',
            yoyo: true,
            repeat: -1,
            delay: 1.8 + i * 0.4
         });
      });
   }, []);

   const handleScroll = (sectionId: string) => {
      const section = document.getElementById(sectionId);
      if (section) {
         section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
   };

   return (
      <section
         ref={containerRef}
         className="relative w-full min-h-screen overflow-hidden bg-[#f5f5f5]"
      >
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

         <div className="relative z-10 w-full h-full flex flex-col max-w-[1700px] mx-auto">
            <Navbar />

            <div className="flex flex-col md:flex-row justify-between flex-grow min-h-0 md:min-h-[90vh] px-[3vw] md:px-[4vw] xl:px-[56px]">
               {/* Left — text content */}
               <div className="flex flex-col justify-center items-center md:items-start w-full md:w-[45%] mb-[3vh] md:mb-0 pt-6 md:pt-0">
                  {/* <span
                     ref={tagRef}
                     className="inline-flex items-center gap-2 bg-primary/5 border border-primary/10 text-primary text-[10px] md:text-[1.2vw] lg:text-[0.85vw] xl:text-[12px] font-semibold tracking-[0.15em] uppercase rounded-full px-[14px] py-[6px] md:px-[1.5vw] md:py-[0.8vh] xl:px-[18px] xl:py-[8px] mb-[3vh]"
                  >
                     <span className="w-[6px] h-[6px] rounded-full bg-primary animate-pulse" />
                     For Brands
                  </span> */}

                  <h1
                     ref={headingRef}
                     className="text-[#1a1a1a] text-[9vw] md:text-[5.5vw] lg:text-[4.2vw] xl:text-[54px] font-bold leading-[1.05] mb-[2.5vh] text-center md:text-left tracking-[-0.02em]"
                  >
                     Grow with
                     <br />
                     <span className="text-primary">Snackit</span>
                  </h1>

                  <p
                     ref={subtitleRef}
                     className="text-[#1a1a1a]/45 text-[13px] md:text-[1.8vw] lg:text-[1.2vw] xl:text-[17px] mb-[4vh] tracking-wide leading-[1.6] text-center md:text-left max-w-[440px]"
                  >
                     Put your products inside India&apos;s smartest
                     <br className="hidden md:block" />
                     workplaces. Reach consumers exactly where
                     <br className="hidden md:block" />
                     buying decisions happen.
                  </p>

                  {/* CTA Buttons */}
                  <div
                     ref={ctaRef}
                     className="flex items-center justify-center md:justify-start gap-[10px] md:gap-[1.5vw]"
                  >
                     <button
                        onClick={() => handleScroll('sell-contact-section')}
                        className="group bg-primary hover:bg-primary-dark text-white font-bold rounded-full px-[18px] md:px-[2.5vw] xl:px-[32px] py-[10px] md:py-[1.8vh] xl:py-[14px] text-[11px] md:text-[1.5vw] lg:text-[1vw] xl:text-[14px] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(231,0,11,0.25)] flex items-center gap-2"
                     >
                        List Your Products
                        <svg
                           className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                           strokeWidth={2.5}
                        >
                           <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13 7l5 5m0 0l-5 5m5-5H6"
                           />
                        </svg>
                     </button>
                     <button
                        onClick={() => handleScroll('sell-features-section')}
                        className="border-2 border-[#1a1a1a]/12 hover:border-primary/40 text-black/55 hover:text-primary rounded-full px-[18px] md:px-[2.5vw] xl:px-[32px] py-[10px] md:py-[1.8vh] xl:py-[14px] text-[11px] md:text-[1.5vw] lg:text-[1vw] xl:text-[14px] font-medium transition-all duration-300"
                     >
                        How It Works
                     </button>
                  </div>

                  {/* Trust stats */}
                  <div
                     ref={statsRef}
                     className="flex items-center gap-[24px] md:gap-[3vw] xl:gap-[40px] mt-[5vh] pt-[3vh] border-t border-[#1a1a1a]/6"
                  >
                     <div className="text-center md:text-left">
                        <span className="text-black text-[18px] md:text-[2.5vw] lg:text-[1.6vw] xl:text-[22px] font-bold block leading-none">
                           100+
                        </span>
                        <span className="text-[#1a1a1a]/35 text-[9px] md:text-[1.1vw] lg:text-[0.75vw] xl:text-[11px] tracking-wide uppercase mt-1 block">
                           Brands
                        </span>
                     </div>
                     <div className="w-[1px] h-[32px] bg-black/8" />
                     <div className="text-center md:text-left">
                        <span className="text-black text-[18px] md:text-[2.5vw] lg:text-[1.6vw] xl:text-[22px] font-bold block leading-none">
                           15+
                        </span>
                        <span className="text-black/35 text-[9px] md:text-[1.1vw] lg:text-[0.75vw] xl:text-[11px] tracking-wide uppercase mt-1 block">
                           Cities
                        </span>
                     </div>
                     <div className="w-[1px] h-[32px] bg-black/8" />
                     <div className="text-center md:text-left">
                        <span className="text-black text-[18px] md:text-[2.5vw] lg:text-[1.6vw] xl:text-[22px] font-bold block leading-none">
                           600+
                        </span>
                        <span className="text-black/35 text-[9px] md:text-[1.1vw] lg:text-[0.75vw] xl:text-[11px] tracking-wide uppercase mt-1 block">
                           Locations
                        </span>
                     </div>
                  </div>
               </div>

               {/* Right — vending machine + floating tags */}
               <div className="w-full md:w-[55%] relative z-[2] flex items-center justify-center min-h-[280px] md:min-h-0">
                  <div
                     ref={machineRef}
                     className="relative md:absolute md:inset-0 flex justify-center items-center z-[5] md:pl-[5%] md:pt-[3%]"
                  >
                     <div className="relative h-[220px] md:h-[500px] w-[170px] md:w-[380px]">
                        <Image
                           src={heroTiltedImg}
                           alt="Smart vending machine for brands"
                           priority
                           fill
                           sizes="(max-width: 768px) 170px, 380px"
                           className="object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
                        />
                     </div>
                  </div>

                  {/* Floating product tags */}
                  {floatingItems.map((item, idx) => (
                     <div
                        key={idx}
                        ref={(el) => {
                           floatersRef.current[idx] = el;
                        }}
                        className="absolute z-[10] hidden md:block"
                        style={{
                           top: item.top,
                           right: item.right,
                           bottom: item.bottom,
                           left: item.left
                        }}
                     >
                        <Image
                           src={item.label}
                           alt=""
                           className={`${item.size} object-contain`}
                           width={100}
                           height={100}
                        />
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}
