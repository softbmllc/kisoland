// app/kisolab/page.tsx
import Link from "next/link";
import type { Metadata } from "next";
import Card from "@/components/ui/Card";
import Chip from "@/components/ui/Chip";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Kisolab - Investigación y prototipos | KISOLAND",
  description:
    "Laboratorio creativo y cultural que conecta la pasión por el fútbol con diseño, memoria e innovación. 8.000+ piezas, exposiciones, museos y proyectos itinerantes.",
  alternates: { canonical: "/kisolab" },
  openGraph: {
    title: "Kisolab - Investigación y prototipos | KISOLAND",
    description:
      "Laboratorio creativo y cultural que conecta la pasión por el fútbol con diseño, memoria e innovación. 8.000+ piezas, exposiciones, museos y proyectos itinerantes.",
    images: [
      { url: "/og/kisolab.jpg", width: 1200, height: 630, alt: "Kisolab - Investigación y prototipos" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kisolab - Investigación y prototipos | KISOLAND",
    description:
      "Laboratorio creativo y cultural que conecta la pasión por el fútbol con diseño, memoria e innovación. 8.000+ piezas, exposiciones, museos y proyectos itinerantes.",
    images: ["/og/kisolab.jpg"],
  },
};

export default function Page() {
  return (
    <main className="theme theme-kisolab bg-[var(--background)] text-[var(--foreground)]">
      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Hero / Intro */}
        <section className="rounded-3xl overflow-hidden">
          <div
            className="relative p-8 md:p-12"
            style={{
              background:
                "radial-gradient(140% 140% at 0% 0%, var(--hero-accent) 0%, transparent 55%), radial-gradient(160% 160% at 100% 100%, var(--hero-primary) 0%, transparent 65%), linear-gradient(to bottom, rgba(0,0,0,0.18), transparent 35%, rgba(0,0,0,0.28))",
            }}
          >
            <div className="relative">
              <p className="text-[10px] font-semibold tracking-[0.18em] text-[var(--foreground)]/90 mb-2">KISOLAB</p>
              <h1
                className="mt-3 ty-h1 text-white tracking-[-0.015em] md:whitespace-nowrap whitespace-normal"
                style={{ textWrap: "balance" }}
              >
                Laboratorio de investigación y prototipos
              </h1>
              <p className="mt-3 max-w-2xl ty-lead text-white/80">
                Kisolab es el espacio donde el universo Kiso se estudia, se ordena y se pone a prueba.
                Aquí conviven archivo, experimentación y procesos inspirados en la neurociencia: desde la concentración en el penal hasta la lectura visual de objetos, semillas y relatos.
                El laboratorio trabaja para transformar ideas dispersas en piezas claras (colecciones, prototipos y narrativas) que hacen visible la relación entre mente, pelota y cultura.
              </p>
              <nav
                className="mt-5 flex gap-2 overflow-x-auto"
                aria-label="Enfoques del laboratorio Kisolab"
              >
                {[
                  ["Investigación", "#investigacion"],
                  ["Narrativa", "#narrativa"],
                  ["Producto", "#producto"],
                ].map(([label, href]) => (
                  <Chip
                    key={href}
                    as="a"
                    href={href}
                    size="sm"
                    className="whitespace-nowrap rounded-full bg-white/10 text-white/90 border border-white/25 hover:bg-white/16 backdrop-blur-sm"
                  >
                    {label}
                  </Chip>
                ))}
              </nav>
              <div className="mt-5">
                <a
                  href="/quienes-somos#contacto"
                  className="inline-flex items-center rounded-full px-5 py-2.5 text-sm font-medium bg-[color:var(--ink)] text-white shadow-sm hover:bg-[color:var(--ink)]/90 dark:bg-white dark:text-[color:var(--background)] dark:hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[color:var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[color:var(--background)]"
                >
                  Contactar laboratorio
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Body */}
        <div className="mt-8 bg-background/80 p-6 md:p-8">
            {/* Bloques principales */}
            <section className="grid gap-5 md:grid-cols-3">
              <div id="investigacion" className="h-full">
                <Card
                  className="group relative rounded-2xl p-7 md:p-8 min-h-[16rem] border border-[var(--border)] bg-[color:var(--background)]/92 text-[color:var(--ink)] shadow-sm transition hover:-translate-y-[3px] hover:shadow-md hover:border-[var(--accent)]/60 flex flex-col h-full"
                >
                  <a
                    href="#investigacion"
                    aria-label="Investigación visual - ver más"
                    className="absolute inset-0 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/50"
                  />
                  <div className="flex-1">
                    <h3 className="ty-card-title">Investigación visual</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[color:var(--ink)]/85">
                      Estudio de camisetas, fotos, objetos y materiales con foco en forma, color y símbolos.
                      Lectura comparativa del archivo para identificar patrones culturales y decisiones estéticas.
                    </p>
                  </div>
                  <div className="mt-auto pt-8 flex justify-end pointer-events-none">
                    <span className="inline-flex items-center gap-1 text-sm font-medium text-[color:var(--ink)] hover:underline underline-offset-4">
                      Saber más <span aria-hidden>→</span>
                    </span>
                  </div>
                </Card>
              </div>
              <div id="narrativa" className="h-full">
                <Card
                  className="group relative rounded-2xl p-7 md:p-8 min-h-[16rem] border border-[var(--border)] bg-[color:var(--background)]/92 text-[color:var(--ink)] shadow-sm transition hover:-translate-y-[3px] hover:shadow-md hover:border-[var(--accent)]/60 flex flex-col h-full"
                >
                <a
                  href="#narrativa"
                  aria-label="Narrativa - ver más"
                  className="absolute inset-0 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/50"
                />
                <div className="flex-1">
                  <h3 className="ty-card-title">Narrativa</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--ink)]/85">
                    Organización de relatos, secuencias y conexiones entre piezas, culturas y personajes.
                    Estructuras coherentes que nacen de ideas dispersas y se traducen en capítulos y colecciones.
                  </p>
                </div>
                <div className="mt-auto pt-8 flex justify-end pointer-events-none">
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[color:var(--ink)] hover:underline underline-offset-4">
                    Saber más <span aria-hidden>→</span>
                  </span>
                </div>
                </Card>
              </div>
              <div id="producto" className="h-full">
                <Card
                  className="group relative rounded-2xl p-7 md:p-8 min-h-[16rem] border border-[var(--border)] bg-[color:var(--background)]/92 text-[color:var(--ink)] shadow-sm transition hover:-translate-y-[3px] hover:shadow-md hover:border-[var(--accent)]/60 flex flex-col h-full"
                >
                <a
                  href="#producto"
                  aria-label="Producto - ver más"
                  className="absolute inset-0 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/50"
                />
                <div className="flex-1">
                  <h3 className="ty-card-title">Producto</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--ink)]/85">
                    Prototipos de libros, objetos, indumentaria y piezas experimentales.
                    Ensayos que permiten convertir intuiciones en formatos concretos listos para exposición o circulación.
                  </p>
                </div>
                <div className="mt-auto pt-8 flex justify-end pointer-events-none">
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-[color:var(--ink)] hover:underline underline-offset-4">
                    Saber más <span aria-hidden>→</span>
                  </span>
                </div>
                </Card>
              </div>
            </section>

            {/* Archivo / piezas de estudio */}
            <section className="mt-12">
              <h2 className="ty-h2 text-[var(--foreground)]">Archivo en estudio</h2>
              <p className="mt-2 text-sm text-[var(--foreground)]/85 max-w-3xl">
                Kisolab trabaja con un archivo vivo de camisetas, pelotas, objetos y libros vinculados al
                universo del fútbol. Estas piezas no siempre forman parte de la narrativa principal del Orbe
                Sagrado, pero nutren las investigaciones visuales, los relatos y los prototipos que nacen en el
                laboratorio.
                {" "}
                [borrador - completar con textos del cliente]
              </p>
              <div className="mt-6 grid gap-5 md:grid-cols-3">
                <Card className="relative rounded-2xl border border-[var(--border)] bg-[color:var(--surface)] text-[color:var(--surface-foreground)] shadow-sm h-full">
                  <div className="flex flex-col h-full">
                    <Image
                      src="/kisolab/archive/camiseta.png"
                      alt="Camiseta de archivo Kisolab"
                      width={800}
                      height={600}
                      className="aspect-[4/3] w-full rounded-xl object-cover mb-3"
                    />
                    <h3 className="ty-card-title text-[1.05rem] md:text-[1.15rem] mb-2">
                      Camiseta de archivo
                    </h3>
                    <p className="text-sm leading-relaxed text-[color:var(--surface-foreground)]/85">
                      Camiseta histórica seleccionada por su diseño, contexto y estado de conservación. Ejemplo
                      de pieza que se estudia para decisiones de color, tipografía y símbolos.
                      {" "}
                      [placeholder - seleccionar modelo real]
                    </p>
                  </div>
                </Card>
                <Card className="relative rounded-2xl border border-[var(--border)] bg-[color:var(--surface)] text-[color:var(--surface-foreground)] shadow-sm h-full">
                  <div className="flex flex-col h-full">
                    <Image
                      src="/kisolab/archive/pelota.jpg"
                      alt="Pelota experimental del archivo Kisolab"
                      width={800}
                      height={600}
                      className="aspect-[4/3] w-full rounded-xl object-cover mb-3"
                    />
                    <h3 className="ty-card-title text-[1.05rem] md:text-[1.15rem] mb-2">
                      Pelota experimental
                    </h3>
                    <p className="text-sm leading-relaxed text-[color:var(--surface-foreground)]/85">
                      Pelota asociada a los estudios de 20 Semillas y ensayos con aceites o mieles. Referencia
                      para entender textura, peso, materiales y su relación con el gesto técnico.
                      {" "}
                      [placeholder - seleccionar pieza real]
                    </p>
                  </div>
                </Card>
                <Card className="relative rounded-2xl border border-[var(--border)] bg-[color:var(--surface)] text-[color:var(--surface-foreground)] shadow-sm h-full">
                  <div className="flex flex-col h-full">
                    <Image
                      src="/kisolab/archive/documentos.png"
                      alt="Documentos y libros del archivo Kisolab"
                      width={800}
                      height={600}
                      className="aspect-[4/3] w-full rounded-xl object-cover mb-3"
                    />
                    <h3 className="ty-card-title text-[1.05rem] md:text-[1.15rem] mb-2">
                      Libro y documentos
                    </h3>
                    <p className="text-sm leading-relaxed text-[color:var(--surface-foreground)]/85">
                      Libros, recortes y documentos que Kisolab utiliza como referencia para cronologías, reglas
                      y contextos culturales del juego de pelota en distintas épocas.
                      {" "}
                      [placeholder - definir título específico]
                    </p>
                  </div>
                </Card>
              </div>
            </section>

            {/* Proyectos + Método */}
            <section className="mt-12 grid gap-8 md:grid-cols-2">
              <div className="space-y-4">
                <h2 className="ty-h2 text-[var(--foreground)]">Proyectos en curso</h2>
                <ul className="list-disc pl-5 space-y-1.5 text-[var(--foreground)]/90">
                  <li>
                    <Link prefetch href="/focus-penalty" className="underline underline-offset-4">Focus Penalty</Link> - línea de entrenamiento y foco
                  </li>
                  <li>
                    <Link prefetch href="/coleccion-del-orbe-sagrado" className="underline underline-offset-4">Colección del Orbe Sagrado</Link> - piezas y relatos
                  </li>
                  <li>
                    <Link prefetch href="/indumentaria" className="underline underline-offset-4">Indumentaria Kiso</Link> - drops y edición limitada
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="ty-h2 text-[var(--foreground)]">Método</h2>
                <ul className="list-disc pl-5 space-y-1.5 text-[var(--foreground)]/90">
                  <li>Exploración del archivo físico y digital.</li>
                  <li>Síntesis de ideas dispersas en estructuras claras.</li>
                  <li>Prototipado rápido (visual, narrativo o material).</li>
                  <li>Iteración guiada por criterios de claridad, foco y uso.</li>
                  <li>Documentación breve para revisión interna.</li>
                </ul>
              </div>
            </section>


            <section className="mt-12 border-t border-[var(--border)] pt-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="space-y-2">
                  <h3 className="ty-h2 text-[var(--foreground)] text-base md:text-lg">
                    Compartí tus procesos con Kisolab
                  </h3>
                  <p className="text-sm text-[var(--foreground)]/80 max-w-xl">
                    ¿Tenés fotos, bocetos, camisetas o notas que dialogan con el universo Kiso? Enviá un mensaje breve
                    y podemos ayudarte a convertirlos en parte del archivo o de futuras galerías.
                    <span className="opacity-70"> [borrador - completar con instrucciones del cliente]</span>
                  </p>
                </div>
                <div className="mt-2 md:mt-0">
                  <Link
                    prefetch
                    href="/quienes-somos#contacto"
                    className="inline-flex items-center rounded-full px-4 py-2 text-sm font-medium border border-[var(--border)] text-[color:var(--ink)] hover:bg-[color:var(--surface)]/70"
                  >
                    Enviar material al laboratorio
                  </Link>
                </div>
              </div>
              <div className="mt-4 text-xs text-[var(--foreground)]/60 flex flex-wrap gap-3 items-center">
                <span>También podés explorar:</span>
                <Link prefetch href="/mundo-kiso" className="underline underline-offset-2">
                  Mundo Kiso
                </Link>
                <span aria-hidden className="opacity-40">·</span>
                <Link prefetch href="/competidor-integral" className="underline underline-offset-2">
                  Competidor Integral
                </Link>
                <span aria-hidden className="opacity-40">·</span>
                <Link prefetch href="/coleccion-del-orbe-sagrado" className="underline underline-offset-2">
                  Colección del Orbe Sagrado
                </Link>
                <span aria-hidden className="opacity-40">·</span>
                <Link prefetch href="/indumentaria" className="underline underline-offset-2">
                  Indumentaria
                </Link>
              </div>
            </section>
          </div>
      </div>
    </main>
  );
}