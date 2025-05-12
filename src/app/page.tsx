import About from '@/sections/about';
import ActionsVerbs from '@/sections/actions-verbs';
import ContactUs from '@/sections/contact';
import FeaturedBy from '@/sections/featured-by';
import Footer from '@/sections/footer';
import Hero from '@/sections/hero';
import OurMachine from '@/sections/our-machine';
import Servings from '@/sections/servings';
import VendingRequirements from '@/sections/what-we-need';
import WhatWeOffer from '@/sections/what-we-offer';

export default function Home() {
   return (
      <div className="overflow-hidden">
         <Hero />

         <WhatWeOffer />

         <ActionsVerbs />

         <FeaturedBy />

         <VendingRequirements />

         <About />

         <OurMachine />

         <Servings />

         <ContactUs />

         <Footer />
      </div>
   );
}
