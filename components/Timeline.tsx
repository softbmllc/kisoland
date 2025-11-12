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
          'relative border-s ps-8 sm:ps-14 border-[var(--border)]/70',
          compact ? 'space-y-7 ps-8 sm:space-y-8 sm:ps-14' : 'space-y-8 ps-8 sm:space-y-10 sm:ps-14'
        )}
      >
        {items.map((it) => (
          <li key={it.id} className="relative pb-6">
            {/* Nodo */}
            <span
              aria-hidden
              className="hidden sm:block absolute -start-[14px] sm:-start-[18px] top-[0.48em] sm:top-[0.42em] w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[var(--foreground)] dark:bg-white ring-1 ring-[var(--border)] dark:ring-white/50 outline outline-2 outline-[var(--surface)]"
            />

            <article className="grid gap-3 sm:grid-cols-[auto,1fr]">
              <header className="sm:col-span-2">
                <time
                  dateTime={yearToDateTime(it.year)}
                  className="inline-flex items-center gap-2 text-[15px] font-medium text-foreground"
                >
                  <span className="font-mono font-semibold tabular-nums">{formatYear(it.year)}</span>
                  <span aria-hidden className="text-foreground/40 mx-2">-</span>
                  <span className="font-semibold tracking-tight text-foreground">{it.title}</span>
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

              <div className="text-base leading-relaxed sm:self-center max-w-[66ch]">
                <p className="text-foreground/95">{it.summary}</p>
                <div className="mt-2 flex flex-wrap items-center gap-3">
                  {it.arc && (
                    <span className="rounded-[9999px] px-2.5 py-[3px] text-xs font-medium bg-[var(--surface-alt)] text-foreground/85 ring-1 ring-[var(--border)]/40">
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