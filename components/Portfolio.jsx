'use client';
import { useState } from 'react';

const ITEMS = [
  { id: 1, cls: 'g-a', cat: ['geek', 'pb'], src: '/assets/tattoo-joker.png', alt: 'Braço fechado com vilões', t: 'O Riso do Caos', n: 'Nº 001 · Geek' },
  { id: 2, cls: 'g-b', cat: ['pb', 'geo'], src: '/assets/tattoo-eye-compass.png', alt: 'Olho, relógio e bússola', t: 'Tempus Fugit', n: 'Nº 002 · Realismo' },
  { id: 3, cls: 'g-c', cat: ['pb', 'geek'], src: '/assets/tattoo-chicana.png', alt: 'Retrato chicano feminino', t: 'La Doña', n: 'Nº 003 · Chicano' },
  { id: 4, cls: 'g-d', cat: ['lettering', 'pb'], src: '/assets/tattoo-lettering.png', alt: 'Lettering no peito', t: 'Resistência', n: 'Nº 004 · Lettering' },
  { id: 5, cls: 'g-e', cat: ['geek', 'pb'], src: '/assets/tattoo-cowboy.png', alt: 'Cowboy lettering', t: "Fool's Game", n: 'Nº 005 · Narrativo' },
  { id: 6, cls: 'g-f', cat: ['pb', 'geek'], src: '/assets/tattoo-two-face.png', alt: 'Duas faces', t: 'Duas Faces', n: 'Nº 006 · Surrealismo' },
  { id: 7, cls: 'g-g', cat: ['geo', 'pb'], src: '/assets/tattoo-wolf.png', alt: 'Lobo nórdico', t: 'Fenrir', n: 'Nº 007 · Nórdico' },
  { id: 8, cls: 'g-h', cat: ['geo', 'lettering'], src: '/assets/tattoo-sword.png', alt: 'Espada gótica', t: 'Elden Blade', n: 'Nº 008 · Dark Fantasy' },
  { id: 9, cls: 'g-i', cat: ['lettering'], src: '/assets/tattoo-lettering.png', alt: 'Lettering detalhe', t: 'Script Gótico', n: 'Nº 009 · Lettering' },
];

const FILTERS = [
  { key: 'all', label: 'Todos' },
  { key: 'lettering', label: 'Lettering' },
  { key: 'pb', label: 'Preto & Cinza' },
  { key: 'geek', label: 'Geek' },
  { key: 'geo', label: 'Geométrico' },
];

export default function Portfolio() {
  const [filter, setFilter] = useState('all');
  const [lightboxSrc, setLightboxSrc] = useState(null);

  return (
    <section className="portfolio" id="portfolio">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2><em>Portfólio</em><br />grimório visual</h2>
          <div className="right">
            <span className="mono">· CAP. II — PEÇAS AUTORAIS</span>
            <p>
              Recortes do que passou pela agulha. Toque ou clique em uma peça para ver detalhe — cada uma carrega uma história, nenhuma se repete.
            </p>
          </div>
        </div>

        <div className="filter-bar reveal">
          <span className="label">Filtrar</span>
          {FILTERS.map((f) => (
            <button
              key={f.key}
              className={`filter${filter === f.key ? ' active' : ''}`}
              onClick={() => setFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="gallery reveal">
          {ITEMS.map((it) => {
            const show = filter === 'all' || it.cat.includes(filter);
            return (
              <figure
                key={it.id}
                className={`gitem ${it.cls}`}
                style={{ display: show ? '' : 'none' }}
                onClick={() => setLightboxSrc(it.src)}
              >
                <img src={it.src} alt={it.alt} />
                <figcaption className="cap">
                  <div className="t">{it.t}</div>
                  <div className="n">{it.n}</div>
                </figcaption>
              </figure>
            );
          })}
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
