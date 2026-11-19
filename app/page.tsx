import type { Metadata } from "next";
import Link from "next/link";
import AnimalGrid from "@/components/AnimalGrid";
import { CtaPanel, Features, PhotoGrid, Quote } from "@/components/Blocks";
import DestGrid from "@/components/DestGrid";
import Hero from "@/components/Hero";
import Wave from "@/components/Wave";
import { pages } from "@/lib/content";
import s from "./page.module.css";

const c = pages.home;
export const metadata: Metadata = { title: c.title };

export default function Home() {
  return (
    <>
      <Hero l1={c.hero.l1} l2={c.hero.l2} text={c.hero.p} flocks={3}>
        <Link className="btn" href="/mon-safari">Composer mon voyage</Link>
      </Hero>
      <Wave overlap to="var(--bg)" variant="swell" />

      <section id="dest">
        <div className="wrap">
          <h2>{c.dest.h2}</h2>
          <p className="lead">{c.dest.lead}</p>
          <DestGrid />
        </div>
      </section>
      <Wave from="var(--bg)" to="var(--night)" variant="ripple" />

      <section className="dark" id="faune">
        <div className="wrap">
          <h2 className={s.goldTitle}>{c.faune.h2}</h2>
          <p className="lead">{c.faune.lead}</p>
          <AnimalGrid />
        </div>
      </section>
      <Wave from="var(--night)" to="var(--sand)" variant="dune" />

      <section className="editorial sand">
        <div className="wrap split">
          <div>
            <span className="eyebrow">{c.split.eyebrow}</span>
            <h2>{c.split.h2}</h2>
            <p className="lead">{c.split.lead}</p>
            <Link className="btn" href="/pourquoi-nous">Découvrir notre approche</Link>
          </div>
          <PhotoGrid imgs={c.split.imgs} />
        </div>
      </section>
      <Wave from="var(--sand)" to="var(--night)" variant="crest" />

      <Quote text={c.quote.text} cite={c.quote.cite} />
      <section className="editorial dark">
        <div className="wrap">
          <span className="eyebrow">{c.exp.eyebrow}</span>
          <h2>{c.exp.h2}</h2>
          <Features items={c.exp.features} />
          <CtaPanel cta={c.exp.cta} />
        </div>
      </section>
      <Wave from="var(--night)" to="var(--deep)" variant="ripple" flip />
    </>
  );
}
