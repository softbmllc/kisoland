// app/terminos/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones - KISOLAND",
  description: "Condiciones de uso del sitio, propiedad intelectual y limitaciones de responsabilidad.",
  openGraph: {
    title: "Términos y Condiciones - KISOLAND",
    description: "Condiciones de uso del sitio, propiedad intelectual y limitaciones de responsabilidad.",
    images: [{ url: "/og/home.jpg", width: 1200, height: 630, alt: "KISOLAND - Universo Kiso" }],
  },
};

export default function Page() {
  return (
    <main className="theme mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Términos y Condiciones</h1>
      <p className="mt-2 text-sm opacity-70">Última actualización: {new Date().toISOString().slice(0,10)}</p>

      <section className="mt-8 space-y-6">
        <div>
          <h2 className="text-lg font-semibold">1. Uso del sitio</h2>
          <p className="mt-2 opacity-80 text-sm">
            El contenido es para revisión interna y difusión informativa. No se garantiza disponibilidad continua.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">2. Propiedad intelectual</h2>
          <p className="mt-2 opacity-80 text-sm">
            Las obras, textos e imágenes pertenecen a sus autores. No se permite reproducción sin autorización.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">3. Limitación de responsabilidad</h2>
          <p className="mt-2 opacity-80 text-sm">
            No asumimos responsabilidad por decisiones tomadas a partir del contenido publicado.
          </p>
        </div>
        <div>
          <h2 className="text-lg font-semibold">4. Contacto</h2>
          <p className="mt-2 opacity-80 text-sm">
            Consultas legales: <a className="underline underline-offset-4" href="mailto:legal@kisoland.com">legal@kisoland.com</a>
          </p>
        </div>
      </section>
    </main>
  );
}