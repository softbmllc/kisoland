// components/Home/HomeChapters.tsx
import Link from "next/link";
import Image from "next/image";
import Card from "@/components/ui/Card";

type Chapter = {
  href: string;
  chip: string;
  title: string;
  desc: string;
  image: string; // 4:3 placeholder or page-specific OG
  alt: string;
};

const CHAPTERS: Chapter[] = [
  {
    href: "/kisolab",
    chip: "Laboratorio",
    title: "Kisolab",
    desc: "Investigación y prototipos.",
    image: "/cards/kisolab.jpg",
    alt: "Mesa de trabajo con pergamino",
  },
  {
    href: "/mundo-kiso",
    chip: "Relato",
    title: "Mundo Kiso",
    desc: "Relato, mapa y símbolos.",
    image: "/cards/mundo-kiso.jpg",
    alt: "Mapa de islas y mares",
  },
  {
    href: "/coleccion-del-orbe-sagrado",
    chip: "Archivo",
    title: "Orbe Sagrado",
    desc: "Colección y archivo.",
    image: "/cards/orbe-sagrado.jpg",
    alt: "Orbe sagrado en primer plano",
  },
  {
    href: "/focos-penalty",
    chip: "Experiencia",
    title: "Focus Penalty",
    desc: "Ciencia del penal.",
    image: "/cards/focus-penalty.jpg",
    alt: "Punto de penal con balón",
  },
  {
    href: "/competidor-integral",
    chip: "Desarrollo",
    title: "Competidor Integral",
    desc: "Carácter y rendimiento.",
    image: "/cards/competidor-integral.jpg",
    alt: "Diagrama táctico minimalista",
  },
  {
    href: "/carlos-alberto-plata",
    chip: "Autor",
    title: "Carlos Alberto Plata",
    desc: "Biografía y obra.",
    image: "/cards/carlos-alberto-plata.jpg",
    alt: "Símbolos de autor y obra",
  },
];

export default function HomeChapters() {
  return (
    <section aria-label="Explorar capítulos" className="mx-auto md:max-w-6xl px-4 md:px-0 py-10">
      <header className="mb-4 flex items-center justify-between">
        <h2 className="ty-h2">Explorar capítulos</h2>
        <Link
          href="/mundo-kiso"
          className="text-sm underline underline-offset-4 decoration-[var(--border)] hover:decoration-[var(--foreground)]/60"
        >
          Ver todos
        </Link>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
        {CHAPTERS.map((x) => (
          <Link
            key={x.href}
            href={x.href}
            aria-label={`${x.title}: ${x.desc}`}
            className="group"
          >
            <Card className="relative overflow-hidden rounded-3xl ring-1 ring-[var(--border)] bg-[var(--surface)] shadow-md sm:shadow-[0_8px_24px_rgba(0,0,0,.18)] transition hover:-translate-y-[1px] duration-200">
              {/* Media 4:3 */}
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={x.image}
                  alt={x.alt}
                  fill
                  sizes="(min-width: 768px) 33vw, 50vw"
                  className="object-cover select-none"
                  priority={false}
                />
                <span
                  className="absolute left-2 bottom-2 inline-flex items-center rounded-full px-2 py-[5px] text-[10px] leading-none text-white ring-1 ring-white/40 bg-black/55 md:left-3 md:top-3 md:bottom-auto md:px-3 md:py-[6px] md:text-[11px] md:text-[var(--surface-foreground)] md:ring-[var(--chip-bg)] md:bg-[var(--chip-bg)] md:backdrop-blur-[2px]"
                >
                  {x.chip}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-[var(--surface-foreground)] text-[15px] md:text-[18px] leading-[1.25] md:leading-[1.2] pr-1 md:pr-0 line-clamp-1">
                  {x.title}
                </h3>
                <p className="mt-1 text-[14px] leading-[1.5] text-[var(--surface-foreground)]/85 line-clamp-1">
                  {x.desc}
                </p>
                {/* CTA visual (la card completa es el link) */}
                <span className="mt-3 inline-flex w-fit items-center justify-center gap-1.5 rounded-full min-h-[36px] px-3 py-1.5 text-xs font-semibold text-[var(--btn-fg)] sm:text-[13px] sm:min-h-[38px] sm:px-3.5 sm:py-1.5 ring-1 ring-[var(--btn-border)] sm:ring-2 sm:ring-white/20 sm:bg-white/85 sm:text-[var(--btn-fg)] shadow-[var(--btn-shadow)] sm:shadow-[0_8px_12px_rgba(0,0,0,.12)] dark:bg-black/60 dark:text-white dark:ring-white/20">
                  Entrar <span aria-hidden>→</span>
                </span>
              </div>

              {/* Vignette */}
              <span aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-16 md:h-12 rounded-b-3xl bg-gradient-to-t from-black/28 sm:from-black/28 to-transparent" />
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}