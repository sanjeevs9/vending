'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef, useState } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const faqs = [
   {
      question: "How does Snackit's smart vending work?",
      answer:
         "Our machines are equipped with smart inventory tracking, digital payment systems, and remote monitoring. Simply select your snack, tap to pay, and collect — it's that easy."
   },
   {
      question: 'Is there any upfront investment required?',
      answer:
         'Zero. We provide the machine, stock the products, and handle all maintenance. You just provide the space and a power outlet.'
   },
   {
      question: 'What types of products are available?',
      answer:
         'From healthy snack bars and fresh juices to classic favorites and cold beverages — our curated selection covers every craving throughout the day.'
   },
   {
      question: 'How often are machines restocked?',
      answer:
         'Our smart monitoring system tracks inventory levels in real-time. We schedule regular refills based on consumption patterns to ensure your machine is always stocked.'
   },
   {
      question: 'Where can Snackit machines be installed?',
      answer:
         'Corporate offices, co-working spaces, gyms, campuses, hospitals, residential complexes — anywhere people need convenient access to snacks and beverages.'
   },
   {
      question: 'What payment methods are supported?',
      answer:
         'Our machines accept UPI, debit/credit cards, and mobile wallets. Cashless, fast, and secure transactions every time.'
   }
];

export default function AboutFaq() {
   const [openIndex, setOpenIndex] = useState<number | null>(null);
   const sectionRef = useRef<HTMLDivElement>(null);
   const headingRef = useRef<HTMLHeadingElement>(null);
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

   const toggleFaq = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
   };

   return (
      <section
         id="faq-section"
         ref={sectionRef}
         className="w-[92%] mx-auto min-h-screen flex flex-col justify-center py-[10vh]"
      >
         <h2
            ref={headingRef}
            className="text-[7vw] md:text-[5vw] lg:text-[4vw] font-bold text-red-500 mb-[6vh]"
         >
            Frequently Asked
            <br />
            Questions
         </h2>

         <div ref={listRef} className="w-full md:w-[80%]">
            {faqs.map((faq, index) => (
               <div key={index + 1}>
                  <div className="w-full h-[1px] bg-red-600"></div>
                  <div
                     className="py-[2.5vh] px-[3vw] cursor-pointer hover:bg-red-50 transition-colors duration-300"
                     role="button"
                     tabIndex={0}
                     onClick={() => toggleFaq(index)}
                     onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                           e.preventDefault();
                           toggleFaq(index);
                        }
                     }}
                  >
                     <div className="flex items-center justify-between gap-[2vw]">
                        <h3 className="text-[4vw] md:text-[2.5vw] lg:text-[1.8vw] font-medium text-red-600">
                           {faq.question}
                        </h3>
                        <svg
                           className="w-[3vw] h-[3vw] min-w-[24px] min-h-[24px] text-red-600 transition-all duration-300 flex-shrink-0"
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
                        <p className="text-red-500/80 text-[3vw] md:text-[1.5vw] lg:text-[1.2vw] leading-relaxed pb-[1vh]">
                           {faq.answer}
                        </p>
                     </div>
                  </div>
               </div>
            ))}
            <div className="w-full h-[1px] bg-red-600"></div>
         </div>
      </section>
   );
}
