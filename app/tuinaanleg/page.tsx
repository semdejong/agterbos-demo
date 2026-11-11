import type { Metadata } from "next";
import { content } from "@/content";
import type { Photo as PhotoData } from "@/content";
import { Photo } from "@/components/Photo";
import { Legenda } from "@/components/Legenda";
import { Sluitstuk } from "@/components/Sluitstuk";

export const metadata: Metadata = {
  title: "Tuinaanleg",
  description:
    "Tuinaanleg in Oldenzaal voor elk budget: kunstgras, verlichting, tuinhout, vijver, sierbestrating en tuinobjecten. Vanuit ons ontwerp of uw eigen ideeën.",
};

function Foto({ photo }: { photo: PhotoData }) {
  if (photo.native) {
    return (
      <figure className="foto-blok">
        <Photo
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          native
        />
        <figcaption>
          <span className="legenda__key">{photo.caption}</span>
        </figcaption>
      </figure>
    );
  }

  return (
    <figure className="foto-blok foto-blok--groot">
      <div className="photo-frame">
        <Photo
          src={photo.src}
          alt={photo.alt}
          width={photo.width}
          height={photo.height}
          sizes="(max-width: 800px) 100vw, 720px"
        />
      </div>
      <figcaption>
        <span className="legenda__key">{photo.caption}</span>
      </figcaption>
    </figure>
  );
}

export default function TuinaanlegPage() {
  const { aanleg, aanlegIntro, photos } = content;

  return (
    <>
      <header className="titel">
        <p className="kicker">Tuinaanleg</p>
        <h1>Een tuin voor elk budget</h1>
        <p className="lede">{aanlegIntro.lede}</p>
      </header>
      <Legenda
        label="Onderdelen van de aanleg"
        items={aanleg.map((deel) => ({
          key: deel.legend,
          label: deel.title,
          href: `#${deel.id}`,
        }))}
      />
      <div className="wrap" style={{ paddingBottom: "2rem" }}>
        <div className="native-rij" style={{ marginTop: "1.5rem" }}>
          <figure className="foto-blok">
            <Photo
              src={photos.minigraver.src}
              alt={photos.minigraver.alt}
              width={photos.minigraver.width}
              height={photos.minigraver.height}
              native
            />
            <figcaption>
              <span className="legenda__key">Tuinaanleg</span>
            </figcaption>
          </figure>
          <figure className="foto-blok">
            <Photo
              src={photos.minigraver2.src}
              alt={photos.minigraver2.alt}
              width={photos.minigraver2.width}
              height={photos.minigraver2.height}
              native
            />
            <figcaption>
              <span className="legenda__key">Tuinaanleg</span>
            </figcaption>
          </figure>
        </div>

        {aanleg.map((deel) => (
          <section key={deel.id} id={deel.id} className="onderdeel" data-section={deel.id}>
            <p className="kicker">{deel.legend}</p>
            <h2>{deel.title}</h2>
            <p className="lede">{deel.text}</p>
            <div className="foto-rij">
              {deel.photos.map((photo) => (
                <Foto key={photo.src} photo={photo} />
              ))}
            </div>
          </section>
        ))}
      </div>
      <Sluitstuk />
    </>
  );
}
