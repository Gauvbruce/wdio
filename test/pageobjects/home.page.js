//ts-check

//const { default: $ } = require('webdriverio/build/commands/browser/$')
var Page = require('../pageobjects/page')
class HomePage extends Page {
    
/**
     * define selectors using getter methods
     */

     get inputSearchBox() {return $("//div/input[@class='filter-box input']")} ;
   
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

       searchBox(searchText){
        this.inputSearchBox.setValue(searchText);
     }



}
module.exports = new HomePage();
