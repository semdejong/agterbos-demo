type Item = { key: string; label: string; href?: string };

export function Legenda({
  items,
  label = "Legenda",
}: {
  items: readonly Item[];
  label?: string;
}) {
  const linked = items.some((item) => item.href);
  const Tag = linked ? "nav" : "div";

  return (
    <Tag className="legenda" aria-label={linked ? label : undefined}>
      <ol>
        {items.map((item) => {
          const body = (
            <>
              <span className="legenda__key">{item.key}</span>
              <span className="legenda__label">{item.label}</span>
            </>
          );
          return (
            <li key={item.key}>
              {item.href ? <a href={item.href}>{body}</a> : body}
            </li>
          );
        })}
      </ol>
    </Tag>
  );
}
