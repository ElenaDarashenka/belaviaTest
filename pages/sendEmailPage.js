let BasePage = require('../pages/basePage');

class SendEmailPage extends BasePage {
    constructor() {
        super();
        this.createEmailButton = element(by.xpath(`//div[contains(text(), "Написать")]`));
        this.addresseeField = element(by.name(`to`));
        this.emailTitleField = element(by.name(`subjectbox`));
        this.emailBody = element(by.css(`.editable`));
        this.sendButton = element(by.xpath(`//div[contains(text(), "Отправить")]`));
    }

    async ClickOnCreateEmailbutton() {
        await browser.wait(this.isClickable(this.createEmailButton), this.timeout.xxl, "Create email button is not clickable");
        return this.createEmailButton.click();
    }

    async SendKeysToAddresseeField(addresseName) {
        return this.addresseeField.sendKeys(addresseName);
    }

    async SendKeysToEmailTitleField(emailTitle) {
        return this.emailTitleField.sendKeys(emailTitle);
    }

    async SendKeysToEmailBody(emailBody) {
        return this.emailBody.sendKeys(emailBody);
    }

    async ClickOnSendButton() {
        return this.sendButton.click();
    }
}

module.exports = new SendEmailPage();