const BasePage = require('./basePage');

class BillPayPage extends BasePage {
  constructor(page) {
    super(page);
    this.payeeNameInput = 'input[name="payee.name"]';
    this.streetInput = 'input[name="payee.address.street"]';
    this.cityInput = 'input[name="payee.address.city"]';
    this.stateInput = 'input[name="payee.address.state"]';
    this.zipCodeInput = 'input[name="payee.address.zipCode"]';
    this.phoneNumberInput = 'input[name="payee.phoneNumber"]';
    this.accountNumberInput = 'input[name="payee.accountNumber"]';
    this.verifyAccountInput = 'input[name="verifyAccount"]';
    this.amountInput = 'input[name="amount"]';
    this.fromAccountSelect = 'select[name="fromAccountId"]';
    this.sendPaymentButton = 'input[value="Send Payment"]';
  }

  async payBill(billDetails) {
    await this.page.click('a[href="billpay.htm"]'); // Navigate to the bill pay page
    await this.page.fill(this.payeeNameInput, billDetails.payeeName);
    await this.page.fill(this.streetInput, billDetails.street);
    await this.page.fill(this.cityInput, billDetails.city);
    await this.page.fill(this.stateInput, billDetails.state);
    await this.page.fill(this.zipCodeInput, billDetails.zipCode);
    await this.page.fill(this.phoneNumberInput, billDetails.phoneNumber);
    await this.page.fill(this.accountNumberInput, billDetails.accountNumber);
    await this.page.fill(this.verifyAccountInput, billDetails.accountNumber);
    await this.page.fill(this.amountInput, billDetails.amount);
    console.log('Waiting for fromAccountId dropdown to be available'); // Debugging information
    await this.page.waitForSelector(this.fromAccountSelect, { timeout: 20000 }); // Ensure the dropdown is available
    console.log('fromAccountId dropdown is available'); // Debugging information
    await this.page.selectOption(this.fromAccountSelect, { index: 0 }); // Select the first available option
    console.log('Selected fromAccountId option'); // Debugging information
    await this.page.waitForSelector(this.sendPaymentButton, { state: 'visible' }).then((result) => {
      console.log('Send Payment button appeared'); // Debugging information
    }) // Ensure the sendPaymentButton is visible

    await this.page.hover(this.sendPaymentButton); //don't remove this. click() is not working as expected
    await this.page.waitForTimeout(500); 
    await this.page.click(this.sendPaymentButton);

  }
}

module.exports = BillPayPage;
