import type { Metadata } from "next";
import { content } from "@/content";
import { Photo } from "@/components/Photo";
import { Sluitstuk } from "@/components/Sluitstuk";

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
        <p className="kicker">Tuinonderhoud</p>
        <h1>Het hele jaar, eenmalig of als abonnement</h1>
        <p className="lede">{onderhoud.lede}</p>
      </header>
      <div className="wrap" style={{ paddingBottom: "3rem" }}>
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

        <div className="stack" style={{ marginTop: "1.6rem" }}>
          {onderhoud.parts.map((part) => (
            <article key={part.title} className="nota" style={{ marginTop: 0 }}>
              <h2>{part.title}</h2>
              <p className="mt-2">{part.text}</p>
            </article>
          ))}
        </div>

        <section style={{ marginTop: "2rem" }} data-section="seizoen">
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

        <div className="split" style={{ marginTop: "2rem" }}>
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
                <span className="legenda__key">{photos.bloei.caption}</span>
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
                <span className="legenda__key">{photos.bij.caption}</span>
                <span>{photos.bij.credit}</span>
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
                <span className="legenda__key">{photos.vlinder.caption}</span>
                <span>{photos.vlinder.credit}</span>
              </figcaption>
            </div>
          </figure>
        </div>
        <p className="lede">
          De close-ups horen bij de sfeer van een bloeiende tuin. Het onderhoud zelf is snoeien, het gazon, bomen en
          een contract voor het hele jaar.
        </p>
      </div>
      <Sluitstuk />
    </>
  );
}
