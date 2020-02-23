import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getColor() {
    return element(by.id('color')).clear()
      .then(() => element(by.id('color')).sendKeys('ddd'))
      .then(() => element(by.id('colorDiv')).getCssValue('background-color'));
  }
}
