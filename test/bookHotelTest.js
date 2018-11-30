import chooseHotelStep from '../steps/hotelSteps/chooseHotelStep';
import { browser } from 'protractor';
import testData from '../data/testData';
import checkBookingPage from '../pages/hotelPages/checkBookingPage';

const { url } = testData.hotelData;

describe('Choose parameters for hotel booking and check redirection to booking.com', () => {

  it('"Booking.com website should be opened"', async () => {
    await chooseHotelStep.chooseHotel();
    await checkBookingPage.switchToSecondTab();
    expect(await browser.driver.getCurrentUrl()).toContain(url, 'Current URL is not correct');
  });
});

