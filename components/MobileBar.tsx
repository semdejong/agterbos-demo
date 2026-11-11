import { content } from "@/content";
import { Schetslijn } from "@/components/Schetslijn";
import { OfferteLink } from "@/components/Links";

export function MobileBar() {
  const { contact } = content;
  return (
    <nav className="mobile-bar" aria-label="Snel contact" data-section="mobiele-balk">
      <Schetslijn />
      <div className="mobile-bar__row">
        <a className="mobile-bar__bel" href={`tel:${contact.phoneTel}`} data-cta="bellen">
          Bel {contact.phone}
        </a>
        <OfferteLink className="mobile-bar__offerte">Offerte</OfferteLink>
      </div>
    </nav>
  );
}
