import BasePage from '../basePage';

class checkBookingPage extends BasePage {

  async switchToSecondTab() {
    await browser.getAllWindowHandles()
      .then(async (handles) => {
        const newWindowHandle = handles[handles.length - 1];
        await browser.switchTo().window(newWindowHandle);
      });
  };
};


export default new checkBookingPage();