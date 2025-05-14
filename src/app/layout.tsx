import { Bowlby_One_SC, Geist, Geist_Mono, Inter } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
   variable: '--font-geist-sans',
   subsets: ['latin']
});

const geistMono = Geist_Mono({
   variable: '--font-geist-mono',
   subsets: ['latin']
});

const inter = Inter({
   variable: '--font-inter',
   subsets: ['latin'],
   display: 'swap'
});

const bowlby = Bowlby_One_SC({
   subsets: ['latin'],
   display: 'swap',
   variable: '--font-bowlby-sc',
   weight: '400'
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
            className={`${geistSans.variable} ${geistMono.variable} ${bowlby.variable} ${inter.variable} antialiased`}
         >
            <main>{children}</main>
         </body>
      </html>
   );
}
