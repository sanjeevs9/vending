import PolicyLayout from '@/components/policy-layout';

export const metadata = {
   title: 'Terms & Conditions – Snackit',
   description:
      'Read the terms and conditions for using Snackit smart vending machine services.'
};

const sections = [
   {
      title: '1. Acceptance of Terms',
      content:
         'By accessing or using Snackit services, including our smart vending machines, website, and mobile applications, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, you may not use our services.'
   },
   {
      title: '2. Services',
      content: [
         'Snackit provides automated smart vending machine solutions for workplaces, campuses, gyms, hospitals, and other commercial locations across India.',
         'Our services include machine installation, product stocking, maintenance, and digital payment processing.',
         'We reserve the right to modify, suspend, or discontinue any part of our services at any time with reasonable notice.'
      ]
   },
   {
      title: '3. User Responsibilities',
      content: [
         'You agree to use the vending machines in a proper and responsible manner.',
         'Any intentional damage to our machines or tampering with their operation may result in legal action and liability for repair costs.',
         'You must not attempt to hack, reverse-engineer, or interfere with the digital payment systems or software on our machines.'
      ]
   },
   {
      title: '4. Payments & Pricing',
      content: [
         'All prices displayed on our machines are inclusive of applicable taxes unless stated otherwise.',
         'Payments are processed securely through UPI, debit/credit cards, or mobile wallets.',
         'In the event of a payment failure where the amount is debited but no product is dispensed, please refer to our Refund & Cancellation Policy.'
      ]
   },
   {
      title: '5. Product Availability',
      content:
         'Product availability may vary based on location, demand, and restocking schedules. While we strive to keep all machines fully stocked, we do not guarantee the availability of specific products at all times. Product selections and pricing may change without prior notice.'
   },
   {
      title: '6. Limitation of Liability',
      content: [
         'Snackit shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services.',
         'We are not responsible for any allergic reactions or health issues resulting from product consumption. Please check product labels for allergen information.',
         'Our total liability shall not exceed the value of the transaction in question.'
      ]
   },
   {
      title: '7. Intellectual Property',
      content:
         'All content, branding, software, and technology associated with Snackit are our proprietary property. You may not reproduce, distribute, or create derivative works from any Snackit materials without prior written consent.'
   },
   {
      title: '8. Privacy',
      content:
         'Your use of our services is also governed by our Privacy Policy, which describes how we collect, use, and protect your personal information. Please review our Privacy Policy for full details.'
   },
   {
      title: '9. Governing Law',
      content:
         'These terms are governed by the laws of India. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of courts in Bengaluru, Karnataka.'
   },
   {
      title: '10. Contact',
      content:
         'For questions about these Terms & Conditions, contact us at support@snackit.in or call +91 99802 20000.'
   }
];

export default function TermsPage() {
   return (
      <PolicyLayout
         title="Terms & Conditions"
         subtitle="Legal"
         lastUpdated="February 2026"
         sections={sections}
      />
   );
}
