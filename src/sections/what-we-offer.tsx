/* eslint-disable @next/next/no-img-element */
'use client';

import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Content = [
   {
      image: '/offer/img1.png',
      heading: 'Zero Capital Investment.',
      description: 'Enjoy our vending services with no upfront cost.'
   },
   {
      image: '/offer/img2.png',
      heading: 'Curated Snack Selection',
      description:
         'A wide variety of hand-picked, round-the-clock snacking options.'
   },
   {
      image: '/offer/img3.png',
      heading: 'Complete Convenience',
      description: 'We handle everything from logistics to maintenance'
   },
   {
      image: '/offer/img4.png',
      heading: 'Rapid Refill Support',
      description:
         'Our refill team ensures minimal downtime and quick replenishment'
   }
];

export default function WhatWeOffer() {
   useGSAP(() => {
      // Pin the text element
      ScrollTrigger.create({
         trigger: '.following-text',
         pin: true,
         pinSpacing: true,
         start: 'top 50%',
         endTrigger: '.offer-section',
         end: 'bottom bottom'
         // markers: true,
      });
   }, []);

   return (
      <section className="offer-section relative z-10 grid alternating-text-container py-30">
         {/* following text  */}
         <div className="alternating-text-view absolute left-0 top-20 h-screen w-full">
            <div className="following-text font-inter">
               <h1 className="text-4xl md:text-7xl font-bold text-red-500 text-center">
                  What do we offer you?
               </h1>
            </div>
         </div>

         {/* flying card */}
         <div className="alternating-text-view pt-25">
            {Content.map((card, idx) => (
               <div
                  key={idx + 1}
                  className="alternating-section grid place-items-center gap-x-12 md:grid-cols-2 "
               >
                  <div
                     className={clsx(
                        idx % 2 === 0 ? 'col-start-1' : 'md:col-start-2',

                        ' p-4'
                     )}
                  >
                     <div
                        className="_media-card color-orange backdrop-blur-lg"
                        style={{
                           translate: 'none',
                           rotate: 'none',
                           scale: 'none',
                           transform: 'translate3d(0px, 10.9311px, 0px)'
                        }}
                     >
                        <span
                           data-aspect-ratio=""
                           // style={{-- -:'1.000' ,}}
                        >
                           <div
                              className="_skeleton media fit-cover pb-3"
                              data-tone="neutral"
                              data-media="image"
                              data-loaded="true"
                           >
                              <img
                                 src={card.image}
                                 alt="card"
                                 sizes="(max-width: 1023px) 70vw, (max-width: 1290px) 40vw, (max-width: 1700px) 40vw, 40vw"
                                 className="rounded-2xl"
                              />
                           </div>
                        </span>
                        <div className="p-2">
                           <p className="subhead-2 -medium xs-body">
                              {card.heading}
                           </p>
                           <p className="body -book opacity-65 xs-body-small">
                              {card.description}
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </section>
   );
}
