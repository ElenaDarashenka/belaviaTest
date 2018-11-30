import chooseFlightStep from '../steps/flightSteps/chooseFlightStep';
import passengerInfoStep from '../steps/flightSteps/passengerInfoStep';
import baggageInfoStep from '../steps/flightSteps/baggageInfoStep';
import paymentStep from '../steps/flightSteps/paymentStep';
import testData from '../data/testData';

const { url } = testData.flightData;

describe('Book the flight with random values', () => {

  it('confirmation page should be opened', async () => {
    await chooseFlightStep.searchFlight();
    await chooseFlightStep.selectFlight();
    await passengerInfoStep.inputInfoAboutPassenger();
    await baggageInfoStep.checkBaggageInfo();
    await paymentStep.choosePaymentType();
    expect(await paymentStep.waitUrlContains(url, '"Confirmation" page is opened'));
  });
});