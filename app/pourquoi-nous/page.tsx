import type { Metadata } from "next";
import Link from "next/link";
import { CtaPanel, Features, PhotoStack, Quote, Steps } from "@/components/Blocks";
import Counter from "@/components/Counter";
import Hero from "@/components/Hero";
import Wave from "@/components/Wave";
import { pages, stats } from "@/lib/content";
import s from "./page.module.css";

const c = pages.pourquoi;
export const metadata: Metadata = { title: c.title };

export default function Pourquoi() {
  return (
    <>
      <Hero compact flocks={2} l1={c.hero.l1} l2={c.hero.l2} text={c.hero.p} />
      <Wave overlap to="var(--night)" variant="swell" />

      <section className="dark" id="chiffres">
        <div className={`wrap ${s.stats}`}>
          {stats.map((x) => (
            <div key={x.label}>
              <Counter to={x.n} suffix={x.suffix} />
              {x.label}
            </div>
          ))}
        </div>
      </section>
      <Wave from="var(--night)" to="var(--sand)" variant="dune" />

      <section className="sand">
        <div className="wrap">
          <h2>{c.approach.h2}</h2>
          <div className={s.approach}>
            {c.approach.items.map((a) => (
              <div key={a.title}>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
          <Link className="btn" href="/mon-safari">Composer mon voyage</Link>
        </div>
      </section>
      <section className="editorial sand">
        <div className="wrap split">
          <div>
            <span className="eyebrow">{c.philo.eyebrow}</span>
            <h2>{c.philo.h2}</h2>
            <p className="lead">{c.philo.lead}</p>
            <p>{c.philo.paras[0]}</p>
          </div>
          <PhotoStack img={c.philo.imgs[0]} />
        </div>
      </section>
      <Wave from="var(--sand)" to="var(--night)" variant="ripple" />

      <section className="editorial dark">
        <div className="wrap">
          <span className="eyebrow">{c.features.eyebrow}</span>
          <h2>{c.features.h2}</h2>
          <Features items={c.features.features} />
        </div>
      </section>
      <Wave from="var(--night)" to="var(--sand)" variant="crest" />

      <section className="editorial sand">
        <div className="wrap">
          <span className="eyebrow">{c.steps.eyebrow}</span>
          <h2>{c.steps.h2}</h2>
          <Steps items={c.steps.steps} />
        </div>
      </section>
      <Wave from="var(--sand)" to="var(--night)" variant="dune" flip />

      <Quote text={c.quote.text} cite={c.quote.cite} />
      <Wave from="var(--night)" to="var(--bg)" variant="swell" />

      <section className="editorial">
        <div className="wrap">
          <CtaPanel cta={c.cta.cta} />
        </div>
      </section>
      <Wave from="var(--bg)" to="var(--deep)" variant="ripple" flip />
    </>
  );
}
