const BasePage = require('./basePage');

class HomePage extends BasePage {
  constructor(page) {
    super(page);
    this.menuItems = [
      { name: 'Open New Account', href: 'openaccount.htm' },
      { name: 'Accounts Overview', href: 'overview.htm' },
      { name: 'Transfer Funds', href: 'transfer.htm' },
      { name: 'Bill Pay', href: 'billpay.htm' },
      { name: 'Find Transactions', href: 'findtrans.htm' },
      { name: 'Update Contact Info', href: 'updateprofile.htm' },
      { name: 'Request Loan', href: 'requestloan.htm' },
      { name: 'Log Out', href: 'logout.htm' }
    ];
  }

  async verifyMenuItems(expect) {
    for (const item of this.menuItems) {
      await expect(this.page.locator(`#leftPanel a[href="${item.href}"]`)).toBeVisible();
    }
  }
}

module.exports = HomePage;