import AboutFaq from '@/sections/about-faq';
import AboutHero from '@/sections/about-hero';
import AboutPurpose from '@/sections/about-purpose';
import AboutStory from '@/sections/about-story';
import AboutWhyChoose from '@/sections/about-why-choose';
import Footer from '@/sections/footer';

export const metadata = {
   title: 'About Us – Snackit',
   description:
      'Learn about Snackit — building the future of on-site convenience through smart vending machines across India.'
};

export default function AboutPage() {
   return (
      <div className="overflow-hidden">
         <AboutHero />
         <AboutStory />
         <AboutPurpose />
         <AboutWhyChoose />
         <AboutFaq />
         <Footer />
      </div>
   );
}
