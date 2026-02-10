import React from 'react';

interface GradientBackgroundProps {
   children: React.ReactNode;
}

export default function GradientBackground({
   children
}: Readonly<GradientBackgroundProps>) {
   return (
      <div className="relative w-full min-h-screen overflow-hidden bg-[#f5f5f5]">
         {/* Golden organic shape — right */}
         <svg
            className="absolute top-[5%] right-[-10%] w-[55%] h-[90%] pointer-events-none z-0"
            viewBox="0 0 600 700"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               d="M520,50 C600,150 580,300 540,420 C500,540 420,650 300,680 C180,710 80,640 40,500 C0,360 30,200 120,100 C210,0 380,-30 520,50 Z"
               fill="#FDB12B"
               opacity="0.12"
            />
            <path
               d="M480,120 C540,190 530,310 490,410 C450,510 370,580 270,590 C170,600 100,540 80,430 C60,320 90,200 170,130 C250,60 380,60 480,120 Z"
               fill="#FDB12B"
               opacity="0.18"
            />
         </svg>

         {/* Golden organic shape — left */}
         <svg
            className="absolute bottom-[-10%] left-[-8%] w-[40%] h-[60%] pointer-events-none z-0"
            viewBox="0 0 400 500"
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               d="M300,40 C380,100 370,250 320,360 C270,470 160,500 80,440 C0,380 -20,240 30,140 C80,40 200,-20 300,40 Z"
               fill="#FDB12B"
               opacity="0.1"
            />
         </svg>

         {/* Small decorative accents */}
         <div className="absolute top-[12%] right-[8%] w-[3vw] h-[3vw] rounded-full bg-[#FDB12B]/15 pointer-events-none z-0" />
         <div className="absolute bottom-[25%] left-[15%] w-[8px] h-[8px] rounded-full bg-[#FDB12B]/25 pointer-events-none z-0" />

         {/* Golden wavy patterns at bottom */}
         <svg
            className="absolute bottom-0 left-0 w-full pointer-events-none z-[1]"
            viewBox="0 0 1440 200"
            preserveAspectRatio="none"
            style={{ height: '15vh' }}
            xmlns="http://www.w3.org/2000/svg"
         >
            <path
               d="M0,140 C200,100 400,180 600,120 C800,60 1000,160 1200,110 C1350,75 1440,130 1440,130 L1440,200 L0,200 Z"
               fill="#FDB12B"
               opacity="0.3"
            />
            <path
               d="M0,160 C160,130 340,190 520,150 C700,110 880,180 1060,140 C1240,100 1380,160 1440,150 L1440,200 L0,200 Z"
               fill="#FDB12B"
               opacity="0.5"
            />
         </svg>

         {/* Content container */}
         <div className="relative z-10 w-full h-full">{children}</div>
      </div>
   );
}
