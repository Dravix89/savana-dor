"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";
import s from "./Navbar.module.css";

export default function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    const onResize = () => window.innerWidth > 900 && setOpen(false);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  const close = () => setOpen(false);
  const links = site.nav.map((l) => (
    <li key={l.href}>
      <Link
        href={l.href}
        onClick={close}
        aria-current={path === l.href ? "page" : undefined}
      >
        {l.label}
      </Link>
    </li>
  ));

  return (
    <header
      className={`${s.nav} ${open ? s.open : ""} ${scrolled ? s.scrolled : ""}`}
    >
      <div className={s.bar}>
        <Link href="/" className={s.brand} onClick={close}>
          <Image src="/logo.png" alt="" width={40} height={40} priority />
          <span>{site.name}</span>
        </Link>
        <nav aria-label="Navigation principale">
          <ul className={s.links}>{links}</ul>
        </nav>
        <button
          type="button"
          className={s.burger}
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <nav id="menu-mobile" className={s.panel} aria-label="Menu mobile">
        <ul>{links}</ul>
      </nav>
    </header>
  );
}
