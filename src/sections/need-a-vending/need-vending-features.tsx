'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import customer from "../../../public/vectors/customer1.png";
import payment from "../../../public/vectors/payment.png";
import vending from "../../../public/vectors/vending.png";
import management from "../../../public/vectors/management.png";
import Image from 'next/image';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const features = [
   {
      title: 'Healthier Choices, Everyday Convenience',
      description: 'Snackit brings curated, nutritious snacks directly to your workplace — making better eating effortless, accessible, and enjoyable without compromising on taste.',
      image: vending
   },
   {
      title: 'Smart & Flexible Payments',
      description: 'Seamless transactions with multiple payment options — UPI, cash, coin, RFID cards, mobile app, and FOC integrations. Fast, secure, and built for modern workplaces.',
      image: payment
   },
   {
      title: 'Fully Managed. Zero Operational Burden.',
      description: 'From installation and stocking to maintenance and servicing — we handle everything. No staffing. No overhead. No management hassle.',
      image: management
   },
   {
      title: 'Always On. Always Supported.',
      description: '24/7 availability backed by responsive customer support — ensuring uninterrupted access and dependable service whenever you need it.',
      image: customer
   }
];

export default function NeedVendingFeatures() {
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
         id="features-section"
         ref={sectionRef}
         className="relative w-full bg-white py-[5vh] md:py-[8vh] overflow-hidden z-0"
      >
         <div className="relative z-0 max-w-[1100px] mx-auto px-[4vw] md:px-[5vw] xl:px-[48px]">
            {/* Section header - Centered */}
            <div className="text-center mb-[4vh] md:mb-[6vh]">
               <h2 className="text-[24px] md:text-[3.5vw] lg:text-[2.8vw] xl:text-[38px] font-bold text-[#1a1a1a]">
                  Why Choose <span className="text-primary">Snackit?</span>
               </h2>
            </div>

            {/* Features Section - Alternating Left/Right */}
            <div ref={featuresRef} className="space-y-[5vh] md:space-y-[8vh]">
               {features.map((feature, idx) => {
                  const isEven = idx % 2 === 0;
                  return (
                     <div key={idx} className={`grid grid-cols-1 lg:grid-cols-2 gap-[4vw] md:gap-[5vw] items-center ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                        {/* Image */}
                        <div className={`relative max-w-[400px] mx-auto lg:max-w-none ${!isEven ? 'lg:col-start-2' : ''}`}>
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
