function SobreNosotros() {
  return (
    <section
      id="sobre-nosotros"
      className="about-section section-wrap section-grid"
    >
      <div className="section-heading reveal">
        <p className="eyebrow">
          QUIÉNES SOMOS <span className="eyebrow-line" />
        </p>
        <h2>
          La seguridad también es parte del <span>juego.</span>
        </h2>
      </div>
      <div className="about-copy reveal">
        <p className="large-copy">
          Respawn Seguro nace para que gamers y creadores puedan disfrutar lo
          digital con más confianza.
        </p>
        <p>
          Hacemos que la ciberseguridad sea práctica y fácil de entender.
          Revisamos contigo tus hábitos, herramientas y espacios compartidos
          para ayudarte a tomar mejores decisiones.
        </p>
        <a className="text-link" href="#mision-vision">
          Nuestra forma de ver la seguridad <span aria-hidden="true">↗</span>
        </a>
      </div>
      <div className="about-bottom reveal">
        <span>01 — 03</span>
        <span className="about-rule" />
        <span>Protección pensada para personas, no solo para sistemas.</span>
      </div>
    </section>
  );
}

export default SobreNosotros;
