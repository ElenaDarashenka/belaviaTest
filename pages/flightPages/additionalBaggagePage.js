import BasePage from '../basePage';

class additionalBaggagePage extends BasePage {
  constructor() {
    super();
    this.nextButton = element(by.css(`button[type='submit']`));
    this.yourSelectionBlockTitle = element(by.className(`chose`));
  }

  async waitForYourSelectionTitle() {
    await browser.wait(this.isNotVisible($('.overlay')), this.timeout.xxl, "'Overlay is displayed");
    await browser.wait(this.isVisible(this.yourSelectionBlockTitle), this.timeout.xxl, "'Your selection' block title is not visible");
  }

  async clickOnNextButton() {
    await browser.wait(this.isClickable(this.nextButton), this.timeout.xxl, "'Next' button is not clickable");
    return this.nextButton.click();
  }
}

export default new additionalBaggagePage();