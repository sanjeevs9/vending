/* eslint-disable @next/next/no-img-element */
'use client';

import { ContainerTextFlip } from '@/components/ui/container-text-flip';
import { FloatingNav } from '@/components/ui/floating-navbar';
import GradientBackground from './gradient-background';

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
      <GradientBackground>
         <section className="hero-section relative w-full min-h-screen overflow-hidden">
            <div className="relative z-10 w-full h-full px-[2vw] md:px-[4vw] flex flex-col">
               {/* Navigation */}
               <nav className="flex relative items-center justify-center min-h-[10vh]">
                  {/* Logo */}
                  <div className="absolute left-0 w-[12vw] lg:w-[6vw] top-0.5">
                     <img
                        src="/logos/snackit.png"
                        alt="logo"
                        className="w-full h-auto"
                     />
                  </div>

                  {/* Navigation links */}
                  <FloatingNav>
                     <div className="bg-[#f84d35] bg-opacity-20 rounded-full px-[3vw] py-[1.5vh]">
                        <ul className="flex gap-[2vw] md:gap-[3vw]">
                           {Routes.map((el, idx) => (
                              <li
                                 key={idx + 1}
                                 className="text-white hover:text-slate-600 cursor-pointer text-[2.5vw] md:text-[1.8vw] lg:text-[1.2vw] transition-colors duration-300"
                              >
                                 <button onClick={() => handleScroll(el.href)}>
                                    {el.label}
                                 </button>
                              </li>
                           ))}
                        </ul>
                     </div>
                  </FloatingNav>
               </nav>

               {/* Main content */}
               <div className="flex flex-col md:flex-row justify-between  flex-grow min-h-[90vh]">
                  {/* Left side - text content */}
                  <div className="flex flex-col justify-center w-full md:w-1/2 mb-[5vh] md:mb-0">
                     <h1 className="text-white text-[8vw] md:text-[6vw] lg:text-[5vw] font-bold leading-tight mb-[2vh]">
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
                        Work better
                     </h1>
                     <p className="text-white text-[3vw] md:text-[2vw] lg:text-[1.5vw] mb-[3vh]">
                        Redefining Convenience Through Smart
                        <br />
                        Vending Machines
                     </p>
                  </div>

                  {/* Right side - images */}
                  <div className="h-full w-full md:w-1/2 relative flex justify-center items-end min-h-[90vh]">
                     <div className="relative w-full max-w-[80vw] md:max-w-[45vw] h-full flex justify-center">
                        {/* Main vending machine image - INCREASED HEIGHT */}
                        <div className="rounded-3xl overflow-hidden h-[75vh] w-[50vh]">
                           <img
                              src="/hero/img1.png"
                              alt="Smart vending machine with snacks"
                              className="h-full w-full"
                           />
                        </div>
                        {/* Second vending machine image */}
                        <div className="absolute bottom-[-26vh] -right-[2vw] rounded-3xl overflow-hidden h-full w-[50%]">
                           <img
                              src="/hero/img2.png"
                              alt="Smart vending machine with snacks"
                              className="w-full h-[70%] object-contain"
                           />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </GradientBackground>
   );
}
