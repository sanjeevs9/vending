import Link from 'next/link';

export default function Footer() {
   return (
      <footer className="w-full min-h-[50vh] bg-white flex flex-col justify-between relative">
         {/* Main logo text */}
         <div className="flex-grow flex items-end justify-center py-[5vh]">
            <h1 className="text-red-600 text-[20vw] md:text-[12vw] lg:text-[20vw] font-bold tracking-tight">
               Snackit
            </h1>
         </div>

         {/* Policy links */}
         <div className="w-full flex justify-center gap-[4vw] md:gap-[3vw] pb-[3vh]">
            <Link
               href="/terms"
               className="text-[2.5vw] md:text-[1.3vw] lg:text-[0.9vw] text-gray-400 hover:text-[#E7000B] transition-colors duration-300"
            >
               Terms &amp; Conditions
            </Link>
            <Link
               href="/privacy"
               className="text-[2.5vw] md:text-[1.3vw] lg:text-[0.9vw] text-gray-400 hover:text-[#E7000B] transition-colors duration-300"
            >
               Privacy Policy
            </Link>
            <Link
               href="/refund"
               className="text-[2.5vw] md:text-[1.3vw] lg:text-[0.9vw] text-gray-400 hover:text-[#E7000B] transition-colors duration-300"
            >
               Refund &amp; Cancellation
            </Link>
         </div>

         {/* Copyright text */}
         <div className="w-full py-[2vh] px-[3vw] flex flex-col md:flex-row justify-between items-center text-gray-400 border-t border-gray-100">
            <p className="text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] mb-[1vh] md:mb-0">
               © {new Date().getFullYear()} SNACKIT. All rights reserved.
            </p>
         </div>
      </footer>
   );
}
