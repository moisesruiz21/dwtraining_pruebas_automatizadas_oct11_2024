// home.page.js
import Page from './page'
import { expect } from "@wdio/globals";

class YourCart extends Page {

  get checkoutBtn () { return $('input[type="submit"]')}

    async isProductTextInCart(Text){
        await expect($('div.inventory_item_name')).toHaveText('Sauce Labs Backpack');
      }
    
     async CheckoutBtn () {
        await this.checkoutBtn.click()
    }


}

export default new YourCart()