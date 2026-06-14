'use client';
import { useState } from 'react';

const ITEMS = [
  {
    q: 'Como funciona o orçamento?',
    a: 'Você me manda pelo WhatsApp uma descrição da ideia, tamanho aproximado e local do corpo. Com isso consigo passar um valor aproximado e, se rolar, marcamos um bate-papo para fechar o desenho.',
  },
  {
    q: 'Qual é o valor mínimo de sessão?',
    a: 'A sessão mínima fica por R$ 400 e inclui material descartável e todo o trabalho de desenho autoral. Peças maiores são fechadas por hora ou por projeto.',
  },
  {
    q: 'Faço cover-up de tatuagem antiga?',
    a: 'Sim, com avaliação prévia por foto. Cover-up bom pede planejamento — o desenho é estudado para engolir a peça antiga sem parecer remendo.',
  },
  {
    q: 'Preciso pagar sinal pra agendar?',
    a: 'Sim, 30% do valor total é cobrado como sinal e abatido no dia da sessão. Serve pra reservar sua data e cobrir o tempo de estudo do desenho.',
  },
  {
    q: 'Quanto tempo demora a cicatrização?',
    a: 'Em geral 14 dias para a cicatrização superficial e até 30 dias para a profunda. Você sai com uma cartilha completa de cuidados e meu contato direto pra qualquer dúvida.',
  },
  {
    q: 'Você atende menores de 18 anos?',
    a: 'Não. Por lei e por princípio, atendimento apenas a partir dos 18 anos, com documento oficial com foto.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="faq">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2><em>Perguntas</em><br />que chegam sempre</h2>
          <div className="right">
            <span className="mono">· CAP. V — FAQ</span>
            <p>Se ainda ficou alguma dúvida, chama no WhatsApp — prefiro responder no olho.</p>
          </div>
        </div>

        <div className="faq-list reveal">
          {ITEMS.map((it, i) => (
            <div
              className={`faq-item${openIndex === i ? ' open' : ''}`}
              key={i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
            >
              <div className="faq-n">/ {String(i + 1).padStart(2, '0')}</div>
              <div>
                <div className="faq-q">{it.q}</div>
                <div className="faq-a">{it.a}</div>
              </div>
              <div className="faq-toggle">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 1v10M1 6h10" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
