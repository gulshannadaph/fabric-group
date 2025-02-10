const BasePage = require('./basePage');

class TransferPage extends BasePage {
  constructor(page) {
    super(page);
    this.amountInput = 'input[id="amount"]';
    this.fromAccountSelect = 'select[id="fromAccountId"]';
    this.toAccountSelect = 'select[id="toAccountId"]';
    this.transferButton = 'input[value="Transfer"]';
    this.transferForm = '#transferForm';
  }

  async transferFunds(amount) {
    await this.page.click('a[href="transfer.htm"]'); // Navigate to the transfer page
    await this.page.waitForSelector(this.transferForm, { state: 'visible' }); // Wait for the transfer form to be visible
    await this.page.fill(this.amountInput, amount);
    await this.page.waitForSelector(this.fromAccountSelect); // Ensure the fromAccountSelect is available
    await this.page.selectOption(this.fromAccountSelect, { index: 0 }); // Select the first available option
    await this.page.waitForSelector(this.toAccountSelect); // Ensure the toAccountSelect is available
    await this.page.selectOption(this.toAccountSelect, { index: 0 }); // Select the first available option
    await this.page.click(this.transferButton);
  }
}

module.exports = TransferPage;
