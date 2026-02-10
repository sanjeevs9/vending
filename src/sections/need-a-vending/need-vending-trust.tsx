'use client';

import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const useCountUp = (end: number, isVisible: boolean, duration = 2000) => {
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

export default function NeedVendingTrust() {
   const sectionRef = useRef<HTMLDivElement>(null);
   const contentRef = useRef<HTMLDivElement>(null);
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      const observer = new IntersectionObserver(
         ([entry]) => {
            if (entry.isIntersecting) {
               setIsVisible(true);
               observer.unobserve(entry.target);
            }
         },
         { threshold: 0.2 }
      );

      const currentSection = sectionRef.current;
      if (currentSection) observer.observe(currentSection);
      return () => {
         if (currentSection) observer.unobserve(currentSection);
      };
   }, []);

   useGSAP(() => {
      if (!contentRef.current) return;
      gsap.from(contentRef.current.children, {
         y: 50,
         opacity: 0,
         duration: 0.8,
         stagger: 0.15,
         ease: 'power2.out',
         scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%'
         }
      });
   }, []);

   const clients = useCountUp(60, isVisible);
   const transactions = useCountUp(4000, isVisible);
   const years = useCountUp(15, isVisible);
   const cities = useCountUp(5, isVisible);

   const stats = [
      { value: clients, suffix: '+', label: 'Corporate Clients' },
      { value: transactions, suffix: '+', label: 'Daily Transactions' },
      { value: years, suffix: '+', label: 'Years of Experience' },
      { value: cities, suffix: '+', label: 'Cities Served' }
   ];

   return (
      <section
         ref={sectionRef}
         className="relative w-full py-[10vh] overflow-hidden bg-[#f5f5f5]"
      >
         {/* Gold organic shape */}
         <svg
            className="absolute top-[-15%] right-[-8%] w-[40%] h-[130%] pointer-events-none z-0"
            viewBox="0 0 400 500"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               d="M100,460 C20,400 -10,260 30,150 C70,40 180,0 280,50 C380,100 400,240 360,350 C320,460 200,520 100,460 Z"
               fill="#FDB12B"
               opacity="0.08"
            />
         </svg>

         <div
            ref={contentRef}
            className="relative z-10 max-w-[1400px] mx-auto px-[4vw] md:px-[6vw] xl:px-[56px]"
         >
            <div className="text-center mb-[6vh]">
               <span className="text-[#FDB12B] text-[12px] md:text-[1.5vw] lg:text-[1vw] xl:text-[14px] font-medium tracking-widest uppercase">
                  Social Proof
               </span>
               <h2 className="text-[26px] md:text-[5vw] lg:text-[3.5vw] xl:text-[44px] font-bold text-[#1a1a1a] mt-[1vh] mb-[2vh]">
                  Chosen by <span className="text-[#E7000B]">Leading Institutions</span>
               </h2>
               <p className="text-[14px] md:text-[1.8vw] lg:text-[1.2vw] xl:text-[16px] text-[#1a1a1a]/50 max-w-[70vw] xl:max-w-[600px] mx-auto">
                  Trusted across workplaces, campuses, and care facilities. A
                  dependable partner for long-term vending solutions that just work.
               </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-[16px] md:gap-[3vw] mb-[6vh]">
               {stats.map((stat, idx) => (
                  <div
                     key={idx + 1}
                     className="bg-white border border-[#FDB12B]/15 rounded-2xl p-[16px] md:p-[3vh] text-center"
                  >
                     <span className="text-[#E7000B] text-[28px] md:text-[4vw] lg:text-[3vw] xl:text-[40px] font-bold block">
                        {stat.value.toLocaleString()}
                        {stat.suffix}
                     </span>
                     <span className="text-[#1a1a1a]/50 text-[11px] md:text-[1.3vw] lg:text-[1vw] xl:text-[14px] mt-[1vh] block">
                        {stat.label}
                     </span>
                  </div>
               ))}
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap justify-center gap-[12px] md:gap-[2vw]">
               {[
                  'Corporate Offices',
                  'Co-working Spaces',
                  'Tech Parks',
                  'Hospitals',
                  'Universities',
                  'Gyms & Fitness Centers'
               ].map((place, idx) => (
                  <span
                     key={idx + 1}
                     className="bg-white border border-[#1a1a1a]/10 rounded-full px-[14px] md:px-[2vw] xl:px-[20px] py-[6px] md:py-[1vh] xl:py-[8px] text-[11px] md:text-[1.3vw] lg:text-[0.9vw] xl:text-[13px] text-[#1a1a1a]/60"
                  >
                     {place}
                  </span>
               ))}
            </div>
         </div>
      </section>
   );
}
