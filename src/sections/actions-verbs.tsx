'use client';

import { useGSAP } from '@gsap/react';
import { gsap, Power4 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ActionsVerbs() {
   const actionsRef = useRef<HTMLDivElement>(null);
   const actionRef1 = useRef<HTMLLIElement>(null);
   const actionRef2 = useRef<HTMLLIElement>(null);
   const actionRef3 = useRef<HTMLLIElement>(null);

   useGSAP(() => {
      const tl = gsap.timeline({
         scrollTrigger: {
            trigger: actionsRef.current,
            start: 'top 20%',
            end: 'bottom bottom',
            scrub: 1,
            pin: true,
            // markers: true,
            pinSpacing: false,
         },
      });

      tl.to(actionRef2.current, {
         y: -480,
         ease: Power4.easeOut,
      });
      tl.to(actionRef3.current, {
         y: -480,
         ease: Power4.easeOut,
      });
   }, []);

   return (
      <section
         ref={actionsRef}
         className="action-verbs-section flex justify-center"
      >
         <ul className="">
            <li
               className="flex-shrink-0 justify-center h-[80vh]"
               ref={actionRef1}
            >
               <div className="flex items-center justify-center  space-x-4">
                  <div className="bg-green-400 p-3 rounded-lg">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth={2}
                           d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                     </svg>
                  </div>
                  <span className="text-green-400 md:text-8xl text-2xl font-bold">
                     Pick
                  </span>
               </div>
            </li>

            <li className="flex-shrink-0 justify-center" ref={actionRef2}>
               <div className="flex items-center justify-center space-x-4">
                  <div className="bg-blue-400 p-3 rounded-lg">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth={2}
                           d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                        />
                     </svg>
                  </div>
                  <span className="text-blue-400 md:text-8xl text-2xl font-bold">
                     Pay
                  </span>
               </div>
            </li>

            <li className="flex-shrink-0 justify-center" ref={actionRef3}>
               <div className="flex items-center justify-center space-x-4">
                  <div className="bg-red-400 p-3 rounded-lg">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                     >
                        <path
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           strokeWidth={2}
                           d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                     </svg>
                  </div>
                  <span className="text-red-400 md:text-8xl text-2xl font-bold">
                     Collect
                  </span>
               </div>
            </li>
         </ul>
      </section>
   );
}
