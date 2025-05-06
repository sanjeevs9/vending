import Hero from '@/sections/hero';
import VendingRequirements from '@/sections/what-we-need';
import WhatWeOffer from '@/sections/what-we-offer';

export default function Home() {
   return (
      <div className="">
         <Hero />

         <WhatWeOffer />

         <VendingRequirements />
      </div>
   );
}
