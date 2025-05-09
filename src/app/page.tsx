import About from '@/sections/about';
import ActionsVerbs from '@/sections/actions-verbs';
import ContactUs from '@/sections/contact';
import FeaturedByAnimation from '@/sections/featured-by';
import Hero from '@/sections/hero';
import VendingRequirements from '@/sections/what-we-need';
import WhatWeOffer from '@/sections/what-we-offer';

export default function Home() {
   return (
      <>
         <Hero />

         <WhatWeOffer />

         <VendingRequirements />

         {/* <TheTeam /> */}

         <FeaturedByAnimation />

         <ActionsVerbs />

         <About />

         <ContactUs />
      </>
   );
}
