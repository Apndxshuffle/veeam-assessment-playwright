import { test, expect } from '@fixtures/e2e-fixtures';
import { getUserOptionsFromEnv } from '@utils/env';
import { ForumsPage } from '@pages/ForumsPage';
import { ForumsErrors } from '@test-data/enums';

const userOptions = getUserOptionsFromEnv();

test.beforeEach(async ({ homePage, page }) => {
    await homePage.gotoForumAndCheckUrl();
    const forumsPage = new ForumsPage(page);
    await forumsPage.forumsPageDescription.waitFor({ state: 'visible' });
    await forumsPage.clickRegBtn();
});

test('Should agreement content be visible', async ({ page }) => {
    const forumsPage = new ForumsPage(page);
    await expect(forumsPage.agreementContent).toBeVisible();
});

test('Should registration form appear after accepting agreement', async ({ page }) => {
    const forumsPage = new ForumsPage(page);
    await forumsPage.agreedBtn.click();
    await forumsPage.registrationForm.waitFor({ state: 'visible' });
});

test(`Should not register a User with Username: ${userOptions.userName} | Email: ${userOptions.userEmail}
 and display an error message`, async ({ page }) => {
    const forumsPage = new ForumsPage(page);
    await forumsPage.agreedBtn.click();
    await forumsPage.registrationForm.waitFor({ state: 'visible' });
    await forumsPage.fillRegForm(userOptions);
    await forumsPage.submitBtn.click();
    await expect(forumsPage.registerErrorMsg).toContainText(ForumsErrors.PublicEmail);
});
