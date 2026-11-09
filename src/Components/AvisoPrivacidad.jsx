function AvisoPrivacidad() {
  return (
    <section id="aviso-privacidad" className="privacy-section section-wrap">
      <details className="privacy-details">
        <summary>
          <span>
            <span className="eyebrow">TRANSPARENCIA</span>
            <strong>Aviso de privacidad</strong>
          </span>
          <span className="privacy-plus" aria-hidden="true">
            +
          </span>
        </summary>
        <div className="privacy-copy">
          <p>
            Este sitio es un proyecto demostrativo. El formulario no envía ni
            almacena datos personales y los enlaces sociales aún no están
            activos.
          </p>
          <p>
            Antes de publicar el sitio para una empresa real, este texto deberá
            sustituirse por un aviso completo con la identidad del responsable,
            finalidades, medios para ejercer derechos y datos de contacto.
          </p>
        </div>
      </details>
    </section>
  );
}

export default AvisoPrivacidad;
