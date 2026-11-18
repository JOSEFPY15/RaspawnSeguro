import Multimedia from "./Multimedia.jsx";

// Fotos disponibles en public/img; Vite las sirve con la ruta /img/.
const images = [
  {
    file: "A1.jpeg",
    alt: "Estación gamer con monitor, audífonos y escudo de ciberseguridad azul",
    title: "Punto de partida",
    category: "SETUP",
  },
  {
    file: "A2.jpeg",
    alt: "Escritorio de streaming con micrófono, cámara y escudo de seguridad",
    title: "Conexiones que inspiran",
    category: "CREADORES",
  },
  {
    file: "A3.jpeg",
    alt: "Control gamer junto a un candado holográfico de seguridad",
    title: "Juega con confianza",
    category: "SEGURIDAD",
  },
  {
    file: "A4.jpeg",
    alt: "Audífonos y controles gamer en una habitación azul",
    title: "Tu espacio, tus reglas",
    category: "SETUP",
  },
  {
    file: "A5.jpeg",
    alt: "Laptop, monitor y teléfono con iconos de seguridad iluminados",
    title: "Todo bajo control",
    category: "TECNOLOGÍA",
  },
  {
    file: "A6.jpeg",
    alt: "Teléfono y tableta con verificación de seguridad holográfica",
    title: "Protección en movimiento",
    category: "CONEXIÓN",
  },
  {
    file: "A7.jpeg",
    alt: "Espacio gamer visto desde una silla frente a un monitor protegido",
    title: "Listos para la partida",
    category: "COMUNIDAD",
  },
  {
    file: "A8.jpeg",
    alt: "Teclado mecánico con iluminación azul y escudo holográfico",
    title: "Cada tecla cuenta",
    category: "HÁBITOS",
  },
  {
    file: "A9.jpeg",
    alt: "Red segura que conecta una laptop, un router y un control gamer",
    title: "Una red más fuerte",
    category: "CONEXIÓN",
  },
  {
    file: "A10.jpeg",
    alt: "Espacio de trabajo gamer con laptop, control y escudo azul",
    title: "Diseña tu defensa",
    category: "SETUP",
  },
];

function Galeria() {
  return (
    <section id="galeria" className="gallery-section section-wrap">
      <div className="gallery-intro reveal">
        <div>
          <p className="eyebrow">
            GALERÍA <span className="eyebrow-line" />
          </p>
          <h2>
            Un vistazo a
            <br />
            <span>nuestro mundo.</span>
          </h2>
        </div>
        <p>Ideas, partidas y espacios digitales más seguros.</p>
      </div>
      {/* El marco y la interfaz convierten las miniaturas en un álbum dentro de una tablet. */}
      <div className="album-tablet reveal">
        <span className="tablet-camera" aria-hidden="true" />
        <div className="album-screen">
          <header className="album-toolbar">
            <div className="album-heading">
              <span className="album-mark" aria-hidden="true">
                RS
              </span>
              <span>
                <span className="album-kicker">RESPAWN SEGURO</span>
                <h2>Álbum gamer</h2>
              </span>
            </div>
            <div className="album-toolbar-meta">
              <span className="album-count">{images.length} FOTOGRAFÍAS</span>
              <span className="album-year">VOL. 01 / 2024</span>
            </div>
          </header>

          {/* Cada hipervínculo abre la fotografía original en su tamaño completo. */}
          <div className="album-grid">
            {images.map((image, index) => {
              const imagePath = `/img/${image.file}`;

              return (
                <a
                  className="album-image-link"
                  href={imagePath}
                  key={image.file}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Abrir fotografía ${index + 1}: ${image.alt}`}
                >
                  <img src={imagePath} alt={image.alt} loading="lazy" />
                  <span className="album-image-shade" aria-hidden="true" />
                  <span className="album-image-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="album-image-copy">
                    <span>{image.category}</span>
                    <strong>{image.title}</strong>
                  </span>
                  <span className="album-image-open" aria-hidden="true">
                    ↗
                  </span>
                </a>
              );
            })}
          </div>

          <footer className="album-footer">
            <span>
              <b>RESPAWN / ARCHIVE</b> · Momentos del mundo gamer
            </span>
            <span className="album-footer-status">
              <i /> Álbum completo
            </span>
          </footer>
        </div>
      </div>
      <Multimedia />
    </section>
  );
}

export default Galeria;
