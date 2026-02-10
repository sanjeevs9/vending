/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

interface PolicySection {
   title: string;
   content: string | string[];
}

interface PolicyLayoutProps {
   title: string;
   subtitle: string;
   lastUpdated: string;
   sections: PolicySection[];
}

export default function PolicyLayout({
   title,
   subtitle,
   lastUpdated,
   sections
}: PolicyLayoutProps) {
   return (
      <div className="min-h-screen bg-[#f5f5f5] overflow-hidden">
         {/* Header */}
         <header className="relative w-full bg-[#f5f5f5]">
            {/* Golden organic shape — background */}
            <svg
               className="absolute top-[-20%] right-[-10%] w-[50%] h-[200%] pointer-events-none z-0"
               viewBox="0 0 600 700"
               xmlns="http://www.w3.org/2000/svg"
            >
               <path
                  d="M520,50 C600,150 580,300 540,420 C500,540 420,650 300,680 C180,710 80,640 40,500 C0,360 30,200 120,100 C210,0 380,-30 520,50 Z"
                  fill="#FDB12B"
                  opacity="0.08"
               />
            </svg>

            <nav className="relative z-10 flex items-center justify-between px-[4vw] md:px-[6vw] py-[3vh]">
               <Link href="/" className="w-[12vw] lg:w-[6vw]">
                  <img
                     src="/logos/snackit.png"
                     alt="Snackit logo"
                     className="w-full h-auto"
                  />
               </Link>
               <Link
                  href="/"
                  className="text-[#2d2d2d]/60 hover:text-[#E7000B] text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] transition-colors duration-300"
               >
                  Back to Home
               </Link>
            </nav>

            {/* Title area */}
            <div className="relative z-10 px-[4vw] md:px-[6vw] pt-[4vh] pb-[6vh]">
               <p className="text-[#FDB12B] text-[2.5vw] md:text-[1.3vw] lg:text-[0.9vw] font-medium tracking-widest uppercase mb-[2vh]">
                  {subtitle}
               </p>
               <h1 className="text-[#1a1a1a] text-[7vw] md:text-[5vw] lg:text-[3.5vw] font-bold leading-tight">
                  {title}
               </h1>
               <p className="text-[#1a1a1a]/30 text-[2.5vw] md:text-[1.3vw] lg:text-[0.9vw] mt-[2vh]">
                  Last updated: {lastUpdated}
               </p>
            </div>

            {/* Divider */}
            <div className="mx-[4vw] md:mx-[6vw] h-[1px] bg-gradient-to-r from-[#FDB12B]/40 via-[#E7000B]/20 to-transparent" />
         </header>

         {/* Content */}
         <main className="relative px-[4vw] md:px-[6vw] py-[6vh]">
            {/* Small decorative accents */}
            <div className="absolute top-[10%] right-[8%] w-[3vw] h-[3vw] rounded-full bg-[#FDB12B]/8 pointer-events-none" />
            <div className="absolute bottom-[15%] left-[3%] w-[5px] h-[5px] rounded-full bg-[#FDB12B]/20 pointer-events-none" />

            <div className="max-w-[90vw] md:max-w-[75vw] lg:max-w-[60vw]">
               {sections.map((section, idx) => (
                  <div key={idx + 1} className="mb-[5vh]">
                     <h2 className="text-[#1a1a1a] text-[4vw] md:text-[2.5vw] lg:text-[1.6vw] font-bold mb-[2vh]">
                        {section.title}
                     </h2>
                     {Array.isArray(section.content) ? (
                        <ul className="space-y-[1.5vh]">
                           {section.content.map((item, i) => (
                              <li
                                 key={i + 1}
                                 className="text-[#1a1a1a]/55 text-[3vw] md:text-[1.6vw] lg:text-[1.1vw] leading-relaxed flex gap-[1vw]"
                              >
                                 <span className="text-[#E7000B] mt-[0.3vh] flex-shrink-0">
                                    &bull;
                                 </span>
                                 {item}
                              </li>
                           ))}
                        </ul>
                     ) : (
                        <p className="text-[#1a1a1a]/55 text-[3vw] md:text-[1.6vw] lg:text-[1.1vw] leading-relaxed">
                           {section.content}
                        </p>
                     )}
                  </div>
               ))}
            </div>
         </main>

         {/* Golden wave footer accent */}
         <svg
            className="w-full pointer-events-none"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
            style={{ height: '8vh' }}
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               d="M0,80 C240,40 480,100 720,60 C960,20 1200,80 1440,50 L1440,120 L0,120 Z"
               fill="#FDB12B"
               opacity="0.15"
            />
         </svg>

         {/* Footer */}
         <footer className="bg-[#f5f5f5] px-[4vw] md:px-[6vw] py-[3vh] flex flex-col md:flex-row justify-between items-center border-t border-gray-200/50">
            <p className="text-gray-400 text-[2.5vw] md:text-[1.3vw] lg:text-[0.9vw] mb-[1vh] md:mb-0">
               © {new Date().getFullYear()} SNACKIT. All rights reserved.
            </p>
            <div className="flex gap-[3vw] md:gap-[2vw]">
               <Link
                  href="/terms"
                  className="text-gray-400 hover:text-[#E7000B] text-[2.5vw] md:text-[1.3vw] lg:text-[0.9vw] transition-colors duration-300"
               >
                  Terms
               </Link>
               <Link
                  href="/privacy"
                  className="text-gray-400 hover:text-[#E7000B] text-[2.5vw] md:text-[1.3vw] lg:text-[0.9vw] transition-colors duration-300"
               >
                  Privacy
               </Link>
               <Link
                  href="/refund"
                  className="text-gray-400 hover:text-[#E7000B] text-[2.5vw] md:text-[1.3vw] lg:text-[0.9vw] transition-colors duration-300"
               >
                  Refund
               </Link>
            </div>
         </footer>
      </div>
   );
}
