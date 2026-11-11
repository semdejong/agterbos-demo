/** Klein titelblok, zoals op een tuinontwerp. */
export function Bladstempel({ blad }: { blad: string }) {
  return (
    <dl className="bladstempel">
      <dt>Blad</dt>
      <dd>{blad}</dd>
      <dt>Plaats</dt>
      <dd>Oldenzaal</dd>
      <dt>Lijn</dt>
      <dd>
        Van schets
        <br />
        tot resultaat
      </dd>
    </dl>
  );
}
