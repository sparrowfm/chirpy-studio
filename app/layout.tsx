import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0B0E14',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://chirpy.studio'),
  title: 'Chirpy Studio | AI-Powered Narrative Audio Platform',
  description: 'Create premium, personalized podcast content at scale. Chirpy Studio orchestrates research, scripting, voice, sound design, and mixing automatically.',
  keywords: ['AI podcast', 'narrative audio', 'podcast automation', 'AI audio production', 'podcast generation', 'AI voice', 'audio content', 'personalized audio'],
  authors: [{ name: 'Chirpy Studios' }],
  creator: 'Chirpy Studios',
  publisher: 'Chirpy Studios',

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://chirpy.studio',
    siteName: 'Chirpy Studio',
    title: 'Chirpy Studio | AI-Powered Narrative Audio Platform',
    description: 'Making content that should exist, but couldn\'t. Until now. Premium narrative audio, personalized at scale.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Chirpy Studio - AI-Powered Narrative Audio',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Chirpy Studio | AI-Powered Narrative Audio Platform',
    description: 'Making content that should exist, but couldn\'t. Until now.',
    images: ['/og-image.png'],
    creator: '@chirpystudio',
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

  alternates: {
    canonical: 'https://chirpy.studio',
  },

  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://chirpy.studio/#organization',
      name: 'Chirpy Studios',
      url: 'https://chirpy.studio',
      logo: {
        '@type': 'ImageObject',
        url: 'https://chirpy.studio/logo.png',
      },
      sameAs: [],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://chirpy.studio/#website',
      url: 'https://chirpy.studio',
      name: 'Chirpy Studio',
      description: 'AI-Powered Narrative Audio Platform',
      publisher: {
        '@id': 'https://chirpy.studio/#organization',
      },
    },
    {
      '@type': 'SoftwareApplication',
      name: 'Chirpy Studio',
      applicationCategory: 'MultimediaApplication',
      operatingSystem: 'Web',
      description: 'Create premium, personalized podcast content at scale with AI-powered automation.',
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/ComingSoon',
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-[#0B0E14] text-white min-h-screen">
        {children}
      </body>
    </html>
  );
}
