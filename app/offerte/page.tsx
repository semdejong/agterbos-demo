import type { Metadata } from "next";
import { content } from "@/content";
import { ContactForm } from "@/components/ContactForm";
import { mailtoHref } from "@/lib/mailto";
import { CallLink, MailLink } from "@/components/Links";
import { Bladstempel } from "@/components/Bladstempel";

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
        <div className="titel-met-stempel">
          <div>
            <p className="kicker">Vrijblijvende afspraak</p>
            <h1>Offerte of een gesprek</h1>
            <p className="lede">{content.afspraak}</p>
          </div>
          <Bladstempel blad="Afspraak" />
        </div>
      </header>
      <ul className="notities">
        {content.intake.map((punt) => (
          <li key={punt.key}>
            <span>{punt.key}</span>
            <strong>{punt.label}</strong>
          </li>
        ))}
      </ul>
      <p className="lede">
        Neem die vier punten mee als u wilt. We kijken daarna wat past: een ontwerp, de aanleg, of onderhoud voor huis
        of bedrijf.
      </p>
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
      <p className="mt-3">
        Liever meteen bellen: <CallLink /> of <CallLink kind="landline" />. Mailen kan ook naar <MailLink />.
      </p>
      <div className="contact-grid" style={{ marginTop: "2rem" }}>
        <div>
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
        <aside>
          <p className="kicker">Drie ingangen</p>
          <ul className="sublinks">
            <li>
              <a href="/tuinontwerpen">
                <span className="legenda__key">1</span>
                Tuinontwerp
              </a>
            </li>
            <li>
              <a href="/tuinaanleg">
                <span className="legenda__key">2</span>
                Tuinaanleg
              </a>
            </li>
            <li>
              <a href="/tuinonderhoud">
                <span className="legenda__key">3</span>
                Tuinonderhoud
              </a>
            </li>
          </ul>
          <p className="mt-3">{content.contact.addressLine}</p>
        </aside>
      </div>
    </div>
  );
}
