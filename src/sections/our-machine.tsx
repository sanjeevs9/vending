/* eslint-disable @next/next/no-img-element */

export default function OurMachine() {
   return (
      <section className="w-full h-[80vh] px-2 py-2 relative">
         <div className="w-full h-full flex flex-col md:flex-row rounded-2xl overflow-hidden">
            {/* Left side with dark background and text */}
            <div className="w-full md:w-1/2 bg-black text-white p-6 md:p-10 flex flex-col justify-center">
               <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 leading-tight">
                  OUR MACHINES – YOUR EVERYDAY HEROES IN A BOX!
               </h1>

               <p className="text-gray-300 text-lg mb-8">
                  our smart vending machines have your back, wherever you are.
               </p>

               <div className="mb-8">
                  <button className="px-6 py-2 border border-white rounded-full text-sm">
                     Packed with Features
                  </button>
               </div>

               <div className="space-y-4">
                  <div className="flex gap-2">
                     <p className="text-white text-lg">
                        Smart Stock Alerts – Always know what&apos;s available
                     </p>
                  </div>

                  <div className="flex gap-2">
                     <p className="text-white text-lg">
                        Custom Shelving – Snacks? Drinks? Surprises? Your call
                     </p>
                  </div>

                  <div className="flex gap-2">
                     <p className="text-white text-lg">
                        Quick Payments – Tap, swipe, done
                     </p>
                  </div>

                  <div className="flex gap-2">
                     <p className="text-white text-lg">
                        Energy Efficient – Cool and eco-friendly
                     </p>
                  </div>
               </div>

               <p className="text-gray-300 italic mt-10 text-lg">
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
