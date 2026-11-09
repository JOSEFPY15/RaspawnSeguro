function Multimedia() {
  return (
    <section id="multimedia" className="media-section section-wrap">
      <div className="media-feature reveal">
        <div className="media-copy">
          <p className="eyebrow">
            RECURSO MULTIMEDIA <span className="eyebrow-line" />
          </p>
          <h3>
            Una capa extra
            <br />
            <span>para tus cuentas.</span>
          </h3>
          <p>
            Video de YouTube Creators con recomendaciones para proteger un canal
            y activar la verificación en dos pasos.
          </p>
          {/* Hipervínculo externo alternativo al reproductor incrustado. */}
          <a
            className="text-link"
            href="https://www.youtube.com/watch?v=5FQWAFaC-tY"
            target="_blank"
            rel="noreferrer"
          >
            Ver en YouTube <span aria-hidden="true">↗</span>
          </a>
        </div>

        {/* Iframe multimedia: incorpora el reproductor de YouTube dentro de la página. */}
        <div className="video-frame">
          <iframe
            src="https://www.youtube-nocookie.com/embed/5FQWAFaC-tY"
            title="YouTube: protege tu cuenta con la verificación en dos pasos"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}

export default Multimedia;
