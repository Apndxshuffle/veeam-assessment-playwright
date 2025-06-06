import { test } from '@fixtures/e2e-fixtures';
import { UrlFragments } from '@test-data/url-fragments';
import { ForumsPage } from '@pages/ForumsPage';

test.beforeEach(async ({ homePage, page }) => {
    await homePage.gotoForumAndCheckUrl();
    await new ForumsPage(page).forumsPageDescription.waitFor({ state: 'visible' });
});

test('Should forums url be defined after clicking the link', async ({ homePage }) => {
    const supportForumsUrl = UrlFragments.supportForums;
    await homePage.waitForGivenUrl(supportForumsUrl);
});

test('Should forums page description be visible', async ({ page }) => {
    const supportForumsPage = new ForumsPage(page);
    await supportForumsPage.expectSiteDescriptionVisible();
});

test('Should forums page contains not empty topic lists', async ({ page }) => {
    const supportForumsPage = new ForumsPage(page);
    await supportForumsPage.expectTopicListNotEmpty(0);
});
