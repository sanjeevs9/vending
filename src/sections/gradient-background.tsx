import React from 'react';

interface GradientBackgroundProps {
   children: React.ReactNode;
}

export default function GradientBackground({
   children
}: Readonly<GradientBackgroundProps>) {
   return (
      <div className="relative w-full h-screen overflow-hidden">
         {/* Main background gradient */}
         <div className="absolute inset-0 bg-gradient-to-tr from-red-500 via-red-400 to-red-300">
            {/* Decorative circle element */}
            <div
               className="absolute top-1/2 left-[65%] transform -translate-x-[55%] -translate-y-1/2 w-64 h-64 md:w-80 md:h-80 lg:w-[25vw] lg:h-[25vw] rounded-full"
               style={{
                  background:
                     'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  boxShadow: '0 0 40px rgba(255,255,255,0.1)',
                  transform: 'translateZ(0)'
               }}
            >
               {/* Inner circle layers for depth effect */}
               <div className="absolute inset-2 rounded-full border border-white opacity-20"></div>
               <div className="absolute inset-4 rounded-full border border-white opacity-15"></div>
               <div className="absolute inset-6 rounded-full border border-white opacity-10"></div>
               <div className="absolute inset-8 rounded-full border border-white opacity-5"></div>
            </div>
         </div>

         {/* Content container */}
         <div className="relative z-10 w-full h-full">{children}</div>
      </div>
   );
}
