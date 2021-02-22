const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');


describe('My Login application', () => {
    it('should login with valid credentials', () => {
        LoginPage.open();

        LoginPage.login('gauvbruce112@gmail.com', 'Salesforce@123');
        expect(SecurePage.flashAlert).toBeExisting();
        expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
            
    });
});


