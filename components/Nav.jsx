'use client';
import { useEffect, useRef } from 'react';
import { useTweaks } from '@/context/TweaksContext';

const SECTIONS = ['inicio', 'sobre', 'estilos', 'portfolio', 'processo', 'estudio', 'contato'];

export default function Nav() {
  const { wppUrl } = useTweaks();
  const navRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!navRef.current) return;
      if (window.scrollY > 40) navRef.current.style.padding = '0';
      else navRef.current.style.padding = '';
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = SECTIONS.map((id) => document.getElementById(id)).filter(Boolean);
    const navLinks = linksRef.current
      ? linksRef.current.querySelectorAll('a[data-nav]')
      : [];

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            navLinks.forEach((l) =>
              l.classList.toggle('active', l.dataset.nav === e.target.id),
            );
          }
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  const onBurger = () => document.body.classList.toggle('drawer-open');

  return (
    <nav className="nav" ref={navRef}>
      <div className="nav-in">
        <div className="brand">
          <div className="brand-mark">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.2"
              style={{ color: 'var(--gold)' }}
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M12 2v20M2 12h20M4.9 4.9l14.2 14.2M19.1 4.9L4.9 19.1" />
            </svg>
          </div>
          <div>
            <span className="brand-name">Wesley Souza</span>
            <span className="brand-sub">Tattoo Artist · SP</span>
          </div>
        </div>
        <div className="nav-links" ref={linksRef}>
          <a href="#inicio" data-nav="inicio">Início</a>
          <a href="#sobre" data-nav="sobre">Sobre</a>
          <a href="#estilos" data-nav="estilos">Estilos</a>
          <a href="#portfolio" data-nav="portfolio">Portfólio</a>
          <a href="#processo" data-nav="processo">Processo</a>
          <a href="#estudio" data-nav="estudio">Estúdio</a>
          <a href="#contato" data-nav="contato">Contato</a>
        </div>
        <div className="nav-right">
          <a href={wppUrl} target="_blank" rel="noopener" className="nav-cta">
            <span>Orçamento</span>
          </a>
          <button className="nav-burger" aria-label="Abrir menu" onClick={onBurger}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
