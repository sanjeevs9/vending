/* eslint-disable @next/next/no-img-element */
'use client';

import { FloatingNav } from '@/components/ui/floating-navbar';
import GradientBackground from './gradient-background';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import Link from 'next/link';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP);

const Routes = [
   { label: 'Purpose', href: 'purpose-section' },
   { label: 'FAQ', href: 'faq-section' }
];

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

   const handleScroll = (sectionId: string) => {
      const section = document.getElementById(sectionId);
      if (section) {
         section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
   };

   return (
      <GradientBackground>
         <section className="relative w-full min-h-screen overflow-hidden">
            <div className="relative z-10 w-full h-full px-[2vw] md:px-[4vw] flex flex-col">
               {/* Navigation */}
               <nav className="flex relative items-center justify-center min-h-[10vh]">
                  <div className="absolute left-0 w-[12vw] lg:w-[6vw] top-0.5">
                     <Link href="/">
                        <img
                           src="/logos/snackit.png"
                           alt="Snackit logo"
                           className="w-full h-auto"
                        />
                     </Link>
                  </div>

                  <FloatingNav>
                     <div className="bg-[#f84d35] bg-opacity-20 rounded-full px-[3vw] py-[1.5vh]">
                        <ul className="flex gap-[2vw] md:gap-[3vw]">
                           <li className="text-white hover:text-slate-600 cursor-pointer text-[2.5vw] md:text-[1.8vw] lg:text-[1.2vw] transition-colors duration-300">
                              <Link href="/">Home</Link>
                           </li>
                           {Routes.map((el, idx) => (
                              <li
                                 key={idx + 1}
                                 className="text-white hover:text-slate-600 cursor-pointer text-[2.5vw] md:text-[1.8vw] lg:text-[1.2vw] transition-colors duration-300"
                              >
                                 <button
                                    onClick={() => handleScroll(el.href)}
                                 >
                                    {el.label}
                                 </button>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </FloatingNav>
               </nav>

               {/* Centered hero content */}
               <div className="flex-grow flex flex-col justify-center items-center text-center min-h-[90vh]">
                  <h1
                     ref={headingRef}
                     className="text-white text-[14vw] md:text-[9vw] lg:text-[7vw] font-bold leading-none mb-[3vh]"
                  >
                     Who We Are
                  </h1>

                  <div
                     ref={lineRef}
                     className="w-[20vw] h-[2px] bg-white/40 mb-[3vh] origin-left"
                  ></div>

                  <p
                     ref={subtitleRef}
                     className="text-white/90 text-[4vw] md:text-[2.5vw] lg:text-[1.8vw] font-medium mb-[2vh] max-w-[80vw] md:max-w-[60vw]"
                  >
                     Building the Future of On-Site Convenience
                  </p>
                  <p
                     ref={descRef}
                     className="text-white/70 text-[3vw] md:text-[1.8vw] lg:text-[1.3vw] max-w-[70vw] md:max-w-[50vw] leading-relaxed"
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
