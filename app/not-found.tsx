import type { Metadata } from "next";
import Link from "next/link";
import { CallLink } from "@/components/Links";
import { content } from "@/content";

export const metadata: Metadata = {
  title: "Pagina niet gevonden",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="wrap" style={{ padding: "3rem 0 4rem" }}>
      <p className="kicker">Niet gevonden</p>
      <h1>Deze pagina bestaat niet.</h1>
      <p className="lede">Het adres klopt niet, of de pagina is hier niet aanwezig.</p>
      <ul className="sublinks" style={{ maxWidth: "28rem", marginTop: "1.2rem" }}>
        <li>
          <Link href="/tuinontwerpen">
            <span className="legenda__key">Ontwerp</span>
            Tuinontwerp
          </Link>
        </li>
        <li>
          <Link href="/tuinaanleg">
            <span className="legenda__key">Aanleg</span>
            Tuinaanleg
          </Link>
        </li>
        <li>
          <Link href="/tuinonderhoud">
            <span className="legenda__key">Onderhoud</span>
            Tuinonderhoud
          </Link>
        </li>
        <li>
          <Link href="/voorbeelden">
            <span className="legenda__key">Beeld</span>
            Voorbeelden
          </Link>
        </li>
      </ul>
      <div className="btn-row">
        <Link href="/" className="btn btn-solid">
          Naar de beginpagina
        </Link>
        <Link href="/contact" className="btn btn-line">
          Contact
        </Link>
        <CallLink className="btn btn-line">Bel {content.contact.phone}</CallLink>
      </div>
    </div>
  );
}
