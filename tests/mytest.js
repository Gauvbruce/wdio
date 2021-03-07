const { expect } = require('chai');
const { default: pause } = require('webdriverio/build/commands/browser/pause');
const loginPage = require('../pages/pageobjects/login.page');
const LoginPage = require('../pages/pageobjects/login.page');
const SecurePage = require('../pages/pageobjects/secure.page');

describe('My second test', () => {

    beforeEach(() => {
        browser.maximizeWindow();
        //browser.setWindowSize(1280, 870);
      })



    it('should run this test', () => {
        LoginPage.open();

        LoginPage.login('gauvbruce112@gmail.com', 'Salesforce@123');
       // pause(10000);
       //assert.equal($(LoginPage.getTitle()), 'Lightning Experience', 'User is on the homepage');
       //browser.setTimeout({ 'pageLoad': 10000 })
       expect(LoginPage.getTitle()).to.equal('Lightning Experience');
        //AllureReporter(loginPage.getTitle());
        //expect(SecurePage.flashAlert).toBeExisting();
       // expect(SecurePage.flashAlert).toHaveTextContaining(
        //    'You logged into a secure area!');
        
    });
});

