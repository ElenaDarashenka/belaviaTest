import checkIncomingEmailsPage from '../pages/CheckIncomingEmailsPage';
import sendEmailPage from '../pages/SendEmailPage';
import loginPage from '../pages/loginPage';
import testData from '../data/testData';

const { login, password, emailBody } = testData.data;

describe('Log in and send an email', () => {

    it('should login successfully', async () => {
        await browser.get(browser.baseUrl);
        await loginPage.sendKeysToEmailField(login);
        await loginPage.clickOnNextButtonOnLoginPage();
        await loginPage.sendKeysToPasswordField(password);
        await loginPage.clickOnNextButtonOnPasswordPage();
        expect(await loginPage.urlContains('inbox'));
    });

    it('should be possible to send email and find it in Inbox folder', async () => {
        const email = checkIncomingEmailsPage.sentEmail;
        const emailTitle = new Date().getUTCMilliseconds();
        await sendEmailPage.clickOnCreateEmailbutton();
        await sendEmailPage.sendKeysToAddresseeField(login);
        await sendEmailPage.sendKeysToEmailTitleField(emailTitle);
        await sendEmailPage.sendKeysToEmailBody(emailBody);
        await sendEmailPage.clickOnSendButton();
        await checkIncomingEmailsPage.clickOnInboxButton();
        expect(await email.getText()).toContain(emailTitle);
    });
});