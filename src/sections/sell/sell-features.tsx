'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import vendingImg from "../../../public/vectors/sell/vending.png";
import brandLocationImg from "../../../public/vectors/sell/map.png";
import brandManagementImg from "../../../public/vectors/sell/stats1.png";
import brandStatsImg from "../../../public/vectors/sell/package.png";
import Image from 'next/image';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const features = [
   {
      title: 'Strategic Location Targeting',
      description: 'Place your products in specific cities, tech parks, campuses, hospitals, or premium offices based on your ideal customer profile.',
      image: brandLocationImg
   },
   {
      title: 'Brand Visibility & In-Machine Promotion',
      description: 'Get featured on smart machine screens, category highlights, and promotional placements to drive impulse purchases and brand recall.',
      image: vendingImg
   },
   {
      title: 'Inventory & Logistics',
      description: 'We handle stocking, replenishment, and distribution so you never worry about operations or last-mile delivery.',
      image: brandStatsImg
   },
   {
      title: 'Real-time Monitoring',
      description: 'Track sales, inventory levels, and consumer behavior across all locations with live dashboards and analytics.',
      image: brandManagementImg
   }
];

export default function SellFeatures() {
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
         id="sell-features-section"
         ref={sectionRef}
         className="relative w-full bg-white py-[5vh] md:py-[8vh] overflow-hidden z-0"
      >
         <div className="relative z-0 max-w-[1100px] mx-auto px-[4vw] md:px-[5vw] xl:px-[48px]">
            {/* Section header - Centered */}
            <div className="text-center mb-[4vh] md:mb-[6vh]">
               <h2 className="text-[24px] md:text-[3.5vw] lg:text-[2.8vw] xl:text-[38px] font-bold text-[#1a1a1a]">
                  Retail-as-a-Service for <span className="text-primary">Modern Brands</span>
               </h2>
               <p className="text-[#1a1a1a]/50 text-[13px] md:text-[1.5vw] lg:text-[1.1vw] xl:text-[15px] leading-relaxed mt-[1.5vh] max-w-[500px] mx-auto">
                  Expand across multiple cities through Snackit&apos;s smart vending
                  network — without retail overhead or distribution chains.
               </p>
            </div>

            {/* Features Section - Alternating Left/Right */}
            <div ref={featuresRef} className="space-y-[5vh] md:space-y-[8vh]">
               {features.map((feature, idx) => {
                  const isEven = idx % 2 === 0;
                  const isSmallImage = idx < 2;
                  return (
                     <div key={idx} className={`grid grid-cols-1 lg:grid-cols-2 gap-[4vw] md:gap-[5vw] items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                        {/* Image */}
                        <div className={`relative ${isSmallImage ? 'max-w-[200px] lg:max-w-[200px]' : 'max-w-[400px] lg:max-w-none'} mx-auto ${!isEven ? 'lg:col-start-2' : ''}`}>
                           <Image
                              src={feature.image}
                              alt={feature.title}
                              className="w-full h-auto object-cover z-0"
                           />
                        </div>

                        {/* Text Content */}
                        <div className={`space-y-[1.5vh] ${!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
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
         </div>
      </section>
   );
}
