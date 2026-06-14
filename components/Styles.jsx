export default function Styles() {
  return (
    <section className="styles" id="estilos">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2>As quatro <em>artes</em><br />que cultivo</h2>
          <div className="right">
            <p>
              Do risco cerrado do lettering à sombra profunda do realismo. Cada estilo é um dialeto diferente da mesma língua: a tua história.
            </p>
          </div>
        </div>

        <div className="styles-grid reveal">
          <div className="style-card">
            <div>
              <div className="style-n mono">/ 01</div>
              <h3 className="style-title">Lettering</h3>
              <p className="style-desc">Blackletter, chicano, script antigo. Palavras que carregam peso, gravadas com linha cheia e sombra densa.</p>
            </div>
            <div className="style-orn">
              <svg viewBox="0 0 120 90" width="100%" height="90">
                <text x="60" y="58" textAnchor="middle" fontFamily="UnifrakturCook" fontSize="48" fill="currentColor" style={{ color: 'var(--gold)' }}>Abc</text>
              </svg>
            </div>
            <div className="style-tags">
              <span className="style-tag">Blackletter</span>
              <span className="style-tag">Chicano</span>
              <span className="style-tag">Script</span>
            </div>
          </div>

          <div className="style-card">
            <div>
              <div className="style-n mono">/ 02</div>
              <h3 className="style-title">Preto &amp; Cinza</h3>
              <p className="style-desc">Retratos, rosas e atmosferas cinematográficas. Profundidade de sombra com delicadeza na luz — sem cor, só alma.</p>
            </div>
            <div className="style-orn">
              <svg viewBox="0 0 120 90" width="100%" height="90">
                <defs>
                  <radialGradient id="g1">
                    <stop offset="0" stopColor="#e9dfce" />
                    <stop offset=".55" stopColor="#5e554a" />
                    <stop offset="1" stopColor="#0a0908" />
                  </radialGradient>
                </defs>
                <circle cx="60" cy="45" r="30" fill="url(#g1)" />
                <circle cx="60" cy="45" r="30" fill="none" stroke="currentColor" strokeOpacity=".4" style={{ color: 'var(--gold)' }} />
              </svg>
            </div>
            <div className="style-tags">
              <span className="style-tag">Realismo</span>
              <span className="style-tag">Retrato</span>
              <span className="style-tag">Sombra</span>
            </div>
          </div>

          <div className="style-card">
            <div>
              <div className="style-n mono">/ 03</div>
              <h3 className="style-title">Geek</h3>
              <p className="style-desc">Vilões, heróis, mitos e jogos. O panteão da cultura pop em traço autoral — vigoroso, simbólico, cheio de referências.</p>
            </div>
            <div className="style-orn">
              <svg viewBox="0 0 120 90" width="100%" height="90" fill="none" stroke="currentColor" strokeWidth="1.3" style={{ color: 'var(--gold)' }}>
                <path d="M60 15 L20 45 L40 50 L20 75 L60 55 L100 75 L80 50 L100 45 Z" />
                <circle cx="60" cy="45" r="4" fill="currentColor" />
              </svg>
            </div>
            <div className="style-tags">
              <span className="style-tag">Pop culture</span>
              <span className="style-tag">Retrato</span>
              <span className="style-tag">Narrativo</span>
            </div>
          </div>

          <div className="style-card">
            <div>
              <div className="style-n mono">/ 04</div>
              <h3 className="style-title">Geométrico</h3>
              <p className="style-desc">Linhas finas, mandalas, runas e simetrias sagradas. Precisão monástica para tatuagens delicadas com significado profundo.</p>
            </div>
            <div className="style-orn">
              <svg viewBox="0 0 120 90" width="100%" height="90" fill="none" stroke="currentColor" strokeWidth="1" style={{ color: 'var(--gold)' }}>
                <circle cx="60" cy="45" r="32" />
                <circle cx="60" cy="45" r="22" />
                <circle cx="60" cy="45" r="12" />
                <path d="M28 45h64M60 13v64M37 22l46 46M83 22L37 68" />
                <polygon points="60,20 92,45 60,70 28,45" />
              </svg>
            </div>
            <div className="style-tags">
              <span className="style-tag">Fineline</span>
              <span className="style-tag">Mandala</span>
              <span className="style-tag">Runas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
