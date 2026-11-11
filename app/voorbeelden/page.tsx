import type { Metadata } from "next";
import { content, type Photo as PhotoData } from "@/content";
import { Photo } from "@/components/Photo";
import { Sluitstuk } from "@/components/Sluitstuk";

export const metadata: Metadata = {
  title: "Voorbeelden",
  description:
    "Foto's uit het werk van Agterbos Hoveniers in Oldenzaal: tuinaanleg, kunstgras, verlichting, water, bestrating en tuinhout.",
};

type Item = PhotoData & { credit?: string };

const items: Item[] = [
  {
    src: content.hero.image.src,
    alt: "Tuin in Oldenzaal",
    width: content.hero.image.width,
    height: content.hero.image.height,
    caption: "Tuin in Oldenzaal",
  },
  content.photos.borders,
  content.photos.border,
  ...content.aanleg.flatMap((deel) => deel.photos),
  content.photos.minigraver,
  content.photos.minigraver2,
  content.photos.schets1,
  content.photos.schets2,
  content.photos.tekentafel,
  content.photos.bij,
  content.photos.vlinder,
  content.photos.bloei,
];

export default function VoorbeeldenPage() {
  const seen = new Set<string>();
  const fotos = items.filter((item) => {
    if (seen.has(item.src)) return false;
    seen.add(item.src);
    return true;
  });

  return (
    <>
      <header className="titel">
        <p className="kicker">Voorbeelden</p>
        <h1>Uit het werk</h1>
        <p className="lede">
          Een selectie foto&apos;s van Agterbos Hoveniers. Zonder verzonnen projectnamen: alleen een algemene
          omschrijving.
        </p>
      </header>
      <div className="wrap" style={{ paddingBottom: "3rem" }}>
        <div className="galerij">
          {fotos.map((foto) => (
            <figure key={foto.src}>
              {foto.native ? (
                <Photo src={foto.src} alt="" width={foto.width} height={foto.height} native />
              ) : (
                <div className="cover">
                  <Photo
                    src={foto.src}
                    alt=""
                    width={foto.width}
                    height={foto.height}
                    sizes="(max-width: 700px) 100vw, (max-width: 1040px) 50vw, 33vw"
                  />
                </div>
              )}
              <figcaption>
                <span className="legenda__key">{foto.caption}</span>
                {"credit" in foto && foto.credit ? <span>{foto.credit}</span> : null}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      <Sluitstuk />
    </>
  );
}
