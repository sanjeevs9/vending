import AboutContent from '@/sections/about/about-content';
import AboutFaq from '@/sections/about/about-faq';
import AboutHero from '@/sections/about/about-hero';
import AboutLocation from '@/sections/about/about-location';
import Footer from '@/sections/footer';
import GoogleReviews from '@/components/google-reviews';
import WhatWeBringSection from '@/sections/about/about-what-we-bring';

import AboutPurpose from '@/sections/about/about-purpose';

export const metadata = {
   title: 'About Us – Snackit',
   description:
      'Learn about Snackit — building the future of on-site convenience through smart vending machines across India.'
};

export default function AboutPage() {
   return (
      <div className="overflow-hidden">
         <AboutHero />
         <AboutContent />
         <AboutPurpose />
         <WhatWeBringSection />
         <GoogleReviews />
         <AboutFaq />
         <AboutLocation />
         <Footer />
      </div>
   );
}
   