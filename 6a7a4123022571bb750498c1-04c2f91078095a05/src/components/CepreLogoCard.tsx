import { useRef, type MouseEvent } from "react";

/**
 * Logo de CEPRE UNI (escudo + divisor + wordmark "ce pre UNI")
 * con efecto de inclinación 3D, glare que sigue el cursor,
 * barrido de brillo al hover y flotación suave en reposo.
 */
export default function CepreLogoCard() {
  const cardRef = useRef<HTMLDivElement>(null);

  const move = (event: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    card.style.setProperty("--cepre-rx", `${((0.5 - y) * 10).toFixed(2)}deg`);
    card.style.setProperty("--cepre-ry", `${((x - 0.5) * 12).toFixed(2)}deg`);
    card.style.setProperty("--cepre-gx", `${(x * 100).toFixed(1)}%`);
    card.style.setProperty("--cepre-gy", `${(y * 100).toFixed(1)}%`);
    card.style.setProperty("--cepre-glare", "1");
  };

  const leave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty("--cepre-rx", "0deg");
    card.style.setProperty("--cepre-ry", "0deg");
    card.style.setProperty("--cepre-glare", "0");
  };

  return (
    <div
      className="cepre-logo-card"
      ref={cardRef}
      onMouseMove={move}
      onMouseLeave={leave}
      role="img"
      aria-label="Logo de CEPRE UNI, Centro de Estudios Preuniversitarios de la Universidad Nacional de Ingeniería"
    >
      <span className="cepre-logo-glare" aria-hidden="true" />
      <span className="cepre-logo-shine" aria-hidden="true" />
      <img
        className="cepre-logo-crest"
        src="https://upload.wikimedia.org/wikipedia/commons/f/f7/Uni-logo_transparente_granate.png"
        alt=""
        loading="lazy"
      />
      <span className="cepre-logo-divider" aria-hidden="true" />
      <span className="cepre-logo-wordmark" aria-hidden="true">
        <i>ce</i>
        <i>pre</i>
        <b>UNI</b>
      </span>
    </div>
  );
}
