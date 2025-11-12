// components/Home/HomeCTA.tsx
import Link from "next/link";

export default function HomeCTA() {
  return (
    <section
      aria-label="Llamado a la acción final"
      className="mx-auto md:max-w-6xl px-4 md:px-0 py-16 text-center"
    >
      <h2 className="ty-h2 mb-6 text-[var(--surface-foreground)]">¿Querés seguir explorando el universo Kiso?</h2>
      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
        <Link
          href="/mundo-kiso"
          className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-[var(--btn-fg)] bg-[var(--btn-bg)] ring-1 ring-[var(--btn-border)] shadow-[var(--btn-shadow)] hover:shadow-[var(--btn-shadow-hover)] active:shadow-[var(--btn-shadow-active)] active:translate-y-[1px] transition-transform duration-150"
        >
          Ver Mundo Kiso <span aria-hidden>→</span>
        </Link>
        <Link
          href="/contacto"
          className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium text-[var(--surface-foreground)] ring-1 ring-[var(--border)] hover:bg-white/6 transition"
        >
          Contacto
        </Link>
      </div>
    </section>
  );
}