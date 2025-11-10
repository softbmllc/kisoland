// components/Timeline.tsx
// Server component. Data-driven. A11y-first. Tailwind v3.

import Image from 'next/image';
import clsx from 'clsx';
import {
  TimelineData,
  yearToDateTime,
  validateTimeline,
  formatYear,
} from '@/types/timeline';

export type TimelineProps = {
  items: TimelineData;
  heading?: string; // opcional, accesible via aria-labelledby
  className?: string;
  compact?: boolean; // densidad visual
};

export default function Timeline({ items, heading, className, compact }: TimelineProps) {
  const errors = validateTimeline(items);
  if (process.env.NODE_ENV !== 'production' && errors.length) {
    // Dev aid: surfacing validation without crashing the page.
    console.warn('[Timeline] dataset inválido:', errors);
  }

  const labelId = heading ? 'tl-' + heading.toLowerCase().replace(/\s+/g, '-') : undefined;

  return (
    <section aria-labelledby={labelId} className={clsx('relative', className)}>
      {heading && (
        <h2 id={labelId} className="text-2xl font-semibold tracking-tight mb-6">
          {heading}
        </h2>
      )}

      <ol
        className={clsx(
          'relative border-s border-s-foreground/10 ps-6',
          compact ? 'space-y-6' : 'space-y-10'
        )}
      >
        {items.map((it) => (
          <li key={it.id} className="relative">
            {/* Nodo */}
            <span
              aria-hidden
              className="absolute -start-[7px] top-1.5 size-3 rounded-full bg-primary ring-2 ring-background"
            />

            <article className="grid gap-3 sm:grid-cols-[auto,1fr]">
              <header className="sm:col-span-2">
                <time
                  dateTime={yearToDateTime(it.year)}
                  className="inline-flex items-center gap-2 text-sm text-foreground/70"
                >
                  <span className="font-mono tabular-nums">{formatYear(it.year)}</span>
                  <span aria-hidden>•</span>
                  <span className="font-medium text-foreground">{it.title}</span>
                </time>
              </header>

              {it.image && (
                <div
                  className={clsx(
                    'relative overflow-hidden rounded-lg bg-foreground/5',
                    compact ? 'aspect-[16/9] w-full max-w-md' : 'aspect-[16/9] w-full max-w-xl'
                  )}
                >
                  <Image
                    src={it.image.src}
                    alt={it.image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 800px"
                    className="object-cover"
                    priority={false}
                  />
                </div>
              )}

              <div className="text-base leading-relaxed sm:self-center">
                <p className="text-foreground/90">{it.summary}</p>
                <div className="mt-2 flex flex-wrap items-center gap-3">
                  {it.arc && (
                    <span className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">
                      {it.arc}
                    </span>
                  )}
                  {it.href && (
                    <a
                      href={it.href}
                      className="inline-flex items-center gap-1 text-sm underline-offset-2 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded"
                    >
                      Ver más
                      <span aria-hidden>→</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </section>
  );
}