import s from "./Wave.module.css";

// Courbes de la vague (viewBox 1440 x 160). Chaque variante a sa propre ondulation.
const CURVES = {
  swell: "M0 96C160 40 340 140 560 100S940 30 1180 80 1360 120 1440 92",
  ripple:
    "M0 80C120 124 240 124 360 80S600 36 720 80 960 124 1080 80 1320 36 1440 80",
  dune: "M0 112C240 36 430 58 700 102S1110 150 1440 58",
  crest: "M0 90C200 140 400 40 640 90S1040 145 1240 95 1400 88 1440 90",
};

type Props = {
  /** Couleur de la section au-dessus de la vague */
  from?: string;
  /** Couleur de la section qui suit (la vague s'y fond) */
  to: string;
  variant?: keyof typeof CURVES;
  /** Miroir horizontal, pour varier le rythme */
  flip?: boolean;
  /** Superpose la vague sur le bas du héros */
  overlap?: boolean;
};

export default function Wave({
  from = "transparent",
  to,
  variant = "swell",
  flip,
  overlap,
}: Props) {
  const d = CURVES[variant];
  const shape = `${d}V160H0Z`;
  return (
    <div
      className={`${s.wave} ${overlap ? s.overlap : ""}`}
      style={{ background: from, color: to }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        className={flip ? s.flip : undefined}
      >
        <path
          d={shape}
          fill="currentColor"
          opacity=".28"
          transform="translate(0 -26)"
        />
        <path
          d={shape}
          fill="currentColor"
          opacity=".55"
          transform="translate(0 -13)"
        />
        <path d={shape} fill="currentColor" />
        <path
          d={d}
          fill="none"
          stroke="var(--gold)"
          strokeWidth="2"
          vectorEffect="non-scaling-stroke"
          opacity=".9"
          transform="translate(0 -9)"
        />
      </svg>
    </div>
  );
}
