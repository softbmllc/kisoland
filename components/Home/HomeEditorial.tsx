// components/Home/HomeEditorial.tsx
import Link from "next/link";

export default function HomeEditorial() {
  return (
    <section
      aria-label="Editorial"
      className="mx-auto md:max-w-6xl px-4 md:px-0 py-14 bg-[var(--surface)] text-[var(--surface-foreground)] rounded-3xl ring-1 ring-[var(--border)] shadow-md"
    >
      <div className="max-w-3xl mx-auto text-center space-y-4">
        <h2 className="ty-h2">Universo Kiso</h2>
        <p className="ty-body text-[var(--muted-foreground)]">
          Kiso explora la memoria del fútbol desde Kyūshū: investigación, artefactos y juego como lenguaje. Este sitio
          reúne capítulos y relatos para navegar la obra con claridad.
        </p>
        <Link
          href="/quienes-somos"
          className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-2 text-sm font-semibold text-[var(--btn-fg)] bg-[var(--btn-bg)] ring-1 ring-[var(--btn-border)] shadow-[var(--btn-shadow)] hover:shadow-[var(--btn-shadow-hover)] active:shadow-[var(--btn-shadow)] active:translate-y-[1px] transition-transform duration-150"
        >
          Quiénes somos <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}