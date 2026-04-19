export default function Testimonials() {
  const items = [
    {
      avatar: 'R',
      text: 'Levei só uma ideia meio solta de um lobo com runas — e o Wesley me entregou a tatuagem mais significativa da minha vida. Ele escuta de verdade.',
      name: 'Rafael M.',
      meta: 'Braço fechado · 2025',
    },
    {
      avatar: 'C',
      text: 'Três sessões, zero estresse. O traço do lettering dele é outro patamar — virei colecionadora oficial. Próxima já tá agendada.',
      name: 'Carolina L.',
      meta: 'Lettering · 2024',
    },
    {
      avatar: 'T',
      text: 'Queria algo geek sem cair no clichê. Ele transformou uma referência de jogo em peça autoral, cheia de simbologia. Cada detalhe faz sentido.',
      name: 'Thiago P.',
      meta: 'Perna fechada · 2025',
    },
  ];

  return (
    <section className="testi">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2>Palavras dos <em>marcados</em></h2>
          <div className="right">
            <span className="mono">· CAP. IV — DEPOIMENTOS</span>
            <p>Quem já passou pela agulha — e voltou para mais.</p>
          </div>
        </div>

        <div className="testi-grid reveal">
          {items.map((t, i) => (
            <div className="t-card" key={i}>
              <div className="mark">"</div>
              <p className="t-text">{t.text}</p>
              <div className="t-who">
                <div className="t-avatar">{t.avatar}</div>
                <div>
                  <div className="t-name">{t.name}</div>
                  <div className="stars">★ ★ ★ ★ ★</div>
                  <div className="t-meta">{t.meta}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
