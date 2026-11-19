import type { Metadata } from "next";
import AnimalGrid from "@/components/AnimalGrid";
import { CtaPanel, Features, PhotoStack, Quote, Steps, Tiles } from "@/components/Blocks";
import Hero from "@/components/Hero";
import Wave from "@/components/Wave";
import { pages } from "@/lib/content";
import s from "./page.module.css";

const c = pages.animaux;
export const metadata: Metadata = { title: c.title };

export default function Animaux() {
  return (
    <>
      <Hero compact flocks={1} l1={c.hero.l1} l2={c.hero.l2} text={c.hero.p} />
      <Wave overlap to="var(--night)" variant="swell" />

      <section className={`dark ${s.faune}`} id="faune">
        <div className="wrap">
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
            <Features items={c.split.features} className={s.twoCols} />
          </div>
          <PhotoStack img={c.split.imgs[0]} />
        </div>
      </section>
      <Wave from="var(--sand)" to="var(--night)" variant="ripple" />

      <section className="editorial dark">
        <div className="wrap">
          <span className="eyebrow">{c.eco.eyebrow}</span>
          <h2>{c.eco.h2}</h2>
          <p className="lead">{c.eco.lead}</p>
          <Tiles items={c.eco.tiles} />
        </div>
      </section>
      <Quote text={c.quote.text} cite={c.quote.cite} />
      <Wave from="var(--night)" to="var(--sand)" variant="crest" />

      <section className="editorial sand">
        <div className="wrap">
          <span className="eyebrow">{c.steps.eyebrow}</span>
          <h2>{c.steps.h2}</h2>
          <Steps items={c.steps.steps} />
          <CtaPanel cta={c.steps.cta} />
        </div>
      </section>
      <Wave from="var(--sand)" to="var(--deep)" variant="swell" flip />
    </>
  );
}
