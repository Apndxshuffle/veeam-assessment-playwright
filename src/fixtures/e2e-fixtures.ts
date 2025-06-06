import { test as base, expect } from '@playwright/test';
import { HomePage } from '@pages/HomePage';
import dotenv from 'dotenv';
dotenv.config();

type VeeamFixtures = {
    homePage: HomePage;
    forEachTest: void;
};

const test = base.extend<VeeamFixtures>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    forEachTest: [
        async ({ page }, use) => {
            const homePage = new HomePage(page);
            await page.goto('/', { waitUntil: 'domcontentloaded' });
            await homePage.featuresCards.nth(0).waitFor({ state: 'visible' });
            await homePage.acceptCookiesIfVisible();
            await use();
        },
        { auto: true, title: 'forEachTest: navigating to veeam.com and preparing homePage' },
    ],
});

export { test, expect };
