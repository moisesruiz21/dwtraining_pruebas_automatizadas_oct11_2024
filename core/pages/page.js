// Page.js
import { browser } from '@wdio/globals';

export default class Page {
    constructor() {
        this.title = 'My Page'
    }

    async open (path) {
        await browser.url(path)
    }
}