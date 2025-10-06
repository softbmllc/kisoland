// scripts/trim-personajes.mjs
// Recorta transparencia de todos los PNG en /public/personajes/** y deja 6px de aire.
import fg from 'fast-glob';
import sharp from 'sharp';

const files = await fg('public/personajes/**/*.png', { dot: false, onlyFiles: true });
if (!files.length) {
  console.log('No se encontraron PNG en public/personajes');
  process.exit(0);
}

let ok = 0, fail = 0;
for (const file of files) {
  try {
    const buf = await sharp(file).trim({ threshold: 1 }).toBuffer();
    await sharp(buf)
      .extend({ top: 6, bottom: 6, left: 6, right: 6, background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(file);
    ok++;
    console.log('✓', file);
  } catch (e) {
    fail++;
    console.error('✗', file, e.message);
  }
}
console.log(`Listo. Procesados: ${ok}, errores: ${fail}`);