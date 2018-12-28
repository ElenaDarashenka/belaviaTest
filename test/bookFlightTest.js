import findFlightPage from '../pages/findFlightPage';
import selectFlightPage from '../pages/selectFlightPage';
import passengerPage from '../pages/passengerPage';
import additionalBaggagePage from '../pages/additionalBaggagePage';
import paymentPage from '../pages/paymentPage';
import testData from '../data/testData';

const { urlSelectFlight, urlPassengers, urlExtras, urlPayment, urlConfirmation } = testData.flightData;

describe('Book the flight on belavia website', () => {

  it('1. Choose destination and dates for flight', async () => {
    browser.get(browser.baseUrl);
    await findFlightPage.clickOnFromDropdown();
    await findFlightPage.selectValueInFromDropdown();
    await findFlightPage.clickOnToDropdown();
    await findFlightPage.selectValueInToDropdown();
    await findFlightPage.selectOneWayCheckbox();
    await findFlightPage.openCalendar();
    await findFlightPage.chooseDepartureDate();
    await findFlightPage.clickOnSearchButton();
    expect(await findFlightPage.waitUrlContains(urlSelectFlight, '"Flight selection" page is opened'));
  });

  it('2. Select first flight', async () => {
    await selectFlightPage.selectFlight();
    await selectFlightPage.chooseTypeOfFlight();
    await selectFlightPage.clickOnNextButton();
    expect(await findFlightPage.waitUrlContains(urlPassengers, '"Passengers info" page is opened'));
  });

  it('3. Fill the Passenger info fields', async () => {
    await passengerPage.openPassengersTitleDropdown();
    await passengerPage.chooseTitle();
    await passengerPage.inputFirstName();
    await passengerPage.inputLastName();
    await passengerPage.inputDateOfBirth();
    await passengerPage.inputPassportNumber();
    await passengerPage.inputExpirationDate();
    await passengerPage.inputPhoneNumber();
    await passengerPage.inputEmail();
    await passengerPage.clickOnNextButton();
    expect(await findFlightPage.waitUrlContains(urlExtras, '"Additional baggage" page is opened'));
  });

  it('4. Check baggage info', async () => {
    await additionalBaggagePage.waitForYourSelectionTitle();
    await additionalBaggagePage.clickOnNextButton();
    expect(await findFlightPage.waitUrlContains(urlPayment, '"Payment" page is opened'));
  });

  it('5. Choose payment type', async () => {
    await paymentPage.checkRulesCheckbox();
    await paymentPage.clickOnNextButton();
    expect(await findFlightPage.waitUrlContains(urlConfirmation, '"Confirmation" page is opened'));
  });
});