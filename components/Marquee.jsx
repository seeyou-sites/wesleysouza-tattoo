export default function Marquee() {
  const items = ['Lettering', 'Preto & Cinza', 'Geek', 'Geométrico', 'Realismo', 'Blackwork'];
  const renderSet = (keyPrefix) =>
    items.flatMap((word, i) => [
      <span key={`${keyPrefix}-w-${i}`}>{word}</span>,
      <span key={`${keyPrefix}-d-${i}`} className="dot">✦</span>,
    ]);

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {renderSet('a')}
        {renderSet('b')}
      </div>
    </div>
  );
}
