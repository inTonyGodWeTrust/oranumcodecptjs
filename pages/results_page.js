const { I } = inject();
const assert = require('assert');


class ResultsPage {

  locators = {
    numberOfPhysicsOnTopic: (topic) => `//article[@data-type="performer"]//a[contains(text(),"${topic}")]`,  
    physicsOnPage: '//article[@data-type="performer"]//div[@class="thumb-data-item--name"]'
  }

  async matchResults(topic) {
    const totalPerformers = await I.grabNumberOfVisibleElements(this.locators.physicsOnPage);
    const performersWithTopic = await I.grabNumberOfVisibleElements(this.locators.numberOfPhysicsOnTopic(topic));
    assert.equal(totalPerformers, performersWithTopic);
  }

  async validateDublication() {
    const elements = await I.grabTextFromAll(this.locators.physicsOnPage);
    const uniqueElements = [...new Set(elements)]; 
    assert.deepStrictEqual(elements, uniqueElements);
  }

  async matchContainResults(containWords) {
    const elements = await I.grabTextFromAll(this.locators.physicsOnPage);
    const containWordsLower = containWords.toLowerCase();
    for (const text of elements) {
        if (!text.toLowerCase().includes(containWordsLower)) {
          throw new Error(`no element presented`);
        } 
      }
    }
}

module.exports = new ResultsPage();