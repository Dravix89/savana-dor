"use client";

import Image from "next/image";
import { useState } from "react";
import { animals } from "@/lib/content";
import s from "./AnimalGrid.module.css";

export default function AnimalGrid() {
  const [open, setOpen] = useState<string[]>([]);
  const toggle = (name: string) => setOpen((o) => (o.includes(name) ? o.filter((n) => n !== name) : [...o, name]));

  return (
    <div className={s.big5}>
      {animals.map((a) => {
        const on = open.includes(a.name);
        return (
          <div
            key={a.name}
            className={`${s.an} ${on ? s.o : ""}`}
            role="button"
            tabIndex={0}
            aria-expanded={on}
            onClick={() => toggle(a.name)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggle(a.name);
              }
            }}
          >
            <Image src={a.img} alt={a.alt} width={900} height={600} sizes="(max-width: 760px) 90vw, (max-width: 1100px) 33vw, 20vw" />
            <h3>{a.name}</h3>
            <p>{a.text}</p>
          </div>
        );
      })}
    </div>
  );
}
