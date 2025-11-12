// components/Home/HomeHighlights.tsx
import Image from "next/image";
import Link from "next/link";
import { homeHighlights } from "@/src/data/homeHighlights";

export default function HomeHighlights() {
  if (!homeHighlights.length) return null;

  return (
    <section aria-label="Destacados" className="mx-auto md:max-w-6xl px-4 md:px-0 py-10">
      <header className="mb-4 flex items-center justify-between">
        <h2 className="ty-h2">Destacados</h2>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {homeHighlights.map((item) => (
          <article
            key={item.slug}
            className="group relative overflow-hidden rounded-3xl ring-1 ring-[var(--border)] bg-[var(--surface)] shadow-md transition hover:-translate-y-[1px] hover:shadow-[0_8px_24px_rgba(0,0,0,.18)] duration-200"
          >
            {/* Media 16:9 */}
            <div className="relative aspect-[16/9] w-full">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover select-none"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-semibold text-[var(--surface-foreground)] text-[17px] md:text-[18px] leading-tight line-clamp-1">
                {item.title}
              </h3>
              <p className="mt-1 text-[14px] leading-[1.5] text-[var(--surface-foreground)]/85 line-clamp-3">
                {item.excerpt}
              </p>

              <Link
                href={`/${item.slug}`}
                className="mt-3 inline-flex w-fit items-center justify-center gap-1.5 rounded-full min-h-[36px] px-3 py-1.5 text-xs font-semibold text-[var(--btn-fg)] bg-[var(--btn-bg)] ring-1 ring-[var(--btn-border)] shadow-[var(--btn-shadow)] hover:shadow-[var(--btn-shadow-hover)] transition"
                aria-label={`Ver más sobre ${item.title}`}
              >
                Ver más <span aria-hidden>→</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}