// app/mundo-kiso/page.tsx
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "El mundo de Kiso — KISOLAND",
  description:
    "Geografía, cronología, personajes y símbolos que estructuran el universo Kiso.",
  alternates: { canonical: "/mundo-kiso" },
  openGraph: {
    title: "El mundo de Kiso — KISOLAND",
    description:
      "Geografía, cronología, personajes y símbolos que estructuran el universo Kiso.",
    images: [
      { url: "/og/mundo-kiso.jpg", width: 1200, height: 630, alt: "El mundo de Kiso — KISOLAND" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "El mundo de Kiso — KISOLAND",
    description:
      "Geografía, cronología, personajes y símbolos que estructuran el universo Kiso.",
    images: ["/og/mundo-kiso.jpg"],
  },
};

const mkItems = [
  { src: "/gallery/mundo-kiso/01.jpg", alt: "Paisaje del universo Kiso 1" },
  { src: "/gallery/mundo-kiso/02.jpg", alt: "Paisaje del universo Kiso 2" },
  { src: "/gallery/mundo-kiso/03.jpg", alt: "Paisaje del universo Kiso 3" },
  { src: "/gallery/mundo-kiso/04.jpg", alt: "Paisaje del universo Kiso 4" },
  { src: "/gallery/mundo-kiso/05.jpg", alt: "Paisaje del universo Kiso 5" },
  { src: "/gallery/mundo-kiso/06.jpg", alt: "Paisaje del universo Kiso 6" },
  { src: "/gallery/mundo-kiso/07.jpg", alt: "Paisaje del universo Kiso 7" },
  { src: "/gallery/mundo-kiso/08.jpg", alt: "Paisaje del universo Kiso 8" },
  { src: "/gallery/mundo-kiso/09.jpg", alt: "Paisaje del universo Kiso 9" },
  { src: "/gallery/mundo-kiso/10.jpg", alt: "Paisaje del universo Kiso 10" },
  { src: "/gallery/mundo-kiso/11.jpg", alt: "Paisaje del universo Kiso 11" },
  { src: "/gallery/mundo-kiso/12.jpg", alt: "Paisaje del universo Kiso 12" },
];

// Personajes (PNG sin fondo en /public/personajes/<slug>/<slug>.png)
const arcos = [
  { slug: 'arco-1', title: 'Arco 1 — título en preparación', synopsis: 'Sinopsis breve (70–100 palabras) — placeholder.' },
  { slug: 'arco-2', title: 'Arco 2 — título en preparación', synopsis: 'Sinopsis breve (70–100 palabras) — placeholder.' },
  { slug: 'arco-3', title: 'Arco 3 — título en preparación', synopsis: 'Sinopsis breve (70–100 palabras) — placeholder.' },
] as const;

const personajes = [
  {
    slug: 'kiso',
    name: 'Kiso',
    role: 'Protagonista; capitán de los Once Inmortales',
    src: '/personajes/kiso/kiso.png',
    alt: 'Kiso con atuendo samurái',
    bio:
      'Nieto de Kao. Crece casi solo con una pelota como compañía. Disciplina del bushido y juego de pelota. Perspicaz y metódico, pero su soberbia e impaciencia lo ponen a prueba. Su propósito: recuperar a su pueblo y su honor guiando a los Guerreros de Ikki.',
  },
  {
    slug: 'alexander',
    name: 'Alexander',
    role: 'Artesano de Cnosos; estratega del episkyros',
    src: '/personajes/alexander/alexander.png',
    alt: 'Alexander, artesano griego',
    bio:
      'Artesano de Cnosos de inteligencia superior y ambición desmedida. Brilla en el episkyros, donde afila su estrategia. Su obsesión por la inmortalidad lo lleva al autómata y a un exilio que no apaga su resentimiento hacia los dioses, en especial Amaterasu.',
  },
  {
    slug: 'amaterasu',
    name: 'Amaterasu',
    role: 'Diosa tutelar de Kiso',
    src: '/personajes/amaterasu/amaterasu.png',
    alt: 'Amaterasu, diosa tutelar',
    bio:
      'Diosa tutelar de Kiso. Misión: recuperar los Pergaminos Sagrados y devolver poder al Orbe; proteger a la humanidad de Alexander. Deseo: ser recibida entre los dioses y preservar a la humanidad.',
  },
  {
    slug: 'kaito',
    name: 'Kaito',
    role: 'Samurái; hijo de Kao',
    src: '/personajes/kaito/kaito.png',
    alt: 'Kaito, personaje principal',
    bio: 'Desea el reconocimiento de su padre. Su alcoholismo y carácter influenciable lo desvían, pero Hikaru lo endereza y media con Kao. Reconcilia a la familia, completa su entrenamiento y se convierte en un samurái fuerte y diestro.',
  },
  {
    slug: 'hikaru',
    name: 'Hikaru',
    role: 'Bailarina de la corte; madre de Kiso',
    src: '/personajes/hikaru/hikaru.png',
    alt: 'Hikaru, personaje principal',
    bio: 'Criada en la escasez, encuentra refugio en la danza. Recorre Kyūshū enseñando su arte. Sensible a la naturaleza, es intuitiva y protectora de lo vulnerable. Su honestidad convive con un pesimismo e impulsividad que la llevan a decisiones de alto costo.',
  },
  {
    slug: 'kono',
    name: 'Kono',
    role: 'Primo de Kao; jugador de kemari',
    src: '/personajes/kono/kono.png',
    alt: 'Kono, personaje principal',
    bio: 'Creció cercano a Kao practicando kemari. Los años los distanciaron, pero conserva la memoria de aquellas tardes compartidas y el vínculo con la tradición del juego.',
  },
  {
    slug: 'baka',
    name: 'Baka',
    role: 'Híbrido de Bael en el cuerpo de Kasato',
    src: '/personajes/baka/baka.png',
    alt: 'Baka, personaje principal',
    bio: 'Resultado de condenar a Bael, espíritu de la montaña, a vivir en Kasato tras fracasar en obtener los Pergaminos de Ikki por orden del autómata Alexander. Furor y sosiego conviven en su conflicto interno.',
  },
  {
    slug: 'guerreros-de-ikki',
    name: 'Guerreros de Ikki',
    role: 'Orden samurái; protectores de la fortaleza del cerezo',
    src: '/personajes/guerreros-de-ikki/guerreros-de-ikki.png',
    alt: 'Guerreros de Ikki',
    bio: 'Campeones de katana, arco y juego de pelota. Su entrenamiento combina combate, trabajo en equipo y dominio del balón. Kiso los designa para proteger la fortaleza del cerezo y los Pergaminos de Ikki. Son el mejor equipo de guerreros vivos de la isla.',
  },
  {
    slug: 'kao',
    name: 'Kao',
    role: 'General samurái de Kyūshū; estratega del kemari',
    src: '/personajes/kao/kao.png',
    alt: 'Kao, personaje principal',
    bio: 'General nativo de Kyūshū. De joven abraza el kemari. En 1135 parte a reunir inteligencia militar, tecnológica y política en Asia para fortalecer su isla. Sueña con regresar a su hogar, compartir tonjiki con su esposa Mizuki y ver a su hijo Kaito convertido en samurái.',
  },
  {
    slug: 'kasato',
    name: 'Kasato',
    role: 'Líder de la rebelión de Ikkikankō',
    src: '/personajes/kasato/kasato.png',
    alt: 'Kasato, personaje principal',
    bio: 'Nacido en familia de herreros trasladada a las minas tras la conquista. Alimenta una ira profunda contra Kao y su linaje. Al ver marchitar su cordillera, organiza a los ikkitas para liberarse del dominio y recuperar el destino de la isla.',
  },
  {
    slug: 'kova',
    name: 'Kova',
    role: 'Juez del Orbe; guardián del juego de pelota',
    src: '/personajes/kova/kova.png',
    alt: 'Kova, personaje principal',
    bio: 'Elegido en los albores del universo para mantener la armonía. Si los dioses no resuelven con el juego, Kova arbitra. Con sus legionarios evita que fuerzas oscuras corrompan el juego practicado por los mortales.',
  },
  {
    slug: 'wada',
    name: 'Wada',
    role: 'Poeta y calígrafo; artista marcial de Ikkikankō',
    src: '/personajes/wada/wada.png',
    alt: 'Wada, personaje principal',
    bio: 'Maestro de caligrafía china y técnicas mixtas de combate. Defiende la isla con una rebelión pacífica inspirada por Zu. Tras la Batalla de Ikkikankō busca a Xi Shi para entregarle el testamento de Zu. Su reto mayor: explicar por qué termina entre los híbridos de Alexander.',
  },
  {
    slug: 'zu',
    name: 'Zu',
    role: 'Vidente chino; buscador de sabiduría y secretos de los dioses',
    src: '/personajes/zu/zu.png',
    alt: 'Zu, personaje principal',
    bio: 'Zu viaja por Asia, Europa y África para ampliar su conocimiento. En Egipto aprende técnicas de perfumes, embalsamamiento y pergaminos. Tras décadas de búsqueda concluye que la sabiduría verdadera exige comprender los secretos de los dioses y su relación con el juego de pelota.',
  },
  // 11 Inmortales
  {
    slug: 'amelia',
    name: 'Amelia',
    role: 'Inmortal; tutelada por Yaya',
    src: '/personajes/amelia/amelia.png',
    alt: 'Amelia, inmortal',
    bio: 'Última inmortal. Su misión es concientizar y liberar a los dioses; su deseo, volver a confiar en ellos y que resuelvan sus diferencias mediante el juego de pelota.',
  },
  {
    slug: 'ameyali',
    name: 'Ameyali',
    role: 'Inmortal; tutelada por Quetzalcóatl',
    src: '/personajes/ameyali/ameyali.png',
    alt: 'Ameyali, inmortal',
    bio: 'Sexta inmortal. Protege el conocimiento. Su motivación: rescatar a su pueblo y derrotar a los conquistadores, preservando la sabiduría.',
  },
  {
    slug: 'dina',
    name: 'Dina',
    role: 'Inmortal; tutelada por Quirino',
    src: '/personajes/dina/dina.png',
    alt: 'Dina, inmortal',
    bio: 'Décima inmortal. Su misión es reunir a los inmortales; su deseo, enfrentar a Alexander y evitar la destrucción total.',
  },
  {
    slug: 'jurgen',
    name: 'Jurgen',
    role: 'Inmortal; tutelado por Freya',
    src: '/personajes/jurgen/jurgen.png',
    alt: 'Jurgen, inmortal',
    bio: 'Noveno inmortal. Busca dominar las tecnologías de la humanidad. Quiere devolver poder al Orbe Sagrado sin intervención de dioses ni del resto de inmortales.',
  },
  {
    slug: 'omar',
    name: 'Omar',
    role: 'Inmortal; tutelado por Angra',
    src: '/personajes/omar/omar.png',
    alt: 'Omar, inmortal',
    bio: 'Quinto inmortal. Cuestiona la razón de ser de los inmortales y defiende el reino animal. Desea proteger a los seres vivos y eliminar a los causantes de su destrucción.',
  },
  {
    slug: 'roberto',
    name: 'Roberto',
    role: 'Inmortal; tutelado por Supay',
    src: '/personajes/roberto/roberto.png',
    alt: 'Roberto, inmortal',
    bio: 'Octavo inmortal. Se enfrenta al autoritarismo. Su deseo: defender derechos y deberes humanos y un orden justo.',
  },
  {
    slug: 'simone',
    name: 'Simone',
    role: 'Inmortal; tutelada por Nerthus',
    src: '/personajes/simone/simone.png',
    alt: 'Simone, inmortal',
    bio: 'Cuarta inmortal. Protege el juego de pelota de malas influencias y busca los secretos de los pergaminos. Desea conocer la verdad y ver lo invisible.',
  },
  {
    slug: 'tomoe',
    name: 'Tomoe',
    role: 'Inmortal; tutelada por Shinatobe',
    src: '/personajes/tomoe/tomoe.png',
    alt: 'Tomoe, inmortal',
    bio: 'Segunda inmortal. Su misión es encontrar la paz interior; su deseo, ser tan grande y poderosa como el emperador japonés.',
  },
  {
    slug: 'xi-shi',
    name: 'Xi Shi',
    role: 'Inmortal; tutelada por Zhu Rong',
    src: '/personajes/xi-shi/xi-shi.png',
    alt: 'Xi Shi, inmortal',
    bio: 'Tercera inmortal. Su misión es derrotar a Bael; su deseo, vengarse de los dioses.',
  },
  {
    slug: 'zengo',
    name: 'Zengo',
    role: 'Inmortal; tutelado por Olokun',
    src: '/personajes/zengo/zengo.png',
    alt: 'Zengo, inmortal',
    bio: 'Séptimo inmortal. Debe encontrar a los otros inmortales y unirlos en un equipo. Busca su destino y comprender su papel.',
  },
  // Dioses
  {
    slug: 'angora',
    name: 'Angra',
    role: 'Dios tutelar de Omar',
    src: '/personajes/angora/angora.png',
    alt: 'Angora, deidad',
    bio: 'Misión: frenar la sobrepoblación cuando destruye el reino animal. Deseo: eliminar a los causantes de esa destrucción y ganar la confianza de los dioses para evitarlo; si es necesario, despertar volcanes e inundaciones para restaurar el equilibrio.',
  },
  {
    slug: 'freya',
    name: 'Freya',
    role: 'Diosa tutelar de Jürgen',
    src: '/personajes/freya/freya.png',
    alt: 'Freya, deidad',
    bio: 'Misión: evitar que la tecnología destruya ecosistemas y biodiversidad. Deseo: reunir a los dioses para preservar las emociones humanas.',
  },
  {
    slug: 'nerthus',
    name: 'Nerthus',
    role: 'Diosa tutelar de Simone',
    src: '/personajes/nerthus/nerthus.png',
    alt: 'Nerthus, deidad',
    bio: 'Misión: preservar la vida creada y proteger la naturaleza. Deseo: abundancia en los cultivos y armonía entre seres vivos y entorno.',
  },
  {
    slug: 'olokun',
    name: 'Olokun',
    role: 'Diosa tutelar de Zengo',
    src: '/personajes/olokun/olokun.png',
    alt: 'Olokun, deidad',
    bio: 'Misión: proteger los secretos de los dioses. Deseo: dar tranquilidad a las deidades y preservar el orden establecido.',
  },
  {
    slug: 'quetzalcoatl',
    name: 'Quetzalcoatl',
    role: 'Dios tutelar de Ameyali',
    src: '/personajes/quetzalcoatl/quetzalcoatl.png',
    alt: 'Quetzalcoatl, deidad',
    bio: 'Misión: preservar la sabiduría. Deseo: evitar nuevas guerras entre los dioses.',
  },
  {
    slug: 'quirino',
    name: 'Quirino',
    role: 'Dios tutelar de Dina',
    src: '/personajes/quirino/quirino.png',
    alt: 'Quirino, deidad',
    bio: 'Misión: definir el sistema de juego para un equipo de dioses e inmortales frente a Alexander. Deseo: derrotarlo aplicando principios tácticos y devolver la confianza para trabajar en equipo.',
  },
  {
    slug: 'shinatobe',
    name: 'Shinatobe',
    role: 'Diosa tutelar de Tomoe',
    src: '/personajes/shinatobe/shinatobe.png',
    alt: 'Shinatobe, deidad',
    bio: 'Su misión es recuperar los pergaminos para restituir el poder del Orbe Sagrado. Desea apoyar a Tomoe en su reivindicación.',
  },
  {
    slug: 'supay',
    name: 'Supay',
    role: 'Dios tutelar de Roberto',
    src: '/personajes/supay/supay.png',
    alt: 'Supay, deidad',
    bio: 'Misión: evitar que el universo se apague. Deseo: convencer a los dioses de recrearlo, asegurando la preservación de las especies.',
  },
  {
    slug: 'yaya',
    name: 'Yaya',
    role: 'Dios tutelar de Amelia',
    src: '/personajes/yaya/yaya.png',
    alt: 'Yaya, deidad',
    bio: 'Misión: proteger el mar y evitar el colapso climático. Deseo: reducir contaminación y emisiones para impedir el deshielo y los extremos oceánicos.',
  },
  {
    slug: 'zhu-rong',
    name: 'Zhu Rong',
    role: 'Dios tutelar de Xi Shi',
    src: '/personajes/zhu-rong/zhu-rong.png',
    alt: 'Zhu Rong, deidad',
    bio: 'Misión: destruir a Alexander sin violar las leyes de los dioses. Deseo: restaurar el orden entre deidades.',
  },
] as const;

// Feature flags para mostrar/ocultar secciones hasta recibir contenido final
const SHOW_TIMELINE = false;
const SHOW_SYMBOLS = false;

export default function Page() {
  return (
    <main className="theme theme-mundo-kiso has-[input:checked]:overflow-hidden">
      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Hero / Intro */}
        <section className="rounded-3xl ring-1 ring-[var(--border)]">
          <div
            className="p-8 md:p-12 rounded-3xl overflow-hidden"
            style={{
              background:
                "radial-gradient(120% 120% at 10% 0%, var(--hero-accent) 0%, transparent 60%), radial-gradient(140% 140% at 90% 100%, var(--hero-primary) 0%, transparent 60%)",
            }}
          >
            <p className="text-xs font-semibold tracking-widest opacity-80">
              MUNDO KISO
            </p>
            <h1 className="mt-3 ty-h1">
              El mundo de Kiso
            </h1>
            <p className="mt-3 max-w-2xl ty-lead">
              El mundo de Kiso organiza la geografía, cronología y símbolos del universo. Aquí viven los
              personajes principales, sus hitos y las piezas que los conectan con la historia del fútbol.
              Esta sección funciona como mapa vivo: capítulos, lugares y tiempos que se expanden con cada
              proyecto. El objetivo es dar contexto a la obra, facilitar la lectura y ofrecer un punto de
              entrada claro tanto para nuevos lectores como para quienes siguen el desarrollo.
            </p>

            {/* Subnavegación */}
            <nav
              className="mt-6 -mx-2 px-2 overflow-x-auto whitespace-nowrap pb-2 md:mx-0 md:px-0 md:overflow-visible md:whitespace-normal md:pb-0 flex gap-2"
            >
              {[
                ["Origen", "#origen"],
                ["Mapa", "#mapa"],
                ["Capítulos", "#capitulos"],
                ["Personajes", "#personajes"],
                ["Cronología", "#cronologia"],
                ["Símbolos", "#simbolos"],
                ["Juegos de pelota", "#juegos-de-pelota"],
                ["Galería", "#galeria"],
              ].map(([label, href]) => (
                <a
                  key={href as string}
                  href={href as string}
                  className="inline-flex items-center shrink-0 snap-start rounded-full border border-[var(--border)] bg-background/60 text-foreground px-3 py-1.5 text-[13px] hover:bg-background/80 transition-colors md:text-xs"
                  aria-label={`Ir a ${label as string}`}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          {/* Body */}
          <div className="bg-background/80 p-6 md:p-8 rounded-b-3xl">
            {/* Mapa ilustrado */}
            <section id="mapa">
              <h2 className="ty-h2">Mapa ilustrado</h2>

              {/* Lightbox trigger */}
              <input id="map-lb" type="checkbox" className="peer hidden" />

              <figure className="mt-4 overflow-hidden rounded-xl ring-1 ring-[var(--border)]">
                {/* Click para ampliar */}
                <label htmlFor="map-lb" className="block cursor-zoom-in">
                  <Image
                    src="/mundo-kiso/mapa-ilustrado.jpg"
                    alt="Mapa ilustrado del universo Kiso"
                    width={1600}
                    height={900}
                    priority
                    sizes="(min-width: 768px) 1024px, 100vw"
                    className="w-full h-auto object-cover"
                  />
                </label>
                <figcaption className="mt-2 flex flex-wrap items-center justify-between gap-2 px-3 pb-2 text-xs opacity-70">
                  <span>Arte del mapa · <em>placeholder</em> (reemplazar por versión final). Leyenda pendiente: regiones, fortalezas y rutas.</span>
                  <span>Archivo: <code>/mundo-kiso/mapa-ilustrado.jpg</code></span>
                </figcaption>
              </figure>

              {/* Overlay del lightbox */}
              <div
                className="pointer-events-none fixed inset-0 z-[999] hidden items-center justify-center peer-checked:flex"
                role="dialog"
                aria-modal="true"
                aria-label="Mapa ilustrado ampliado"
              >
                <label
                  htmlFor="map-lb"
                  className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-zoom-out pointer-events-auto"
                  aria-label="Cerrar"
                />
                <div className="relative z-10 w-full max-w-5xl p-4">
                  <img
                    src="/mundo-kiso/mapa-ilustrado.jpg"
                    alt="Mapa ilustrado del universo Kiso"
                    className="w-full h-auto max-h-[85vh] rounded-xl shadow-2xl"
                  />
                  <label
                    htmlFor="map-lb"
                    className="absolute bottom-6 right-6 inline-flex items-center rounded-md bg-white/90 px-3 py-1 text-xs font-medium text-black shadow pointer-events-auto"
                  >
                    Cerrar
                  </label>
                </div>
              </div>

            </section>


            {/* Relato de origen */}
            <section id="origen" className="mt-12">
              <h2 className="ty-h2">Relato de origen</h2>
              <article className="relative overflow-hidden mt-4 w-full rounded-2xl p-6 md:p-8 border border-[hsl(var(--border)/0.10)] bg-gradient-to-b from-background/80 to-background/55 text-foreground shadow-[0_6px_18px_rgba(0,0,0,.18)] before:content-[''] before:absolute before:inset-0 before:bg-[radial-gradient(120%_60%_at_50%_0%,rgba(255,255,255,.06)_0%,transparent_60%)] before:pointer-events-none space-y-4">
                <p className="leading-relaxed text-[15px]">
                  El Mundo de Kiso nace en Japón, en medio de las guerras Genpei. Kiso, samurái y visionario,
                  entrenaba a sus guerreros con un balón de cuero, combinando la sabiduría del <em>kemari</em> y el
                  <em> cuju</em> para forjar disciplina, precisión y concentración.
                </p>
                <p className="leading-relaxed text-[15px]">
                  Su destino cambió cuando la diosa Amaterasu le entregó el Orbe Sagrado, símbolo de inmortalidad y de un
                  lenguaje universal: la pelota. Desde entonces, Kiso camina por el tiempo con un propósito: custodiar el
                  juego, descifrar las gambetas del destino y enseñar que, más allá de victorias o derrotas, el verdadero
                  legado está en los valores del competidor integral.
                </p>
              </article>
            </section>

            {/* Arcos / personajes */}
            <section id="capitulos" className="mt-12 md:mt-16 pt-10 border-t border-[hsl(var(--border)/.08)] grid gap-8 md:grid-cols-2 auto-rows-auto">
              <div className="space-y-4">
                <h2 className="ty-h2">Arcos</h2>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  {arcos.map((a) => (
                    <article
                      key={a.slug}
                      className="relative overflow-hidden rounded-2xl p-5 border border-[hsl(var(--border)/0.10)] bg-gradient-to-b from-background/75 to-background/50 text-foreground shadow-[0_6px_18px_rgba(0,0,0,.18)] md:h-[12rem] before:content-[''] before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-[hsl(var(--accent)/.35)] transition-transform duration-150 hover:-translate-y-[2px]"
                    >
                      <h3 className="text-[15px] font-semibold">{a.title}</h3>
                      <p className="mt-2 text-[13px] opacity-85">{a.synopsis}</p>
                    </article>
                  ))}
                </div>
                <p className="mt-2 text-xs opacity-60">Próximamente: títulos y sinopsis por arco (70–100 palabras).</p>
              </div>
              <section id="personajes" className="space-y-4 md:col-span-2">
                <h2 className="ty-h2">Personajes principales</h2>
                <input id="more-personajes" type="checkbox" className="peer sr-only fixed -top-[10000px] left-0" tabIndex={-1} />
                <input id="ch-none" type="radio" name="personaje" className="hidden" defaultChecked />
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 peer-checked:[&_.more-hidden]:block">
                  {personajes.map((p, i) => {
                    const prevSlug = personajes[(i - 1 + personajes.length) % personajes.length].slug;
                    const nextSlug = personajes[(i + 1) % personajes.length].slug;
                    return (
                    <div key={p.slug} className={"relative " + (i < 5 ? "" : "more-hidden hidden md:block")}>
                      {/* trigger */}
                      <input id={`ch-${p.slug}`} type="radio" name="personaje" tabIndex={-1} className="peer hidden" aria-hidden />

                      {/* card */}
                      <label
                        htmlFor={`ch-${p.slug}`}
                        className="block cursor-pointer rounded-2xl border border-[hsl(var(--border)/.08)] p-4 bg-card/95 text-card-foreground shadow-[0_8px_22px_rgba(0,0,0,.18)] md:h-[20rem] flex flex-col justify-between transition hover:-translate-y-0.5 hover:ring-1 hover:ring-[hsl(var(--accent)/.25)]"
                        aria-label={`Abrir ficha de ${p.name}`}
                      >
                        <div className="relative w-full aspect-[3/4] rounded-xl bg-background/60 overflow-hidden px-3 md:px-4 py-2 after:content-[''] after:absolute after:inset-x-6 after:bottom-2 after:h-2 after:rounded-full after:bg-black/25 after:blur-[6px] after:z-0">
                          <img src={p.src} alt={p.alt} className="absolute inset-0 w-full h-full object-contain z-10" loading="lazy" />
                        </div>
                        <div className="mt-3 text-center min-h-[3.25rem] flex flex-col justify-center">
                          <div className="text-base font-semibold leading-tight">{p.name}</div>
                          <div className="text-[13px] opacity-80 leading-snug">{p.role}</div>
                        </div>
                      </label>

                      {/* modal accesible */}
                      <div
                        className="pointer-events-none fixed inset-0 z-[999] hidden items-center justify-center peer-checked:flex"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby={`title-${p.slug}`}
                        aria-describedby={`desc-${p.slug}`}
                      >
                        <label
                          htmlFor="ch-none"
                          className="absolute inset-0 bg-black/70 backdrop-blur-sm cursor-zoom-out pointer-events-auto"
                          aria-label="Cerrar"
                        />
                        <div className="relative z-10 w-full max-w-4xl pointer-events-auto">
                          {/* Nav anterior/siguiente */}
                          <label
                            htmlFor={`ch-${prevSlug}`}
                            className="absolute left-6 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-background/80 ring-1 ring-[var(--border)] text-[var(--foreground)] text-xl font-semibold hidden md:flex items-center justify-center pointer-events-auto hover:bg-background/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/50"
                            aria-label="Anterior"
                          >
                            ‹
                          </label>
                          <label
                            htmlFor={`ch-${nextSlug}`}
                            className="absolute right-6 top-1/2 -translate-y-1/2 z-20 h-10 w-10 rounded-full bg-background/80 ring-1 ring-[var(--border)] text-[var(--foreground)] text-xl font-semibold hidden md:flex items-center justify-center pointer-events-auto hover:bg-background/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/50"
                            aria-label="Siguiente"
                          >
                            ›
                          </label>

                          <article className="relative w-full rounded-xl border border-[hsl(var(--border)/0.18)] bg-card text-card-foreground shadow-2xl shadow-black/40">
                            {/* Close X */}
                            <label
                              htmlFor="ch-none"
                              className="absolute top-3 right-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-background/70 ring-1 ring-[var(--border)] text-[var(--foreground)] text-lg font-semibold hover:bg-background/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/50"
                              aria-label="Cerrar"
                            >
                              ×
                            </label>

                            <div className="max-h-[80vh] overflow-y-auto p-6 space-y-4">
                              <div className="flex justify-center">
                                <div className="relative w-72 md:w-[34rem] max-h-[72vh] aspect-[3/4] rounded-xl bg-background/40 overflow-hidden">
                                  <img src={p.src} alt={p.alt} className="absolute inset-0 w-full h-full object-contain" />
                                </div>
                              </div>

                              <div className="sticky bottom-0 left-0 right-0 pt-3 pb-2 text-center bg-card/80 backdrop-blur supports-[backdrop-filter]:bg-card/60">
                                <h3 id={`title-${p.slug}`} className="text-3xl font-semibold">{p.name}</h3>
                                <p className="mt-1 text-base opacity-80">{p.role}</p>
                              </div>

                              <p id={`desc-${p.slug}`} className="text-sm leading-relaxed opacity-90">{p.bio}</p>
                              <div className="flex justify-end pt-2">
                                <label
                                  htmlFor="ch-none"
                                  className="inline-flex items-center rounded-md bg-foreground/90 px-3 py-1.5 text-xs font-medium text-background hover:bg-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/50"
                                >
                                  Cerrar
                                </label>
                              </div>
                            </div>
                          </article>
                        </div>
                      </div>
                    </div>
                  )})}
                </div>
                <div className="mt-4 md:hidden flex flex-col items-center">
                  <label
                    htmlFor="more-personajes"
                    className="cursor-pointer select-none text-sm font-medium opacity-80 hover:opacity-100 transition"
                  >
                    <span className="[#more-personajes:checked_~_&]:hidden">Ver más</span>
                    <span className="hidden [#more-personajes:checked_~_&]:inline">Ver menos</span>
                  </label>
                  <span className="mt-1 text-[18px] leading-none text-foreground/70 transition-transform [#more-personajes:checked_~_&]:rotate-180">⌄</span>
                </div>
              </section>
            </section>

            {/* Cronología y símbolos */}
            {(SHOW_TIMELINE || SHOW_SYMBOLS) ? (
              <section className="mt-10 grid gap-8 md:grid-cols-2">
                {SHOW_TIMELINE && (
                  <div id="cronologia" className="space-y-4">
                    <h2 className="ty-h2">Cronología</h2>
                    <ol className="list-decimal pl-5 space-y-1.5 opacity-80">
                      <li>Acontecimiento clave 1 (año)</li>
                      <li>Acontecimiento clave 2 (año)</li>
                      <li>Acontecimiento clave 3 (año)</li>
                    </ol>
                  </div>
                )}
                {SHOW_SYMBOLS && (
                  <div id="simbolos" className="space-y-4">
                    <h2 className="ty-h2">Símbolos</h2>
                    <ul className="list-disc pl-5 space-y-1.5 opacity-80">
                      <li>Emblema Kiso — significado</li>
                      <li>Colores — uso y lectura</li>
                      <li>Motivos visuales — patrones y textura</li>
                    </ul>
                  </div>
                )}
              </section>
            ) : null}

            {/* Juegos de pelota */}
            <section id="juegos-de-pelota" className="mt-10">
              <h2 className="ty-h2">Juegos de pelota</h2>
              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <article className="relative overflow-hidden rounded-2xl p-6 border border-[hsl(var(--border)/0.10)] bg-gradient-to-b from-background/75 to-background/50 text-foreground shadow-[0_6px_18px_rgba(0,0,0,.18)] before:content-[''] before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-[hsl(var(--accent)/.35)] transition-transform duration-150 hover:-translate-y-[2px]">
                  <h3 className="text-[15px] font-semibold">Cuju</h3>
                  <p className="mt-2 text-[13px] opacity-85">
                    Pionero del fútbol en la China milenaria. En la dinastía Song fue juego de corte y calle; el emperador Huizong
                    organizaba partidos en su cumpleaños, con premios a ganadores y escarmientos simbólicos a perdedores. En la
                    dinastía Han, estrategas como Huo Qubing lo usaron para entrenar tropas y fortalecer resistencia, foco y espíritu
                    de lucha.
                  </p>
                </article>

                <article className="relative overflow-hidden rounded-2xl p-6 border border-[hsl(var(--border)/0.10)] bg-gradient-to-b from-background/75 to-background/50 text-foreground shadow-[0_6px_18px_rgba(0,0,0,.18)] before:content-[''] before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-[hsl(var(--accent)/.35)] transition-transform duration-150 hover:-translate-y-[2px]">
                  <h3 className="text-[15px] font-semibold">Kemari</h3>
                  <p className="mt-2 text-[13px] opacity-85">
                    Juego ceremonial japonés sin ganadores ni perdedores: cooperación, cortesía y dominio técnico para mantener la
                    pelota en el aire. Se practicaba en templos o patios con árboles simbólicos como límites. La mari (25 cm,
                    piel de ciervo, rellena) y la etiqueta definían su estilo. Se lo vincula incluso a la reforma Taika por su rol
                    como espacio de encuentro entre figuras de poder.
                  </p>
                </article>

                <article className="relative overflow-hidden rounded-2xl p-6 border border-[hsl(var(--border)/0.10)] bg-gradient-to-b from-background/75 to-background/50 text-foreground shadow-[0_6px_18px_rgba(0,0,0,.18)] before:content-[''] before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-[hsl(var(--accent)/.35)] transition-transform duration-150 hover:-translate-y-[2px]">
                  <h3 className="text-[15px] font-semibold">Episkyros</h3>
                  <p className="mt-2 text-[13px] opacity-85">
                    Juego de la Antigua Grecia, de contacto y trabajo en equipo, donde podía usarse la mano. Dos equipos de 12–14
                    jugadores trataban de lanzar la pelota por encima de la línea rival. Hubo participación femenina y luego los
                    romanos adoptaron una versión propia: el <em>harpastum</em>.
                  </p>
                </article>

                <article className="relative overflow-hidden rounded-2xl p-6 border border-[hsl(var(--border)/0.10)] bg-gradient-to-b from-background/75 to-background/50 text-foreground shadow-[0_6px_18px_rgba(0,0,0,.18)] before:content-[''] before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-[hsl(var(--accent)/.35)] transition-transform duration-150 hover:-translate-y-[2px]">
                  <h3 className="text-[15px] font-semibold">La soule</h3>
                  <p className="mt-2 text-[13px] opacity-85">
                    Juego medieval del norte de Francia (Normandía, Picardía). Se jugaba en prados, bosques o estanques, fuera de
                    las cortes y con reglas variables. Dos bandos llevaban la pelota —de cuero o madera, sólida o hueca, rellena con
                    heno, pelo o musgo— hasta un punto lejano, cruzando campos, ríos o pantanos. Sin prohibiciones estrictas, podía
                    durar días.
                  </p>
                </article>

                <article className="relative overflow-hidden rounded-2xl p-6 border border-[hsl(var(--border)/0.10)] bg-gradient-to-b from-background/75 to-background/50 text-foreground shadow-[0_6px_18px_rgba(0,0,0,.18)] md:col-span-2 before:content-[''] before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-[hsl(var(--accent)/.35)] transition-transform duration-150 hover:-translate-y-[2px]">
                  <h3 className="text-[15px] font-semibold">Juego de los dioses</h3>
                  <p className="mt-2 text-[13px] opacity-85">
                    Antes de perder su poder el Orbe Sagrado, el juego divino tenía tres rondas sin violencia ni uso de manos. La
                    primera medía resistencia y dominio en círculos; la segunda, precisión a través de anillos de fuego hasta una
                    portería; la tercera enfrentaba cobrador y arquero con reflejos y autocontrol. Los mortales heredaron el juego y
                    cada cultura creó sus propias reglas.
                  </p>
                </article>
              </div>
            </section>

            {/* Galería */}
            <section id="galeria" className="mt-12">
              <h2 className="ty-h2">Galería</h2>
              <div className="mt-4">
                <a
                  href="/galeria"
                  className="relative block overflow-hidden rounded-2xl border border-[hsl(var(--border)/.08)] bg-gradient-to-b from-background/75 to-background/50 shadow-[0_8px_22px_rgba(0,0,0,.18)] p-6 md:p-8 hover:ring-1 hover:ring-[hsl(var(--accent)/.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--accent)/.35)] transition"
                >
                  <div className="grid gap-6 md:grid-cols-2 items-center">
                    <div>
                      <h3 className="text-xl font-semibold">Ver galería completa</h3>
                      <p className="mt-2 text-sm opacity-80">Imágenes clave del universo Kiso. Selección curada con artes y escenarios.</p>
                      <span className="mt-6 inline-flex items-center gap-1 text-sm underline underline-offset-4 decoration-[var(--border)]">
                        Abrir ahora →
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-1 md:gap-2">
                      {[0,1,2,3].map((i) => (
                        <div key={i} className="relative w-full aspect-[4/3] overflow-hidden rounded-lg md:rounded-xl ring-1 ring-[hsl(var(--border)/.08)]">
                          <Image
                            src={mkItems[i].src}
                            alt={mkItems[i].alt}
                            fill
                            sizes="(min-width: 768px) 25vw, 50vw"
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </a>
              </div>
            </section>

            <footer className="mt-12 border-t border-[var(--border)] pt-6 text-sm opacity-80">
              ¿Quieren que incorporemos un mapa ilustrado y una línea de tiempo
              navegable? Envíen referencias y lo agregamos en esta página.
            </footer>
          </div>
        </section>
      </div>
    </main>
  );
}