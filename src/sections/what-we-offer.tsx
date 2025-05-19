/* eslint-disable @next/next/no-img-element */
'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Content = [
   {
      image: '/offer/img1.png',
      title: 'Zero Capital Investment.',
      dimension: 'h-[25vh] w-[28vh]'
   },
   {
      image: '/offer/img2.png',
      title: 'Complete Convenience',
      dimension: 'h-[25vh] w-[28vh]'
   },
   {
      image: '/offer/img3.png',
      title: 'Smart Vending Machine',
      dimension: 'h-[25vh] w-[30vh]'
   },
   {
      image: '/offer/img4.png',
      title: 'Curated Snack Selection',
      dimension: 'h-[25vh] w-[28vh]'
   },
   {
      image: '/offer/img5.png',
      title: 'Uncompromised Quality',
      dimension: 'h-[28vh] w-[28vh]'
   }
];

export default function WhatWeOffer() {
   const headingRef = useRef<HTMLHeadingElement>(null);
   const sectionRef = useRef<HTMLDivElement>(null);

   const imageRef1 = useRef<HTMLLIElement>(null);
   const imageRef2 = useRef<HTMLLIElement>(null);
   const imageRef3 = useRef<HTMLLIElement>(null);
   const imageRef4 = useRef<HTMLLIElement>(null);
   const imageRef5 = useRef<HTMLLIElement>(null);

   useGSAP(() => {
      if (
         !headingRef.current ||
         !sectionRef.current ||
         !imageRef1.current ||
         !imageRef2.current ||
         !imageRef3.current ||
         !imageRef4.current ||
         !imageRef5.current
      )
         return;

      // Calculate viewport-relative positions
      const positions = {
         topLeft: { x: '-7vw', y: '-11vh' },
         topRight: { x: '7vw', y: '-11vh' },
         bottomLeft: { x: '-7vw', y: '11vh' },
         bottomRight: { x: '7vw', y: '11vh' },
         leftCenter: { x: '0', y: '0' }
      };

      gsap.set(
         [
            imageRef1.current,
            imageRef2.current,
            imageRef3.current,
            imageRef4.current,
            imageRef5.current
         ],
         {
            xPercent: -50, // Center horizontally
            yPercent: -50 // Center vertically
         }
      );
      // Initial positions (off screen)
      gsap.set(imageRef1.current, { x: '-200vh', y: '-200vh', rotation: 2 });
      gsap.set(imageRef2.current, { x: '200vh', y: '-200vh', rotation: -2 });
      gsap.set(imageRef3.current, { x: '-200vh', y: '200vh', rotation: -2 });
      gsap.set(imageRef4.current, { x: '200vh', y: '200vh', rotation: 2 });
      gsap.set(imageRef5.current, { x: '200vh', rotation: 2 });

      const tl = gsap.timeline({
         scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '+=300%',
            scrub: 1,
            pin: true
         }
      });

      // Scale down heading
      tl.to(headingRef.current, {
         scale: 0.3,
         ease: 'power2.inOut',
         duration: 1
      });

      // Animate cards in sequence
      const cards = [
         { ref: imageRef1.current, pos: positions.topLeft },
         { ref: imageRef2.current, pos: positions.topRight },
         { ref: imageRef3.current, pos: positions.bottomLeft },
         { ref: imageRef4.current, pos: positions.bottomRight },
         { ref: imageRef5.current, pos: positions.leftCenter }
      ];

      cards.forEach((card) => {
         tl.to(
            card.ref,
            {
               x: card.pos.x,
               y: card.pos.y,
               opacity: 1,
               scale: 1,
               duration: 1,
               ease: 'power2.out'
            },
            '<'
         );
      });
   }, []);

   return (
      <section id="offer-section" className="featured-section relative">
         <div ref={sectionRef}>
            {/* center text */}
            <div className="h-screen flex items-center justify-center px-4 overflow-hidden">
               <h1
                  ref={headingRef}
                  className="recognition-heading text-center text-[10vw] md:text-[8vw] lg:text-[10vw] font-semibold text-red-600 tracking-tight leading-tight max-w-[90vw]"
               >
                  What we offer you?
               </h1>
            </div>

            {/* brands logos */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
               <ul className="w-full h-full">
                  {Content.map((item, index) => (
                     <li
                        key={index + 1}
                        ref={
                           [
                              imageRef1,
                              imageRef2,
                              imageRef3,
                              imageRef4,
                              imageRef5
                           ][index]
                        }
                        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30vw] md:w-[20vw] lg:w-[15vw] max-w-sm will-change-transform"
                     >
                        <div
                           className={`relative ${item.dimension} rounded-3xl overflow-hidden`}
                        >
                           <img
                              src={item.image}
                              alt={item.title}
                              className="h-full w-full object-cover"
                           />
                        </div>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </section>
   );
}
