//@ts-check
class ElementUtil {

    doClick(element) {
        element.waitForDisplayed()
        element.click()
    }

    doSetValue(element, value) {
        element.waitForDisplayed()
        element.setValue(value)
    }

    doGetText(element) {
        element.waitForDisplayed()
        return element.getText()
    }

    doIsDisplayed(element) {
        element.waitForDisplayed()
        return element.isDisplayed()
    }

    /* doGetPageTitle(pageTitle) {
        browser.waitUntil(function () {
            return (browser.getTitle() === pageTitle)
        }, 10000, 'title not displayed after the given time'
        )
        return browser.getTitle()
    } */

    waitForValue(element){
        element.waitForValue(2000);

    }

    // executeJavascriptCommands() {
    //     browser.execute(()=>{
    //         console.log('outputted inside the console window');
    //     })
    // }
    


}

module.exports = new ElementUtil()
