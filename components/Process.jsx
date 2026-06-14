export default function Process() {
  const steps = [
    {
      n: 'I',
      title: 'Conversa',
      desc: 'Você chega com uma ideia, uma memória, uma cicatriz que pede forma. Conversamos pelo WhatsApp — sem custo, sem pressa.',
      meta: 'WhatsApp · 15 min',
    },
    {
      n: 'II',
      title: 'Referências',
      desc: 'Monto o desenho autoral a partir da sua história e das referências. Você aprova, ajustamos o que precisar — só depois Tatuamos.',
      meta: 'Estudo · 3 a 7 dias',
    },
    {
      n: 'III',
      title: 'Sessão',
      desc: 'Estúdio privado, material descartável, o dia é reservado para o seu atendimento.',
      meta: 'Sala reservada · 1–8h',
    },
    {
      n: 'IV',
      title: 'Cicatrização',
      desc: 'Você sai com uma cartilha de cuidados e meu contato direto, podendo me contatar a qualquer horário sobre as mais diversas dúvidas. Retoque dentro de 60 dias, se necessário, é por minha conta.',
      meta: 'Pós · 14–30 dias',
    },
  ];

  return (
    <section className="process" id="processo">
      <div className="wrap">
        <div className="sec-head reveal">
          <h2>O <em>ritual</em><br />da agulha</h2>
          <div className="right">
            <span className="mono">· CAP. III — PROCESSO</span>
            <p>
              Uma tatuagem boa começa muito antes da máquina ligar. Veja como trabalhamos juntos, da primeira conversa ao cuidado final.
            </p>
          </div>
        </div>

        <div className="process-grid reveal">
          {steps.map((s) => (
            <div className="p-step" key={s.n}>
              <div>
                <div className="p-n">{s.n}</div>
                <h3 className="p-title">{s.title}</h3>
                <p className="p-desc">{s.desc}</p>
              </div>
              <div className="p-meta mono">{s.meta}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
