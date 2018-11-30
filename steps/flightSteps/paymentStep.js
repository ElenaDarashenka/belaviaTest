import paymentPage from '../../pages/flightPages/paymentPage';

class paymentStep {
  async choosePaymentType() {
    await paymentPage.checkRulesCheckbox();
    await paymentPage.clickOnNextButton();
  }

  async waitUrlContains(text) {
    await paymentPage.urlContains(text)
  }
}

export default new paymentStep;