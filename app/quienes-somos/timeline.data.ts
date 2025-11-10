// app/quienes-somos/timeline.data.ts
import type { TimelineData } from '@/types/timeline';

// Fuente: Documento canónico “PERSONAJES KISO”. Fechas exactas citadas del material del cliente.
// Nota: Usamos solo eventos con año d.C. explícito para evitar ambigüedades con a.C.

export const QUIENES_SOMOS_TIMELINE: TimelineData = [
  {
    id: 'zu-1100',
    year: 1100,
    title: 'Nacimiento de Zu (Zibo, China)',
    summary:
      'Vidente chino que recorre Asia, Europa y África en busca de conocimiento, incluyendo técnicas egipcias.',
    arc: 'Zu',
  },
  {
    id: 'kao-1104',
    year: 1104,
    title: 'Nacimiento de Kao (Seburisan, Kyūshū)',
    summary:
      'General samurái. Desde niño se interesa por el kemari, el juego de pelota japonés.',
    arc: 'Kao',
  },
  {
    id: 'kaito-1128',
    year: 1128,
    title: 'Nacimiento de Kaito (Kyūshū)',
    summary:
      'Hijo de Kao. Completa su entrenamiento y se convierte en samurái tras reconciliarse con su padre.',
    arc: 'Kaito',
  },
  {
    id: 'hikaru-1131',
    year: 1131,
    title: 'Nacimiento de Hikaru (Fukuoka)',
    summary:
      'Bailarina de corte y maestra itinerante. Sensible a la naturaleza, intuitiva y observadora.',
    arc: 'Hikaru',
  },
  {
    id: 'kao-mision-1135',
    year: 1135,
    title: 'Kao parte a reunir inteligencia en Asia',
    summary:
      'Misión para estudiar avances militares, tecnológicos y políticos a fin de fortalecer Kyūshū.',
    arc: 'Kao',
  },
  {
    id: 'kasato-1135',
    year: 1135,
    title: 'Nacimiento de Kasato (Ikkikankou, Kyūshū)',
    summary:
      'Forjado entre minas y oficios. Crece con resentimiento hacia Kao por la subyugación de su pueblo.',
    arc: 'Kasato',
  },
  {
    id: 'wada-1148',
    year: 1148,
    title: 'Nacimiento de Wada (Ikkikankou, Kyūshū)',
    summary:
      'Calígrafo y poeta. Tras la batalla buscará a Xi Shi para entregar el testamento de Zu.',
    arc: 'Wada',
  },
  {
    id: 'kiso-1155',
    year: 1155,
    title: 'Nacimiento de Kiso (Seburisan, Kyūshū)',
    summary:
      'Nieto de Kao. Disciplina de bushido y kemari. Futuro líder de los Guerreros de Ikki.',
    arc: 'Kiso',
  },
];