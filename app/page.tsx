import Link from "next/link";
import { content } from "@/content";
import { Photo } from "@/components/Photo";
import { Legenda } from "@/components/Legenda";
import { Schetslijn } from "@/components/Schetslijn";
import { Sluitstuk } from "@/components/Sluitstuk";
import { CallLink, OfferteLink } from "@/components/Links";

const { hero, photos, ontwerpSteps, ontwerp, contact, about } = content;

export default function Home() {
  return (
    <>
      <section className="hero" data-section="hero">
        <div className="blad">
          <div className="blad__inner">
            <div className="hero-grid">
              <div className="hero-copy">
                <p className="kicker">Ontwerp · aanleg · onderhoud</p>
                <h1>{hero.title}</h1>
                <p className="lede">{hero.lede}</p>
                <div className="btn-row">
                  <CallLink className="btn btn-solid">Bel {contact.phone}</CallLink>
                  <OfferteLink className="btn btn-line">Vrijblijvende afspraak</OfferteLink>
                </div>
              </div>
              <figure className="hero-photo">
                <div className="photo-frame">
                  <Photo
                    src={hero.image.src}
                    alt={hero.image.alt}
                    width={hero.image.width}
                    height={hero.image.height}
                    sizes="(max-width: 880px) 100vw, 58vw"
                    preload
                  />
                </div>
                <figcaption className="hero-caption">
                  <span className="legenda__key">{hero.image.legend}</span>
                  <span>{hero.image.caption}</span>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>

      <Legenda
        items={[
          { key: "Ontwerp", label: "Van wens naar unieke schets" },
          { key: "Aanleg", label: "Een tuin voor elk budget" },
          { key: "Onderhoud", label: "Eenmalig of als abonnement" },
        ]}
      />

      <section className="band" data-section="diensten">
        <div className="wrap">
          <p className="kicker">Drie vakken</p>
          <h2>Ontwerp, aanleg en onderhoud</h2>
          <div className="plan plan--diensten" style={{ marginTop: "1.2rem" }}>
            <Link href="/tuinontwerpen" className="vak area-ontwerp">
              <div className="vak__media">
                <Photo
                  src={photos.tekentafel.src}
                  alt=""
                  width={photos.tekentafel.width}
                  height={photos.tekentafel.height}
                  sizes="(max-width: 800px) 100vw, 50vw"
                />
              </div>
              <span className="vak__cap">
                <span className="vak__key">Ontwerp</span>
                <span className="vak__title">Tuinontwerp</span>
                <span className="vak__text">Uw wensen worden een unieke schets aan de tekentafel.</span>
              </span>
            </Link>
            <Link href="/tuinaanleg" className="vak area-aanleg">
              <div className="vak__media">
                <Photo
                  src={photos.borders.src}
                  alt=""
                  width={photos.borders.width}
                  height={photos.borders.height}
                  sizes="(max-width: 800px) 100vw, 45vw"
                />
              </div>
              <span className="vak__cap">
                <span className="vak__key">Aanleg</span>
                <span className="vak__title">Tuinaanleg</span>
                <span className="vak__text">Vanuit ons ontwerp of vanuit uw eigen ideeën.</span>
              </span>
            </Link>
            <Link href="/tuinonderhoud" className="vak area-onderhoud">
              <div className="vak__media">
                <Photo
                  src={photos.border.src}
                  alt=""
                  width={photos.border.width}
                  height={photos.border.height}
                  sizes="(max-width: 800px) 100vw, 45vw"
                />
              </div>
              <span className="vak__cap">
                <span className="vak__key">Onderhoud</span>
                <span className="vak__title">Tuinonderhoud</span>
                <span className="vak__text">Eenmalig of als abonnement, het hele jaar.</span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="band band--perk" data-section="schets">
        <div className="wrap">
          <p className="kicker">Van schets tot resultaat</p>
          <h2>Eerst de tekening, dan de tuin.</h2>
          <p className="lede">
            In zes stappen wordt uw tuin een schets, en daarna — als u dat wilt — een aangelegde tuin. De tekening en
            de foto hiernaast zijn twee voorbeelden uit het werk, geen voor-en-na van hetzelfde perceel.
          </p>
          <div className="paar">
            <figure className="schets-blad">
              <Photo
                src={photos.schets1.src}
                alt={photos.schets1.alt}
                width={photos.schets1.width}
                height={photos.schets1.height}
                native
              />
              <figcaption>
                <span className="legenda__key">Schets</span>
                <span>{photos.schets1.caption}</span>
              </figcaption>
            </figure>
            <figure className="resultaat-foto">
              <div className="photo-frame">
                <Photo
                  src={photos.borders.src}
                  alt={photos.borders.alt}
                  width={photos.borders.width}
                  height={photos.borders.height}
                  sizes="(max-width: 860px) 100vw, 55vw"
                />
              </div>
              <figcaption className="hero-caption">
                <span className="legenda__key">Tuinaanleg</span>
                <span>{photos.borders.caption}</span>
              </figcaption>
            </figure>
          </div>
          <ol className="stappen-kort">
            {ontwerpSteps.map((step) => (
              <li key={step.n}>
                <span>{step.n}</span>
                {step.title}
              </li>
            ))}
          </ol>
          <div className="nota">
            <p>{ontwerp.kosten}</p>
            <p>
              <Link href="/tuinontwerpen" className="text-link">
                Het ontwerp in zes stappen
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="band" data-section="aanleg">
        <div className="wrap">
          <p className="kicker">Onderdelen</p>
          <h2>Wat we aanleggen</h2>
          <p className="lede">{content.aanlegIntro.lede}</p>
          <div className="plan plan--aanleg" style={{ marginTop: "1.2rem" }}>
            <Link href="/tuinaanleg#kunstgras" className="vak area-kunstgras">
              <div className="vak__media">
                <Photo
                  src="/img/aanleg/kunstgras-aanleg.jpg"
                  alt=""
                  width={960}
                  height={720}
                  sizes="(max-width: 800px) 100vw, 40vw"
                />
              </div>
              <span className="vak__cap">
                <span className="vak__key">Kunstgras</span>
                <span className="vak__title">Kunstgras</span>
                <span className="vak__text">Onderhoudsarm, duurzaam en zuinig met water.</span>
              </span>
            </Link>
            <Link href="/tuinaanleg#verlichting" className="vak area-verlichting">
              <div className="vak__media">
                <Photo
                  src="/img/aanleg/tuinverlichting-avond.jpg"
                  alt=""
                  width={1280}
                  height={853}
                  sizes="(max-width: 800px) 100vw, 60vw"
                />
              </div>
              <span className="vak__cap">
                <span className="vak__key">Verlichting</span>
                <span className="vak__title">Tuinverlichting</span>
                <span className="vak__text">Sfeer in de avond, ook vanuit de woonkamer.</span>
              </span>
            </Link>
            <Link href="/tuinaanleg#tuinhout" className="vak area-tuinhout">
              <div className="vak__media vak__media--native">
                <Photo src="/img/aanleg/tuinhout-latwerk.jpg" alt="" width={500} height={375} native />
              </div>
              <span className="vak__cap">
                <span className="vak__key">Tuinhout</span>
                <span className="vak__title">Tuinhout</span>
                <span className="vak__text">Overkapping, pergola, schutting of vlonder.</span>
              </span>
            </Link>
            <Link href="/tuinaanleg#sierbestrating" className="vak area-bestrating">
              <div className="vak__media vak__media--native">
                <Photo src="/img/aanleg/sierbestrating-waaltjes.jpg" alt="" width={500} height={332} native />
              </div>
              <span className="vak__cap">
                <span className="vak__key">Bestrating</span>
                <span className="vak__title">Sierbestrating</span>
                <span className="vak__text">Betontegels of waaltjes.</span>
              </span>
            </Link>
            <Link href="/tuinaanleg#vijver" className="vak area-vijver">
              <div className="vak__media">
                <Photo
                  src="/img/aanleg/vijver-fontein.jpg"
                  alt=""
                  width={2000}
                  height={1723}
                  sizes="(max-width: 800px) 100vw, 60vw"
                />
              </div>
              <span className="vak__cap">
                <span className="vak__key">Vijver</span>
                <span className="vak__title">Vijver en waterpartij</span>
                <span className="vak__text">Sier-, natuur- en koivijvers, en waterlopen.</span>
              </span>
            </Link>
            <Link href="/tuinaanleg#tuinobjecten" className="vak area-objecten">
              <div className="vak__media">
                <Photo
                  src="/img/aanleg/tuinobject.jpg"
                  alt=""
                  width={1000}
                  height={750}
                  sizes="(max-width: 800px) 100vw, 34vw"
                />
              </div>
              <span className="vak__cap">
                <span className="vak__key">Objecten</span>
                <span className="vak__title">Tuinobjecten</span>
                <span className="vak__text">Pot, zonnewijzer of beeld.</span>
              </span>
            </Link>
          </div>
          <p>
            <Link href="/voorbeelden" className="text-link">
              Meer foto&apos;s uit het werk
            </Link>
          </p>
        </div>
      </section>

      <Schetslijn />

      <section className="feiten" data-section="feiten" aria-label="Feiten">
        <ul>
          {content.facts.map((fact) => (
            <li key={fact.key}>
              <span>{fact.key}</span>
              {fact.value}
            </li>
          ))}
        </ul>
      </section>

      <section className="band band--wit" data-section="team" style={{ paddingTop: 0 }}>
        <figure className="team-photo">
          <div className="photo-frame">
            <Photo
              src={photos.team.src}
              alt={photos.team.alt}
              width={photos.team.width}
              height={photos.team.height}
              sizes="100vw"
            />
          </div>
        </figure>
        <div className="team-copy">
          <p className="kicker">Ons team</p>
          <h2>Wij zijn geen sprekers maar doeners.</h2>
          <div className="prose-gap" style={{ marginTop: "0.8rem" }}>
            <p>{about.intro}</p>
            <p>
              {contact.owner}. {about.experience}
            </p>
          </div>
          <p>
            <Link href="/over-ons" className="text-link">
              Over ons
            </Link>
          </p>
        </div>
      </section>

      <Sluitstuk />
    </>
  );
}
