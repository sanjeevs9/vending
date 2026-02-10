import Footer from '@/sections/footer';
import NeedVendingContact from '@/sections/need-a-vending/need-vending-contact';
import NeedVendingFaq from '@/sections/need-a-vending/need-vending-faq';
import NeedVendingFeatures from '@/sections/need-a-vending/need-vending-features';
import NeedVendingHero from '@/sections/need-a-vending/need-vending-hero';
import NeedVendingTrust from '@/sections/need-a-vending/need-vending-trust';
import NeedVendingWhy from '@/sections/need-a-vending/need-vending-why';

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
         <NeedVendingWhy />
         <NeedVendingFaq />
         <NeedVendingContact />
         <Footer />
      </div>
   );
}
