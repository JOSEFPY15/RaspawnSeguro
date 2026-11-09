const socialNetworks = ["Twitch", "YouTube", "Instagram", "TikTok", "Discord"];

function RedesSociales() {
  return (
    <section id="redes-sociales" className="social-section section-wrap">
      <div>
        <p className="eyebrow">
          SIGAMOS EN CONTACTO <span className="eyebrow-line" />
        </p>
        <h2>
          Nos vemos <span>en línea.</span>
        </h2>
      </div>
      <div className="social-list">
        {socialNetworks.map((network) => (
          <span className="social-placeholder" key={network}>
            {network}
            <small>Próximamente</small>
          </span>
        ))}
      </div>
    </section>
  );
}

export default RedesSociales;
