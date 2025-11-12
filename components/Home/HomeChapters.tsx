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
    image: "/og/home.jpg",
    alt: "Kisolab",
  },
  {
    href: "/focus-penalty",
    chip: "Experiencia",
    title: "Focus Penalty",
    desc: "Ciencia y penal.",
    image: "/og/home.jpg",
    alt: "Focus Penalty",
  },
  {
    href: "/mundo-kiso",
    chip: "Lore",
    title: "Mundo Kiso",
    desc: "Lore, mapa y símbolos.",
    image: "/og/home.jpg",
    alt: "Mundo Kiso",
  },
  {
    href: "/coleccion-del-orbe-sagrado",
    chip: "Archivo",
    title: "Orbe Sagrado",
    desc: "Colección y archivo.",
    image: "/og/home.jpg",
    alt: "Orbe Sagrado",
  },
  {
    href: "/competidor-integral",
    chip: "Desarrollo",
    title: "Competidor Integral",
    desc: "Carácter y desempeño.",
    image: "/og/home.jpg",
    alt: "Competidor Integral",
  },
  {
    href: "/carlos-alberto-plata",
    chip: "Autor",
    title: "Carlos Alberto Plata",
    desc: "Biografía y obra.",
    image: "/og/home.jpg",
    alt: "Carlos Alberto Plata",
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
            <Card className="relative overflow-hidden rounded-3xl ring-1 ring-[var(--border)] bg-[var(--surface)] shadow-md transition hover:-translate-y-[1px] hover:shadow-[0_8px_24px_rgba(0,0,0,.18)] duration-200">
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
                {/* chip */}
                <span className="absolute left-3 top-3 inline-flex items-center rounded-full px-2.5 py-[6px] text-[11px] tracking-[0.01em] leading-none text-[var(--chip-fg)] ring-1 ring-inset ring-[var(--chip-border)] bg-[var(--chip-bg)] backdrop-blur-[2px]">
                  {x.chip}
                </span>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-[var(--surface-foreground)] text-[16px] md:text-[18px] leading-[1.2] line-clamp-1">
                  {x.title}
                </h3>
                <p className="mt-1 text-[14px] leading-[1.5] text-[var(--surface-foreground)]/85 line-clamp-1">
                  {x.desc}
                </p>
                {/* CTA visual (la card completa es el link) */}
                <span className="mt-3 inline-flex w-fit items-center justify-center gap-1.5 rounded-full min-h-[36px] px-3 py-1.5 text-xs font-semibold text-[var(--btn-fg)] bg-[var(--btn-bg)] ring-1 ring-[var(--btn-border)] shadow-[var(--btn-shadow)] group-hover:shadow-[var(--btn-shadow-hover)] transition">
                  Entrar <span aria-hidden>→</span>
                </span>
              </div>

              {/* Vignette */}
              <span aria-hidden className="pointer-events-none absolute inset-x-0 bottom-0 h-12 rounded-b-3xl bg-gradient-to-t from-black/10 to-transparent" />
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}