import Image from "next/image";
import Link from "next/link";
import { content } from "@/content";
import { CallLink, MailLink } from "@/components/Links";
import SleadsBadge from "@/components/SleadsBadge";

export function Footer() {
  const { company, contact, partners, photos } = content;

  return (
    <footer data-section="footer">
      <div className="partners">
        <div className="wrap">
          <p className="kicker">Wij werken samen met</p>
          <ul>
            {partners.map((partner) => (
              <li key={partner.alt}>
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={partner.width}
                  height={partner.height}
                  unoptimized
                  style={{ width: "auto", height: "auto", maxWidth: "170px", maxHeight: "48px" }}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="site-footer">
        <div className="wrap footer-grid">
          <div>
            <h2>{company.name}</h2>
            <p className="mt-2">{contact.addressLine}</p>
            <ul className="footer-list">
              <li>
                <CallLink />
              </li>
              <li>
                <CallLink kind="landline" />
              </li>
              <li>
                <MailLink />
              </li>
              <li>
                <a href={contact.facebook} target="_blank" rel="noopener noreferrer">
                  {contact.facebookLabel}
                  <span className="sr-only"> (opent in een nieuw venster)</span>
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="kicker" style={{ color: "var(--papier)" }}>
              Op deze site
            </p>
            <ul className="footer-list">
              <li>
                <Link href="/tuinontwerpen">Tuinontwerp</Link>
              </li>
              <li>
                <Link href="/tuinaanleg">Tuinaanleg</Link>
              </li>
              <li>
                <Link href="/tuinonderhoud">Tuinonderhoud</Link>
              </li>
              <li>
                <Link href="/voorbeelden">Voorbeelden</Link>
              </li>
              <li>
                <Link href="/over-ons">Over ons</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/offerte" data-cta="offerte">
                  Offerte
                </Link>
              </li>
              <li>
                <Link href="/privacy">Privacy</Link>
              </li>
            </ul>
          </div>
          <div>
            <Image
              src={photos.sbb.src}
              alt={photos.sbb.alt}
              width={84}
              height={84}
              className="sbb-badge"
            />
            <p className="mt-3" style={{ maxWidth: "16rem" }}>
              {content.about.leerbedrijf}
            </p>
          </div>
        </div>
        <div className="wrap footer-base">
          <SleadsBadge />
          <p>
            {company.name} · {company.city}
          </p>
        </div>
      </div>
    </footer>
  );
}
