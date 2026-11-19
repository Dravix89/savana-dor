"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { flocks as birdsData } from "./birds"; // <-- On renomme l'import pour éviter le conflit

type Props = {
  l1: string;
  l2: string;
  text: string;
  /** Héros plus bas, pour les pages secondaires */
  compact?: boolean;
  /** Nombre de volées d'oiseaux (1 à 3) */
  flocks?: 1 | 2 | 3;
  children?: ReactNode;
};

export default function Hero({
  l1,
  l2,
  text,
  compact,
  flocks: n = 2,
  children,
}: Props) {
  const bg = useRef<HTMLDivElement>(null);

  // Parallaxe douce sur l'image de fond
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let raf = 0;
    const tick = () => {
      raf = 0;
      const y = window.scrollY;
      if (bg.current && y < window.innerHeight * 1.2) {
        bg.current.style.transform = `translateY(${y * 0.25}px) scale(${1 + y / 6000})`;
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <header className={`hero${compact ? " page-hero" : ""}`}>
      <div
        className="bg"
        ref={bg}
        style={{ backgroundImage: "url(/golden-bg.png)" }}
      />
      <svg
        width="0"
        height="0"
        style={{ position: "absolute" }}
        aria-hidden="true"
      >
        <defs>
          <symbol id="bird" viewBox="0 0 20 8">
            <path d="M0 2q5-2 10 3 5-5 10-3-5 0-10 6Q5 2 0 2z" />
          </symbol>
        </defs>
      </svg>
      {/* On utilise birdsData et on ajoute l'index pour régler définitivement l'erreur de clé unique */}
      {birdsData.slice(0, n).map((f, index) => (
        <svg
          key={index}
          className={`birds ${f.cls}`}
          viewBox={f.vb}
          aria-hidden="true"
        >
          {f.b.map(([x, y, w]) => (
            <use
              key={`${x}-${y}`}
              href="#bird"
              x={x}
              y={y}
              width={w}
              height={w * 0.4}
            />
          ))}
        </svg>
      ))}
      <div className="in">
        <h1>
          {l1}
          <span>{l2}</span>
        </h1>
        <p>{text}</p>
        {children}
      </div>
    </header>
  );
}
