'use client';
import { useTweaks } from '@/context/TweaksContext';

export default function Footer() {
  const { wppUrl } = useTweaks();
  return (
    <footer>
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-col foot-brand">
            <h4>Wesley Souza · Tattoo</h4>
            <p>
              Estúdio autoral dedicado a lettering, preto &amp; cinza, arte geek e geometria. Cada peça é única — como quem a carrega.
            </p>
          </div>
          <div className="foot-col">
            <h4>Navegar</h4>
            <ul>
              <li><a href="#estilos">Estilos</a></li>
              <li><a href="#portfolio">Portfólio</a></li>
              <li><a href="#processo">Processo</a></li>
              <li><a href="#estudio">Estúdio</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Contato</h4>
            <ul>
              <li><a href={wppUrl} target="_blank" rel="noopener">+55 11 97695-0005</a></li>
              <li><a href="https://www.instagram.com/wesley.souzatattoo" target="_blank" rel="noopener">Instagram</a></li>
              <li><a href="mailto:contato@wesleysouzatattoo.com">E-mail</a></li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>Hora do estúdio</h4>
            <ul>
              <li>Ter – Sáb · 10h às 20h</li>
              <li>Dom – Seg · fechado</li>
              <li>Agendamento prévio</li>
            </ul>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Wesley Souza Tattoo · Todos os direitos reservados</span>
          <span>Feito em SP por see you sites · Com agulha e paciência</span>
        </div>
      </div>
    </footer>
  );
}
