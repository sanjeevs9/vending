/* eslint-disable @next/next/no-img-element */
'use client';

import { cn } from '@/lib/utils';
import React, { useEffect, useState } from 'react';

export const InfiniteMovingCards = ({
   items,
   direction = 'left',
   speed = 'fast',
   pauseOnHover = true,
   className
}: {
   items: {
      title: string;
      tag: string;
      image: string;
   }[];
   direction?: 'left' | 'right';
   speed?: 'fast' | 'normal' | 'slow';
   pauseOnHover?: boolean;
   className?: string;
}) => {
   const containerRef = React.useRef<HTMLDivElement>(null);
   const scrollerRef = React.useRef<HTMLUListElement>(null);

   useEffect(() => {
      addAnimation();
   }, []);

   const [start, setStart] = useState(false);

   function addAnimation() {
      if (containerRef.current && scrollerRef.current) {
         const scrollerContent = Array.from(scrollerRef.current.children);

         scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            if (scrollerRef.current) {
               scrollerRef.current.appendChild(duplicatedItem);
            }
         });

         getDirection();
         getSpeed();
         setStart(true);
      }
   }

   const getDirection = () => {
      if (containerRef.current) {
         if (direction === 'left') {
            containerRef.current.style.setProperty(
               '--animation-direction',
               'forwards'
            );
         } else {
            containerRef.current.style.setProperty(
               '--animation-direction',
               'reverse'
            );
         }
      }
   };

   const getSpeed = () => {
      if (containerRef.current) {
         if (speed === 'fast') {
            containerRef.current.style.setProperty(
               '--animation-duration',
               '20s'
            );
         } else if (speed === 'normal') {
            containerRef.current.style.setProperty(
               '--animation-duration',
               '40s'
            );
         } else {
            containerRef.current.style.setProperty(
               '--animation-duration',
               '80s'
            );
         }
      }
   };

   return (
      <div
         ref={containerRef}
         className={cn(
            'scroller relative z-20 w-[90vw] md:w-[95vw] overflow-hidden',
            className
         )}
      >
         <ul
            ref={scrollerRef}
            className={cn(
               'flex w-max min-w-full shrink-0 flex-nowrap gap-[2vw] py-[2vh]',
               start && 'animate-scroll',
               pauseOnHover && 'hover:[animation-play-state:paused]'
            )}
         >
            {items.map((item, idx) => (
               <li
                  key={idx + 1}
                  className="relative w-[70vw] md:w-[40vw] lg:w-[25vw] max-w-full shrink-0 rounded-2xl overflow-hidden"
               >
                  <div className="aspect-[3/4] w-full relative">
                     <img
                        src={item.image}
                        alt={item.title}
                        className="absolute inset-0 w-full h-full object-cover"
                     />

                     {/* Overlay */}
                     <div className="absolute inset-0 bg-black/40" />

                     {/* Content */}
                     <div className="absolute inset-0 flex flex-col items-center justify-center p-[2vh] text-center">
                        <span className="text-white text-[4vw] md:text-[2.5vw] lg:text-[1.5vw] font-bold mb-[1vh]">
                           {item.title}
                        </span>
                        <span className="text-white text-[3vw] md:text-[2vw] lg:text-[1.2vw]">
                           {item.tag}
                        </span>
                     </div>
                  </div>
               </li>
            ))}
         </ul>
      </div>
   );
};
