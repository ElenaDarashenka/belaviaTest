class SendEmailPage {
    constructor() {
        this.createEmailButton = element(by.css(`div[class='z0']`));
        this.emailForm = element(by.css(`div[class='AD']`));
        this.addresseeField = element(by.name(`to`));
        this.emailTitleField = element(by.name(`subjectbox`));
        this.emailBody = element(by.css(`.editable`));
        this.sendButton = element(by.css(`td[class='gU Up']`));
    }

    async ClickOnCreateEmailbutton() {
        await browser.wait(protractor.ExpectedConditions.elementToBeClickable(this.createEmailButton), 10000, "Create email button is not clickable");
        return this.createEmailButton.click();
    }

    async SendKeysToAddresseeField() {
        await browser.wait(protractor.ExpectedConditions.visibilityOf(this.addresseeField), 10000, "Addressee field is not visible");
        return this.addresseeField.sendKeys(`testmailelena66@gmail.com`);
    }

    async SendKeysToEmailTitleField() {
        await browser.wait(protractor.ExpectedConditions.visibilityOf(this.emailTitleField), 10000, "Email title field is not visible");
        return this.emailTitleField.sendKeys(`Hello!`);
    }

    async SendKeysToEmailBody() {
        await browser.wait(protractor.ExpectedConditions.visibilityOf(this.emailBody), 10000, "Email body field is not visible");
        return this.emailBody.sendKeys(`How are you?`);
    }

    async ClickOnSendButton() {
        await browser.wait(protractor.ExpectedConditions.elementToBeClickable(this.sendButton), 10000, "Send button is not clickable");
        return this.sendButton.click();
    }
}

module.exports = new SendEmailPage();