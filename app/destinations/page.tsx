import type { Metadata } from "next";
import { CtaPanel, Features, PhotoStack, Steps, Tiles } from "@/components/Blocks";
import DestGrid from "@/components/DestGrid";
import Hero from "@/components/Hero";
import Wave from "@/components/Wave";
import { pages } from "@/lib/content";
import s from "./page.module.css";

const c = pages.destinations;
export const metadata: Metadata = { title: c.title };

export default function Destinations() {
  return (
    <>
      <Hero compact flocks={2} l1={c.hero.l1} l2={c.hero.l2} text={c.hero.p} />
      <Wave overlap to="var(--bg)" variant="swell" />

      <section id="dest">
        <div className="wrap">
          <DestGrid />
        </div>
      </section>
      <Wave from="var(--bg)" to="var(--sand)" variant="dune" />

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
          <span className="eyebrow">{c.tiles.eyebrow}</span>
          <h2>{c.tiles.h2}</h2>
          <p className="lead">{c.tiles.lead}</p>
          <Tiles items={c.tiles.tiles} />
        </div>
      </section>
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
