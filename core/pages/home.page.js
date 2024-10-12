// home.page.js
import Page from './page'
import { expect } from "@wdio/globals";

class HomePage extends Page {

    //get title () { return $('span.title')}

    get productBtn () { return $('#add-to-cart-sauce-labs-backpack') }
    get cartBtn () { return $('a.shopping_cart_link') }

    async isTitleDisplayed(){
        await expect($('span.title')).toBeDisplayed();
      }
    async addProduct(){
      await this.productBtn.click();
      }
    async goToCart(){
      await this.cartBtn.click();
      }

}

export default new HomePage()