'use client';
import { useEffect, useState } from 'react';
import { useTweaks } from '@/context/TweaksContext';

const SWATCHES = [
  { key: 'gold', bg: '#F2A03D', title: 'Ouro' },
  { key: 'blood', bg: '#b23024', title: 'Sangue' },
  { key: 'bone', bg: '#f0e6c8', title: 'Osso' },
  { key: 'ember', bg: '#d47842', title: 'Brasa' },
];

const FONTS = [
  { key: 'uni', label: 'Blackletter' },
  { key: 'pirate', label: 'Pirata' },
  { key: 'meta', label: 'Metamorphous' },
];

const ATMOS = [
  { key: 'on', label: 'Ativada' },
  { key: 'off', label: 'Limpa' },
];

const HEROES = [
  { key: '/assets/tattoo-wolf.png', label: 'Lobo' },
  { key: '/assets/tattoo-joker.png', label: 'Coringa' },
  { key: '/assets/tattoo-lettering.png', label: 'Lettering' },
  { key: '/assets/tattoo-sword.png', label: 'Espada' },
];

export default function TweaksPanel() {
  const { state, setState } = useTweaks();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onMsg = (ev) => {
      const d = ev.data || {};
      if (d.type === '__activate_edit_mode') setIsOpen(true);
      if (d.type === '__deactivate_edit_mode') setIsOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const persist = (edits) => {
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits }, '*');
  };

  const onClose = () => {
    setIsOpen(false);
    window.parent.postMessage({ type: '__deactivate_edit_mode' }, '*');
  };

  const setAccent = (v) => { setState((s) => ({ ...s, accent: v })); persist({ accent: v }); };
  const setFont = (v) => { setState((s) => ({ ...s, font: v })); persist({ font: v }); };
  const setAtmos = (v) => { setState((s) => ({ ...s, atmos: v })); persist({ atmos: v }); };
  const setHero = (v) => { setState((s) => ({ ...s, hero: v })); persist({ hero: v }); };

  return (
    <div className={`tw${isOpen ? ' open' : ''}`}>
      <div className="tw-h">
        <span className="t">Tweaks</span>
        <button onClick={onClose} style={{ color: 'var(--bone-dim)', fontSize: 18 }}>✕</button>
      </div>

      <label>
        Cor de acento
        <div className="row">
          {SWATCHES.map((s) => (
            <span
              key={s.key}
              className={`swatch${state.accent === s.key ? ' on' : ''}`}
              style={{ background: s.bg }}
              title={s.title}
              onClick={() => setAccent(s.key)}
            />
          ))}
        </div>
      </label>

      <label>
        Fonte do lettering
        <div className="row">
          {FONTS.map((f) => (
            <span
              key={f.key}
              className={`chip${state.font === f.key ? ' on' : ''}`}
              onClick={() => setFont(f.key)}
            >
              {f.label}
            </span>
          ))}
        </div>
      </label>

      <label>
        Atmosfera (grão e luz)
        <div className="row">
          {ATMOS.map((a) => (
            <span
              key={a.key}
              className={`chip${state.atmos === a.key ? ' on' : ''}`}
              onClick={() => setAtmos(a.key)}
            >
              {a.label}
            </span>
          ))}
        </div>
      </label>

      <label>
        Imagem do hero
        <div className="row">
          {HEROES.map((h) => (
            <span
              key={h.key}
              className={`chip${state.hero === h.key ? ' on' : ''}`}
              onClick={() => setHero(h.key)}
            >
              {h.label}
            </span>
          ))}
        </div>
      </label>
    </div>
  );
}
