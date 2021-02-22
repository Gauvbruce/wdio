const { default: pause } = require('webdriverio/build/commands/browser/pause');
const LoginPage = require('../test/pageobjects/login.page');
const SecurePage = require('../test/pageobjects/secure.page');
const HomePage = require('../test/pageobjects/home.page');
const loginPage = require('../test/pageobjects/login.page');

//var getHomeTitle = LoginPage.getTitle() ;
beforeEach(function(){

    console.log("Inside the describe block");
})
describe('My Login application', () => {
    it('should login with valid credentials', () => {
        LoginPage.open();
        
        LoginPage.login('gauvbruce112@gmail.com', 'Salesforce@123');
        //this.timeout(20000);
        //pause(10000);

        //assert.match($(LoginPage.getTitle()), 'Home | Salesforce', 'User is on the homepage');
        
        expect(LoginPage.getTitle()).to.equal('Lightning Experience') ; 
        //(LoginPage.getTitle()).should.equal('Lightning Experience');
        //expect(SecurePage.flashAlert).toBeExisting();
     
        // expect(SecurePage.flashAlert).toHaveTextContaining(
        //    'You logged into a secure area!');
       
        pause(10000) ; 

    });
});

/* describe('test the height and width', ()=>{

it("test case - to check the get css property",()=>{
    loginPage.open('/');
    loginPage.login('gauvbruce112@gmail.com', 'Salesforce@123');


});

});
 */


