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
