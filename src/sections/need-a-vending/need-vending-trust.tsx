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
   const statsRef = useRef<HTMLDivElement>(null);
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
      if (!statsRef.current) return;
      gsap.from(statsRef.current.children, {
         y: 30,
         opacity: 0,
         duration: 0.6,
         stagger: 0.12,
         ease: 'power2.out',
         scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%'
         }
      });
   }, []);

   const years = useCountUp(10, isVisible);
   const clients = useCountUp(600, isVisible);
   const cities = useCountUp(15, isVisible);

   const stats = [
      { value: years, suffix: '+', label: 'Years in Business' },
      { value: clients, suffix: '+', label: 'Happy Clients' },
      { value: cities, suffix: '+', label: 'Cities Served' }
   ];

   return (
      <section
         ref={sectionRef}
         className="relative w-full py-[6vh] md:py-[8vh] overflow-hidden"
      >
         {/* Grey arc background */}
         <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <svg
               className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[160%] md:w-[130%]"
               viewBox="0 0 1600 500"
               xmlns="http://www.w3.org/2000/svg"
               preserveAspectRatio="none"
               style={{ height: '95%' }}
            >
               <ellipse cx="800" cy="500" rx="850" ry="420" fill="#f4f4f4" />
            </svg>
         </div>

         <div className="relative z-10 max-w-[1100px] mx-auto px-[4vw] md:px-[5vw] xl:px-[48px]">
            {/* Heading */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-[2vh] md:gap-[4vw] mb-[5vh] md:mb-[6vh]">
               <h2 className="text-[24px] md:text-[3.5vw] lg:text-[2.8vw] xl:text-[36px] font-bold text-[#1a1a1a] leading-tight md:max-w-[50%]">
                  Trusted by leading
                  <br />
                  <span className="text-primary">institutions across India</span>
               </h2>
               <p className="text-[13px] md:text-[1.5vw] lg:text-[1.1vw] xl:text-[15px] text-[#1a1a1a]/50 md:max-w-[40%] md:text-right leading-relaxed">
                  From corporate offices to university campuses — we deliver
                  dependable vending solutions that just work, every single day.
               </p>
            </div>

            <div
               ref={statsRef}
               className="grid grid-cols-3 gap-[1px] bg-[#1a1a1a]/8 rounded-2xl overflow-hidden"
            >
               {stats.map((stat, idx) => (
                  <div
                     key={idx + 1}
                     className="bg-white py-[4vh] md:py-[5vh] px-[3vw] text-center"
                  >
                     <span className="text-[28px] md:text-[3.5vw] lg:text-[2.5vw] xl:text-[36px] font-bold text-[#1a1a1a] block leading-none">
                        {stat.value.toLocaleString()}
                        <span className="text-primary">{stat.suffix}</span>
                     </span>
                     <span className="text-[11px] md:text-[1.2vw] lg:text-[0.9vw] xl:text-[13px] text-[#1a1a1a]/40 mt-[8px] block uppercase tracking-wider font-medium">
                        {stat.label}
                     </span>
                  </div>
               ))}
            </div>

            {/* Industry badges */}
            <div className="flex flex-wrap justify-center gap-[10px] md:gap-[14px] mt-[5vh] md:mt-[6vh]">
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
                     className="bg-[#fafafa] rounded-full px-[16px] md:px-[20px] xl:px-[24px] py-[8px] md:py-[10px] xl:py-[10px] text-[11px] md:text-[13px] xl:text-[14px] text-[#1a1a1a]/60 font-medium"
                  >
                     {place}
                  </span>
               ))}
            </div>
         </div>
      </section>
   );
}
