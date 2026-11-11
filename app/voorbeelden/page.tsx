import type { Metadata } from "next";
import { content, type Photo as PhotoData } from "@/content";
import { Photo } from "@/components/Photo";
import { Sluitstuk } from "@/components/Sluitstuk";
import { Bladstempel } from "@/components/Bladstempel";

export const metadata: Metadata = {
  title: "Voorbeelden",
  description:
    "Foto's uit het werk van Agterbos Hoveniers in Oldenzaal: tuinen, aanleg, schetsen, water, hout, bestrating en licht.",
};

type Item = PhotoData & { credit?: string };

const groepen: { key: string; title: string; tekst: string; fotos: Item[] }[] = [
  {
    key: "Tuinen",
    title: "Tuinen",
    tekst: "Twee tuinen uit het werk, zoals ze erbij liggen.",
    fotos: [
      {
        src: content.hero.image.src,
        alt: "Tuin in Oldenzaal",
        width: content.hero.image.width,
        height: content.hero.image.height,
        caption: "Tuin in Oldenzaal",
      },
      content.photos.borders,
    ],
  },
  {
    key: "Schets",
    title: "Schets en tekentafel",
    tekst: "Handgetekende plannen, en het tekenen zelf. De schetsen zijn geen voor-en-na van de foto's hierboven.",
    fotos: [
      { ...content.photos.schets1, caption: "Eerste schets" },
      { ...content.photos.schets2, caption: "Tweede schets" },
      content.photos.tekentafel,
    ],
  },
  {
    key: "Aanleg",
    title: "Op het werk",
    tekst: "De aanleg, van graafwerk tot kunstgras.",
    fotos: [content.photos.minigraver, content.photos.minigraver2, ...content.aanleg[0].photos],
  },
  {
    key: "Water",
    title: "Vijver en waterpartij",
    tekst: "Siervijvers, een fontein en water tussen keien.",
    fotos: content.aanleg.find((deel) => deel.id === "vijver")?.photos ?? [],
  },
  {
    key: "Hout",
    title: "Tuinhout",
    tekst: "Latwerk, een tafel en een vlonder.",
    fotos: content.aanleg.find((deel) => deel.id === "tuinhout")?.photos ?? [],
  },
  {
    key: "Steen",
    title: "Sierbestrating",
    tekst: "Pad, waaltjes en mozaïek.",
    fotos: content.aanleg.find((deel) => deel.id === "sierbestrating")?.photos ?? [],
  },
  {
    key: "Licht",
    title: "Tuinverlichting",
    tekst: "De tuin in de avond, en een spot van dichterbij.",
    fotos: content.aanleg.find((deel) => deel.id === "verlichting")?.photos ?? [],
  },
  {
    key: "Object",
    title: "Tuinobjecten",
    tekst: "Een object, een border en een gemetselde bak.",
    fotos: content.aanleg.find((deel) => deel.id === "tuinobjecten")?.photos ?? [],
  },
  {
    key: "Bloei",
    title: "Bloei",
    tekst: "Sfeer uit de tuin, geen bewijs van een onderhoudsbeurt op zich.",
    fotos: [content.photos.bij, content.photos.vlinder, content.photos.bloei],
  },
];

function VakFoto({ foto, sleutel }: { foto: Item; sleutel: string }) {
  return (
    <figure>
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
        <span className="legenda__key">{sleutel}</span>
        <span>{foto.caption}</span>
        {foto.credit ? <span>{foto.credit}</span> : null}
      </figcaption>
    </figure>
  );
}

export default function VoorbeeldenPage() {
  return (
    <>
      <header className="titel">
        <div className="titel-met-stempel">
          <div>
            <p className="kicker">Voorbeelden</p>
            <h1>Uit het werk</h1>
            <p className="lede">
              Foto&apos;s van Agterbos Hoveniers, geordend als een legenda: tuin, schets, aanleg, water, hout, steen,
              licht, object en bloei.
            </p>
          </div>
          <Bladstempel blad="Beeld" />
        </div>
      </header>
      <div className="wrap" style={{ paddingBottom: "3rem" }}>
        {groepen.map((groep) => (
          <section key={groep.key} className="groep" data-section={groep.key.toLowerCase()}>
            <p className="kicker">{groep.key}</p>
            <h2>{groep.title}</h2>
            <p className="lede">{groep.tekst}</p>
            <div className="galerij" style={{ marginTop: "1rem" }}>
              {groep.fotos.map((foto) => (
                <VakFoto key={foto.src} foto={foto} sleutel={groep.key} />
              ))}
            </div>
          </section>
        ))}
      </div>
      <Sluitstuk />
    </>
  );
}
