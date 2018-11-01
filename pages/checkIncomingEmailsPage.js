let BasePage = require('../pages/basePage');

class CheckIncomingEmails extends BasePage {
  constructor() {
    super();
    this.inboxButton = element(by.xpath(`//span//a[contains(text(), "Входящие")]`));
    this.sentEmail = element(by.xpath(`//tbody//tr//td[6]`));
    this.checkbox = element(by.css(`div[role='checkbox']`));
    this.deleteIcon = element(by.xpath(`//div/div[1]/div[1]/div/div/div[2]/div[3]/div`));
  }

  async ClickOnInboxButton() {
    await browser.wait(this.isVisible(this.inboxButton), this.timeout.xl, "Inbox button is not clickable");
  }

  async ClickOnEmailCheckbox() {
    await browser.wait(this.isVisible(this.sentEmail), this.timeout.xxl, "Sent email is not clickable");
    return this.checkbox.click();
  }

  async DeleteTheEmail() {
    return this.deleteIcon.click();
  }
}

module.exports = new CheckIncomingEmails();