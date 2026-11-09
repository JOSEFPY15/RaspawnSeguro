const audiences = [
  ["01", "Gamers", "Cuentas, compras y equipos de juego"],
  ["02", "Streamers", "Privacidad y canales de transmisión"],
  ["03", "Equipos esports", "Hábitos seguros para cada integrante"],
  ["04", "Comunidades", "Espacios digitales más protegidos"],
];

function Clientes() {
  return (
    <section id="clientes" className="clients-section section-wrap">
      <div className="clients-intro reveal">
        <p className="eyebrow">
          A QUIÉN ACOMPAÑAMOS <span className="eyebrow-line" />
        </p>
        <h2>
          Hecho para quienes
          <br />
          <span>están siempre conectados.</span>
        </h2>
        <p>
          Desde una cuenta personal hasta una comunidad completa: cada espacio
          tiene necesidades distintas.
        </p>
      </div>
      <div className="audience-list">
        {audiences.map(([number, title, detail]) => (
          <article className="audience-row reveal" key={number}>
            <span className="audience-number">{number}</span>
            <h3>{title}</h3>
            <p>{detail}</p>
            <span className="audience-arrow" aria-hidden="true">
              ↗
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Clientes;
