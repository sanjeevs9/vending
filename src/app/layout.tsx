import { Inter } from 'next/font/google';
import localFont from 'next/font/local';
import './globals.css';

const inter = Inter({
   variable: '--font-inter',
   subsets: ['latin'],
   display: 'swap'
});

const sequelBody = localFont({
   src: '../../public/fonts/sequel-body.otf', // or .otf
   display: 'swap',
   variable: '--font-body'
});

const sequelDisplay = localFont({
   src: '../../public/fonts/sequel-disp.otf', // or .otf
   display: 'swap',
   variable: '--font-display'
});

const sequelHeading = localFont({
   src: '../../public/fonts/sequel-head.otf', // or .otf
   display: 'swap',
   variable: '--font-heading'
});

export const metadata = {
   metadataBase: new URL('https://www.snackit.in'),
   title: 'Snackit – Your Smart Snack Manager',
   description:
      'Empowering businesses with smart, reliable vending machines for effortless, 24/7 product access.',
   authors: [{ name: 'Aashish & Sanjeev' }],
   openGraph: {
      title: 'Snackit – Your Smart Snack Manager',
      description:
         'Empowering businesses with smart, reliable vending machines for effortless, 24/7 product access.',
      url: 'https://www.snackit.in/',
      siteName: 'Snackit',
      images: [
         {
            url: '/snackit.png',
            width: 1200,
            height: 630,
            alt: 'Snackit logo with slogan'
         }
      ],
      locale: 'en_US',
      type: 'website',
      publishedTime: '2025-05-04T10:00:00.000Z',
      section: 'Smart Vending Solutions',
      tags: [
         'smart vending machines',
         'office snacks',
         'automated retail',
         'gym vending',
         'campus snacks',
         'Snackit'
      ]
   },
   twitter: {
      card: 'summary_large_image',
      title: 'Snackit – Your Smart Snack Manager',
      description:
         'Empowering businesses with smart, reliable vending machines for effortless, 24/7 product access.',
      images: ['/snackit.png']
   }
};

export default function RootLayout({
   children
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="en">
         <body
            className={`${inter.variable} ${sequelBody.variable} ${sequelDisplay.variable} ${sequelHeading.variable} antialiased`}
         >
            <main>{children}</main>
         </body>
      </html>
   );
}
