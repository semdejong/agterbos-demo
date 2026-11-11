"use client";

import { FormEvent, useState } from "react";
import { mailtoHref } from "@/lib/mailto";

type Status = { tone: "ok" | "fout"; text: string } | null;

export function ContactForm({
  submitLabel,
  berichtLabel = "Bericht",
  placeholder = "Waar kunnen we u mee helpen?",
}: {
  submitLabel: string;
  berichtLabel?: string;
  placeholder?: string;
}) {
  const [status, setStatus] = useState<Status>(null);

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const naam = String(data.get("naam") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const telefoon = String(data.get("telefoon") ?? "").trim();
    const bericht = String(data.get("bericht") ?? "").trim();
    const toestemming = data.get("toestemming") === "ja";

    if (!naam || !email || !bericht) {
      setStatus({ tone: "fout", text: "Vul uw naam, e-mailadres en bericht in." });
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ tone: "fout", text: "Vul een geldig e-mailadres in." });
      return;
    }
    if (!toestemming) {
      setStatus({ tone: "fout", text: "Geef toestemming om dit bericht te laten opstellen." });
      return;
    }

    window.location.href = mailtoHref({ naam, email, telefoon, bericht });
    setStatus({
      tone: "ok",
      text: "Uw e-mailprogramma wordt geopend. Er is nog niets verzonden. U verstuurt het bericht zelf.",
    });
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate data-section="formulier">
      <div className="field">
        <label htmlFor="naam">Naam</label>
        <input id="naam" name="naam" type="text" autoComplete="name" placeholder="Uw naam" required />
      </div>
      <div className="field">
        <label htmlFor="email">E-mail</label>
        <input id="email" name="email" type="email" autoComplete="email" placeholder="uw@email.nl" required />
      </div>
      <div className="field">
        <label htmlFor="telefoon">Telefoon</label>
        <input id="telefoon" name="telefoon" type="tel" autoComplete="tel" placeholder="Uw telefoonnummer" />
      </div>
      <div className="field">
        <label htmlFor="bericht">{berichtLabel}</label>
        <textarea id="bericht" name="bericht" placeholder={placeholder} required />
      </div>
      <label className="check">
        <input type="checkbox" name="toestemming" value="ja" />
        <span>
          Ik ga ermee akkoord dat mijn gegevens in dit bericht worden gebruikt om contact met mij op te nemen. Dit
          conceptformulier verstuurt niets vanzelf.
        </span>
      </label>
      <div>
        <button type="submit" className="btn btn-solid">
          {submitLabel}
        </button>
      </div>
      {status ? (
        <p className="form-status" data-tone={status.tone} role="status">
          {status.text}
        </p>
      ) : null}
    </form>
  );
}
