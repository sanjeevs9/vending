'use client';

import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Actions = [
   {
      icon: (
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
      ),
      text: 'Pick',
      iColor: 'bg-green-400',
      tColor: 'text-green-400'
   },
   {
      icon: (
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
      ),
      text: 'Pay',
      iColor: 'bg-blue-400',
      tColor: 'text-blue-400'
   },
   {
      icon: (
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
      ),
      text: 'Collect',
      iColor: 'bg-red-400',
      tColor: 'text-red-400'
   }
];

export default function ActionsVerbs() {
   const actionsRef = useRef<HTMLDivElement>(null);
   const actionRef1 = useRef<HTMLLIElement>(null);
   const actionRef2 = useRef<HTMLLIElement>(null);
   const actionRef3 = useRef<HTMLLIElement>(null);

   useGSAP(() => {
      // Initial states
      gsap.set([actionRef2.current, actionRef3.current], {
         y: '700%',
         opacity: 0
      });

      const tl = gsap.timeline({
         scrollTrigger: {
            trigger: actionsRef.current,
            start: 'top top',
            end: '+=200%',
            scrub: 1.5, // Increased for smoother animation
            pin: true,
            anticipatePin: 1 // Helps prevent jank
         }
      });

      tl.to(
         actionRef2.current,
         {
            y: 0,
            opacity: 1,
            ease: 'power4.out',
            duration: 1
         },
         '+=0.3'
      ); // Small delay after scroll starts

      tl.to(
         actionRef3.current,
         {
            y: 0,
            opacity: 1,
            ease: 'power4.out',
            duration: 1
         },
         '+=0.3'
      ); // Bigger delay between animations
   }, []);

   return (
      <section
         ref={actionsRef}
         className="action-verbs-section flex justify-center min-h-screen py-8 md:py-12 lg:py-[10vh]"
      >
         <ul className="flex flex-col gap-8 md:gap-12 lg:gap-[4vh]">
            {Actions.map((action, index) => (
               <li
                  key={index + 1}
                  ref={[actionRef1, actionRef2, actionRef3][index]}
                  className="transform-gpu" // Better performance for animations
               >
                  <div className="flex items-center justify-center gap-4 md:gap-6 lg:gap-[2vw]">
                     <div
                        className={clsx(
                           action.iColor,
                           `rounded-xl flex items-center justify-center flex-shrink-0 2xl:w-[6rem] 2xl:h-[6rem]`
                        )}
                        style={{
                           width: 'clamp(2.5rem, 4vw + 1rem, 5rem)',
                           height: 'clamp(2.5rem, 4vw + 1rem, 5rem)',
                           padding: 'clamp(0.5rem, 0.8vw + 0.25rem, 1.25rem)'
                        }}
                     >
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           className="w-full h-full text-white"
                           fill="none"
                           viewBox="0 0 24 24"
                           stroke="currentColor"
                        >
                           {action.icon.props.children}
                        </svg>
                     </div>
                     <span
                        className={clsx(
                           action.tColor,
                           `font-bold tracking-tight text-[clamp(2rem,5vw+1rem,5.5rem)] leading-[1.1] 2xl:text-[6rem]`
                        )}
                     >
                        {action.text}
                     </span>
                  </div>
               </li>
            ))}
         </ul>
      </section>
   );
}
