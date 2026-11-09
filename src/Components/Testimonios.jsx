// Reseñas de muestra con personajes inventados; reemplazar por comentarios reales con permiso.
const testimonials = [
  {
    name: "Valeria Cruz",
    role: "Streamer · testimonio ficticio",
    quote:
      "La atención fue muy buena y por fin entendí cómo cuidar la privacidad de mis transmisiones.",
    rating: 5,
  },
  {
    name: "Mateo Ríos",
    role: "Gamer · testimonio ficticio",
    quote:
      "La página es muy buena: encontré consejos claros para proteger mis cuentas y recuperar accesos.",
    rating: 5,
  },
  {
    name: "Fernanda López",
    role: "Moderadora · testimonio ficticio",
    quote:
      "Nos ayudó a pensar mejor los permisos y las reglas de seguridad de nuestra comunidad.",
    rating: 5,
  },
];

function Testimonios() {
  return (
    <section id="testimonios" className="testimonial-section">
      <div className="section-wrap testimonial-inner">
        <div className="testimonial-heading reveal">
          <p className="eyebrow eyebrow-light">
            VOCES DE LA COMUNIDAD <span className="eyebrow-line" />
          </p>
          <h2>
            Confianza que se construye <span>en equipo.</span>
          </h2>
          <p className="testimonial-note">
            Los siguientes testimonios son ejemplos ficticios creados para el
            proyecto; no son opiniones de clientes reales.
          </p>
        </div>

        {/* Tarjetas de testimonio: nombre, perfil, comentario y calificación. */}
        <div className="testimonial-grid">
          {testimonials.map((testimonial) => (
            <article className="testimonial-card reveal" key={testimonial.name}>
              <div
                className="testimonial-stars"
                role="img"
                aria-label={`Calificación de ${testimonial.rating} de 5 estrellas`}
              >
                {"★".repeat(testimonial.rating)}
              </div>
              <blockquote>“{testimonial.quote}”</blockquote>
              <div className="quote-attribution">
                <span className="quote-avatar" aria-hidden="true">
                  {testimonial.name
                    .split(" ")
                    .map((part) => part[0])
                    .join("")}
                </span>
                <span>
                  <strong>{testimonial.name}</strong>
                  <small>{testimonial.role}</small>
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonios;
