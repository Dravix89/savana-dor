"use client";

import { useEffect, useState } from "react";
import s from "./ScrollUp.module.css";

const R = 24;
const C = 2 * Math.PI * R;

export default function ScrollUp() {
  const [p, setP] = useState(0); // progression du scroll, de 0 à 1

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setP(max > 0 ? Math.min(window.scrollY / max, 1) : 0);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const visible = p > 0.05;

  return (
    <button
      type="button"
      className={`${s.btn} ${visible ? s.show : ""}`}
      aria-label="Remonter en haut de la page"
      tabIndex={visible ? 0 : -1}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <svg className={s.ring} viewBox="0 0 54 54" aria-hidden="true">
        <circle className={s.track} cx="27" cy="27" r={R} />
        <circle className={s.bar} cx="27" cy="27" r={R} strokeDasharray={C} strokeDashoffset={C * (1 - p)} />
      </svg>
      <svg className={s.arrow} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
