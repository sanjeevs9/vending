import FaqSection from '@/components/faq-section';

const faqs = [
   {
      question: 'How do I list my products on Snackit?',
      answer:
         'Simply reach out through our contact form or call us. Our team will review your product range, discuss category alignment, and guide you through the onboarding process — typically completed within a few days.'
   },
   {
      question: 'Is there a minimum order quantity or commitment?',
      answer:
         'We offer flexible partnership models to suit brands of all sizes. Whether you\'re an emerging D2C brand or an established FMCG player, we\'ll find a model that works for your scale and goals.'
   },
   {
      question: 'What types of products can I sell through Snackit?',
      answer:
         'Packaged snacks, beverages, health bars, juices, instant noodles, chocolates, chips, protein drinks — essentially any vending-compatible packaged product. Our team helps assess fit during onboarding.'
   },
   {
      question: 'How do I track my product performance?',
      answer:
         'You get access to real-time dashboards showing sales by location, repeat purchase patterns, inventory levels, and consumer preferences — giving you full visibility into how your products perform.'
   },
   {
      question: 'Which locations will my products be placed in?',
      answer:
         'Snackit operates across corporate offices, tech parks, universities, hospitals, co-working spaces, and premium residential complexes in 15+ cities. You can also target specific geographies or location types.'
   },
   {
      question: 'How quickly can my products go live?',
      answer:
         'Once onboarding is complete, products typically go live within 1–2 weeks. Our logistics team handles stocking, placement, and initial inventory across all assigned locations.'
   }
];

export default function SellFaq() {
   return (
      <FaqSection
         id="sell-faq-section"
         heading={
            <>
               Frequently Asked
               <br />
               <span className="text-primary">Questions</span>
            </>
         }
         faqs={faqs}
      />
   );
}
