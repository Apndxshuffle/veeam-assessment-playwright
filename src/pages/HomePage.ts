import { BasePage } from './BasePage';
import { expect } from '@fixtures/e2e-fixtures';
import { UrlFragments } from '@test-data/url-fragments';

export class HomePage extends BasePage {
    get header() {
        return this.page.locator('[data-component="HeaderComponent"]');
    }

    get supportForumsLink() {
        return this.page.locator('[href="https://forums.veeam.com/?ad=menu-support"]');
    }
    get featuresCards() {
        return this.page.locator('.h-features-card');
    }

    get mainNaviButtons() {
        return this.page.locator('.main-navigation__container>li');
    }

    get acceptCookiesBtn() {
        return this.page.locator('[role=button]#cookiescript_accept');
    }

    async expectHeaderVisible() {
        await expect(this.header).toBeVisible();
    }
    async gotoForumAndCheckUrl() {
        await this.mainNaviButtons.nth(2).click();
        await this.supportForumsLink.waitFor();
        await this.supportForumsLink.click();
        await this.waitForGivenUrl(UrlFragments.supportForums);
    }
    async acceptCookiesIfVisible() {
        const acceptCookiesBtn = this.acceptCookiesBtn;
        if (await acceptCookiesBtn.isVisible()) {
            await acceptCookiesBtn.click();
        }
    }
}
