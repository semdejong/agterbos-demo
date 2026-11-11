import type { Metadata } from "next";
import { content } from "@/content";
import { Photo } from "@/components/Photo";
import { Sluitstuk } from "@/components/Sluitstuk";
import { Bladstempel } from "@/components/Bladstempel";

export const metadata: Metadata = {
  title: "Tuinonderhoud",
  description:
    "Tuinonderhoud in Oldenzaal, eenmalig of als abonnement. Snoeien, gazon, bomen vellen en bedrijfstuinen. Tips voor oktober tot en met december.",
};

export default function TuinonderhoudPage() {
  const { onderhoud, photos } = content;

  return (
    <>
      <header className="titel">
        <div className="titel-met-stempel">
          <div>
            <p className="kicker">Tuinonderhoud</p>
            <h1>Het hele jaar, eenmalig of als abonnement</h1>
            <p className="lede">{onderhoud.lede}</p>
          </div>
          <Bladstempel blad="Onderhoud" />
        </div>
      </header>
      <div className="wrap" style={{ paddingBottom: "3rem" }}>
        <div className="vormen">
          {onderhoud.vormen.map((vorm) => (
            <article key={vorm.key}>
              <p className="kicker">{vorm.key}</p>
              <p>{vorm.text}</p>
            </article>
          ))}
        </div>
        <figure className="resultaat-foto" style={{ minHeight: 360 }}>
          <div className="photo-frame">
            <Photo
              src={photos.border.src}
              alt={photos.border.alt}
              width={photos.border.width}
              height={photos.border.height}
              sizes="(max-width: 1120px) 100vw, 1120px"
            />
          </div>
          <figcaption className="hero-caption">
            <span className="legenda__key">Tuin</span>
            <span>{photos.border.caption}</span>
          </figcaption>
        </figure>

        <div className="nota-grid">
          {onderhoud.parts.map((part) => (
            <article key={part.title} id={part.title.toLowerCase().replace(/\s+/g, "-")} className="nota">
              <h2>{part.title}</h2>
              <p className="mt-2">{part.text}</p>
            </article>
          ))}
        </div>

        <section id="najaar" style={{ marginTop: "2rem" }} data-section="seizoen">
          <p className="kicker">Seizoen</p>
          <h2>{onderhoud.tipsTitle}</h2>
          <p className="lede">{onderhoud.tipsIntro}</p>
          <ul className="werk-lijst">
            {onderhoud.tips.map((tip, index) => (
              <li key={tip}>
                <span>{index + 1}</span>
                {tip}
              </li>
            ))}
          </ul>
        </section>

        <div className="sfeer-rij">
          <figure>
            <div className="resultaat-foto" style={{ minHeight: 320, position: "relative" }}>
              <div className="photo-frame">
                <Photo
                  src={photos.bloei.src}
                  alt={photos.bloei.alt}
                  width={photos.bloei.width}
                  height={photos.bloei.height}
                  sizes="(max-width: 860px) 100vw, 50vw"
                />
              </div>
              <figcaption className="hero-caption">
                <span className="legenda__key">Sfeer</span>
                <span>{photos.bloei.caption}</span>
              </figcaption>
            </div>
          </figure>
          <figure>
            <div className="resultaat-foto" style={{ minHeight: 320, position: "relative" }}>
              <div className="photo-frame">
                <Photo
                  src={photos.bij.src}
                  alt={photos.bij.alt}
                  width={photos.bij.width}
                  height={photos.bij.height}
                  sizes="(max-width: 860px) 100vw, 50vw"
                />
              </div>
              <figcaption className="hero-caption">
                <span className="legenda__key">Sfeer</span>
                <span>
                  {photos.bij.caption}
                </span>
              </figcaption>
            </div>
          </figure>
          <figure>
            <div className="resultaat-foto" style={{ minHeight: 320, position: "relative" }}>
              <div className="photo-frame">
                <Photo
                  src={photos.vlinder.src}
                  alt={photos.vlinder.alt}
                  width={photos.vlinder.width}
                  height={photos.vlinder.height}
                  sizes="(max-width: 860px) 100vw, 50vw"
                />
              </div>
              <figcaption className="hero-caption">
                <span className="legenda__key">Sfeer</span>
                <span>
                  {photos.vlinder.caption}
                </span>
              </figcaption>
            </div>
          </figure>
        </div>
        <p className="lede">
          Bloei, een bij en een vlinder: de tuin zoals die er in het seizoen bij staat. Het werk zit in snoeien, het
          gazon, de bomen en het contract.
        </p>
      </div>
      <Sluitstuk />
    </>
  );
}
