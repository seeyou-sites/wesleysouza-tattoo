'use client';
import { createContext, useContext, useEffect, useState } from 'react';

const defaults = {
  accent: 'gold',
  font: 'pirate',
  atmos: 'on',
  hero: '/assets/tattoo-lobo-corvo-runas-vikingas.jpeg',
  whatsapp: '5511976950005',
  whatsappMessage: 'Olá Wesley! Vim pelo site e quero fazer um orçamento de tatuagem.',
};

const TweaksContext = createContext({ state: defaults, setState: () => {}, wppUrl: '' });

export function TweaksProvider({ children }) {
  const [state, setState] = useState(defaults);

  useEffect(() => {
    document.body.dataset.accent = state.accent;
    document.body.dataset.font = state.font;
    document.body.dataset.atmos = state.atmos;
  }, [state.accent, state.font, state.atmos]);

  const wppUrl = `https://wa.me/${state.whatsapp}?text=${encodeURIComponent(state.whatsappMessage)}`;

  return (
    <TweaksContext.Provider value={{ state, setState, wppUrl }}>
      {children}
    </TweaksContext.Provider>
  );
}

export const useTweaks = () => useContext(TweaksContext);
