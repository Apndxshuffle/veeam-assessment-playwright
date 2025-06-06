import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './src/tests',
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: 'list',
    use: {
        trace: 'on-first-retry',
        baseURL: 'https://www.veeam.com/',
        viewport: { width: 1280, height: 800 },
    },

    projects: [
        {
            name: 'e2e-chromium',
            use: { ...devices['Desktop Chrome'] },
        },

        {
            name: 'e2e-firefox',
            use: { ...devices['Desktop Firefox'] },
        },

        {
            name: 'e2e-webkit',
            use: { ...devices['Desktop Safari'] },
        },
    ],
});
