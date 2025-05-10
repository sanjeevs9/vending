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
            'scroller relative z-20 max-w-7xl overflow-hidden',
            className
         )}
      >
         <ul
            ref={scrollerRef}
            className={cn(
               'flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4',
               start && 'animate-scroll',
               pauseOnHover && 'hover:[animation-play-state:paused]'
            )}
         >
            {items.map((item, idx) => (
               <li
                  className="relative w-[300px] max-w-full shrink-0 rounded-2xl overflow-hidden"
                  key={item.name}
               >
                  <div className="h-[400px] w-full relative">
                     <img
                        src={item.image}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover"
                     />

                     {/* Overlay */}
                     <div className="absolute inset-0 bg-black/40" />

                     {/* Content */}
                     <div className="absolute inset-0 flex flex-col items-center justify-center font-inter">
                        <span className="text-white text-2xl font-bold">
                           {item.title}
                        </span>
                        <span className="text-white text-md ">{item.tag}</span>
                     </div>
                  </div>
               </li>
            ))}
         </ul>
      </div>
   );
};
