import BasePage from '../pages/basePage';

class LoginPage extends BasePage {
  constructor() {
    super();
    this.usernameField = element(by.css(`input[type='email']`));
    this.nextButtonOnLoginPage = element(by.id(`identifierNext`));
    this.passwordField = element(by.css(`input[type='password']`));
    this.nextButtonOnPasswordPage = element(by.id(`passwordNext`));
  }

  async sendKeysToEmailField(login) {
    return this.usernameField.sendKeys(login);
  }

  async clickOnNextButtonOnLoginPage() {
    await browser.wait(this.isClickable(this.nextButtonOnLoginPage), this.timeout.xs, "'Next' button on Login page is not clickable");
    return this.nextButtonOnLoginPage.click();
  }

  async sendKeysToPasswordField(password) {
    await browser.wait(this.isVisible(this.passwordField), this.timeout.s, "Password field is not visible");
    return this.passwordField.sendKeys(password);
  }

  async clickOnNextButtonOnPasswordPage() {
    return this.nextButtonOnPasswordPage.click();
  }
}

export default new LoginPage();