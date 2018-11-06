import BasePage from '../pages/basePage';

class SendEmailPage extends BasePage {
  constructor() {
        super();
        this.createEmailButton = element(by.xpath(`//div[contains(text(), "Написать")]`));
        this.addresseeField = element(by.name(`to`));
        this.emailTitleField = element(by.name(`subjectbox`));
        this.emailBody = element(by.css(`.editable`));
        this.sendButton = element(by.xpath(`//div[contains(text(), "Отправить")]`));
  }

   async clickOnCreateEmailbutton() {
        await browser.wait(this.isClickable(this.createEmailButton), this.timeout.xxl, "'Create email' button is not clickable");
        return this.createEmailButton.click();
  }

   async sendKeysToAddresseeField(addresseName) {
        return this.addresseeField.sendKeys(addresseName);
  }

   async sendKeysToEmailTitleField(emailTitle) {
        return this.emailTitleField.sendKeys(emailTitle);
  }

   async sendKeysToEmailBody(emailBody) {
        return this.emailBody.sendKeys(emailBody);
  }

    async clickOnSendButton() {
        return this.sendButton.click();
  }
}

export default new SendEmailPage();