/* eslint-disable @next/next/no-img-element */
'use client';

// import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

const Routes = [
   {
      label: 'Home',
      href: '/',
   },
   {
      label: 'Why us',
      href: '/tasks',
   },
   {
      label: 'about us',
      href: '/settings',
   },
   {
      label: 'contact us',
      href: '/members',
   },
];

export default function SmartVendingLandingPage() {
   const [hoveredButton, setHoveredButton] = useState(null);

   return (
      <section className="hero-section relative w-full h-screen overflow-hidden">
         {/* Background gradient with wave pattern */}
         <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-red-400 z-0">
            <div className="absolute inset-0 opacity-20">
               {/* SVG wave pattern overlay */}
               <svg
                  width="100%"
                  height="100%"
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <defs>
                     <pattern
                        id="wave"
                        x="0"
                        y="0"
                        width="200"
                        height="200"
                        patternUnits="userSpaceOnUse"
                     >
                        <path
                           d="M0,100 C40,70 60,130 100,100 C140,70 160,130 200,100 L200,200 L0,200 Z"
                           fill="red"
                        />
                        <path
                           d="M0,50 C40,20 60,80 100,50 C140,20 160,80 200,50 L200,0 L0,0 Z"
                           fill="red"
                        />
                     </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#wave)" />
               </svg>
            </div>
         </div>

         {/* Content container */}
         <div className="relative z-10 w-full h-full px-8 md:px-16 py-6">
            {/* Navigation */}
            <nav className="flex items-center justify-between mb-12">
               {/* Logo */}
               <div className="text-yellow-300 text-3xl font-bold w-20">
                  <img src="/logos/snackit.png" alt="logo" />
               </div>

               {/* Navigation links */}
               <div className="bg-white bg-opacity-20 rounded-full px-6 py-3">
                  <ul className="flex space-x-8">
                     {Routes.map((el, idx) => (
                        <li
                           key={idx + 1}
                           className="text-black hover:text-blue-600 cursor-pointer"
                        >
                           {el.label}
                        </li>
                     ))}
                  </ul>
               </div>
            </nav>

            {/* Main content */}
            <div className="flex flex-col md:flex-row font-inter justify-between mt-8">
               {/* Left side - text content */}
               <div className="w-full md:w-1/2 mb-10 md:mb-0">
                  <h1 className="text-white text-6xl md:text-7xl font-bold leading-tight mb-4">
                     Snack Smarter
                     <br />
                     Work better
                  </h1>
                  <p className="text-white text-xl mb-8">
                     Redefining Convenience Through Smart
                     <br />
                     Vending Machines
                  </p>
                  <button
                     className="bg-white rounded-full px-6 py-3 flex items-center transition-all"
                     // onMouseEnter={() => setHoveredButton('main')}
                     onMouseLeave={() => setHoveredButton(null)}
                  >
                     <span className="font-medium mr-2">Know more</span>
                     <div
                        className={`bg-black rounded-full p-1 transition-all ${
                           hoveredButton === 'main'
                              ? 'transform translate-x-1'
                              : ''
                        }`}
                     >
                        <svg
                           width="20"
                           height="20"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="white"
                           strokeWidth="2"
                        >
                           <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                     </div>
                  </button>
               </div>

               {/* Right side - images */}
               <div className="w-full md:w-1/2 relative">
                  <div className="relative w-[500] max-w-md mx-auto">
                     {/* Main vending machine image */}
                     <div className="relative rounded-3xl overflow-hidden ">
                        <img
                           src="/hero/img5.png"
                           alt="Smart vending machine with snacks"
                           className="w-[500] h-[600] max-w-full"
                           style={{ objectFit: 'contain' }}
                        />
                     </div>

                     {/* Second vending machine image */}
                     <div className="absolute bottom-10 -right-8 w-1/2 h-1/2 rounded-2xl overflow-hidden shadow-xl">
                        <img
                           src="/hero/img2.jpg"
                           alt="Blue vending machine"
                           className="w-full h-full object"
                        />
                     </div>
                  </div>
               </div>
            </div>

            {/* Footer */}
            <div className="absolute bottom-6 w-full left-0 px-8 md:px-16 flex justify-between items-center">
               {/* Feedback button */}
               <button className="flex items-center text-white">
                  <div className="bg-white bg-opacity-20 p-2 rounded-full mr-2">
                     {/* <MessageCircle size={24} color="white" /> */}
                  </div>
                  <span>Feedback</span>
               </button>

               {/* Contact buttons */}
               <div className="flex space-x-4">
                  <button className="bg-white rounded-full px-4 py-2 flex items-center">
                     <span className="font-medium mr-2">Whatsapp</span>
                     <div className="bg-green-500 rounded-full p-1">
                        <svg
                           width="20"
                           height="20"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="white"
                           strokeWidth="2"
                        >
                           <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                        </svg>
                     </div>
                  </button>
                  <button className="bg-white rounded-full px-4 py-2 flex items-center">
                     <span className="font-medium mr-2">Email</span>
                     <div className="bg-blue-500 rounded-full p-1">
                        <svg
                           width="20"
                           height="20"
                           viewBox="0 0 24 24"
                           fill="none"
                           stroke="white"
                           strokeWidth="2"
                        >
                           <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                           <polyline points="22,6 12,13 2,6" />
                        </svg>
                     </div>
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
}
