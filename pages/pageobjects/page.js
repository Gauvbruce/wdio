const { default: debug } = require("webdriverio/build/commands/browser/debug");

/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {

    
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    open (path) {
        return browser.url(`/`)
        
    }

    getTitle(){
       // browser.debug(); 
        return browser.getTitle(); 
    }

    waitUntilCondition(){
        const eleVal =  $('#input') ;
        browser.waitUntil(function(){
            return eleVal.getText()==='LOADING COMPLETE.';
            console.log(eleVal.getText()); 
        },12000, 'the element is not found ')
    }

    //add custom command
        // broswer.addCommand("submitDataViaCustomCommand", function (firstname, lastname,emailAddress,comments){
        //     if(firstname){
        //         browser.setValue("[name=first_name]", firstname);
        //     }
        //     if(lastname){
        //         browser.setValue("[name=last_name]", lastname);
        //     }
        //     if(emailAddress){
        //         browser.setValue("[name=email]", emailAddress);
        //     }
        //     if(comments){
        //         browser.setValue("[name=comments]", comments);
        //     }
        // });
   
        

}
