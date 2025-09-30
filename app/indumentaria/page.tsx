// app/indumentaria/page.tsx
export const metadata = {
  title: "Indumentaria Kiso — Kisoland",
  description:
    "Colección de indumentaria y accesorios oficiales del universo Kiso.",
};

export default function Page() {
  return (
    <main className="theme mx-auto max-w-6xl px-4 py-16">
      <header className="mb-10">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Indumentaria Kiso
        </h1>
        <p className="mt-3 max-w-2xl opacity-80">
          Prendas y accesorios con identidad Kiso. Drops limitados, materiales
          cuidados y calces pensados para entrenar y vivir con intención.
        </p>
      </header>

      {/* Cards placeholder — luego se reemplaza por catálogo del admin */}
      <section className="grid gap-6 md:grid-cols-3">
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