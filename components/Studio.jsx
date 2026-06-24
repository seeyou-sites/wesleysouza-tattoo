'use client';
import { useTweaks } from '@/context/TweaksContext';

export default function Studio() {
  const { wppUrl } = useTweaks();
  return (
    <section className="studio" id="estudio">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2>O <em>estúdio</em></h2>
        </div>

        <div className="studio-grid reveal">
          <div className="studio-info">
            <h3>Onde a <em>agulha</em> canta</h3>
            <div className="studio-block">
              <span className="label">Endereço</span>
              <span className="val">R. Samuel Laurence, 145/153</span>
              <span className="sub">Jardim Maria Fernandes</span>
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
            <iframe
              title="Localização do estúdio — R. Samuel Laurence, 145/153, Jardim Maria Fernandes, São Paulo"
              src="https://www.google.com/maps?q=R.%20Samuel%20Laurence%2C%20145%2F153%2C%20Jardim%20Maria%20Fernandes%2C%20S%C3%A3o%20Paulo%20-%20SP&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
