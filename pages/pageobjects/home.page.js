//ts-check

//const { default: $ } = require('webdriverio/build/commands/browser/$')
const Page = require('./page')
class HomePage extends Page {
    
/**
     * define selectors using getter methods
     */

     get inputSearchBox() {return $("//div/input[placeholder='Quick Find']")} ;
   
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */

       searchBox(searchText){
        this.inputSearchBox.setValue(searchText);
     }



}
module.exports = new HomePage();
