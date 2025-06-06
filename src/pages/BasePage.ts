import { type Page } from '@playwright/test';

export class BasePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }
    async waitForGivenUrl(expectedUrlPart: string) {
        await this.page.waitForURL((url) => url.href.includes(expectedUrlPart), {
            timeout: 10000,
            waitUntil: 'load',
        });
    }
}
