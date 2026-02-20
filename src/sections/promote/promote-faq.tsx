import FaqSection from '@/components/faq-section';

const faqs = [
   {
      question: 'What types of advertising does Snackit offer?',
      answer:
         'We offer full machine exterior wraps, on-screen digital ads during purchase flow, corporate colour adaptations, and campaign-specific messaging that can be updated dynamically across all machines in your network.'
   },
   {
      question: 'How many people will see my brand?',
      answer:
         'Each vending machine serves 200–500+ users daily in high-footfall locations like corporate offices, tech parks, hospitals, and campuses. With 600+ machines across 15+ cities, your brand reaches over a million daily impressions.'
   },
   {
      question: 'Can I run time-limited campaigns?',
      answer:
         'Absolutely. We support seasonal campaigns, product launches, festival promotions, and limited-time offers. Digital messaging on screens can be updated remotely, and physical wraps can be scheduled for specific durations.'
   },
   {
      question: 'What locations can I target?',
      answer:
         'You can target by city, location type (offices, hospitals, campuses, co-working spaces, residential complexes), or even specific high-value sites. Our team helps you choose the optimal mix for your audience.'
   },
   {
      question: 'How long does it take to go live?',
      answer:
         'Digital screen campaigns can go live within 3–5 business days. Full exterior branding typically takes 2–3 weeks including design, production, and installation across selected machines.'
   },
   {
      question: 'How do I measure campaign performance?',
      answer:
         'We provide detailed reports including impressions, transaction counts during your campaign period, location-wise breakdowns, and engagement metrics from screen interactions.'
   }
];

export default function PromoteFaq() {
   return (
      <FaqSection
         id="promote-faq-section"
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
