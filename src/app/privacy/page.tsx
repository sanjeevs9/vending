import PolicyLayout from '@/components/policy-layout';

export const metadata = {
   title: 'Privacy Policy – Snackit',
   description:
      'Learn how Snackit collects, uses, and protects your personal information.'
};

const sections = [
   {
      title: '1. Information We Collect',
      content: [
         'Transaction data — payment method, purchase history, amount, date, and time when you use our vending machines.',
         'Device data — machine ID, location, and technical logs for service improvement.',
         'Contact information — name, email, phone number when you voluntarily reach out to us or sign up for updates.',
         'Location data — general location of the vending machine you interact with.'
      ]
   },
   {
      title: '2. How We Use Your Information',
      content: [
         'To process and complete transactions securely.',
         'To improve our product offerings and restocking schedules based on consumption patterns.',
         'To communicate important service updates, promotions, or new machine installations.',
         'To maintain, troubleshoot, and improve our smart vending machines and digital systems.',
         'To comply with legal obligations and resolve disputes.'
      ]
   },
   {
      title: '3. Data Sharing',
      content: [
         'We do not sell your personal information to third parties.',
         'We may share data with payment processors (UPI, card networks) solely for completing transactions.',
         'We may share anonymized, aggregated data with location partners (offices, campuses) to help optimize product selections.',
         'We may disclose information when required by law or to protect our rights and safety.'
      ]
   },
   {
      title: '4. Data Security',
      content:
         'We implement industry-standard security measures to protect your information. All payment transactions are encrypted and processed through secure, PCI-compliant payment gateways. However, no method of electronic transmission is 100% secure, and we cannot guarantee absolute security.'
   },
   {
      title: '5. Cookies & Tracking',
      content:
         'Our website may use cookies and similar technologies to enhance your browsing experience and analyze site traffic. You can manage cookie preferences through your browser settings. Our vending machines do not use cookies but may collect anonymous usage statistics.'
   },
   {
      title: '6. Data Retention',
      content:
         'We retain transaction data for a period of 24 months for service improvement and legal compliance. Contact information is retained until you request its deletion. You may request deletion of your personal data by contacting us at support@snackit.in.'
   },
   {
      title: '7. Your Rights',
      content: [
         'Access — request a copy of the personal data we hold about you.',
         'Correction — request correction of inaccurate personal data.',
         'Deletion — request deletion of your personal data, subject to legal retention requirements.',
         'Opt-out — unsubscribe from marketing communications at any time.'
      ]
   },
   {
      title: '8. Third-Party Links',
      content:
         'Our website or machines may contain links to third-party services. We are not responsible for the privacy practices of external websites or services. We encourage you to review their privacy policies before providing any personal information.'
   },
   {
      title: '9. Updates to This Policy',
      content:
         'We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date. Continued use of our services after changes constitutes acceptance of the revised policy.'
   },
   {
      title: '10. Contact',
      content:
         'For privacy-related inquiries, contact us at support@snackit.in or call +91 99802 20000.'
   }
];

export default function PrivacyPage() {
   return (
      <PolicyLayout
         title="Privacy Policy"
         subtitle="Your data, your trust"
         lastUpdated="February 2026"
         sections={sections}
      />
   );
}
