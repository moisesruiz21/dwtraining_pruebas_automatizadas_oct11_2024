import loginPage from "../pages/login.page";
import homePage from "../pages/home.page";
import your_cartPage from "../pages/your_cart.page";
import productsData from"../data/products.data.json";

describe('buy products', () => {

    //Esto es un Hook
    beforeEach(async () => {

        await loginPage.open();
        await loginPage.fill_login(process.env.USERNAME_LOGIN, process.env.PASSWORD);
        await loginPage.submit();

    }); 

    it('add products to cart without checkout', async () => {
        await homePage.addProduct();
        await homePage.goToCart();
        await your_cartPage.isProductTextInCart(productsData.json);
    })
    it('add products to cart with checkout', async () => {
        await homePage.addProduct();
        await homePage.openCart();
        await your_cartPage.fillYourInformation(productsData.json);
    })
})