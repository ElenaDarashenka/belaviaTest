import chooseHotelPage from '../../pages/hotelPages/chooseHotelPage';

class chooseHotelStep {
  
  async chooseHotel() {
    browser.get(browser.baseUrl);
    await chooseHotelPage.selectHotelsTab();
    await chooseHotelPage.clickOnToDropdown();
    await chooseHotelPage.selectValueInToDropdown();
    await chooseHotelPage.openCalendar();
    await chooseHotelPage.chooseCheckInDate();
    await chooseHotelPage.chooseCheckOutDate();
    await chooseHotelPage.clickOnSearchButton();
    await chooseHotelPage.clickOnToDropdown(); //it is nessessary
  }
}

export default new chooseHotelStep();