export default function SchemaOrg() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://wesley-souza-tattoo.vercel.app',
    name: 'Wesley Souza — Tatuador',
    alternateName: 'Wesley Souza Tattoo',
    description: 'Tatuador autoral paulistano especializado em lettering, preto & cinza, arte geek e geométrica. Peças únicas criadas exclusivamente para cada cliente.',
    url: 'https://wesley-souza-tattoo.vercel.app',
    telephone: '+55 11 97695-0005',
    email: 'seeyousites@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'R. Samuel Laurence, 145/153 - Jardim Maria Fernandes',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-23.77110911',
      longitude: '-46.71412709',
    },
    image: 'https://wesley-souza-tattoo.com/assets/tattoo-lobo-corvo-runas-vikingas.jpeg',
    priceRange: 'R$ 400+',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '00:00',
        closes: '23:59',
      },
    ],
    sameAs: [
      'https://www.instagram.com/wesley.souzatattoo',
      'https://wa.me/5511976950005',
    ],
    knowsAbout: ['Lettering', 'Preto e Cinza', 'Realismo', 'Arte Geek', 'Tatuagem Geométrica', 'Blackwork'],
    areaServed: {
      '@type': 'City',
      name: 'São Paulo',
    },
    founder: {
      '@type': 'Person',
      name: 'Wesley Souza',
      jobTitle: 'Tattoo Artist',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      ratingCount: '3',
      bestRating: '5',
      worstRating: '1',
    },
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Wesley Souza Tattoo',
    url: 'https://wesleysouza-tattoo.vercel.app',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
