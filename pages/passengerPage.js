import BasePage from '../pages/basePage';
import testData from '../data/testData';

const { firstName, lastName, dateOfBirth, passportNumber, expirationDate, phoneNumber, email } = testData.flightData;

class passengerPage extends BasePage {
  constructor() {
    super();
    this.titleDropdown = element(by.className(`col-4 col-mb-12 form-group`));
    this.title = element(by.xpath(`//li[@class='ui-menu-item']`));
    this.passengerFirstName = element(by.id(`p_0_firstName`));
    this.passengerLastName = element(by.id(`p_0_lastName`));
    this.passengerDateOfBirth = element(by.id(`p_0_dateOfBirth`));
    this.passengerPassportNumber = element(by.xpath(`//*[@id="passengers"]/form/div[1]/div[1]/div[5]/div[2]`));//css(`input[name='p[0].documentNumber']`));//id(`p_0_documentNumber`));
    this.passengerExpirationDate = element(by.id(`p_0_passportDateOfExpiry`));
    this.passengerPhoneNumber = element(by.id(`phoneNumber`));
    this.passengerEmail = element(by.id(`email`));
    this.nextButton = element(by.css(`button[type='submit']`));
  }

  async openPassengersTitleDropdown() {
    await browser.driver.wait(this.isVisible(this.titleDropdown), this.timeout.xxl, "Passenger's title is not visible");
    return this.titleDropdown.click();
  }

  async chooseTitle() {
    return this.title.click();
  }

  async inputFirstName() {
    return this.passengerFirstName.sendKeys(firstName);
  }

  async inputLastName() {
    return this.passengerLastName.sendKeys(lastName);
  }

  async inputDateOfBirth() {
    return this.passengerDateOfBirth.sendKeys(dateOfBirth);
  }

  async inputPassportNumber() {
    await browser.driver.wait(this.isClickable(this.passengerPassportNumber), this.timeout.xxl, "Passenger's title is not visible");
    return this.passengerPassportNumber.sendKeys(passportNumber);
  }

  async inputExpirationDate() {
    return this.passengerExpirationDate.sendKeys(expirationDate);
  }

  async inputPhoneNumber() {
    return this.passengerPhoneNumber.sendKeys(phoneNumber);
  }

  async inputEmail() {
    return this.passengerEmail.sendKeys(email);
  }

  async clickOnNextButton() {
    await browser.wait(this.isNotVisible($('.overlay')), this.timeout.xxl, "'Overlay is displayed");
    await browser.wait(this.isClickable(this.nextButton), this.timeout.xxl, "'Next' button is not clickable");
    return this.nextButton.click();
  }
}

export default new passengerPage();