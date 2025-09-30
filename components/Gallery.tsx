// components/Gallery.tsx — limpio y tipado
// Uso: <Gallery items={[{src:"/img.jpg", alt:"..."}, ...]} />

type Item = {
  id?: string | number;
  src?: string; // preferido
  img?: string; // compat
  alt?: string;
  title?: string;
};

type Props = {
  items?: Item[];
  cols?: { base?: 1 | 2 | 3 | 4; sm?: 2 | 3 | 4; md?: 3 | 4 | 5 | 6 };
};

function colsClass(n?: number, prefix = "") {
  switch (n) {
    case 1:
      return `${prefix}grid-cols-1`;
    case 2:
      return `${prefix}grid-cols-2`;
    case 3:
      return `${prefix}grid-cols-3`;
    case 4:
      return `${prefix}grid-cols-4`;
    case 5:
      return `${prefix}grid-cols-5`;
    case 6:
      return `${prefix}grid-cols-6`;
    default:
      return prefix ? `${prefix}grid-cols-4` : `grid-cols-2`;
  }
}

export default function Gallery({ items = [], cols = { base: 2, sm: 3, md: 4 } }: Props) {
  if (!items.length) items = Array.from({ length: 6 }).map((_, i) => ({ id: i + 1 }));

  const grid = [
    "grid gap-3",
    colsClass(cols.base),
    cols.sm ? colsClass(cols.sm, "sm:") : "sm:grid-cols-3",
    cols.md ? colsClass(cols.md, "md:") : "md:grid-cols-4",
  ].join(" ");

  return (
    <div className={grid}>
      {items.map((it, idx) => {
        const key = it.id ?? it.src ?? it.img ?? idx;
        const src = it.src ?? it.img;
        const alt = it.alt ?? it.title ?? "";
        return (
          <figure key={key} className="rounded-lg ring-1 ring-[var(--border)] bg-card/60 aspect-[4/3] overflow-hidden">
            {src ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={src} alt={alt} className="h-full w-full object-cover" />
            ) : (
              <div className="h-full w-full bg-[radial-gradient(120%_120%_at_10%_0%,rgba(0,0,0,0.06)_0%,transparent_60%),radial-gradient(140%_140%_at_90%_100%,rgba(0,0,0,0.06)_0%,transparent_60%)]" />
            )}
            {it.title ? (
              <figcaption className="px-2 py-1 text-[11px] opacity-70">{it.title}</figcaption>
            ) : null}
          </figure>
        );
      })}
    </div>
  );
}