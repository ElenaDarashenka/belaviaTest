import additionalBaggagePage from '../../pages/flightPages/additionalBaggagePage';

class baggageInfoStep {
  
  async checkBaggageInfo() {
    await additionalBaggagePage.waitForYourSelectionTitle();
    await additionalBaggagePage.clickOnNextButton();
  }
}
  export default new baggageInfoStep();