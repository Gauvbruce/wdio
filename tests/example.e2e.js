const { default: pause } = require('webdriverio/build/commands/browser/pause');
const LoginPage = require('../pages/pageobjects/login.page');
const SecurePage = require('../pages/pageobjects/secure.page');
const HomePage = require('../pages/pageobjects/home.page');
const loginPage = require('../pages/pageobjects/login.page');
const util = require('../util/common');
const { assert } = require('chai');

//var getHomeTitle = LoginPage.getTitle() ;
let userName ='gauvbruce112@gmail.com';
let password = 'Salesforce@123'

describe.only('My Login application', () => {
    
    
    beforeEach(() => {
        browser.maximizeWindow();
        //browser.setWindowSize(1280, 870);
      })


    it('should login with valid credentials', () => {
        AllureReporter.addTestId("https://jiralink/browse/.... ")
        AllureReporter.addFeature("Login")
       
        LoginPage.open();
        
        LoginPage.login(userName, password);
        //this.timeout(20000);
        //pause(10000);

        //assert.match($(LoginPage.getTitle()), 'Home | Salesforce', 'User is on the homepage');
        browser.setTimeout({ 'pageLoad': 10000 })
        
        expect(LoginPage.getTitle()).to.equal('Lightning Experience') ;
       
        //(LoginPage.getTitle()).should.equal('Lightning Experience');
        //expect(SecurePage.flashAlert).toBeExisting();
     
        // expect(SecurePage.flashAlert).toHaveTextContaining(
        //    'You logged into a secure area!');
       //this.timeout(20000);
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
describe("test API call",()=>{
    it('This is a API test',()=>{

        let res = request('GET', 'http://jsonplaceholder.typicode.com/posts/1/comments');
        let contactusDetails = JSON.parse(res.getBody().toString('utf8'));
        contactusDetails.foreach(function(contactusDetail)
        {
            console.log('-----------------------#############################'+contactusDetail.id);
    
        })

    })

    it('ALter the width of the video', ()=>{
        var videowidth  = browser.execute(function(){
            let video = document.querySelector('#video');
            return video.style.width = "300px";

        })
    
    })   
} 


);

