import Footer from '@/sections/footer';
import GoogleReviews from '@/components/google-reviews';
import PromoteContact from '@/sections/promote/promote-contact';
import PromoteFaq from '@/sections/promote/promote-faq';
import PromoteFeatures from '@/sections/promote/promote-features';
import PromoteHero from '@/sections/promote/promote-hero';

export const metadata = {
   title: 'Promote with Snackit – Advertise on Vending Machines',
   description:
      'Turn everyday moments into brand impressions. Reach captive audiences during real consumption moments through Snackit\'s smart vending network.'
};

export default function PromotePage() {
   return (
      <div className="overflow-hidden">
         <PromoteHero />
         <PromoteFeatures />
         <GoogleReviews />
         <PromoteFaq />
         <PromoteContact />
         <Footer />
      </div>
   );
}
