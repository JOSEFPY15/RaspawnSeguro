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
            Este sitio es un proyecto demostrativo de Respawn Seguro. Si envías
            el formulario, tu nombre o alias, correo electrónico, tema y mensaje
            se transmiten al endpoint de Formspree configurado en el proyecto
            para procesar la consulta. El acceso, almacenamiento y conservación
            de esos datos dependen de la configuración de ese servicio.
          </p>
          <p>
            No incluyas contraseñas ni información sensible. Antes de usar este
            formulario con clientes reales, la persona responsable del sitio
            debe confirmar el endpoint, definir el tratamiento y el periodo de
            conservación, y completar este aviso con sus datos de contacto y los
            medios para ejercer los derechos correspondientes. Los nombres de
            redes mostrados en este proyecto son ejemplos y no representan
            cuentas oficiales activas.
          </p>
        </div>
      </details>
    </section>
  );
}

export default AvisoPrivacidad;
