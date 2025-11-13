// app/indumentaria/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indumentaria - KISOLAND",
  description:
    "Colección de indumentaria y accesorios oficiales del universo Kiso.",
  alternates: { canonical: "/indumentaria" },
  openGraph: {
    title: "Indumentaria - KISOLAND",
    description:
      "Colección de indumentaria y accesorios oficiales del universo Kiso.",
    images: [
      { url: "/og/indumentaria.jpg", width: 1200, height: 630, alt: "Indumentaria - KISOLAND" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Indumentaria - KISOLAND",
    description:
      "Colección de indumentaria y accesorios oficiales del universo Kiso.",
    images: ["/og/indumentaria.jpg"],
  },
};

export default function Page() {
  return (
    <main className="theme mx-auto max-w-6xl px-4 py-16">
      <section className="mb-12 rounded-2xl border p-8 md:p-12 bg-[linear-gradient(135deg,hsl(var(--accent))_0%,transparent_60%)]">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Indumentaria Kiso</h1>
        <p className="mt-3 max-w-2xl opacity-80">
          Prendas y accesorios con identidad Kiso. Drops limitados, materiales
          cuidados y calces pensados para entrenar y vivir con intención.
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="#catalogo"
            aria-disabled="true"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 pointer-events-none opacity-50"
          >
            Ver catálogo
          </a>
          <span className="inline-flex items-center rounded-md border border-border px-3 py-1 text-sm">
            Próximamente
          </span>
        </div>
      </section>

      {/* Cards placeholder - luego se reemplaza por catálogo del admin */}
      <section id="catalogo" className="grid gap-6 md:grid-cols-3">
        {[
          ["Remera Kiso Logo", "Unisex, algodón. Talles S–XL."],
          ["Hoodie Kisoland", "Abrigo medio. Talles S–XL."],
          ["Gorra Emblema", "Ajustable. Único."],
        ].map(([name, desc]) => (
          <article
            key={name}
            className="rounded-lg border p-4 bg-card text-card-foreground"
          >
            <h3 className="font-semibold">{name}</h3>
            <p className="mt-2 text-sm opacity-80">{desc}</p>
          </article>
        ))}
      </section>

      <section className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Guía de talles</h2>
          <p className="opacity-80">
            Tabla de medidas en preparación. Si nos pasan el cuadro oficial
            (en cm) lo maquetamos acá y lo linkeamos desde cada producto.
          </p>
          <ul className="list-disc pl-5 text-sm opacity-80 space-y-1">
            <li>Remeras: ancho/alto por talle</li>
            <li>Hoodies: ancho/alto + largo de manga</li>
            <li>Accesorios: medidas específicas</li>
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Materiales y cuidado</h2>
          <ul className="list-disc pl-5 text-sm opacity-80 space-y-1">
            <li>Algodón peinado / mezcla técnica</li>
            <li>Lavar con agua fría y del revés</li>
            <li>No usar blanqueador / plancha baja</li>
          </ul>
        </div>
      </section>

      <footer className="mt-12 border-t pt-6 text-sm opacity-80">
        ¿Agregamos política de cambios y envíos aquí? Pásenla y la dejamos
        fija y enlazada al checkout cuando lo activemos.
      </footer>
    </main>
  );
}