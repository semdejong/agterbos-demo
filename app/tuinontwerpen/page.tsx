import type { Metadata } from "next";
import { content } from "@/content";
import { Photo } from "@/components/Photo";
import { Legenda } from "@/components/Legenda";
import { Sluitstuk } from "@/components/Sluitstuk";
import { Bladstempel } from "@/components/Bladstempel";

export const metadata: Metadata = {
  title: "Tuinontwerp",
  description:
    "Tuinontwerp in Oldenzaal: van uw wensen en het budget tot de schets en de aanleg. Laat Agterbos ook aanleggen, dan zijn de ontwerpkosten voor ons.",
};

export default function TuinontwerpPage() {
  const { ontwerp, ontwerpSteps, photos } = content;

  return (
    <>
      <header className="titel">
        <div className="titel-met-stempel">
          <div>
            <p className="kicker">Tuinontwerp</p>
            <h1>Van uw wensen naar een unieke schets</h1>
            <p className="lede">{ontwerp.lede}</p>
          </div>
          <Bladstempel blad="Ontwerp" />
        </div>
        <ul className="soorten">
          {content.tuinen.map((tuin) => (
            <li key={tuin.key}>
              <span>{tuin.key}</span>
              <strong>{tuin.label}</strong>
            </li>
          ))}
        </ul>
      </header>
      <Legenda
        label="Zes stappen"
        items={ontwerpSteps.map((step) => ({
          key: `Stap ${step.n}`,
          label: step.title,
          href: `#stap-${step.n}`,
        }))}
      />
      <div className="wrap" style={{ paddingBottom: "3rem" }}>
        <p className="kicker" style={{ marginTop: "1.6rem" }}>
          Genoteerd bij de intake
        </p>
        <ul className="notities">
          {content.intake.map((punt) => (
            <li key={punt.key}>
              <span>{punt.key}</span>
              <strong>{punt.label}</strong>
            </li>
          ))}
        </ul>
        <p className="lede">
          Daarna adviseren we over indeling, planten en materialen. Het budget dat u hebt gereserveerd, stuurt het
          ontwerp: wij doen het hele werk, of een deel waarbij u zelf meedoet. Zit het budget in de weg, dan komt er
          een stappenplan zodat de droomtuin toch kan beginnen.
        </p>
        <ol className="stappen">
          {ontwerpSteps.map((step) => (
            <li key={step.n} id={`stap-${step.n}`}>
              <span className="stap-n">{step.n}</span>
              <div>
                <h2>{step.title}</h2>
                <p className="mt-2">{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="nota">
          <p className="kicker">Ontwerpkosten</p>
          <p>{ontwerp.kosten}</p>
        </div>

        <div className="mt-3" style={{ marginTop: "2.4rem" }}>
          <p className="kicker">Schetsen</p>
          <h2>Handgetekende tuinontwerpen</h2>
          <div className="schets-rij" style={{ marginTop: "1rem" }}>
            <figure className="schets-blad">
              <Photo
                src={photos.schets1.src}
                alt={photos.schets1.alt}
                width={photos.schets1.width}
                height={photos.schets1.height}
                native
              />
              <figcaption>
                <span className="legenda__key">Schets A</span>
                <span>{photos.schets1.caption}</span>
              </figcaption>
            </figure>
            <figure className="schets-blad">
              <Photo
                src={photos.schets2.src}
                alt={photos.schets2.alt}
                width={photos.schets2.width}
                height={photos.schets2.height}
                native
              />
              <figcaption>
                <span className="legenda__key">Schets B</span>
                <span>{photos.schets2.caption}</span>
              </figcaption>
            </figure>
          </div>
        </div>

        <figure className="resultaat-foto" style={{ marginTop: "1.6rem", minHeight: 420 }}>
          <div className="photo-frame">
            <Photo
              src={photos.tekentafel.src}
              alt={photos.tekentafel.alt}
              width={photos.tekentafel.width}
              height={photos.tekentafel.height}
              sizes="(max-width: 1120px) 100vw, 1120px"
            />
          </div>
          <figcaption className="hero-caption">
            <span className="legenda__key">Tekentafel</span>
            <span>{photos.tekentafel.alt}</span>
          </figcaption>
        </figure>

        <div style={{ marginTop: "2.4rem" }}>
          <p className="kicker">Bestaande tuin</p>
          <h2>Ook een tuin die er al ligt</h2>
          <p className="lede">{ontwerp.renovatieIntro}</p>
          <ul className="werk-lijst">
            {ontwerp.renovatie.map((item, index) => (
              <li key={item}>
                <span>{index + 1}</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Sluitstuk />
    </>
  );
}
