// app/galeria/page.tsx
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galería — KISOLAND",
  description: "Imágenes clave del universo Kiso.",
  openGraph: {
    title: "Galería — KISOLAND",
    description: "Imágenes clave del universo Kiso.",
    images: [{ url: "/og/home.jpg", width: 1200, height: 630, alt: "KISOLAND — Universo Kiso" }],
  },
};

// helper para prefijo de ImageKit (o /public)
const IK = process.env.NEXT_PUBLIC_IK_BASE;
const src = (p: string) => (p.startsWith("http") ? p : IK ? `${IK.replace(/\/$/, "")}${p}` : p);

// Orbe Sagrado (12)
const orbe = [
  { id: "os-1",  thumb: src("https://ik.imagekit.io/devrodri/Orbe%20Sagrado/9.png"),  full: src("https://ik.imagekit.io/devrodri/Orbe%20Sagrado/9.png"),  alt: "Orbe Sagrado pieza 9" },
  { id: "os-2",  thumb: src("https://ik.imagekit.io/devrodri/Orbe%20Sagrado/14.png"), full: src("https://ik.imagekit.io/devrodri/Orbe%20Sagrado/14.png"), alt: "Orbe Sagrado pieza 14" },
  { id: "os-3",  thumb: src("https://ik.imagekit.io/devrodri/Orbe%20Sagrado/29.png"), full: src("https://ik.imagekit.io/devrodri/Orbe%20Sagrado/29.png"), alt: "Orbe Sagrado pieza 29" },
  { id: "os-4",  thumb: src("https://ik.imagekit.io/devrodri/Orbe%20Sagrado/13.png"), full: src("https://ik.imagekit.io/devrodri/Orbe%20Sagrado/13.png"), alt: "Orbe Sagrado pieza 13" },
  { id: "os-5",  thumb: src("https://ik.imagekit.io/devrodri/Orbe%20Sagrado/33.png"), full: src("https://ik.imagekit.io/devrodri/Orbe%20Sagrado/33.png"), alt: "Orbe Sagrado pieza 33" },
  { id: "os-6",  thumb: src("https://ik.imagekit.io/devrodri/Orbe%20Sagrado/26.png"), full: src("https://ik.imagekit.io/devrodri/Orbe%20Sagrado/26.png"), alt: "Orbe Sagrado pieza 26" },
  { id: "os-7",  thumb: src("https://ik.imagekit.io/devrodri/Orbe%20Sagrado/B28.png"), full: src("https://ik.imagekit.io/devrodri/Orbe%20Sagrado/B28.png"), alt: "Orbe Sagrado pieza B28" },
  { id: "os-8",  thumb: src("https://ik.imagekit.io/devrodri/Orbe%20Sagrado/25.png"), full: src("https://ik.imagekit.io/devrodri/Orbe%20Sagrado/25.png"), alt: "Orbe Sagrado pieza 25" },
  { id: "os-9",  thumb: src("https://ik.imagekit.io/devrodri/Orbe%20Sagrado/19.png"), full: src("https://ik.imagekit.io/devrodri/Orbe%20Sagrado/19.png"), alt: "Orbe Sagrado pieza 19" },
  { id: "os-10", thumb: src("https://ik.imagekit.io/devrodri/Orbe%20Sagrado/3.png"),  full: src("https://ik.imagekit.io/devrodri/Orbe%20Sagrado/3.png"),  alt: "Orbe Sagrado pieza 3" },
  { id: "os-11", thumb: src("https://ik.imagekit.io/devrodri/Orbe%20Sagrado/51.png"), full: src("https://ik.imagekit.io/devrodri/Orbe%20Sagrado/51.png"), alt: "Orbe Sagrado pieza 51" },
  { id: "os-12", thumb: src("https://ik.imagekit.io/devrodri/Orbe%20Sagrado/B1.png"),  full: src("https://ik.imagekit.io/devrodri/Orbe%20Sagrado/B1.png"),  alt: "Orbe Sagrado pieza B1" },
];

// Mundo Kiso (12)
const mk = [
  { id: "mk-1",  thumb: src("https://ik.imagekit.io/devrodri/MUNDO%20KISO/14.jpg"), full: src("https://ik.imagekit.io/devrodri/MUNDO%20KISO/14.jpg"), alt: "Mundo Kiso imagen 14" },
  { id: "mk-2",  thumb: src("https://ik.imagekit.io/devrodri/MUNDO%20KISO/29.jpg"), full: src("https://ik.imagekit.io/devrodri/MUNDO%20KISO/29.jpg"), alt: "Mundo Kiso imagen 29" },
  { id: "mk-3",  thumb: src("https://ik.imagekit.io/devrodri/MUNDO%20KISO/15.jpg"), full: src("https://ik.imagekit.io/devrodri/MUNDO%20KISO/15.jpg"), alt: "Mundo Kiso imagen 15" },
  { id: "mk-4",  thumb: src("https://ik.imagekit.io/devrodri/MUNDO%20KISO/38.jpg"), full: src("https://ik.imagekit.io/devrodri/MUNDO%20KISO/38.jpg"), alt: "Mundo Kiso imagen 38" },
  { id: "mk-5",  thumb: src("https://ik.imagekit.io/devrodri/MUNDO%20KISO/20.jpg"), full: src("https://ik.imagekit.io/devrodri/MUNDO%20KISO/20.jpg"), alt: "Mundo Kiso imagen 20" },
  { id: "mk-6",  thumb: src("https://ik.imagekit.io/devrodri/MUNDO%20KISO/33.jpg"), full: src("https://ik.imagekit.io/devrodri/MUNDO%20KISO/33.jpg"), alt: "Mundo Kiso imagen 33" },
  { id: "mk-7",  thumb: src("https://ik.imagekit.io/devrodri/MUNDO%20KISO/27.jpg"), full: src("https://ik.imagekit.io/devrodri/MUNDO%20KISO/27.jpg"), alt: "Mundo Kiso imagen 27" },
  { id: "mk-8",  thumb: src("https://ik.imagekit.io/devrodri/MUNDO%20KISO/24.jpg"), full: src("https://ik.imagekit.io/devrodri/MUNDO%20KISO/24.jpg"), alt: "Mundo Kiso imagen 24" },
  { id: "mk-9",  thumb: src("https://ik.imagekit.io/devrodri/MUNDO%20KISO/30.jpg"), full: src("https://ik.imagekit.io/devrodri/MUNDO%20KISO/30.jpg"), alt: "Mundo Kiso imagen 30" },
  { id: "mk-10", thumb: src("https://ik.imagekit.io/devrodri/MUNDO%20KISO/31.jpg"), full: src("https://ik.imagekit.io/devrodri/MUNDO%20KISO/31.jpg"), alt: "Mundo Kiso imagen 31" },
  { id: "mk-11", thumb: src("https://ik.imagekit.io/devrodri/MUNDO%20KISO/5.jpg"),  full: src("https://ik.imagekit.io/devrodri/MUNDO%20KISO/5.jpg"),  alt: "Mundo Kiso imagen 5" },
  { id: "mk-12", thumb: src("https://ik.imagekit.io/devrodri/MUNDO%20KISO/40.jpg"), full: src("https://ik.imagekit.io/devrodri/MUNDO%20KISO/40.jpg"), alt: "Mundo Kiso imagen 40" },
];

function ThumbsGrid({ items, group }: { items: typeof orbe; group: string }) {
  return (
    <>
      {/* radio "off" para poder cerrar */}
      <input id={`off-${group}`} type="radio" name={`lb-${group}`} className="hidden" defaultChecked />
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">
        {items.map((it, i) => {
          const prevId = items[(i - 1 + items.length) % items.length].id;
          const nextId = items[(i + 1) % items.length].id;
          return (
            <figure key={it.id} className="relative">
              {/* trigger */}
              <input id={it.id} type="radio" name={`lb-${group}`} className="peer hidden" />
              <label htmlFor={it.id} className="block cursor-zoom-in group">
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl ring-1 ring-[var(--border)] bg-[var(--card)] shadow-sm transition-transform duration-200 ease-out motion-safe:group-hover:shadow-md motion-safe:group-hover:scale-[1.01] motion-reduce:transition-none">
                  <Image
                    src={it.thumb}
                    alt={it.alt}
                    fill
                    sizes="(min-width:1280px) 25vw, (min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-200 ease-out group-hover:scale-105 motion-safe:group-hover:scale-105"
                    priority={i < 4}
                    placeholder="blur"
                    blurDataURL={`${it.thumb}?tr=w-32,h-24,bl-20,q-10,pr-true`}
                  />
                </div>
              </label>

              {/* overlay */}
              <div
                className="pointer-events-none fixed inset-0 z-[999] hidden items-center justify-center peer-checked:flex overscroll-contain"
                role="dialog"
                aria-modal="true"
                aria-label="Imagen ampliada"
              >
                {/* fondo para cerrar */}
                <label
                  htmlFor={`off-${group}`}
                  className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-zoom-out pointer-events-auto"
                  aria-label="Cerrar"
                />

                {/* navegación previa/siguiente */}
                <label
                  htmlFor={prevId}
                  className="absolute left-4 top-1/2 z-10 -translate-y-1/2 pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow hover:bg-white"
                  aria-label="Anterior"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </label>
                <label
                  htmlFor={nextId}
                  className="absolute right-4 top-1/2 z-10 -translate-y-1/2 pointer-events-auto inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow hover:bg-white"
                  aria-label="Siguiente"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </label>

                {/* imagen */}
                <figure className="relative z-10 w-full max-w-5xl p-4">
                  <Image
                    src={`${it.full}?tr=w-1600,h-1200,fo-auto,c-at_max,q-70,f-auto,dpr-2`}
                    alt={it.alt}
                    width={1600}
                    height={1200}
                    className="w-full h-auto max-h-[85vh] rounded-xl shadow-2xl"
                    priority
                  />
                  <div className="absolute top-6 left-6 inline-flex items-center rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium text-black shadow pointer-events-auto">
                    {i + 1}/{items.length}
                  </div>
                  <label
                    htmlFor={`off-${group}`}
                    className="absolute top-6 right-6 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-black shadow pointer-events-auto"
                  >
                    Cerrar
                  </label>
                </figure>
              </div>
            </figure>
          );
        })}
      </div>
    </>
  );
}

export default function Page() {
  return (
    <main className="theme mx-auto max-w-6xl px-4 py-16">
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">Galería</h1>
        <p className="mt-3 max-w-2xl opacity-80 text-sm md:text-base">
          Imágenes clave del universo Kiso.
        </p>
        <nav className="sticky top-16 z-20 mt-4" role="tablist" aria-label="Secciones de la galería">
          <div data-gallery-tabs className="inline-flex items-center gap-1 rounded-lg bg-[var(--card)] p-1 ring-1 ring-[var(--border)] shadow-sm">
            <a href="#orbe-sagrado" role="tab" className="px-3 py-1.5 text-sm rounded-md hover:bg-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--foreground)]/40">Orbe Sagrado</a>
            <a href="#mundo-kiso" role="tab" className="px-3 py-1.5 text-sm rounded-md hover:bg-white/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--foreground)]/40">Mundo Kiso</a>
          </div>
          <style>{`
            [data-gallery-tabs] a{transition:background-color .2s ease,box-shadow .2s ease,color .2s ease}
            :root:has(#orbe-sagrado:target) [data-gallery-tabs] a[href="#orbe-sagrado"],
            :root:has(#mundo-kiso:target) [data-gallery-tabs] a[href="#mundo-kiso"],
            :root:not(:has(:target)) [data-gallery-tabs] a[href="#orbe-sagrado"]{
              background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.08);color:#000
            }
          `}</style>
        </nav>
      </header>

      {/* Orbe Sagrado */}
      <section id="orbe-sagrado" className="scroll-mt-28">
        <h2 className="ty-h2 mb-4">Orbe Sagrado</h2>
        <ThumbsGrid group="orbe" items={orbe} />
      </section>

      {/* Mundo Kiso */}
      <section id="mundo-kiso" className="mt-12 scroll-mt-28">
        <h2 className="ty-h2 mb-4">Mundo Kiso</h2>
        <ThumbsGrid group="mk" items={mk} />
      </section>
      <script
        dangerouslySetInnerHTML={{
          __html: `(() => {
            const onKey = (e) => {
              const open = document.querySelector('input[type="radio"][name^="lb-"]:checked:not([id^="off-"])');
              if (!open) return;
              const group = open.name.replace('lb-','');
              if (e.key === 'Escape') {
                const off = document.getElementById('off-' + group);
                if (off) off.checked = true;
                e.preventDefault();
                return;
              }
              const name = open.name;
              const radios = Array.from(document.querySelectorAll('input[type="radio"][name="' + name + '"]:not([id^="off-"])'));
              const idx = radios.indexOf(open);
              if (e.key === 'ArrowRight') {
                radios[(idx + 1) % radios.length].checked = true;
                e.preventDefault();
              } else if (e.key === 'ArrowLeft') {
                radios[(idx - 1 + radios.length) % radios.length].checked = true;
                e.preventDefault();
              }
            };
            window.addEventListener('keydown', onKey);
          })();`
        }}
      />
    </main>
  );
}