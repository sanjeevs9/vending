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
      }, [end, duration]);

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

      const currentSection = sectionRef.current;
      if (currentSection) {
         observer.observe(currentSection);
      }

      return () => {
         if (currentSection) {
            observer.unobserve(currentSection);
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
         className="about-section relative w-full min-h-[50vh] overflow-hidden flex justify-center bg-[#f5f5f5]"
      >
         {/* === DECORATIVE ELEMENTS === */}

         {/* Golden organic shape — left side */}
         <svg
            className="absolute top-[-10%] left-[-5%] w-[40%] h-[120%] pointer-events-none z-0"
            viewBox="0 0 400 500"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               d="M300,40 C380,100 370,250 320,360 C270,470 160,500 80,440 C0,380 -20,240 30,140 C80,40 200,-20 300,40 Z"
               fill="#FDB12B"
               opacity="0.12"
            />
         </svg>

         {/* Golden organic shape — right side */}
         <svg
            className="absolute bottom-[-15%] right-[-5%] w-[35%] h-[110%] pointer-events-none z-0"
            viewBox="0 0 400 500"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               d="M100,460 C20,400 -10,260 30,150 C70,40 180,0 280,50 C380,100 400,240 360,350 C320,460 200,520 100,460 Z"
               fill="#FDB12B"
               opacity="0.1"
            />
         </svg>

         {/* Golden wavy accent — bottom */}
         <svg
            className="absolute bottom-0 left-0 w-full pointer-events-none z-0"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            style={{ height: '8vh' }}
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               d="M0,80 C240,40 480,100 720,60 C960,20 1200,80 1440,50 L1440,120 L0,120 Z"
               fill="#FDB12B"
               opacity="0.15"
            />
         </svg>

         {/* Small decorative accents */}
         <div className="absolute top-[15%] right-[12%] w-[3vw] h-[3vw] rounded-full bg-[#FDB12B]/10 pointer-events-none z-0" />
         <div className="absolute bottom-[20%] left-[10%] w-[6px] h-[6px] rounded-full bg-[#FDB12B]/25 pointer-events-none z-0" />

         {/* main content */}
         <div className="relative z-10 w-full py-[5vh] px-[3vw]">
            <div
               className="max-w-[90vw] md:max-w-[80vw] lg:max-w-[70vw] mx-auto"
               ref={sectionRef}
            >
               <div className="text-center mb-[2vh]">
                  <span className="text-[#FDB12B] text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] font-medium font-geist-mono tracking-widest uppercase">
                     About Us
                  </span>
               </div>

               <h2 className="text-[6vw] md:text-[4vw] lg:text-[3vw] font-bold text-center text-[#1a1a1a] mb-[3vh]">
                  We&apos;re snack lovers, just like you!
               </h2>

               <div className="flex mx-[3vw] md:mx-0">
                  <p className="text-[#1a1a1a]/50 max-w-[90vw] md:max-w-[70vw] lg:max-w-[60vw] mx-auto mb-[5vh] text-justify text-[3vw] md:text-[1.8vw] lg:text-[1.2vw] leading-relaxed">
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
                           <span className="text-[8vw] md:text-[5vw] lg:text-[4vw] font-bold text-[#E7000B]">
                              {stat.value}
                              {stat.symbol}
                           </span>
                        </div>

                        <p className="text-[#1a1a1a]/60 mt-[1vh] text-[3vw] md:text-[2vw] lg:text-[1.5vw]">
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
