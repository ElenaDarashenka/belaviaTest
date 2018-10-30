class LoginPage {
    constructor() {
        this.usernameField = element(by.css(`input[type='email']`));
        this.futherButtonOnLoginPage = element(by.css(`div[id='identifierNext']`));
        this.passwordField = element(by.css(`input[type='password']`));
        this.futherButtonOnPasswordPage = element(by.css(`div[id='passwordNext']`));
        this.inboxButton = element(by.css(`div[class='aim ain']`));
    }
    async SendKeysToLoginField() {
        return this.usernameField.sendKeys(`testmailelena66@gmail.com`);
    }

    async ClickOnFutherButtonOnLoginPage() {
        await browser.wait(protractor.ExpectedConditions.elementToBeClickable(this.futherButtonOnLoginPage), 10000, "Futher button on Login page is not clickable");
        return this.futherButtonOnLoginPage.click();
    }

    async SendKeysToPasswordField() {
        await browser.wait(protractor.ExpectedConditions.visibilityOf(this.passwordField), 10000, "It is impossible to enter password on Password field");
     return this.passwordField.sendKeys(`Password12!`);
    }

    async ClickOnFutherButtonOnPasswordPage() {
        await browser.wait(protractor.ExpectedConditions.elementToBeClickable(this.futherButtonOnPasswordPage), 10000, "Futher button on Password page is not clickable");
        return this.futherButtonOnPasswordPage.click();
    }

    async CheckInboxButtonIsPresent() {
        await browser.wait(protractor.ExpectedConditions.visibilityOf(this.inboxButton), 10000, "Inbox button is not visible");
    }
}

module.exports = new LoginPage();