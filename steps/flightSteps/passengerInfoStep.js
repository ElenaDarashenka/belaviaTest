import passengerPage from '../../pages/flightPages/passengerPage';

class passengerInfoStep {

  async inputInfoAboutPassenger() {
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
  }
}

export default new passengerInfoStep();