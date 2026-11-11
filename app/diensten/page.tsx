import type { Metadata } from "next";
import Link from "next/link";
import { content } from "@/content";
import { Photo } from "@/components/Photo";
import { Sluitstuk } from "@/components/Sluitstuk";
import { Bladstempel } from "@/components/Bladstempel";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Tuinontwerp, tuinaanleg en tuinonderhoud in Oldenzaal. Agterbos Hoveniers werkt voor particulieren en bedrijven, vier seizoenen per jaar.",
};

const kaarten = [
  {
    href: "/tuinontwerpen",
    key: "Ontwerp",
    title: content.ontwerp.title,
    text: content.ontwerp.lede,
    photo: content.photos.tekentafel,
    meer: "De zes stappen",
    links: content.ontwerpSteps.map((step) => ({
      href: `/tuinontwerpen#stap-${step.n}`,
      key: step.n,
      label: step.title,
    })),
  },
  {
    href: "/tuinaanleg",
    key: "Aanleg",
    title: content.aanlegIntro.title,
    text: content.aanlegIntro.lede,
    photo: content.photos.borders,
    meer: "Alle onderdelen",
    links: content.aanleg.map((deel) => ({
      href: `/tuinaanleg#${deel.id}`,
      key: deel.legend,
      label: deel.title,
    })),
  },
  {
    href: "/tuinonderhoud",
    key: "Onderhoud",
    title: content.onderhoud.title,
    text: content.onderhoud.lede,
    photo: content.photos.border,
    meer: "Onderhoud en het najaar",
    links: [
      ...content.onderhoud.parts.map((part) => ({
        href: `/tuinonderhoud#${part.title.toLowerCase().replace(/\s+/g, "-")}`,
        key: part.title,
        label: part.title,
      })),
      { href: "/tuinonderhoud#najaar", key: "Najaar", label: "Oktober tot en met december" },
    ],
  },
];

export default function DienstenPage() {
  return (
    <>
      <header className="titel">
        <div className="titel-met-stempel">
          <div>
            <p className="kicker">Diensten</p>
            <h1>Tuinontwerp, aanleg en onderhoud</h1>
            <p className="lede">
              Hovenier in Oldenzaal, vier seizoenen per jaar, voor particulieren en bedrijven. Van een kleine stadstuin
              tot een grote boerderijtuin. Hieronder ligt het hele blad: de stappen, de onderdelen en het onderhoud.
            </p>
          </div>
          <Bladstempel blad="Diensten" />
        </div>
      </header>
      <div className="wrap" style={{ paddingBottom: "3rem" }}>
        <div className="stack" style={{ gap: "2.5rem" }}>
          {kaarten.map((kaart, index) => (
            <article key={kaart.href} className={index % 2 ? "split split--omgekeerd" : "split"}>
              <div>
                <p className="kicker">{kaart.key}</p>
                <h2>{kaart.title}</h2>
                <p className="lede">{kaart.text}</p>
                <p>
                  <Link href={kaart.href} className="text-link">
                    {kaart.meer}
                  </Link>
                </p>
                <ul className="sublinks">
                  {kaart.links.map((link) => (
                    <li key={link.key}>
                      <Link href={link.href}>
                        <span className="legenda__key">{link.key}</span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <figure className="resultaat-foto" style={{ minHeight: 280 }}>
                <div className="photo-frame">
                  <Photo
                    src={kaart.photo.src}
                    alt={kaart.photo.alt}
                    width={kaart.photo.width}
                    height={kaart.photo.height}
                    sizes="(max-width: 860px) 100vw, 42vw"
                  />
                </div>
                <figcaption className="hero-caption">
                  <span className="legenda__key">{kaart.key}</span>
                  <span>{kaart.photo.caption}</span>
                </figcaption>
              </figure>
            </article>
          ))}
        </div>
      </div>
      <Sluitstuk />
    </>
  );
}
