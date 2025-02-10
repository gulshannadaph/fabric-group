const BasePage = require("./basePage");
import {findTransactionsByAmountAPI} from "../utils/findTransactionsUtils";

class FindTransactionPage extends BasePage {
  constructor(page) {
    super(page);
    this.amountInput = 'input[id="amount"]';
    this.findTransactionButton = 'button[id="findByAmount"]';
  }

  async findTransaction(amount) {
    await this.page.click('a[href="findtrans.htm"]'); // Navigate to the transfer page
    await this.page.fill(this.amountInput, amount);

    const selectVal = await this.page.selectOption('select[id="accountId"]', {
      index: 0,
    });
    const accountId = selectVal[0];

    console.log(findTransactionsByAmountAPI(accountId, Number(amount)));

    const [response] = await Promise.all([
      this.page.waitForResponse(
        (response) =>
          response
            .url()
            .includes(findTransactionsByAmountAPI(accountId, Number(amount))) &&
          response.status() === 200
      ),
      this.page.click(this.findTransactionButton),
    ]);
  }
}

module.exports = FindTransactionPage;
