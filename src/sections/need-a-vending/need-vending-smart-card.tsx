'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useRef } from 'react';
import RFIDCard from '../../../public/vectors/RFID.png';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const steps = [
   {
      number: 1,
      title: 'Issue Snackit Smart Cards to Employees',
      description:
         'Distribute digital or RFID-based smart cards to your team for seamless, cashless vending access.'
   },
   {
      number: 2,
      title: 'Tap & Pay at Any Snackit Machine',
      description:
         'Employees simply tap their Snackit Smart Card at the vending machine — fast, secure, and hassle-free.'
   },
   {
      number: 3,
      title: 'Track Usage in Real-Time',
      description:
         'Monitor spending, usage patterns, and inventory through a real-time dashboard. Full visibility, zero guesswork.'
   }
];

export default function NeedVendingSmartCard() {
   const sectionRef = useRef<HTMLDivElement>(null);
   const stepsRef = useRef<HTMLDivElement>(null);

   useGSAP(() => {
      if (!stepsRef.current) return;
      gsap.from(stepsRef.current.children, {
         x: 40,
         opacity: 0,
         duration: 0.7,
         stagger: 0.2,
         ease: 'power2.out',
         scrollTrigger: {
            trigger: stepsRef.current,
            start: 'top 80%'
         }
      });
   }, []);

   return (
      <section
         ref={sectionRef}
         className="relative w-full py-[6vh] md:py-[8vh] overflow-hidden"
      >
         <div className="max-w-[1200px] mx-auto px-[4vw] md:px-[5vw] xl:px-[48px]">
            {/* Heading */}
            <div className="mb-[5vh] md:mb-[6vh]">
               <h2 className="text-[24px] md:text-[3.5vw] lg:text-[2.8vw] xl:text-[36px] font-bold text-[#1a1a1a]">
                  How Our{' '}
                  <span className="text-primary">Corporate Snack Card</span>{' '}
                  Works
               </h2>
            </div>

            {/* Split layout — image absolute left, steps right */}
            <div className="relative">
               {/* Left — image (stacked on mobile, absolute on desktop) */}
               <div className="w-full flex justify-center mb-[4vh] lg:mb-0 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:left-[-9vw] lg:w-[70%]">
                  <Image
                     src={RFIDCard}
                     alt="Snackit Smart RFID Card with vending machine"
                     className="w-[70%] max-w-[320px] md:w-[60%] md:max-w-none lg:w-full h-auto object-contain"
                  />
               </div>

               {/* Right — steps */}
               <div ref={stepsRef} className="w-full lg:w-[45%] lg:ml-auto space-y-[3vh] md:space-y-[4vh]">
                  {steps.map((step) => (
                     <div key={step.number} className="flex gap-[16px] md:gap-[20px]">
                        {/* Number + vertical line */}
                        <div className="flex flex-col items-center">
                           <div className="w-[32px] h-[32px] md:w-[36px] md:h-[36px] rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                              <span className="text-white text-[13px] md:text-[14px] font-bold">
                                 {step.number}
                              </span>
                           </div>
                           {step.number < steps.length && (
                              <div className="w-[2px] flex-1 bg-primary/20 mt-[8px]" />
                           )}
                        </div>

                        {/* Text content */}
                        <div className="pb-[2vh]">
                           <h3 className="text-[16px] md:text-[1.6vw] lg:text-[1.3vw] xl:text-[18px] font-bold text-[#1a1a1a] mb-[6px]">
                              {step.title}
                           </h3>
                           <p className="text-[13px] md:text-[1.3vw] lg:text-[1vw] xl:text-[14px] text-[#1a1a1a]/50 leading-relaxed">
                              {step.description}
                           </p>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
}
