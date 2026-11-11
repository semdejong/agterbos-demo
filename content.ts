/**
 * Agterbos Hoveniers — alleen geverifieerde feiten
 * (agterbos-hoveniers.nl, 11 nov 2026).
 * Geen oprichtingsjaar, geen KvK/BTW, geen openingstijden, geen reviews,
 * geen info@tuinopmaat.com, geen werkgebied buiten Oldenzaal.
 */

export type Photo = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption: string;
  /** Toon niet breder dan het bronbestand. */
  native?: boolean;
};

export const content = {
  slug: "agterbos-demo",

  company: {
    name: "Agterbos Hoveniers",
    shortName: "Agterbos",
    owner: "Maurice Agterbos",
    tagline: "Van schets tot resultaat",
    description:
      "Hovenier in Oldenzaal voor tuinontwerp, tuinaanleg en tuinonderhoud — particulier en zakelijk, vier seizoenen per jaar. Van schets tot resultaat.",
    logo: "/img/logo/logo.png",
    logoWidth: 256,
    logoHeight: 100,
    logoCompact: "/img/logo/logo-compact.png",
    favicon: "/img/logo/favicon.png",
    city: "Oldenzaal",
  },

  colors: {
    primary: "#005133",
    primaryForeground: "#ffffff",
    accent: "#B34A00",
    background: "#F4F1EA",
    foreground: "#222222",
    muted: "#E7EEE8",
    bosgroen: "#005133",
    bosgroenText: "#003D27",
    inkt: "#222222",
    schetspapier: "#F4F1EA",
    perk: "#E7EEE8",
    wit: "#FFFFFF",
    potlood: "#B34A00",
    potloodText: "#B34A00",
    haarlijn: "#C5CDC6",
  },

  seo: {
    title: "Agterbos Hoveniers Oldenzaal | Van schets tot resultaat",
    description:
      "Tuinontwerp, tuinaanleg en tuinonderhoud in Oldenzaal. Agterbos Hoveniers staat vier seizoenen voor u klaar. Bel 06-20748056.",
    lang: "nl",
  },

  nav: [
    {
      label: "Diensten",
      href: "/diensten",
      children: [
        { label: "Tuinontwerp", href: "/tuinontwerpen" },
        { label: "Tuinaanleg", href: "/tuinaanleg" },
        { label: "Tuinonderhoud", href: "/tuinonderhoud" },
      ],
    },
    { label: "Voorbeelden", href: "/voorbeelden" },
    { label: "Over ons", href: "/over-ons" },
    { label: "Contact", href: "/contact" },
  ],

  hero: {
    title: "Van schets tot resultaat — uw hovenier in Oldenzaal.",
    lede: "Tuinontwerp, tuinaanleg en tuinonderhoud, ook als abonnement. Vier seizoenen, voor particulieren en bedrijven: van een kleine stadstuin tot een moderne, symmetrische of klassieke tuin, een mediterrane sfeer of een grote boerderijtuin.",
    image: {
      src: "/img/home/vijver-loopplanken.jpg",
      alt: "Tuin in Oldenzaal",
      width: 2048,
      height: 1536,
      caption: "Tuin in Oldenzaal",
      legend: "Tuinaanleg",
    },
  },

  facts: [
    { key: "Adres", value: "Meester Troelstrastraat 7, Oldenzaal" },
    { key: "Ervaring", value: "ruim 10 jaar" },
    { key: "Leerbedrijf", value: "erkend leerbedrijf" },
    { key: "Seizoen", value: "vier seizoenen" },
  ],

  contact: {
    owner: "Maurice Agterbos",
    companyLine: "Agterbos Hoveniers",
    address: "Meester Troelstrastraat 7",
    postcode: "7572 VX",
    city: "Oldenzaal",
    addressLine: "Meester Troelstrastraat 7, 7572 VX Oldenzaal",
    phone: "06-20748056",
    phoneTel: "+31620748056",
    landline: "0541 537 066",
    landlineTel: "+31541537066",
    email: "info@agterbos-hoveniers.nl",
    facebook: "https://www.facebook.com/Agterbos-Hoveniers-417004092004386/",
    facebookLabel: "Facebook",
  },

  about: {
    title: "Ons team",
    intro:
      "Wij zijn geen sprekers maar doeners. Zet ons in de tuin en u zult zien wat we kunnen. Onze jarenlange ervaring ziet u terug in de ontwerpen en in de keuze voor planten en materialen.",
    experience: "Ruim 10 jaar ervaring in het creëren van droomtuinen.",
    experienceInline: "ruim 10 jaar ervaring in het creëren van droomtuinen",
    spuitlicentie:
      "Agterbos Hoveniers heeft de verplichte spuitlicentie. Deze verplichte licentie laat zien dat we over de juiste kennis en vaardigheden beschikken om verantwoord met gewasbeschermingsmiddelen aan het werk te gaan.",
    leerbedrijf: "Wij zijn een officieel leerbedrijf voor hoveniers in opleiding.",
    tagline: "Van schets tot resultaat.",
  },

  afspraak:
    "Een afspraak verplicht u tot niets. We kijken samen naar de mogelijkheden voor ontwerp, aanleg of onderhoud.",

  tuinen: [
    { key: "Stad", label: "Kleine stadstuin" },
    { key: "Modern", label: "Moderne tuin" },
    { key: "Symmetrie", label: "Symmetrische tuin" },
    { key: "Klassiek", label: "Klassieke tuin" },
    { key: "Zuid", label: "Mediterrane sfeer" },
    { key: "Erf", label: "Grote boerderijtuin" },
  ],

  intake: [
    { key: "Wens", label: "Uw wensen en ideeën" },
    { key: "Zon", label: "Ligging ten opzichte van de zon" },
    { key: "Hoogte", label: "Hoogteverschillen" },
    { key: "Groen", label: "Bestaande beplanting" },
  ],

  aanlegNoten: {
    kunstgras: {
      nader: "Het is onderhoudsarm en duurzaam, zuinig met water, en lastig van echt gras te onderscheiden.",
      punten: ["Onderhoudsarm", "Duurzaam", "Zuinig met water", "Lastig van echt te onderscheiden"],
    },
    verlichting: {
      nader: "Niet alleen als u in de tuin zit. Ook vanuit de woonkamer krijgt de tuin in de avond sfeer.",
      punten: ["Avondsfeer", "Ook vanuit de woonkamer"],
    },
    tuinhout: {
      nader: "Hout voor een plek onder dak, een doorgang, een erfafscheiding of een bak die u kunt verrijden.",
      punten: ["Overkapping", "Pergola", "Prieel", "Schuttingen", "Vlonders", "Verrijdbare plantenbakken"],
    },
    vijver: {
      nader: "Bij het water horen ook de planten, de vissen en wat daarbij komt kijken.",
      punten: ["Siervijver", "Natuurvijver", "Koivijver", "Waterloop", "Planten en vissen"],
    },
    sierbestrating: {
      nader: "Strak beton of een waal van vroeger. Voor de bestrating werken we samen met Buiter Beton in Balkbrug.",
      punten: ["Betontegels", "Waaltjes", "Buiter Beton, Balkbrug"],
    },
    tuinobjecten: {
      nader: "Een object is geen losse versiering. Het geeft de tuin een punt waar het oog blijft hangen.",
      punten: ["Potten", "Zonnewijzer", "Beeld"],
    },
  },

  ontwerp: {
    title: "Tuinontwerp",
    lede: "Uw wensen worden een uniek tuinontwerp. Een kleine stadstuin, een moderne, symmetrische of klassieke tuin, een mediterrane sfeer of een grote boerderijtuin: de schets sluit aan op wat u wilt en op wat de plek toelaat.",
    renovatieIntro:
      "Ook bestaande tuinen pakken we aan, helemaal of in fases.",
    renovatie: [
      "Nieuwe grasmat",
      "Schuttingen",
      "Terras",
      "Veranda",
      "Vijver",
      "Border beplanten",
      "Nieuw lichtplan",
    ],
    kosten:
      "Wanneer u besluit om de door Agterbos Hoveniers ontworpen tuin ook door ons aan te laten leggen, nemen wij de kosten van het ontwerp voor onze rekening.",
  },

  ontwerpSteps: [
    {
      n: "1",
      title: "Uw wensen",
      text: "In een intakegesprek inventariseren we uw wensen en ideeën. Daarnaast noteren we gegevens zoals de ligging van de tuin ten opzichte van de zon, hoogteverschillen en beplanting.",
    },
    {
      n: "2",
      title: "Advies",
      text: "Vanuit onze expertise adviseren we u over de indeling van de tuin, het gebruik van planten en het gebruik van verschillende materialen.",
    },
    {
      n: "3",
      title: "Budget",
      text: "Het budget dat u voor de tuin hebt gereserveerd is een belangrijke leidraad voor het ontwerp. We kijken samen welke rol wij op ons nemen: het volledige werk, of een deel waarbij u zelf bijdraagt.",
    },
    {
      n: "4",
      title: "Tekentafel",
      text: "De ideeën worden omgezet naar unieke ontwerpen. Elke schets sluit aan op uw wensen en op wat de tuin toelaat: ligging, afmeting en hoogteverschillen.",
    },
    {
      n: "5",
      title: "Stappenplan",
      text: "Als het budget de aanleg nog belemmert, ontwikkelen we samen een stappenplan om in ieder geval een begin te maken met het realiseren van uw droomtuin.",
    },
    {
      n: "6",
      title: "Tuinaanleg",
      text: "Wanneer u besluit om de door Agterbos Hoveniers ontworpen tuin ook door ons aan te laten leggen, nemen wij de kosten van het ontwerp voor onze rekening.",
    },
  ],

  aanlegIntro: {
    title: "Tuinaanleg",
    lede: "Een tuin voor elk budget, vanuit ons ontwerp of vanuit uw eigen ideeën. Van kunstgras en verlichting tot tuinhout, water, sierbestrating en tuinobjecten.",
  },

  aanleg: [
    {
      id: "kunstgras",
      legend: "Kunstgras",
      title: "Kunstgras",
      text: "Kunstgras is onderhoudsarm, duurzaam en zuinig met water. Het is lastig te onderscheiden van echt gras.",
      photos: [
        {
          src: "/img/aanleg/kunstgras-aanleg.jpg",
          alt: "Kunstgras",
          width: 960,
          height: 720,
          caption: "Kunstgras",
        },
        {
          src: "/img/aanleg/kunstgras-detail.jpg",
          alt: "Kunstgras",
          width: 400,
          height: 400,
          caption: "Kunstgras",
          native: true,
        },
        {
          src: "/img/aanleg/kunstgras-onder-terras.jpg",
          alt: "Kunstgras",
          width: 500,
          height: 333,
          caption: "Kunstgras",
          native: true,
        },
      ] satisfies Photo[],
    },
    {
      id: "verlichting",
      legend: "Verlichting",
      title: "Tuinverlichting",
      text: "Verlichting geeft de tuin in de avond sfeer, ook vanuit de woonkamer.",
      photos: [
        {
          src: "/img/aanleg/tuinverlichting-avond.jpg",
          alt: "Tuinverlichting",
          width: 1280,
          height: 853,
          caption: "Tuinverlichting",
        },
        {
          src: "/img/aanleg/tuinverlichting-spot.jpg",
          alt: "Tuinverlichting",
          width: 768,
          height: 1024,
          caption: "Tuinverlichting",
        },
      ] satisfies Photo[],
    },
    {
      id: "tuinhout",
      legend: "Tuinhout",
      title: "Tuinhout",
      text: "Overkapping, pergola of prieel, schuttingen, vlonders en verrijdbare plantenbakken.",
      photos: [
        {
          src: "/img/aanleg/tuinhout-latwerk.jpg",
          alt: "Tuinhout",
          width: 500,
          height: 375,
          caption: "Tuinhout",
          native: true,
        },
        {
          src: "/img/aanleg/tuinhout-tafel.jpg",
          alt: "Tuinhout",
          width: 500,
          height: 333,
          caption: "Tuinhout",
          native: true,
        },
        {
          src: "/img/aanleg/tuinhout-vlonder.jpg",
          alt: "Tuinhout",
          width: 400,
          height: 400,
          caption: "Tuinhout",
          native: true,
        },
      ] satisfies Photo[],
    },
    {
      id: "vijver",
      legend: "Vijver",
      title: "Vijver en waterpartij",
      text: "Siervijvers, natuurvijvers, koivijvers en waterlopen. Ook de planten, de vissen en wat daarbij hoort.",
      photos: [
        {
          src: "/img/aanleg/vijver-fontein.jpg",
          alt: "Vijver en waterpartij",
          width: 2000,
          height: 1723,
          caption: "Vijver en waterpartij",
        },
        {
          src: "/img/aanleg/waterpartij-keien.jpg",
          alt: "Vijver en waterpartij",
          width: 500,
          height: 375,
          caption: "Vijver en waterpartij",
          native: true,
        },
        {
          src: "/img/aanleg/fontein-stralen.jpg",
          alt: "Vijver en waterpartij",
          width: 500,
          height: 333,
          caption: "Vijver en waterpartij",
          native: true,
        },
      ] satisfies Photo[],
    },
    {
      id: "sierbestrating",
      legend: "Bestrating",
      title: "Sierbestrating",
      text: "Trendy betontegels of waaltjes van vroeger. Voor bestrating werken we samen met Buiter Beton in Balkbrug.",
      photos: [
        {
          src: "/img/aanleg/sierbestrating-pad.jpg",
          alt: "Sierbestrating",
          width: 553,
          height: 350,
          caption: "Sierbestrating",
          native: true,
        },
        {
          src: "/img/aanleg/sierbestrating-waaltjes.jpg",
          alt: "Sierbestrating",
          width: 500,
          height: 332,
          caption: "Sierbestrating",
          native: true,
        },
        {
          src: "/img/aanleg/sierbestrating-mozaiek.jpg",
          alt: "Sierbestrating",
          width: 500,
          height: 373,
          caption: "Sierbestrating",
          native: true,
        },
      ] satisfies Photo[],
    },
    {
      id: "tuinobjecten",
      legend: "Objecten",
      title: "Tuinobjecten",
      text: "Potten, een zonnewijzer of een beeld geven de tuin een eigen accent.",
      photos: [
        {
          src: "/img/aanleg/tuinobject.jpg",
          alt: "Tuinobjecten",
          width: 1000,
          height: 750,
          caption: "Tuinobjecten",
        },
        {
          src: "/img/aanleg/border-met-objecten.jpg",
          alt: "Tuinobjecten",
          width: 2048,
          height: 813,
          caption: "Tuinobjecten",
        },
        {
          src: "/img/aanleg/gemetselde-bak.jpg",
          alt: "Tuinaanleg",
          width: 500,
          height: 375,
          caption: "Tuinaanleg",
          native: true,
        },
      ] satisfies Photo[],
    },
  ],

  onderhoud: {
    title: "Tuinonderhoud",
    lede: "Eenmalig, of als abonnement via een onderhoudscontract. Voor particulieren en bedrijven, het hele jaar door.",
    vormen: [
      {
        key: "Eenmalig",
        text: "Een losse beurt, wanneer de tuin het nodig heeft: snoeien, het gazon of een andere klus.",
      },
      {
        key: "Abonnement",
        text: "Een onderhoudscontract, zodat huis of bedrijf de tuin het jaar rond verzorgd houdt.",
      },
    ],
    parts: [
      {
        title: "Snoeien",
        text: "Snoeien doen we in het voorjaar en in het najaar. De beplanting blijft in vorm, op het moment dat de plant het vraagt.",
      },
      {
        title: "Gazononderhoud",
        text: "Een gazon is meer dan een maaibeurt. We sproeien, verticuteren en bemesten, en pakken mos en kale plekken aan.",
      },
      {
        title: "Bomen vellen",
        text: "Bomen vellen vraagt vakmanschap. Is een kapvergunning nodig, dan helpen we u daarbij.",
      },
      {
        title: "Bedrijfstuinen",
        text: "Ook voor bedrijven. Een verzorgde bedrijfstuin is het visitekaartje van uw onderneming, in elk seizoen.",
      },
    ],
    tipsTitle: "Oktober tot en met december",
    tipsIntro:
      "We zijn er vier seizoenen. De tips die we hier uitschrijven, gelden voor oktober tot en met december.",
    tips: [
      "Blad van het gazon halen",
      "Bemesten",
      "Bekalken",
      "Snoeien",
      "Eikenblad uit de border houden, omdat het zuur is",
    ],
  },

  partners: [
    { src: "/img/merken/buiter-beton.png", alt: "Buiter Beton", width: 110, height: 22 },
    { src: "/img/merken/kees-smit.png", alt: "Kees Smit", width: 110, height: 29 },
    { src: "/img/merken/de-vries.jpg", alt: "De Vries", width: 110, height: 42 },
    { src: "/img/merken/vario-kunstgras.png", alt: "Vario Kunstgras", width: 170, height: 48 },
    { src: "/img/merken/royal-grass.png", alt: "Royal Grass", width: 531, height: 531 },
  ],

  photos: {
    schets1: {
      src: "/img/ontwerp/tuinontwerp-schets-1.jpg",
      alt: "Handgetekend tuinontwerp",
      width: 472,
      height: 466,
      caption: "Handgetekend tuinontwerp",
      native: true,
    },
    schets2: {
      src: "/img/ontwerp/tuinontwerp-schets-2.jpg",
      alt: "Handgetekend tuinontwerp",
      width: 400,
      height: 398,
      caption: "Handgetekend tuinontwerp",
      native: true,
    },
    tekentafel: {
      src: "/img/ontwerp/tekentafel.jpg",
      alt: "Tuinontwerp aan de tekentafel bij Agterbos Hoveniers.",
      width: 3024,
      height: 3024,
      caption: "Tuinontwerp",
    },
    borders: {
      src: "/img/home/woning-tuin-borders.jpg",
      alt: "Tuin in Oldenzaal",
      width: 2048,
      height: 1536,
      caption: "Tuin in Oldenzaal",
    },
    team: {
      src: "/img/team/team-agterbos.jpg",
      alt: "Het team van Agterbos Hoveniers in Oldenzaal.",
      width: 4032,
      height: 1471,
      caption: "Het team van Agterbos Hoveniers in Oldenzaal.",
    },
    teamBus: {
      src: "/img/team/team-bij-bus.jpg",
      alt: "Het team van Agterbos Hoveniers.",
      width: 4032,
      height: 3024,
      caption: "Het team van Agterbos Hoveniers.",
    },
    bij: {
      src: "/img/onderhoud/bloei-bij.jpg",
      alt: "Bloei in de tuin",
      width: 5184,
      height: 3456,
      caption: "Bloei in de tuin",
      credit: "Foto: Monique",
    },
    vlinder: {
      src: "/img/onderhoud/vlinder.jpg",
      alt: "Vlinder in de tuin",
      width: 5184,
      height: 3456,
      caption: "Vlinder in de tuin",
      credit: "Foto: Monique",
    },
    border: {
      src: "/img/aanleg/border-met-objecten.jpg",
      alt: "Tuin in Oldenzaal",
      width: 2048,
      height: 813,
      caption: "Tuin in Oldenzaal",
    },
    bloei: {
      src: "/img/projecten/bloeiende-border.jpg",
      alt: "Bloei in de tuin",
      width: 5184,
      height: 3456,
      caption: "Bloei in de tuin",
    },
    minigraver: {
      src: "/img/aanleg/minigraver-aanleg.jpg",
      alt: "Tuinaanleg",
      width: 500,
      height: 375,
      caption: "Tuinaanleg",
      native: true,
    },
    minigraver2: {
      src: "/img/aanleg/minigraver-aanleg-2.jpg",
      alt: "Tuinaanleg",
      width: 500,
      height: 375,
      caption: "Tuinaanleg",
      native: true,
    },
    sbb: {
      src: "/img/badges/sbb-erkend-leerbedrijf.png",
      alt: "SBB Erkend leerbedrijf",
      width: 600,
      height: 600,
    },
  },

  mail: {
    subject: "Vraag over tuinontwerp, aanleg of onderhoud",
    concept:
      "Dit is een concept van Sleads. Er wordt niets automatisch verstuurd. De knop opent uw eigen e-mailprogramma, met een bericht aan info@agterbos-hoveniers.nl. U past de tekst aan en verstuurt hem zelf.",
  },

  footer: {
    kvk: "",
    socials: [
      {
        label: "Facebook",
        href: "https://www.facebook.com/Agterbos-Hoveniers-417004092004386/",
      },
    ],
  },
} as const;

export type Content = typeof content;
