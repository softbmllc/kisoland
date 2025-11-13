// playwright.config.ts
// Config básica para E2E en KISOLAND (Next 15 + mobile-first)

import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  use: {
    baseURL: 'http://localhost:3000',
    viewport: { width: 430, height: 932 }, // mobile-first
  },
  projects: [
    {
      name: 'chromium-mobile',
      use: { browserName: 'chromium' },
    },
  ],
  webServer: {
    command: 'npm run dev',
    url: 'http://localhost:3000',
    reuseExistingServer: !process.env.CI,
    timeout: 120000,
  },
});