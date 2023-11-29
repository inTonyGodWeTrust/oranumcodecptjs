const { homePage, resultsPage } = inject();

Then('{string} contains relevant psychics and no dublication', async (topic) => {
await resultsPage.matchResults(topic)
await resultsPage.validateDublication()
});

Then('results contain "{word}"', async (containWords) => {
await resultsPage.matchContainResults(containWords)
});



