'use client';
import { useTweaks } from '@/context/TweaksContext';

export default function Cta() {
  const { state, wppUrl } = useTweaks();
  return (
    <section className="cta" id="contato">
      <div className="cta-bg" style={{ backgroundImage: `url('${state.hero}')` }}></div>
      <div className="wrap">
        <h2>Pronto para<br /><em>marcar sua história?</em></h2>
        <p>
          Cada peça nasce de uma conversa. Chama no WhatsApp, conta sua ideia — respondo pessoalmente em até 24 horas.
        </p>
        <a href={wppUrl} target="_blank" rel="noopener" className="btn btn-primary">
          Abrir conversa no WhatsApp
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.5 3.5A11.8 11.8 0 0 0 12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6a12 12 0 0 0 5.8 1.5c6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.5-8.4zM12 22a10 10 0 0 1-5.1-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A10 10 0 1 1 12 22zm5.5-7.5c-.3-.1-1.8-.9-2-1s-.5-.1-.7.1-.8 1-1 1.2-.4.2-.7 0a8 8 0 0 1-2.4-1.5 9 9 0 0 1-1.7-2.1c-.2-.3 0-.5.1-.6l.4-.5.3-.5c.1-.2 0-.4 0-.5s-.7-1.7-1-2.3c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.3-.3.3-1 1-1 2.4 0 1.5 1 2.9 1.2 3.1.1.2 2 3.1 5 4.3l1.6.5a4 4 0 0 0 1.8 0c.5-.1 1.7-.7 2-1.4.2-.6.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z" />
          </svg>
        </a>
      </div>
    </section>
  );
}
