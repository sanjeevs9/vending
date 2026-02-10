import PolicyLayout from '@/components/policy-layout';

export const metadata = {
   title: 'Refund & Cancellation Policy – Snackit',
   description:
      'Understand Snackit refund and cancellation policies for vending machine transactions.'
};

const sections = [
   {
      title: '1. Transaction Refunds',
      content:
         'If a payment is successfully processed but the vending machine fails to dispense the selected product, you are eligible for a full refund of the transaction amount. Refunds are processed within 5–7 business days to the original payment method.'
   },
   {
      title: '2. How to Request a Refund',
      content: [
         'Note the machine ID displayed on the vending machine.',
         'Note the date, time, and approximate amount of the transaction.',
         'Contact us within 48 hours of the failed transaction via email at support@snackit.in or call +91 99802 20000.',
         'Provide the transaction reference number from your payment app or bank statement.'
      ]
   },
   {
      title: '3. Refund Eligibility',
      content: [
         'Product not dispensed after successful payment — full refund.',
         'Wrong product dispensed — full refund or replacement at our discretion.',
         'Product dispensed in damaged condition — full refund or replacement.',
         'Change of mind after product is dispensed — not eligible for refund.',
         'Duplicate payment for the same transaction — refund of the extra amount.'
      ]
   },
   {
      title: '4. Cancellation Policy',
      content:
         'Vending machine transactions are instant and cannot be cancelled once a product has been dispensed. If you experience a machine malfunction during a transaction, do not attempt a second payment — contact our support team for assistance.'
   },
   {
      title: '5. Refund Processing',
      content: [
         'UPI payments — refund credited within 3–5 business days.',
         'Debit/Credit card payments — refund credited within 5–7 business days.',
         'Mobile wallet payments — refund credited within 3–5 business days.',
         'Processing times may vary depending on your bank or payment provider.'
      ]
   },
   {
      title: '6. Machine Installation Cancellation',
      content:
         'If you are a location partner who has requested a Snackit vending machine installation, you may cancel the request before the machine is deployed at no cost. Once the machine is installed and operational, please refer to your service agreement for cancellation terms and notice periods.'
   },
   {
      title: '7. Disputes',
      content:
         'If you are not satisfied with our refund decision, you may escalate the matter by emailing escalations@snackit.in with your original complaint reference. We aim to resolve all disputes within 15 business days of escalation.'
   },
   {
      title: '8. Contact',
      content:
         'For refund or cancellation inquiries, contact us at support@snackit.in or call +91 99802 20000. Our support team is available Monday to Saturday, 9:00 AM to 6:00 PM IST.'
   }
];

export default function RefundPage() {
   return (
      <PolicyLayout
         title="Refund & Cancellation Policy"
         subtitle="Transparent & fair"
         lastUpdated="February 2026"
         sections={sections}
      />
   );
}
