import Footer from '@/sections/footer';
import GoogleReviews from '@/components/google-reviews';
import SellContact from '@/sections/sell/sell-contact';
import SellFaq from '@/sections/sell/sell-faq';
import SellFeatures from '@/sections/sell/sell-features';
import SellHero from '@/sections/sell/sell-hero';
import SellOnboarding from '@/sections/sell/sell-onboarding';

export const metadata = {
   title: 'Sell on Snackit – For Brands',
   description:
      'Grow your brand with Snackit. Put your products inside India\'s smartest workplaces through our smart vending network.'
};

export default function SellPage() {
   return (
      <div className="overflow-hidden">
         <SellHero />
         <SellFeatures />
         <SellOnboarding />
         <GoogleReviews />
         <SellFaq />
         <SellContact />
         <Footer />
      </div>
   );
}
