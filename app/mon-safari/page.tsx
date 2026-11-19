import type { Metadata } from "next";
import { Steps, Tiles } from "@/components/Blocks";
import Hero from "@/components/Hero";
import SafariForm from "@/components/SafariForm";
import Wave from "@/components/Wave";
import { pages } from "@/lib/content";

const c = pages.safari;
export const metadata: Metadata = { title: c.title };

export default function MonSafari() {
  return (
    <>
      <Hero compact flocks={1} l1={c.hero.l1} l2={c.hero.l2} text={c.hero.p} />
      <Wave overlap to="var(--sand)" variant="swell" />

      <section className="sand" id="devis">
        <div className="wrap">
          <h2>{c.form.h2}</h2>
          <p className="lead">{c.form.lead}</p>
          <SafariForm />
        </div>
      </section>
      <section className="editorial sand">
        <div className="wrap">
          <span className="eyebrow">{c.tiles.eyebrow}</span>
          <h2>{c.tiles.h2}</h2>
          <p className="lead">{c.tiles.lead}</p>
          <Tiles items={c.tiles.tiles} />
        </div>
      </section>
      <Wave from="var(--sand)" to="var(--night)" variant="ripple" />

      <section className="editorial dark">
        <div className="wrap">
          <span className="eyebrow">{c.steps.eyebrow}</span>
          <h2>{c.steps.h2}</h2>
          <Steps items={c.steps.steps} />
          <p className="muted-note">{c.steps.note}</p>
        </div>
      </section>
      <Wave from="var(--night)" to="var(--deep)" variant="dune" flip />
    </>
  );
}
