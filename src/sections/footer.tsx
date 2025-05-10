import Link from 'next/link';

export default function Footer() {
   return (
      <footer className="w-full h-[50vh] bg-white flex flex-col justify-between relative">
         {/* Main logo text */}
         <div className="flex-grow flex items-center justify-center">
            <h1 className="text-red-600 text-8xl sm:text-9xl md:text-[10rem] lg:text-[15rem] xl:text-[20rem] font-inter font-bold tracking-tight">
               SNACKIT
            </h1>
         </div>

         {/* Copyright text */}
         <div className="w-full py-4 px-6 flex justify-between items-center text-gray-400 text-xs">
            <p>© {new Date().getFullYear()} SNACKIT. All rights reserved.</p>
            <p>
               Created by{' '}
               <Link
                  href="https://twitter.com/aashish_kathait"
                  className="hover:text-red-500"
               >
                  @aashish_k
               </Link>
            </p>
         </div>
      </footer>
   );
}
