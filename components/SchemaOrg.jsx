export default function SchemaOrg() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://wesley-souza-tattoo.com',
    name: 'Wesley Souza — Tattoo Artist',
    alternateName: 'Wesley Souza Tattoo',
    description: 'Tatuador autoral paulistano especializado em lettering, preto & cinza, arte geek e geométrica. Peças únicas criadas exclusivamente para cada cliente.',
    url: 'https://wesley-souza-tattoo.com',
    telephone: '+55 11 97695-0005',
    email: 'contato@wesleysouzatattoo.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rua Travessa Dionísio de Alexandria, 21 - Centro Sul, Moema Varginha',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-23.5505',
      longitude: '-46.6333',
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

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
