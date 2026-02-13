import Footer from '@/sections/footer';
import NeedVendingContact from '@/sections/need-a-vending/need-vending-contact';
import NeedVendingFaq from '@/sections/need-a-vending/need-vending-faq';
import NeedVendingFeatures from '@/sections/need-a-vending/need-vending-features';
import NeedVendingHero from '@/sections/need-a-vending/need-vending-hero';
import NeedVendingTrust from '@/sections/need-a-vending/need-vending-trust';
import GoogleReviews from '@/components/google-reviews';
import NeedVendingSmartCard from '@/sections/need-a-vending/need-vending-smart-card';

export const metadata = {
   title: 'Need a Vending Machine? – Snackit',
   description:
      'Get a smart vending machine for your workplace at zero cost. Snackit provides, installs, stocks, and maintains premium vending machines across India.'
};

export default function NeedAVendingPage() {
   return (
      <div className="overflow-hidden">
         <NeedVendingHero />
         <NeedVendingFeatures />
         <NeedVendingTrust />
         <NeedVendingSmartCard />
         <GoogleReviews />
         <NeedVendingFaq />
         <NeedVendingContact />
         <Footer />
      </div>
   );
}
