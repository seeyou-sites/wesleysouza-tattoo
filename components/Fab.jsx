'use client';
import { useTweaks } from '@/context/TweaksContext';

export default function Fab() {
  const { wppUrl } = useTweaks();
  return (
    <a href={wppUrl} target="_blank" rel="noopener" className="fab">
      <span className="ic">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.5 3.5A11.8 11.8 0 0 0 12 0C5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6a12 12 0 0 0 5.8 1.5c6.6 0 12-5.4 12-12 0-3.2-1.3-6.2-3.5-8.4z" />
        </svg>
      </span>
      <span className="txt">Orçamento</span>
    </a>
  );
}
