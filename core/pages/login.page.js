// login.page.js
import Page from './page'

class LoginPage extends Page {

    get username () { return $('#user-name') }
    get password () { return $('#password') }
    get submitBtn () { return $('input[type="submit"]') }

    async open () {
        await super.open('https://www.saucedemo.com/')
    }

    async fill_login (username, password) {
        await this.username.setValue(username)
        await this.password.setValue(password)
    }

    async submit () {
        await this.submitBtn.click()
    }

}

export default new LoginPage()