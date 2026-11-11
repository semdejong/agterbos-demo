import type { Metadata } from "next";
import { content } from "@/content";
import { ContactForm } from "@/components/ContactForm";
import { mailtoHref } from "@/lib/mailto";
import { CallLink } from "@/components/Links";

export const metadata: Metadata = {
  title: "Offerte",
  description:
    "Vraag een vrijblijvende afspraak aan bij Agterbos Hoveniers. U opent zelf uw e-mailprogramma. Er wordt niets automatisch verzonden.",
};

export default function OffertePage() {
  const href = mailtoHref();

  return (
    <div className="wrap" style={{ padding: "2.2rem 0 3.5rem" }}>
      <header>
        <p className="kicker">Vrijblijvende afspraak</p>
        <h1>Offerte of een gesprek</h1>
        <p className="lede">{content.afspraak}</p>
      </header>
      <div className="concept-note" style={{ marginTop: "1.3rem" }}>
        <p className="kicker">Concept door Sleads</p>
        <p>{content.mail.concept}</p>
      </div>
      <div className="btn-row">
        <a className="btn btn-solid" href={href} data-cta="mailen">
          Open een bericht in uw e-mailprogramma
        </a>
        <CallLink className="btn btn-line">Bel {content.contact.phone}</CallLink>
      </div>
      <p className="lede">
        Het onderwerp staat klaar: {content.mail.subject}. Het adres is {content.contact.email}. U kunt de tekst nog
        aanpassen voordat u hem verstuurt.
      </p>
      <div style={{ marginTop: "2rem", maxWidth: "40rem" }}>
        <h2>Of vul eerst uw gegevens in</h2>
        <p className="lede">
          Het formulier zet uw tekst in het bericht. Pas daarna verstuurt u het zelf vanuit uw e-mailprogramma.
        </p>
        <div style={{ marginTop: "1rem" }}>
          <ContactForm
            submitLabel="Open in mijn e-mailprogramma"
            placeholder="Bijvoorbeeld: ontwerp voor een stadstuin, aanleg, of onderhoud als abonnement."
          />
        </div>
      </div>
    </div>
  );
}
