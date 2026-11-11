/** Subtiele badge: markeert de site als concept van Sleads. Niet verwijderen in demo's. */
export default function SleadsBadge() {
  return (
    <a
      href="https://sleads.nl"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Concept door Sleads – bekijk sleads.nl"
      className="sleads-badge"
    >
      <span className="sleads-badge__dot" aria-hidden />
      Concept door <span className="sleads-badge__name">Sleads</span>
    </a>
  );
}
