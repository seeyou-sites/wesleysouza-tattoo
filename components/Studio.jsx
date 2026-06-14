'use client';
import { useTweaks } from '@/context/TweaksContext';

export default function Studio() {
  const { wppUrl } = useTweaks();
  return (
    <section className="studio" id="estudio">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2>O <em>estúdio</em></h2>
          <div className="right">
            <span className="mono">· CAP. VI — ENDEREÇO</span>
            <p>Atendimento por hora marcada. Ambiente privativo, trilha boa, café na mão.</p>
          </div>
        </div>

        <div className="studio-grid reveal">
          <div className="studio-info">
            <h3>Onde a <em>agulha</em> canta</h3>
            <div className="studio-block">
              <span className="label">Endereço</span>
              <span className="val">Rua Travessa Dionísio de Alexandria, 21</span>
              <span className="sub">Centro Sul, Moema Varginha</span>
              <span className="sub">São Paulo — SP</span>
            </div>
            <div className="studio-block">
              <span className="label">Atendimento</span>
              <span className="val">24h · 7 dias da semana</span>
              <span className="sub">Sessões apenas com hora marcada</span>
            </div>
            <div className="studio-block">
              <span className="label">Contato direto</span>
              <span className="val">+55 11 97695-0005</span>
              <span className="sub">WhatsApp exclusivo · resposta em até 24h</span>
            </div>
            <div className="studio-block">
              <span className="label">Instagram</span>
              <span className="val">@wesley.souzatattoo</span>
              <span className="sub">Portfólio atualizado semanalmente</span>
            </div>
            <a
              className="btn btn-primary"
              href={wppUrl}
              target="_blank"
              rel="noopener"
              style={{ alignSelf: 'flex-start', marginTop: 8 }}
            >
              Falar no WhatsApp
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>

          <div className="map">
            <svg viewBox="0 0 600 560" preserveAspectRatio="xMidYMid slice">
              <defs>
                <pattern id="grid" width="24" height="24" patternUnits="userSpaceOnUse">
                  <path d="M24 0H0V24" fill="none" stroke="rgba(201,168,106,.06)" strokeWidth=".5" />
                </pattern>
                <radialGradient id="spot" cx="50%" cy="50%" r="40%">
                  <stop offset="0" stopColor="rgba(201,168,106,.18)" />
                  <stop offset="1" stopColor="rgba(201,168,106,0)" />
                </radialGradient>
              </defs>
              <rect width="600" height="560" fill="#0c0a09" />
              <rect width="600" height="560" fill="url(#grid)" />
              <rect width="600" height="560" fill="url(#spot)" />
              <path d="M-20 340 Q 120 300 220 360 T 500 320 T 700 380" stroke="rgba(201,168,106,.28)" strokeWidth="14" fill="none" strokeLinecap="round" />
              <path d="M-20 340 Q 120 300 220 360 T 500 320 T 700 380" stroke="rgba(201,168,106,.12)" strokeWidth="26" fill="none" strokeLinecap="round" />
              <g stroke="rgba(233,223,206,.22)" strokeWidth="1.2" fill="none">
                <path d="M0 120 L600 180" />
                <path d="M0 240 L600 260" />
                <path d="M0 460 L600 420" />
                <path d="M80 0 L120 560" />
                <path d="M260 0 L300 560" />
                <path d="M420 0 L460 560" />
                <path d="M540 0 L560 560" />
              </g>
              <g stroke="rgba(233,223,206,.1)" strokeWidth=".6" fill="none">
                <path d="M0 60 L600 80" />
                <path d="M0 180 L600 220" />
                <path d="M0 380 L600 380" />
                <path d="M40 0 L60 560" />
                <path d="M180 0 L220 560" />
                <path d="M360 0 L380 560" />
                <path d="M500 0 L520 560" />
              </g>
              <g fill="rgba(201,168,106,.04)" stroke="rgba(201,168,106,.12)" strokeWidth=".5">
                <rect x="120" y="70" width="130" height="100" />
                <rect x="280" y="80" width="90" height="90" />
                <rect x="390" y="100" width="90" height="80" />
                <rect x="140" y="250" width="110" height="120" />
                <rect x="320" y="220" width="90" height="80" />
                <rect x="450" y="240" width="100" height="140" />
                <rect x="60" y="400" width="140" height="120" />
                <rect x="240" y="400" width="100" height="100" />
                <rect x="380" y="430" width="140" height="90" />
              </g>
              <g stroke="rgba(201,168,106,.5)" strokeWidth=".6" fill="none" strokeDasharray="3 4">
                <circle cx="300" cy="280" r="80" />
                <circle cx="300" cy="280" r="140" />
              </g>
              <g transform="translate(540,60)" fill="none" stroke="var(--gold)" strokeWidth="1" style={{ color: '#c9a86a' }}>
                <circle cx="0" cy="0" r="22" />
                <circle cx="0" cy="0" r="14" />
                <path d="M0 -22 L4 0 L0 22 L-4 0Z" fill="currentColor" />
                <text x="0" y="-28" textAnchor="middle" fontFamily="JetBrains Mono" fontSize="8" fill="currentColor" letterSpacing="1">N</text>
              </g>
            </svg>
            <div className="pin">
              <span className="pin-label">WESLEY · TATTOO</span>
              <span className="pin-dot"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
