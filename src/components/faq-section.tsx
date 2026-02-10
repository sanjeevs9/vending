'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useState } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface FaqItem {
   question: string;
   answer: string;
}

interface FaqSectionProps {
   id: string;
   label?: string;
   heading: React.ReactNode;
   faqs: FaqItem[];
}

export default function FaqSection({
   id,
   label = 'FAQ',
   heading,
   faqs
}: FaqSectionProps) {
   const [openIndex, setOpenIndex] = useState<number | null>(null);
   const sectionRef = useRef<HTMLDivElement>(null);
   const headingRef = useRef<HTMLDivElement>(null);
   const listRef = useRef<HTMLDivElement>(null);

   useGSAP(() => {
      gsap.from(headingRef.current, {
         y: 40,
         opacity: 0,
         duration: 0.8,
         ease: 'power2.out',
         scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%'
         }
      });

      if (listRef.current) {
         gsap.from(listRef.current.children, {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
               trigger: listRef.current,
               start: 'top 85%'
            }
         });
      }
   }, []);

   return (
      <section
         id={id}
         ref={sectionRef}
         className="w-full bg-white py-[10vh]"
      >
         <div className="w-[92%] max-w-[1400px] mx-auto">
            <div ref={headingRef} className="mb-[6vh] w-full md:w-[85%] mx-auto">
               <span className="text-primary text-[12px] md:text-[1.5vw] lg:text-[1vw] xl:text-[14px] font-medium tracking-widest uppercase">
                  {label}
               </span>
               <h2 className="text-[24px] md:text-[5vw] lg:text-[3.5vw] xl:text-[44px] font-bold text-text-secondary mt-[1vh]">
                  {heading}
               </h2>
            </div>

            <div ref={listRef} className="w-full md:w-[85%] mx-auto">
               {faqs.map((faq, index) => (
                  <div key={index + 1}>
                     <div className="w-full h-[1px] bg-primary/25"></div>
                     <div
                        className="py-[2.5vh] px-[12px] md:px-[3vw] cursor-pointer hover:bg-primary/5 transition-colors duration-300"
                        role="button"
                        tabIndex={0}
                        onMouseEnter={() => setOpenIndex(index)}
                        onMouseLeave={() => setOpenIndex(null)}
                        onFocus={() => setOpenIndex(index)}
                        onBlur={() => setOpenIndex(null)}
                        onTouchStart={() => setOpenIndex(index)}
                        onTouchEnd={() => setOpenIndex(null)}
                        onKeyDown={(e) => {
                           if (e.key === 'Enter' || e.key === ' ') {
                              setOpenIndex(index);
                           }
                           if (e.key === 'Escape') {
                              setOpenIndex(null);
                           }
                        }}
                     >
                        <div className="flex items-center justify-between gap-[12px] md:gap-[2vw]">
                           <h3 className="text-[14px] md:text-[2vw] lg:text-[1.5vw] xl:text-[18px] font-medium text-text-secondary">
                              {faq.question}
                           </h3>
                           <svg
                              className="w-[18px] h-[18px] md:w-[2.5vw] md:h-[2.5vw] md:min-w-[22px] md:min-h-[22px] text-primary transition-all duration-300 flex-shrink-0"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                           >
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                              <line
                                 x1="12"
                                 y1="5"
                                 x2="12"
                                 y2="19"
                                 className={`${
                                    openIndex === index
                                       ? 'opacity-0'
                                       : 'opacity-100'
                                 } transition-opacity duration-300`}
                              ></line>
                           </svg>
                        </div>

                        <div
                           className={`overflow-hidden transition-all duration-500 ease-in-out ${
                              openIndex === index
                                 ? 'max-h-[300px] opacity-100 pt-[1.5vh]'
                                 : 'max-h-0 opacity-0'
                           }`}
                        >
                           <p className="text-text-secondary/50 text-[13px] md:text-[1.5vw] lg:text-[1.1vw] xl:text-[15px] leading-relaxed pb-[1vh]">
                              {faq.answer}
                           </p>
                        </div>
                     </div>
                  </div>
               ))}
               <div className="w-full h-[1px] bg-primary/25"></div>
            </div>
         </div>
      </section>
   );
}
