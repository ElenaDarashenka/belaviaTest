class CheckIncomingEmails {
    constructor() {
        this.inboxButton = element(by.css(`span[class='nU n1']`));
        this.checkboxOnEmail = element(by.id(`div[role='checkbox']`));
        this.deleteButton = element(by.css(`div[aria-label='Удалить']`));
        this.email = element(by.css(`div[class='aim ain']`));
    }

    ClickOnInboxButton() {
        browser.wait(protractor.ExpectedConditions.elementToBeClickable(this.inboxButton), 10000, "Inbox button is not clickable");
        return this.inboxButton.click();
    }

    OpenEmail() {
        browser.wait(protractor.ExpectedConditions.visibilityOf(this.email), 10000, "Sent letter is not clickable");
        return this.email.click();
    }
}

module.exports = new CheckIncomingEmails();