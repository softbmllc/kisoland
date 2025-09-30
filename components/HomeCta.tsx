// components/HomeCta.tsx
import Link from "next/link";

export default function HomeCta() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-16">
      <div className="rounded-2xl p-6 md:p-8 ring-1 ring-[var(--border)]">
        <h3 className="text-xl font-bold">¿Listos para explorar?</h3>
        <p className="mt-2 opacity-90">
          Entrá al lore, revisá los símbolos y conectá para colaborar.
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Link
            href="/mundo-kiso"
            className="inline-flex items-center rounded-md px-5 py-2.5 text-sm font-medium shadow-sm bg-[var(--primary)] text-[var(--background)] hover:opacity-90 active:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
          >
            Ver Mundo Kiso
          </Link>
          <Link
            href="/quienes-somos"
            className="inline-flex items-center rounded-md px-5 py-2.5 text-sm font-medium shadow-sm bg-[var(--foreground)] text-[var(--background)] hover:opacity-90 active:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
          >
            Contacto
          </Link>
        </div>
      </div>
    </section>
  );
}