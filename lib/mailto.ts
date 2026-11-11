import { content } from "@/content";

const EMAIL = "info@agterbos-hoveniers.nl";

function clean(value: string, max: number) {
  return value.replace(/[\r\n\t]+/g, " ").trim().slice(0, max);
}

export function mailtoHref(fields?: {
  naam?: string;
  email?: string;
  telefoon?: string;
  bericht?: string;
}) {
  const naam = clean(fields?.naam ?? "", 120);
  const email = clean(fields?.email ?? "", 120);
  const telefoon = clean(fields?.telefoon ?? "", 40);
  const bericht = clean(fields?.bericht ?? "", 700);
  const subject = content.mail.subject;
  const body = [
    "Beste Maurice Agterbos,",
    "",
    "Graag een vrijblijvende afspraak. Een gesprek verplicht mij tot niets. Ik wil de mogelijkheden voor tuinontwerp, tuinaanleg of tuinonderhoud bekijken.",
    "",
    `Naam: ${naam}`,
    `E-mail: ${email}`,
    `Telefoon: ${telefoon}`,
    "",
    "Bericht:",
    bericht,
    "",
    "Opgesteld via een concept van Sleads. Nog niet verzonden.",
  ].join("\n");

  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
