// components/OrbeCollage.tsx — collage hero para Orbe Sagrado
import Image from "next/image";

// PNGs en /public/orbe-sagrado/hero/
const pieces = [
  { src: "/orbe-sagrado/hero/2-2.png", alt: "Botines antiguos 1" },
  { src: "/orbe-sagrado/hero/28.png", alt: "Balón cuero 1" },
  { src: "/orbe-sagrado/hero/36.png", alt: "Botines antiguos 2" },
  { src: "/orbe-sagrado/hero/B15.png", alt: "Balón cuero 2" },
  { src: "/orbe-sagrado/hero/44.png", alt: "Botines rojos" },
  { src: "/orbe-sagrado/hero/B13.png", alt: "Balón cuero 3" },
  { src: "/orbe-sagrado/hero/B2.png", alt: "Balón cuero 4" },
  { src: "/orbe-sagrado/hero/B17.png", alt: "Botines antiguos 3" },
  { src: "/orbe-sagrado/hero/B4.png", alt: "Balón cuero 5" },
];

export default function OrbeCollage() {
  return (
    <figure className="relative overflow-hidden rounded-3xl ring-1 ring-[var(--border)]">
      {/* Fondo a paleta */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 120% at 10% 0%, var(--accent) 0%, transparent 60%), radial-gradient(140% 140% at 90% 100%, var(--primary) 0%, transparent 60%)",
        }}
      />

      {/* Lienzo */}
      <div className="aspect-[3/2] p-3 md:p-4 md:aspect-auto">
        <div className="grid h-full w-full grid-cols-3 gap-2.5 md:grid-cols-12 md:[grid-auto-rows:120px]">
          {pieces.map((p, i) => {
            const layoutMd = [
              "md:col-start-1 md:col-span-9 md:row-start-1 md:row-span-2",
              "md:col-start-10 md:col-span-3 md:row-start-1 md:row-span-1",
              "md:col-start-10 md:col-span-3 md:row-start-2 md:row-span-1",
              "md:col-start-4 md:col-span-9 md:row-start-3 md:row-span-2",
              "md:col-start-1 md:col-span-3 md:row-start-3 md:row-span-1",
              "md:col-start-1 md:col-span-3 md:row-start-4 md:row-span-1",
              "md:col-start-1 md:col-span-9 md:row-start-5 md:row-span-2",
              "md:col-start-10 md:col-span-3 md:row-start-5 md:row-span-1",
              "md:col-start-10 md:col-span-3 md:row-start-6 md:row-span-1",
            ][i];

            return (
              <div
                key={p.src}
                className={
                  "relative rounded-xl ring-1 ring-[var(--border)] bg-background/70 backdrop-blur-sm transition " +
                  "hover:-translate-y-1 hover:ring-2 hover:ring-[var(--accent)]/30 " +
                  (layoutMd || "")
                }
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-contain p-2 md:p-3 drop-shadow-[0_20px_40px_rgba(0,0,0,0.18)]"
                  priority={i < 3}
                />
              </div>
            );
          })}
        </div>
      </div>
    </figure>
  );
}