import { TweaksProvider } from '@/context/TweaksContext';
import SchemaOrg from '@/components/SchemaOrg';
import './globals.css';

export const metadata = {
  title: 'Wesley Souza — Tatuador Autoral em SP | Lettering & Preto e Cinza',
  description: 'Tatuador autoral em São Paulo especializado em lettering, preto & cinza, arte geek e geométrico. Peças únicas e personalizadas. Agende sua sessão.',
  keywords: 'tatuador SP, lettering, preto e cinza, tatuagem geek, tatuagem geométrica, tatuador autoral, tattoo artist São Paulo',
  authors: [{ name: 'Wesley Souza' }],
  creator: 'Wesley Souza',
  openGraph: {
    type: 'website',
    url: 'https://wesleysouza-tattoo.vercel.app',
    title: 'Wesley Souza — Tatuador Autoral | Lettering, Preto & Cinza',
    description: 'Tatuador autoral paulistano especializado em lettering, preto & cinza, arte geek e geométrica. Peças únicas criadas exclusivamente para cada cliente.',
    images: [
      {
        url: '/assets/tattoo-wolf.png',
        width: 1200,
        height: 630,
        alt: 'Tatuagem de lobo nórdico - Wesley Souza',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wesley Souza — Tatuador Autoral SP',
    description: 'Lettering • Preto & Cinza • Geek • Geométrico',
    images: ['/assets/tattoo-wolf.png'],
    creator: '@wesley.souzatattoo',
  },
  icons: {
    icon: [{ url: '/assets/icon.jpeg' }],
    shortcut: '/assets/icon.jpeg',
    apple: '/assets/icon.jpeg',
  },
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://wesleysouza-tattoo.vercel.app',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0d0b08" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=UnifrakturCook:wght@700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=JetBrains+Mono:wght@300;400;500&family=Pirata+One&family=Metamorphous&display=swap"
          rel="stylesheet"
        />
        <SchemaOrg />
        <meta name="google-site-verification" content="OYM-l4G25a1S4U3SF24oRu80BbpNTZgDnx9a-uGy4VE" />
      </head>
      <body className="grain" suppressHydrationWarning>
        <TweaksProvider>{children}</TweaksProvider>
      </body>
    </html>
  );
}
