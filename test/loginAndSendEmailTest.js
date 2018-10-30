let loginPage = require('../pages/loginPage');
let sendEmailPage = require('../pages/sendEmailPage');
let checkIncomingEmailsPage = require('../pages/CheckIncomingEmailsPage');

describe('Log in and send an email', () => {

    it('should login successfully', async () => {
        await browser.get(browser.baseUrl);
        await loginPage.SendKeysToLoginField();
        await loginPage.ClickOnFutherButtonOnLoginPage();
        await loginPage.SendKeysToPasswordField();
        await loginPage.ClickOnFutherButtonOnPasswordPage();
        await loginPage.CheckInboxButtonIsPresent();
        expect(await element(by.css(`div[class='aim ain']`)).isPresent()).toBe(true); 
    });

    it('should be possible to send email and find it in Inbox folder', async () => {
        await sendEmailPage.ClickOnCreateEmailbutton();
        await sendEmailPage.SendKeysToAddresseeField();
        await sendEmailPage.SendKeysToEmailTitleField();
        await sendEmailPage.SendKeysToEmailBody();
        await sendEmailPage.ClickOnSendButton();
        await checkIncomingEmailsPage.ClickOnInboxButton();
        expect(await element(by.css(`tr[class='zA zE']`)).isDisplayed()).toBe(true);
        await checkIncomingEmailsPage.OpenEmail();
    });
});