import FaqSection from '@/components/faq-section';

const faqs = [
   {
      question: 'How much space does a vending machine need?',
      answer:
         'Our standard machines need approximately 3ft x 3ft of floor space. We offer compact models for tighter areas as well. All we need is a flat surface near a power outlet, and we handle the rest.'
   },
   {
      question: "What's the cost of installing a vending machine?",
      answer:
         "Zero. There's no upfront cost, no installation fee, and no monthly rental. We provide, install, stock, and maintain the machine entirely at our expense. You just provide the space."
   },
   {
      question: 'How quickly can you set up a machine?',
      answer:
         'From request to installation, it typically takes 3–5 business days. For urgent requirements, we can expedite the process. Once installed, the machine is operational immediately.'
   },
   {
      question: 'Can we choose which products are stocked?',
      answer:
         'Absolutely. We work with you to curate a product mix that suits your team — healthy options, beverages, snacks, or a balanced combination. We also rotate products based on consumption data and seasonal trends.'
   },
   {
      question: 'What happens if the machine malfunctions?',
      answer:
         'Our machines are equipped with remote monitoring. If any issue arises, our support team is automatically alerted and typically resolves problems within hours. You can also reach us directly via phone or email anytime.'
   },
   {
      question: 'Do you provide machines for short-term events?',
      answer:
         'Yes, we offer temporary vending solutions for corporate events, conferences, expos, and campus festivals. Contact us with your event details and we will customise a solution for you.'
   },
   {
      question: 'What payment methods are supported?',
      answer:
         'Our machines support all major digital payment methods — UPI (Google Pay, PhonePe, Paytm), debit/credit cards, and mobile wallets. Every transaction is fast, secure, and contactless.'
   },
   {
      question: 'Is there a minimum footfall requirement?',
      answer:
         'We recommend a location with at least 50–100 people for optimal usage, but we evaluate each location individually. Even smaller offices can benefit — get in touch and we will assess your space.'
   }
];

export default function NeedVendingFaq() {
   return (
      <FaqSection
         id="vending-faq-section"
         heading={
            <>
               Got Questions?{' '}
               <span className="text-primary">We&apos;ve Got Answers.</span>
            </>
         }
         faqs={faqs}
      />
   );
}
