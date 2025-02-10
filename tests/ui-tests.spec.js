const { test, expect } = require("@playwright/test");
const RegistrationPage = require("../pages/registrationPage");
const HomePage = require("../pages/homePage");
const AccountPage = require("../pages/accountPage");
const TransferPage = require("../pages/transferPage");
const BillPayPage = require("../pages/billPayPage");
const FindTransactionPage = require("../pages/findTransactionPage");

test.describe("Para Bank UI Tests", () => {
  let browserContext;
  let page;
  let username;
  const password = "password123";
  let accountNumber;
  let initialBalance;
  let transferAmount = "100";

  test.beforeAll(async ({ browser }) => {
    console.log("Starting beforeAll block"); // Log message
    browserContext = await browser.newContext();
    page = await browser.newPage();
    username = `user${Date.now()}`;
    console.log(`Generated username: ${username}`); // Log generated username
    console.log(`Password: ${password}`); // Log password
    await page.goto("https://parabank.parasoft.com/");
    console.log("Opened Para Bank website"); // Log message
    await page.click('a[href="register.htm"]'); // Click the Register link
    console.log("Clicked Register link"); // Log message
    const registrationPage = new RegistrationPage(page);
    await registrationPage.registerUser({
      firstName: "John",
      lastName: "Doe",
      street: "123 Main St",
      city: "Anytown",
      state: "CA",
      zipCode: "12345",
      phoneNumber: "1234567890",
      ssn: "123-45-6789",
      username: username,
      password: password,
    });

    // Verify registration success
    await expect(page).toHaveURL(
      "https://parabank.parasoft.com/parabank/register.htm"
    );
    await expect(
      page.locator(
        "text=Your account was created successfully. You are now logged in."
      )
    ).toBeVisible();
    console.log("Completed beforeAll block"); // Log message
  });

  test("Verify global navigation menu", async () => {
    const homePage = new HomePage(page);
    await homePage.verifyMenuItems(expect);
  });

  test("Create a savings account and validate balance", async () => {
    const accountPage = new AccountPage(page);
    await accountPage.openNewAccount("SAVINGS");

    await expect(
      page.locator('h1.title:has-text("Account Opened!")')
    ).toBeVisible();

    accountNumber = await accountPage.getNewAccountId();
    console.log("Captured account number:", accountNumber); // Debugging information
    expect(accountNumber).not.toBeUndefined();

    await accountPage.navigateToAccountsOverview();
    const balanceLocator = page.locator(
      `tr:has-text("${accountNumber}") >> td:nth-child(2)`
    );
    initialBalance = await balanceLocator.first().textContent();
    console.log("Initial account balance:", initialBalance); // Debugging information
  });

  test("Transfer funds and pay bill", async () => {
    console.log("Using account number:", accountNumber); // Debugging information
    const transferPage = new TransferPage(page);
    await transferPage.transferFunds(transferAmount, 0, 0);
    await expect(
      page.locator('h1.title:has-text("Transfer Complete!")')
    ).toBeVisible({ timeout: 10000 });

    const billPayPage = new BillPayPage(page);
    await billPayPage.payBill({
      payeeName: "Utility Company",
      street: "456 Elm St",
      city: "Othertown",
      state: "TX",
      zipCode: "67890",
      phoneNumber: "0987654321",
      accountNumber: "987654321",
      amount: transferAmount,
    });
    const successMessage = page.locator(
      'h1.title:has-text("Bill Payment Complete")'
    );
    await expect(successMessage).toBeVisible({ timeout: 15000 });
    console.log("Bill Payment Complete message is visible"); // Debugging information
  });

  test("Find transactions by amount", async () => {
    console.log("The transfer amount to be searched:", transferAmount); // Debugging information

    const findTransactionPage = new FindTransactionPage(page);
    await findTransactionPage.findTransaction(transferAmount);

    const creditColIndex = await page
      .locator("table th") // Select all column headers
      .filter({ hasText: "Debit (-)" }) // Find the "Credit" column
      .evaluate((el) => Array.from(el.parentElement.children).indexOf(el)); // Get its index

    await expect(
      page
        .locator(`table tr td:nth-child(${creditColIndex})`)
        .filter({ hasText: "Funds Transfer Sent" }).first()
    ).toBeVisible();

    await expect(
      page
        .locator(`table tr td:nth-child(${creditColIndex + 1})`)
        .filter({ hasText: `$${transferAmount}.00` }).first()
    ).toBeVisible();

    console.log("Transaction Table is visible"); // Debugging information
  });

  test.afterAll(async () => {
    console.log("Starting afterAll block"); // Log message
    // Do not close the browser context
    console.log("Completed afterAll block"); // Log message
  });
});
