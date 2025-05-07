import FeaturedByAnimation from '@/sections/featured-by';
import Hero from '@/sections/hero';
import TheTeam from '@/sections/the-team';
import VendingRequirements from '@/sections/what-we-need';
import WhatWeOffer from '@/sections/what-we-offer';

export default function Home() {
   return (
      <div className="">
         <Hero />

         <WhatWeOffer />

         <VendingRequirements />

         <TheTeam />

         <FeaturedByAnimation />
      </div>
   );
}
