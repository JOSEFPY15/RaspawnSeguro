import { useState } from "react";

// Sustituye este endpoint por el identificador de tu propio formulario en Formspree.
const FORM_ENDPOINT = "https://formspree.io/f/xnpndnwp";

function Contacto() {
  const [submitState, setSubmitState] = useState("idle");

  // Envía los campos a Formspree y muestra si el servicio aceptó la solicitud.
  async function enviarFormulario(event) {
    event.preventDefault();
    setSubmitState("sending");

    const form = event.currentTarget;

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (!response.ok) {
        throw new Error("El servicio rechazó el envío.");
      }

      form.reset();
      setSubmitState("success");
    } catch {
      setSubmitState("error");
    }
  }

  return (
    <section id="contacto" className="contact-section section-wrap">
      <div className="contact-copy reveal">
        <p className="eyebrow">
          FORMULARIO DE CONTACTO <span className="eyebrow-line" />
        </p>
        <h2>
          ¿Listo para jugar
          <br />
          <span>con más confianza?</span>
        </h2>
        <p>
          Cuéntanos qué quieres proteger y te orientaremos sobre el siguiente
          paso.
        </p>
        <a className="contact-email" href="mailto:hola@respawnseguro.example">
          hola@respawnseguro.example <span aria-hidden="true">↗</span>
        </a>
        <small className="demo-note">
          Correo de ejemplo para el proyecto escolar.
        </small>
      </div>
      {/* Formulario conectado al endpoint de Formspree configurado arriba. */}
      <form
        className="contact-form mx-auto max-w-2xl"
        action={FORM_ENDPOINT}
        method="post"
        onSubmit={enviarFormulario}
      >
        <label htmlFor="contact-name">Nombre o alias</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          placeholder="¿Cómo te llamamos?"
          autoComplete="name"
          required
        />
        <label htmlFor="contact-email">Correo electrónico</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          placeholder="tu@correo.com"
          autoComplete="email"
          required
        />
        <label htmlFor="contact-topic">¿En qué te podemos ayudar?</label>
        <select id="contact-topic" name="topic" defaultValue="" required>
          <option value="" disabled>
            Elige un tema
          </option>
          <option>Proteger mis cuentas</option>
          <option>Seguridad para streaming</option>
          <option>Dispositivos y equipos</option>
          <option>Seguridad de comunidad</option>
          <option>Otra consulta</option>
        </select>
        <label htmlFor="contact-message">Mensaje</label>
        <textarea
          id="contact-message"
          name="message"
          rows="3"
          placeholder="Cuéntanos un poco más…"
          required
        />
        <div className="form-bottom">
          <label className="consent-label">
            <input
              type="checkbox"
              name="privacyAccepted"
              value="yes"
              required
            />
            <span>
              He leído el <a href="#aviso-privacidad">aviso de privacidad</a>.
            </span>
          </label>
          <button
            className="button button-primary"
            type="submit"
            disabled={submitState === "sending"}
          >
            {submitState === "sending" ? "Enviando…" : "Enviar consulta"}
            {submitState !== "sending" && <span aria-hidden="true">↗</span>}
          </button>
        </div>
        <p className="form-note" aria-live="polite" role="status">
          {submitState === "success" &&
            "Listo, tu mensaje se envió correctamente."}
          {submitState === "error" &&
            "No se pudo enviar. Revisa tu conexión y que el endpoint de Formspree esté activo."}
          {submitState === "idle" &&
            "Tus datos se enviarán al servicio de contacto configurado."}
        </p>
      </form>
    </section>
  );
}

export default Contacto;
