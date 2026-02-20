'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const features = [
   {
      title: 'Machine Exterior Branding',
      description:
         'Full-body wraps and panel branding on our vending machines placed in high-footfall areas. Your brand becomes a landmark in offices, campuses, and transit zones.',
      icon: (
         <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
            <rect x="12" y="8" width="56" height="64" rx="6" stroke="#E7000B" strokeWidth="2.5" fill="#E7000B" fillOpacity="0.04" />
            <rect x="20" y="16" width="40" height="28" rx="3" stroke="#1a1a1a" strokeWidth="1.5" strokeOpacity="0.2" />
            <rect x="26" y="22" width="28" height="8" rx="2" fill="#E7000B" fillOpacity="0.15" />
            <rect x="26" y="34" width="16" height="4" rx="1" fill="#1a1a1a" fillOpacity="0.1" />
            <circle cx="40" cy="56" r="6" stroke="#E7000B" strokeWidth="2" fill="#E7000B" fillOpacity="0.08" />
            <path d="M38 56l2 2 4-4" stroke="#E7000B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
         </svg>
      )
   },
   {
      title: 'On-Screen Payment Interface Branding',
      description:
         'Capture attention at the moment of purchase. Your brand, offers, and messaging displayed on our interactive touchscreen during every transaction.',
      icon: (
         <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
            <rect x="16" y="12" width="48" height="56" rx="8" stroke="#E7000B" strokeWidth="2.5" fill="#E7000B" fillOpacity="0.04" />
            <rect x="22" y="20" width="36" height="24" rx="3" fill="#E7000B" fillOpacity="0.08" stroke="#E7000B" strokeWidth="1.5" />
            <path d="M30 28h20M30 34h12" stroke="#1a1a1a" strokeWidth="1.5" strokeOpacity="0.25" strokeLinecap="round" />
            <rect x="28" y="50" width="24" height="10" rx="5" fill="#E7000B" fillOpacity="0.15" />
            <path d="M36 55h8" stroke="#E7000B" strokeWidth="1.5" strokeLinecap="round" />
         </svg>
      )
   },
   {
      title: 'Corporate Colour Adaptations',
      description:
         'We adapt machine interfaces, lighting accents, and display themes to match your corporate colour palette — creating a seamless brand experience.',
      icon: (
         <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
            <circle cx="32" cy="32" r="14" fill="#E7000B" fillOpacity="0.12" stroke="#E7000B" strokeWidth="2" />
            <circle cx="48" cy="32" r="14" fill="#FDB12B" fillOpacity="0.12" stroke="#FDB12B" strokeWidth="2" />
            <circle cx="40" cy="46" r="14" fill="#1a1a1a" fillOpacity="0.08" stroke="#1a1a1a" strokeWidth="1.5" strokeOpacity="0.3" />
            <path d="M22 66h36" stroke="#1a1a1a" strokeWidth="1.5" strokeOpacity="0.1" strokeLinecap="round" />
            <path d="M28 70h24" stroke="#1a1a1a" strokeWidth="1.5" strokeOpacity="0.08" strokeLinecap="round" />
         </svg>
      )
   },
   {
      title: 'Campaign-Specific Messaging',
      description:
         'Launch time-bound campaigns tied to festivals, product launches, or seasonal promotions. Update messaging dynamically across all machines in your network.',
      icon: (
         <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
            <rect x="8" y="18" width="64" height="44" rx="6" stroke="#E7000B" strokeWidth="2.5" fill="#E7000B" fillOpacity="0.04" />
            <path d="M20 32h24M20 38h16M20 44h20" stroke="#1a1a1a" strokeWidth="1.5" strokeOpacity="0.2" strokeLinecap="round" />
            <circle cx="56" cy="38" r="10" fill="#E7000B" fillOpacity="0.1" stroke="#E7000B" strokeWidth="1.5" />
            <path d="M53 38l2.5 2.5L60 35" stroke="#E7000B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M24 26h8" stroke="#E7000B" strokeWidth="2" strokeLinecap="round" />
         </svg>
      )
   }
];

export default function PromoteFeatures() {
   const sectionRef = useRef<HTMLDivElement>(null);
   const featuresRef = useRef<HTMLDivElement>(null);

   useGSAP(() => {
      if (featuresRef.current) {
         gsap.from(featuresRef.current.children, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: 'power2.out',
            stagger: 0.2,
            scrollTrigger: {
               trigger: featuresRef.current,
               start: 'top 80%'
            }
         });
      }
   }, []);

   return (
      <section
         id="promote-features-section"
         ref={sectionRef}
         className="relative w-full bg-white py-[5vh] md:py-[8vh] overflow-hidden z-0"
      >
         <div className="relative z-0 max-w-[1100px] mx-auto px-[4vw] md:px-[5vw] xl:px-[48px]">
            {/* Section header - Centered */}
            <div className="text-center mb-[4vh] md:mb-[6vh]">
               <h2 className="text-[24px] md:text-[3.5vw] lg:text-[2.8vw] xl:text-[38px] font-bold text-[#1a1a1a]">
                  Custom Branding <span className="text-primary">Opportunities</span>
               </h2>
               <p className="text-[#1a1a1a]/50 text-[13px] md:text-[1.5vw] lg:text-[1.1vw] xl:text-[15px] leading-relaxed mt-[1.5vh] max-w-[500px] mx-auto">
                  Designed to maximise visibility. Leverage the power of physical
                  presence at the point of purchase.
               </p>
            </div>

            {/* Features Section - Alternating Left/Right */}
            <div ref={featuresRef} className="space-y-[5vh] md:space-y-[8vh]">
               {features.map((feature, idx) => {
                  const isEven = idx % 2 === 0;
                  return (
                     <div
                        key={idx}
                        className={`grid grid-cols-1 lg:grid-cols-2 gap-[4vw] md:gap-[5vw] items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}
                     >
                        {/* Icon */}
                        <div
                           className={`relative max-w-[160px] md:max-w-[200px] lg:max-w-[240px] mx-auto ${!isEven ? 'lg:col-start-2' : ''}`}
                        >
                           <div className="w-full aspect-square rounded-2xl bg-[#f5f5f5] border border-[#1a1a1a]/5 p-[20%] flex items-center justify-center">
                              {feature.icon}
                           </div>
                        </div>

                        {/* Text Content */}
                        <div
                           className={`space-y-[1.5vh] ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                        >
                           <h3 className="text-black text-[20px] md:text-[2.8vw] lg:text-[2.2vw] xl:text-[28px] font-bold leading-tight">
                              {feature.title}
                           </h3>
                           <p className="text-[#1a1a1a]/70 text-[13px] md:text-[1.5vw] lg:text-[1.1vw] xl:text-[15px] leading-relaxed">
                              {feature.description}
                           </p>
                        </div>
                     </div>
                  );
               })}
            </div>

            {/* High-Intent Audience Access callout */}
            <div className="mt-[6vh] md:mt-[10vh] bg-[#f5f5f5] rounded-2xl p-[24px] md:p-[40px] lg:p-[48px]">
               <div className="max-w-[700px] mx-auto text-center">
                  <h3 className="text-[20px] md:text-[2.8vw] lg:text-[2.2vw] xl:text-[28px] font-bold text-[#1a1a1a] mb-[1.5vh]">
                     High-Intent <span className="text-primary">Audience Access</span>
                  </h3>
                  <p className="text-[#1a1a1a]/50 text-[13px] md:text-[1.5vw] lg:text-[1.1vw] xl:text-[15px] leading-relaxed mb-[3vh]">
                     Be present where choices are instant. Engage customers in offices,
                     hospitals, campuses, and transit zones — right at the moment of purchase.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-[12px] md:gap-[16px]">
                     {[
                        { label: 'Corporate Offices', icon: '🏢' },
                        { label: 'Hospitals', icon: '🏥' },
                        { label: 'Campuses', icon: '🎓' },
                        { label: 'Transit Zones', icon: '🚇' }
                     ].map((item, i) => (
                        <div
                           key={i}
                           className="bg-white rounded-xl p-[14px] md:p-[18px] border border-[#1a1a1a]/5 text-center"
                        >
                           <span className="text-[24px] md:text-[28px] block mb-[6px]">
                              {item.icon}
                           </span>
                           <span className="text-[11px] md:text-[1.2vw] lg:text-[0.85vw] xl:text-[12px] font-medium text-[#1a1a1a]/60">
                              {item.label}
                           </span>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
