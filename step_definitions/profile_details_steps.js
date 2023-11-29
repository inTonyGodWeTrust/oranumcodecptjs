const { homePage, profilePage } = inject();


Given('that a live profile is open', async () => {
await homePage.clickLiveperson();
});

When('I click on the {string} button', async (button) => {
await profilePage.chooseButton(button)
});

Then('a sign up modal is showed', async () => {
await  profilePage.validateSignUpForFreeDisplayed();
});

