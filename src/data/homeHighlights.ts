// src/data/homeHighlights.ts
export type HomeHighlight = {
  slug: string;
  title: string;
  excerpt: string;
  image: string; // 16:9 aspect ratio
};

// Dejar vacío para ocultar el módulo o incluir hasta 3 ítems de prueba
export const homeHighlights: HomeHighlight[] = [
  {
    slug: "focus-penalty",
    title: "Focus Penalty",
    excerpt: "Explorá la experiencia que combina precisión y creatividad dentro del universo Kiso.",
    image: "/cards/focus-penalty.jpg",
  },
  {
    slug: "mundo-kiso",
    title: "Mundo Kiso",
    excerpt: "Una mirada al paisaje y a los símbolos que definen la narrativa del universo Kiso.",
    image: "/cards/mundo-kiso.jpg",
  },
  {
    slug: "competidor-integral",
    title: "Competidor Integral",
    excerpt: "Entrenamiento y ética para formar carácter y desempeño en el juego y la vida.",
    image: "/cards/competidor-integral.jpg",
  },
];