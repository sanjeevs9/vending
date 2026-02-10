/* eslint-disable @next/next/no-img-element */
'use client';

import { ContainerTextFlip } from '@/components/ui/container-text-flip';
import { FloatingNav } from '@/components/ui/floating-navbar';

const Routes = [
   {
      label: 'Why us',
      href: 'offer-section'
   },
   {
      label: 'about us',
      href: 'about-section'
   },
   {
      label: 'products',
      href: 'products-section'
   },
   {
      label: 'contact us',
      href: 'contact-section'
   }
];

export default function SmartVendingLandingPage() {
   const handleScroll = (sectionId: string) => {
      const section = document.getElementById(sectionId);
      if (section) {
         section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         });
      }
   };

   return (
      <section className="hero-section relative w-full min-h-screen overflow-hidden bg-[#f5f5f5]">
         {/* === ORGANIC SHAPE BEHIND MACHINE === */}
         <svg
            className="absolute top-[2%] right-[-8%] w-[65%] h-[95%] pointer-events-none z-[1]"
            viewBox="0 0 600 700"
            xmlns="http://www.w3.org/2000/svg"
         >
            {/* Main flowing shape — brand gold */}
            <path
               d="M520,50 C600,150 580,300 540,420 C500,540 420,650 300,680 C180,710 80,640 40,500 C0,360 30,200 120,100 C210,0 380,-30 520,50 Z"
               fill="#FDB12B"
               opacity="0.15"
            />
            {/* Inner accent shape */}
            <path
               d="M480,120 C540,190 530,310 490,410 C450,510 370,580 270,590 C170,600 100,540 80,430 C60,320 90,200 170,130 C250,60 380,60 480,120 Z"
               fill="#FDB12B"
               opacity="0.2"
            />
         </svg>

         {/* Small golden circle — top right */}
         <div className="absolute top-[8vh] right-[5vw] w-[4vw] h-[4vw] rounded-full bg-[#FDB12B]/15 pointer-events-none z-[1]" />
         {/* Tiny gold dot — left area */}
         <div className="absolute top-[35%] left-[42%] w-[8px] h-[8px] rounded-full bg-[#FDB12B]/25 pointer-events-none z-[1]" />

         {/* === GOLDEN WAVY PATTERNS AT BOTTOM === */}
         <svg
            className="absolute bottom-0 left-0 w-full pointer-events-none z-[2]"
            viewBox="0 0 1440 300"
            preserveAspectRatio="none"
            style={{ height: '30vh' }}
            xmlns="http://www.w3.org/2000/svg"
         >
            {/* Back wave — deep gold */}
            <path
               d="M0,200 C180,140 360,260 540,180 C720,100 900,240 1080,160 C1260,80 1380,180 1440,150 L1440,300 L0,300 Z"
               fill="#D4960A"
               opacity="0.3"
            />
            {/* Middle wave — brand gold */}
            <path
               d="M0,220 C200,170 400,280 600,200 C800,120 1000,260 1200,190 C1350,140 1440,200 1440,200 L1440,300 L0,300 Z"
               fill="#FDB12B"
               opacity="0.5"
            />
            {/* Front wave — bright gold */}
            <path
               d="M0,250 C160,210 340,290 520,240 C700,190 880,280 1060,230 C1240,180 1380,250 1440,240 L1440,300 L0,300 Z"
               fill="#FDB12B"
               opacity="0.8"
            />
         </svg>

         {/* === MAIN CONTENT === */}
         <div className="relative z-10 w-full h-full px-[3vw] md:px-[4vw] flex flex-col">
            {/* Navigation */}
            <nav className="flex relative items-center justify-center min-h-[10vh]">
               {/* Logo — absolute left */}
               <div className="absolute left-0 w-[12vw] lg:w-[6vw] top-0.5">
                  <img
                     src="/logos/snackit.png"
                     alt="logo"
                     className="w-full h-auto"
                  />
               </div>

               {/* Navigation links — centered */}
               <FloatingNav>
                  <div className="bg-white/60 backdrop-blur-sm border border-[#E7000B]/10 rounded-full px-[3vw] py-[1.5vh]">
                     <ul className="flex gap-[2vw] md:gap-[3vw]">
                        {Routes.map((el, idx) => (
                           <li
                              key={idx + 1}
                              className="text-[#2d2d2d] hover:text-[#E7000B] cursor-pointer text-[2.5vw] md:text-[1.8vw] lg:text-[1.2vw] transition-colors duration-300"
                           >
                              <button
                                 onClick={() => handleScroll(el.href)}
                              >
                                 {el.label}
                              </button>
                           </li>
                        ))}
                     </ul>
                  </div>
               </FloatingNav>

               {/* Phone number — absolute right */}
               <a
                  href="tel:+919980220000"
                  className="absolute right-0 hidden md:flex items-center gap-[0.5vw] text-[#2d2d2d]/60 hover:text-[#E7000B] transition-colors duration-300 text-[1.5vw] lg:text-[1vw]"
               >
                  <svg
                     className="w-[1.2vw] h-[1.2vw] min-w-[14px] min-h-[14px]"
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
            </nav>

            {/* Main content — split layout */}
            <div className="flex flex-col md:flex-row justify-between flex-grow min-h-[90vh]">
               {/* Left side — text content */}
               <div className="flex flex-col justify-center w-full md:w-[45%] mb-[5vh] md:mb-0">
                  <h1 className="text-[#1a1a1a] text-[8vw] md:text-[6vw] lg:text-[4.5vw] font-bold leading-[1.1] mb-[3vh]">
                     Snack{' '}
                     <ContainerTextFlip
                        words={[
                           'Smarter',
                           'Healthier',
                           'Sharper',
                           'Mindfully'
                        ]}
                     />
                     <br />
                     Work Better
                  </h1>

                  <p className="text-[#1a1a1a]/40 text-[3vw] md:text-[2vw] lg:text-[1.3vw] mb-[4vh] tracking-wide">
                     Redefining Convenience Through Smart
                     <br />
                     Vending Machines
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex items-center gap-[2vw]">
                     <button
                        onClick={() => handleScroll('contact-section')}
                        className="bg-[#E7000B] hover:bg-[#c5000a] text-white font-bold rounded-full px-[4vw] md:px-[2.5vw] py-[2vh] md:py-[1.8vh] text-[3vw] md:text-[1.5vw] lg:text-[1vw] transition-all duration-300 hover:shadow-[0_8px_30px_rgba(231,0,11,0.3)]"
                     >
                        Get a Machine
                     </button>
                     <button
                        onClick={() => handleScroll('products-section')}
                        className="border-2 border-[#1a1a1a]/15 hover:border-[#E7000B] text-[#1a1a1a]/60 hover:text-[#E7000B] rounded-full px-[4vw] md:px-[2.5vw] py-[2vh] md:py-[1.8vh] text-[3vw] md:text-[1.5vw] lg:text-[1vw] font-medium transition-all duration-300"
                     >
                        View Products
                     </button>
                  </div>
               </div>

               {/* Right side — vending machine on the blob */}
               <div className="w-full md:w-[55%] relative flex justify-center items-center z-[2] pt-20">
                  {/* Main vending machine */}
                  <div className="relative z-[5] h-[40vh] md:h-[60vh] w-auto">
                     <img
                        src="/hero/vending-machine.png"
                        alt="Smart vending machine with snacks"
                        className="h-full w-auto object-contain drop-shadow-[0_15px_50px_rgba(0,0,0,0.15)]"
                     />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}
