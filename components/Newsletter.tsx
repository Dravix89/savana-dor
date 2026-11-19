"use client";

import { useState, type FormEvent } from "react";
import s from "./Footer.module.css";

export default function Newsletter() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO : brancher un service d'envoi (route API, Mailchimp, Brevo...)
    setSent(true);
    e.currentTarget.reset();
  };

  return (
    <form className={s.news} onSubmit={onSubmit}>
      <input type="email" name="email" required placeholder="Votre email" aria-label="Votre email" autoComplete="email" />
      <button type="submit">S’inscrire</button>
      {sent && (
        <p className={s.newsOk} role="status">
          Merci, à très vite dans votre boîte mail.
        </p>
      )}
    </form>
  );
}
