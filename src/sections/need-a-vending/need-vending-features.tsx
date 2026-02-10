'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const features = [
   {
      number: '01',
      title: 'Enhance Workplace Experience',
      subtitle: 'Convenience That Employees Actually Appreciate',
      description:
         'Snacks and drinks available anytime, without queues or interruptions. Our machines operate 24/7, offering a curated selection of snacks, beverages, and healthy options that keep your team fueled and focused throughout the day.',
      highlights: [
         '24/7 availability — no waiting, no downtime',
         'Curated mix of healthy and indulgent options',
         'Cashless payments via UPI, cards & wallets',
         'Boosts employee satisfaction and retention'
      ]
   },
   {
      number: '02',
      title: 'Workplace Vending, Reimagined',
      subtitle: 'Minimal Effort. Maximum Impact.',
      description:
         'A smarter alternative to traditional cafeterias and kiosks. No staff required, no overhead costs, no inventory management headaches. We handle everything — from installation and stocking to maintenance and restocking.',
      highlights: [
         'Zero operational overhead for your team',
         'No staffing or management required',
         'Fully maintained and regularly restocked',
         'Real-time inventory monitoring'
      ]
   },
   {
      number: '03',
      title: 'Designed to Blend In',
      subtitle: 'Premium Machines That Match Your Environment',
      description:
         'Customisable designs that complement modern interiors. Sleek, compact, and engineered for high-traffic spaces. Available in multiple configurations to suit your floor plan, aesthetic, and capacity requirements.',
      highlights: [
         'Compact footprint — fits anywhere',
         'Sleek, modern industrial design',
         'Multiple size configurations available',
         'Branding and wrap customisation options'
      ]
   },
   {
      number: '04',
      title: 'Keep Energy Levels High',
      subtitle: 'Round-the-Clock Access to Snacks & Beverages',
      description:
         'Support productivity with instant, on-demand refreshments. From morning coffee breaks to late-night work sessions, your team always has access to quality snacks and chilled drinks — right where they work.',
      highlights: [
         'Hot and cold beverage options',
         'Snacks, protein bars, and fresh bites',
         'Seasonal and trending product rotations',
         'Dietary-conscious selections available'
      ]
   }
];

export default function NeedVendingFeatures() {
   const sectionRef = useRef<HTMLDivElement>(null);
   const featureRefs = useRef<(HTMLDivElement | null)[]>([]);

   useGSAP(() => {
      featureRefs.current.forEach((ref) => {
         if (!ref) return;
         gsap.from(ref, {
            y: 60,
            opacity: 0,
            duration: 0.9,
            ease: 'power2.out',
            scrollTrigger: {
               trigger: ref,
               start: 'top 85%'
            }
         });
      });
   }, []);

   return (
      <section
         id="features-section"
         ref={sectionRef}
         className="relative w-full bg-white py-[10vh] overflow-hidden"
      >
         {/* Decorative gold shape */}
         <svg
            className="absolute top-[10%] left-[-5%] w-[25%] h-[40%] pointer-events-none z-0 opacity-60"
            viewBox="0 0 400 500"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               d="M300,40 C380,100 370,250 320,360 C270,470 160,500 80,440 C0,380 -20,240 30,140 C80,40 200,-20 300,40 Z"
               fill="#FDB12B"
               opacity="0.08"
            />
         </svg>

         <div className="relative z-10 max-w-[1400px] mx-auto px-[4vw] md:px-[6vw] xl:px-[56px]">
            {/* Section header */}
            <div className="text-center mb-[8vh]">
               <span className="text-[#FDB12B] text-[12px] md:text-[1.5vw] lg:text-[1vw] xl:text-[14px] font-medium tracking-widest uppercase">
                  What You Get
               </span>
               <h2 className="text-[26px] md:text-[5vw] lg:text-[3.5vw] xl:text-[44px] font-bold text-[#1a1a1a] mt-[1vh]">
                  Vending That Works <span className="text-[#E7000B]">For You</span>
               </h2>
            </div>

            {/* Feature blocks */}
            <div className="space-y-[8vh] md:space-y-[12vh]">
               {features.map((feature, idx) => (
                  <div
                     key={idx + 1}
                     ref={(el) => { featureRefs.current[idx] = el; }}
                     className={`flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-[4vw] md:gap-[6vw] items-center`}
                  >
                     {/* Number + content */}
                     <div className="w-full md:w-[55%]">
                        <div className="flex items-start gap-[12px] md:gap-[2vw] mb-[2vh]">
                           <span className="text-[#FDB12B]/20 text-[48px] md:text-[6vw] lg:text-[5vw] xl:text-[64px] font-bold leading-none select-none">
                              {feature.number}
                           </span>
                           <div className="pt-[6px] md:pt-[1vh]">
                              <h3 className="text-[20px] md:text-[3vw] lg:text-[2.2vw] xl:text-[28px] font-bold text-[#1a1a1a] leading-tight">
                                 {feature.title}
                              </h3>
                              <p className="text-[#E7000B] text-[13px] md:text-[1.8vw] lg:text-[1.2vw] xl:text-[16px] font-medium mt-[0.5vh]">
                                 {feature.subtitle}
                              </p>
                           </div>
                        </div>

                        <p className="text-[#1a1a1a]/50 text-[13px] md:text-[1.6vw] lg:text-[1.1vw] xl:text-[15px] leading-relaxed mb-[3vh] ml-[60px] md:ml-0">
                           {feature.description}
                        </p>
                     </div>

                     {/* Highlights card */}
                     <div className="w-full md:w-[45%]">
                        <div className="bg-[#f5f5f5] border border-[#FDB12B]/15 rounded-2xl p-[20px] md:p-[4vh]">
                           <ul className="space-y-[12px] md:space-y-[2vh]">
                              {feature.highlights.map((item, hIdx) => (
                                 <li
                                    key={hIdx + 1}
                                    className="flex items-start gap-[10px] md:gap-[1vw]"
                                 >
                                    <div className="w-[6px] h-[6px] rounded-full bg-[#E7000B] mt-[6px] md:mt-[8px] shrink-0"></div>
                                    <span className="text-[#1a1a1a]/70 text-[13px] md:text-[1.5vw] lg:text-[1.1vw] xl:text-[15px]">
                                       {item}
                                    </span>
                                 </li>
                              ))}
                           </ul>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
