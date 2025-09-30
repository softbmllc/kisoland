// components/HomeHighlights.tsx
import Link from "next/link";

export default function HomeHighlights() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="grid gap-6 md:grid-cols-2">
        <article className="rounded-2xl p-6 ring-1 ring-[var(--border)]">
          <h3 className="text-lg font-semibold">Competidor Integral</h3>
          <p className="mt-2 text-sm opacity-90">
            Ética y entrenamiento para formar carácter y desempeño.
          </p>
          <div className="mt-4">
            <Link
              href="/competidor-integral"
              className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium shadow-sm bg-[var(--primary)] text-[var(--background)] hover:opacity-90 active:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
            >
              Ver más
            </Link>
          </div>
        </article>

        <article className="rounded-2xl p-6 ring-1 ring-[var(--border)]">
          <h3 className="text-lg font-semibold">Carlos Alberto Plata</h3>
          <p className="mt-2 text-sm opacity-90">
            Creador del universo Kiso. Biografía y obra.
          </p>
          <div className="mt-4">
            <Link
              href="/carlos-alberto-plata"
              className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium shadow-sm bg-[var(--foreground)] text-[var(--background)] hover:opacity-90 active:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--accent)] focus-visible:outline-offset-2"
            >
              Leer bio
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}