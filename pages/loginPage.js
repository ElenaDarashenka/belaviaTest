let BasePage = require('../pages/basePage');

class LoginPage extends BasePage {
    constructor() {
        super();
        this.usernameField = element(by.css(`input[type='email']`));
        this.nextButtonOnLoginPage = element(by.id(`identifierNext`));
        this.passwordField = element(by.css(`input[type='password']`));
        this.nextButtonOnPasswordPage = element(by.id(`passwordNext`));
    }

    async SendKeysToEmailField(login) {
        return this.usernameField.sendKeys(login);
    }

    async ClickOnNextButtonOnLoginPage() {
        await browser.wait(this.isClickable(this.nextButtonOnLoginPage), this.timeout.xs, "Futher button on Login page is not clickable");
        return this.nextButtonOnLoginPage.click();
    }

    async SendKeysToPasswordField(password) {
        await browser.wait(this.isVisible(this.passwordField), this.timeout.s, "It is impossible to enter password on Password field");
        return this.passwordField.sendKeys(password);
    }

    async ClickOnNextButtonOnPasswordPage() {

        return this.nextButtonOnPasswordPage.click();
    }
}

module.exports = new LoginPage();