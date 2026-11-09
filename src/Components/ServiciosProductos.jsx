const services = [
  {
    number: "01",
    icon: "⌘",
    title: "Cuentas bajo control",
    text: "Fortalece accesos, activa la verificación en dos pasos y prepara opciones de recuperación.",
  },
  {
    number: "02",
    icon: "◉",
    title: "Streaming con privacidad",
    text: "Revisa lo que compartes en directo y configura tus canales con más tranquilidad.",
  },
  {
    number: "03",
    icon: "⌁",
    title: "Dispositivos protegidos",
    text: "Buenas prácticas para mantener seguros y actualizados tus equipos de juego y creación.",
  },
  {
    number: "04",
    icon: "✳",
    title: "Comunidades cuidadas",
    text: "Mejora permisos, moderación y prevención de fraudes en tus servidores y canales.",
  },
];

function ServiciosProductos() {
  return (
    <section id="servicios" className="services-section section-wrap">
      <div className="section-title-row reveal">
        <div>
          <p className="eyebrow">
            SERVICIOS Y PRODUCTOS <span className="eyebrow-line" />
          </p>
          <h2>
            Protección para tu
            <br />
            <span>universo digital.</span>
          </h2>
        </div>
        <p className="title-aside">
          Soluciones concretas para cada forma de jugar, crear y compartir.
        </p>
      </div>
      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card reveal" key={service.number}>
            <div className="service-card-top">
              <span className="service-icon" aria-hidden="true">
                {service.icon}
              </span>
              <span>{service.number}</span>
            </div>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
            <a
              href="#contacto"
              aria-label={`Consultar sobre ${service.title}`}
              className="card-arrow"
            >
              ↗
            </a>
          </article>
        ))}
      </div>
      <div className="services-footnote">
        <span className="blue-dot" /> Asesoría clara, a tu ritmo y sin
        tecnicismos innecesarios.
      </div>

      {/* Tabla HTML semántica para comparar de un vistazo los servicios y sus públicos. */}
      <div
        className="service-table-wrap reveal"
        tabIndex="0"
        aria-label="Tabla de comparación de servicios; desplázate horizontalmente si es necesario"
      >
        <table className="service-table">
          <caption>Resumen de servicios de Respawn Seguro</caption>
          <thead>
            <tr>
              <th scope="col">Servicio</th>
              <th scope="col">Qué revisamos</th>
              <th scope="col">Ideal para</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Cuentas</th>
              <td>Accesos, verificación en dos pasos y recuperación</td>
              <td>Gamers y creadores</td>
            </tr>
            <tr>
              <th scope="row">Streaming</th>
              <td>Privacidad, alertas y configuración del canal</td>
              <td>Streamers</td>
            </tr>
            <tr>
              <th scope="row">Dispositivos</th>
              <td>Actualizaciones y hábitos de protección</td>
              <td>Equipos de juego</td>
            </tr>
            <tr>
              <th scope="row">Comunidades</th>
              <td>Permisos, moderación y prevención de fraudes</td>
              <td>Moderadores y equipos</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default ServiciosProductos;
