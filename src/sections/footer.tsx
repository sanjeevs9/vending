import Link from 'next/link';

export default function Footer() {
   return (
      <footer className="w-full min-h-[50vh] bg-white flex flex-col justify-between relative">
         {/* Main logo text */}
         <div className="flex-grow flex items-end justify-center py-[5vh]">
            <h1 className="text-red-600 text-[20vw] md:text-[12vw] lg:text-[20vw] font-bold tracking-tight">
               SNACKIT
            </h1>
         </div>

         {/* Copyright text */}
         <div className="w-full py-[2vh] px-[3vw] flex flex-col md:flex-row justify-between items-center text-gray-400">
            <p className="text-[2.5vw] md:text-[1.5vw] lg:text-[1vw] mb-[1vh] md:mb-0">
               © {new Date().getFullYear()} SNACKIT. All rights reserved.
            </p>
            <p className="text-[2.5vw] md:text-[1.5vw] lg:text-[1vw]">
               Created by{' '}
               <Link
                  href="https://twitter.com/aashish_kathait"
                  className="hover:text-red-500 transition-colors duration-300"
               >
                  @aashish_k
               </Link>
            </p>
         </div>
      </footer>
   );
}
