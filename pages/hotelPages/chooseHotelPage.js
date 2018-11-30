import BasePage from '../basePage';

class chooseHotelPage extends BasePage {
  constructor() {
    super();
    this.hotelsTab = element(by.xpath(`//ul[@class="nav-tabs"]//li[4]`));
    this.toDropdown = element(by.xpath(`//*[@id="hotelform"]/div[1]/div/div/a/i`));
    this.toDropdownList = element(by.xpath(`//ul[@id='ui-id-5']//li[${this.randomValue(1, 200)}]`));
    this.calendar = element(by.xpath(`//*[@id="hotelform"]/div[2]/div[1]`));
    this.checkInDate = element(by.xpath(`//*[@id="calendar_h"]/div/div[2]/table/tbody/tr[${this.randomValue(2, 4)}]/td[${this.randomValue(1, 7)}]`));
    this.checkOutDate = element(by.xpath(`//*[@id="calendar_h"]/div/div[2]/table/tbody/tr[${this.randomValue(2, 4)}]/td[${this.randomValue(1, 7)}]`));
    this.searchButton = element(by.id(`hotelButton`));
  }

  async selectHotelsTab() {
    await browser.wait(this.isClickable(this.hotelsTab), this.timeout.xxl, "'Hotels' tab is not clickable");
    return this.hotelsTab.click();
  }

  async clickOnToDropdown() {
    await browser.wait(this.isClickable(this.toDropdown), this.timeout.xxl, "'To' dropdown is not clickable");
    return this.toDropdown.click();
  }

  async selectValueInToDropdown() {
    return this.toDropdownList.click();
  }

  async openCalendar() {
    await browser.wait(this.isClickable(this.calendar), this.timeout.xxl, "Calendar is not clickable");
    return this.calendar.click();
  }

  async chooseCheckInDate() {
    await browser.wait(this.isClickable(this.checkInDate), this.timeout.xxl, "Check in date is not clickable");
    return this.checkInDate.click();
  }

  async chooseCheckOutDate() {
    await browser.wait(this.isClickable(this.checkOutDate), this.timeout.xxl, "Check out date is not clickable");
    return this.checkOutDate.click();
  }

  async clickOnSearchButton() {
    await browser.wait(this.isClickable(this.searchButton), this.timeout.xxl, "'Search' button is not clickable");
    return this.searchButton.click();
  }
}

export default new chooseHotelPage();