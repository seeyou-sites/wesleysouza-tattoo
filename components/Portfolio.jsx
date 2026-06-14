'use client';
import { useState } from 'react';

const GRID = ['g-a','g-b','g-c','g-d','g-e','g-f','g-g','g-h','g-i'];

const ITEMS = [
  { id: 1,  cat: ['geek','pb'],       src: '/assets/tattoo-coringa-joker-batman-antebraco.jpeg',      alt: 'Coringa Joker Batman antebraço',        t: 'Coringa',       n: 'Geek · P&B' },
  { id: 2,  cat: ['pb'],              src: '/assets/tattoo-poseidon-guerreiro-grego.jpeg',             alt: 'Poseidon guerreiro grego',               t: 'Poseidon',      n: 'Mitologia · P&B' },
  { id: 3,  cat: ['pb'],              src: '/assets/tattoo-mulher-rezando-chorando.jpeg',              alt: 'Mulher rezando chorando',                t: 'Oração',        n: 'Retrato · P&B' },
  { id: 4,  cat: ['pb'],              src: '/assets/tattoo-rosto-chicano-olhos-azuis-rosas.jpeg',      alt: 'Rosto chicano olhos azuis rosas',        t: 'La Doña',       n: 'Chicano · P&B' },
  { id: 5,  cat: ['geek'],            src: '/assets/tattoo-ichigo-bleach-anime.jpeg',                 alt: 'Ichigo Bleach anime',                    t: 'Ichigo',        n: 'Geek · Anime' },
  { id: 6,  cat: ['pb'],              src: '/assets/tattoo-olhos-homem-tigre-realismo.jpeg',           alt: 'Olhos homem e tigre realismo',           t: 'Dois Mundos',   n: 'Realismo · P&B' },
  { id: 7,  cat: ['pb'],              src: '/assets/tattoo-zeus-estatua-relogio.jpeg',                 alt: 'Zeus estátua relógio',                   t: 'Zeus',          n: 'Mitologia · P&B' },
  { id: 8,  cat: ['lettering'],       src: '/assets/tattoo-lettering-blackwork-finalizado.jpeg',       alt: 'Lettering blackwork finalizado',         t: 'Blackwork',     n: 'Lettering' },
  { id: 9,  cat: ['geek'],            src: '/assets/tattoo-samurai-oni-manga-japones.jpeg',            alt: 'Samurai oni manga japonês',              t: 'Samurai',       n: 'Geek · Japonês' },
  { id: 10, cat: ['pb'],              src: '/assets/tattoo-jesus-leao-cruzes-braco.jpeg',              alt: 'Jesus leão cruzes braço',                t: 'Fé e Força',    n: 'Religioso · P&B' },
  { id: 11, cat: ['geek','pb'],       src: '/assets/tattoo-duas-faces-harvey-dent.jpeg',               alt: 'Duas faces Harvey Dent',                 t: 'Duas Faces',    n: 'Geek · P&B' },
  { id: 12, cat: ['pb'],              src: '/assets/tattoo-retrato-bebe-menina-laco.jpeg',             alt: 'Retrato bebê menina laço',               t: 'Memória',       n: 'Retrato · P&B' },
  { id: 13, cat: ['pb'],              src: '/assets/tattoo-anubis-egipcio-perna.jpeg',                 alt: 'Anubis egípcio perna',                   t: 'Anubis',        n: 'Mitologia · P&B' },
  { id: 14, cat: ['pb'],              src: '/assets/tattoo-lobo-corvo-runas-vikingas.jpeg',            alt: 'Lobo corvo runas vikingas',              t: 'Fenrir',        n: 'Nórdico · P&B' },
  { id: 15, cat: ['pb'],              src: '/assets/tattoo-leoes-flores-braco-feminino.jpeg',          alt: 'Leões flores braço feminino',            t: 'Leoa',          n: 'P&B · Feminino' },
  { id: 16, cat: ['geek'],            src: '/assets/tattoo-pato-donald-cassino-roleta-braco.jpeg',    alt: 'Pato Donald cassino roleta braço',        t: "Fool's Game",   n: 'Geek · Disney' },
  { id: 17, cat: ['lettering','pb'],  src: '/assets/tattoo-maos-saudade-pai-frase.jpeg',              alt: 'Mãos saudade pai frase',                 t: 'Saudade',       n: 'Lettering · P&B' },
  { id: 18, cat: ['lettering'],       src: '/assets/tattoo-lettering-stencil-colorido.jpeg',          alt: 'Lettering stencil colorido',             t: 'Stencil',       n: 'Lettering · Cor' },
  { id: 19, cat: ['geek'],            src: '/assets/tattoo-chucky-boneco-perna.jpeg',                 alt: 'Chucky boneco perna',                    t: 'Chucky',        n: 'Geek · Horror' },
  { id: 20, cat: ['pb'],              src: '/assets/tattoo-vampiro-duplo-gregas-perna.jpeg',           alt: 'Medusa dupla gregas perna',              t: 'Medusa',        n: 'P&B · Mitologia' },
  { id: 21, cat: ['geo','pb'],        src: '/assets/tattoo-relogio-bussola-olho-rosa.jpeg',           alt: 'Relógio bússola olho rosa',              t: 'Tempus Fugit',  n: 'Geométrico · P&B' },
  { id: 22, cat: ['pb'],              src: '/assets/tattoo-rosto-feminino-dinheiro-perna.jpeg',        alt: 'Rosto feminino dinheiro perna',          t: 'Money',         n: 'P&B · Chicano' },
  { id: 23, cat: ['pb'],              src: '/assets/tattoo-medalha-sao-bento.jpeg',                   alt: 'Medalha São Bento',                      t: 'São Bento',     n: 'Religioso · P&B' },
  { id: 24, cat: ['geek','pb'],       src: '/assets/tattoo-coringa-carta-joker-riddler-perna.jpeg',   alt: 'Coringa carta Joker Riddler perna',      t: 'O Caos Ri',     n: 'Geek · P&B' },
  { id: 25, cat: ['pb'],              src: '/assets/tattoo-duplo-rosto-menina-mascara.jpeg',           alt: 'Duplo rosto menina máscara',             t: 'Dualidade',     n: 'P&B · Retrato' },
  { id: 26, cat: ['pb'],              src: '/assets/tattoo-olhos-braco.jpeg',                         alt: 'Olhos braço',                            t: 'Olhar',         n: 'P&B · Realismo' },
  { id: 27, cat: ['pb'],              src: '/assets/tattoo-rosto-neon-roxo-borboleta.jpeg',            alt: 'Rosto neon roxo borboleta',              t: 'Neon',          n: 'P&B · Retrato' },
  { id: 28, cat: ['geek'],            src: '/assets/tattoo-pinguim-harvey-dent-batman.jpeg',           alt: 'Pinguim Harvey Dent Batman',             t: 'Gotham',        n: 'Geek · Batman' },
  { id: 29, cat: ['pb'],              src: '/assets/tattoo-exu-folclorico-plantas-braco.jpeg',         alt: 'Exu folclórico plantas braço',           t: 'Exu',           n: 'P&B · Folclore' },
  { id: 30, cat: ['pb'],              src: '/assets/tattoo-jesus-cordeiro-coroa-espinhos.jpeg',        alt: 'Jesus cordeiro coroa de espinhos',       t: 'Cordeiro',      n: 'Religioso · P&B' },
  { id: 31, cat: ['geek'],            src: '/assets/tattoo-geisha-mascara-oni-japonesa.jpeg',          alt: 'Geisha máscara oni japonesa',            t: 'Oni',           n: 'Geek · Japonês' },
  { id: 32, cat: ['pb'],              src: '/assets/tattoo-lobo-rosa-braco.jpeg',                     alt: 'Lobo rosa braço',                        t: 'Lobo',          n: 'P&B · Animal' },
  { id: 33, cat: ['geek'],            src: '/assets/tattoo-slipknot-metal-perna-vermelho.jpeg',        alt: 'Slipknot metal perna',                   t: 'Slipknot',      n: 'Geek · Metal' },
  { id: 34, cat: ['pb'],              src: '/assets/tattoo-tigre-colorido-perna.jpeg',                alt: 'Tigre colorido perna',                   t: 'Tigre',         n: 'P&B · Animal' },
];

export default function Portfolio() {
  const [expanded, setExpanded] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState(null);

  const initial = ITEMS.slice(0, 3);
  const more = ITEMS.slice(3);

  return (
    <section className="portfolio" id="portfolio">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2><em>Portfólio</em><br />grimório visual</h2>
        </div>

        <div className="gallery-initial reveal">
          {initial.map((it) => (
            <figure
              key={it.id}
              className="gitem-uniform"
              onClick={() => setLightboxSrc(it.src)}
            >
              <img src={it.src} alt={it.alt} loading="lazy" />
              <figcaption className="cap">
                <div className="t">{it.t}</div>
                <div className="n">{it.n}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        {!expanded && (
          <div style={{ textAlign: 'center', marginTop: 32 }}>
            <button className="btn btn-ghost" onClick={() => setExpanded(true)}>
              Ver mais
            </button>
          </div>
        )}

        <div className={`gallery-more${expanded ? ' expanded' : ''}`}>
          {more.map((it, i) => (
            <figure
              key={it.id}
              className={`gitem ${GRID[i % GRID.length]}`}
              onClick={() => setLightboxSrc(it.src)}
            >
              <img src={it.src} alt={it.alt} loading="lazy" />
              <figcaption className="cap">
                <div className="t">{it.t}</div>
                <div className="n">{it.n}</div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 60 }}>
          <a
            href="https://www.instagram.com/wesley.souzatattoo"
            target="_blank"
            rel="noopener"
            className="btn btn-ghost"
          >
            Ver tudo no Instagram
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
              <rect x="3" y="3" width="18" height="18" rx="4" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
          </a>
        </div>
      </div>

      {lightboxSrc && (
        <div
          onClick={() => setLightboxSrc(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(5,4,3,.96)',
            zIndex: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'zoom-out',
            padding: 40,
          }}
        >
          <img
            src={lightboxSrc}
            alt=""
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              boxShadow: '0 30px 100px rgba(0,0,0,.9)',
              border: '1px solid rgba(201,168,106,.4)',
            }}
          />
        </div>
      )}
    </section>
  );
}
