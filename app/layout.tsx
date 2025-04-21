import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

export const metadata: Metadata = {
  title: {
    default: 'Col & Co | Limited Edition Art Prints & Canvases',
    template: '%s | Col & Co'
  },
  description: 'Discover unique, limited-edition art prints and canvases by Col & Co. Find the perfect piece for your space.',
  keywords: ['art prints', 'limited edition', 'canvas art', 'wall art', 'art store', 'contemporary art'],
  authors: [{ name: 'Colin' }],
  creator: 'Col & Co',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://colandco.com',
    siteName: 'Col & Co',
    title: 'Col & Co | Limited Edition Art Prints & Canvases',
    description: 'Discover unique, limited-edition art prints and canvases by Col & Co. Find the perfect piece for your space.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Col & Co - Limited Edition Art'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Col & Co | Limited Edition Art Prints & Canvases',
    description: 'Discover unique, limited-edition art prints and canvases by Col & Co. Find the perfect piece for your space.',
    images: ['/images/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" />
      </head>
      <body className="min-h-screen flex flex-col bg-background antialiased">
        <SessionProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster />
        </SessionProvider>
      </body>
    </html>
  );
}