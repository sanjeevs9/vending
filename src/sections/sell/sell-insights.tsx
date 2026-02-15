'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const insights = [
   'Sales by geography',
   'Repeat purchase patterns',
   'Consumer preferences',
   'High-performing categories'
];

const models = [
   {
      title: 'Revenue Share',
      desc: 'Earn from every unit sold across the entire Snackit network.'
   },
   {
      title: 'Shelf Subscription',
      desc: 'Reserve dedicated shelf space with predictable monthly costs.'
   },
   {
      title: 'Location Targeting',
      desc: 'Choose specific cities, campuses, or office clusters for placement.'
   },
   {
      title: 'Category Exclusivity',
      desc: 'Lock down an entire product category at select premium locations.'
   }
];

export default function SellInsights() {
   const insightsRef = useRef<HTMLDivElement>(null);
   const insightsListRef = useRef<HTMLDivElement>(null);
   const modelsRef = useRef<HTMLDivElement>(null);
   const modelsGridRef = useRef<HTMLDivElement>(null);

   useGSAP(() => {
      gsap.from(insightsRef.current, {
         y: 40,
         opacity: 0,
         duration: 0.8,
         ease: 'power2.out',
         scrollTrigger: { trigger: insightsRef.current, start: 'top 80%' }
      });

      if (insightsListRef.current) {
         gsap.from(insightsListRef.current.children, {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.06,
            ease: 'power2.out',
            scrollTrigger: { trigger: insightsListRef.current, start: 'top 85%' }
         });
      }

      gsap.from(modelsRef.current, {
         y: 40,
         opacity: 0,
         duration: 0.8,
         ease: 'power2.out',
         scrollTrigger: { trigger: modelsRef.current, start: 'top 80%' }
      });

      if (modelsGridRef.current) {
         gsap.from(modelsGridRef.current.children, {
            y: 25,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: { trigger: modelsGridRef.current, start: 'top 85%' }
         });
      }
   }, []);

   return (
      <section className="w-full py-[8vh] md:py-[10vh] bg-white overflow-hidden">
         <div className="max-w-[1100px] mx-auto px-[4vw] md:px-[5vw] xl:px-[48px]">
            {/* Smart Insights — split layout */}
            <div
               ref={insightsRef}
               className="flex flex-col md:flex-row md:items-start md:justify-between gap-[3vh] md:gap-[5vw] mb-[8vh] md:mb-[10vh]"
            >
               <h2 className="text-[22px] md:text-[3vw] lg:text-[2.4vw] xl:text-[32px] font-bold text-[#1a1a1a] leading-tight md:w-[40%] md:flex-shrink-0">
                  Smart <span className="text-primary">Insights</span>
                  <br />
                  <span className="text-[#1a1a1a]/30 text-[14px] md:text-[1.5vw] lg:text-[1.1vw] xl:text-[16px] font-normal block mt-[8px]">
                     Data that fuels growth
                  </span>
               </h2>
               <div className="md:w-[55%]">
                  <p className="text-[#1a1a1a]/50 text-[13px] md:text-[1.5vw] lg:text-[1.1vw] xl:text-[15px] leading-[1.8] mb-[3vh]">
                     Track performance across locations with real-time dashboards.
                     Optimize your strategy using real consumption data.
                  </p>
                  <div ref={insightsListRef} className="space-y-[8px] md:space-y-[10px]">
                     {insights.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-[10px] py-[4px]">
                           <svg
                              className="w-[15px] h-[15px] text-[#1a1a1a]/20 flex-shrink-0"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                           >
                              <polyline points="20 6 9 17 4 12" />
                           </svg>
                           <span className="text-[#1a1a1a]/65 text-[14px] md:text-[1.5vw] lg:text-[1.1vw] xl:text-[15px]">
                              {item}
                           </span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Flexible Models — heading + grid */}
            <div ref={modelsRef} className="mb-[4vh]">
               <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-[2vh] md:gap-[5vw] mb-[4vh] md:mb-[5vh]">
                  <h2 className="text-[22px] md:text-[3vw] lg:text-[2.4vw] xl:text-[32px] font-bold text-[#1a1a1a] leading-tight">
                     Flexible <span className="text-primary">Models</span>
                  </h2>
                  <p className="text-[#1a1a1a]/40 text-[13px] md:text-[1.3vw] lg:text-[1vw] xl:text-[14px] max-w-[380px] leading-relaxed">
                     Built for emerging and established brands.
                     No traditional retail lock-ins — just scalable expansion.
                  </p>
               </div>
            </div>

            <div
               ref={modelsGridRef}
               className="grid grid-cols-1 md:grid-cols-2 gap-[14px] md:gap-[18px]"
            >
               {models.map((model, idx) => (
                  <div
                     key={idx}
                     className="flex gap-[14px] md:gap-[16px] border border-[#1a1a1a]/6 rounded-xl p-[20px] md:p-[24px] hover:border-[#1a1a1a]/12 transition-colors duration-300"
                  >
                     <span className="text-[#1a1a1a]/10 text-[22px] md:text-[26px] font-bold leading-none select-none">
                        {String(idx + 1).padStart(2, '0')}
                     </span>
                     <div>
                        <h4 className="text-[#1a1a1a] text-[14px] md:text-[1.5vw] lg:text-[1.1vw] xl:text-[15px] font-semibold mb-[4px]">
                           {model.title}
                        </h4>
                        <p className="text-[#1a1a1a]/40 text-[12px] md:text-[1.3vw] lg:text-[0.95vw] xl:text-[13px] leading-relaxed">
                           {model.desc}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
