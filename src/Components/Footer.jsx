function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top section-wrap">
        <a className="footer-brand" href="#inicio">
          <img src="/img/respawn-seguro-logo.svg" alt="Respawn Seguro" />
        </a>
        <p>
          Cuida tu cuenta.
          <br />
          Cuida tu comunidad.
        </p>
        <a className="back-top" href="#inicio">
          Volver arriba <span aria-hidden="true">↑</span>
        </a>
      </div>
      <div className="footer-bottom section-wrap">
        <span>© 2026 Respawn Seguro</span>
        <span>Proyecto demostrativo de ciberseguridad gamer.</span>
        <a href="#aviso-privacidad">Privacidad</a>
      </div>
    </footer>
  );
}

export default Footer;
