"use client";

import { useState, type FormEvent } from "react";
import s from "@/app/mon-safari/page.module.css";

const DEST = ["Tanzanie", "Kenya", "Botswana", "Zambie", "Namibie"];
const SAISONS = ["Juin à octobre", "Novembre à mars", "Je ne sais pas encore"];

export default function SafariForm() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO : envoyer new FormData(e.currentTarget) vers une route API ou un service email
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <form className={s.form} onSubmit={onSubmit}>
      <input name="nom" aria-label="Nom" placeholder="Votre nom" autoComplete="name" required />
      <input name="email" type="email" aria-label="Email" placeholder="Votre email" autoComplete="email" required />
      <select name="destination" aria-label="Destination">
        {DEST.map((d) => <option key={d}>{d}</option>)}
      </select>
      <select name="saison" aria-label="Saison">
        {SAISONS.map((d) => <option key={d}>{d}</option>)}
      </select>
      <button className={`btn ${s.submit}`} type="submit">Recevoir mon itinéraire</button>
      {sent && (
        <p className={s.ok} role="status">
          Merci. Votre demande est bien partie, nous vous répondons très vite.
        </p>
      )}
    </form>
  );
}
