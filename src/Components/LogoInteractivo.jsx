import { useEffect, useId, useRef, useState } from "react";

function LogoInteractivo({ className = "" }) {
  const [open, setOpen] = useState(false);
  const titleId = useId();
  const triggerRef = useRef(null);
  const dialogRef = useRef(null);

  // Abre el visor nativo y evita que el contenido del fondo se desplace.
  useEffect(() => {
    if (!open) return undefined;

    const dialog = dialogRef.current;
    dialog?.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  function closeViewer() {
    dialogRef.current?.close();
  }

  return (
    <>
      <button
        ref={triggerRef}
        className={`logo-trigger ${className}`.trim()}
        type="button"
        aria-label="Ver el logotipo de Respawn Seguro en pantalla completa"
        onClick={() => setOpen(true)}
      >
        <img src="/img/respawn-seguro-logo.svg" alt="Respawn Seguro" />
      </button>

      <dialog
        ref={dialogRef}
        className="logo-lightbox"
        aria-labelledby={titleId}
        onClose={() => {
          setOpen(false);
          triggerRef.current?.focus();
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) closeViewer();
        }}
      >
        <div className="logo-lightbox-toolbar">
          <span id={titleId}>Respawn Seguro</span>
          <button
            className="logo-lightbox-close"
            type="button"
            aria-label="Cerrar vista del logotipo"
            onClick={closeViewer}
          >
            <span aria-hidden="true">×</span> Cerrar
          </button>
        </div>
        <div className="logo-lightbox-content">
          <img
            src="/img/respawn-seguro-logo.svg"
            alt="Logotipo de Respawn Seguro en tonos azules"
          />
          <p>Presiona Escape o toca fuera del logotipo para cerrar.</p>
        </div>
      </dialog>
    </>
  );
}

export default LogoInteractivo;
