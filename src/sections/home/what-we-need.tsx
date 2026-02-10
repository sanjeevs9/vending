/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';

const requirements = [
   {
      title: 'Just a small space',
      description:
         'Our compact machines require minimal floor space and can fit in tight corners.',
      starColor: '#FF0000'
   },
   {
      title: 'Low service fees',
      description: 'Transparent pricing with low monthly service fees.',
      starColor: '#FF0000'
   },
   {
      title: 'Regular refills',
      description:
         'We monitor inventory levels and provide scheduled refills to keep your machine stocked.',
      starColor: '#FF0000'
   },
   {
      title: 'Safe placement needed',
      description:
         'Machines need to be placed in secure, accessible locations with electrical outlets nearby.',
      starColor: '#FF0000'
   }
];

const images = [
   'need/img1.png',
   'need/img2.png',
   'need/img3.png',
   'need/img4.png'
];

export default function VendingRequirements() {
   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

   return (
      <section className="need-section relative w-[92%] max-w-[1400px] mx-auto md:min-h-[110vh] min-h-[90vh] overflow-hidden">
         {/* Page heading */}
         <div className="w-full md:py-[5vh] px-[3vw]">
            <h1 className="text-[7vw] md:text-[5vw] lg:text-[4vw] xl:text-[48px] font-bold text-primary text-right mr-[3vw] md:mr-[5vw]">
               what we need?
            </h1>
         </div>

         {/* Requirements list and image container */}
         <div className="flex flex-col md:flex-row pt-[8vh]">
            {/* Left side - requirements list */}
            <div className="w-full md:w-1/2">
               {requirements.map((req, index) => (
                  <div key={index + 1} className="relative">
                     <div className="w-full h-[1px] bg-primary"></div>

                     <div
                        className="py-[4vh] px-[3vw] hover:bg-primary/10 transition-colors duration-300 cursor-pointer"
                        role="button"
                        tabIndex={0}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        onFocus={() => setHoveredIndex(index)}
                        onBlur={() => setHoveredIndex(null)}
                        onKeyDown={(e) => {
                           if (e.key === 'Enter' || e.key === ' ') {
                              setHoveredIndex(index);
                           }
                           if (e.key === 'Escape') {
                              setHoveredIndex(null);
                           }
                        }}
                        onTouchStart={() => setHoveredIndex(index)}
                        onTouchEnd={() => setHoveredIndex(null)}
                     >
                        <div className="flex items-center gap-[3.5vw]">
                           <div>
                              <div className="flex gap-[2.5vw] items-center justify-start">
                                 <svg
                                    className="w-[2vw] h-[2vw] min-w-[20px] min-h-[20px] text-primary transition-all duration-300"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                 >
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    {/* This line will only show when not hovered */}
                                    <line
                                       x1="12"
                                       y1="5"
                                       x2="12"
                                       y2="19"
                                       className={`${
                                          hoveredIndex === index
                                             ? 'opacity-0'
                                             : 'opacity-100'
                                       } transition-opacity duration-300`}
                                    ></line>
                                 </svg>
                                 <h3 className="text-[4vw] md:text-[2.5vw] lg:text-[2vw] xl:text-[24px] font-medium text-primary">
                                    {req.title}
                                 </h3>
                              </div>

                              <div
                                 className={`
                                    text-primary transition-all duration-300 overflow-hidden 
                                    text-[13px] md:text-[1.5vw] lg:text-[1.2vw] xl:text-[16px]
                                    ${
                                       hoveredIndex === index
                                          ? 'opacity-100 max-h-[200px] pt-[2.5vh]'
                                          : 'opacity-0 max-h-0 pt-0'
                                    }
                                 `}
                              >
                                 <p>{req.description}</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}
               <div className="w-full h-[1px] bg-primary"></div>
            </div>

            {/* Right side - image */}
            <div className="w-full md:w-1/2 relative hidden md:block">
               <div className="h-full flex items-center justify-center p-[3vh] transform -translate-y-10 md:-translate-y-16">
                  {/* Fixed container to prevent movement */}
                  <div className="relative w-[80%] max-w-[50vw] aspect-square">
                     {images.map((src, index) => (
                        <div
                           key={index + 1}
                           className={`absolute inset-0 transition-opacity duration-700 ease-in-out pointer-events-none
                              ${
                                 hoveredIndex === index
                                    ? 'opacity-100 z-10'
                                    : 'opacity-0 z-0'
                              }`}
                        >
                           <div className="relative w-full h-full rounded-3xl overflow-hidden transform rotate-6 shadow-xl">
                              <img
                                 src={src}
                                 alt={
                                    requirements[index]?.title || 'Vending machine'
                                 }
                                 className="w-full h-full object-cover"
                                 loading="lazy"
                              />

                              {index === 1 && (
                                 <div className="absolute top-[3vh] left-[3vh] bg-white p-[2vh] rounded-lg shadow-md">
                                    <p className="text-blue-800 font-bold text-[2vw] md:text-[1.5vw] lg:text-[1vw] text-center">
                                       LOW
                                       <br />
                                       SERVICE
                                       <br />
                                       FEES
                                    </p>
                                    <div className="mt-2">
                                       <div className="flex items-end justify-center gap-1">
                                          <div className="w-2 h-2 bg-blue-700"></div>
                                          <div className="w-2 h-4 bg-blue-700"></div>
                                          <div className="w-2 h-6 bg-blue-700"></div>
                                          <div className="w-2 h-8 bg-blue-700"></div>
                                       </div>
                                    </div>
                                 </div>
                              )}
                           </div>
                        </div>
                     ))}
                     {/* Default image */}
                     <div
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out pointer-events-none ${
                           hoveredIndex === null
                              ? 'opacity-100 z-10'
                              : 'opacity-0 z-0'
                        }`}
                     >
                        <div className="relative w-full h-full rounded-3xl overflow-hidden transform rotate-6 shadow-xl">
                           <img
                              src="/need/img0.png"
                              alt="Vending machine with person"
                              className="w-full h-full object-cover"
                              loading="lazy"
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
