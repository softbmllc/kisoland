// tests/e2e/home.spec.ts
// Smoke test mínimo para validar que la Home carga correctamente.

import { test, expect } from '@playwright/test';

test.describe('Home (/)', () => {
  test('carga y muestra hero + theme-home', async ({ page }) => {
    // 1) Navega a /
    const response = await page.goto('/');

    // 2) Verifica status HTTP
    expect(response?.status()).toBe(200);

    // 3) Verifica theme aplicado
    const main = page.locator('main.theme.theme-home');
    await expect(main).toBeVisible();

    // 4) Verifica el hero principal (aria-label estable)
    await expect(
      page.getByLabel(/Hero - El universo de Kiso/i)
    ).toBeVisible();
  });
});