import type { Metadata } from "next";
import { content } from "@/content";
import { CallLink, MailLink } from "@/components/Links";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Korte privacytoelichting bij dit concept van Sleads voor Agterbos Hoveniers.",
};

export default function PrivacyPage() {
  const { contact, company } = content;

  return (
    <div className="wrap prose-gap" style={{ padding: "2.2rem 0 3.5rem", maxWidth: "46rem" }}>
      <header>
        <p className="kicker">Privacy</p>
        <h1>Privacy bij dit concept</h1>
      </header>
      <p>
        Deze pagina hoort bij een conceptsite van Sleads voor {company.name} in {company.city}. Er is hier geen
        aparte rechtspersoon of inschrijving bij een kamer van koophandel vermeld, omdat die gegevens niet op deze
        conceptsite staan.
      </p>
      <p>
        Het contactformulier vraagt om uw naam, e-mailadres, telefoonnummer en een bericht. De offertepagina doet
        hetzelfde. Beide openen uw eigen e-mailprogramma. De ingevulde tekst wordt niet opgeslagen op een server van
        deze conceptsite en niet stilzwijgend verzonden. U verstuurt het bericht zelf, aan {contact.email}.
      </p>
      <p>
        De link naar Facebook verlaat deze conceptsite. Wat daar met uw bezoek gebeurt, bepaalt Facebook, niet dit
        concept.
      </p>
      <p>
        Op de conceptsite staat een cookieloze bezoekteller van Sleads. Die gebruikt het kenmerk agterbos-demo.
      </p>
      <p>
        Een vraag over een tuin stelt u aan {contact.owner}, via <MailLink /> of <CallLink />. Een vraag over deze
        conceptsite stelt u aan Sleads, via{" "}
        <a href="https://sleads.nl" target="_blank" rel="noopener noreferrer">
          sleads.nl
        </a>
        .
      </p>
    </div>
  );
}
