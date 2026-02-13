/* eslint-disable @next/next/no-img-element */
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const Routes = [
   { label: 'Home', href: '/' },
   { label: 'Vending Machines on Rent', href: '/need-a-vending' },
   { label: 'Sell on snackIt', href: '/' },
   { label: 'Promote with snackIt', href: '/' },
   { label: 'About us', href: '/about' },
];

export default function Navbar() {
   const [showFixed, setShowFixed] = useState(false);
   const [lastScrollY, setLastScrollY] = useState(0);

   useEffect(() => {
      const handleScroll = () => {
         const currentY = window.scrollY;
         if (currentY < 100) {
            setShowFixed(false);
         } else if (currentY < lastScrollY) {
            setShowFixed(true);
         } else {
            setShowFixed(false);
         }
         setLastScrollY(currentY);
      };

      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
   }, [lastScrollY]);

   const navContent = (
      <div className="max-w-[1700px] mx-auto px-[3vw] md:px-[4vw] xl:px-[56px] flex items-center justify-between h-[60px] md:h-[70px] xl:h-[80px]">
         {/* Logo */}
         <Link
            href="/"
            className="w-[36px] md:w-[10vw] lg:w-[5vw] xl:w-[70px] flex-shrink-0"
         >
            <img
               src="/logos/snackit.png"
               alt="Snackit logo"
               className="w-full h-auto"
            />
         </Link>

         {/* Navigation links */}
         <ul className="hidden md:flex items-center gap-[2.5vw] xl:gap-[32px]">
            {Routes.map((el, idx) => (
               <li
                  key={idx + 1}
                  className="text-[#1a1a1a]/70 hover:text-[#E7000B] cursor-pointer text-[1.5vw] lg:text-[1.1vw] xl:text-[15px] font-medium transition-colors duration-300"
               >
                  <Link href={el.href}>{el.label}</Link>
               </li>
            ))}
         </ul>

         {/* Phone number */}
         <a
            href="tel:+919980220000"
            className="hidden md:flex items-center gap-[6px] bg-[#E7000B] text-white rounded-full px-[1.5vw] xl:px-[20px] py-[6px] md:py-[8px] text-[1.3vw] lg:text-[0.9vw] xl:text-[13px] font-medium hover:bg-[#c5000a] transition-all duration-300 hover:shadow-[0_4px_16px_rgba(231,0,11,0.3)]"
         >
            <svg
               className="w-[14px] h-[14px]"
               viewBox="0 0 24 24"
               fill="none"
               stroke="currentColor"
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
            >
               <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
            </svg>
            +91 99802 20000
         </a>
      </div>
   );

   return (
      <>
         {/* Static navbar — scrolls with page */}
         <nav className="w-full z-[100]">{navContent}</nav>

         {/* Fixed navbar — appears on scroll up with bg */}
         <nav
            className={`fixed top-0 left-0 w-full z-[100] bg-white/80 backdrop-blur-xl transition-transform duration-300 ${
               showFixed ? 'translate-y-0' : '-translate-y-full'
            }`}
         >
            {navContent}
         </nav>
      </>
   );
}
