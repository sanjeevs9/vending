'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Image from 'next/image';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Content = [
   {
      image: '/test2/img1.png',
      title: 'Zero Capital Investment.',
      description: 'Enjoy our vending services with no upfront cost.',
      bg: '#30c858'
   },
   {
      image: '/test2/img3.png',
      title: 'Complete Convenience',
      description: 'We handle everything from logistics to maintenance',
      bg: '#fbdcfb'
   },
   {
      image: '/test2/img2.png',
      title: 'Rapid Refill Support',
      description:
         'Our refill team ensures minimal downtime and quick replenishment',
      bg: '#c9a68b'
   },
   {
      image: '/test2/img4.png',
      title: 'Curated Snack Selection',
      description:
         'A wide variety of hand-picked, round-the-clock snacking options.',
      bg: '#509dd4'
   }
];

export default function WhatWeOffer() {
   const headingRef = useRef<HTMLHeadingElement>(null);
   const sectionRef = useRef<HTMLDivElement>(null);

   const imageRef1 = useRef<HTMLLIElement>(null);
   const imageRef2 = useRef<HTMLLIElement>(null);
   const imageRef3 = useRef<HTMLLIElement>(null);
   const imageRef4 = useRef<HTMLLIElement>(null);

   useGSAP(() => {
      if (
         !headingRef.current ||
         !sectionRef.current ||
         !imageRef1.current ||
         !imageRef2.current ||
         !imageRef3.current ||
         !imageRef4.current
      )
         return;

      // Calculate viewport-relative positions
      const positions = {
         topLeft: { x: '-7vw', y: '-11vh' },
         topRight: { x: '7vw', y: '-11vh' },
         bottomLeft: { x: '-7vw', y: '11vh' },
         bottomRight: { x: '7vw', y: '11vh' }
      };
      gsap.set(
         [
            imageRef1.current,
            imageRef2.current,
            imageRef3.current,
            imageRef4.current
         ],
         {
            xPercent: -50, // Center horizontally
            yPercent: -50 // Center vertically
            // opacity: 0,
            // scale: 0.5
         }
      );
      // Initial positions (off screen)
      gsap.set(imageRef1.current, { x: '-200vh', y: '-200vh', rotation: 2 });
      gsap.set(imageRef2.current, { x: '200vh', y: '-200vh', rotation: -2 });
      gsap.set(imageRef3.current, { x: '-200vh', y: '200vh', rotation: -2 });
      gsap.set(imageRef4.current, { x: '200vh', y: '200vh', rotation: 2 });

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
         { ref: imageRef4.current, pos: positions.bottomRight }
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
                           [imageRef1, imageRef2, imageRef3, imageRef4][index]
                        }
                        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[30vw] md:w-[20vw] lg:w-[15vw] max-w-sm will-change-transform"
                     >
                        <div
                           className={`backdrop-blur-lg rounded-xl shadow-lg p-1 bg-[${item.bg}]`}
                        >
                           <div className="relative w-full h-[18vh] md:h-[18vh] lg:h-[17vh] pt-1">
                              <Image
                                 src={item.image}
                                 alt={item.title}
                                 className="object-cover"
                                 fill
                                 sizes="(max-width: 768px) 30vw,
                                        (max-width: 1200px) 20vw,
                                        15vw"
                              />
                           </div>
                           <div className="flex justify-center py-2">
                              <p className="text-sm md:text-md lg:text-[2vh] font-medium text-red-800 text-center">
                                 {item.title}
                              </p>
                           </div>
                        </div>
                     </li>
                  ))}
               </ul>
            </div>
         </div>
      </section>
   );
}
