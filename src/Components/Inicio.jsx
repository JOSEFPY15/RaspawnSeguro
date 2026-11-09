function Inicio() {
  return (
    <section id="inicio" className="hero-section section-wrap">
      <div className="hero-copy reveal">
        <p className="eyebrow">
          <span className="status-dot" /> Ciberseguridad para la vida gamer
        </p>
        <h1>
          Bienvenido a
          <br />
          <span>Respawn Seguro.</span>
        </h1>
        <p className="hero-description">
          Tu próxima partida, más segura. Protege tus cuentas, tus dispositivos
          y la comunidad que construiste con seguridad digital fácil de
          entender.
        </p>
        <div className="hero-actions">
          {/* Hipervínculos internos: llevan a Servicios y Sobre nosotros mediante sus anclas. */}
          <a className="button button-primary" href="#servicios">
            Explorar servicios <span aria-hidden="true">↗</span>
          </a>
          <a className="text-link" href="#sobre-nosotros">
            Conoce Respawn Seguro <span aria-hidden="true">↓</span>
          </a>
        </div>
        <div className="hero-note">
          <span className="note-mark">01</span>
          <span>Menos riesgos. Más tiempo para jugar.</span>
        </div>
      </div>
      {/* Ilustración SVG propia para mantener el hero ligero y coherente con la marca. */}
      <div
        className="hero-visual reveal"
        aria-label="Ilustración de una cuenta gamer protegida"
        role="img"
      >
        <div className="visual-orbit orbit-one" />
        <div className="visual-orbit orbit-two" />
        <div className="visual-glow" />
        <div className="shield-card">
          <div className="shield-topline">
            <span>RESPAWN / SECURE</span>
            <span className="live-pill">● ACTIVO</span>
          </div>
          <svg className="hero-shield" viewBox="0 0 180 190" aria-hidden="true">
            <path
              d="M90 10 155 35v51c0 42-26 71-65 94C51 157 25 128 25 86V35L90 10Z"
              fill="url(#shieldFill)"
              stroke="url(#shieldStroke)"
              strokeWidth="3"
            />
            <path
              d="m58 95 21 21 44-48"
              fill="none"
              stroke="#fff"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="9"
            />
            <defs>
              <linearGradient
                id="shieldFill"
                x1="35"
                y1="30"
                x2="145"
                y2="160"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4CB5FF" stopOpacity=".3" />
                <stop offset="1" stopColor="#113C74" stopOpacity=".16" />
              </linearGradient>
              <linearGradient
                id="shieldStroke"
                x1="27"
                y1="26"
                x2="157"
                y2="160"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#8DD7FF" />
                <stop offset="1" stopColor="#347EF2" />
              </linearGradient>
            </defs>
          </svg>
          <div className="shield-caption">
            <span className="caption-check">✓</span>
            <span>
              <strong>Cuenta protegida</strong>
              <small>Todo bajo control</small>
            </span>
            <span className="caption-arrow">↗</span>
          </div>
        </div>
        <div className="float-card float-card-top">
          <span className="float-icon">⌁</span>
          <span>
            <small>ACCESO</small>
            <strong>Verificado</strong>
          </span>
        </div>
        <div className="float-card float-card-bottom">
          <span className="signal-bars">
            <i />
            <i />
            <i />
          </span>
          <span>
            <small>ESTADO DE SEGURIDAD</small>
            <strong>En línea y protegido</strong>
          </span>
        </div>
        <span className="visual-coordinate">19°25′ N&nbsp; 99°08′ O</span>
      </div>
      <a
        className="scroll-cue"
        href="#sobre-nosotros"
        aria-label="Desplazarse a Sobre nosotros"
      >
        <span /> Desliza para explorar
      </a>
    </section>
  );
}

export default Inicio;
