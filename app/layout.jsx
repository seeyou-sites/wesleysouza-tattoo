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
    url: 'https://wesley-souza-tattoo.com',
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
    icon: [{ url: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="%23c9a86a"><circle cx="12" cy="12" r="10"/><path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M19.1 4.9L4.9 19.1"/></svg>' }],
  },
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
  alternates: {
    canonical: 'https://wesley-souza-tattoo.com',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0a0908" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=UnifrakturCook:wght@700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=JetBrains+Mono:wght@300;400;500&family=Pirata+One&family=Metamorphous&display=swap"
          rel="stylesheet"
        />
        <SchemaOrg />
      </head>
      <body className="grain">
        <TweaksProvider>{children}</TweaksProvider>
      </body>
    </html>
  );
}
