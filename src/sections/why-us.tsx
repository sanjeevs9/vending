'use client';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';

// Register the ScrollTrigger plugin
if (typeof window !== 'undefined') {
   gsap.registerPlugin(ScrollTrigger);
}

export default function WhyUsSection() {
   const sectionRef = useRef(null);
   const headingRef = useRef(null);
   const leftItemsRef = useRef([]);
   const rightItemsRef = useRef([]);

   // Data for the section
   const leftItems = [
      {
         title: 'Zero capital investment with end-to-end management, including logistics and machine maintenance.'
      },
      {
         title: 'Smart vending machines with full currency denomination support and cutting-edge technology.'
      },
      {
         title: 'Curated snack selections available 24/7, ensuring hygiene, freshness, and quality.'
      },
      {
         title: 'Efficient refill operations for minimal downtime and consistently stocked machines.'
      }
   ];

   const rightItems = [
      {
         title: 'Dedicated office space to host our vending installations seamlessly.'
      },
      {
         title: 'Minimal service charges for round-the-clock access to our machines at your workplace.'
      },
      {
         title: 'Full access to our refill team for timely stock replenishment and smooth operations.'
      },
      {
         title: 'Safe and secure placement to protect machines and ensure uninterrupted service.'
      }
   ];

   useEffect(() => {
      // Skip GSAP initialization during SSR
      if (typeof window === 'undefined') return;

      // Create a context to properly clean up GSAP animations
      const ctx = gsap.context(() => {
         // Initial setup - hide all items
         gsap.set(leftItemsRef.current, { autoAlpha: 0, x: -50 });
         gsap.set(rightItemsRef.current, { autoAlpha: 0, x: 50 });

         // Animate heading
         gsap.fromTo(
            headingRef.current.children,
            { autoAlpha: 0, y: -30 },
            {
               autoAlpha: 1,
               y: 0,
               duration: 1,
               stagger: 0.2,
               ease: 'power3.out'
            }
         );

         // Create scroll animations for each left item
         leftItemsRef.current.forEach((item, index) => {
            gsap.fromTo(
               item,
               { autoAlpha: 0, x: -50 },
               {
                  scrollTrigger: {
                     trigger: item,
                     start: 'top 80%',
                     end: 'bottom 20%',
                     toggleActions: 'play reverse restart reverse',
                     scrub: 0.5
                     // markers: true
                  },
                  autoAlpha: 1,
                  x: 0,
                  duration: 1,
                  ease: 'elastic.out'
               }
            );
         });

         // Create scroll animations for each right item
         rightItemsRef.current.forEach((item, index) => {
            gsap.fromTo(
               item,
               { autoAlpha: 0, x: 50 },
               {
                  scrollTrigger: {
                     trigger: item,
                     start: 'top 80%',
                     end: 'bottom 20%',
                     toggleActions: 'play reverse restart reverse',
                     scrub: 0.5
                     // markers: true
                  },
                  autoAlpha: 1,
                  x: 0,
                  duration: 1,
                  ease: 'elastic.out'
               }
            );
         });
      }, sectionRef);

      // Clean up function
      return () => ctx.revert();
   }, []);

   return (
      <section ref={sectionRef} className="py-16 px-4 overflow-hidden bg-white">
         <div
            ref={headingRef}
            className="max-w-6xl mx-auto mb-16 flex justify-between"
         >
            <h2 className="text-3xl font-medium text-green-500">
               What do we have for you?
            </h2>
            <h2 className="text-3xl font-medium text-green-500">Why us</h2>
            <h2 className="text-3xl font-medium text-green-500">
               What we need in return
            </h2>
         </div>

         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Column */}
            <div className="space-y-12">
               {leftItems.map((item, index) => (
                  <div
                     key={`left-${index + 1}`}
                     ref={(el) => (leftItemsRef.current[index] = el)}
                     className="p-4"
                  >
                     <p className="text-lg text-green-500">{item.title}</p>
                  </div>
               ))}
            </div>

            {/* Right Column */}
            <div className="space-y-12">
               {rightItems.map((item, index) => (
                  <div
                     key={`right-${index + 1}`}
                     ref={(el) => (rightItemsRef.current[index] = el)}
                     className="p-4"
                  >
                     <p className="text-lg text-green-500">{item.title}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>
   );
}
