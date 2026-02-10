import FaqSection from '@/components/faq-section';

const faqs = [
   {
      question: "How does Snackit's smart vending work?",
      answer:
         "Our machines are equipped with smart inventory tracking, digital payment systems, and remote monitoring. Simply select your snack, tap to pay, and collect — it's that easy."
   },
   {
      question: 'Is there any upfront investment required?',
      answer:
         'Zero. We provide the machine, stock the products, and handle all maintenance. You just provide the space and a power outlet.'
   },
   {
      question: 'What types of products are available?',
      answer:
         'From healthy snack bars and fresh juices to classic favorites and cold beverages — our curated selection covers every craving throughout the day.'
   },
   {
      question: 'How often are machines restocked?',
      answer:
         'Our smart monitoring system tracks inventory levels in real-time. We schedule regular refills based on consumption patterns to ensure your machine is always stocked.'
   },
   {
      question: 'Where can Snackit machines be installed?',
      answer:
         'Corporate offices, co-working spaces, gyms, campuses, hospitals, residential complexes — anywhere people need convenient access to snacks and beverages.'
   },
   {
      question: 'What payment methods are supported?',
      answer:
         'Our machines accept UPI, debit/credit cards, and mobile wallets. Cashless, fast, and secure transactions every time.'
   }
];

export default function AboutFaq() {
   return (
      <FaqSection
         id="faq-section"
         heading={
            <>
               Frequently Asked
               <br />
               <span className="text-[#E7000B]">Questions</span>
            </>
         }
         faqs={faqs}
      />
   );
}
