import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { content } from "@/content";
import { Photo } from "@/components/Photo";
import { Sluitstuk } from "@/components/Sluitstuk";
import { CallLink, MailLink } from "@/components/Links";
import { Bladstempel } from "@/components/Bladstempel";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Maurice Agterbos en het team van Agterbos Hoveniers in Oldenzaal. Ruim 10 jaar ervaring in het creëren van droomtuinen. Erkend leerbedrijf, met spuitlicentie.",
};

export default function OverOnsPage() {
  const { about, contact, photos, company } = content;

  return (
    <>
      <header className="titel">
        <div className="titel-met-stempel">
          <div>
            <p className="kicker">Over ons</p>
            <h1>{about.title}</h1>
            <p className="lede">{about.intro}</p>
          </div>
          <Bladstempel blad="Team" />
        </div>
      </header>
      <figure className="team-photo">
        <div className="photo-frame">
          <Photo
            src={photos.team.src}
            alt={photos.team.alt}
            width={photos.team.width}
            height={photos.team.height}
            sizes="100vw"
            preload
          />
        </div>
      </figure>
      <div className="wrap" style={{ padding: "2rem 0 3rem" }}>
        <div className="split">
          <div className="prose-gap">
            <p className="kicker">Ervaring</p>
            <h2>{about.experience}</h2>
            <p>U ziet die ervaring terug in de ontwerpen, en in de keuze voor planten en materialen.</p>
            <p>{about.tagline} Eerst de schets, dan de aanleg, en daarna desgewenst het onderhoud.</p>
            <div className="nota">
              <p className="kicker">Spuitlicentie</p>
              <p>{about.spuitlicentie}</p>
            </div>
            <div className="nota">
              <p className="kicker">Leerbedrijf</p>
              <p>{about.leerbedrijf}</p>
              <Image src={photos.sbb.src} alt={photos.sbb.alt} width={96} height={96} className="sbb-badge" />
            </div>
          </div>
          <aside className="concept-note">
            <p className="kicker">Contact</p>
            <h2 style={{ fontSize: "1.7rem" }}>{contact.owner}</h2>
            <p>{company.name}</p>
            <p className="mt-2">{contact.addressLine}</p>
            <p className="mt-2">
              <CallLink />
            </p>
            <p>
              <CallLink kind="landline" />
            </p>
            <p>
              <MailLink />
            </p>
          </aside>
        </div>
        <figure style={{ marginTop: "2rem" }}>
          <div className="resultaat-foto" style={{ minHeight: 380 }}>
            <div className="photo-frame">
              <Photo
                src={photos.teamBus.src}
                alt={photos.teamBus.alt}
                width={photos.teamBus.width}
                height={photos.teamBus.height}
                sizes="(max-width: 1120px) 100vw, 1120px"
              />
            </div>
            <figcaption className="hero-caption">
              <span className="legenda__key">Team</span>
              <span>{photos.teamBus.alt}</span>
            </figcaption>
          </div>
        </figure>
        <div style={{ marginTop: "2.2rem" }}>
          <p className="kicker">Van schets tot resultaat</p>
          <h2>Drie lijnen, één team</h2>
          <ul className="sublinks">
            <li>
              <Link href="/tuinontwerpen">
                <span className="legenda__key">Ontwerp</span>
                Uw wensen worden een unieke schets
              </Link>
            </li>
            <li>
              <Link href="/tuinaanleg">
                <span className="legenda__key">Aanleg</span>
                Een tuin voor elk budget
              </Link>
            </li>
            <li>
              <Link href="/tuinonderhoud">
                <span className="legenda__key">Onderhoud</span>
                Eenmalig of als abonnement
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Sluitstuk />
    </>
  );
}
