import BasePage from '../pages/basePage';

class CheckIncomingEmails extends BasePage {
  constructor() {
    super();
    this.inboxButton = element(by.xpath(`//span//a[contains(text(), "Входящие")]`));
    this.sentEmail = element(by.css(`span[class='bog']`));
  }

  async clickOnInboxButton() {
    await browser.wait(this.isVisible(this.inboxButton), this.timeout.xl, "Inbox button is not visible");
    return this.inboxButton.click();
  }
}

export default new CheckIncomingEmails();