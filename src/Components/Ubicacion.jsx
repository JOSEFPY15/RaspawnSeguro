function Ubicacion() {
  return (
    <section
      id="ubicacion"
      className="location-section section-wrap"
      aria-labelledby="location-title"
    >
      <div className="location-copy">
        <p className="eyebrow">
          UBICACIÓN <span className="eyebrow-line" />
        </p>
        <h2 id="location-title">
          Ubicación de
          <br />
          <span>referencia.</span>
        </h2>
        <p>
          El mapa muestra CrowdStrike Spain S.L. en Madrid, ubicación de
          referencia compartida para este proyecto. No es una oficina de Respawn
          Seguro.
        </p>
        <a
          className="text-link"
          href="https://maps.google.com/?q=CrowdStrike+Spain+S.L.,+Madrid"
          target="_blank"
          rel="noreferrer"
        >
          Abrir ubicación en Google Maps <span aria-hidden="true">↗</span>
        </a>
      </div>

      {/* Mapa incrustado: conserva la ubicación proporcionada por el usuario. */}
      <div className="location-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3036.7984130170144!2d-3.6856218237311644!3d40.43546245449863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4229000f8e1d91%3A0x6aacc0da4b6612c6!2sCrowdStrike%20Spain%20S.L.!5e0!3m2!1ses-419!2smx!4v1794233284051!5m2!1ses-419!2smx"
          title="Mapa de referencia: CrowdStrike Spain S.L., Madrid"
          loading="eager"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </section>
  );
}

export default Ubicacion;
