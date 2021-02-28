const Page = require('./page');
const util = require('../../util/elementUtil');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    
    //get inputUsername() { return $('#username') }
    get inputUsername() { return $("/html//input[@id='username']") }
    get inputPassword() { return $('#password') }
    get btnSubmit() { return $('input[type="submit"]') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login(username, password) {
        util.doSetValue(this.inputUsername,username);
        util.doSetValue(this.inputPassword, password);
        util.doClick(this.btnSubmit);
      //  this.inputUsername.setValue(username);
      //  this.inputPassword.setValue(password);
      //  this.btnSubmit.click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open('login');
    }

    getTitle() {
        return super.getTitle();

    }
}

module.exports = new LoginPage();
