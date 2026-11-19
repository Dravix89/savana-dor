import Image from "next/image";
import Link from "next/link";
import type { Cta, Feature, Img, Step, Tile } from "@/lib/content";

export function Features({ items, className = "" }: { items: Feature[]; className?: string }) {
  return (
    <div className={`feature-list ${className}`}>
      {items.map((f) => (
        <article className="feature" key={f.title}>
          <b>{f.title}</b>
          <p>{f.text}</p>
        </article>
      ))}
    </div>
  );
}

export function Steps({ items }: { items: Step[] }) {
  return (
    <div className="step-row">
      {items.map((st) => (
        <article className="step" key={st.n}>
          <span>{st.n}</span>
          <h3>{st.title}</h3>
          <p>{st.text}</p>
        </article>
      ))}
    </div>
  );
}

export function Tiles({ items }: { items: Tile[] }) {
  return (
    <div className="tile-grid">
      {items.map((t) => (
        <article className="image-tile" key={t.title}>
          <Image src={t.img} alt={t.alt} width={900} height={600} sizes="(max-width: 760px) 100vw, 33vw" />
          <div>
            <h3>{t.title}</h3>
            <p>{t.text}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

export function Quote({ text, cite }: { text: string; cite: string }) {
  return (
    <section className="quote-band">
      <blockquote>{text}</blockquote>
      <p>{cite}</p>
    </section>
  );
}

export function CtaPanel({ cta }: { cta: Cta }) {
  return (
    <div className="cta-panel">
      <div>
        <h2>{cta.title}</h2>
        <p>{cta.text}</p>
      </div>
      <Link className="btn" href={cta.href}>
        {cta.label}
      </Link>
    </div>
  );
}

export function PhotoStack({ img }: { img: Img }) {
  return (
    <div className="photo-stack">
      <Image src={img.src} alt={img.alt} width={1100} height={900} sizes="(max-width: 900px) 100vw, 50vw" />
    </div>
  );
}

export function PhotoGrid({ imgs }: { imgs: Img[] }) {
  return (
    <div className="photo-grid">
      {imgs.map((i) => (
        <Image key={i.src} src={i.src} alt={i.alt} width={1000} height={800} sizes="(max-width: 900px) 60vw, 30vw" />
      ))}
    </div>
  );
}
