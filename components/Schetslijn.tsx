/** Dunne, licht onregelmatige potloodlijn. Geen golf, geen meetlint. */
export function Schetslijn({ ticks }: { ticks?: readonly string[] }) {
  return (
    <div className="schetslijn" aria-hidden="true">
      <svg className="schetslijn__svg" viewBox="0 0 1200 12" preserveAspectRatio="none">
        <path
          pathLength="1"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.15"
          vectorEffect="non-scaling-stroke"
          d="M0 6.2 H96 L97 6.7 H240 L241 5.9 H418 L419 6.6 H640 L641 6.1 H812 L813 6.8 H1004 L1005 6.2 H1200"
        />
      </svg>
      {ticks && ticks.length > 0 ? (
        <ol className="schetslijn__ticks">
          {ticks.map((tick) => (
            <li key={tick}>{tick}</li>
          ))}
        </ol>
      ) : null}
    </div>
  );
}
