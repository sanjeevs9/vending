'use client';

import { useEffect, useRef, useState } from 'react';

export default function AboutUs() {
   const sectionRef = useRef<HTMLDivElement | null>(null);
   const [isVisible, setIsVisible] = useState(false);

   // Animation for counting up numbers
   const useCountUp = (end: number, duration = 2000) => {
      const [count, setCount] = useState(0);

      useEffect(() => {
         if (!isVisible) return;

         let startTime: number | undefined;
         let animationFrameId: number;

         const animate = (timestamp: number) => {
            startTime ??= timestamp;
            const progress = timestamp - startTime;

            if (progress < duration) {
               setCount(Math.floor((progress / duration) * end));
               animationFrameId = requestAnimationFrame(animate);
            } else {
               setCount(end);
            }
         };

         animationFrameId = requestAnimationFrame(animate);

         return () => cancelAnimationFrame(animationFrameId);
      }, [end, duration, isVisible]);

      return count;
   };

   useEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               setIsVisible(true);
               observer.unobserve(entry.target);
            }
         },
         { threshold: 0.1 }
      );

      if (sectionRef.current) {
         observer.observe(sectionRef.current);
      }

      return () => {
         if (sectionRef.current) {
            observer.unobserve(sectionRef.current);
         }
      };
   }, []);

   const years = useCountUp(15);
   const members = useCountUp(90);
   const clients = useCountUp(60);

   const stats = [
      { value: years, label: 'Years of Experience', symbol: '+' },
      { value: members, label: 'Team Members', symbol: '+' },
      { value: clients, label: 'Happy Clients', symbol: '+' }
   ];

   return (
      <section
         id="about-section"
         className="about-section relative w-full min-h-[50vh] overflow-hidden flex justify-center"
      >
         {/* effect  */}
         <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-400 z-0">
            <div className="absolute inset-0 opacity-20">
               {/* SVG wave pattern overlay */}
               <svg
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <defs>
                     <pattern
                        id="wave"
                        x="0"
                        y="0"
                        width="200"
                        height="200"
                        patternUnits="userSpaceOnUse"
                     >
                        <path
                           d="M0,100 C40,70 60,130 100,100 C140,70 160,130 200,100 L200,200 L0,200 Z"
                           fill="red"
                        />
                        <path
                           d="M0,50 C40,20 60,80 100,50 C140,20 160,80 200,50 L200,0 L0,0 Z"
                           fill="red"
                        />
                     </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#wave)" />
               </svg>
            </div>
         </div>

         {/* main content  */}
         <div className="relative w-full py-[5vh] px-[3vw]">
            <div
               className="max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] mx-auto backdrop-blur-md"
               ref={sectionRef}
            >
               <div className="text-center mb-[2vh]">
                  <span className="text-white text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] font-medium font-geist-mono">
                     About Us
                  </span>
               </div>

               <h2 className="text-[6vw] md:text-[4vw] lg:text-[3vw] font-bold text-center text-white mb-[3vh]">
                  We&apos;re snack lovers, just like you!
               </h2>

               <div className="flex mx-[3vw] md:mx-0">
                  <p className="text-slate-200 max-w-[90vw] md:max-w-[70vw] lg:max-w-[60vw] mx-auto mb-[5vh] text-justify text-[3vw] md:text-[1.8vw] lg:text-[1.2vw] leading-relaxed">
                     At Snackit, we believe snacks are more than just food —
                     they&apos;re moments of joy and quick pick-me-ups wherever
                     you are. With smart tech and your favorites always stocked,
                     we make snack time fun, fast, and effortless.
                  </p>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-3 gap-[4vw] pb-[5vh]">
                  {stats.map((stat, index) => (
                     <div key={index + 1} className="text-center">
                        <div className="flex justify-center">
                           <span className="text-[8vw] md:text-[5vw] lg:text-[4vw] font-bold text-white">
                              {stat.value}
                              {stat.symbol}
                           </span>
                        </div>

                        <p className="text-slate-100 mt-[1vh] text-[3vw] md:text-[2vw] lg:text-[1.5vw]">
                           {stat.label}
                        </p>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}
