import { test, expect } from '@fixtures/e2e-fixtures';

test('Should url be defined', async ({ homePage }, testInfo) => {
    const homePageUrl = testInfo.project.use.baseURL!;
    await homePage.waitForGivenUrl(homePageUrl);
});
test('Should header be visible', async ({ homePage }) => {
    await homePage.expectHeaderVisible();
});

test('Should R&D Forums element be visible after clicking Support button', async ({ homePage }) => {
    const supportForumsLink = homePage.supportForumsLink;
    await homePage.mainNaviButtons.nth(2).click();
    await expect(supportForumsLink).toBeVisible();
});
