const BasePage = require('./basePage');

class RegistrationPage extends BasePage {
  constructor(page) {
    super(page);
    this.firstNameInput = '#customer\\.firstName';
    this.lastNameInput = '#customer\\.lastName';
    this.streetInput = '#customer\\.address\\.street';
    this.cityInput = '#customer\\.address\\.city';
    this.stateInput = '#customer\\.address\\.state';
    this.zipCodeInput = '#customer\\.address\\.zipCode';
    this.phoneNumberInput = '#customer\\.phoneNumber';
    this.ssnInput = '#customer\\.ssn';
    this.usernameInput = '#customer\\.username';
    this.passwordInput = '#customer\\.password';
    this.repeatedPasswordInput = '#repeatedPassword';
    this.registerButton = 'input[value="Register"]';
  }

  async registerUser(user) {
    await this.page.fill(this.firstNameInput, "John");
    await this.page.fill(this.lastNameInput, "Doe");
    await this.page.fill(this.streetInput, "123 Main St");
    await this.page.fill(this.cityInput, "Anytown");
    await this.page.fill(this.stateInput, "CA");
    await this.page.fill(this.zipCodeInput, "12345");
    await this.page.fill(this.phoneNumberInput, "1234567890");
    await this.page.fill(this.ssnInput, "123-45-6789");
    await this.page.fill(this.usernameInput, user.username);
    await this.page.fill(this.passwordInput, user.password);
    await this.page.fill(this.repeatedPasswordInput, user.password);
    await this.page.click(this.registerButton);
  }
}

module.exports = RegistrationPage;