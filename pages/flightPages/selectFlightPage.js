import BasePage from '../basePage';
import chooseFlightStep from '../../steps/flightSteps/chooseFlightStep';

class selectFlightPage extends BasePage {
  constructor() {
    super();
    this.selectFirstFlight = element(by.xpath(`//div[contains(text(), "Economy")]`));
    this.noFlightsMessage = element(by.className(`error ui-corner-all`));
    this.noMatchesMessage = element(by.className(`no-book-rows`));
    this.flightType = element(by.css(`div.brand.sf div.fare div.choose`));
    this.nextButton = element(by.xpath(`//*[@id="select"]/div[4]/div/div[2]/button`));
  }

  async checkErrorMessage() { 

    // const isDisplayed = await browser.wait(this.isVisible(this.noFlightsMessage), this.timeout.xxl, "No flights' message is not visisble");

    //   if (isDisplayed) { 
    //     await browser.navigate().back(); 
    //     await chooseFlightStep.searchFlight();
    //   }
    //   else { 
        await browser.wait(this.isClickable(this.selectFirstFlight), this.timeout.xxl, "First flight is not clickable");
          await this.selectFirstFlight.click();
     // };
    };
  
  async chooseTypeOfFlight() {
    await browser.wait(this.isClickable(this.flightType), this.timeout.xxl, "Flight type is not clickable");
    return this.flightType.click();
  }

  async clickOnNextButton() {
    await browser.wait(this.isNotVisible($('.overlay')), this.timeout.xxl, "'Overlay is displayed");
    return this.nextButton.click();
  }
}

export default new selectFlightPage();