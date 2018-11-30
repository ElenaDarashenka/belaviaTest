import BasePage from '../basePage';

class paymentPage extends BasePage {
  constructor() {
    super();
    this.rulesCheckbox = element(by.className(`acknowledgment`));
    this.nextButton = element(by.css(`button[type='submit']`));
  }

  async checkRulesCheckbox() {
    await browser.wait(this.isClickable(this.rulesCheckbox), this.timeout.xxl, "'Rules' checkbox is not clickable");
    return this.rulesCheckbox.click();
  }

  async clickOnNextButton() {
    await browser.wait(this.isNotVisible($('.overlay')), this.timeout.xxl, "'Overlay is displayed");
    return this.nextButton.click();
  }
}

export default new paymentPage();