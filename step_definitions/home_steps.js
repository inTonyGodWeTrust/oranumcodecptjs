const { homePage, resultsPage } = inject();

Given('Oranum site is open', async () => {
await homePage.openPage("/", 'Oranum.com');
await homePage.acceptCookies();
});

When('I select the topic "{word}"', async (topicName) => {
await homePage.chooseTopic(topicName);
});

When('I type "{word}" on search', async (name) => {
await homePage.typeSearch(name);
});

