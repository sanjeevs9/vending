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
   'offer/img2.png',
   'need/img2.png',
   'offer/img4.png'
];

export default function VendingRequirements() {
   const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

   return (
      <section className="need-section relative min-h-[110vh] bg-white overflow-hidden ">
         {/* Page heading */}
         <div className="w-full py-12 px-6">
            <h1 className="text-6xl font-serif font-bold text-red-500 text-right mr-6 md:mr-16">
               what we need?
            </h1>
         </div>

         {/* Requirements list and image container */}
         <div className="flex flex-col md:flex-row pt-[60px]">
            {/* Left side - requirements list */}
            <div className="w-full md:w-1/2">
               {requirements.map((req, index) => (
                  <div key={index} className="relative font-inter">
                     {/* Red border line between items */}
                     <div className="w-full h-px bg-red-600"></div>

                     {/* Requirement item */}
                     <div
                        className="py-6 px-6 hover:bg-red-50 transition-colors duration-300 cursor-pointer"
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
                        <div className="flex items-center gap-4">
                           {/* Title and description */}
                           <div>
                              <div className="flex gap-4 items-center justify-start">
                                 <svg
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                 >
                                    <path
                                       d="M12 0L14 8H22L16 13L18 21L12 16L6 21L8 13L2 8H10L12 0Z"
                                       fill={req.starColor}
                                    />
                                 </svg>

                                 <h3 className="text-3xl font-medium text-red-600">
                                    {req.title}
                                 </h3>
                              </div>

                              {/* Description that appears on hover */}
                              <div
                                 className={`
                                    text-red-500 transition-all duration-300 overflow-hidden text-xs pt-1
                                    ${
                                       hoveredIndex === index
                                          ? 'opacity-100 '
                                          : 'opacity-0'
                                    }
                                 `}
                                 style={{
                                    minHeight: '1.5rem' // Reserve space for one line (adjust as needed)
                                 }}
                              >
                                 <p>{req.description}</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               ))}

               {/* Final red border line */}
               <div className="w-full h-px bg-red-600"></div>
            </div>

            {/* Right side - image (hidden on small devices) */}
            <div className="w-full md:w-1/2 relative hidden md:block">
               <div className="h-full flex items-center justify-center p-8">
                  {/* Images that change on hover */}
                  {images.map((src, index) => (
                     <div
                        key={index + 1}
                        className={`absolute inset-0 transition-opacity duration-500 flex items-center justify-center ${
                           hoveredIndex === index
                              ? 'opacity-100 z-10'
                              : 'opacity-0 z-0'
                        }`}
                     >
                        <div className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden transform rotate-6 shadow-xl">
                           <img
                              src={src}
                              alt={
                                 requirements[index]?.title || 'Vending machine'
                              }
                              className="w-full h-full object-cover"
                           />

                           {/* Show "LOW SERVICE FEES" badge on the second image */}
                           {index === 1 && (
                              <div className="absolute top-8 left-8 bg-white p-3 rounded-lg shadow-md">
                                 <p className="text-blue-800 font-bold text-center">
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

                  {/* Default image (when nothing is hovered) */}
                  <div
                     className={`absolute inset-0 transition-opacity duration-500 flex items-center justify-center ${
                        hoveredIndex === null
                           ? 'opacity-100 z-10'
                           : 'opacity-0 z-0'
                     }`}
                  >
                     <div className="relative w-full max-w-lg aspect-square rounded-3xl overflow-hidden transform rotate-6 shadow-xl">
                        <img
                           src="/need/img3.png"
                           alt="Vending machine with person"
                           className="w-full h-full object-cover"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
