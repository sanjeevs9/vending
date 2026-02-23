import About from '@/sections/home/about';
import ActionsVerbs from '@/sections/home/actions-verbs';
import ContactUs from '@/sections/home/contact';
import Footer from '@/sections/footer';
import Hero from '@/sections/home/hero';
import MediaAndUs from '@/sections/media-and-us';
import OurMachine from '@/sections/home/our-machine';
import Servings from '@/sections/home/servings';
import VendingRequirements from '@/sections/home/what-we-need';
import WhatWeOffer from '@/sections/home/what-we-offer';
export default function Home() {
   return (
      <div className="overflow-hidden">
         <Hero />

         <WhatWeOffer />

         <ActionsVerbs />

         {/* <FeaturedBy /> */}


         <VendingRequirements />

         <About />

         <OurMachine />

         <Servings />
         <MediaAndUs />

         <ContactUs />

         <Footer />
      </div>
   );
}
