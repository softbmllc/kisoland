// tests/e2e/kisolab.spec.ts
// Tests básicos para validar estructura y navegación de Kiso Lab.

import { test, expect } from '@playwright/test';

test.describe('Kiso Lab (/kisolab)', () => {
  test('carga sin errores y muestra hero + theme correcto', async ({ page }) => {
    // 1) Navega a /kisolab
    const response = await page.goto('/kisolab');

    // 2) Verifica que el servidor respondió OK
    expect(response?.status()).toBe(200);

    // 3) Verifica que el main tenga el theme correcto
    const main = page.locator('main.theme.theme-kisolab');
    await expect(main).toBeVisible();

    // 4) Verifica el H1 principal (ajustar si el copy cambia)
    await expect(
      page.getByRole('heading', {
        level: 1,
        name: /Laboratorio de investigación y prototipos/i,
      })
    ).toBeVisible();

    // 5) Secciones clave visibles
    await expect(
      page.getByRole('heading', { level: 2, name: /Proyectos en curso/i })
    ).toBeVisible();

    await expect(
      page.getByRole('heading', { level: 2, name: /Método/i })
    ).toBeVisible();
  });

  test('link a Focus Penalty existe y su ruta responde 200', async ({ page, request }) => {
    // 1) Llega a Kiso Lab
    await page.goto('/kisolab');

    // 2) Link a Focus Penalty existe
    const focusLink = page.getByRole('link', { name: 'Focus Penalty' }).first();
    await expect(focusLink).toBeVisible();

    // 3) La ruta responde 200
    const res = await request.get('/focus-penalty');
    expect(res.status()).toBe(200);
  });
});