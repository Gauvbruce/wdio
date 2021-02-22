const { expect } = require('chai');
const { default: pause } = require('webdriverio/build/commands/browser/pause');
const LoginPage = require('../test/pageobjects/login.page');
const SecurePage = require('../test/pageobjects/secure.page');

describe('My second test', () => {
    it('should run this test', () => {
        LoginPage.open();

        LoginPage.login('gauvbruce112@gmail.com', 'Salesforce@123');
       // pause(10000);
       //assert.equal($(LoginPage.getTitle()), 'Lightning Experience', 'User is on the homepage');
        expect(LoginPage.getTitle()).to.equal('Lightning Experience');
        //expect(SecurePage.flashAlert).toBeExisting();
       // expect(SecurePage.flashAlert).toHaveTextContaining(
        //    'You logged into a secure area!');
        
    });
});

