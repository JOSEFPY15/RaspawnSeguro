import LogoInteractivo from "./LogoInteractivo.jsx";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top section-wrap">
        <LogoInteractivo className="footer-brand" />
        <p>
          Cuida tu cuenta.
          <br />
          Cuida tu comunidad.
        </p>
        <a className="back-top" href="#inicio">
          Volver arriba <span aria-hidden="true">↑</span>
        </a>
      </div>
      <nav
        className="footer-links section-wrap"
        aria-label="Enlaces del pie de página"
      >
        <a href="#contacto">Contacto</a>
        <a href="#redes-sociales">Redes sociales</a>
        <a href="#aviso-privacidad">Aviso de privacidad</a>
      </nav>
      <div className="footer-bottom section-wrap">
        <span>© 2026 Respawn Seguro</span>
        <span>Proyecto demostrativo de ciberseguridad gamer.</span>
        <a href="#aviso-privacidad">Privacidad</a>
      </div>
      <p className="footer-credit section-wrap">
        Página creada por <strong>Josef Alexander Sánchez Matinez</strong>
      </p>
    </footer>
  );
}

export default Footer;
