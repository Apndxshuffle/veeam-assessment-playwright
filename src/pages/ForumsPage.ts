import { BasePage } from './BasePage';
import { expect } from '@fixtures/e2e-fixtures';
import { UserOptions } from '@interfaces/UserOptions';

export class ForumsPage extends BasePage {
    get forumsPageDescription() {
        return this.page.locator('#site-description');
    }

    get forumsTopicsList() {
        return this.page.locator('ul.topiclist.forums');
    }
    get forumsRegisterBtn() {
        return this.page.locator('#nav-main>li.rightside');
    }
    get agreementContent() {
        return this.page.locator('#agreement');
    }
    get agreedBtn() {
        return this.page.locator('input#agreed');
    }
    get notAgreedBtn() {
        return this.page.locator('input[name=not_agreed]');
    }

    get registrationForm() {
        return this.page.locator('form#register');
    }

    get userNameInput() {
        return this.page.locator('#username');
    }
    get passwordInput() {
        return this.page.locator('input[name=new_password]');
    }
    get passwordConfirmInput() {
        return this.page.locator('input[name=password_confirm]');
    }
    get emailInput() {
        return this.page.locator('input[name=email]');
    }
    get submitBtn() {
        return this.page.locator('#submit');
    }
    get registerErrorMsg() {
        return this.page.locator('dl>dd.error');
    }

    async getTopicsListByIndex(nthIndex: number) {
        return this.forumsTopicsList.nth(nthIndex);
    }

    async expectSiteDescriptionVisible() {
        await expect(this.forumsPageDescription).toBeVisible();
    }

    async expectTopicListNotEmpty(listIndex: number) {
        const pickedTopicListLocator = await this.getTopicsListByIndex(listIndex);
        const count = await pickedTopicListLocator.locator('li').count();
        expect(count).toBeGreaterThan(0);
    }

    async clickRegBtn() {
        await this.forumsRegisterBtn.nth(1).click();
        await this.notAgreedBtn.waitFor({ state: 'visible' });
    }

    async fillRegForm(userOptions: UserOptions) {
        await this.userNameInput.fill(userOptions.userName);
        await this.emailInput.fill(userOptions.userEmail);
        await this.passwordInput.fill(userOptions.userPassword);
        await this.passwordConfirmInput.fill(userOptions.userPassword);
    }
}
