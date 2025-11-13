// types/timeline.ts
export type TimelineItem = {
    id: string;
    year: number | string; // 1128 | "1128–1155" | "1770 a.C." | "-1770"
    title: string;
    summary: string;
    image?: { src: string; alt: string };
    arc?: string;
    href?: string;
  };
  
  export type TimelineData = TimelineItem[];
  
  /** Devuelve el texto visible para UI. Normaliza espacios y mayúsculas. */
  export function formatYear(year: number | string): string {
    if (typeof year === 'number') return year >= 0 ? String(year) : `${Math.abs(year)} a.C.`;
    const y = year.trim()
      .replace(/\s+/g, ' ')
      .replace(/ac\.?|a\s*\.?c\.?/i, 'a.C.')
      .replace(/bc/i, 'a.C.')
      .replace(/[-–]/g, '–'); // normalizar dash
    // Si viene "-1770" → "1770 a.C."
    if (/^-\d{1,4}$/.test(y)) return `${Math.abs(Number(y))} a.C.`;
    // Si ya trae "a.C." lo dejamos
    return y;
  }
  
  /** Genera dateTime ISO válido para <time>. Usa negativo para a.C. */
  export function yearToDateTime(year: number | string): string {
    if (typeof year === 'number') return year >= 0 ? String(year).padStart(4, '0') : String(year);
    const raw = year.toLowerCase().trim();
    const isBC = /a\.?c\.?|bc/.test(raw) || /^-\d/.test(raw);
    // tomar primer número del string
    const m = raw.replace(/[-–]/g, '-').match(/(\d{1,4})/);
    if (!m) return '0001';
    const n = parseInt(m[1], 10);
    return isBC ? String(-n) : String(n).padStart(4, '0');
  }
  
  /** Validación ligera del dataset. Permite d.C., a.C. y rangos. */
  export function validateTimeline(items: TimelineData): string[] {
    const errors: string[] = [];
    const seen = new Set<string>();
    items.forEach((it, idx) => {
      if (!it.id || typeof it.id !== 'string') errors.push(`#${idx}: id inválido`);
      if (seen.has(it.id)) errors.push(`#${idx}: id duplicado "${it.id}"`);
      seen.add(it.id);
  
      const y = it.year;
      const yearOk =
        typeof y === 'number' ||
        // "1128", "1128–1155"
        (typeof y === 'string' && /^(\d{1,4})([-–-](\d{1,4}))?$/.test(y.trim())) ||
        // "1770 a.C.", "1770–1720 a.C.", "BC"
        (typeof y === 'string' && /^(\d{1,4})(\s*[-–-]\s*\d{1,4})?\s*(a\.?c\.?|bc)$/i.test(y.trim())) ||
        // "-1770"
        (typeof y === 'string' && /^-\d{1,4}$/.test(y.trim()));
      if (!yearOk) errors.push(`#${idx}: year inválido: ${String(y)}`);
  
      if (!it.title?.trim()) errors.push(`#${idx}: title vacío`);
      if (!it.summary?.trim()) errors.push(`#${idx}: summary vacío`);
  
      if (it.image && (!it.image.src || !it.image.alt)) {
        errors.push(`#${idx}: image requiere src y alt`);
      }
    });
    return errors;
  }