'use client';
import { useTweaks } from '@/context/TweaksContext';

export default function Drawer() {
  const { wppUrl } = useTweaks();
  const close = () => document.body.classList.remove('drawer-open');

  return (
    <div className="drawer">
      <a href="#inicio" onClick={close}>Início</a>
      <a href="#sobre" onClick={close}>Sobre</a>
      <a href="#estilos" onClick={close}>Estilos</a>
      <a href="#portfolio" onClick={close}>Portfólio</a>
      <a href="#processo" onClick={close}>Processo</a>
      <a href="#estudio" onClick={close}>Estúdio</a>
      <a href="#contato" onClick={close}>Contato</a>
      <a
        href={wppUrl}
        target="_blank"
        rel="noopener"
        onClick={close}
        className="btn btn-primary"
        style={{ marginTop: 20 }}
      >
        Orçamento no WhatsApp
      </a>
    </div>
  );
}
