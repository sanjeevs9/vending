/* eslint-disable @next/next/no-img-element */
'use client';

import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Content = [
   {
      image: '/test/img1.png',
      heading: '4pm snack craving? Snackit is here.',
      description:
         'Bengaluru-based bootstrapped startup Snackit rents out vending machines stacked with healthy snack options and beverages to corporates, and claims to clock up over 4,000 transactions each day.',
      link: 'https://yourstory.com/2017/07/snackit-startup-snack-healthy-munchies-vending-machines'
   },
   {
      image: '/test/img2.png',
      heading: 'Stack up on snacks: snack vending machines at workplaces',
      description:
         '“The name Snackit also means ‘snack for IT’, says Ashish, who then explains what made him start this venture',
      link: 'https://www.thehindu.com/life-and-style/food/a-snack-vending-machine-in-bengaluru/article20443929.ece'
   },
   {
      image: '/test/img3.png',
      heading: 'We are Associated with 45 Plus Corporates and Looking Forward',
      description:
         'Snackit Vending fulfills the most basic requirement of corporate offices - food and beverages for the staff/associates.',
      link: 'https://www.bwdisrupt.com/article/we-are-associated-with-45-plus-corporates-and-looking-forward-for-growth-of-40-by-june-2017-says-ashish-nimodia-founder-snackit-106775'
   },
   {
      image: '/test/img4.png',
      heading: 'How this start-up is changing the snacking system',
      description:
         'After completing his management degree, Ashish got selected to join a corporate banking company through the campus placement and went on to join the company like many others to become successful with hopes of climbing the corporate ladder.',
      link: 'https://www.indianretailer.com/restaurant/article/how-this-start-up-is-changing-the-snacking-system-at-offices.9797'
   }
];

export default function FeaturedBy() {
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
      <section className="offer-section relative z-10 grid py-[20vh] overflow-x-hidden">
         {/* following text  */}
         <div className="alternating-text-view absolute left-0 top-[15vh] h-screen w-full">
            <div className="following-text">
               <h1 className="text-[13vw] md:text-[9vw] lg:text-[7vw] xl:text-[7vw] font-bold text-red-500 text-center leading-tight">
                  Featured by
               </h1>
            </div>
         </div>

         {/* flying card */}
         <div className="alternating-text-view pt-25">
            {Content.map((card, idx) => (
               <Link key={idx + 1} href={card.link}>
                  <div className="alternating-section grid place-items-center gap-x-12 md:grid-cols-2 ">
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
                           <div className="_skeleton media flex items-center justify-center pb-3">
                              <img
                                 src={card.image}
                                 alt="card"
                                 sizes="(max-width: 1023px) 70vw, (max-width: 1290px) 40vw, (max-width: 1700px) 40vw, 40vw"
                                 className="rounded-2xl h-[12vh]"
                              />
                           </div>
                           <div className="p-2">
                              <p className="subhead-2 -medium xs-body">
                                 {card.heading}
                              </p>
                              <p className="body -book opacity-65 xs-body-small">
                                 {card.description
                                    .split(' ')
                                    .slice(0, 10)
                                    .join(' ') + '...'}
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </Link>
            ))}
         </div>
      </section>
   );
}
