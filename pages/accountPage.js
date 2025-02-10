const BasePage = require('./basePage');

class AccountPage extends BasePage {
  constructor(page) {
    super(page);
    this.openNewAccountButton = 'text=Open New Account';
    this.accountTypeSelect = 'select[id="type"]';
    this.openAccountButton = 'input[value="Open New Account"]';
    this.newAccountId = '#newAccountId';
    this.accountsOverviewLink = 'text=Accounts Overview';
  }

  async openNewAccount(accountType) {
    await this.page.click(this.openNewAccountButton);
    await this.page.selectOption(this.accountTypeSelect, accountType);
    await this.page.hover(this.openAccountButton); // don't remove this click is not working as expected
    await this.page.waitForTimeout(500);
    await this.page.click(this.openAccountButton);
  }

  async getNewAccountId() {
    return await this.page.locator(this.newAccountId).textContent();
  }

  async navigateToAccountsOverview() {
    await this.page.click(this.accountsOverviewLink);
  }
}

module.exports = AccountPage;