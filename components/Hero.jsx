'use client';
import { useTweaks } from '@/context/TweaksContext';

export default function Hero() {
  const { state, wppUrl } = useTweaks();

  return (
    <header className="hero" id="inicio" style={{ paddingTop: 60, paddingBottom: 200 }}>
      <div className="hero-bg">
        <img src={state.hero} alt="" />
      </div>
      <div className="wrap">
        <div className="hero-in">
          <div className="hero-meta">
            <div className="hero-tag mono">
              <span className="line"></span> EST. 2022 · SÃO PAULO · BRASIL
            </div>
            <h1 className="hero-title">
              Wesley<br />
              <span className="l2">Souza</span>
            </h1>
            <p className="hero-sub">
              <b>Lettering, preto e cinza, geek.</b> Cada agulha traça uma cicatriz de história — entre o robusto e o delicado, entre a arte da agulha e a identidade.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href={wppUrl} target="_blank" rel="noopener">
                Agendar sessão
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a className="btn btn-ghost" href="#portfolio">
                Ver portfólio
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M6 3v18M18 3v18M3 6h18M3 18h18" opacity=".6" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </a>
            </div>
          </div>
          <div className="hero-side mono">
            <span className="dot"></span>
            <span>TATTOO · ARTE · HISTÓRIA</span>
            <span className="dot"></span>
            <span>@WESLEY.SOUZATATTOO</span>
          </div>
        </div>
      </div>
      <div className="hero-stats wrap">
        <div className="stat"><div className="stat-n">4+</div><div className="stat-l">Anos de agulha</div></div>
        <div className="stat"><div className="stat-n">1.4k</div><div className="stat-l">Peças autorais</div></div>
        <div className="stat"><div className="stat-n">4</div><div className="stat-l">Especialidades</div></div>
        <div className="stat"><div className="stat-n">∞</div><div className="stat-l">Histórias na pele</div></div>
        <div className="hero-scroll">
          <span>Role</span><span className="arrow"></span>
        </div>
      </div>
    </header>
  );
}
