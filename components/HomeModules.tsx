// components/HomeModules.tsx
import Link from "next/link";

export default function HomeModules() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-8">
      <h2 className="sr-only">Secciones principales</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { href: "/kisolab", t: "Kisolab", d: "Investigación y prototipos." },
          { href: "/focus-penalty", t: "Focus Penalty", d: "Ciencia y penal." },
          { href: "/mundo-kiso", t: "Mundo Kiso", d: "Lore, mapa y símbolos." },
          {
            href: "/coleccion-del-orbe-sagrado",
            t: "Orbe Sagrado",
            d: "Colección y archivo.",
          },
        ].map((x) => (
          <Link
            key={x.t}
            href={x.href}
            className="group rounded-xl p-5 ring-1 ring-[var(--border)] hover:ring-2 transition"
          >
            <h3 className="font-semibold">{x.t}</h3>
            <p className="mt-1 text-sm opacity-80">{x.d}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}