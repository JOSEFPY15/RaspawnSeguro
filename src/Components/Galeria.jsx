// Fotos disponibles en public/img; Vite las sirve con la ruta /img/.
const images = [
  {
    file: "A1.jpeg",
    alt: "Laptop gamer con escudo azul de protección en la pantalla",
  },
  {
    file: "A2.jpeg",
    alt: "Estación de streaming con micrófono, cámara y controles de privacidad",
  },
  {
    file: "A3.jpeg",
    alt: "Grupo de gamers conectado dentro de un escudo digital",
  },
  { file: "A4.jpeg", alt: "Jugador con audífonos frente a su equipo de juego" },
  {
    file: "A5.jpeg",
    alt: "Estudiantes utilizando tabletas en una actividad digital",
  },
  { file: "A6.jpeg", alt: "Manos usando un control de videojuegos" },
  { file: "A7.jpeg", alt: "Streamer descansando durante una transmisión" },
  {
    file: "A8.jpeg",
    alt: "Ilustración de un gamer junto a un escudo de seguridad",
  },
  { file: "A9.jpeg", alt: "Espacio gamer iluminado frente a una computadora" },
  {
    file: "A10.jpeg",
    alt: "Ilustración sobre amenazas digitales en los videojuegos",
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
            <span className="album-count">{images.length} FOTOGRAFÍAS</span>
          </header>

          {/* Cada hipervínculo abre la fotografía original en su tamaño completo. */}
          <div className="album-grid">
            {images.map((image, index) => {
              const imagePath = `/img/${image.file}`;

              return (
                <a
                  className={`album-image-link${index === 0 ? " album-image-featured" : ""}`}
                  href={imagePath}
                  key={image.file}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Abrir fotografía ${index + 1}: ${image.alt}`}
                >
                  <img src={imagePath} alt={image.alt} loading="lazy" />
                  <span className="album-image-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </a>
              );
            })}
          </div>

          <footer className="album-footer">
            <span>Momentos del mundo gamer</span>
            <span className="album-footer-status">
              <i /> Álbum completo
            </span>
          </footer>
        </div>
      </div>
    </section>
  );
}

export default Galeria;
