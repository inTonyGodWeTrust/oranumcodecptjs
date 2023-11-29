const { I } = inject();

class ProfilePage {

  locators = {
    buyCreditButton: "//div[@class='toolbar js_toolbar']/div[@data-id='buyCreditIcon']",
    favoriteButton: "//div[@class='toolbar js_toolbar']/div[@data-id='favoriteIcon']",
    diamondButton: "//div[@data-testid='surprise-OranumSurprisesDiamond_LJ']",
    privateButton: "//div[@data-arma-state='private']",
    creditsButton: "//div[@data-testid='buyCreditsBottom']",
    modalSignUp: "//div[@data-testid='mainLoginSignUpOverlayApplet']",

  }

  async chooseButton(button) {
    switch (button) {
      case 'Get Credits':
        await I.seeElement(this.locators.buyCreditButton);
        await I.click(this.locators.buyCreditButton);
        break;
      case 'Add to favorites':
        await I.seeElement(this.locators.favoriteButton);
        await  I.click(this.locators.favoriteButton);
        break;
      case 'Surprise buttons':
        await I.seeElement(this.locators.diamondButton);
        await  I.click(this.locators.diamondButton);
        break;
      case 'Call me button':
        await I.seeElement(this.locators.privateButton);
        await  I.click(this.locators.privateButton);
        break;
      case 'Buy credits button':
        await I.seeElement(this.locators.creditsButton);
        await  I.click(this.locators.creditsButton);
        break;  
    }
}

validateSignUpForFreeDisplayed() {
  I.waitForVisible(this.locators.modalSignUp);
  I.waitForText('JOIN NOW')
}

}
module.exports = new ProfilePage();