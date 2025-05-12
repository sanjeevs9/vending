/* eslint-disable @next/next/no-img-element */

export default function OurMachine() {
   return (
      <section className="w-full min-h-[100vh] flex items-center px-[2vw] py-[2vh] relative">
         <div className="w-full h-full flex flex-col md:flex-row rounded-2xl overflow-hidden">
            {/* Left side with dark background and text */}
            <div className="w-full md:w-1/2 bg-black text-white p-[3vh] md:p-[5vh] flex flex-col justify-center">
               {/* Increased mobile text size from 5vw to 7vw */}
               <h1 className="text-[7vw] md:text-[3.5vw] lg:text-[2.5vw] font-bold mb-[3vh] leading-tight">
                  OUR MACHINES – YOUR EVERYDAY HEROES IN A BOX!
               </h1>

               {/* Increased from 2.5vw to 3.5vw */}
               <p className="text-gray-300 text-[3.5vw] md:text-[1.8vw] lg:text-[1.2vw] mb-[4vh]">
                  our smart vending machines have your back, wherever you are.
               </p>

               <div className="mb-[4vh]">
                  {/* Increased from 2vw to 3vw */}
                  <button className="px-[3vw] py-[1.5vh] border border-white rounded-full text-[3vw] md:text-[1.5vw] lg:text-[1vw] hover:bg-white hover:text-black transition-colors">
                     Packed with Features
                  </button>
               </div>

               <div className="space-y-[2vh]">
                  {[
                     "Smart Stock Alerts – Always know what's available",
                     'Custom Shelving – Snacks? Drinks? Surprises? Your call',
                     'Quick Payments – Tap, swipe, done',
                     'Energy Efficient – Cool and eco-friendly'
                  ].map((text, index) => (
                     <div key={index} className="flex gap-[1vw]">
                        {/* Increased from 2.2vw to 3.2vw */}
                        <p className="text-white text-[3.2vw] md:text-[1.5vw] lg:text-[1.2vw]">
                           {text}
                        </p>
                     </div>
                  ))}
               </div>

               {/* Increased from 2.2vw to 3.2vw */}
               <p className="text-gray-300 italic mt-[5vh] text-[3.2vw] md:text-[1.5vw] lg:text-[1.2vw]">
                  &quot;Tap. Explore. Customize. Let&apos;s vend something
                  amazing.&quot;
               </p>
            </div>

            {/* Right side with vending machine image */}
            <div className="w-full md:w-1/2 bg-gray-100">
               <div className="w-full h-full relative">
                  <img
                     src="/machine/img1.jpg"
                     alt="Vending Machines"
                     className="w-full h-full object-cover"
                  />
               </div>
            </div>
         </div>
      </section>
   );
}
