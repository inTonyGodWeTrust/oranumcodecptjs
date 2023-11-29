const { I } = inject();

class HomePage {

  locators = {
    topics: (topicName) => `//ul/li/a[contains(text(),'${topicName}')]`,  
    txtFindPsychics: '//input[@placeholder="Search for Expert or category"]',
    searchButton: '//button[contains(@class, "toolbar-search-button")]',
    btnAcceptAllCookies: '//*[@id="personalized-content-notification"]/div[2]/button',
    livepersons: '(//div[@class="status-text status-text--live"])',
    cookieModal: '//div[@class=`notifier-wrapper`][@data-position=`bottom`]'
  }


  async openPage(url, expectedText) {
    await I.amOnPage(url);
    await I.see(expectedText);
  }

  async acceptCookies() {
    await  I.waitForElement(this.locators.btnAcceptAllCookies);
    await  I.click(this.locators.btnAcceptAllCookies);
  }

  async makeUppercaseText(text, timeout) {
    const uppercaseText = await text.toUpperCase();
    await I.waitForText(`${uppercaseText} EXPERTS`, timeout);
  }

  async typeSearch(profileName) {
    await I.fillField(this.locators.txtFindPsychics, profileName);
    await I.click(this.locators.searchButton);
    await this.makeUppercaseText(profileName);
  }

  async chooseTopic(topicName) {
    await I.click(this.locators.topics(topicName));
    await this.makeUppercaseText(topicName);
  }

  async clickLiveperson() {
    await I.seeElement(this.locators.livepersons);
    await I.click(this.locators.livepersons + '[1]');
  }
}

module.exports = new HomePage();