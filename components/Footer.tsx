import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/lib/content";
import { site } from "@/lib/site";
import Newsletter from "./Newsletter";
import s from "./Footer.module.css";

const ICONS: Record<string, React.ReactNode> = {
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.3" cy="6.7" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  facebook: <path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v6h4v-6h3l1-4h-4V8z" />,
  youtube: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" />
      <path d="M10 9.5v5l4.5-2.5z" fill="currentColor" stroke="none" />
    </>
  ),
};

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <div>
          <Link href="/" className={s.brand}>
            <Image src="/logo.png" alt="" width={44} height={44} />
            <span>{site.name}</span>
          </Link>
          <p className={s.about}>
            {site.tagline}. Des itinéraires construits à la main, des guides
            locaux et des camps intimes.
          </p>
          <ul className={s.socials}>
            {site.socials.map((x) => (
              <li key={x.id}>
                <a
                  href={x.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={x.label}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {ICONS[x.id]}
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <nav aria-label="Pied de page">
          <h2 className={s.title}>Explorer</h2>
          <ul className={s.list}>
            {site.nav.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className={s.title}>Destinations</h2>
          <ul className={s.list}>
            {destinations.map((d) => (
              <li key={d.name}>
                <Link href="/destinations">{d.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className={s.title}>Nous écrire</h2>
          <ul className={s.list}>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
            </li>
          </ul>
          <p className={s.note}>{site.response}</p>
          <Newsletter />
        </div>
      </div>

      <div className={s.bottom}>
        <p>
          © {new Date().getFullYear()} {site.name}. Tous Droits Réservés.
        </p>
        <p>Guides Locaux · Camps Intimes · Voyage Responsable</p>
      </div>
    </footer>
  );
}
