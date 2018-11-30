import selectFlightPage from '../../pages/flightPages/selectFlightPage';
import findFlightsPage from '../../pages/flightPages/findFlightPage';

class chooseFlightStep {
  
  async searchFlight() {
    browser.get(browser.baseUrl);
    await  findFlightsPage.clickOnFromDropdown();
    await  findFlightsPage.selectValueInFromDropdown();
    await  findFlightsPage.clickOnToDropdown();
    await  findFlightsPage.selectValueInToDropdown();
    await  findFlightsPage.selectOneWayCheckbox();
    await  findFlightsPage.openCalendar();
    await  findFlightsPage.chooseDepartureDate();
    await  findFlightsPage.clickOnSearchButton();
  }

  async selectFlight() {
    await selectFlightPage.checkErrorMessage();
    await selectFlightPage.chooseTypeOfFlight();
    await selectFlightPage.clickOnNextButton(); 
  }
}

export default new chooseFlightStep();