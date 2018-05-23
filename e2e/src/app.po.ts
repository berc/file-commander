import { browser, by, item } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return item(by.css('app-root h1')).getText();
  }
}
