export default function Sobre() {
  return (
    <section className="sobre" id="sobre">
      <div className="wrap">
        <div className="sobre-grid reveal">
          <div className="sobre-img">
            <span className="corner c1"></span>
            <span className="corner c2"></span>
            <span className="corner c3"></span>
            <span className="corner c4"></span>
            <div className="frame">
              <img src="/assets/wesley-portrait.png" alt="Wesley Souza - Tatuador autoral especializado em lettering e preto e cinza" />
            </div>
            <div className="badge">
              <span>Wesley Souza · SP</span>
              <span className="r">· EST. 2022</span>
            </div>
          </div>
          <div className="sobre-copy">
            <h2>Entre <em>agulha</em> e história, existe alguém escutando</h2>
            <p>
              <b>Wesley Souza</b> é um tatuador autoral paulistano dedicado ao preto &amp; cinza, ao lettering e à arte geek. Dedicado a ouvir, comprometido a entender diversos estilos, buscando trazer os melhores resultados.
            </p>
            <p>
              O trabalho é feito no tempo certo: conversa, estudo do desenho, sessão sem pressa. Cada tatuagem é <b>desenhada exclusivamente para quem vai levar</b> — não se repete, não sai do catálogo. É sua, do primeiro traço ao último sombreado.
            </p>
            <div className="sobre-sig">
              <span className="signame">W. Souza</span>
              <span className="sigmeta">Tatuador autoral<br />São Paulo · Brasil</span>
            </div>
            <div className="sobre-facts">
              <div className="sobre-fact"><div className="fn">4+</div><div className="fl">Anos na agulha</div></div>
              <div className="sobre-fact"><div className="fn">4</div><div className="fl">Especialidades</div></div>
              <div className="sobre-fact"><div className="fn">100%</div><div className="fl">Arte autoral</div></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
