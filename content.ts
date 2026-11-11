/**
 * Agterbos Hoveniers — alleen geverifieerde feiten
 * (agterbos-hoveniers.nl, 11 nov 2026).
 * Geen oprichtingsjaar, geen KvK/BTW, geen openingstijden, geen reviews,
 * geen info@tuinopmaat.com, geen werkgebied buiten Oldenzaal, geen extra jaartallen.
 */
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
    accent: "#D46600",
    background: "#F4F1EA",
    foreground: "#222222",
    muted: "#E7EEE8",
    bosgroen: "#005133",
    bosgroenText: "#003D27",
    inkt: "#222222",
    schetspapier: "#F4F1EA",
    perk: "#E7EEE8",
    wit: "#FFFFFF",
    potlood: "#D46600",
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
    { label: "Over ons", href: "/over-ons" },
    { label: "Contact", href: "/contact" },
  ],

  hero: {
    title: "Van schets tot resultaat — uw hovenier in Oldenzaal.",
    subtitle:
      "Vier seizoenen per jaar ontwerpen, leggen en onderhouden wij tuinen die bij u passen: van een kleine stadstuin tot een klassieke tuin of een grote boerderijtuin.",
    primaryCta: { label: "Bel 06-20748056", href: "tel:+31620748056" },
    secondaryCta: { label: "Vrijblijvende afspraak", href: "/offerte" },
  },

  facts: [
    "Oldenzaal",
    "ruim 10 jaar",
    "erkend leerbedrijf",
    "vier seizoenen",
  ],

  contact: {
    owner: "Maurice Agterbos",
    companyLine: "Agterbos Hoveniers",
    address: "Meester Troelstrastraat 7",
    postcode: "7572 VX",
    city: "Oldenzaal",
    phone: "06-20748056",
    phoneTel: "+31620748056",
    landline: "0541 537 066",
    landlineTel: "+31541537066",
    email: "info@agterbos-hoveniers.nl",
    facebook: "https://www.facebook.com/Agterbos-Hoveniers-417004092004386/",
  },

  about: {
    title: "Ons team",
    intro:
      "Wij zijn geen sprekers maar doeners. Zet ons in de tuin en u zult zien wat we kunnen. Onze jarenlange ervaring ziet u terug in de ontwerpen en in de keuze voor planten en materialen.",
    experience: "Ruim 10 jaar ervaring in het creëren van droomtuinen.",
    spuitlicentie:
      "Deze verplichte licentie laat zien dat we over de juiste kennis en vaardigheden beschikken om verantwoord met gewasbeschermingsmiddelen aan het werk te gaan.",
    leerbedrijf:
      "Wij zijn een officieel leerbedrijf voor hoveniers in opleiding.",
    tagline: "Van schets tot resultaat",
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

  footer: {
    kvk: "",
    socials: [
      {
        label: "Facebook",
        href: "https://www.facebook.com/Agterbos-Hoveniers-417004092004386/",
      },
    ],
  },
};

export type Content = typeof content;
