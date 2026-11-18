import { useState } from "react";
import LogoInteractivo from "./LogoInteractivo.jsx";

// Cada enlace usa un ancla (id de sección) para saltar directamente a esa parte de la página.
const links = [
  ["Inicio", "#inicio"],
  ["Sobre nosotros", "#sobre-nosotros"],
  ["Misión y visión", "#mision-vision"],
  ["Servicios", "#servicios"],
  ["Clientes", "#clientes"],
  ["Galería", "#galeria"],
  ["Testimonios", "#testimonios"],
  ["Contacto", "#contacto"],
  ["Redes", "#redes-sociales"],
  ["Privacidad", "#aviso-privacidad"],
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="nav-shell" aria-label="Navegación principal">
        <LogoInteractivo className="brand" />
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="nav-links"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <div
          id="nav-links"
          className={`nav-links ${menuOpen ? "is-open" : ""}`}
        >
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <a className="nav-cta" href="#contacto" onClick={closeMenu}>
            Hablemos <span aria-hidden="true">↗</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
