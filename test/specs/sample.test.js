const dialog = require('../../pageObjects/sample.page');
const data = require('../../data/data');
const wdio = require("webdriverio");
const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();


describe('Sample', () => {
  before(async () => {
    await (await dialog.appBtn).click();
    await (await dialog.alertDialogBtn).click();
  });

  it('Test', async () => {
    const title = await (await dialog.titleAlertDialog).getText();
    // assert(title === 'App/Alert Dialogs', "title is not Chai");
    await assert.equal(title, 'App/Alert Dialogs', 'title is not correct title');
  });

  

  afterEach(() => {
    driver.reset();
  });
})