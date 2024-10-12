import loginPage from "../pages/login.page";
import homePage from "../pages/home.page";



describe('login suite', () => {
    it('successful user login', async () => {

        await loginPage.open();

        await loginPage.fill_login(process.env.USERNAME_LOGIN, process.env.PASSWORD);
        //await loginPage.fill_login('standard_user', 'secret_sauce');
        //await loginPage.fill_login(process.env.USERNAME,process.env.PASSWORD);
        
        await loginPage.submit();

        await homePage.isTitleDisplayed();


    })
})