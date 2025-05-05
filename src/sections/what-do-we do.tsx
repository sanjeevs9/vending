/* eslint-disable @next/next/no-img-element */
'use client';

import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useCallback, useRef, useSyncExternalStore } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Content = [
   {
      image: '/section2/img1.png',
      heading: 'Zero Capital Investment/',
      description: 'Enjoy our vending services with no upfront cost.',
   },
   {
      image: '/section2/img2.png',
      heading: 'Curated Snack Selection',
      description:
         'A wide variety of hand-picked, round-the-clock snacking options.',
   },
   {
      image: '/section2/img3.png',
      heading: 'Complete Convenience',
      description: 'We handle everything from logistics to maintenance',
   },
   {
      image: '/section2/img2.png',
      heading: '•	Rapid Refill Support',
      description:
         'Our refill team ensures minimal downtime and quick replenishment',
   },
];

export default function WhatWeOffer() {
   return (
      <div className="relative z-10 grid alternating-text-container ">
         <div className="text-6xl md:text-8xl font-bold text-red-500 text-center p-20">
            <FollowingText />
         </div>

         <div className="alternating-text-view pt-25">
            {Content.map((card, idx) => (
               <div
                  key={idx + 1}
                  className="alternating-section grid place-items-center gap-x-12 md:grid-cols-2"
               >
                  <div
                     className={clsx(
                        idx % 2 === 0 ? 'col-start-1' : 'md:col-start-2',

                        'rounded-lg p-4 backdrop-blur-lg max-md:bg-white/30'
                     )}
                  >
                     <div className="bg-red-50 rounded-xl p-6 flex flex-col items-center md:w-[300px] gap-2">
                        <div className="">
                           <img
                              src={card.image}
                              alt="Mobile phone showing card controls"
                              className="w-60 h-60 rounded-lg object-cover"
                           />
                        </div>
                        <div className="">
                           <h3 className="text-xl font-bold text-red-500 mb-2">
                              {card.heading}
                           </h3>
                           <p className="text-red-400">{card.description}</p>
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </div>
   );
}

function FollowingText() {
   const textRef = useRef(null);
   const isDesktop = useMediaQuery('(min-width: 768px)', true);

   useGSAP(() => {
      if (!textRef.current) return;

      const sections = gsap.utils.toArray('.alternating-section');

      const scrollTl = gsap.timeline({
         scrollTrigger: {
            trigger: '.alternating-text-view',
            endTrigger: '.alternating-text-container',
            pin: true,
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
         },
      });

      sections.forEach((_, index) => {
         if (!textRef.current) return;
         if (index === 0) return;


         scrollTl.to(textRef.current, {

         })
      });
   });

   return (
      <div
         ref={textRef}
         position-x={isDesktop ? 1 : 0}
         rotation-y={isDesktop ? -0.3 : 0}
      >
         What do we offer you?
      </div>
   );
}

export function useMediaQuery(query: string, serverFallback: boolean): boolean {
   const subscribe = useCallback(
      (onStoreChange: () => void) => {
         const mediaQueryList = matchMedia(query);
         mediaQueryList.addEventListener('change', onStoreChange);
         return () => {
            mediaQueryList.removeEventListener('change', onStoreChange);
         };
      },
      [query]
   );

   return useSyncExternalStore(
      subscribe,
      () => matchMedia(query).matches,
      () => serverFallback
   );
}
