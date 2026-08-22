import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mark-piazuelo-embedded.markmark1pf.chatgpt.site'),
  title: 'Mark Piazuelo — Embedded Systems & Hardware',
  description: 'Portfolio de Mark Piazuelo: sistemas embebidos, firmware, hardware hacking, Linux y arquitectura de sistemas.',
  alternates: {
    canonical: '/',
    languages: {
      'es-ES': '/',
      'en': '/?lang=en',
    },
  },
  openGraph: {
    title: 'Mark Piazuelo — Embedded Systems & Hardware',
    description: 'Construyendo sistemas completos desde las capas más bajas del hardware hasta el software.',
    type: 'website',
    locale: 'es_ES',
    url: '/',
    images: [{ url: 'https://mark-piazuelo-embedded.markmark1pf.chatgpt.site/og.png', width: 1200, height: 630, alt: 'Mark Piazuelo — Building systems from the hardware up' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mark Piazuelo — Embedded Systems & Hardware',
    description: 'Construyendo sistemas completos desde las capas más bajas del hardware hasta el software.',
    images: ['https://mark-piazuelo-embedded.markmark1pf.chatgpt.site/og.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
