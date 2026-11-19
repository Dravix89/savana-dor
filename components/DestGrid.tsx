import { destinations } from "@/lib/content";
import s from "./DestGrid.module.css";

export default function DestGrid() {
  return (
    <div className={s.dest}>
      {destinations.map((d) => (
        <article className={s.card} key={d.name}>
          <h3>{d.name}</h3>
          <small>{d.place}</small>
          <p>{d.text}</p>
          <span className={s.dur}>{d.days}</span>
        </article>
      ))}
    </div>
  );
}
