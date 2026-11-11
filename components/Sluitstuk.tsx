import { content } from "@/content";
import { Schetslijn } from "@/components/Schetslijn";
import { CallLink, OfferteLink } from "@/components/Links";

export function Sluitstuk() {
  return (
    <section className="sluit" data-section="cta">
      <Schetslijn ticks={["1", "2", "3"]} />
      <div className="wrap">
        <p className="kicker">Vrijblijvende afspraak</p>
        <h2>Een afspraak verplicht u tot niets.</h2>
        <p className="lede">{content.afspraak}</p>
        <div className="btn-row">
          <CallLink className="btn btn-solid">Bel {content.contact.phone}</CallLink>
          <OfferteLink className="btn btn-line">Offerte</OfferteLink>
        </div>
      </div>
    </section>
  );
}
