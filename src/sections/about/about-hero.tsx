'use client';

import Navbar from '@/components/navbar';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const stats = [
   { value: '10+', label: 'Years' },
   { value: '50+', label: 'Members' },
   { value: '600+', label: 'Clients' },
   { value: '15+', label: 'Cities' },
   { value: '2000+', label: 'Products' },
   { value: '100+', label: 'Brands' }
];

export default function AboutHero() {
   const headingRef = useRef<HTMLHeadingElement>(null);
   const subtitleRef = useRef<HTMLParagraphElement>(null);
   const statsRef = useRef<HTMLDivElement>(null);

   useGSAP(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
      tl.from(headingRef.current, { y: 50, opacity: 0, duration: 0.9 })
         .from(subtitleRef.current, { y: 30, opacity: 0, duration: 0.7 }, '-=0.4');

      if (statsRef.current) {
         gsap.from(statsRef.current.children, {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.06,
            ease: 'power2.out',
            delay: 0.8
         });
      }
   }, []);

   return (
      <section className="relative w-full min-h-[70vh] md:min-h-screen overflow-hidden bg-[#f5f5f5]">
         {/* === ORGANIC SHAPE BEHIND CONTENT === */}
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

         <div className="relative z-10 w-full h-full px-[3vw] md:px-[4vw] xl:px-[56px] flex flex-col max-w-[1700px] mx-auto">
            <Navbar />

            <div className="flex-grow flex flex-col justify-center items-center text-center min-h-[60vh] md:min-h-[75vh]">
               <h1
                  ref={headingRef}
                  className="text-[#1a1a1a] text-[32px] md:text-[7vw] lg:text-[5vw] xl:text-[64px] font-bold leading-none mb-[2vh]"
               >
                  Building the Future of
                  <br />
                  <span className="text-primary">On-Site Convenience</span>
               </h1>

               <p
                  ref={subtitleRef}
                  className="text-[#1a1a1a]/40 text-[14px] md:text-[1.8vw] lg:text-[1.2vw] xl:text-[16px] max-w-[500px] leading-relaxed mb-[6vh]"
               >
                  Snackit is creating a smarter way to access everyday snacks
                  and essentials — wherever people work, learn, or move.
               </p>

               {/* Stats strip */}
               <div
                  ref={statsRef}
                  className="flex flex-wrap justify-center gap-[20px] md:gap-[2px] bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.04)]"
               >
                  {stats.map((stat, idx) => (
                     <div
                        key={idx}
                        className="px-[16px] md:px-[24px] lg:px-[28px] xl:px-[32px] py-[16px] md:py-[20px] text-center"
                     >
                        <span className="text-[#1a1a1a] text-[20px] md:text-[2.5vw] lg:text-[1.8vw] xl:text-[24px] font-bold block leading-none">
                           {stat.value}
                        </span>
                        <span className="text-[#1a1a1a]/35 text-[10px] md:text-[1.1vw] lg:text-[0.75vw] xl:text-[11px] tracking-wider uppercase mt-[4px] block">
                           {stat.label}
                        </span>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}
