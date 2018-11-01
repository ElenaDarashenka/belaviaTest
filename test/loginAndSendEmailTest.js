let loginPage = require('../pages/loginPage');
let sendEmailPage = require('../pages/sendEmailPage');
let checkIncomingEmailsPage = require('../pages/CheckIncomingEmailsPage');

describe('Log in and send an email', () => {

    it('should login successfully', async () => {
        const log = `testmailelena66@gmail.com`;
        const passw = `Password12!`;

        await browser.get(browser.baseUrl);
        await loginPage.SendKeysToEmailField(log);
        await loginPage.ClickOnNextButtonOnLoginPage();
        await loginPage.SendKeysToPasswordField(passw);
        await loginPage.ClickOnNextButtonOnPasswordPage();
        expect(browser.wait(ExpectedConditions.urlContains('inbox'), 5000, `Page with inbox messages is not presented`));

    });

    it('should be possible to send email and find it in Inbox folder', async () => {
        const addresse = `testmailelena66@gmail.com`;
        const title = `Hello!`;
        const body = `How are you?`;
        const email = checkIncomingEmailsPage.sentEmail;

        await sendEmailPage.ClickOnCreateEmailbutton();
        await sendEmailPage.SendKeysToAddresseeField(addresse);
        await sendEmailPage.SendKeysToEmailTitleField(title);
        await sendEmailPage.SendKeysToEmailBody(body);
        await sendEmailPage.ClickOnSendButton();
        await checkIncomingEmailsPage.ClickOnInboxButton();
        expect(await email.isPresent()).toBe(true, `Sent email is not in Inbox folder`);
        await checkIncomingEmailsPage.ClickOnEmailCheckbox();
        await checkIncomingEmailsPage.DeleteTheEmail();
        expect(await email.isPresent()).toBe(false, `The email has not been deleted in Inbox folder`);
    });
});