'use client';

import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

const Brands = [
   {
      name: 'Brand 1',
      image: '/features/img1.png',
   },
   {
      name: 'Brand 2',
      image: '/features/img2.png',
   },
   {
      name: 'Brand 3',
      image: '/features/img3.png',
   },
   {
      name: 'Brand 4',
      image: '/features/img4.png',
   },
   {
      name: 'Brand 5',
      image: '/features/img5.png',
   },
];

export default function FeaturedByAnimation() {
   const headingRef = useRef<HTMLHeadingElement>(null);
   const sectionRef = useRef<HTMLElement>(null);

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

      gsap.set(imageRef1.current, { x: 190, y: -900, z: 0, duration: 1.5 });
      gsap.set(imageRef2.current, { x: 1000, y: -1000, z: 0, duration: 1.5 });
      gsap.set(imageRef3.current, { x: -400, y: -500, z: 0, duration: 1.5 });
      gsap.set(imageRef4.current, { x: 1500, y: -600, z: 0, duration: 1.5 });
      gsap.set(imageRef5.current, { x: 570, y: -400, z: 0, duration: 1.5 });

      const tl = gsap.timeline({
         scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 1,
            pin: true,
         },
      });

      tl.to(headingRef.current, {
         scale: 0.4,
         duration: 1.5,
         ease: 'none',
      });
      tl.to(
         imageRef1.current,
         { x: 300, y: -550, z: 2, duration: 2, rotation: -8 },
         '<',
      );
      tl.to(
         imageRef2.current,
         { x: 590, y: -560, z: 2, duration: 2, rotation: 5 },
         '<',
      );
      tl.to(
         imageRef3.current,
         { x: 300, y: -592, z: 2, duration: 2, rotation: 2 },
         '<',
      );
      tl.to(
         imageRef4.current,
         { x: 575, y: -780, z: 2, duration: 2, rotation: -6 },
         '<',
      );
      tl.to(imageRef5.current, { x: 420, y: -890, z: 2, duration: 2 }, '<');
   }, []);

   return (
      <section
         ref={sectionRef}
         className="recognition-section relative overflow-hidden"
      >
         <div className="h-screen flex items-center justify-center">
            <h1
               ref={headingRef}
               className="recognition-heading text-[15vw] font-inter font-semibold text-red-600 tracking-tight"
            >
               Featured by
            </h1>
         </div>

         <ul className="h-0">
            <li ref={imageRef1}>
               <Link href="https://www.bwdisrupt.com/article/we-are-associated-with-45-plus-corporates-and-looking-forward-for-growth-of-40-by-june-2017-says-ashish-nimodia-founder-snackit-106775">
                  <Image
                     src={Brands[0].image}
                     alt={Brands[0].name}
                     width={300}
                     height={300}
                  />
               </Link>
            </li>
            <li ref={imageRef2}>
               <Link href="https://yourstory.com/2017/07/snackit-startup-snack-healthy-munchies-vending-machines">
                  <Image
                     src={Brands[1].image}
                     alt={Brands[1].name}
                     width={300}
                     height={300}
                  />
               </Link>
            </li>
            <li ref={imageRef3}>
               <Link href="">
                  <Image
                     src={Brands[2].image}
                     alt={Brands[2].name}
                     width={300}
                     height={300}
                  />
               </Link>
            </li>
            <li ref={imageRef4}>
               <Link href="https://www.indianretailer.com/restaurant/article/how-this-start-up-is-changing-the-snacking-system-at-offices.9797">
                  <Image
                     src={Brands[3].image}
                     alt={Brands[3].name}
                     width={300}
                     height={300}
                  />
               </Link>
            </li>
            <li ref={imageRef5}>
               <Link href="https://www.thehindu.com/life-and-style/food/a-snack-vending-machine-in-bengaluru/article20443929.ece">
                  <Image
                     src={Brands[4].image}
                     alt={Brands[4].name}
                     width={300}
                     height={300}
                  />
               </Link>
            </li>
         </ul>

         <div className="h-screen bg-amber-600"> extra</div>
      </section>
   );
}
