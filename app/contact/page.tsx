import type { Metadata } from "next";
import { content } from "@/content";
import { ContactForm } from "@/components/ContactForm";
import { CallLink, MailLink } from "@/components/Links";
import { Bladstempel } from "@/components/Bladstempel";
import { Photo } from "@/components/Photo";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met Maurice Agterbos van Agterbos Hoveniers in Oldenzaal. Bel 06-20748056 of mail info@agterbos-hoveniers.nl.",
};

export default function ContactPage() {
  const { contact, company, afspraak, mail } = content;

  return (
    <div className="wrap" style={{ padding: "2.2rem 0 3.5rem" }}>
      <header>
        <div className="titel-met-stempel">
          <div>
            <p className="kicker">Contact</p>
            <h1>Maurice Agterbos</h1>
            <p className="lede">{afspraak}</p>
          </div>
          <Bladstempel blad="Contact" />
        </div>
      </header>
      <div className="contact-grid" style={{ marginTop: "1.6rem" }}>
        <div>
          <p>{company.name}</p>
          <div className="adres">
            <p>
              {contact.address}
              <br />
              {contact.postcode} {contact.city}
            </p>
            <p>
              <CallLink>{contact.phone}</CallLink>
            </p>
            <p>
              <CallLink kind="landline">{contact.landline}</CallLink>
            </p>
            <p>
              <MailLink />
            </p>
            <p>
              <a href={contact.facebook} target="_blank" rel="noopener noreferrer">
                {contact.facebookLabel}
                <span className="sr-only"> (opent in een nieuw venster)</span>
              </a>
            </p>
          </div>
          <div className="concept-note" style={{ marginTop: "1.3rem" }}>
            <p className="kicker">Concept</p>
            <p>{mail.concept}</p>
          </div>
          <p className="kicker" style={{ marginTop: "1.4rem" }}>
            Waar we het over hebben
          </p>
          <ul className="notities notities--kolom">
            <li>
              <span>Ontwerp</span>
              <strong>Een schets van uw tuin</strong>
            </li>
            <li>
              <span>Aanleg</span>
              <strong>Helemaal, of in fases</strong>
            </li>
            <li>
              <span>Onderhoud</span>
              <strong>Eenmalig of abonnement</strong>
            </li>
          </ul>
          <figure className="contact-foto">
            <div className="photo-frame">
              <Photo
                src={content.photos.borders.src}
                alt={content.photos.borders.alt}
                width={content.photos.borders.width}
                height={content.photos.borders.height}
                sizes="(max-width: 860px) 100vw, 40vw"
              />
            </div>
            <figcaption className="hero-caption">
              <span className="legenda__key">Tuin</span>
              <span>{content.photos.borders.caption}</span>
            </figcaption>
          </figure>
        </div>
        <ContactForm submitLabel="Bericht opstellen" />
      </div>
    </div>
  );
}
