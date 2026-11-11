import type { Metadata } from "next";
import { content } from "@/content";
import { ContactForm } from "@/components/ContactForm";
import { CallLink, MailLink } from "@/components/Links";

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
        <p className="kicker">Contact</p>
        <h1>Maurice Agterbos</h1>
        <p className="lede">{afspraak}</p>
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
        </div>
        <ContactForm submitLabel="Bericht opstellen" />
      </div>
    </div>
  );
}
