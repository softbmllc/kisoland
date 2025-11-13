// app/mundo-kiso/page.tsx
import Timeline from '@/components/Timeline';
import { MUNDO_KISO_TIMELINE } from './timeline.data';
import Image from "next/image";
import type { Metadata } from "next";
import Card from "@/components/ui/Card";
import Chip from "@/components/ui/Chip";

export const metadata: Metadata = {
  title: "El mundo de Kiso - KISOLAND",
  description:
    "Geografía, cronología, personajes y símbolos que estructuran el universo Kiso.",
  alternates: { canonical: "/mundo-kiso" },
  openGraph: {
    title: "El mundo de Kiso - KISOLAND",
    description:
      "Geografía, cronología, personajes y símbolos que estructuran el universo Kiso.",
    images: [
      { url: "/og/mundo-kiso.jpg", width: 1200, height: 630, alt: "El mundo de Kiso - KISOLAND" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "El mundo de Kiso - KISOLAND",
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
  { slug: 'arco-1', title: 'Arco 1 - título en preparación', synopsis: 'Sinopsis breve (70–100 palabras) - placeholder.' },
  { slug: 'arco-2', title: 'Arco 2 - título en preparación', synopsis: 'Sinopsis breve (70–100 palabras) - placeholder.' },
  { slug: 'arco-3', title: 'Arco 3 - título en preparación', synopsis: 'Sinopsis breve (70–100 palabras) - placeholder.' },
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
const SHOW_TIMELINE = true;
const SHOW_SYMBOLS = false; // back-office content; re-enable when brand assets are ready
const SHOW_BRAND_COLORS = false;           // public palette card (set true if you want to show it)
const SHOW_COLOR_EXAMPLE = false;          // set true after adding /public/mundo-kiso/colores-aplicacion.jpg

export default function Page() {
  return (
    <main className="theme theme-mundo-kiso overflow-x-hidden">
      <div className="mx-auto max-w-6xl px-4 py-16">
        {/* Hero / Intro */}
        <section className="rounded-[24px]">
        {/* Hero / Intro nuevo bloque (ajustado) */}
        <div className="mb-12 relative overflow-hidden rounded-[22px] pt-20 pb-14 px-10 md:pt-24 md:pb-16 md:px-16 anim-fade-in">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(120% 120% at 10% 0%, var(--hero-accent) 0%, transparent 60%), radial-gradient(140% 140% at 90% 100%, var(--hero-primary) 0%, transparent 60%)",
            }}
            aria-hidden
          />
          {/* Scrim inferior más leve */}
          <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.04)_40%,rgba(0,0,0,0.08)_100%)]" aria-hidden />

          {/* Luz suave detrás del título */}
          <div className="absolute top-16 left-1/3 w-[60%] h-[40%] rounded-full bg-white/5 blur-[80px]" aria-hidden />

          <div className="relative z-10 max-w-4xl">
            <p className="text-[11px] font-semibold tracking-[0.18em] text-white/85">MUNDO KISO</p>
            <h1 className="mt-6 ty-h1 text-white">El mundo de Kiso</h1>
            <p className="mt-5 max-w-[72ch] ty-lead text-white/90">
              El mundo de Kiso organiza la geografía, cronología y símbolos del universo. Aquí viven los personajes principales, sus hitos y las piezas que los conectan con la historia del fútbol. Esta sección funciona como mapa vivo: capítulos, lugares y tiempos que se expanden con cada proyecto. El objetivo es dar contexto a la obra, facilitar la lectura y ofrecer un punto de entrada claro tanto para nuevos lectores como para quienes siguen el desarrollo.
            </p>
          </div>
        </div>

        {/* Subnavegación */}
        {/* Mobile: barra horizontal optimizada */}
        <div className="mt-6 md:hidden relative">
          {/* Fades laterales */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-[var(--background)] to-transparent" aria-hidden />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-[var(--background)] to-transparent" aria-hidden />

          <nav aria-label="Secciones de Mundo Kiso">
            <ul
              className="flex gap-2 overflow-x-auto no-scrollbar snap-x px-1"
              style={{ WebkitOverflowScrolling: 'touch', scrollBehavior: 'smooth' }}
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
                <li key={href as string} className="snap-start flex-shrink-0">
                  <a
                    href={href as string}
                    className="inline-flex items-center justify-center h-10 min-w-[44px] rounded-full px-4 text-[14px] font-medium bg-background/40 text-foreground/90 hover:bg-background/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40 transition-colors"
                    aria-label={`Ir a ${label as string}`}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Desktop: dock centrado sticky */}
        <div className="hidden md:flex md:sticky top-4 z-30 mt-6 justify-center">
          <nav aria-label="Secciones de Mundo Kiso">
            <ul className="mx-0 px-2 whitespace-nowrap pb-2 md:px-0 md:pb-0 flex justify-center gap-0 max-w-full">
              <li className="inline-flex">
                <div className="mx-auto w-max flex gap-2 rounded-full border border-[hsl(var(--border)/.14)] bg-background/25 backdrop-blur-[2px] px-3 py-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_3px_10px_rgba(0,0,0,0.06)]">
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
                      className="text-[13px] md:text-[14px] font-medium tracking-[0.01em] rounded-full px-4 py-2 text-foreground/90 hover:text-foreground bg-transparent hover:bg-[hsl(var(--border)/.18)]/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40 transition-colors"
                      aria-label={`Ir a ${label as string}`}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </nav>
        </div>

          {/* Body */}
          <div className="bg-background/80 p-6 md:p-8 rounded-b-3xl">
            {/* Mapa ilustrado */}
            <section id="mapa">
              <h2 className="ty-h2">Mapa ilustrado</h2>

              {/* Carrusel de capas del mundo */}
              <div className="mt-4 relative overflow-hidden rounded-2xl border bg-card text-card-foreground">
                {/* Pistas laterales para profundidad */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-card to-transparent" aria-hidden />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-card to-transparent" aria-hidden />

                {/* Contenedor deslizable */}
                <div id="carousel-mapa" className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth">
{[
  { id: 'slide-1', src: '/mundo-kiso/mapa/capa-1.jpg', alt: 'Capa 1 - Origen / Creación' },
  { id: 'slide-2', src: '/mundo-kiso/mapa/capa-2.jpg', alt: 'Capa 2 - Fortaleza / Civilización' },
  { id: 'slide-3', src: '/mundo-kiso/mapa/capa-3.jpg', alt: 'Capa 3 - Rutas y energía' },
  { id: 'slide-4', src: '/mundo-kiso/mapa/capa-4.jpg', alt: 'Capa 4 - Trascendencia / Legado' },
].map((s, idx, arr) => {
  const prev = idx === 0 ? arr[arr.length - 1] : arr[idx - 1];
  const next = idx === arr.length - 1 ? arr[0] : arr[idx + 1];
  return (
    <div key={s.id} id={s.id} className="relative snap-start shrink-0 w-full">
      {/* Flecha izquierda */}
      <a
        href={`#${prev.id}`}
        aria-label="Anterior"
        className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-background/60 ring-1 ring-[var(--border)] text-foreground/90 hover:bg-background/80 transition"
      >
        ‹
      </a>
      {/* Flecha derecha */}
      <a
        href={`#${next.id}`}
        aria-label="Siguiente"
        className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-background/60 ring-1 ring-[var(--border)] text-foreground/90 hover:bg-background/80 transition"
      >
        ›
      </a>

      <Image
        src={s.src}
        alt={s.alt}
        width={2000}
        height={1333}
        sizes="(min-width: 1024px) 1024px, 100vw"
        className="w-full h-auto object-cover"
        priority={s.id === 'slide-1'}
      />
    </div>
  );
})}
                  {/* Bullets de navegación */}
                  <div className="flex items-center justify-center gap-2 py-3">
                    {(
                      [
                        ['#slide-1', 'Ir a capa 1', 'b1'],
                        ['#slide-2', 'Ir a capa 2', 'b2'],
                        ['#slide-3', 'Ir a capa 3', 'b3'],
                        ['#slide-4', 'Ir a capa 4', 'b4'],
                      ] as const
                    ).map(([href, aria, key], i) => (
                      <a
                        key={key}
                        href={href}
                        aria-label={aria}
                        {...(i === 0 ? { 'data-default': 'true' } : {})}
                        className={
                          i === 0
                            ? "inline-flex h-2.5 w-2.5 items-center justify-center rounded-full ring-1 ring-[var(--border)] bg-foreground/20 hover:bg-foreground/40 [#slide-1:target_~_&]:bg-white/90 data-[default=true]:bg-white/90"
                            : i === 1
                            ? "inline-flex h-2.5 w-2.5 items-center justify-center rounded-full ring-1 ring-[var(--border)] bg-foreground/20 hover:bg-foreground/40 [#slide-2:target_~_&]:bg-white/90"
                            : i === 2
                            ? "inline-flex h-2.5 w-2.5 items-center justify-center rounded-full ring-1 ring-[var(--border)] bg-foreground/20 hover:bg-foreground/40 [#slide-3:target_~_&]:bg-white/90"
                            : "inline-flex h-2.5 w-2.5 items-center justify-center rounded-full ring-1 ring-[var(--border)] bg-foreground/20 hover:bg-foreground/40 [#slide-4:target_~_&]:bg-white/90"
                        }
                        data-bullet={key}
                      >
                        <span className="sr-only">{aria}</span>
                      </a>
                    ))}
                  </div>
                  </div>

                <figcaption className="px-4 pb-3 text-[11px] opacity-60">
                  Secuencia visual del mundo Kiso - capas: Origen, Fortaleza, Rutas y energía, Trascendencia.
                </figcaption>
              </div>
            </section>


            {/* Relato de origen */}
            <section id="origen" className="mt-12">
              <h2 className="ty-h2">Relato de origen</h2>
              <Card className="relative mt-6 w-full rounded-[18px] border border-[hsl(var(--border)/.14)] bg-[var(--surface)] text-[var(--foreground)] p-8 md:p-10 overflow-hidden shadow-[0_10px_28px_rgba(0,0,0,0.10)] ring-1 ring-white/8">
                {/* Luz y viñeta */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(110%_90%_at_28%_0%,rgba(255,255,255,.16)_0%,transparent_58%)]" aria-hidden />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_80%_120%,rgba(0,0,0,.08)_0%,transparent_60%)]" aria-hidden />
                <div className="pointer-events-none absolute top-4 right-6 opacity-[.04] w-24 h-24" style={{mask: 'url(/symbols/emblema.svg) no-repeat center / contain', WebkitMask: 'url(/symbols/emblema.svg) no-repeat center / contain', background: 'currentColor'}} aria-hidden />

                <div className="relative max-w-[60ch] md:ms-1">
                  <Chip className="text-[11px] bg-[hsl(var(--border)/.32)] text-foreground/75">Relato canónico</Chip>

                  <h3 className="mt-5 text-[26px] md:text-[30px] font-semibold tracking-tight">El origen</h3>

                  <p className="mt-1 text-[12px] uppercase tracking-[0.18em] text-foreground/60">Japón · Era Genpei</p>

                  <hr className="mt-3 h-px w-9 border-0 bg-[hsl(var(--border)/.25)]" />

                  <p className="mt-4 ty-lead opacity-90 leading-relaxed md:leading-[1.75] first-letter:text-[26px] md:first-letter:text-[30px] first-letter:font-semibold first-letter:me-1.5 first-letter:leading-none">
                    Nacido en Japón en tiempos de guerra, el mundo de Kiso forja una idea simple: la pelota como lenguaje común. 
                    Kiso custodia ese legado para enseñar que el verdadero triunfo vive en los valores del competidor integral.
                  </p>
                  <a href="#cronologia" className="mt-5 inline-flex items-center gap-1 text-sm font-medium underline underline-offset-4 decoration-[hsl(var(--border)/.45)] hover:opacity-90">
                    Ver cronología →
                  </a>
                </div>
              </Card>
            </section>

            {/* Arcos / personajes */}
            <section id="capitulos" className="mt-12 md:mt-16 pt-10 border-t border-[var(--border)] space-y-8">
              <div className="space-y-4">
                <h2 className="ty-h2">Arcos</h2>
                <div className="grid gap-6 grid-cols-1">
                  {arcos.map((a, i) => (
                    i === 0 ? (
                      <Card
                        key={a.slug}
                        className={
                          "relative rounded-2xl p-6 md:p-7 border border-[hsl(var(--border)/.14)] bg-[var(--surface)] text-[var(--foreground)]" +
                          " ring-1 ring-white/6 shadow-[0_10px_28px_rgba(0,0,0,0.10)] overflow-hidden h-full"
                        }
                      >
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(110%_90%_at_28%_0%,rgba(255,255,255,.12)_0%,transparent_58%)]" aria-hidden />
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <Chip className="text-[11px] bg-[hsl(var(--border)/.32)] text-foreground/75">En preparación</Chip>
                          </div>
                          {/* Espacio para acciones futuras o iconos */}
                        </div>
                        <h3 className="text-[18px] md:text-[20px] font-semibold mt-2">{a.title}</h3>
                        <p className="mt-3 text-[14px] opacity-85 max-w-[66ch]">
                          Sinopsis en preparación.
                        </p>
                        <div className="mt-4">
                          <a
                            href={`/mundo-kiso/${a.slug}`}
                            className="text-sm font-medium underline underline-offset-4 decoration-[hsl(var(--border)/.55)] hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40 rounded"
                            aria-label={`Abrir ${a.title}`}
                          >
                            Abrir arco →
                          </a>
                        </div>
                      </Card>
                    ) : (
                      <Card
                        key={a.slug}
                        className={
                          "relative rounded-2xl p-5 border border-[hsl(var(--border)/.14)] bg-[var(--surface)] text-[var(--foreground)]" +
                          " ring-1 ring-white/6 shadow-[0_10px_28px_rgba(0,0,0,0.10)] overflow-hidden h-full"
                        }
                      >
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(110%_90%_at_28%_0%,rgba(255,255,255,.12)_0%,transparent_58%)]" aria-hidden />
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <Chip className="text-[11px] bg-[hsl(var(--border)/.32)] text-foreground/75">En preparación</Chip>
                          </div>
                          {/* Espacio para acciones futuras o iconos */}
                        </div>
                        <h3 className="text-[16px] font-semibold mt-2">{a.title}</h3>
                        <p className="mt-2 text-[13px] opacity-85">
                          Sinopsis en preparación.
                        </p>
                        <div className="mt-4">
                          <a
                            href={`/mundo-kiso/${a.slug}`}
                            className="text-sm font-medium underline underline-offset-4 decoration-[hsl(var(--border)/.55)] hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40 rounded"
                            aria-label={`Abrir ${a.title}`}
                          >
                            Abrir arco →
                          </a>
                        </div>
                      </Card>
                    )
                  ))}
                </div>
                <p className="mt-2 text-xs opacity-70">Próximamente: títulos y sinopsis por arco (70–100 palabras). Arte y rutas se integrarán cuando estén aprobados.</p>
              </div>
              <section id="personajes" className="space-y-4">
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
                        className="relative block cursor-pointer rounded-2xl border border-[hsl(var(--border)/.14)] p-4 bg-[var(--surface)] text-[var(--foreground)] ring-1 ring-white/6 shadow-[0_10px_28px_rgba(0,0,0,0.10)] md:h-[20rem] flex flex-col justify-between transition hover:-translate-y-0.5 hover:ring-[hsl(var(--accent)/.25)]"
                        aria-label={`Abrir ficha de ${p.name}`}
                      >
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(110%_90%_at_28%_0%,rgba(255,255,255,.12)_0%,transparent_58%)]" aria-hidden />
                        <div className="relative w-full aspect-[3/4] rounded-xl bg-[var(--surface-alt)] overflow-hidden px-3 md:px-4 py-2 ring-1 ring-[var(--border)] after:content-[''] after:absolute after:inset-x-6 after:bottom-2 after:h-2 after:rounded-full after:bg-black/20 after:blur-[6px] after:z-0">
                          <Image src={p.src} alt={p.alt} fill className="object-contain z-10" loading="lazy" />
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

                          <article className="relative w-full rounded-xl border border-[hsl(var(--border)/.18)] bg-[var(--surface)] text-[var(--foreground)] shadow-2xl shadow-black/40 ring-1 ring-white/8">
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
                                  <Image src={p.src} alt={p.alt} fill className="object-contain" />
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
  <section className="mt-10 space-y-8">
                {SHOW_TIMELINE && (
                  <div id="cronologia" className="space-y-4">
                    <h2 className="ty-h2">Cronología</h2>
                    <Card className="relative mt-2 w-full rounded-[18px] border border-[hsl(var(--border)/.14)] bg-[var(--surface)] text-[var(--foreground)] p-6 md:p-8 overflow-hidden ring-1 ring-white/8 shadow-[0_10px_28px_rgba(0,0,0,0.10)]">
                      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(110%_90%_at_28%_0%,rgba(255,255,255,.12)_0%,transparent_58%)]" aria-hidden />
                      <div className="relative space-y-3">
                        <p className="text-[12px] uppercase tracking-[0.18em] text-foreground/60">Línea del tiempo del universo</p>
                        <Timeline heading="Cronología del Mundo Kiso" items={MUNDO_KISO_TIMELINE} />
                      </div>
                    </Card>
                  </div>
                )}
                {SHOW_SYMBOLS && (
  <div id="simbolos" className="space-y-4">
    <h2 className="ty-h2">Símbolos</h2>
    <div className="grid gap-6 md:grid-cols-3 items-stretch">
      {/* Emblema */}
      <article className="relative overflow-hidden rounded-2xl p-6 border border-[hsl(var(--border)/.14)] bg-[var(--surface)] text-[var(--foreground)] ring-1 ring-white/6 shadow-[0_10px_24px_rgba(0,0,0,0.10)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(110%_90%_at_28%_0%,rgba(255,255,255,.12)_0%,transparent_58%)]" aria-hidden />
        {/* Marca de agua emblema */}
        <div className="pointer-events-none absolute right-4 top-4 w-16 h-16 opacity-[.06]" style={{ mask: 'url(/symbols/emblema.svg) no-repeat center / contain', WebkitMask: 'url(/symbols/emblema.svg) no-repeat center / contain', background: 'currentColor' }} aria-hidden />
        <h3 className="text-[15px] font-semibold">Emblema</h3>
        <figure className="mt-3">
          <div className="relative w-full aspect-[4/3] rounded-xl ring-1 ring-[var(--border)] bg-[var(--surface-alt)] flex items-center justify-center">
            <span className="text-xs text-foreground/60">Arte del emblema - placeholder</span>
          </div>
          <figcaption className="mt-2 text-xs text-foreground/65">Reemplazar por SVG oficial. No definir significados sin documento canónico.</figcaption>
          <ul className="mt-3 text-[12px] text-foreground/70 list-disc ps-5 space-y-1">
            <li>Versiones: color principal (Rojo Kiso) y monocromo (Antracita / Blanco).</li>
            <li>Área de seguridad mínima: 1× el grosor del trazo exterior (referencial).</li>
            <li>Tamaño mínimo sugerido: 24 px en interfaz / 16 mm en impresión.</li>
            <li>No deformar, inclinar ni aplicar efectos o sombras.</li>
          </ul>
          <p className="mt-2 text-[11px] text-foreground/60">*Borrador de uso; se ajustará a la guía oficial.</p>
        </figure>
      </article>

      {/* Paleta */}
      {SHOW_BRAND_COLORS && (
      <article className="relative overflow-hidden rounded-2xl p-6 border border-[hsl(var(--border)/.14)] bg-[var(--surface)] text-[var(--foreground)] ring-1 ring-white/6 shadow-[0_10px_24px_rgba(0,0,0,0.10)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(110%_90%_at_28%_0%,rgba(255,255,255,.12)_0%,transparent_58%)]" aria-hidden />
        <h3 className="text-[15px] font-semibold">Colores</h3>
        <p className="mt-2 text-[13px] text-foreground/85">Tres tonos guía para la experiencia pública de Mundo Kiso.</p>
        <ul className="mt-3 grid grid-cols-3 gap-3" aria-label="Colores de marca">
          <li className="space-y-1">
            <div className="h-12 rounded-md ring-1 ring-[var(--border)]" style={{background: 'var(--hero-primary)'}} aria-label="Rojo Kiso" />
            <div className="text-[12px] text-foreground/75">Rojo Kiso</div>
            <p className="text-[11px] text-foreground/60">Acciones primarias, acentos</p>
          </li>
          <li className="space-y-1">
            <div className="h-12 rounded-md ring-1 ring-[var(--border)]" style={{background: 'var(--accent)'}} aria-label="Antracita" />
            <div className="text-[12px] text-foreground/75">Antracita</div>
            <p className="text-[11px] text-foreground/60">Texto, iconos, contornos</p>
          </li>
          <li className="space-y-1">
            <div className="h-12 rounded-md ring-1 ring-[var(--border)]" style={{background: 'var(--surface)'}} aria-label="Crema base" />
            <div className="text-[12px] text-foreground/75">Crema base</div>
            <p className="text-[11px] text-foreground/60">Fondos y tarjetas</p>
          </li>
        </ul>
        <p className="mt-3 text-[11px] text-foreground/60">
          Guía de color completa en <a className="underline underline-offset-2" href="/brand">/brand</a>.
        </p>
      </article>
      )}

      {SHOW_COLOR_EXAMPLE && (
        <article className="relative overflow-hidden rounded-2xl p-6 border border-[hsl(var(--border)/.14)] bg-[var(--surface)] text-[var(--foreground)] ring-1 ring-white/6 shadow-[0_10px_24px_rgba(0,0,0,0.10)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(110%_90%_at_28%_0%,rgba(255,255,255,.12)_0%,transparent_58%)]" aria-hidden />
          <h3 className="text-[15px] font-semibold">Aplicaciones de color</h3>
          <p className="mt-2 text-[13px] text-foreground/85">Ejemplo de uso cromático en contexto.</p>
          <figure className="mt-3">
            <div className="relative w-full aspect-[4/3] rounded-xl ring-1 ring-[var(--border)] bg-[var(--surface-alt)] overflow-hidden">
              <Image src="/mundo-kiso/colores-aplicacion.jpg" alt="Aplicación cromática de la marca" fill className="object-cover" />
            </div>
            <figcaption className="mt-2 text-[11px] text-foreground/60">Sustituí esta imagen por un recorte oficial (1200×900) cuando lo tengas.</figcaption>
          </figure>
        </article>
      )}

      {/* Motivos visuales */}
      <article className="relative overflow-hidden rounded-2xl p-6 border border-[hsl(var(--border)/.14)] bg-[var(--surface)] text-[var(--foreground)] ring-1 ring-white/6 shadow-[0_10px_24px_rgba(0,0,0,0.10)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(110%_90%_at_28%_0%,rgba(255,255,255,.12)_0%,transparent_58%)]" aria-hidden />
        <h3 className="text-[15px] font-semibold">Motivos</h3>
        <div className="mt-3 grid grid-cols-3 gap-2">
          <div className="aspect-[4/3] rounded-md ring-1 ring-[var(--border)] bg-[repeating-linear-gradient(45deg,rgba(255,255,255,.06)_0_8px,transparent_8px_16px)]" aria-label="Patrón diagonal - placeholder" />
          <div className="aspect-[4/3] rounded-md ring-1 ring-[var(--border)] bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,.06)_0,transparent_60%)]" aria-label="Patrón radial - placeholder" />
          <div className="aspect-[4/3] rounded-md ring-1 ring-[var(--border)] bg-[linear-gradient(0deg,rgba(255,255,255,.06)_0,transparent_60%)]" aria-label="Patrón de franja - placeholder" />
        </div>
        <p className="mt-2 text-[11px] text-foreground/60">*Reemplazar por SVG y texturas oficiales cuando estén aprobados.</p>
      </article>
    </div>
  </div>
                )}
              </section>
            ) : null}

            {/* Juegos de pelota */}
            <section id="juegos-de-pelota" aria-labelledby="juegos-pelota-h" className="mt-10">
              <h2 id="juegos-pelota-h" className="ty-h2">Juegos de pelota · destacados</h2>
              <div className="mt-2 mb-5 flex items-center justify-between">
                <p className="text-[13px] text-foreground/70 italic">
                  Tradiciones que inspiraron el universo de Kiso.
                </p>
                <a
                  href="/mundo-kiso/juegos"
                  className="inline-flex items-center gap-1 text-sm font-medium rounded-full px-3 py-1.5 ring-1 ring-[hsl(var(--border)/.35)] bg-transparent hover:bg-[var(--surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]/40 transition-colors"
                >
                  Ver todos los juegos <span aria-hidden>→</span>
                </a>
              </div>
              <div className="mt-6 grid gap-6 md:grid-cols-2 lg:gap-8">
                <article className="relative anim-fade-in overflow-hidden rounded-2xl p-6 md:p-8 border border-[hsl(var(--border)/.12)] bg-[var(--surface)] text-[var(--foreground)] ring-1 ring-white/6 shadow-[0_10px_28px_rgba(0,0,0,0.10)]">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(110%_90%_at_28%_0%,rgba(255,255,255,.12)_0%,transparent_58%)]" aria-hidden />
                  <div className="text-[12px] tracking-[0.12em] text-foreground/60">China · Song</div>
                  <h3 className="text-[18px] md:text-[20px] font-semibold">Cuju</h3>
                  <p className="mt-3 text-[14px] leading-relaxed opacity-90 max-w-[62ch]">
                    Pionero del fútbol en la China milenaria. En la dinastía Song fue juego de corte y calle; el emperador Huizong
                    organizaba partidos en su cumpleaños, con premios a ganadores y escarmientos simbólicos a perdedores. En la
                    dinastía Han, estrategas como Huo Qubing lo usaron para entrenar tropas y fortalecer resistencia, foco y espíritu
                    de lucha.
                  </p>
                </article>

                <article className="relative anim-fade-in overflow-hidden rounded-2xl p-6 md:p-8 border border-[hsl(var(--border)/.12)] bg-[var(--surface)] text-[var(--foreground)] ring-1 ring-white/6 shadow-[0_10px_28px_rgba(0,0,0,0.10)]">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(110%_90%_at_28%_0%,rgba(255,255,255,.12)_0%,transparent_58%)]" aria-hidden />
                  <div className="text-[12px] tracking-[0.12em] text-foreground/60">Japón · Heian</div>
                  <h3 className="text-[18px] md:text-[20px] font-semibold">Kemari</h3>
                  <p className="mt-3 text-[14px] leading-relaxed opacity-90 max-w-[62ch]">
                    Juego ceremonial japonés sin ganadores ni perdedores: cooperación, cortesía y dominio técnico para mantener la
                    pelota en el aire. Se practicaba en templos o patios con árboles simbólicos como límites. La mari (25 cm,
                    piel de ciervo, rellena) y la etiqueta definían su estilo. Se lo vincula incluso a la reforma Taika por su rol
                    como espacio de encuentro entre figuras de poder.
                  </p>
                </article>

                <article className="relative anim-fade-in overflow-hidden rounded-2xl p-6 md:p-8 border border-[hsl(var(--border)/.12)] bg-[var(--surface)] text-[var(--foreground)] ring-1 ring-white/6 shadow-[0_10px_28px_rgba(0,0,0,0.10)]">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(110%_90%_at_28%_0%,rgba(255,255,255,.12)_0%,transparent_58%)]" aria-hidden />
                  <div className="text-[12px] tracking-[0.12em] text-foreground/60">Grecia clásica</div>
                  <h3 className="text-[18px] md:text-[20px] font-semibold">Episkyros</h3>
                  <p className="mt-3 text-[14px] leading-relaxed opacity-90 max-w-[62ch]">
                    Juego de la Antigua Grecia, de contacto y trabajo en equipo, donde podía usarse la mano. Dos equipos de 12–14
                    jugadores trataban de lanzar la pelota por encima de la línea rival. Hubo participación femenina y luego los
                    romanos adoptaron una versión propia: el <em>harpastum</em>.
                  </p>
                </article>

                <article className="relative anim-fade-in overflow-hidden rounded-2xl p-6 md:p-8 border border-[hsl(var(--border)/.12)] bg-[var(--surface)] text-[var(--foreground)] ring-1 ring-white/6 shadow-[0_10px_28px_rgba(0,0,0,0.10)]">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(110%_90%_at_28%_0%,rgba(255,255,255,.12)_0%,transparent_58%)]" aria-hidden />
                  <div className="text-[12px] tracking-[0.12em] text-foreground/60">Francia · Edad Media</div>
                  <h3 className="text-[18px] md:text-[20px] font-semibold">La soule</h3>
                  <p className="mt-3 text-[14px] leading-relaxed opacity-90 max-w-[62ch]">
                    Juego medieval del norte de Francia (Normandía, Picardía). Se jugaba en prados, bosques o estanques, fuera de
                    las cortes y con reglas variables. Dos bandos llevaban la pelota -de cuero o madera, sólida o hueca, rellena con
                    heno, pelo o musgo- hasta un punto lejano, cruzando campos, ríos o pantanos. Sin prohibiciones estrictas, podía
                    durar días.
                  </p>
                </article>

                {/* Ōllamaliztli */}
                <article className="relative anim-fade-in overflow-hidden rounded-2xl p-6 md:p-8 border border-[hsl(var(--border)/.12)] bg-[var(--surface)] text-[var(--foreground)] ring-1 ring-white/6 shadow-[0_10px_28px_rgba(0,0,0,0.10)]">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(110%_90%_at_28%_0%,rgba(255,255,255,.12)_0%,transparent_58%)]" aria-hidden />
                  <div className="text-[12px] tracking-[0.12em] text-foreground/60">Mesoamérica · Clásico–Posclásico</div>
                  <h3 className="text-[18px] md:text-[20px] font-semibold">Ōllamaliztli</h3>
                  <p className="mt-3 text-[14px] leading-relaxed opacity-90 max-w-[62ch]">
                    Juego ritual de Mesoamérica practicado por mayas y mexicas con pelota de hule maciza. El objetivo no era anotar puntos, sino
                    honrar a los dioses y ordenar el cosmos: la pelota simbolizaba el sol en su tránsito entre mundos. Se jugaba en patios en forma
                    de «I» con muros inclinados; a veces se usaban caderas y antebrazos para impulsar la bola. En ciertos periodos tuvo connotaciones
                    sacrificiales y pactos políticos. Su legado técnico -el control de un balón elástico sin manos- dialoga con la idea del Orbe y
                    resuena en las culturas del juego hasta hoy.
                  </p>
                </article>

                {/* Harpastum */}
                <article className="relative anim-fade-in overflow-hidden rounded-2xl p-6 md:p-8 border border-[hsl(var(--border)/.12)] bg-[var(--surface)] text-[var(--foreground)] ring-1 ring-white/6 shadow-[0_10px_28px_rgba(0,0,0,0.10)]">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(110%_90%_at_28%_0%,rgba(255,255,255,.12)_0%,transparent_58%)]" aria-hidden />
                  <div className="text-[12px] tracking-[0.12em] text-foreground/60">Roma · República–Imperio</div>
                  <h3 className="text-[18px] md:text-[20px] font-semibold">Harpastum</h3>
                  <p className="mt-3 text-[14px] leading-relaxed opacity-90 max-w-[62ch]">
                    Adaptación romana de juegos griegos de balón. Rápido y físico, enfrentaba equipos que buscaban mantener la posesión de una
                    pelota pequeña -a menudo de cuero relleno- dentro de límites trazados en el suelo. Se permitían cargas, fintas y engaños; el
                    cronista Galeno lo recomendaba para fortalecer cuerpo y mente. Su espíritu competitivo y el uso de manos lo emparentan con
                    tradiciones que más tarde derivarían en formas de fútbol y rugby, en contraste con el kemari o el ōllamaliztli.
                  </p>
                </article>

                {/* Calcio fiorentino */}
                <article className="relative anim-fade-in overflow-hidden rounded-2xl p-6 md:p-8 border border-[hsl(var(--border)/.12)] bg-[var(--surface)] text-[var(--foreground)] ring-1 ring-white/6 shadow-[0_10px_28px_rgba(0,0,0,0.10)]">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(110%_90%_at_28%_0%,rgba(255,255,255,.12)_0%,transparent_58%)]" aria-hidden />
                  <div className="text-[12px] tracking-[0.12em] text-foreground/60">Florencia · Renacimiento</div>
                  <h3 className="text-[18px] md:text-[20px] font-semibold">Calcio fiorentino</h3>
                  <p className="mt-3 text-[14px] leading-relaxed opacity-90 max-w-[62ch]">
                    Espectáculo cívico y violento del siglo XVI: equipos de 27 jugadores chocaban en la Piazza Santa Croce para avanzar una pelota
                    y anotar en una red. Permitía placajes, llaves y pugilato, con un código de honor cortesano. Más que deporte, era ritual de
                    identidad urbana y destreza militar. Su exuberancia física ofrece un contrapunto útil frente a otras tradiciones más rituales,
                    ilustrando cómo el «juego de pelota» adopta máscaras muy diversas a lo largo de la historia.
                  </p>
                </article>

                {/* Sepak takraw */}
                <article className="relative anim-fade-in overflow-hidden rounded-2xl p-6 md:p-8 border border-[hsl(var(--border)/.12)] bg-[var(--surface)] text-[var(--foreground)] ring-1 ring-white/6 shadow-[0_10px_28px_rgba(0,0,0,0.10)]">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(110%_90%_at_28%_0%,rgba(255,255,255,.12)_0%,transparent_58%)]" aria-hidden />
                  <div className="text-[12px] tracking-[0.12em] text-foreground/60">Sudeste Asiático · s. XV–XX</div>
                  <h3 className="text-[18px] md:text-[20px] font-semibold">Sepak takraw</h3>
                  <p className="mt-3 text-[14px] leading-relaxed opacity-90 max-w-[62ch]">
                    Disciplina acrobática que combina control de balón con saltos y voleas por encima de una red, usando pies, rodillas, hombros y
                    cabeza. Nacida de tradiciones malayas y siamesas, consolidó reglas modernas en el siglo XX con pelota de rattan (hoy también
                    sintética). Su estética -elasticidad, precisión aérea, lectura del espacio- dialoga con el virtuosismo técnico del kemari y con
                    el valor del entrenamiento como vía de superación en el universo Kiso.
                  </p>
                </article>

                <article className="relative anim-fade-in overflow-hidden rounded-2xl p-6 md:p-8 border border-[hsl(var(--border)/.12)] bg-[var(--surface)] text-[var(--foreground)] md:col-span-2 ring-1 ring-white/6 shadow-[0_10px_28px_rgba(0,0,0,0.10)]">
                  <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(110%_90%_at_28%_0%,rgba(255,255,255,.12)_0%,transparent_58%)]" aria-hidden />
                  <div className="text-[12px] tracking-[0.12em] text-foreground/60">Mito del Orbe</div>
                  <h3 className="text-[18px] md:text-[20px] font-semibold">Juego de los dioses</h3>
                  <p className="mt-3 text-[14px] leading-relaxed opacity-90 max-w-[62ch]">
                    Antes de perder su poder el Orbe Sagrado, el juego divino tenía tres rondas sin violencia ni uso de manos. La
                    primera medía resistencia y dominio en círculos; la segunda, precisión a través de anillos de fuego hasta una
                    portería; la tercera enfrentaba cobrador y arquero con reflejos y autocontrol. Los mortales heredaron el juego y
                    cada cultura creó sus propias reglas.
                  </p>
                </article>
              </div>
              <div className="mt-6 md:hidden text-center">
                <a href="/mundo-kiso/juegos" className="inline-flex items-center gap-1 text-sm font-medium underline underline-offset-4 decoration-[hsl(var(--border)/.45)] hover:opacity-90">
                  Ver todos los juegos →
                </a>
              </div>
            </section>

            {/* Galería */}
            <section id="galeria" className="mt-12">
              <h2 className="ty-h2">Galería</h2>
              <div className="mt-4 relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] text-[var(--foreground)] ring-1 ring-white/8 shadow-[0_10px_28px_rgba(0,0,0,0.10)]">
                {/* Fades laterales para dar profundidad */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-card to-transparent" aria-hidden />
                <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-card to-transparent" aria-hidden />

                {/* Carrusel de imágenes */}
                <div
                  id="carousel-galeria"
                  className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth"
                  role="region"
                  aria-roledescription="carrusel"
                  aria-label="Galería de escenas"
                >
                  {mkItems.map((it, idx) => {
                    const id = `g${idx + 1}`;
                    const prev = `g${(idx - 1 + mkItems.length) % mkItems.length + 1}`;
                    const next = `g${(idx + 1) % mkItems.length + 1}`;
                    return (
                      <div key={id} id={id} className="relative snap-start shrink-0 w-full">
                        {/* Flechas en desktop */}
                        <a
                          href={`#${prev}`}
                          aria-label="Anterior"
                          className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-black/35 text-white ring-1 ring-white/30 hover:bg-black/55 transition"
                        >
                          ‹
                        </a>
                        <a
                          href={`#${next}`}
                          aria-label="Siguiente"
                          className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 z-10 h-10 w-10 items-center justify-center rounded-full bg-black/35 text-white ring-1 ring-white/30 hover:bg-black/55 transition"
                        >
                          ›
                        </a>

                        <figure className="m-0">
                          <Image
                            src={it.src}
                            alt={it?.alt || "Escena del universo Kiso"}
                            width={2000}
                            height={1333}
                            sizes="(min-width: 1024px) 1024px, 100vw"
                            className="w-full h-[60vh] md:h-[68vh] object-cover"
                            priority={idx === 0}
                          />
                          <figcaption className="sr-only">{it.alt}</figcaption>
                        </figure>
                      </div>
                    );
                  })}
                </div>

                {/* Bullets */}
                <div
                  className="flex items-center justify-center gap-2 py-3 gal-dots"
                  role="tablist"
                  aria-label="Paginación de galería"
                >
                  {mkItems.map((_, i) => {
                    const gid = `g${i + 1}`;
                    return (
                      <a
                        key={gid}
                        href={`#${gid}`}
                        aria-label={`Ir a imagen ${i + 1}`}
                        data-bullet={gid}
                        className="inline-flex h-2.5 w-2.5 items-center justify-center rounded-full ring-1 ring-[var(--border)] bg-white/40 hover:bg-white/70"
                      >
                        <span className="sr-only">{`Ir a imagen ${i + 1}`}</span>
                      </a>
                    );
                  })}
                </div>

                <figcaption className="px-4 pb-3 text-[11px] opacity-60">
                  Galería de escenas del universo Kiso - artes y escenarios aprobados para la página “Mundo Kiso”.
                </figcaption>
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