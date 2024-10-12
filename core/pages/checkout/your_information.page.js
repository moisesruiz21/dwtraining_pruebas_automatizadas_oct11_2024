// home.page.js
import Page from './page'
import { expect } from "@wdio/globals";

class YourInformation extends Page {

    get firstName () { return $('first-name')}    
    get lastName () { return $('last-name')}    
    get zipCode () { return $('postal-code')}    
    get continueBtn () { return $('input[type="submit"]')}    

    
    async fillYourInformation(firstname, lastname, zipcode){
            await this.firstName.setValue(firstname)
            await this.lastName.setValue(lastname)
            await this.zipCode.setValue(zipcode)
      }
    async continueCheckoutBtn () {
        await this.continueBtn.click()
    }

}

export default new YourInformation()